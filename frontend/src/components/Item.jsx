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
        `http://localhost:8080/api/items/update/${item._id}`,
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
      await axios.delete(`http://localhost:8080/api/items/delete/${item._id}`, {
        headers: { token },
      });
      onUpdate(); // refresh item list
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-1 rounded w-full"
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border p-1 rounded w-full"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border p-1 rounded w-full"
          />
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="border p-1 rounded w-full"
          />
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="border p-1 rounded w-full"
          ></textarea>
          <div className="flex space-x-2">
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white px-2 py-1 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-2 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
          <p className="text-sm text-gray-600">Category: {item.category}</p>
          <p className="text-sm text-gray-600">Expires: {expiryDate}</p>
          {item.note && (
            <p className="text-sm italic text-gray-500">{item.note}</p>
          )}

          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-2 py-1 rounded"
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
