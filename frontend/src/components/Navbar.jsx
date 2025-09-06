import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const linkClass = (path) =>
    `px-3 py-1 rounded ${
      location.pathname === path
        ? "bg-white text-blue-600 font-semibold"
        : "hover:bg-blue-500"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-400 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Pantry Tracker 🛒</h1>
        <div className="space-x-2">
          {token ? (
            <>
              <Link to="/" className={linkClass("/")}>
                Home
              </Link>
              <Link to="/expiringSoon" className={linkClass("/expiringSoon")}>
                Expiring Soon
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded bg-red-500 hover:bg-red-600"
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
