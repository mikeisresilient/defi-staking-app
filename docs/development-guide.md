# Development Guide

This document outlines the development and operational information for the DeFi Staking App, covering both the Frontend (web) and Smart Contracts (backend) components.

## 1. Frontend (Web) Development

The frontend is a React application built using `create-react-app`.

### Prerequisites

*   **Node.js**: A JavaScript runtime environment.
*   **npm** (Node Package Manager) or **Yarn**: Package managers for JavaScript.

### Installation Steps

1.  **Navigate to the project root directory.**
2.  **Install dependencies**:
    ```bash
    npm install
    # OR
    yarn install
    ```

### Environment Setup

*   **Environment Variables**: The application can utilize `.env` files for environment-specific configurations. Variables prefixed with `REACT_APP_` are exposed to the client-side code. (No `.env` files were found in the repository, suggesting default configurations or external environment management).

### Available Commands

*   **`npm start`**:
    *   **Purpose**: Starts the development server.
    *   **Usage**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

*   **`npm run build`**:
    *   **Purpose**: Builds the app for production.
    *   **Usage**: Creates a `build` folder with optimized static assets. This command correctly bundles React in production mode and optimizes the build for the best performance.

*   **`npm test`**:
    *   **Purpose**: Runs the test runner.
    *   **Usage**: Launches the test runner in interactive watch mode.

## 2. Smart Contracts (Backend) Development

The smart contracts are developed using Solidity and managed with the Truffle Suite.

### Prerequisites

*   **Node.js**: A JavaScript runtime environment.
*   **npm** (Node Package Manager) or **Yarn**: Package managers for JavaScript.
*   **Truffle**: The Truffle development framework. It can be installed globally (`npm install -g truffle`) or used as a local dependency.
*   **Ganache**: A personal blockchain for Ethereum development, used to deploy contracts to a local test network.

### Installation Steps

1.  **Navigate to the project root directory.**
2.  **Install dependencies**:
    ```bash
    npm install
    # OR
    yarn install
    ```
3.  **Install Truffle globally (if not already installed)**:
    ```bash
    npm install -g truffle
    ```
4.  **Install Ganache (if not already installed)**: Download and install the Ganache desktop application or use `ganache-cli`.

### Environment Setup

*   **Local Test Network**: Ensure Ganache is running and configured to match the network settings in `truffle-config.js` (typically `development` network).

### Available Commands

*   **`truffle compile`**:
    *   **Purpose**: Compiles the Solidity smart contracts.
    *   **Usage**: Compiles all `.sol` files in the `contracts/` directory.

*   **`truffle migrate`**:
    *   **Purpose**: Deploys the compiled smart contracts to the configured Ethereum network.
    *   **Usage**: Runs the migration scripts in the `migrations/` directory. Specify a network using `--network <network_name>`.

*   **`truffle test`**:
    *   **Purpose**: Runs the smart contract tests.
    *   **Usage**: Executes test files in the `test/` directory.

*   **`truffle develop`**:
    *   **Purpose**: Starts a development console with a built-in personal blockchain.
    *   **Usage**: Provides a command-line interface to interact with your contracts and blockchain.

## 3. CI/CD and Deployment

No explicit CI/CD pipeline configurations (e.g., `.github/workflows`, `.gitlab-ci.yml`) were found in the repository. Deployment for the frontend typically involves serving the `build/` folder, while smart contract deployment is managed via Truffle migrations.

## 4. Contribution Guidelines

No dedicated contribution guidelines (e.g., `CONTRIBUTING.md`) were found in the repository.
