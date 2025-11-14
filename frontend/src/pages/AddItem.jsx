import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddForm from "../components/AddForm";
import { Sparkles, Lightbulb, ArrowRightCircle } from "lucide-react";

function AddItem() {
  const navigate = useNavigate();

  // 🔐 LOGIN CHECK ADDED BACK
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/register");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#08080d] text-white p-8">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold text-[#7efff5] drop-shadow-lg tracking-wide flex items-center gap-3">
          <Sparkles size={40} className="text-[#7efff5]" />
          Add New Item
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          Keep your pantry organized with FreshKeep's smart tracking system.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SECTION — INFO PANEL */}
        <div className="bg-[#0f0f15] border border-[#1f1f2a] rounded-3xl p-7 shadow-[0_0_25px_rgba(126,255,245,0.15)] backdrop-blur-md">
          {/* Section Title */}
          <h2 className="text-2xl font-bold text-[#7efff5] mb-6 flex items-center gap-2">
            <Lightbulb size={26} className="text-[#7efff5]" />
            Tips & Insights
          </h2>

          {/* Content */}
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Add clear details about your item — name, category, quantity,
              purchase date, and expiry date to maintain accurate tracking.
            </p>

            <div className="bg-[#151520] p-4 rounded-2xl border border-[#20202a] shadow-inner">
              <p className="text-sm text-gray-400">
                🔹 Adding expiry dates helps FreshKeep notify you before items
                spoil.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                🔹 Use categories to quickly filter and view items.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-2 text-sm">
                <ArrowRightCircle size={18} className="text-[#7efff5]" />
                Smart inventory reminders
              </p>
              <p className="flex items-center gap-2 text-sm">
                <ArrowRightCircle size={18} className="text-[#7efff5]" />
                Visual tracking for perishable items
              </p>
              <p className="flex items-center gap-2 text-sm">
                <ArrowRightCircle size={18} className="text-[#7efff5]" />
                Bulk item management
              </p>
            </div>

            {/* Preview Box */}
            <div className="mt-8 bg-[#12121a] border border-[#20202a] rounded-2xl h-44 flex items-center justify-center text-gray-500 uppercase tracking-widest">
              Live Preview Coming Soon
            </div>
          </div>
        </div>

        {/* RIGHT SECTION — FORM */}
        <div className="lg:col-span-2 bg-[#0f0f15] border border-[#1f1f27] p-10 rounded-3xl shadow-[0_0_40px_rgba(126,255,245,0.12)] backdrop-blur-md">
          <h2 className="text-3xl font-bold text-[#7efff5] mb-6">
            Enter Item Information
          </h2>

          <AddForm ItemAdded={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default AddItem;
