# UI Component Inventory - Frontend

This document provides an inventory and description of the key UI components within the Frontend (web) component of the DeFi Staking App. These components are built using React and are responsible for rendering the user interface and handling user interactions.

## 1. `App.js`

*   **Type**: Main Application Component (Class Component)
*   **Purpose**: The root component of the application. It is responsible for:
    *   Initializing Web3 and connecting to the Ethereum provider (e.g., MetaMask).
    *   Loading user account information and network details.
    *   Instantiating smart contract instances (`Tether`, `RWD`, `DecentralBank`).
    *   Fetching and managing the main application state (user balances, staking balance, loading status).
    *   Rendering the `Navbar` and `Main` components, passing necessary state as props.
*   **Key Responsibilities**: State management, Web3 integration, component orchestration.

## 2. `Navbar.js`

*   **Type**: Functional Component
*   **Purpose**: Displays the application's navigation bar.
*   **Key Responsibilities**:
    *   Showing the application title ("DApp Token Farm").
    *   Displaying the connected user's Ethereum account address.
    *   Potentially showing network status or other global information.

## 3. `Main.js`

*   **Type**: Functional Component
*   **Purpose**: Contains the primary user interface for staking and unstaking tokens.
*   **Key Responsibilities**:
    *   Displaying the user's Tether and RWD balances.
    *   Displaying the user's current staking balance.
    *   Providing an input field for users to enter the amount of Tether to stake.
    *   Providing "DEPOSIT" and "UNSTAKE" buttons to trigger smart contract interactions.
    *   Displaying reward information.

## 4. `Airdrop.js`

*   **Type**: Functional Component
*   **Purpose**: Manages and displays an Airdrop countdown mechanism.
*   **Key Responsibilities**:
    *   Implementing countdown logic.
    *   Displaying the remaining time until an airdrop event.
    *   Potentially triggering animations or visual feedback related to the airdrop.

## 5. `ParticleSettings.js`

*   **Type**: Configuration/Utility Component
*   **Purpose**: Likely defines the configuration for the background animation (particles).
*   **Key Responsibilities**:
    *   Providing JSON or JavaScript object configurations for particle effects (e.g., using `react-particles-js` or `react-tsparticles`).
    *   Controlling the visual appearance and behavior of background animations.

## 6. `App.css`

*   **Type**: Stylesheet
*   **Purpose**: Provides the cascading style rules for the overall application.
*   **Key Responsibilities**:
    *   Defining layout, colors, typography, and other visual styles for components.
    *   Ensuring a consistent look and feel across the application.
