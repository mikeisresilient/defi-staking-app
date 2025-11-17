# Deployment Configuration - Smart Contracts

This document outlines the deployment-related configurations and processes for the Smart Contracts (backend) component of the DeFi Staking App. The project leverages the Truffle Suite for smart contract development, compilation, and deployment.

## 1. Truffle Framework

*   **Tool**: Truffle
*   **Purpose**: Truffle is a development environment, testing framework, and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM). It simplifies the process of building and deploying decentralized applications.

## 2. Configuration File

*   **File**: `truffle-config.js`
*   **Purpose**: This JavaScript file defines the core configuration for the Truffle project. It typically includes:
    *   **Networks**: Definitions for various Ethereum networks (e.g., development, Ropsten, Mainnet, local test networks like Ganache). Each network specifies the host, port, network ID, and optionally a gas price or from address.
    *   **Compilers**: Configuration for the Solidity compiler (solc), including version and optimizer settings.
    *   **Directories**: Custom paths for contracts, migrations, and tests if they deviate from the default Truffle structure.

## 3. Migration Scripts

*   **Directory**: `migrations/`
*   **Purpose**: This directory contains JavaScript files that manage the deployment of smart contracts to the Ethereum blockchain. Each file is numbered (e.g., `1_initial_migrations.js`, `2_deploy_contracts.js`) to ensure they are executed in a specific order.
*   **Functionality**: Migration scripts typically:
    *   Deploy contracts using `deployer.deploy()`.
    *   Link libraries to contracts.
    *   Interact with deployed contracts (e.g., setting initial values, transferring ownership).
*   **Example Files**:
    *   `1_initial_migrations.js`: Often deploys the `Migrations.sol` contract itself.
    *   `2_deploy_contracts.js`: Deploys the application-specific contracts like `Tether`, `RWD`, and `DecentralBank`.

## 4. Deployment Process

*   **Command**: `truffle migrate`
*   **Description**: When executed, Truffle reads the `truffle-config.js` file, connects to the specified network, compiles the Solidity contracts, and then runs the migration scripts in numerical order.
*   **Networks**: The user mentioned deployment "on local test networks," implying the use of a local blockchain environment (e.g., Ganache) configured in `truffle-config.js`.

## 5. Smart Contract Addresses

*   **Output**: After a successful migration, Truffle typically outputs the addresses of the deployed contracts to the console and updates the `.json` ABI files in `src/truffle_abis/` with the deployed network information. These addresses are then used by the frontend to interact with the contracts.
