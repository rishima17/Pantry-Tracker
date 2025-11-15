# FreshKeep – YourDigital Pantry

FreshKeep is a modern pantry management web application designed to help users track groceries, manage expiry dates, and reduce food waste using an intuitive and beautifully designed UI.

--- 


#Live -: https://household-pantry-expiry-app-1.onrender.com/

## 🚀 Features

### ✔ Smart Pantry Tracking

Add, update, delete, and manage food items with detailed information like category, quantity, purchase date, expiry date, and notes.

### ✔ Expiry Alerts

Highlight items that are expiring soon and notify users before items spoil.

### ✔ Category-Based Organization

Quickly filter and manage your pantry items based on categories.

### ✔ Interactive UI

A modern, glowing neon-inspired interface that enhances user experience.

### ✔ Secure Login System

JWT-based authentication to keep user data safe.

### ✔ Add Item Form

A beautifully structured form with tips and live preview (upcoming).

---

## 🛠 Tech Stack

### **Frontend:**

* React.js
* TailwindCSS for UI
* Axios for API requests
* Lucide Icons

### **Backend:**

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication

### **Deployment:**

* Render (Backend)
* Vercel / Netlify (Frontend)

---

## 📦 Installation & Setup

### **1. Clone the Repository**

```bash
git clone https://github.com/your-username/freshkeep.git
cd freshkeep
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Setup Environment Variables**

Create a `.env` file:

```env
VITE_API_URL=https://your-backend-url/api
```

### **4. Run Development Server**

```bash
npm run dev
```

---

## 🧪 API Endpoints Overview

| Endpoint                   | Method | Description         |
| -------------------------- | ------ | ------------------- |
| `/api/auth/register`       | POST   | Register user       |
| `/api/auth/login`          | POST   | Login user          |
| `/api/items/add`           | POST   | Add new pantry item |
| `/api/items/update/:id`    | PUT    | Edit an item        |
| `/api/items/delete/:id`    | DELETE | Delete item         |
| `/api/items/all`           | GET    | Get all items       |
| `/api/items/expiring/soon` | GET    | Items expiring soon |

---

## 📘 Future Enhancements

* 🔔 Push notifications for soon-expiring items
* 📊 Analytics dashboard
* 🧾 Shopping list generator
* 👥 Multi-user shared pantry support

---

## 🤝 Contributing

Pull requests are welcome! Feel free to open issues to suggest improvements.

---

## 📄 License

This project is licensed under the **MIT License**.

---


Built with ❤️ by **Rishima**.

FreshKeep — *Your digital pantry*
