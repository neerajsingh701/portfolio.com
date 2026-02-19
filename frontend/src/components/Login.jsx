
import { useState } from "react";
import axios from "../api/axios.js"
import { useNavigate } from "react-router-dom"


import { toast } from "react-toastify";

const Login = ({ setToken }) => {

    const navigate = useNavigate()
    // creating the useState for stong the login data which
    // User is typing 
    const [form, setForm] = useState({ email: "", password: "" })
    const [message, setMessage] = useState("");

    // when the user is typing its onchanging based on user input
    // so it work bcs of this function
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // now we handling the submit  btn
    // when the user submit the data it runs this function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("/users/login", form);

            // storing the token

            // updating the parent state

            setMessage("Login successful ✅");
            setForm({ email: "", password: "" })
            localStorage.setItem("token", res.data.token)
            setToken(res.data.token)
            navigate("/")
            toast.success("Login Successful ✅")



        } catch (error) {
            setMessage(error.response?.data?.message || "Error occured");
            toast.error("Login failed ❌")

        }
    }



    return (
        <div className="bg-gray-400 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* this is email input */}
                    <input
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-indigo-500"
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

                    {/*the below is submit button  */}
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>
                </form>
                {message && (
                    <p className="mt-4 text-center text-green-500">{message}</p>
                )}
            </div>
        </div>
    )
}

export default Login
