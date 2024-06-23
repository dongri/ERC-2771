const tokenAddress = "0x822deFf18dc849AFF4BD0c03818B3824DFDe3427";     // SimpleToken address
const forwarderAddress = "0x33DDac9CB0BCa2F0610ff8C4B567838B62B34619"; // SimpleForwarder address
const recipientAddress = "0xD5Dc16f9A85d26582c3Ed172761c5b46F1346947"; // Bob address

const tokenAbi = [{"type":"constructor","inputs":[{"name":"name","type":"string","internalType":"string"},{"name":"symbol","type":"string","internalType":"string"},{"name":"trustedForwarder","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"allowance","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"approve","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"balanceOf","inputs":[{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"view"},{"type":"function","name":"isTrustedForwarder","inputs":[{"name":"forwarder","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"transfer","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"trustedForwarder","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"event","name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"spender","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"ERC20InsufficientAllowance","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"allowance","type":"uint256","internalType":"uint256"},{"name":"needed","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC20InsufficientBalance","inputs":[{"name":"sender","type":"address","internalType":"address"},{"name":"balance","type":"uint256","internalType":"uint256"},{"name":"needed","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC20InvalidApprover","inputs":[{"name":"approver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidReceiver","inputs":[{"name":"receiver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidSender","inputs":[{"name":"sender","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidSpender","inputs":[{"name":"spender","type":"address","internalType":"address"}]}];
const forwarderAbi = [{"type":"constructor","inputs":[{"name":"name","type":"string","internalType":"string"}],"stateMutability":"nonpayable"},{"type":"function","name":"eip712Domain","inputs":[],"outputs":[{"name":"fields","type":"bytes1","internalType":"bytes1"},{"name":"name","type":"string","internalType":"string"},{"name":"version","type":"string","internalType":"string"},{"name":"chainId","type":"uint256","internalType":"uint256"},{"name":"verifyingContract","type":"address","internalType":"address"},{"name":"salt","type":"bytes32","internalType":"bytes32"},{"name":"extensions","type":"uint256[]","internalType":"uint256[]"}],"stateMutability":"view"},{"type":"function","name":"execute","inputs":[{"name":"request","type":"tuple","internalType":"struct ERC2771Forwarder.ForwardRequestData","components":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"},{"name":"gas","type":"uint256","internalType":"uint256"},{"name":"deadline","type":"uint48","internalType":"uint48"},{"name":"data","type":"bytes","internalType":"bytes"},{"name":"signature","type":"bytes","internalType":"bytes"}]}],"outputs":[],"stateMutability":"payable"},{"type":"function","name":"executeBatch","inputs":[{"name":"requests","type":"tuple[]","internalType":"struct ERC2771Forwarder.ForwardRequestData[]","components":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"},{"name":"gas","type":"uint256","internalType":"uint256"},{"name":"deadline","type":"uint48","internalType":"uint48"},{"name":"data","type":"bytes","internalType":"bytes"},{"name":"signature","type":"bytes","internalType":"bytes"}]},{"name":"refundReceiver","type":"address","internalType":"address payable"}],"outputs":[],"stateMutability":"payable"},{"type":"function","name":"nonces","inputs":[{"name":"owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"verify","inputs":[{"name":"request","type":"tuple","internalType":"struct ERC2771Forwarder.ForwardRequestData","components":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"},{"name":"gas","type":"uint256","internalType":"uint256"},{"name":"deadline","type":"uint48","internalType":"uint48"},{"name":"data","type":"bytes","internalType":"bytes"},{"name":"signature","type":"bytes","internalType":"bytes"}]}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"event","name":"EIP712DomainChanged","inputs":[],"anonymous":false},{"type":"event","name":"ExecutedForwardRequest","inputs":[{"name":"signer","type":"address","indexed":true,"internalType":"address"},{"name":"nonce","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"success","type":"bool","indexed":false,"internalType":"bool"}],"anonymous":false},{"type":"error","name":"AddressInsufficientBalance","inputs":[{"name":"account","type":"address","internalType":"address"}]},{"type":"error","name":"ERC2771ForwarderExpiredRequest","inputs":[{"name":"deadline","type":"uint48","internalType":"uint48"}]},{"type":"error","name":"ERC2771ForwarderInvalidSigner","inputs":[{"name":"signer","type":"address","internalType":"address"},{"name":"from","type":"address","internalType":"address"}]},{"type":"error","name":"ERC2771ForwarderMismatchedValue","inputs":[{"name":"requestedValue","type":"uint256","internalType":"uint256"},{"name":"msgValue","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC2771UntrustfulTarget","inputs":[{"name":"target","type":"address","internalType":"address"},{"name":"forwarder","type":"address","internalType":"address"}]},{"type":"error","name":"FailedInnerCall","inputs":[]},{"type":"error","name":"InvalidAccountNonce","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"currentNonce","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"InvalidShortString","inputs":[]},{"type":"error","name":"StringTooLong","inputs":[{"name":"str","type":"string","internalType":"string"}]}];

document.getElementById('signButton').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      console.log('MetaMask connected');
    } catch (error) {
      console.error(error);
    }
  } else {
    alert('MetaMask is not installed');
  }

  const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
  const forwarderContract = new web3.eth.Contract(forwarderAbi, forwarderAddress);

  const accounts = await web3.eth.getAccounts();
  const from = accounts[0];
  const to = recipientAddress;
  const amount = web3.utils.toWei('1', 'ether'); // 1 tokens

  const transferData = tokenContract.methods.transfer(to, amount).encodeABI();

  const deadline = Math.floor(Date.now() / 1000) + 3600; // 60 minutes
  const nonce = await forwarderContract.methods.nonces(from).call();

  const message = {
    from: from,
    to: tokenAddress,
    value: 0,
    gas: 200000,
    nonce: parseInt(nonce),
    deadline: deadline,
    data: transferData,
  };

  // EIP-712 Typed Data for signing
  const data = {
    types: {
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'address' },
      ],
      ForwardRequest: [
        { name: 'from', type: 'address' },
        { name: 'to', type: 'address' },
        { name: 'value', type: 'uint256' },
        { name: 'gas', type: 'uint256' },
        { name: 'nonce', type: 'uint256' },
        { name: 'deadline', type: 'uint48' },
        { name: 'data', type: 'bytes' },
      ],
    },
    domain: {
      name: 'SimpleForwarder',
      version: '1',
      chainId: await web3.eth.getChainId(),
      verifyingContract: forwarderAddress,
    },
    primaryType: 'ForwardRequest',
    message: message,
  };

  const signature = await ethereum.request({
    method: 'eth_signTypedData_v4',
    params: [from, JSON.stringify(data)],
  });

  const forwardRequest = {
    request: message,
    signature: signature,
  };

  fetch('http://localhost:3001/send_request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(forwardRequest),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Transaction sent:', data);
    document.getElementById('result').innerText = `TxHash: ${data.txHash}`;
  })
  .catch(error => {
    console.error('Error sending transaction:', error);
  });
});
