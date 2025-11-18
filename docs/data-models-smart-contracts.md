# Data Models - Smart Contracts

This document outlines the data models, primarily represented by state variables and mappings, within the Solidity smart contracts of the DeFi Staking App. These structures define the persistent data stored on the blockchain.

## 1. `DecentralBank.sol`

The `DecentralBank` contract manages the core staking logic and associated user data.

*   **`name`**:
    *   **Type**: `string`
    *   **Description**: The name of the Decentral Bank contract.
    *   **Example**: `"DecentralBank"`

*   **`owner`**:
    *   **Type**: `address`
    *   **Description**: The Ethereum address that deployed the contract and has special administrative privileges.

*   **`tether`**:
    *   **Type**: `Tether` (contract instance)
    *   **Description**: A reference to the deployed `Tether` token contract, used for managing the staked asset.

*   **`rwd`**:
    *   **Type**: `RWD` (contract instance)
    *   **Description**: A reference to the deployed `RWD` token contract, used for issuing rewards.

*   **`stakers`**:
    *   **Type**: `address[]` (array of addresses)
    *   **Description**: A dynamic array storing the addresses of all unique users who have ever staked tokens in the bank.

*   **`stakingBalance`**:
    *   **Type**: `mapping (address => uint)`
    *   **Description**: A mapping that associates each staker's Ethereum address with the amount of Tether tokens they currently have staked in the bank.

*   **`hasStaked`**:
    *   **Type**: `mapping (address => bool)`
    *   **Description**: A boolean mapping indicating whether a given address has ever initiated a stake in the bank.

*   **`isStaking`**:
    *   **Type**: `mapping (address => bool)`
    *   **Description**: A boolean mapping indicating whether a given address currently has active staked tokens in the bank.

## 2. `RWD.sol` and `Tether.sol` (ERC-20 Token Contracts)

Both `RWD` and `Tether` contracts implement similar data models for managing token balances and allowances, adhering to the ERC-20 standard.

*   **`name`**:
    *   **Type**: `string`
    *   **Description**: The full name of the token (e.g., "Reward Token", "Mock Tether Token").

*   **`symbol`**:
    *   **Type**: `string`
    *   **Description**: The short ticker symbol for the token (e.g., "RWD", "mUSDT").

*   **`totalSupply`**:
    *   **Type**: `uint256`
    *   **Description**: The total number of tokens in existence, including those not yet circulated.

*   **`decimals`**:
    *   **Type**: `uint8`
    *   **Description**: The number of decimal places the token uses (e.g., 18 for Ether-like tokens).

*   **`balanceOf`**:
    *   **Type**: `mapping (address => uint256)`
    *   **Description**: A mapping that associates each Ethereum address with its current token balance.

*   **`allowance`**:
    *   **Type**: `mapping (address => mapping (address => uint256))`
    *   **Description**: A nested mapping that tracks how many tokens an `_owner` has allowed an `_spender` to transfer on their behalf.

## 3. `Migrations.sol`

This contract is used by the Truffle framework to manage the deployment history of other contracts.

*   **`owner`**:
    *   **Type**: `address`
    *   **Description**: The address that deployed the `Migrations` contract.

*   **`last_completed_migration`**:
    *   **Type**: `uint`
    *   **Description**: An integer representing the index of the last successfully completed migration script.
