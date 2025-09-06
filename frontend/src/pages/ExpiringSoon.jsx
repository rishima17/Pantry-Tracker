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
        "http://localhost:8080/api/items/expiring/soon",
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-red-600">Expiring Soon ⚠️</h1>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Item key={item._id} item={item} onUpdate={fetchExpiring} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No items expiring in the next 3 days 🎉</p>
      )}
    </div>
  );
}

export default ExpiringSoon;
