# Architecture - Frontend

This document details the architectural overview of the Frontend (web) component of the DeFi Staking App. It is a React-based decentralized application (dApp) interface designed to interact with Ethereum smart contracts.

## 1. Executive Summary

The frontend serves as the user-facing interface for the DeFi Staking App. It enables users to connect their MetaMask wallet, view their token balances, stake and unstake tokens, and observe an airdrop countdown. Built with React, it leverages Web3.js for seamless interaction with the Ethereum blockchain and deployed smart contracts.

## 2. Technology Stack

*   **Framework**: React (JavaScript/TypeScript)
*   **Language**: JavaScript (Primary), TypeScript (Type definitions for dependencies)
*   **Web3 Library**: Web3.js (v1.2.11)
*   **UI Libraries**: React-Bootstrap, Bootstrap (v4.3.1)
*   **Particle Effects**: React-Particles-JS (v3.5.3), React-TSParticles (v1.31.2)
*   **Build Tool**: Create React App (`react-scripts` v2.1.3)

## 3. Architecture Pattern

The frontend follows a **Component-Based Architecture** with a clear **Layered Design**:

*   **Presentation Layer**: Consists of React components (`App`, `Main`, `Navbar`, `Airdrop`, `ParticleSettings`) responsible for rendering the UI and handling user input.
*   **Application Layer**: Manages the application's state and orchestrates interactions. The `App.js` component acts as the central hub for Web3 initialization, contract instantiation, and global state management.
*   **Web3 Integration Layer**: Utilizes Web3.js to abstract away direct blockchain communication, providing an interface to interact with Ethereum nodes and smart contracts.

## 4. Data Architecture

The data architecture is primarily client-side, with state derived from and synchronized with the blockchain:

*   **Blockchain State**: User account (`address`), token balances (`tetherBalance`, `rwdBalance`), and staking balance (`stakingBalance`) are fetched directly from the blockchain via Web3.js calls to smart contracts.
*   **Local UI State**: Managed within React components (`this.state` in `App.js`) to handle loading indicators, form inputs, and other temporary UI-specific data.
*   **Contract Instances**: JavaScript objects representing deployed smart contracts (`tether`, `rwd`, `decentralBank`) are held in state to facilitate method calls.

## 5. API Design (Blockchain Interaction)

The frontend's "API" interaction is exclusively with the Ethereum blockchain and deployed smart contracts:

*   **Web3 Provider**: Connects to an injected Web3 provider (e.g., MetaMask) to access user accounts and sign transactions.
*   **Contract Methods**: Calls public/external functions of `Tether`, `RWD`, and `DecentralBank` contracts for actions like `depositTokens`, `unstakeTokens`, `transfer`, `approve`, and for querying balances.
*   **Data Encoding**: Uses contract ABIs (from `src/truffle_abis/`) to correctly encode function calls and decode return values.

## 6. Component Overview

Key UI components include:

*   **`App.js`**: Root component, Web3 setup, state management, renders `Navbar` and `Main`.
*   **`Navbar.js`**: Displays app title and connected user's Ethereum address.
*   **`Main.js`**: Core staking interface (deposit, unstake, balance display).
*   **`Airdrop.js`**: Manages and displays the airdrop countdown.
*   **`ParticleSettings.js`**: Configuration for background particle animations.

## 7. Source Tree

The frontend source code resides primarily within the `src/` directory. Refer to `source-tree-analysis.md` for a detailed breakdown. Key areas include `src/components/` for UI components and `src/index.js` as the application entry point.

## 8. Development Workflow

*   **Prerequisites**: Node.js, npm/Yarn.
*   **Installation**: `npm install`.
*   **Local Development**: `npm start` (starts development server).
*   **Build**: `npm run build` (creates production-ready static assets in `build/`).
*   **Testing**: `npm test` (runs React test suite).

## 9. Deployment Architecture

The frontend is deployed as a static web application:

*   **Build Output**: The `npm run build` command generates static HTML, CSS, and JavaScript files in the `build/` directory.
*   **Hosting**: These static assets can be served by any standard web server (e.g., Nginx, Apache) or static site hosting service (e.g., Netlify, Vercel).
*   **Environment Variables**: Managed via `.env` files (though none explicitly found, standard practice).

## 10. Testing Strategy

The frontend utilizes the testing setup provided by `create-react-app`, which typically includes Jest and React Testing Library for unit and integration testing of React components.
