import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Item({ item, onUpdate }) {
  const navigate = useNavigate();

  // 🔐 LOGIN CHECK ADDED
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/register");
  }, [navigate]);

  if (!item) {
    return (
      <div className="p-6 bg-[#0f0f15] border border-[#1b1b25] rounded-xl text-gray-400">
        ⚠️ Item data unavailable
      </div>
    );
  }

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: item.name || "",
    quantity: item.quantity || "",
    category: item.category || "",
    expiryDate: item.expiryDate ? item.expiryDate.split("T")[0] : "",
    note: item.note || "",
  });

  const expiryDate = item.expiryDate
    ? new Date(item.expiryDate).toLocaleDateString()
    : "No date";

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://household-pantry-expiry-app.onrender.com/api/items/update/${item._id}`,
        formData,
        { headers: { token } }
      );
      setIsEditing(false);
      onUpdate();
    } catch (err) {
      console.error("Error updating item:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://household-pantry-expiry-app.onrender.com/api/items/delete/${item._id}`,
        { headers: { token } }
      );
      onUpdate();
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  return (
    <div
      className="bg-[#0f0f15]/95 backdrop-blur-xl border border-[#1b1b25] p-6 
                 rounded-2xl shadow-[0_0_20px_rgba(126,255,245,0.08)]
                 hover:shadow-[0_0_35px_rgba(126,255,245,0.25)]
                 hover:scale-[1.03] transition-all duration-300 text-white"
    >
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Item Name"
            className="border border-[#1b1b25] bg-[#151521] text-[#d8fdfb] p-3 rounded-xl w-full
                       focus:ring-2 focus:ring-[#7efff5] outline-none"
          />

          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="border border-[#1b1b25] bg-[#151521] text-[#d8fdfb] p-3 rounded-xl w-full 
                       focus:ring-2 focus:ring-[#7efff5]"
          />

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="border border-[#1b1b25] bg-[#151521] text-[#d8fdfb] p-3 rounded-xl w-full
                       focus:ring-2 focus:ring-[#7efff5]"
          />

          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="border border-[#1b1b25] bg-[#151521] text-[#d8fdfb] p-3 rounded-xl w-full 
                       focus:ring-2 focus:ring-[#7efff5]"
          />

          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Add a note (optional)"
            className="border border-[#1b1b25] bg-[#151521] text-[#d8fdfb] p-3 rounded-xl w-full h-24 
                       focus:ring-2 focus:ring-[#7efff5]"
          />

          <div className="flex gap-3">
            <button
              onClick={handleUpdate}
              className="bg-[#0b0b12] border border-[#7efff5] text-[#7efff5]
                         px-5 py-2 rounded-xl font-semibold transition
                         hover:shadow-[0_0_15px_rgba(126,255,245,0.4)] hover:scale-105"
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-700 text-white px-5 py-2 rounded-xl hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-[#7efff5] tracking-wide">
            {item.name}
          </h2>

          <div className="flex items-center gap-2 mt-3">
            <span
              className="px-3 py-1 text-sm bg-[#151521] border border-[#7efff5]/30
                             text-[#7efff5] rounded-full"
            >
              {item.category}
            </span>
          </div>

          <p className="text-sm text-gray-300 mt-3">
            Quantity: <span className="text-white">{item.quantity}</span>
          </p>

          <p className="text-sm mt-1">
            <span className="font-semibold text-[#7efff5]">Expires:</span>{" "}
            {expiryDate}
          </p>

          {item.note && (
            <p className="text-sm italic mt-3 text-gray-400 border-l-4 border-[#7efff5] pl-3">
              “{item.note}”
            </p>
          )}

          <div className="flex gap-3 mt-5">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 rounded-xl bg-[#151521] border border-[#7efff5] text-[#7efff5]
                         hover:shadow-[0_0_20px_rgba(126,255,245,0.4)] transition hover:scale-105"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Item;
