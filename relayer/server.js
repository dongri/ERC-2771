const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Web3 = require('web3');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

// from .env file
const RPC_URL = process.env.SEPOLIA_RPC_URL;
const FORWARDER_ADDRESS = process.env.FORWARDER_ADDRESS;
const FORWARDER_ABI = process.env.FORWARDER_ABI;
const RELAYER_PRIV_KEY = process.env.RELAYER_PRIV_KEY;

const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));

const forwarderAddress = FORWARDER_ADDRESS;

const forwarderAbi = JSON.parse(FORWARDER_ABI);

const forwarderContract = new web3.eth.Contract(forwarderAbi, forwarderAddress);

app.post('/send_request', async (req, res) => {
  console.log('call send_request');
  const { request, signature } = req.body;
  try {
    const message = {
      from: request.from,
      to: request.to,
      value: request.value,
      gas: request.gas,
      deadline: request.deadline,
      data: request.data,
      signature: signature
    };

    const gasLimit = await forwarderContract.methods.execute(message).estimateGas({ from: request.from });

    const tx = {
      to: forwarderAddress,
      data: forwarderContract.methods.execute(message).encodeABI(),
      gas: gasLimit,
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, RELAYER_PRIV_KEY);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log('Transaction hash:', receipt.transactionHash);
    res.send({ txHash: receipt.transactionHash });
  } catch (error) {
    console.error('Error sending transaction:', error);
    res.status(500).send({ error: 'Error sending transaction' });
  }
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
