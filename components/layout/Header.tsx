import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SERVICES } from '../../constants';

const Logo = () => (
    <Link to="/" className="flex items-center text-farco-charcoal">
      <div className="text-3xl font-logo tracking-wide">
        <span className="font-extrabold">FARCO</span>
        <span className="font-semibold">GLOBAL</span>
      </div>
    </Link>
);

const NavLinks = ({ onLinkClick, className }: { onLinkClick?: () => void, className?: string }) => {
    const linkBaseStyle = "relative font-semibold text-farco-charcoal/80 py-2 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-farco-blue after:transition-all after:duration-300 hover:text-farco-blue hover:after:w-full";
    const activeLinkStyle = "text-farco-blue after:w-full";

    const mobileLinkBaseStyle = "font-semibold text-white/90 py-2 transition-colors duration-300";
    const mobileActiveLinkStyle = "text-farco-sky-blue";
    
    const baseStyle = className?.includes('text-2xl') ? mobileLinkBaseStyle : linkBaseStyle;
    const activeStyle = className?.includes('text-2xl') ? mobileActiveLinkStyle : activeLinkStyle;


    return (
        <>
            <NavLink to="/ship-marketplace" onClick={onLinkClick} className={({ isActive }) => `${baseStyle} ${className} ${isActive ? activeStyle : ''}`}>Ship Marketplace</NavLink>
            <NavLink to="/about" onClick={onLinkClick} className={({ isActive }) => `${baseStyle} ${className} ${isActive ? activeStyle : ''}`}>About Us</NavLink>
            <NavLink to="/news" onClick={onLinkClick} className={({ isActive }) => `${baseStyle} ${className} ${isActive ? activeStyle : ''}`}>News</NavLink>
            <NavLink to="/contact" onClick={onLinkClick} className={({ isActive }) => `${baseStyle} ${className} ${isActive ? activeStyle : ''}`}>Contact</NavLink>
        </>
    );
};

const ServicesDropdown = () => {
    const location = useLocation();
    const isServiceActive = location.pathname.startsWith('/services');

    const linkBaseStyle = "relative font-semibold text-farco-charcoal/80 py-2 transition-colors duration-300 flex items-center gap-1 after:content-[''] after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-farco-blue after:transition-all after:duration-300 hover:text-farco-blue hover:after:w-full";
    const activeLinkStyle = "text-farco-blue after:w-full";

    return (
        <div className="relative group">
            <NavLink to="/services" className={`${linkBaseStyle} ${isServiceActive ? activeLinkStyle : ''}`}>
                Services
                <svg className="w-4 h-4 mt-0.5 transition-transform duration-300 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </NavLink>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-2xl p-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50 border border-gray-100">
                <NavLink to="/services" className="block w-full text-left px-4 py-2 text-farco-charcoal rounded-md hover:bg-farco-gray font-semibold">All Services</NavLink>
                <div className="my-1 border-t border-gray-100"></div>
                {SERVICES.map(service => (
                    <NavLink
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="block w-full text-left px-4 py-2 text-farco-charcoal rounded-md hover:bg-farco-gray"
                    >
                        {service.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

const MobileMenuToggle: React.FC<{ isOpen: boolean, onClick: () => void }> = ({ isOpen, onClick }) => (
    <button onClick={onClick} className="text-farco-charcoal focus:outline-none w-8 h-8 flex flex-col justify-center items-center" aria-label="Toggle menu">
      <svg className="w-8 h-8" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
        <path d="M 20,29.000046 H 80.000231" className="transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg) translate(20px, -20px)' : 'none' }}></path>
        <path d="M 20,50 H 80.000231" className="transition-opacity duration-300" style={{ opacity: isOpen ? 0 : 1 }}></path>
        <path d="M 20,70.999954 H 80.000231" className="transition-transform duration-300" style={{ transform: isOpen ? 'rotate(-45deg) translate(20px, 20px)' : 'none' }}></path>
      </svg>
    </button>
);


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => setIsMenuOpen(false);
    
    useEffect(() => {
        if(isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    const headerClass = "sticky top-0 z-50 transition-colors duration-300 bg-white shadow-md";

    return (
        <header className={headerClass}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
                <Logo />
                <nav className="hidden lg:flex items-center space-x-8 text-base">
                    <ServicesDropdown />
                    <NavLinks />
                </nav>
                <div className="hidden lg:flex items-center space-x-4">
                     <Link to="/auth" className="flex items-center space-x-2 text-farco-charcoal/80 font-semibold py-2 px-3 rounded-md hover:bg-farco-gray hover:text-farco-blue transition-colors duration-300 text-sm">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                       <span>Log in</span>
                    </Link>
                    <Link to="/quote" className="bg-farco-blue text-white font-bold py-2 px-5 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-sm text-sm">
                        Request a Quote
                    </Link>
                </div>
                <div className="lg:hidden">
                    <MobileMenuToggle isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-farco-blue/95 backdrop-blur-xl z-[-1] transition-transform duration-500 ease-in-out ${isMenuOpen ? 'transform-none' : '-translate-y-full'}`}>
                 <div className="h-full flex flex-col justify-center items-center pt-20 overflow-y-auto">
                    <nav className="flex flex-col items-center space-y-6 text-2xl">
                       <NavLink to="/services" onClick={handleLinkClick} className={({isActive}) => `font-bold text-white/90 ${isActive && 'text-farco-sky-blue'}`}>Services</NavLink>
                        <NavLinks onLinkClick={handleLinkClick} className="text-2xl" />
                    </nav>
                     <div className="mt-12 px-6 w-full max-w-xs flex flex-col space-y-4">
                        <Link to="/quote" onClick={handleLinkClick} className="block w-full text-center bg-farco-sky-blue text-white font-bold py-3 px-5 rounded-md hover:bg-opacity-90 transition-all duration-300">
                            Request a Quote
                        </Link>
                         <Link to="/auth" onClick={handleLinkClick} className="w-full text-center border border-white/50 text-white font-semibold py-2.5 px-5 rounded-md hover:bg-white/10 transition-all flex items-center justify-center space-x-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                            <span>Log in / Sign Up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
