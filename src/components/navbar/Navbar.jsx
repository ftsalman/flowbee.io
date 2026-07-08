import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../lib/turtle-ui/components";
import { NavList } from "../../constants/NavbarData";

export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const renderNavItem = (item) => {
    if (item.type === "dropdown") {
      return (
        <div
          key={item.id}
          className="relative"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button
            onClick={() => toggleDropdown(item.id)}
            onMouseEnter={() => setActiveDropdown(item.id)}
            className="flex items-center gap-1 font-medium text-sm text-neutral-800 hover:text-neutral-600 transition-colors py-2 cursor-pointer"
          >
            <span>{item.label}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                activeDropdown === item.id ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {activeDropdown === item.id && (
            <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
              {item.items.map((subItem, idx) => (
                <a
                  key={idx}
                  href={subItem.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  {subItem.label}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (item.type === "brand-link") {
      return (
        <Link
          key={item.id}
          to={item.href}
          className="flex items-center gap-1.5 font-bold text-sm text-[#0f53de] hover:opacity-80 transition-opacity py-2"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z"
              fill="#0f53de"
            />
            <path
              d="M19 2L19.8 4.2L22 5L19.8 5.8L19 8L18.2 5.8L16 5L18.2 4.2L19 2Z"
              fill="#0f53de"
              opacity="0.7"
            />
          </svg>
          <span className="tracking-wide">{item.label}</span>
        </Link>
      );
    }

    return (
      <Link
        key={item.id}
        to={item.href}
        className="font-medium text-sm text-neutral-800 hover:text-neutral-600 transition-colors py-2"
      >
        {item.label}
      </Link>
    );
  };
  return (
    <>
      <div className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 select-none">
        {/* Top Yellow Strip */}
        {/* <div className="h-1 bg-[#FFD400] w-full" /> */}

        {/* Main Navbar Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Brand / Logo */}
          <div className="flex items-center justify-start flex-1">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/images/logo.png" alt="Logo" className="h-5 w-auto" />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center justify-center flex-auto gap-7">
            {NavList.map((item) => renderNavItem(item))}
             <a 
              href="https://support.flowbee.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-black hover:text-gray-500 transition-colors"
            >
              Support
            </a>
          </nav>

          {/* Right: Action Buttons */}
          <div className="flex items-center justify-end gap-3.5 flex-1">
            <a
              href="https://app.flowbee.io/auth/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="sm">
                Login
              </Button>
            </a>

            <a
              href="https://app.flowbee.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
