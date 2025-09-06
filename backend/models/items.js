import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  BuyDate: { type: Date, default: Date.now },
  expiryDate: { type: Date, required: true },
  category: { type: String, required: true },
  isUsed: { type: Boolean, default: false },
  note: { type: String },
}, { timestamps: true });

const itemModel = mongoose.model("Item", itemSchema);
export default itemModel;
