const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

const secp = require('ethereum-cryptography/secp256k1');
const {keccak256} = require('ethereum-cryptography/keccak');

app.use(cors());
app.use(express.json());

const balances = {
  "0297dd88717ddba58123d544d980d06aabc3c0cb52279178ef036d74db9d1e3a85": 100,
  "02836ad3b27206debd3df6e0bdd40402d234dc4096c7459a9230355e3d7bc06752": 50,
  "032e786c1279d1c8ff224b23f9b17f25b5e7ecdfc11fdff17e02920b98628d3d5f": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, sig:sigStringed, msg } = req.body;
  const { recipient, amount } = msg;

  
  const sig = {
    ...sigStringed,
    r: BigInt(sigStringed.r),
    s: BigInt(sigStringed.s)
  }

  const hashMessage = (message) => keccak256(Uint8Array.from(message));

  const isValid = secp.secp256k1.verify(sig, hashMessage(msg), sender) === true;
  
  if(!isValid) res.status(400).send({ message: "Bad signature!"});

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}