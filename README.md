## Crypto Knights

Welcome to the official repository of **Crypto Knights**, a decentralized platform designed to revolutionize cryptocurrency investments. This repository contains the codebase for both the Next.js frontend application and the smart contracts that power the decentralized index funds.

---

### Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Installation](#installation)
   - [Frontend (Next.js)](#frontend-nextjs)
   - [Smart Contracts](#smart-contracts)
5. [Usage](#usage)
6. [Smart Contract Details](#smart-contract-details)
8. [License](#license)

---

### Introduction

Crypto Knights is a platform that allows users to invest in decentralized index funds managed by smart contracts. The platform automatically rebalances your portfolio based on real-time market conditions, ensuring transparency and eliminating the need for constant monitoring. Our goal is to simplify crypto investments while maintaining full transparency and trustworthiness.

### Features

- **Automated Portfolio Management**: Smart contracts rebalance your portfolio based on predefined heuristics, eliminating the need for manual intervention.
- **Decentralized Index Funds**: Invest in index funds that are completely managed by smart contracts on the blockchain.
- **Transparency**: Full visibility into how your investments are managed, with the assurance that smart contracts will always follow the rules.
- **Secure and Trustworthy**: Built on blockchain technology, ensuring security and immutability of your investments.
- **User-Friendly Interface**: A sleek and intuitive frontend built with Next.js, making it easy for users to interact with the platform.

### Technologies

- **Frontend**: [Next.js](https://nextjs.org/) - A React framework for server-rendered applications.
- **Smart Contracts**: Written in Solidity, deployed on the Ethereum blockchain.
- **Blockchain**: Ethereum for decentralized execution of smart contracts.
- **Testing**: Jest, Mocha, and Hardhat for contract testing.
- **Styling**: Tailwind CSS for frontend styling.

### Installation

#### Frontend (Next.js)

To run the frontend application locally, follow these steps:

1. **Clone the repository:**
```bash
git clone https://github.com/arkanoeth/CKweb3summit
cd web/
```

2. **Install dependencies:**
```bash
pnpm install
```

3. **Create a `.env` file:**
- Create a `.env` file in the root directory.
- Add environment variables (e.g., API keys, blockchain node URLs) required by the application. Dummy ones are present in `.env.example`.

4. **Run the development server:**
```bash
pnpm run dev
```

The application will be available at `http://localhost:3000`.

#### Smart Contracts

To work with the smart contracts:

1. **Install foundry:**
```bash
curl -L https://foundry.paradigm.xyz | bash
```


2. **Compile forge build:**
```bash
forge build
```

3. **Deploy and populate:**
```bash
forge script script/deploy.s.sol --fork-url https://arbitrum-mainnet.infura.io/v3/yourkey
```

### Usage

1. **Start the Frontend Application:**
   - After following the installation steps, the frontend will be running on `http://localhost:3000`.

2. **Interact with the Smart Contracts:**
   - Once deployed, the frontend will automatically interact with the deployed smart contracts on the specified network.

3. **Investing:**
   - Use the interface to select decentralized index funds, view portfolio performance, and track how the funds are managed by the smart contracts.

### Smart Contract Details

The smart contracts in Crypto Knights are designed to manage decentralized index funds:

- **Rebalancing Logic**: Contracts automatically rebalance portfolios based on the performance of tokens against Bitcoin, following predefined heuristics.
- **Transparency**: All rebalancing decisions and logic are visible on-chain, allowing users to verify the actions taken by the contract.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using Crypto Knights! We’re excited to help you navigate the world of cryptocurrency investments with ease and transparency.


