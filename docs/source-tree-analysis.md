# Source Tree Analysis

This document provides an annotated overview of the project's directory structure, highlighting critical folders, entry points, and the organization of its multi-part architecture.

## Project Structure Overview

This project is structured as a **multi-part** application, consisting of a **Frontend (web)** built with React and **Smart Contracts (backend)** developed using Solidity and Truffle.

```
defi-staking-app-starter/
├── public/                     # Public assets for the web frontend
│   ├── favicon.ico             # Website favicon
│   └── index.html              # Main HTML entry point for the React app
├── src/                        # Source code for the Frontend (web) and Smart Contracts
│   ├── bank.png                # Asset: Bank icon
│   ├── components/             # React UI Components
│   │   ├── Airdrop.js          # Airdrop countdown component
│   │   ├── App.css             # Application-wide CSS styles
│   │   ├── App.js              # Main application component, Web3 integration, state management
│   │   ├── Main.js             # Core staking/unstaking UI
│   │   ├── Navbar.js           # Navigation bar, displays account info
│   │   └── ParticleSettings.js # Configuration for background particle animation
│   ├── contracts/              # Smart Contract source files (Solidity) - Backend part
│   │   ├── DecentralBank.sol   # Main staking contract: Manages deposits, unstaking, and reward issuance.
│   │   ├── Migrations.sol      # Truffle migration contract: Used by Truffle to track deployed contracts.
│   │   ├── RWD.sol             # Reward Token contract: ERC-20 token for rewards.
│   │   └── Tether.sol          # Mock Tether Token contract: ERC-20 token used for staking.
│   ├── eth-logo.png            # Asset: Ethereum logo
│   ├── index.js                # Main entry point for React application
│   ├── logo.png                # Asset: Application logo
│   ├── serviceWorker.js        # Progressive Web App (PWA) service worker
│   ├── tether.png              # Asset: Tether token logo
│   ├── token-logo.png          # Asset: Generic token logo
│   └── truffle_abis/           # Truffle ABIs and deployed addresses (JSON)
│       ├── DecentralBank.json  # ABI for DecentralBank contract
│       ├── Migrations.json     # ABI for Migrations contract
│       ├── RWD.json            # ABI for RWD contract
│       └── Tether.json         # ABI for Tether contract
├── migrations/                 # Truffle migration scripts - Backend part
│   ├── 1_initial_migrations.js # Deploys the Migrations.sol contract.
│   └── 2_deploy_contracts.js   # Deploys Tether, RWD, and DecentralBank contracts.
├── node_modules/               # Node.js dependencies (ignored)
├── package.json                # Project metadata and dependencies for both frontend and truffle
├── package-lock.json           # Exact dependency versions
├── truffle-config.js           # Truffle configuration for smart contract compilation and deployment
└── test/                       # Smart contract tests
    └── decentralBank.tests.js  # Tests for the DecentralBank contract
```

## Critical Folders and Entry Points

### Frontend (Web) - `src/`

*   **`src/index.js`**: The primary entry point for the React application. It initializes the React DOM and renders the root `App` component.
*   **`src/components/App.js`**: The main application component, responsible for Web3 integration, global state management, and orchestrating other UI components.
*   **`src/components/`**: Contains all reusable React UI components that form the application's user interface.
*   **`public/index.html`**: The base HTML file that serves the React application.

### Smart Contracts (Backend) - `src/contracts/` and `migrations/`

*   **`src/contracts/`**: Contains the Solidity source code for all smart contracts. These contracts define the core business logic and data structures for the DeFi staking functionality.
*   **`migrations/`**: This directory holds the Truffle migration scripts. These JavaScript files are executed in order to deploy the smart contracts to the blockchain and perform any necessary initializations.
*   **`truffle-config.js`**: The configuration file for the Truffle framework, defining networks, compilers, and other deployment settings.

## Integration Points

The Frontend and Smart Contracts parts integrate primarily through **Web3.js**. The Frontend uses `web3.js` to:
*   Connect to the user's Ethereum wallet (e.g., MetaMask).
*   Instantiate JavaScript representations of the deployed smart contracts using their ABIs (found in `src/truffle_abis/`).
*   Call public functions on the smart contracts (e.g., `depositTokens`, `unstakeTokens`, `issueTokens`).
*   Read state variables from the smart contracts (e.g., `stakingBalance`, token `balanceOf`).
*   Send transactions to the blockchain.
