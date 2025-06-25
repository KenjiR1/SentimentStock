import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import StockSection from "./sections/StockSection";
import ExpandedCard from "./sections/ExpandedCard";
import About from "./pages/About"; // ⬅️ you will create this file
import Contact from "./pages/Contact"; // ⬅️ you will create this file
import Footer from "./sections/footer";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [expandedStock, setExpandedStock] = useState(null);
  const openExpandedCard = (stock) => setExpandedStock(stock);
  const closeExpandedCard = () => setExpandedStock(null);

  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <StockSection onCardClick={openExpandedCard} />
              </>
            }
          />
          
          {/* About page */}
          <Route path="/about" element={<About />} />

          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Analytics />
      </main>

      {/* Expanded card animation */}
      <AnimatePresence>
        {expandedStock && (
          <ExpandedCard stock={expandedStock} onClose={closeExpandedCard} />
        )}
      </AnimatePresence>

      <Footer/>
    </Router>
  );
}
