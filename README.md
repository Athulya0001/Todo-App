📝 MERN To-Do App

A full-stack MERN (MongoDB, Express, React, Node.js) application with User Authentication and To-Do list management.
Styled with Tailwind CSS for a modern UI.

🚀 Features
🔐 User Authentication

User Sign Up (username, email, password)

User Login (email, password)

JWT-based Authentication

Password Hashing with bcrypt

✅ To-Do List Functionality

Authenticated users can:

Create a To-Do item (title, description, status)

Edit their own To-Do items

Delete their To-Do items

View a list of their own To-Do items

🛠️ Tech Stack

Frontend: React + Tailwind CSS

Backend: Node.js + Express

Database: MongoDB

Authentication: JWT + bcrypt

📂 Project Structure

/backend

   ├── controllers/      # Auth & Todo controllers
   
   ├── middleware/       # JWT auth middleware
   
   ├── models/           # Mongoose models (User, Todo)
   
   ├── routes/           # API routes
   
   ├── server.js         # Entry point


/frontend

   ├── src/
   
   │   ├── components/   # React components
   
   │   ├── App.jsx       # Routes & Navbar
   
   │   └── index.js
   
   └── tailwind.config.js

🔑 API Endpoints

Auth Routes

POST /api/register → Register user

POST /api/login → Login user & get JWT

Todo Routes (Protected)

POST /api/todos → Create todo

GET /api/todos → Get all user’s todos

PUT /api/todos/:id → Update todo

DELETE /api/todos/:id → Delete todo

🎨 UI Preview

Signup & Signin forms

To-Do dashboard with create/edit/delete

Logout button clears token & redirects


👨‍💻 Author

Built with ❤️ using the MERN stack + Tailwind CSS.
