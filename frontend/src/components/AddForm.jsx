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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      setLoading(true);
      const res = await axios.post(
        "https://household-pantry-expiry-app.onrender.com/api/items/add",
        formData,
        { headers: { token } }
      );

      console.log("Item added:", res.data);

      setFormData({
        name: "",
        quantity: 1,
        expiryDate: "",
        category: "",
        note: "",
      });

      ItemAdded();
      alert("Item added successfully ✅");
    } catch (err) {
      console.error("Error adding item:", err);
      alert(
        err.response?.data?.message ||
          "Failed to add item. Please check your input."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-6 rounded-3xl">
      <div className="bg-[#0f0f15]/80 backdrop-blur-xl border border-[#1b1b25] p-8 rounded-3xl shadow-[0_0_25px_rgba(126,255,245,0.12)] w-full">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Illustration */}
          <img
            src="/pantry.png"
            alt="Pantry"
            className="w-[250px] h-[250px] md:h-[330px] object-contain opacity-80 drop-shadow-[0_0_20px_rgba(126,255,245,0.3)]"
          />

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-[#1b1b25] bg-[#151521]/80 text-[#d8fdfb] placeholder-gray-500 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7efff5]"
            />

            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              className="border border-[#1b1b25] bg-[#151521]/80 text-[#d8fdfb] placeholder-gray-500 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7efff5]"
            />

            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              className="border border-[#1b1b25] bg-[#151521]/80 text-[#d8fdfb] placeholder-gray-500 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7efff5]"
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
              className="border border-[#1b1b25] bg-[#151521]/80 text-[#d8fdfb] placeholder-gray-500 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7efff5]"
            />

            <textarea
              name="note"
              placeholder="Add a description or note (optional)"
              value={formData.note}
              onChange={handleChange}
              className="border border-[#1b1b25] bg-[#151521]/80 text-[#d8fdfb] placeholder-gray-500 p-3 rounded-xl sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#7efff5]"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`bg-[#0b0b12] border border-[#7efff5] text-[#7efff5] p-3 rounded-xl font-semibold shadow-[0_0_15px_rgba(126,255,245,0.4)] sm:col-span-2 transition-all ${
                loading
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:scale-105 hover:shadow-[0_0_25px_rgba(126,255,245,0.6)]"
              }`}
            >
              {loading ? "Adding..." : "➕ Add Item"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
