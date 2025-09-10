//import { useState } from "react";
import "./App.css";
import Header_ from "./components/Header_";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header_ />

        <Routes>
          <Route path="/" element={<Main page="home" />} />
          <Route path="/props" element={<Main page="props" />} />
          <Route path="/contact" element={<Main page="contact" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}