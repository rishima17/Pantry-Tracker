import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Item";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ExpiringSoon() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // 🔐 LOGIN CHECK
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/register");
    }
  }, [navigate]);

  const fetchExpiring = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get(
        "https://household-pantry-expiry-app.onrender.com/api/items/expiring/soon",
        { headers: { token } }
      );
      setItems(res.data.data);
    } catch (err) {
      console.error("Error fetching expiring items:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpiring();
  }, []);

  return (
    <div className="min-h-screen bg-[#05080d] text-white px-6 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B3B] to-[#FFA500] drop-shadow-[0_0_15px_#FF3B3B]">
          Expiring Soon
        </h1>
        <p className="text-gray-300 mt-2">
          Items that need your attention before they expire!
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center gap-2 mt-20">
          <div className="w-10 h-10 border-4 border-[#FF3B3B] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg text-gray-300">Scanning your pantry…</p>
        </div>
      ) : items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <Item key={item._id} item={item} onUpdate={fetchExpiring} />
          ))}
        </div>
      ) : (
        <>
          {/* No items: Clean message */}
          <div className="bg-[#0d1117] border border-[#FF3B3B]/40 shadow-[0_0_20px_#FF3B3B40] p-8 rounded-2xl max-w-md mx-auto text-center">
            <AlertTriangle className="w-12 h-12 text-[#FF3B3B] mx-auto mb-3 drop-shadow-[0_0_8px_#FF3B3B]" />
            <p className="text-xl font-semibold text-[#FF3B3B]">
              No items expiring soon
            </p>
            <p className="text-sm text-gray-300 mt-1">
              Great job keeping your pantry updated!
            </p>
          </div>

          {/* Example section */}
          <div className="max-w-xl mx-auto mt-10">
            <h2 className="text-center text-xl font-semibold text-[#FFA500] mb-4">
              Example Preview
            </h2>

            <div className="bg-[#0e131a] border border-[#FFA500]/40 shadow-[0_0_15px_#FFA50060] rounded-2xl p-6 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-[#FFA500] drop-shadow-[0_0_10px_#FFA500]">
                Milk Packet
              </h3>
              <p className="text-gray-300 mt-2 text-sm">
                Showing you how items will appear when expiring soon.
              </p>

              <div className="mt-4 text-center space-y-1">
                <p className="text-sm">
                  <span className="font-semibold text-white">Expires:</span>{" "}
                  <span className="text-[#FF3B3B] font-bold">Tomorrow</span>
                </p>
                <p className="text-sm text-gray-400">Category: Dairy</p>
              </div>

              <button className="mt-5 px-6 py-2 rounded-xl bg-gradient-to-r from-[#FF3B3B] to-[#FFA500] text-white font-semibold shadow-[0_0_10px_#FF3B3B]">
                Example Only
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ExpiringSoon;
