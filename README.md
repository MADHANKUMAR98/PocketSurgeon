# 🦷 PocketSurgeon

<div align="center">

[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-orange?style=for-the-badge)](https://expo.dev)

**The ultimate pocket companion for dental professionals and students.**

[Features](#-features) • [Getting Started](#-getting-started) • [Building](#-building-for-production) • [Tech Stack](#-tech-stack)

</div>

---

## 📖 Overview

**PocketSurgeon** is a comprehensive mobile application designed to assist dental surgeons and students with quick, reliable information in the palm of their hands. Whether you need to verify tooth anatomy, review anesthetic techniques, or brush up on elevation principles, PocketSurgeon is your go-to digital assistant.

## ✨ Features

- **🦷 Detailed Tooth Anatomy**: In-depth specifications and visual guides for every tooth.
- **💉 Anesthetic Videos**: High-quality video demonstrations for various local anesthesia techniques.
- **📚 Elevation Principles**: Core concepts and best practices for surgical extractions.
- **📱 Offline Accessible**: Critical information available whenever and wherever you need it.
- **🎨 Modern UI/UX**: Built with a clean, intuitive interface for ease of use during procedures.

## 🚀 Getting Started

Follow these simple steps to get a local copy up and running.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/PocketSurgeon.git
    cd PocketSurgeon
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the application**
    ```bash
    npx expo start
    ```

4.  **Run on Device**
    - Scan the QR code with **Expo Go** (Android) or the Camera app (iOS).
    - Press `a` for Android Emulator or `i` for iOS Simulator.

## 🛠 Tech Stack

- **Framework**: [Expo](https://expo.dev) & [React Native](https://reactnative.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction)
- **Styling**: Native StyleSheets & Vector Icons

## 📦 Building for Production

This project is configured for **EAS Build**.

### 1. Prerequisites
```bash
npm install -g eas-cli
eas login
```

### 2. Build Commands

| Platform | Command |
|----------|---------|
| **Android** | `eas build --platform android --profile production` |
| **iOS** | `eas build --platform ios --profile production` |
| **All** | `eas build --platform all --profile production` |

> **Note**: For iOS builds, you will need an active Apple Developer Account.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Made with ❤️ by Madhankumar</p>
</div>
