import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Home, Clock, Package, User } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const token = localStorage.getItem("token");

  const linkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
      location.pathname === path
        ? "bg-[#101820] text-[#00FFE0] font-semibold shadow-[0_0_10px_#00FFE0] scale-105 border border-[#00FFE0]/40"
        : "text-gray-300 hover:text-[#00FFE0] hover:bg-[#0a0f14] hover:shadow-[0_0_8px_#00FFE0]"
    }`;

  const mobileLinkClass = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
      location.pathname === path
        ? "bg-[#0d1218] text-[#00FFE0] shadow-[0_0_10px_#00FFE0] border border-[#00FFE0]/40"
        : "text-gray-400 hover:text-[#00FFE0] hover:bg-[#E0FFFF]/10 hover:shadow-[0_0_6px_#00FFE0]"
    }`;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-[#0a0f14] backdrop-blur-xl shadow-[0_0_20px_#00F7FF20] sticky top-0 z-50 border-b border-[#00FFE0]/20">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFE0] to-[#00B2FF] tracking-wide hover:scale-110 transition-transform drop-shadow-[0_0_10px_#00F7FF]"
        >
          <Package className="w-7 h-7 text-[#00FFE0] drop-shadow-[0_0_8px_#00F7FF]" />
          <span>FreshKeep</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex space-x-2 items-center">
          <Link to="/" className={linkClass("/")}>
            <Home className="w-4 h-4" />
            Home
          </Link>

          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>

          <Link to="/expiringSoon" className={linkClass("/expiringSoon")}>
            <Clock className="w-4 h-4" />
            Expiring Soon
          </Link>

          {!token ? (
            <>
              {/* Login Button */}
              <Link
                to="/login"
                className="px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-[#00FFE0] to-[#00B2FF] text-black shadow-[0_0_10px_#00F7FF] hover:scale-110 transition"
              >
                Login
              </Link>

              {/* Register Button */}
              <Link
                to="/register"
                className="px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-[#7efff5] to-[#48dbfb] text-black shadow-[0_0_10px_#00F7FF] hover:scale-110 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className={linkClass("/profile")}>
                <User className="w-4 h-4" />
                Profile
              </Link>

              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-red-700 text-white hover:scale-110 transition shadow-[0_0_12px_#ff3b3b]"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-[#0d1218] text-white transition"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#00FFE0]" />
          ) : (
            <Menu className="w-6 h-6 text-[#00FFE0]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1116]/80 backdrop-blur-xl border-t border-[#00FFE0]/20">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              to="/"
              className={mobileLinkClass("/")}
              onClick={closeMobileMenu}
            >
              <Home className="w-5 h-5" />
              Home
            </Link>

            <Link
              to="/about"
              className={mobileLinkClass("/about")}
              onClick={closeMobileMenu}
            >
              About
            </Link>

            <Link
              to="/expiringSoon"
              className={mobileLinkClass("/expiringSoon")}
              onClick={closeMobileMenu}
            >
              <Clock className="w-5 h-5" />
              Expiring Soon
            </Link>

            {!token ? (
              <>
                <Link
                  to="/login"
                  className={mobileLinkClass("/login")}
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className={mobileLinkClass("/register")}
                  onClick={closeMobileMenu}
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
                className="w-full px-4 py-3 rounded-xl mt-2 bg-gradient-to-r from-red-500 to-red-700 text-white shadow-[0_0_12px_#ff3b3b]"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
