
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import personImage from '../assets/right_illustration.png'
import AnnouncementBar from "../components/AnnouncementBar";
// import BestSellersSection from "../components/BestSeller";
import ProductList from "../components/products/ProductList";
import ProductHighlights from "../components/products/ProductHighlights";
import Cart from "./CartPage";


const SkinCareLanding = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();  // initialize navigate

    // Logout handler
    const handleLogout = () => {
        // Optional: clear any auth tokens or user data here
        navigate("/login");  // redirect to login page
    };

    return (
        <div className="min-h-screen bg-[#faf6f2] flex flex-col">
            {/* Header */}
            <header className="flex justify-between items-center px-6 md:px-10 py-6 relative">
                {/* Logo  */}
                <div className="text-[#5f7c6e] text-2xl font-bold">Rive Naturals
                    <span className="inline-block align-middle">
                        <svg width="40" height="40" viewBox="0 0 64 64" fill="none">

                            <path
                                d="M48 8C48 8 62 28 54 46C50.5 54.5 38 60 30 52C22 44 32 20 48 8Z"
                                fill="#5B8671"
                                stroke="#386150"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M16 20C16 20 8 36 18 48C24 56 38 54 40 44C42 34 28 26 16 20Z"
                                fill="#A7C3A1"
                                stroke="#386150"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M39 52C39 52 48 36 48 8"
                                stroke="#386150"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />

                            <path
                                d="M24 48C24 48 18 36 16 20"
                                stroke="#386150"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>

                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-10 text-[#5f7c6e] text-2xl font-medium">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <a href="#" className="hover:underline">Service</a>
                </nav>

                {/* Desktop Auth Links */}
                <div className="hidden md:flex gap-2 text-[#5f7c6e] text-lg">
                    <Link to="/login" className="hover:underline">Sign in</Link>
                    <span>/</span>
                    <Link to="/register" className="hover:underline">Register</Link>
                    {/* Logout button */}
                    <button
                        onClick={handleLogout}
                        className="ml-4 p-2 bg-[#a7c3a1] text-white rounded hover:bg-[#8db38a] transition"
                        aria-label="Logout"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
                        </svg>
                    </button>
                </div>

                {/* Hamburger for Mobile */}
                <button
                    className="md:hidden flex flex-col justify-center items-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="block w-8 h-1 bg-[#5f7c6e] mb-1 rounded"></span>
                    <span className="block w-8 h-1 bg-[#5f7c6e] mb-1 rounded"></span>
                    <span className="block w-8 h-1 bg-[#5f7c6e] rounded"></span>
                </button>
                
                {/* Cart Button */}
                {/*  Cart Component */}
                <Cart />

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-6 gap-4 md:hidden animate-fade-in-down">
                        <a href="#" className="text-[#5f7c6e] text-xl font-medium hover:underline" onClick={() => setMenuOpen(false)}>Home</a>
                        <a href="#" className="text-[#5f7c6e] text-xl font-medium hover:underline" onClick={() => setMenuOpen(false)}>About</a>
                        <a href="#" className="text-[#5f7c6e] text-xl font-medium hover:underline" onClick={() => setMenuOpen(false)}>Contact</a>
                        <a href="#" className="text-[#5f7c6e] text-xl font-medium hover:underline" onClick={() => setMenuOpen(false)}>Service</a>
                        <div className="flex gap-2 text-[#5f7c6e] text-lg">
                            <Link to="/login" className="hover:underline" onClick={() => setMenuOpen(false)}>Sign in</Link>
                            <span>/</span>
                            <Link to="/register" className="hover:underline" onClick={() => setMenuOpen(false)}>Register</Link>
                            {/* Logout button */}
                    <button
                        onClick={handleLogout}
                        className="ml-4 p-2 bg-[#a7c3a1] text-white rounded hover:bg-[#8db38a] transition"
                        aria-label="Logout"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
                        </svg>
                    </button>
                        </div>

                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-10 md:px-20">
                {/* Left Section */}
                <div className="max-w-xl mt-10 md:mt-0">
                    <h1 className="text-6xl font-bold text-[#4c6b5a] mb-4">Skin Care</h1>
                    <p className="text-[#7e9a86] text-lg mb-6">
                        Everyone dreams of beautiful skin.<br />
                        We are ready to do anything to achieve the ideal.<br />
                        But often, just a few very simple steps are enough<br />
                        to keep our skin looking good.
                    </p>
                    <button className="bg-[#a7c3a1] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#8db38a] transition">
                        Read more
                    </button>
                    {/* Dots */}
                    <div className="flex gap-2 mt-6">
                        <span className="w-4 h-4 rounded-full bg-[#a7c3a1] inline-block"></span>
                        <span className="w-4 h-4 rounded-full bg-[#d9e5d6] inline-block"></span>
                        <span className="w-4 h-4 rounded-full bg-[#d9e5d6] inline-block"></span>
                    </div>
                </div>

                {/* Right Section - Illustration */}
                <div className="relative mt-16 md:mt-0">

                    <div className="absolute -left-10 top-10 z-0">
                        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                            <ellipse cx="90" cy="90" rx="90" ry="90" fill="#d9e5d6" />

                        </svg>
                    </div>
                    <div className="absolute left-28 top-24 z-0">
                        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                            <ellipse cx="80" cy="80" rx="80" ry="80" fill="#d9e5d6" />
                        </svg>
                    </div>

                    {/* Right  - Illustration */}
                    <div className="relative mt-16 md:mt-0">

                        <img
                            src={personImage}
                            alt="Person"
                            className="
        relative z-10
        w-[400px]   // default for mobile
        sm:w-[500px]
        md:w-[500px]
        lg:w-[480px]
        xl:w-[800px]
        2xl:w-[800px]
        h-auto
        object-contain
        rounded-3xl
        shadow-lg
        transition-all
        duration-300
    "/>
                    </div>
                </div>
            </main>
            {/* <div className="min-h-screen bg-[#faf6f2]"> */}

            <AnnouncementBar />
            <ProductHighlights />
            <ProductList />
        </div>
        // </div>
    );
};

export default SkinCareLanding;
