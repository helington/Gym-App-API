<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# GYM-APP-API

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/helington/Gym-App-API?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/helington/Gym-App-API?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/helington/Gym-App-API?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".ENV">
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat&logo=ts-node&logoColor=white" alt="tsnode">
<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
<img src="https://img.shields.io/badge/Zod-3E67B1.svg?style=flat&logo=Zod&logoColor=white" alt="Zod">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
    - [Features](#features)
    - [TODO](#todo)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)

---

## Overview

Gym-App-API is a powerful backend project tailored for fitness applications, enabling seamless management of user Template progress and exercises. Built with TypeScript and Prisma ORM, it offers a robust, type-safe foundation for developing scalable fitness tracking features.

### Features

This project simplifies backend development for Template management. The core features include:

- **Modular Architecture:** Organized routing and controllers for Templates, exercises, users, and authentication.
- **Secure Authentication:** JWT-based login and user session management.
- **TypeScript Support:** Ensures type safety, maintainability, and modern development standards.
- **Prisma ORM Integration:** Efficient database interactions with a well-defined schema.
- **RESTful API:** Easy integration with frontend clients and other services.
- **Predefined Exercises:** The app ships with a set of common gym exercises seeded in the database, while allowing users to easily add their own custom exercises.

### TODO
- **Token Refresh:** Implement secure JWT refresh token flow for improved session management and security.
- **Data Validation & Consistency:** Schemas and validation for reliable data handling.
- **Dockerization:** Add Docker support for easier deployment and environment consistency.
- **Automated Test:** Expand test coverage to ensure reliability and catch regressions.

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Build Gym-App-API from the source and install dependencies:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/helington/Gym-App-API
    ```

2. **Navigate to the project directory:**

    ```sh
    cd Gym-App-API
    ```

3. **Install the dependencies:**

    ```sh
    npm install
    ```

### Usage

Run the project with:

```sh
npm run dev
```
