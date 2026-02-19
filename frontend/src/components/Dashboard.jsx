


import { useEffect, useState } from "react";
import axios from "../api/axios.js";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ token, setToken }) => {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {

                const res = await axios.get("/users", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

                setUsers(res.data.data);

            } catch (error) {
                console.log(error.response?.data?.message);
            }
        }
        fetchUsers();
    }, [token])

    // this is for handling logout
    const handleLogout = () => {
        localStorage.removeItem("token")
        setToken(null)
        navigate("/login")
    }


    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
                <h3 className="text-lg font-semibold mb-4">All Users:</h3>

                {users.map((user) => (
                    <div
                        key={user._id}
                        className="border p-3 rounded-md mb-3 bg-gray-50"
                    >
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Dashboard
