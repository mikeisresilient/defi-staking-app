# State Management - Frontend

This document describes the state management patterns and key state variables within the Frontend (web) component of the DeFi Staking App. The application primarily utilizes React's built-in class component state management.

## 1. Mechanism

The core state management is handled within React class components, specifically the `App.js` component, using:

*   **`this.state`**: To declare and hold the component's local state.
*   **`this.setState()`**: To update the component's state, triggering re-renders.

## 2. Key State Variables

The `App` component maintains the following critical state variables:

*   **`account`**:
    *   **Purpose**: Stores the currently connected Ethereum account address of the user.
    *   **Source**: Retrieved from `web3.eth.getAccounts()`.

*   **`tether`**:
    *   **Purpose**: Holds the JavaScript instance of the deployed `Tether` smart contract.
    *   **Source**: Instantiated using `new web3.eth.Contract()`.

*   **`rwd`**:
    *   **Purpose**: Holds the JavaScript instance of the deployed `RWD` smart contract.
    *   **Source**: Instantiated using `new web3.eth.Contract()`.

*   **`decentralBank`**:
    *   **Purpose**: Holds the JavaScript instance of the deployed `DecentralBank` smart contract.
    *   **Source**: Instantiated using `new web3.eth.Contract()`.

*   **`tetherBalance`**:
    *   **Purpose**: Stores the balance of Tether tokens held by the connected user.
    *   **Source**: Retrieved by calling `tether.methods.balanceOf(account).call()`.

*   **`rwdBalance`**:
    *   **Purpose**: Stores the balance of RWD tokens held by the connected user.
    *   **Source**: Retrieved by calling `rwd.methods.balanceOf(account).call()`.

*   **`stakingBalance`**:
    *   **Purpose**: Stores the amount of Tether tokens the connected user has staked in the `DecentralBank`.
    *   **Source**: Retrieved by calling `decentralBank.methods.stakingBalance(account).call()`.

*   **`loading`**:
    *   **Purpose**: A boolean flag indicating whether the application is in the process of loading initial blockchain data or performing a transaction.
    *   **Values**: `true` (loading), `false` (loaded/idle).

## 3. State Flow

*   The `App` component is responsible for initializing Web3, loading account information, and instantiating contract instances.
*   It fetches and updates the user's token balances and staking balance.
*   These state variables are then passed down as `props` to child components such as `Navbar` and `Main` to display relevant information and enable user interactions (e.g., staking, unstaking).
*   User actions (e.g., `depositTokens`, `unstakeTokens`) trigger calls to smart contract methods, which may lead to state updates in the `App` component upon transaction confirmation.
