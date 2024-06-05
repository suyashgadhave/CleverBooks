import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowNavbar(false);
        } else {
            // Scrolling up
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 left-0 w-full bg-black bg-opacity-50 shadow-md z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="text-2xl font-bold text-white">Cleverbooks Logo</div>   
                <div>
                    <ul className="flex space-x-8">
                        <li><a href="#produvt" className="text-white hover:text-gray-300">Product</a></li>
                        <li><a href="#pricing" className="text-white hover:text-gray-300">Pricing</a></li>
                        <li><a href="#customer-stories" className="text-white hover:text-gray-300">Customer Stories</a></li>
                        <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
                        <li><a href="#blog" className="text-white hover:text-gray-300">Blog</a></li>
                    </ul>
                </div>
                <div>
                <ul className="flex space-x-8">
                    <li><a href="#login" className="text-white hover:text-gray-300">Login</a></li>
                    <li><a href="#contact" className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600">Talk to Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
