// src/sections/StockSection.jsx
import StockCard from "../components/StockCard";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import "./StockSection.css"; // (optional, create this if needed)
import initialCompanies from "../data/stockData";

export default function StockSection({ onCardClick }) {
  // Use the static initialCompanies array directly
  const [companiesData] = useState(initialCompanies);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.ticker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter ? company.sentiment === filter : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div id="stock-section" className="content-wrapper">
      <h1 className="section-title">Stock Sentiment Overview</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="card-scroll-container">
        <section className="card-container">
          {filteredCompanies.map((company) => (
            <StockCard
              key={company.ticker}
              {...company}
              onToggle={() => onCardClick(company)}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
