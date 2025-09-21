# 🚀 Medium Blog Project 🚀

This is a full-stack blogging application built with a modern tech stack. It includes a backend API, a frontend user interface, and a shared module for common code between the two.

---

## 📂 Folder Structure

The project is organized into three main directories:

* **`backend`**: Contains the server-side code, built with Hono and Cloudflare Workers. ⚙️
* **`frontend`**: Contains the client-side code, built with React and Vite. 🖼️
* **`comman-app`**: A shared module that contains common code used by both the frontend and backend, such as validation schemas. 🤝

---

## 💻 Technologies Used

### Backend

* **Hono**: A small, fast, and feature-rich web framework for the edge. 🔥
* **Cloudflare Workers**: Serverless execution environment for running the backend code. ☁️
* **Prisma**: A next-generation ORM for Node.js and TypeScript. 🗄️
* **PostgreSQL**: The database used for this project. 🐘
* **JWT**: For user authentication. 🔐

### Frontend

* **React**: A JavaScript library for building user interfaces. ⚛️
* **Vite**: A fast and modern build tool for web development. ⚡
* **TypeScript**: A typed superset of JavaScript. ⌨️
* **Tailwind CSS**: A utility-first CSS framework. 🎨
* **Axios**: A promise-based HTTP client for the browser and Node.js. 🌐
* **React Router**: For handling routing in the React application. 🗺️

### Shared

* **Zod**: A TypeScript-first schema declaration and validation library. ✅

---

## 🏁 Getting Started

### ✅ Prerequisites

* Node.js and npm (or yarn) installed on your machine.
* A Cloudflare account with Wrangler CLI configured.
* A PostgreSQL database.

### ⚙️ Backend Setup

1.  **Navigate to the `backend` directory**:
    ```bash
    cd backend
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Configure environment variables**:
    Create a `.dev.vars` file in the `backend` directory and add the following variables:
    ```
    DATABASE_URL="your-database-url"
    JWT_SECRET="your-jwt-secret"
    ```
4.  **Run the backend server**:
    ```bash
    npm run dev
    ```

### 🖼️ Frontend Setup

1.  **Navigate to the `frontend` directory**:
    ```bash
    cd frontend
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the frontend development server**:
    ```bash
    npm run dev
    ```

---

## 📜 Available Scripts

### Backend

* `npm run dev`: Starts the backend server in development mode.
* `npm run deploy`: Deploys the backend to Cloudflare Workers.

### Frontend

* `npm run dev`: Starts the frontend development server.
* `npm run build`: Builds the frontend for production.
* `npm run lint`: Lints the frontend code.
* `npm run preview`: Previews the production build of the frontend.
