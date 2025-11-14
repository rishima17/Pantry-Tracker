import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "https://household-pantry-expiry-app.onrender.com/api/users/register",
        formData
      );
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#05070d] bg-gradient-to-br from-[#05070d] via-[#0b0f1d] to-[#111827] overflow-hidden">
      {/* Neon Glows */}
      <div className="absolute w-[650px] h-[650px] bg-[#00FFE0]/10 blur-[160px] rounded-full -top-16 -left-16"></div>
      <div className="absolute w-[550px] h-[550px] bg-[#9d00ff]/10 blur-[160px] rounded-full bottom-0 right-0"></div>

      {/* Card */}
      <div className="bg-[#0d1218]/60 backdrop-blur-2xl p-10 rounded-3xl shadow-[0_0_25px_#00FFE040] w-full max-w-md border border-[#00FFE0]/20">
        <h2 className="text-4xl font-extrabold text-center text-[#00FFE0] mb-6 drop-shadow-[0_0_10px_#00FFE0]">
          Create Account
        </h2>

        {error && (
          <p className="text-red-300 text-center mb-4 bg-red-500/20 p-2 rounded-lg shadow-[0_0_10px_#FF3B3B]">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="grid gap-5">
          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-[#00FFE0]/40 bg-[#0b0f14]/50 text-[#E0FFFF]
            placeholder-gray-400 p-3 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-[#00FFE0] 
            shadow-[0_0_8px_#00FFE030] transition-all duration-300"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-[#00FFE0]/40 bg-[#0b0f14]/50 text-[#E0FFFF]
            placeholder-gray-400 p-3 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-[#00FFE0] 
            shadow-[0_0_8px_#00FFE030] transition-all duration-300"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-[#00FFE0]/40 bg-[#0b0f14]/50 text-[#E0FFFF]
            placeholder-gray-400 p-3 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-[#00FFE0] 
            shadow-[0_0_8px_#00FFE030] transition-all duration-300"
          />

          {/* Register Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#00FFE0] to-[#00B2FF]
            text-[#001015] py-3 rounded-lg font-semibold
            hover:scale-105 hover:shadow-[0_0_18px_#00FFE0] 
            transition-all duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-gray-300 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#00FFE0] font-semibold hover:drop-shadow-[0_0_10px_#00FFE0]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
