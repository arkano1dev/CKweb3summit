# CryptoKnights

## Overview

CryptoKnights is an organization focused on improving the user experience for crypto transactions. Our goal is to make digital transactions more tangible and build trust between buyers and sellers.

## Products

### 1. CryptoKnights Device

The CryptoKnights Device is a compact tool that provides audio and visual confirmation of successful crypto payments. It aims to enhance the experience for both buyers and sellers involved in these transactions.

#### Features

- Audio confirmation of successful payments
- Visual confirmation of successful payments
- Voice confirmation of successful payments (CryptoKnights Plus & CryptoKnights Pro)
- Support for multiple wallets (CryptoKnights Plus & CryptoKnights Pro)
- Support for multiple blockchains (CryptoKnights Pro)
- Generate QR codes on-the-fly (CryptoKnights Pro)
- Off-chain transactions (CryptoKnights Pro)

#### Components (CryptoKnights)

- ESP32
- LED
- Buzzer

#### Components (CryptoKnights plus)

- ESP32
- LED
- Display
- Speaker

#### Components (CryptoKnights pro)

- Raspberry Pi
- LED
- Display
- Speaker
- Microphone

#### User Workflow

1. The seller generates a QR code using the CryptoKnights app.
2. The buyer scans the QR code using their wallet app.
3. The buyer sends the payment to the seller.
4. The CryptoKnights device plays a sound and lights up when the payment is confirmed.
5. The seller provides the product to the buyer.
6. The transaction is complete.

#### How it Works

1. The CryptoKnights device connects to the blockchain network (Solana) websocket to listen for account changes.
2. It listens to changes in the seller's wallet address.
3. When a change is detected, it retrieves the last transaction signature.
4. It fetches the transaction details using the signature.
5. If the transaction is successful, the CryptoKnights device plays a sound and lights up.

### 2. CryptoKnights App

The CryptoKnights App is a mobile application that allows users to connect and configure their CryptoKnights devices. It serves as an interface for interacting with the device and managing aspects of the crypto transaction process.

#### Tech Stack

- React Native
- Expo
- Tamagui
- React Native BLE PLX

#### Features of app

- Connect to CryptoKnights device
- View CryptoKnights device status and logs
- Mock CryptoKnights device
- Get transaction details and history
- Get daily transaction summary
- Customize CryptoKnights device settings

## Open-Source and No Hidden Costs

CryptoKnights is an open-source project, and we are committed to keeping it that way. The device does not connect to any servers or third-party services, ensuring privacy and transparency. It is a standalone device that you can use without any subscription fees or hidden costs. Both the software and hardware are open-source, allowing you to modify and customize the solution according to your needs.

## Get Involved

We welcome contributions from the community to further enhance the CryptoKnights ecosystem. Whether you're a developer, designer, or an enthusiast, there are numerous ways to get involved. Visit our [GitHub repository](https://github.com/CryptoKnights/CryptoKnights) to explore the codebase, submit issues, or contribute to the project.

## Stay Connected

Stay up-to-date with the latest developments, announcements, and updates from the CryptoKnights team by following us on social media:

- Twitter: [@CryptoKnights](https://twitter.com/CryptoKnights)

Join our community and be part of the effort to improve crypto transactions!
