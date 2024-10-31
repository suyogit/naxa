import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); //toggeling

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav>
        <div className="flex items-center justify-between max-w-[1380px] mx-auto my-2">
          <div className="ml-7">
            <Link to="/" className="flex items-center max-w-32 p-2">
              <img src={logo} alt="" />
            </Link>
          </div>

          {/*   for Desktop */}
          <div className="hidden lg:flex items-center justify-between">
            <Link to="/services">
              <h2 className="ml-2 mr-2 text-lg px-4">Services</h2>
            </Link>
            {/* <Link to="/">
              <h2 className="ml-2 mr-2 text-lg px-4">Portfolio</h2>

            </Link> */}
            <div className="relative group">
              <button className="ml-2 mr-2 text-lg px-4 flex items-center">
                Portfolio <span className="text-xs">▼</span>
              </button>
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded mt-1">
                <Link to="/" className="px-4 py-2 hover:bg-gray-100">
                  General
                </Link>
                <Link to="/" className="px-4 py-2 hover:bg-gray-100">
                  International
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="ml-2 mr-2 text-lg px-4 flex items-center">
                Company <span className="text-xs">▼</span>
              </button>
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded mt-1 ">
                <Link to="/" className="px-4 py-2 hover:bg-gray-100">
                  About us
                </Link>
                <Link to="/" className="px-4 py-2 hover:bg-gray-100">
                  Team
                </Link>
                <Link to="/" className="px-4 py-2 hover:bg-gray-100">
                  Work with us
                </Link>
                <Link to="/" className="px-4 py-2 hover:bg-gray-100">
                  Awards & Achievements
                </Link>
              </div>
            </div>
            <Link to="/">
              <h2 className="ml-2 mr-2 text-lg px-4">GeoAI</h2>
            </Link>
            <div className="relative group">
              <button className="ml-2 mr-2 text-lg px-4 flex items-center whitespace-nowrap">
                Events & Media <span className="text-xs">▼</span>
              </button>
              <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded mt-1">
                <Link to="/" className="px-4 py-2 hover:bg-gray-100">
                  Events
                </Link>
                <Link to="/" className="px-4 py-2 hover:bg-gray-100">
                  Media
                </Link>
                <Link to="/" className="px-4 py-2 hover:bg-gray-100">
                  Publications
                </Link>
              </div>
            </div>
            <Link to="/">
              <h2 className="ml-2 mr-2 text-lg px-4">Blogs</h2>
            </Link>
          </div>

          <Button />

          {/* hamburger icon  */}
          <div
            className="block lg:hidden mr-7 cursor-pointer "
            onClick={toggleMenu}
          >
            <div className="h-1 w-8 bg-customham mb-1"></div>
            <div className="h-1 w-8 bg-customham mb-1"></div>
            <div className="h-1 w-8 bg-customham mb-1"></div>
          </div>
        </div>
        {/* for mobile*/}
        <div
          className={`fixed top-0 right-0 w-96 h-full bg-gradient-to-b from-[#EFAA01] to-[#F0AC01] shadow-lg transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-5xl text-blue-700 "
            onClick={closeMenu}
          >
            &times;
          </button>
          <div className="flex flex-col items-center pt-16">
            <Link to="/services" className="text-lg py-2">
              Services
            </Link>
            <Link to="/" className="text-lg py-2">
              Portfolio
            </Link>
            <Link to="/" className="text-lg py-2">
              Company
            </Link>
            <Link to="/" className="text-lg py-2">
              GeoAI
            </Link>
            <Link to="/" className="text-lg py-2">
              Events & Media
            </Link>
            <Link to="/" className="text-lg py-2">
              Blogs
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
