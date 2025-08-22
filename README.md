# 📝 Todo App with Authentication

![Node](https://img.shields.io/badge/Node.js-18-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4.x-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-blue?logo=tailwindcss)
![JWT](https://img.shields.io/badge/JWT-Auth-orange?logo=jsonwebtokens)

---

## 📌 Features

### 🔐 User Authentication
- Sign up with **username, email, password**
- Log in with **email & password**
- Authentication using **JWT**
- Passwords are hashed using **bcrypt**

### ✅ To-Do List Functionality
- Create new to-do items (**title, description, status**)
- Edit your to-do items
- Delete your to-do items
- View a list of your own to-do items
- Status can be **pending** or **completed**

---

## 🛠️ Tech Stack

| Frontend   | Backend   | Database | Authentication |
|------------|-----------|----------|----------------|
| React ⚛️   | Node.js   | MongoDB 🍃 | JWT + Bcrypt 🔑 |
| TailwindCSS 🎨 | Express.js |          |                |

---

## 📂 Project Structure

## 📂 Project Structure

```bash
/backend
   ├── controllers/      # Auth & Todo controllers
   ├── middleware/       # JWT auth middleware
   ├── models/           # Mongoose models (User, Todo)
   ├── routes/           # API routes
   └── server.js         # Entry point

/frontend
   ├── src/
   │   ├── components/   # React components
   │   ├── App.jsx       # Routes & Navbar
   │   └── index.js
   └── tailwind.config.js
```
## 🔑 API Endpoints

### 🔐 Auth Routes
- `POST /api/register` → Register a new user  
- `POST /api/login` → Login user & receive JWT  

### 📝 Todo Routes (Protected)
- `POST /api/todos` → Create a new todo  
- `GET /api/todos` → Get all todos of the logged-in user  
- `PUT /api/todos/:id` → Update a specific todo  
- `DELETE /api/todos/:id` → Delete a specific todo  

---

## 🎨 UI Preview
- ✨ Signup & Signin forms  
- 📋 To-Do dashboard with **create / edit / delete** functionality  
- 🚪 Logout button → clears JWT token & redirects to `/`  

---

## 👨‍💻 Author
Built with ❤️ using the **MERN stack** + **Tailwind CSS** 🎨

