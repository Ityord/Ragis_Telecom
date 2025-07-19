import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Logo: React.FC = () => (
    <NavLink to="/" className="flex items-center shrink-0">
        <img src="./src/asssets/logoss.png" alt="RAGAS Logo" className="h-20 w-auto" />
    </NavLink>
);

const NavLinks: React.FC<{className?: string, onLinkClick?: () => void}> = ({ className, onLinkClick }) => (
    <div className={className}>
        <NavLink onClick={onLinkClick} to="/" className="transition hover:text-[#D9A299]">Home</NavLink>
        <NavLink onClick={onLinkClick} to="/about" className="transition hover:text-[#D9A299]">About</NavLink>
        <NavLink onClick={onLinkClick} to="/products" className="transition hover:text-[#D9A299]">Products</NavLink>
        <NavLink onClick={onLinkClick} to="/contact" className="transition hover:text-[#D9A299]">Contact Us</NavLink>
    </div>
);


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#FAF7F3]/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-5 py-4 flex items-center justify-between">
                <Logo />
                <div className="hidden md:flex items-center text-base font-medium">
                    <NavLinks className="flex items-center space-x-10" />
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden bg-[#FAF7F3] pb-4">
                     <NavLinks onLinkClick={() => setIsOpen(false)} className="flex flex-col items-center space-y-6 text-base font-medium" />
                </div>
            )}
        </header>
    );
};

export default Header;