import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ExpiringSoon from "./pages/ExpiringSoon";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import AddItem from "./pages/AddItem";
import About from "./pages/About";
import Item from "./components/Item";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/pantry" element={<Item />} />

        <Route path="/expiringSoon" element={<ExpiringSoon />} />
        

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
