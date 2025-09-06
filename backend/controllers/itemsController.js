import Item from "../models/items.js";

// Get all items for logged-in user
const getItems = async (req, res) => {
  try {
    console.log("Fetching items for userId:", req.userId);
    const items = await Item.find({ user: req.userId }); // filter by user
    res.json({ success: true, data: items });
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).json({ success: false, message: "Server error fetching items" });
  }
};

// Add new item for logged-in user
const addItem = async (req, res) => {
  try {
    const item = new Item({ ...req.body, user: req.userId }); // use req.userId, not req.body.userId
    const savedItem = await item.save();
    res.status(201).json({ success: true, data: savedItem });
  } catch (err) {
    console.error("Error adding item:", err);
    res.status(400).json({ success: false, message: err.message });
  }
};

// Update item (only if it belongs to the user)
const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findOneAndUpdate(
      { _id: req.params.id, user: req.userId }, // use req.userId
      req.body,
      { new: true }
    );
    if (!updatedItem) return res.status(404).json({ success: false, message: "Item not found" });
    res.json({ success: true, data: updatedItem });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Delete item (only if it belongs to the user)
const deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!deletedItem) return res.status(404).json({ success: false, message: "Item not found" });
    res.json({ success: true, message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get expiring soon items (only for logged-in user)
const getExpiringSoon = async (req, res) => {
  try {
    const today = new Date();
    const threeDaysLater = new Date();
    threeDaysLater.setDate(today.getDate() + 3);

    const items = await Item.find({
      user: req.userId, // use req.userId
      expiryDate: { $gte: today, $lte: threeDaysLater },
    });

    res.json({ success: true, data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export { addItem, updateItem, getItems, deleteItem, getExpiringSoon };
