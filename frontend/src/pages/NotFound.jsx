import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-red-600">
      <div className="bg-black/40 backdrop-blur-lg p-10 rounded-3xl shadow-2xl text-center max-w-lg">
        <h1 className="text-8xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>
        <p className="text-2xl text-white font-semibold mt-4">Page Not Found</p>
        <p className="text-white/70 mt-2 mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
