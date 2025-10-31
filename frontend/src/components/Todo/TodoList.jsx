import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState({ title: "", description: "" });
    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const fetchTodos = async () => {
        try {
            const res = await axios.get("https://todo-app-c41w.onrender.com/api/todos", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setTodos(res.data.todos);
        } catch (error) {
            console.error("Error fetching todos:", error.response?.data || error.message);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData)
    };

    const handleAddTodo = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/todos", formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setFormData({ title: "", description: "" });
            fetchTodos();
        } catch (error) {
            console.error("Error adding todo:", error.response?.data || error.message);
        }
    };

    const statusToggle = async (id, status) => {
        try {
            await axios.put(
                `http://localhost:3000/api/todos/${id}`,
                { status: status === "pending" ? "completed" : "pending" },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchTodos();
        } catch (error) {
            console.error("Error updating todo:", error.response?.data || error.message);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/todos/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchTodos();
        } catch (error) {
            console.error("Error deleting todo:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">

            <h1 className="text-3xl font-bold mb-6">My Todos </h1>

            <form
                onSubmit={handleAddTodo}
                className="bg-white rounded-lg p-6 w-full max-w-md space-y-4 mb-8"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >Add Todo
                </button>
            </form>
            <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
                Logout
            </button>

            <div className="w-full max-w-2xl space-y-4">
                {todos.length === 0 ? (
                    <p className="text-gray-500 text-center">No todos added yet. Add one!</p>
                ) : (
                    todos.map((todo) => (
                        <div
                            key={todo._id}
                            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
                        >
                            <div>
                                <h2
                                    className={`text-lg font-semibold ${todo.status === "completed" ? "line-through text-green-600" : ""
                                        }`}
                                >
                                    {todo.title}
                                </h2>
                                <p className="text-gray-500">{todo.description}</p>
                            </div>
                            <div className="flex space-x-3">
                                <button
                                    onClick={() => statusToggle(todo._id, todo.status)}
                                    className={`px-3 py-1 rounded-lg text-white ${todo.status === "pending" ? "bg-green-500 hover:bg-green-600" : "bg-yellow-500 hover:bg-yellow-600"
                                        }`}
                                >
                                    {todo.status === "pending" ? "Complete" : "Undo"}
                                </button>
                                <button
                                    onClick={() => deleteTodo(todo._id)}
                                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TodoPage;
