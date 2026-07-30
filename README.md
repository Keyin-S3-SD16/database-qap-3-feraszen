** QAP3 – Node.js + Express + MongoDB CRUD API

This project implements a RESTful API for managing CD (Compact Disc) records using Node.js, Express, and MongoDB with Mongoose.
It supports full CRUD operations: Create, Read, Update, and Delete.

🚀 Purpose
The purpose of this project is to demonstrate how to:
Build a REST API using Express.
Connect a Node.js server to MongoDB using Mongoose.
Create a data model (Schema & Model).
Perform CRUD operations on a MongoDB collection.
Test API endpoints using Thunder Client or Postman.
View stored data using MongoDB Compass.

🛠️ Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Thunder Client / Postman
MongoDB Compass
dotenv

📁 Project Structure
Code
QAP3/
│── config/
│   └── db.js
│── models/
│   └── cd.js
│── routes/
│   └── cdRoutes.js
│── index.js
│── server.js
│── .env
│── package.json


🔧 Setup & Installation
1. Install dependencies
npm install

2. Create a .env file
Add your MongoDB connection string:
MONGO_URI=mongodb://127.0.0.1:27017/cdCollection

3. Start the server
node index.js

Expected output:
MongoDB Connected Successfully
Server is running on http://localhost:3000
📡 API Endpoints
➕ Create a CD
POST /cds

Body:

{
  "title": "Hybrid Theory",
  "artist": "Linkin Park",
  "genre": "Rock",
  "year": 2000
}

📥 Get all CDs
GET /cds

🔍 Filter CDs

Examples:
GET /cds?artist=Linkin Park
GET /cds?genre=Rock
GET /cds?year=2000


✏️ Update a CD
PUT /cds/:id

Body example:

{
  "genre": "Alternative Rock"
}


❌ Delete a CD
DELETE /cds/:id

🗄️ Database
The project uses MongoDB with a single database:

cdCollection --> cds (stores CD documents)

Data can be viewed using MongoDB Compass.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose

✅ Status
All CRUD operations are fully implemented and tested using Thunder Client.