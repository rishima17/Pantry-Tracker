import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#05070d] bg-gradient-to-b from-transparent to-[#05070d] border-t border-[#00FFE0]/20 mt-20 relative overflow-hidden">
      {/* Neon Glow Backgrounds */}
      <div className="absolute w-[500px] h-[500px] bg-[#00FFE0]/10 blur-[140px] rounded-full -top-10 -left-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-[#00B2FF]/10 blur-[140px] rounded-full bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 text-[#E0FFFF]">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#00FFE0] to-[#00B2FF] text-transparent bg-clip-text drop-shadow-[0_0_10px_#00FFE0]">
              FreshKeep
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              A futuristic pantry management system with expiry alerts, neon
              dashboards, and a smooth cyber-UI theme built for modern users.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#00FFE0] drop-shadow-[0_0_10px_#00FFE0]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#00FFE0] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00FFE0] transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#00FFE0] transition">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-[#00FFE0] transition"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#00FFE0] drop-shadow-[0_0_10px_#00FFE0]">
              Connect With Us
            </h3>

            <p className="text-sm text-gray-300 mb-4">
              For suggestions or collaboration, feel free to reach out.
            </p>

            {/* Icons */}
            <div className="flex items-center gap-6 text-2xl">
              <a
                href="mailto:rishima1711@gmail.com"
                className="text-gray-300 hover:text-[#00FFE0] transition drop-shadow-[0_0_10px_#00FFE0]"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://github.com/rishima17"
                target="_blank"
                className="text-gray-300 hover:text-[#00FFE0] transition drop-shadow-[0_0_10px_#00FFE0]"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-300 hover:text-[#00FFE0] transition drop-shadow-[0_0_10px_#00FFE0]"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#00FFE0]/20 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Pantry Tracker. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Designed with <span className="text-pink-400">❤️</span> in a
            <span className="text-[#00FFE0] font-semibold">
              {" "}
              cyber-neon universe
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
