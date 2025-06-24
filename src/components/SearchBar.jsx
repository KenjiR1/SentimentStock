
import "./SearchBar.css";

export default function SearchBar({ searchTerm, setSearchTerm, filter, setFilter }) {
    return (
        <div className="search-container">
            <input
            type="text"
            placeholder="Search stocks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="search-filter-container">
                <select
                className="filter-dropdown"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                >
                <option value="">Filter By...</option>
                <option value="up">Highest Sentiment</option>
                <option value="down">Lowest Sentiment</option>
                </select>
            </div>
        </div>
    )
}