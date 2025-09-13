import React, { useState } from "react";
import axios from "axios";

function Item({ item, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: item.name,
    quantity: item.quantity,
    category: item.category,
    expiryDate: item.expiryDate.split("T")[0], // format for input[type=date]
    note: item.note || "",
  });

  const expiryDate = new Date(item.expiryDate).toLocaleDateString();
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
      onUpdate(); // refresh item list
    } catch (err) {
      console.error("Error updating item:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://household-pantry-expiry-app.onrender.com/api/items/delete/${item._id}`, {
        headers: { token },
      });
      onUpdate(); // refresh item list
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-black transition hover:scale-[1.02] hover:shadow-2xl">
      {isEditing ? (
        <div className="space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded w-full bg-transparent text-black placeholder-gray-300"
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded w-full bg-transparent text-black placeholder-gray-300"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded w-full bg-transparent text-white placeholder-gray-300"
          />
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded w-full bg-transparent text-black"
          />
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded w-full bg-transparent text-black placeholder-gray-300"
          ></textarea>

          <div className="flex space-x-2">
            <button
              onClick={handleUpdate}
              className="bg-green-500 hover:bg-green-600 text-black px-3 py-1 rounded-lg transition"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-600 text-black px-3 py-1 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-sm text-gray-200">Qty: {item.quantity}</p>
          <p className="text-sm text-gray-200">Category: {item.category}</p>
          <p className="text-sm text-gray-200">Expires: {expiryDate}</p>
          {item.note && (
            <p className="text-sm italic text-gray-300">{item.note}</p>
          )}

          <div className="flex space-x-3 mt-3">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
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
