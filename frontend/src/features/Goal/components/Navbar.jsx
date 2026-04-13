import {Link} from "react-router-dom";
import { useState,useEffect, useRef } from "react";


export default function Navbar() {

  
    const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
 


   useEffect(() => {
    function handleOutsideClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }


     document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);


  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#0e0e0e]/70 backdrop-blur-xl border-b border-[#1a1a1a] font-['Space_Grotesk']">

      {/* Logo */}
      <Link to="/" className="text-xl font-black tracking-[0.15em] text-[#00ff87] uppercase flex items-center gap-2">
       <i className="ri-target-line text-3xl text-[#00ff87]"></i> GoalTracker
      </Link>



     {/* Avatar with Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown(prev => !prev)}
          className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-sm text-[#00ff87] font-black hover:border-[#00ff87]/40 transition-all duration-200"
        >
          A
        </button>
 
        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute right-0 top-12 w-48 bg-[#111] border border-[#1a1a1a] shadow-[0_8px_30px_rgba(0,0,0,0.5)] z-50">
 
            <button
              onClick={() => setShowDropdown(false)}
              className="w-full flex items-center gap-3 px-4 py-3 text-[#555] hover:text-white hover:bg-[#1a1a1a] transition-all duration-200 text-[11px] uppercase tracking-widest font-['Space_Grotesk']"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Change Avatar
            </button>
 
            <div className="h-px bg-[#1a1a1a]" />
 
            <button
              onClick={() => setShowDropdown(false)}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-500/60 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 text-[11px] uppercase tracking-widest font-['Space_Grotesk']"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Logout
            </button>
 
          </div>
        )}
      </div>

    </header>
  );
}