

import { useState } from "react";
import axios from "../api/axios.js";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'




const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [message, setMessage] = useState("");


    // when the user is typing its onchanging based on user input
    // so it work bcs of this function
    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    // now we handling the submit  btn
    // when the user submit the data it runs this function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const res = await axios.post("/users/register", form);
            setMessage(res.data.message);
            setForm({ name: "", email: "", password: "" });

            toast.success("You are registered now you can log in..✅");
            navigate("/login");


        } catch (error) {
            setMessage(error.response?.data?.message || "Error occured")
            toast.error("Error occured");
            toast.error("Register failed");
        }
    }






    return (
        <div className="bg-gray-400 min-h-screen flex items-center justify-center ">
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* this is name input */}
                    <input
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    {/* this is mail input */}
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    {/* this is password input */}
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    {/* this is the submit btn */}
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                    >
                        Register
                    </button>
                </form>

                {message &&
                    <p className="mt-4 text-center text-red-500">
                        {message}
                    </p>
                }

            </div>

        </div>
    )
}

export default Register
