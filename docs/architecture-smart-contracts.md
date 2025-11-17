# Architecture - Smart Contracts

This document details the architectural overview of the Smart Contracts (backend) component of the DeFi Staking App. These contracts are developed in Solidity and managed using the Truffle Suite, forming the core decentralized logic of the application.

## 1. Executive Summary

The smart contract suite provides the foundational logic for the DeFi Staking App. It includes a central `DecentralBank` contract for managing token deposits, staking, and reward distribution, alongside ERC-20 compatible `Tether` (mock stablecoin) and `RWD` (reward token) contracts. Deployment and testing are orchestrated via the Truffle framework on local Ethereum test networks.

## 2. Technology Stack

*   **Language**: Solidity (Primary), JavaScript (for Truffle migrations and tests)
*   **Framework**: Truffle Suite (v5.1.39)
*   **Solidity Compiler**: `solc` (v0.8.6)
*   **Web3 Library**: Web3.js (v1.2.11) - used internally by Truffle
*   **Testing Frameworks**: Chai (v4.2.0), Chai-as-promised (v7.1.1), Chai-bignumber (v3.0.0)

## 3. Architecture Pattern

The smart contract architecture is inherently a **Decentralized Application (dApp)** pattern, where the contracts themselves represent the backend logic residing on the Ethereum blockchain.

*   **Modular Design**: Contracts are modular, with `DecentralBank` importing and interacting with `RWD` and `Tether` token contracts.
*   **Stateful**: Contracts maintain their state directly on the blockchain (e.g., `stakingBalance`, `balanceOf`).
*   **Event-Driven**: Contracts emit events (`Transfer`, `Approval`) to signal state changes, which can be observed by off-chain applications (like the frontend).

## 4. Data Architecture

The data architecture is entirely on-chain, managed by the state variables and mappings within the Solidity contracts:

*   **`DecentralBank`**: Stores `stakingBalance` (mapping user to staked amount), `hasStaked`, `isStaking`, and a list of `stakers`.
*   **`RWD` / `Tether`**: Store `balanceOf` (mapping user to token balance) and `allowance` (mapping owner to spender to allowed amount) as per ERC-20 standards.
*   **`Migrations`**: Stores `last_completed_migration`.

## 5. API Design (Contract Interfaces)

The "API" of the smart contracts consists of their public and external functions and events:

*   **`DecentralBank`**:
    *   **Functions**: `depositTokens(uint _amount)`, `unstakeTokens()`, `issueTokens()` (owner-only).
    *   **State Accessors**: Public state variables like `name`, `owner`, `tether`, `rwd`, `stakers`, `stakingBalance`, `hasStaked`, `isStaking`.
*   **`RWD` / `Tether`**:
    *   **Functions**: `transfer(address _to, uint256 _value)`, `approve(address _spender, uint256 _value)`, `transferFrom(address _from, address _to, uint256 _value)`.
    *   **Events**: `Transfer(address indexed _from, address indexed _to, uint256 _value)`, `Approval(address indexed _owner, address indexed _spender, uint256 _value)`.
    *   **State Accessors**: Public state variables like `name`, `symbol`, `totalSupply`, `decimals`, `balanceOf`, `allowance`.
*   **`Migrations`**:
    *   **Functions**: `setCompleted(uint completed)` (owner-only).
    *   **State Accessors**: Public state variables like `owner`, `last_completed_migration`.

## 6. Component Overview (Contracts)

*   **`DecentralBank.sol`**: The core staking logic contract.
*   **`RWD.sol`**: The ERC-20 reward token contract.
*   **`Tether.sol`**: The ERC-20 mock stablecoin contract used for staking.
*   **`Migrations.sol`**: Truffle's utility contract for managing deployment.

## 7. Source Tree

The Solidity source code is located in `src/contracts/`, and deployment scripts are in `migrations/`. Refer to `source-tree-analysis.md` for a detailed breakdown.

## 8. Development Workflow

*   **Prerequisites**: Node.js, Truffle, Ganache.
*   **Compilation**: `truffle compile`.
*   **Deployment**: `truffle migrate` (to configured networks).
*   **Local Development**: `truffle develop` (for console interaction).
*   **Testing**: `truffle test` (runs tests in `test/`).

## 9. Deployment Architecture

Smart contracts are deployed to an Ethereum-compatible blockchain via Truffle migrations. The `truffle-config.js` file defines the target networks (e.g., local Ganache instance). Each migration script in the `migrations/` directory handles the sequential deployment and initialization of contracts.

## 10. Testing Strategy

Smart contract testing is performed using the Truffle testing framework, typically with JavaScript test files located in the `test/` directory. Tests utilize `web3.js` for contract interaction and assertion libraries like Chai for verifying expected behavior.
