import { useState, useMemo } from "react";
import StockCard from "../components/StockCard";
import SearchBar from "../components/SearchBar";
import initialCompanies from "../data/stockData";
import "./StockSection.css";
import { motion, AnimatePresence } from "framer-motion";

// Example additional tags you might want to filter by:
const AVAILABLE_TAGS = [
  "Tech",
  "Finance",
  "Healthcare",
  "Consumer",
  "Automotive",
  "Entertainment",
  "Streaming",
  "AI",
  "Defense",
  "Aerospace",
  // ...add as needed
];

export default function StockSection({ onCardClick }) {
  const [companiesData] = useState(initialCompanies);
  const [searchTerm, setSearchTerm] = useState("");
  const [sentimentFilter, setSentimentFilter] = useState(""); // "", "up", "down", "neutral"
  const [tagFilters, setTagFilters] = useState([]); // array of selected tag strings

  // Compute filtered list
  const filteredCompanies = useMemo(() => {
    return companiesData.filter((company) => {
      // Text search
      const matchesSearch =
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.ticker.toLowerCase().includes(searchTerm.toLowerCase());

      // Sentiment filter
      const matchesSentiment = sentimentFilter
        ? company.sentiment === sentimentFilter
        : true;

      // Tag filter: if no tags selected, pass; else company.tags must include at least one selected?
      // You can change logic to require all tags; here: include any selected tag.
      const matchesTags =
        tagFilters.length === 0 ||
        (company.tags && tagFilters.some((tag) => company.tags.includes(tag)));

      return matchesSearch && matchesSentiment && matchesTags;
    });
  }, [companiesData, searchTerm, sentimentFilter, tagFilters]);

  // Summary stats for sidebar
  const stats = useMemo(() => {
    const total = companiesData.length;
    const up = companiesData.filter((c) => c.sentiment === "up").length;
    const down = companiesData.filter((c) => c.sentiment === "down").length;
    const neutral = companiesData.filter((c) => c.sentiment === "neutral").length;
    return { total, up, down, neutral };
  }, [companiesData]);

  // Top movers example
  const topMovers = useMemo(() => {
    const upList = companiesData.filter((c) => c.sentiment === "up").slice(0, 3);
    const downList = companiesData.filter((c) => c.sentiment === "down").slice(0, 3);
    return { upList, downList };
  }, [companiesData]);

  // Handlers for tag filter toggling
  const toggleTagFilter = (tag) => {
    setTagFilters((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  return (
    <div id="stock-section" className="stock-section-container">
      {/* Sidebar */}
      <aside className="stock-sidebar">
        <div className="sidebar-inner">
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

          <div className="sidebar-section">
            <h3 className="sidebar-heading">Sentiment Filter</h3>
            <div className="sidebar-filters">
              <button
                className={`filter-btn ${
                  sentimentFilter === "" ? "active" : ""
                }`}
                onClick={() => setSentimentFilter("")}
              >
                All
              </button>
              <button
                className={`filter-btn ${
                  sentimentFilter === "up" ? "active" : ""
                } up`}
                onClick={() => setSentimentFilter("up")}
              >
                ↑ Up
              </button>
              <button
                className={`filter-btn ${
                  sentimentFilter === "down" ? "active" : ""
                } down`}
                onClick={() => setSentimentFilter("down")}
              >
                ↓ Down
              </button>
              <button
                className={`filter-btn ${
                  sentimentFilter === "neutral" ? "active" : ""
                } neutral`}
                onClick={() => setSentimentFilter("neutral")}
              >
                – Neutral
              </button>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-heading">Tag Filters</h3>
            <div className="tag-filters">
              {AVAILABLE_TAGS.map((tag) => (
                <button
                  key={tag}
                  className={`tag-btn ${
                    tagFilters.includes(tag) ? "active" : ""
                  }`}
                  onClick={() => toggleTagFilter(tag)}
                >
                  {tag}
                </button>
              ))}
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
              // We keep the dropdown sentiment filter in search bar optional or remove it since we have sidebar filters
              filter={sentimentFilter}
              setFilter={setSentimentFilter}
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
                    layout // enables smooth layout transitions
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
