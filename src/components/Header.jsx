import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiChevronDown, FiPhoneCall, FiMenu, FiX, FiClock, FiMapPin } from "react-icons/fi";
import gsap from "gsap";
import { navLinks } from "../constants";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const menuRef = useRef(null);
  const linkItemsRef = useRef([]);
  const navigate = useNavigate();

  const PHONE_DISPLAY = "01815-667766";
  const PHONE_LINK = "01815667766";

  // Toggle Function with GSAP
  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        linkItemsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out", delay: 0.2 }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          setIsMenuOpen(false);
          setOpenDropdown(null);
        },
      });
    }
  };

  const toggleMobileDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white shadow-md border-b border-sky-50 py-3">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="relative z-[110]" onClick={() => isMenuOpen && toggleMenu()}>
          <img src={logo} alt="Dentopia" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((nav) => (
            <div key={nav.id} className="relative group">
              {!nav.submenu ? (
                <NavLink 
                  to={nav.id} 
                  className={({ isActive }) => `text-[13px] uppercase tracking-widest font-bold transition-all ${
                    isActive ? "text-sky-600" : "text-slate-700 hover:text-sky-600"
                  }`}
                >
                  {nav.title}
                </NavLink>
              ) : (
                <div className="flex items-center gap-1 cursor-pointer text-[13px] uppercase tracking-widest font-bold text-slate-700 hover:text-sky-600 py-2">
                  {nav.title} <FiChevronDown className="group-hover:rotate-180 transition-transform" />
                  
                  {/* Dropdown Desktop */}
                  <div className="absolute top-full -left-4 w-64 bg-white shadow-2xl rounded-xl border border-sky-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 p-2">
                    {nav.submenu.map((sub) => (
                      <Link 
                        key={sub.id} 
                        to={`/services/${sub.id}`} 
                        className="block px-4 py-2.5 text-[14px] text-slate-600 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-all"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Solid Contact Button */}
          <a 
            href={`tel:${PHONE_LINK}`} 
            className="flex items-center gap-2 bg-sky-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-slate-900 transition-all shadow-lg shadow-sky-100"
          >
            <FiPhoneCall />
            <span className="text-sm">{PHONE_DISPLAY}</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-4 relative z-[110]">
          <a href={`tel:${PHONE_LINK}`} className="text-sky-600 font-bold text-sm hidden sm:block">
            {PHONE_DISPLAY}
          </a>
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-lg bg-slate-100 text-slate-900 active:scale-90 transition-transform"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-white z-[105] flex flex-col translate-x-full opacity-0 invisible lg:hidden"
      >
        <div className="flex-1 pt-24 px-8 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((nav, index) => (
              <div key={nav.id} ref={(el) => (linkItemsRef.current[index] = el)} className="border-b border-slate-50 last:border-none">
                {!nav.submenu ? (
                  <NavLink 
                    to={nav.id} 
                    onClick={toggleMenu} 
                    className="block py-4 text-2xl font-bold text-slate-900"
                  >
                    {nav.title}
                  </NavLink>
                ) : (
                  <div className="py-4">
                    <button 
                      onClick={() => toggleMobileDropdown(nav.id)} 
                      className="flex justify-between items-center w-full text-2xl font-bold text-slate-900"
                    >
                      {nav.title} 
                      <FiChevronDown className={`transition-transform duration-300 ${openDropdown === nav.id ? "rotate-180 text-sky-500" : ""}`} />
                    </button>
                    
                    {openDropdown === nav.id && (
                      <div className="mt-4 space-y-4 pl-4 border-l-2 border-sky-500">
                        {nav.submenu.map((sub) => (
                          <Link 
                            key={sub.id} 
                            to={`/services/${sub.id}`} 
                            onClick={toggleMenu} 
                            className="block text-lg text-slate-500 font-medium"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Info Footer */}
        <div className="p-6 bg-slate-50 mt-auto">
          <a href={`tel:${PHONE_LINK}`} className="flex items-center justify-center gap-3 bg-sky-600 text-white py-4 rounded-xl font-bold text-lg mb-4">
            <FiPhoneCall /> {PHONE_DISPLAY}
          </a>
          <div className="text-center text-slate-400 text-xs space-y-1">
            <p>House 04, Road 10, DIT Project, Merul Badda, Dhaka</p>
            <p>Saturday - Thursday: 10AM - 9PM</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;