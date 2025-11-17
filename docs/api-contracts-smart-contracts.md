# API Contracts - Smart Contracts

This document outlines the public and external interfaces (functions and events) of the smart contracts deployed on the Ethereum blockchain for the DeFi Staking App. These contracts manage the core logic for token staking, rewards, and token transfers.

## 1. `DecentralBank.sol`

The `DecentralBank` contract is the central component for managing the staking mechanism.

### State Variables

*   **`name`** (string, public): Stores the name of the contract, "DecentralBank".
*   **`owner`** (address, public): The address of the contract deployer, who has special privileges (e.g., issuing rewards).
*   **`tether`** (Tether, public): An instance of the `Tether` token contract, used for staking.
*   **`rwd`** (RWD, public): An instance of the `RWD` (Reward) token contract, used for issuing rewards.
*   **`stakers`** (address[], public): An array of addresses that have staked tokens in the bank.
*   **`stakingBalance`** (mapping `address => uint`, public): Maps staker addresses to their current staking balance (in Tether tokens).
*   **`hasStaked`** (mapping `address => bool`, public): Tracks whether an address has ever staked tokens.
*   **`isStaking`** (mapping `address => bool`, public): Tracks the current staking status of an address.

### Constructor

*   **`constructor (RWD _rwd, Tether _tether)`**:
    *   **Purpose**: Initializes the `DecentralBank` contract by setting the `RWD` and `Tether` token contract addresses.
    *   **Parameters**:
        *   `_rwd` (RWD): The address of the deployed `RWD` token contract.
        *   `_tether` (Tether): The address of the deployed `Tether` token contract.

### Functions

*   **`depositTokens(uint _amount)`** (public):
    *   **Purpose**: Allows users to deposit `Tether` tokens into the `DecentralBank` contract to begin staking.
    *   **Requirements**: `_amount` must be greater than 0.
    *   **Actions**:
        1.  Transfers `_amount` of `Tether` tokens from `msg.sender` to the `DecentralBank` contract address.
        2.  Updates the `stakingBalance` of `msg.sender`.
        3.  If `msg.sender` has not staked before, their address is added to the `stakers` array.
        4.  Sets `isStaking[msg.sender]` and `hasStaked[msg.sender]` to `true`.

*   **`unstakeTokens()`** (public):
    *   **Purpose**: Allows users to withdraw their previously staked `Tether` tokens from the `DecentralBank`.
    *   **Requirements**: The staker must have a `stakingBalance` greater than 0.
    *   **Actions**:
        1.  Retrieves the `stakingBalance` of `msg.sender`.
        2.  Transfers the entire staked balance of `Tether` tokens from the `DecentralBank` contract back to `msg.sender`.
        3.  Resets `stakingBalance[msg.sender]` to 0.
        4.  Sets `isStaking[msg.sender]` to `false`.

*   **`issueTokens()`** (public):
    *   **Purpose**: Distributes `RWD` tokens as rewards to all active stakers. This function can only be called by the `owner` of the contract.
    *   **Requirements**: Only the contract `owner` can call this function.
    *   **Actions**:
        1.  Iterates through all addresses in the `stakers` array.
        2.  For each staker, calculates a reward amount (currently `stakingBalance[recipient] / 9`).
        3.  If the calculated reward is greater than 0, transfers `RWD` tokens to the staker.

## 2. `RWD.sol` (Reward Token)

This contract defines the `RWD` (Reward) ERC-20 compatible token.

### State Variables

*   **`name`** (string, public): "Reward Token".
*   **`symbol`** (string, public): "RWD".
*   **`totalSupply`** (uint256, public): The total supply of RWD tokens (1,000,000 with 18 decimals).
*   **`decimals`** (uint8, public): The number of decimal places for the token (18).
*   **`balanceOf`** (mapping `address => uint256`, public): Maps addresses to their RWD token balance.
*   **`allowance`** (mapping `address => mapping (address => uint256)`, public): Maps owner addresses to spender addresses to the amount of tokens the spender is allowed to transfer.

### Constructor

*   **`constructor ()`**:
    *   **Purpose**: Initializes the total supply of RWD tokens and assigns it to the contract deployer (`msg.sender`).

### Functions

*   **`transfer (address _to, uint256 _value)`** (public):
    *   **Purpose**: Transfers `_value` RWD tokens from the caller (`msg.sender`) to `_to`.
    *   **Requirements**: `msg.sender` must have a sufficient balance.
    *   **Actions**: Decreases `msg.sender`'s balance, increases `_to`'s balance. Emits a `Transfer` event.

*   **`approve (address _spender, uint256 _value)`** (public):
    *   **Purpose**: Allows `_spender` to withdraw `_value` RWD tokens from `msg.sender`'s account.
    *   **Actions**: Sets the allowance. Emits an `Approval` event.

*   **`transferFrom (address _from, address _to, uint256 _value)`** (public):
    *   **Purpose**: Transfers `_value` RWD tokens from `_from` to `_to` on behalf of `_spender` (the caller), provided `_spender` has sufficient allowance.
    *   **Requirements**: `_from` must have a sufficient balance, and `_spender` must have sufficient allowance.
    *   **Actions**: Decreases `_from`'s balance, increases `_to`'s balance, decreases `_spender`'s allowance. Emits a `Transfer` event.

### Events

*   **`Transfer (address indexed _from, address indexed _to, uint256 _value)`**: Emitted when tokens are transferred.
*   **`Approval (address indexed _owner, address indexed _spender, uint256 _value)`**: Emitted when an allowance is set.

## 3. `Tether.sol` (Mock Tether Token)

This contract is a mock ERC-20 compatible token, similar in functionality to `RWD.sol`, but representing a stablecoin (`mUSDT`) used for staking.

### Key Differences from `RWD.sol`

*   **`name`**: "Mock Tether Token"
*   **`symbol`**: "mUSDT"

All other functions, events, and state variables are analogous to `RWD.sol`.

## 4. `Migrations.sol`

This contract is typically used by Truffle to keep track of deployed contracts and ensure that migrations are run in the correct order.

### State Variables

*   **`owner`** (address, public): The address of the contract deployer.
*   **`last_completed_migration`** (uint, public): Stores the index of the last completed migration.

### Modifier

*   **`restricted()`**:
    *   **Purpose**: Ensures that only the `owner` of the contract can execute the function it modifies.
    *   **Usage**: `require(msg.sender == owner, "This function is restricted to the contract's owner");`

### Functions

*   **`setCompleted(uint completed)`** (public, `restricted`):
    *   **Purpose**: Updates the `last_completed_migration` to the provided `completed` value.
    *   **Requirements**: Can only be called by the contract `owner`.
