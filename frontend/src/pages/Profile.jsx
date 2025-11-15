import { useEffect, useState } from "react";
import axios from "axios";
import { User, Mail, Calendar, LogOut, Sparkles } from "lucide-react";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🛡️ Check login
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        "https://household-pantry-expiry-app.onrender.com/api/users/profile",
        { headers: { token } }
      );
      console.log("PROFILE RESPONSE:", res.data);

      setUser(res.data.user);
    } catch (err) {
      console.error("Error fetching profile:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (loading)
    return (
      <div className="min-h-screen bg-[#05080d] text-white flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#7efff5] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#05080d] text-white px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-[#7efff5] tracking-wide drop-shadow-[0_0_15px_#7efff5]">
          <Sparkles className="inline-block mr-2" size={40} /> Your Profile
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          Manage your account & pantry stats at one place.
        </p>
      </div>

      {/* Profile Card */}
      <div className="max-w-3xl mx-auto bg-[#0f0f15] border border-[#1f1f27] p-10 rounded-3xl shadow-[0_0_40px_rgba(126,255,245,0.18)] backdrop-blur-md">
        {/* User Avatar */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-[#151521] border border-[#7efff5] flex items-center justify-center shadow-[0_0_20px_#7efff5]">
            <User size={70} className="text-[#7efff5]" />
          </div>

          <h2 className="text-3xl font-bold text-[#7efff5] mt-4">
            {user?.name}
          </h2>

          <p className="text-gray-300 flex items-center gap-2 mt-1">
            <Mail size={18} /> {user?.email}
          </p>

          <p className="text-gray-400 flex items-center gap-2 mt-1 text-sm">
            <Calendar size={18} /> Joined on{" "}
            {new Date(user?.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#1f1f2a] mt-8 mb-6" />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#151521] border border-[#1f1f2a] p-5 rounded-2xl text-center shadow-inner">
            <h3 className="text-3xl font-bold text-[#7efff5]">
              {user?.stats?.totalItems || 0}
            </h3>
            <p className="text-gray-400 text-sm mt-1">Total Items</p>
          </div>

          <div className="bg-[#151521] border border-[#1f1f2a] p-5 rounded-2xl text-center shadow-inner">
            <h3 className="text-3xl font-bold text-[#FFA500]">
              {user?.stats?.expiringSoon || 0}
            </h3>
            <p className="text-gray-400 text-sm mt-1">Expiring Soon</p>
          </div>

          <div className="bg-[#151521] border border-[#1f1f2a] p-5 rounded-2xl text-center shadow-inner">
            <h3 className="text-3xl font-bold text-[#FF3B3B]">
              {user?.stats?.expired || 0}
            </h3>
            <p className="text-gray-400 text-sm mt-1">Expired</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-10 w-full px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition text-lg font-semibold flex items-center justify-center gap-2"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
