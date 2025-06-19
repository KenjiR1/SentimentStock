import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import StockSection from "./sections/StockSection";
import ExpandedCard from "./sections/ExpandedCard";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import "./App.css";

export default function App() {
  const [expandedStock, setExpandedStock] = useState(null);
  const openExpandedCard = (stock) => setExpandedStock(stock);
  const closeExpandedCard = () => setExpandedStock(null);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <StockSection
          onCardClick={openExpandedCard}
        />
      </main>

      <AnimatePresence>
        {expandedStock && (
          <ExpandedCard
            stock={expandedStock}
            onClose={closeExpandedCard}
          />
        )}
      </AnimatePresence>

      <footer>© 2025 SentiStock. All rights reserved.</footer>
    </>
  );
}
