# ECDSA_P1
This project demonstrates the implementation of the Elliptic Curve Digital Signature Algorithm (ECDSA) within a blockchain framework. The goal is to provide a secure and efficient way to handle digital signatures and transactions, utilizing ECDSA for signing and verifying messages. 
The project includes a frontend interface featuring a digital wallet that supports key generation, message signing, and secure transfer functionalities.

Features:
Elliptic Curve Digital Signature Algorithm (ECDSA): Implements ECDSA for secure digital signatures and message verification.
Blockchain Integration: Integrates with blockchain technology to provide a secure, tamper-proof ledger for transactions.
Digital Wallet Interface: A user-friendly frontend interface for generating key pairs, signing messages, and performing secure transfers.
Message Signing and Verification: Supports signing messages with private keys and verifying signatures with public keys.
Secure Key Management: Ensures secure generation and handling of private and public keys.
Transaction Functionality: Facilitates secure transaction transfers between digital wallets.

How It Works:
Key Generation: Generate a pair of public and private keys using ECDSA.
Message Signing: Use the private key to sign a message, ensuring its authenticity and integrity.
Message Verification: Verify the signed message using the corresponding public key.
Transaction Transfer: Transfer signed transactions securely within the blockchain network, ensuring each transaction is authenticated and validated.

### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 
