import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app">
      <Header onNavigate={setCurrentPage} />
      <Main currentPage={currentPage} />
      <Footer />
    </div>
  );
}