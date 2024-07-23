const secp = require("ethereum-cryptography/secp256k1");
const {toHex} = require("ethereum-cryptography/utils");
//import { secp256k1 } from "ethereum-cryptography/secp256k1";
//import { toHex } from "ethereum-cryptography/utils";

//const privateKey = secp.utils.randomPrivateKey();
const privateKey = secp.secp256k1.utils.randomPrivateKey();

const publicKey = secp.secp256k1.getPublicKey(privateKey);

console.log('private key',toHex(privateKey));
console.log(`public key: ${toHex(publicKey)}`)

//private key ea43bd9f0cc4000ba98d03bbe362b048f27052ae456d0cb7e1595cedcdf40f93
//public key: 0297dd88717ddba58123d544d980d06aabc3c0cb52279178ef036d74db9d1e3a85

//private key 064922749aed2105d668d491896785a0d4f687ed4c49639f51303ebff6fb4342
//public key: 02836ad3b27206debd3df6e0bdd40402d234dc4096c7459a9230355e3d7bc06752

//private key a61c09fa9f850f555ab276c9285d4116726764438e48474077daa7cfb5a7b781
//public key: 032e786c1279d1c8ff224b23f9b17f25b5e7ecdfc11fdff17e02920b98628d3d5f