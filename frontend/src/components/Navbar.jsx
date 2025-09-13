import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const linkClass = (path) =>
    `px-4 py-2 rounded-xl transition ${
      location.pathname === path
        ? "bg-white/90 text-blue-700 font-semibold shadow-md"
        : "text-white hover:bg-white/20"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-black/40 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand works as Home button */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-white tracking-wide hover:text-yellow-300 transition"
        >
          Pantry Tracker 🛒
        </Link>

        {/* Links */}
        <div className="space-x-3 flex items-center">
          {token ? (
            <>
              <Link to="/expiringSoon" className={linkClass("/expiringSoon")}>
                Expiring Soon
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={linkClass("/login")}>
                Login
              </Link>
              <Link to="/register" className={linkClass("/register")}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
