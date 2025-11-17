# Project Overview

This document provides a high-level overview of the DeFi Staking App, outlining its purpose, architecture, and key technologies.

## 1. Project Name and Purpose

*   **Project Name**: DeFi Staking App
*   **Purpose**: To provide a fullstack decentralized application (dApp) where users can stake mock Tether tokens (mUSDT) and earn reward tokens (RWD). The application demonstrates core DeFi staking functionalities, including token deposits, withdrawals, and reward calculations.

## 2. Executive Summary

The DeFi Staking App is a multi-part decentralized application designed to showcase a token staking mechanism. It comprises a user-friendly frontend built with React, enabling seamless interaction with the underlying smart contracts. The backend logic is encapsulated within Solidity smart contracts, deployed and managed using the Truffle framework on local Ethereum test networks. Users can connect their MetaMask wallet, view token balances, stake and unstake tokens, and track an airdrop countdown. The architecture is modular, allowing for future extensions such as multiple staking pools, diverse reward schemes, or advanced analytics.

## 3. Technology Stack Summary

| Component        | Primary Technologies                               | Key Frameworks/Libraries                               |
| :--------------- | :------------------------------------------------- | :----------------------------------------------------- |
| **Frontend**     | JavaScript, TypeScript, HTML, CSS                  | React, Web3.js, React-Bootstrap, Bootstrap             |
| **Smart Contracts** | Solidity, JavaScript                               | Truffle, Web3.js, Chai                                 |

## 4. Architecture Type Classification

The project is classified as a **Multi-part Decentralized Application (dApp)**. It distinctly separates the client-side user interface from the on-chain smart contract logic, with Web3.js acting as the primary integration layer.

## 5. Repository Structure

The repository is organized to support a multi-part application, with dedicated directories for frontend source code (`src/`), smart contract definitions (`src/contracts/`), and Truffle migration scripts (`migrations/`). A detailed breakdown can be found in `source-tree-analysis.md`.

## 6. Getting Started

For detailed instructions on setting up the development environment, installing dependencies, and running the application (both frontend and smart contracts), please refer to the `development-guide.md` document.
