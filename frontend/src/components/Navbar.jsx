

import { NavLink, useNavigate } from "react-router-dom"
import { HiMenu, HiX } from "react-icons/hi"
import { useState } from "react";

const Navbar = ({ token, setToken }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
        navigate("/")
    }

    // menu bar kay liye state function
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className="bg-[#130b3a] text-white px-8 py-4 shadow-md">
            <div className="  px-6 py-4 flex justify-between items-center">

                {/* left side */}
                <div className="text-2xl font-bold">

                    {/* Logo will come here */}
                    <NavLink to="/" className={"text-white hover:text-sky-600 transitions cursor-pointer"}>Neeraj.dev</NavLink>
                </div>

                {/* all NavLinks here */}
                <div className="hidden md:flex gap-8 text-sm font-medium items-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-sky-600 font-semibold border-b-2 border-sky-600 pb-1"
                                : "text-white hover:text-sky-600 transitions"
                        }

                    >
                        Home
                    </NavLink>

                    <NavLink to="/projects"
                        className={({ isActive }) =>
                            isActive ? "text-sky-600 font-semibold border-b-2 border-sky-600 pb-1"
                                : "text-white hover:text-sky-600 transitions"
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-sky-600 font-semibold border-b-2 border-sky-600 pb-1"
                                : "text-white hover:text-sky-600 transitions"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "text-sky-600 font-semibold border-b-2 border-sky-600 pb-1"
                                : "text-white hover:text-sky-600 transitions"
                        }
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "text-sky-600 font-semibold border-b-2 border-sky-600 pb-1"
                                : "text-white hover:text-sky-600 transitions"
                        }
                    >
                        Dashboard
                    </NavLink>

                    {/* Hear is the right part */}
                    {!token ? (
                        <>
                            <NavLink
                                to="/login"
                                className="px-4 py-1 border border-white rounded hover:bg-white hover:text-[#130b3a] transition"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="px-4 py-1 border border-white rounded hover:bg-white hover:text-[#130b3a] transition"
                            >
                                Register
                            </NavLink>
                        </>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="px-4 py-1 border border-white hover:bg-red-500 hover:text-[#ffffff] transition"
                        >
                            Logout
                        </button>
                    )
                    }
                </div>

                {/* here is an mobile hamburger  */}

                <div className="md:hidden text-2xl">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>


            {/* Mobile Menu icos */}
            {menuOpen && (
                <div className="md:hidden bg-[#1c1445] px-6 pb-4 flex flex-col gap-4 rounded-lg">
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-sky-600 font-semibold border-b-2 border-sky-600 pb-1" : "text-white hover:text-sky-600"
                    } onClick={() => setMenuOpen(false)} >Home</NavLink>

                    <NavLink to="/projects" className={({ isActive }) =>
                        isActive ? "text-sky-600 font-semibold border-b-2 border-sky-600 pb-1" : "text-white hover:text-sky-600"
                    } onClick={() => setMenuOpen(false)} >Projects</NavLink>

                    <NavLink to="/about" className={({ isActive }) =>
                        isActive ? "text-sky-600 font-semibold border-b-2 border-sky-600 pb-1" : "text-white hover:text-sky-600"
                    } onClick={() => setMenuOpen(false)} >About</NavLink>

                    <NavLink to="/contact" className={({ isActive }) =>
                        isActive ? "text-sky-600 font-semibold border-b-2 border-sky-600 pb-1" : "text-white hover:text-sky-600"
                    } onClick={() => setMenuOpen(false)} >Contact</NavLink>

                    <NavLink to="/dashboard" className={({ isActive }) =>
                        isActive ? "text-sky-600 font-semibold border-b-2 border-sky-600 pb-1" : "text-white hover:text-sky-600"
                    } onClick={() => setMenuOpen(false)} >Dashboard</NavLink>


                    {/* agar token nahi hhai tho ye dhikana */}
                    {!token ? (

                        <>

                            <NavLink
                                to="/login"
                                onClick={() => setMenuOpen(false)}
                                className="px-4 py-2 bg-white text-black rounded-lg hover:text-white hover:bg-sky-600  transition"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                onClick={() => setMenuOpen(false)}
                                className="px-4 py-2 bg-white text-black rounded-lg hover:text-white hover:bg-sky-600 transition"
                            >
                                Register
                            </NavLink>

                        </>

                    ) : (

                        <button
                            onClick={handleLogout}
                            className="px-4 py-1 border border-white hover:bg-red-500 hover:text-[#ffffff] transition"
                        >
                            Logout
                        </button>
                    )}

                </div>
            )}
        </nav>

    )
}

export default Navbar
