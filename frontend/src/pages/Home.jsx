import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white overflow-hidden relative">
      {/* 🔥 Neon Blurry Background Orbs */}
      <div className="absolute w-[600px] h-[600px] bg-[#00FFE0]/20 blur-[200px] rounded-full -top-20 -left-20"></div>
      <div className="absolute w-[500px] h-[500px] bg-[#9d00ff]/20 blur-[220px] rounded-full bottom-0 right-0"></div>

      {/* 🟦 Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 relative z-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#00FFE0] drop-shadow-[0_0_15px_#00FFE0]">
          Pantry Tracker
        </h1>

        <p className="text-gray-300 mt-5 max-w-2xl text-lg">
          Track, organize, and stay ahead of expiration dates with your smart,
          neon-themed pantry management system.
        </p>

        <div className="mt-8 flex gap-5">
          <Link
            to="/pantry"
            className="px-7 py-3 bg-gradient-to-r from-[#00FFE0] to-[#00B2FF] rounded-xl text-black font-semibold 
                       hover:scale-105 transition-transform shadow-[0_0_15px_#00FFE060]"
          >
            View Pantry
          </Link>

          <Link
            to="/addItem"
            className="px-7 py-3 bg-gradient-to-r from-[#9d00ff] to-[#d000ff] rounded-xl text-white font-semibold 
                       hover:scale-105 transition-transform shadow-[0_0_15px_#9d00ff60]"
          >
            Add Items
          </Link>
        </div>

        {/* Illustration */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
          alt="Pantry Illustration"
          className="w-60 md:w-72 mt-12 drop-shadow-[0_0_25px_#00FFE040]"
        />
      </div>

      {/* 🔶 Feature Section */}
      <section className="relative z-20 px-8 pb-32">
        <h2 className="text-3xl font-bold text-center text-[#00FFE0] drop-shadow-[0_0_10px_#00FFE0] mb-10">
          Why Use Pantry Tracker?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div
            className="bg-[#0d1218]/40 backdrop-blur-xl p-6 rounded-2xl border border-[#00FFE0]/20 
                          shadow-[0_0_20px_#00FFE020] hover:shadow-[0_0_25px_#00FFE040] transition-all"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
              className="w-20 mx-auto mb-4 drop-shadow-[0_0_10px_#00FFE0]"
              alt="track"
            />
            <h3 className="text-xl font-semibold text-[#00FFE0] mb-2 text-center">
              Track Expiry Dates
            </h3>
            <p className="text-gray-300 text-center">
              Never waste groceries again. Keep track of all items with their
              expiration dates in one place.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#0d1218]/40 backdrop-blur-xl p-6 rounded-2xl border border-[#9d00ff]/20 
                          shadow-[0_0_20px_#9d00ff20] hover:shadow-[0_0_25px_#9d00ff40] transition-all"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              className="w-20 mx-auto mb-4 drop-shadow-[0_0_10px_#9d00ff]"
              alt="organize"
            />
            <h3 className="text-xl font-semibold text-[#d27aff] mb-2 text-center">
              Organize Easily
            </h3>
            <p className="text-gray-300 text-center">
              Add, edit, delete, and categorize items with a clean and modern
              interface.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#0d1218]/40 backdrop-blur-xl p-6 rounded-2xl border border-[#48dbfb]/20 
                          shadow-[0_0_20px_#48dbfb20] hover:shadow-[0_0_25px_#48dbfb40] transition-all"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3504/3504158.png"
              className="w-20 mx-auto mb-4 drop-shadow-[0_0_10px_#48dbfb]"
              alt="notification"
            />
            <h3 className="text-xl font-semibold text-[#48dbfb] mb-2 text-center">
              Stay Notified
            </h3>
            <p className="text-gray-300 text-center">
              Receive alerts for items that are expiring soon so you can use
              them before it’s too late.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
