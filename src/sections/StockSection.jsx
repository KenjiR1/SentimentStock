// src/sections/StockSection.jsx
import StockCard from "../components/StockCard";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import "./StockSection.css"; // (optional, create this if needed)

const initialCompanies = [
  {
    ticker: "TSLA",
    name: "Tesla, Inc.",
    price: 523,
    sentiment: "up",
    sentimentChange: "+0.26",
  },
  {
    ticker: "AAPL",
    name: "Apple, Inc.",
    price: 0,
    sentiment: "down",
    sentimentChange: "-0.16",
  },
  {
    ticker: "AMZN",
    name: "Amazon.com, Inc.",
    price: 0,
    sentiment: "neutral",
    sentimentChange: "0.0",
  },
  {
    ticker: "GOOGL",
    name: "Alphabet, Inc.",
    price: 0,
    sentiment: "up",
    sentimentChange: "+0.32",
  },
  {
    ticker: "NVDA",
    name: "NVIDIA Corp",
    price: 0,
    sentiment: "down",
    sentimentChange: "-0.14",
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corporation",
    price: 0,
    sentiment: "up",
    sentimentChange: "+0.43",
  },
  {
    ticker: "META",
    name: "Meta Platforms, Inc.",
    price: 0,
    sentiment: "down",
    sentimentChange: "-0.19",
  },
  {
    ticker: "NFLX",
    name: "Netflix, Inc.",
    price: 0,
    sentiment: "up",
    sentimentChange: "+0.78",
  },
  {
    ticker: "INTC",
    name: "Intel Corporation",
    price: 0,
    sentiment: "down",
    sentimentChange: "-0.16",
  },
  {
    ticker: "ADBE",
    name: "Adobe Inc.",
    price: 0,
    sentiment: "neutral",
    sentimentChange: "+0.02",
  },
  {
    ticker: "ORCL",
    name: "Oracle Corporation",
    price: 0,
    sentiment: "up",
    sentimentChange: "+0.64",
  },
];

export default function StockSection({ onCardClick}) {
  const [companiesData, setCompaniesData] = useState(initialCompanies);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.ticker.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = filter ? company.sentiment === filter : true;

      return matchesSearch && matchesFilter;
  })

  useEffect(() => {
    async function fetchPrices() {
      const updatedData = await Promise.all(
        initialCompanies.map(async (company) => {
          try {
            const res = await fetch(
              `http://localhost:8000/price?ticker=${company.ticker}`
            );
            const data = await res.json();
            return {
              ...company,
              price: data.price ?? 0,
            };
          } catch (error) {
            console.error("Error fetching price for", company.ticker, error);
            return {
              ...company,
              price: 0,
            };
          }
        })
      );
      setCompaniesData(updatedData);
    }

    fetchPrices();
  }, []);

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
  )
}
