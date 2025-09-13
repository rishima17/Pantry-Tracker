import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Item";

function ExpiringSoon() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch expiring items
  const fetchExpiring = async () => {
    const token = localStorage.getItem("token"); // get JWT token
    try {
      const res = await axios.get(
        "https://household-pantry-expiry-app.onrender.com/api/items/expiring/soon",
        { headers: { token } }
      );
      setItems(res.data.data); // access the data array
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
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 p-8 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg text-center">
        Expiring Soon ⚠️
      </h1>

      {/* Loader */}
      {loading ? (
        <p className="text-white/90 text-lg animate-pulse">
          Checking your pantry...
        </p>
      ) : items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {items.map((item) => (
            <Item key={item._id} item={item} onUpdate={fetchExpiring} />
          ))}
        </div>
      ) : (
        <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center text-white max-w-md">
          <p className="text-xl font-semibold">🎉 No items expiring soon!</p>
          <p className="text-sm opacity-80">
            Your pantry is safe for now. Keep tracking!
          </p>
        </div>
      )}
    </div>
  );
}

export default ExpiringSoon;
