<div align="center">

# Updated SECURE MERN API (BOOKS API)

### Structured Backend API with Express

**INSY7314 — ICE Task 2 | Oarabile Marwane — ST1043614**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Postman](https://img.shields.io/badge/Tested%20with-Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)

<br>

**Structured • Validated • Secured**

</div>

---

## Project Files

| Item                   |                          Access                          |
| ----------------------- | :-------------------------------------------------------: |
| **GitHub Repository**   | [**View Repository**](https://github.com/BooleanBile/ICE-TASK-2_ST10436124) |

---

## Requirements

Before running the API, ensure the computer has:

* **Node.js** (v18 or later) and npm
* **Visual Studio Code** (or any code editor)
* **Postman** (for testing routes/endpoints)

---

## 1. Clone or Extract the Project

If cloning from GitHub:

```cmd
git clone https://github.com/BooleanBile/ICE-TASK-2_ST10436124.git
cd YOUR-REPO-NAME\api
```

If working from a local copy, open Command Prompt and navigate into the `api` folder:

```cmd
cd secure-mern-app\api
```

---

## 2. Install Dependencies

```cmd
npm install
```

This installs `express`, `cors`, `dotenv`, and `helmet` as listed in `package.json`.

---

## 3. Set Up Environment Variables

Copy the example environment file to create your own `.env`:

```cmd
copy .env.example .env
```

Your `.env` should contain:

```text
PORT=4000
APP_NAME=SecureAPI
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173
USE_HTTPS=false
SSL_KEY_PATH=./certs/localhost-key.pem
SSL_CERT_PATH=./certs/localhost-cert.pem
```

> `.env` is excluded from Git via `.gitignore` — never commit it.

---

## 4. Run the API

```cmd
node index.js
```

You should see:

```text
HTTP server running on port 4000
```

> Keep the terminal open while using the API.

---

## 5. Test the Routes in Postman

Open Postman and test each endpoint below.

> ⚠️ For every **POST** request: in the **Body** tab, select **raw**, then change the type dropdown from **Text** to **JSON**. Express will not parse the body otherwise, and validation will fail even with a correct body.

### Routes/Endpoints

| Method | Route                              | Description                        |
| ------ | ----------------------------------- | ----------------------------------- |
| GET    | `http://localhost:4000`             | Root route — confirms API is running |
| GET    | `http://localhost:4000/health`      | Health check                        |
| GET    | `http://localhost:4000/api/books`   | Fetch all books                     |
| GET    | `http://localhost:4000/api/books/b1`| Fetch a single book by ID           |
| POST   | `http://localhost:4000/api/books`   | Add a new book                      |

### Sample POST Request Bodies

```json
{ "title": "1984", "author": "George Orwell", "genre": "Dystopian", "condition": "Used", "description": "A chilling vision of a totalitarian surveillance state." }
```

```json
{ "title": "Dune", "author": "Frank Herbert", "genre": "Sci-Fi", "condition": "New", "description": "A sweeping saga of politics, religion, and desert survival." }
```

```json
{ "title": "Sapiens", "author": "Yuval Noah Harari", "genre": "Non-Fiction", "condition": "Like New", "description": "A brief history of humankind from the Stone Age to today." }
```

```json
{ "title": "The Hunger Games", "author": "Suzanne Collins", "genre": "Dystopian", "condition": "New", "description": "A teenager fights for survival in a televised battle to the death." }
```

```json
{ "title": "Atomic Habits", "author": "James Clear", "genre": "Self-Help", "condition": "Used", "description": "A practical guide to building good habits and breaking bad ones." }
```

### Input Validation Test

Send a POST with missing or invalid fields to confirm validation works:

```json
{ "title": "Incomplete Book" }
```

Expected response: `400 Bad Request`

```json
{ "error": "All fields are required" }
```

---

## 6. Stop the API

Return to the terminal and press:

```text
Ctrl + C
```

---

## Troubleshooting

### "All fields are required" on every POST

In Postman, check the **Body → raw** type dropdown — it must say **JSON**, not **Text**.

### `Cannot find module './routes/bookRoutes'`

Run the server from inside the `api` folder, and confirm `controllers/bookController.js`, `middleware/validateBookInput.js`, and `routes/bookRoutes.js` all exist with those exact names.

### Port 4000 already in use

Stop any other process using port 4000, or change `PORT` in `.env` and restart the server.

---

<div align="center">

### SECUREAPI

**Structured Backend API — ICE Task 2**

**[Your Full Name] | [Your Student Number]**

</div>
