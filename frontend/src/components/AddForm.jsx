import { useState } from "react";
import axios from "axios";

function AddForm({ ItemAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    quantity: 1,
    expiryDate: "",
    category: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Get JWT token

    if (!token) {
      alert("You must be logged in to add items!");
      return;
    }

    try {
      const res = await axios.post(
        "https://household-pantry-expiry-app.onrender.com/api/items/add",
        formData,
        {
          headers: { token },
        }
      );
      console.log("Item added:", res.data);

      // Reset form after successful addition
      setFormData({
        name: "",
        quantity: 1,
        expiryDate: "",
        category: "",
        note: "",
      });

      // Refresh items in Home page
      ItemAdded();
    } catch (err) {
      console.error("Error adding item:", err);
      alert(
        err.response?.data?.message ||
          "Failed to add item. Please check your input."
      );
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-6 rounded-3xl">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <img
            src="/pantry.png"
            alt="Pantry"
            className="w-40 h-32 object-contain drop-shadow-lg"
          />

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Item name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-white/30 bg-white/30 text-white placeholder-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="number"
              name="quantity"
              placeholder="Qty"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              className="border border-white/30 bg-white/30 text-white placeholder-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              className="border border-white/30 bg-white/30 text-white placeholder-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
              className="border border-white/30 bg-white/30 text-white placeholder-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <textarea
              name="note"
              placeholder="Note (optional)"
              value={formData.note}
              onChange={handleChange}
              className="border border-white/30 bg-white/30 text-white placeholder-gray-200 p-3 rounded-lg sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg hover:scale-105 transition transform font-semibold shadow-lg sm:col-span-2"
            >
              ➕ Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
