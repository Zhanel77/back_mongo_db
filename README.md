# E-commerce Backend Application

This project is a backend for an e-commerce platform built using **Node.js**, **Express.js**, and **MongoDB**. It provides a RESTful API for managing products, users, and orders.

---

## **Features**

- **Product Management**:
  - Add, update, delete, and retrieve product information.
- **User Management**:
  - User registration and authentication.
- **Order Management**:
  - Create, update, and retrieve order information.

---

## **Technologies**

- **Node.js** — JavaScript runtime environment.
- **Express.js** — Framework for building RESTful APIs.
- **MongoDB** — NoSQL database for storing data.
- **Mongoose** — Library for MongoDB object modeling.
- **Dotenv** — Environment variable management.

---

## **Installation and Setup**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Zhanel77/back_mongo_db.git
   cd back_mongo_db
Install dependencies:

bash
Copy
npm install
Set up environment variables:
Create a .env file in the root directory and add the following variables:

env
Copy
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/ecommerce?retryWrites=true&w=majority
PORT=5000
Start the server:

bash
Copy
npm start
The server will be running at: http://localhost:3002.

API Endpoints
Products
GET /api/products — Get a list of all products.

POST /api/products — Add a new product.

PUT /api/products/:id — Update product information.

DELETE /api/products/:id — Delete a product.

Users
POST /api/auth/register — Register a new user.

POST /api/auth/login — Authenticate a user.

Orders
POST /api/orders — Create a new order.

GET /api/orders/:userId — Get orders for a specific user.

Example Requests
Add a Product
bash
Copy
curl -X POST http://localhost:3002/api/products \
-H "Content-Type: application/json" \
-d '{
  "name": "Laptop",
  "price": 1200,
  "description": "High-performance laptop",
  "category": "Electronics",
  "stock": 10
}'
Register a User
bash
Copy
curl -X POST http://localhost:3002/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}'
Deployment
The application is deployed on Render (or another platform).
Live URL: https://back-mongo-db.onrender.com

Author
Zhanel77
GitHub: Zhanel77