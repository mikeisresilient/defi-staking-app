# Data Models - Frontend

This document outlines the data models primarily used and managed by the Frontend (web) component of the DeFi Staking App. These models largely reflect the state retrieved from the Ethereum blockchain and smart contracts, as well as local UI state.

## 1. Account Data

This represents the data associated with the connected user's blockchain account.

*   **`account`**:
    *   **Type**: `string`
    *   **Description**: The user's active Ethereum address, typically connected via MetaMask.
    *   **Example**: `0xAbc123...`

*   **`tetherBalance`**:
    *   **Type**: `string` (representing a BigNumber in Wei)
    *   **Description**: The balance of Tether (mUSDT) tokens held by the user in their connected wallet. Stored in Wei units and converted for display.
    *   **Example**: `"1000000000000000000"` (representing 1 Tether)

*   **`rwdBalance`**:
    *   **Type**: `string` (representing a BigNumber in Wei)
    *   **Description**: The balance of Reward (RWD) tokens held by the user in their connected wallet. Stored in Wei units and converted for display.
    *   **Example**: `"500000000000000000"` (representing 0.5 RWD)

*   **`stakingBalance`**:
    *   **Type**: `string` (representing a BigNumber in Wei)
    *   **Description**: The amount of Tether tokens currently staked by the user in the `DecentralBank` contract. Stored in Wei units and converted for display.
    *   **Example**: `"2000000000000000000"` (representing 2 Tether staked)

## 2. Contract Data

These are instances of the deployed smart contracts, allowing the frontend to interact with their methods and properties.

*   **`tether`**:
    *   **Type**: `Web3.eth.Contract` instance
    *   **Description**: The JavaScript object representing the deployed `Tether` token smart contract.

*   **`rwd`**:
    *   **Type**: `Web3.eth.Contract` instance
    *   **Description**: The JavaScript object representing the deployed `RWD` token smart contract.

*   **`decentralBank`**:
    *   **Type**: `Web3.eth.Contract` instance
    *   **Description**: The JavaScript object representing the deployed `DecentralBank` staking smart contract.

## 3. Application State

General application state variables.

*   **`loading`**:
    *   **Type**: `boolean`
    *   **Description**: Indicates whether the application is currently loading essential blockchain data or performing an asynchronous operation.
    *   **Values**: `true` (loading), `false` (loaded/idle)
