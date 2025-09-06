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
        "http://localhost:8080/api/items/add",
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
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
      {/* Image */}
      <img src="/pantry.png" alt="Pantry" className="w-40 h-32 object-cover" />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        <input
          type="text"
          name="name"
          placeholder="Item name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Qty"
          value={formData.quantity}
          onChange={handleChange}
          min="1"
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <textarea
          name="note"
          placeholder="Note (optional)"
          value={formData.note}
          onChange={handleChange}
          className="border p-2 rounded sm:col-span-2"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 sm:col-span-2"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddForm;
