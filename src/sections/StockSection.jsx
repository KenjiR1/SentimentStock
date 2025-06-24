import { useState, useMemo } from "react";
import StockCard from "../components/StockCard";
import SearchBar from "../components/SearchBar"; // assume this renders input + dropdown
import initialCompanies from "../data/stockData";
import "./StockSection.css";
import { motion, AnimatePresence } from "framer-motion";

export default function StockSection({ onCardClick }) {
  const [companiesData] = useState(initialCompanies);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  // Compute filtered list
  const filteredCompanies = useMemo(() => {
    return companiesData.filter((company) => {
      const matchesSearch =
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.ticker.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter ? company.sentiment === filter : true;
      return matchesSearch && matchesFilter;
    });
  }, [companiesData, searchTerm, filter]);

  // Summary stats for sidebar (example: count up/down/neutral)
  const stats = useMemo(() => {
    const total = companiesData.length;
    const up = companiesData.filter((c) => c.sentiment === "up").length;
    const down = companiesData.filter((c) => c.sentiment === "down").length;
    const neutral = companiesData.filter((c) => c.sentiment === "neutral").length;
    return { total, up, down, neutral };
  }, [companiesData]);

  // Example top movers placeholder (static or later dynamic)
  const topMovers = useMemo(() => {
    // Placeholder: pick first 3 up and first 3 down
    const upList = companiesData.filter((c) => c.sentiment === "up").slice(0, 3);
    const downList = companiesData.filter((c) => c.sentiment === "down").slice(0, 3);
    return { upList, downList };
  }, [companiesData]);

  return (
    <div id="stock-section" className="stock-section-container">
      {/* Sidebar */}
      <aside className="stock-sidebar">
        <div className="sidebar-sticky">
          <h2 className="sidebar-title">Overview</h2>
          <div className="sidebar-stats">
            <div className="stat-item">
              <span className="stat-label">Total</span>
              <span className="stat-value">{stats.total}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label up">Up</span>
              <span className="stat-value up">{stats.up}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label down">Down</span>
              <span className="stat-value down">{stats.down}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label neutral">Neutral</span>
              <span className="stat-value neutral">{stats.neutral}</span>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-heading">Top Movers</h3>
            <div className="movers-list">
              <div className="movers-group">
                <span className="movers-group-label up">Up:</span>
                {topMovers.upList.map((c) => (
                  <div key={c.ticker} className="mover-item up">
                    {c.ticker}: {c.sentimentChange}
                  </div>
                ))}
              </div>
              <div className="movers-group">
                <span className="movers-group-label down">Down:</span>
                {topMovers.downList.map((c) => (
                  <div key={c.ticker} className="mover-item down">
                    {c.ticker}: {c.sentimentChange}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Future: additional filters or links */}
          <div className="sidebar-section">
            <h3 className="sidebar-heading">Filters</h3>
            <div className="sidebar-filters">
              <button
                className={`filter-btn ${filter === "" ? "active" : ""}`}
                onClick={() => setFilter("")}
              >
                All
              </button>
              <button
                className={`filter-btn ${filter === "up" ? "active" : ""}`}
                onClick={() => setFilter("up")}
              >
                ↑ Up
              </button>
              <button
                className={`filter-btn ${filter === "down" ? "active" : ""}`}
                onClick={() => setFilter("down")}
              >
                ↓ Down
              </button>
              <button
                className={`filter-btn ${filter === "neutral" ? "active" : ""}`}
                onClick={() => setFilter("neutral")}
              >
                – Neutral
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="stock-main">
        <header className="stock-main-header">
          <h1 className="section-title">Stock Sentiment Overview</h1>
          <div className="search-filter-container">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
        </header>

        <div className="card-scroll-container">
          {filteredCompanies.length > 0 ? (
            <section className="card-container">
  <AnimatePresence>
    {filteredCompanies.map((company) => (
      <motion.div
        key={company.ticker}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        layout // optional: enables smooth layout transitions
      >
        <StockCard
          {...company}
          onToggle={() => onCardClick(company)}
        />
      </motion.div>
    ))}
  </AnimatePresence>
</section>

          ) : (
            <div className="no-results">No matching stocks found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
