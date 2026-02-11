# QuizTime Server 🚀

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

The RESTful API backend for the QuizTime application. It handles user authentication, data persistence for quizzes and results, and secure account management.

**🔗 Frontend Repository:** [QuizTime-React](https://github.com/ApostolQleg/QuizTime-React)

## ⚡ API Features

* **Auth System:**
    * JWT (JSON Web Token) based session management.
    * Google OAuth verification.
    * Email verification using temporary codes.
    * Password hashing with `bcrypt`.
* **User Management:**
    * Profile updates (Nickname, Theme Color, Avatar Type).
    * Secure password change flow.
    * Account deletion (Cascading delete of user data).
* **Quiz Management:** CRUD operations for quizzes with pagination support.
* **Results:** Storing and retrieving user quiz attempts.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (via Mongoose)
* **Authentication:** JWT, Google Auth Library
* **Security:** CORS, bcrypt

## 🚀 Getting Started

### Prerequisites
* Node.js (v16+)
* MongoDB Instance (Local or Atlas)

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/ApostolQleg/QuizTime-React-backend.git](https://github.com/ApostolQleg/QuizTime-React-backend.git)
    cd QuizTime-React-backend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Create a `.env` file in the root directory:
    ```env
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    EMAIL_USER=your_email_for_sending_codes
    EMAIL_PASS=your_email_password
    GOOGLE_CLIENT_ID=your_google_client_id
    ```

4.  Start the server:
    ```bash
    npm start
    ```

## 📡 API Endpoints Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/auth/register` | Register new user |
| `POST` | `/auth/login` | Login user |
| `POST` | `/auth/google` | Login via Google |
| `GET` | `/api/quizzes` | Fetch all quizzes (paginated) |
| `POST` | `/api/quizzes` | Create a new quiz |
| `GET` | `/api/user` | Get current user profile |
| `PUT` | `/api/user/update` | Update profile info |
| `POST` | `/api/user/password` | Change password |
| `DELETE` | `/api/user/delete` | Delete account |

## 👨‍💻 Authors

* **Oleg Bondarenko** - *Lead Developer*
    * National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"
    * Faculty of Informatics and Computer Engineering (FIOT)
    * Group: **IM-54**
* **dimpennn** - *Partner Developer*

## 📄 License

This project is open-source.