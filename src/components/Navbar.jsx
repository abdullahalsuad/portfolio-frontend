import { use, useState } from "react";
import { FaBars, FaTimes, FaBox } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { GiMoonBats } from "react-icons/gi";
import { Link, useLocation } from "react-router";
import { ThemeContext } from "../context";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // dark
  const { theme, toggleTheme } = use(ThemeContext);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FaBox className="h-8 w-8 text-gray-900 dark:text-white mr-2" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                MeowMove
              </span>
            </Link>
          </div>

          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors ${
                  isActive(link.href)
                    ? "text-emerald-600 dark:text-emerald-400 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* theme toggle */}
            <button
              onClick={toggleTheme}
              className="bg-gray-200 rounded-full p-2 h-10 w-10 flex items-center justify-center cursor-pointer"
            >
              <span className="inline-block transition-transform duration-300 transform hover:rotate-12">
                {theme === "dark" ? (
                  <FiSun className="text-black" size={20} />
                ) : (
                  <GiMoonBats size={20} />
                )}
              </span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 h-10 w-10 flex items-center justify-center cursor-pointer transition-colors duration-300"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-700">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 transition-colors ${
                    isActive(link.href)
                      ? "text-emerald-600 dark:text-emerald-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
