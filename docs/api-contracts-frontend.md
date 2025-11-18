# API Contracts - Frontend

This document outlines the primary API interactions for the Frontend (web) component of the DeFi Staking App. The "API" in this context refers to the direct interactions with the Ethereum blockchain and deployed smart contracts via the Web3.js library.

## Endpoints/Interactions

The frontend interacts with the blockchain and smart contracts through the following key functions and methods:

*   **`loadWeb3()`**:
    *   **Purpose**: Initializes and connects to the Web3 provider, typically MetaMask injected into the browser.
    *   **Mechanism**: Detects `window.ethereum` or `window.web3` and instantiates `Web3` with the appropriate provider.

*   **`web3.eth.getAccounts()`**:
    *   **Purpose**: Retrieves the list of blockchain accounts controlled by the connected Web3 provider (e.g., MetaMask).
    *   **Returns**: An array of account addresses.

*   **`web3.eth.net.getId()`**:
    *   **Purpose**: Fetches the current network ID of the connected blockchain.
    *   **Returns**: A numeric network ID (e.g., 1 for Mainnet, 3 for Ropsten, 5777 for Ganache).

*   **Contract Instantiation**:
    *   **Purpose**: Creates JavaScript instances of deployed smart contracts (Tether, RWD, DecentralBank) using their ABI and deployed address.
    *   **Methods**:
        *   `new web3.eth.Contract(Tether.abi, tetherData.address)`
        *   `new web3.eth.Contract(RWD.abi, rwdData.address)`
        *   `new web3.eth.Contract(DecentralBank.abi, decentralBankData.address)`

*   **Token Amount Conversions**:
    *   **`window.web3.utils.fromWei(amount, 'Ether')`**:
        *   **Purpose**: Converts a value from Wei (the smallest denomination of Ether) to Ether for human-readable display.
    *   **`window.web3.utils.toWei(amount, 'Ether')`**:
        *   **Purpose**: Converts a human-readable Ether value to Wei for smart contract interactions.

*   **`decentralBank.methods.depositTokens(amount).send({ from: account })`**:
    *   **Purpose**: Initiates a transaction to deposit tokens into the DecentralBank smart contract.
    *   **Parameters**:
        *   `amount`: The amount of tokens to deposit (in Wei).
        *   `from`: The sender's blockchain account address.
    *   **Mechanism**: Sends a transaction to the blockchain.

*   **`decentralBank.methods.unstakeTokens().send({ from: account })`**:
    *   **Purpose**: Initiates a transaction to unstake tokens from the DecentralBank smart contract.
    *   **Parameters**:
        *   `from`: The sender's blockchain account address.
    *   **Mechanism**: Sends a transaction to the blockchain.

## Protocols

The primary communication protocol is **Ethereum JSON-RPC**, facilitated by the Web3.js library. This protocol allows the frontend to interact with Ethereum nodes to send transactions, call contract methods, and query blockchain state.

## Data Formats

*   **ABI (Application Binary Interface)**: Used to define the interface of smart contracts, enabling the Web3.js library to correctly encode and decode function calls and events.
*   **Wei/Ether**: Token amounts are handled in Wei for smart contract logic and converted to Ether for user display.
*   **Blockchain Addresses**: Standard Ethereum address format (e.g., `0x...`).
*   **Transaction Hashes**: Standard Ethereum transaction hash format (e.g., `0x...`).
