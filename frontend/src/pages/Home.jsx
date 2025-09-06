import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddForm from "../components/AddForm";
import Item from "../components/Item";

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch items from backend
  const fetchItems = async (token) => {
    try {
      console.log("Fetching items with token:", token);
      const res = await axios.get("https://household-pantry-expiry-app.onrender.com/api/items", {
        headers: { token },
      });
      console.log("Fetched items:", res.data.data);
      setItems(res.data.data);
    } catch (err) {
      console.error("Error fetching items:", err);
      if (err.response?.status === 401) {
        alert("Session expired or unauthorized. Please login again.");
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchItems(token);
    }
  }, []);

  // Refresh items after add, update, or delete
  const refreshItems = () => {
    const token = localStorage.getItem("token");
    if (token) fetchItems(token);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Pantry</h1>

      {/* Add new item form */}
      <AddForm ItemAdded={refreshItems} />

      {/* Items list */}
      {loading ? (
        <p className="text-gray-600 mt-4">Loading items...</p>
      ) : items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {items.map((item) => (
            <Item key={item._id} item={item} onUpdate={refreshItems} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 mt-4">
          No items yet. Add your first item above 👆
        </p>
      )}
    </div>
  );
}

export default Home;
