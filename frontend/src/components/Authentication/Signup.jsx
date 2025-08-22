import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {

    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:3000/api/register",
                formData
            );

            if (res.data.success) {
                console.log("User registered successfully")
                navigate('/signin')
                setFormData("")
            }
        } catch (error) {
            console.log("Error registering user",error.response?.data || error.message)
            alert(error.response?.data.message || error.message)
        }
    };
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <form className='bg-white p-8 rounded-xl w-96 space-y-4' onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold text-center'>SignUp</h1>
                <input className='w-full px-4 py-2 border border-gray-400 rounded-lg' type="text" name="username" placeholder='Username' value={formData.username} onChange={handleChange} />
                <input className='w-full px-4 py-2 border border-gray-400 rounded-lg' type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
                <input className='w-full px-4 py-2 border border-gray-400 rounded-lg' type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
                <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700'>SignUp</button>
                <h2 className='flex justify-center items-center text-md'>Already have an account? <Link to={'/signin'}> <span className='text-orange-400 underline'>Signin</span> </Link></h2>
            </form>
        </div>
        
    )
}

export default Signup
