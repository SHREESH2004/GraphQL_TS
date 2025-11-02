### ✅ **README.md**

# Node.js + TypeScript + Express Starter

This is a clean starter setup for building Node.js applications using **TypeScript**, **Express**, and **express-validator**.  
It includes automatic recompilation using **Nodemon** and parallel TypeScript watching using **concurrently**.

---

## 🚀 Features

- Fully configured **TypeScript** environment
- Express server setup with JSON and URL encoded body parsing
- Routing organized in separate folders
- Example controller and validation middleware using **express-validator**
- Automatic rebuild & server reload using:
  - `nodemon`
  - `tsc -w`
  - `concurrently`

---

## 📂 Project Structure

```

project-root/
│
├── src/
│   ├── controller/
│   │   └── main.controller.ts
│   ├── routers/
│   │   └── main.routes.ts
│   └── index.ts
│
├── dist/               # compiled JavaScript (generated after build)
├── package.json
└── tsconfig.json

````

---

## 📦 Installation

```bash
npm install
````

Install `express-validator` if not already installed:

```bash
npm install express-validator
npm install -D @types/express-validator
```

---

## 🛠️ Scripts

| Command         | Description                                        |
| --------------- | -------------------------------------------------- |
| `npm run build` | Compiles TypeScript to JavaScript (`dist/`)        |
| `npm start`     | Runs compiled server using nodemon                 |
| `npm run watch` | Runs TypeScript compiler in watch mode             |
| `npm run dev`   | Runs watch mode and nodemon together (recommended) |

### Run in development mode:

```bash
npm run dev
```

---

## 🌐 API Endpoint

### **POST** `/api/data/add`

#### Request Body:

```json
{
  "username": "YourName"
}
```

#### Success Response:

```json
{
  "message": "Hello User",
  "data": ["YourName"]
}
```

#### Validation Error Response:

```json
{
  "errors": [
    {
      "msg": "Username is required",
      "param": "username",
      "location": "body"
    }
  ]
}
```

---

## 🤝 Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

---

## 📝 License

This project is licensed under the **ISC License** (default Node license).

---

### ⭐ If you like this starter, give the repo a star!
