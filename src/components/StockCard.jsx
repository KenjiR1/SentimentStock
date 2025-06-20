
import './StockCard.css';

export default function StockCard({ ticker, name, sentiment, price, sentimentChange, onToggle }) {
  return (
    <div className={`stock-card ${sentiment}`} onClick={onToggle}>
      <h3>{name}</h3>
      <p className="ticker">({ticker})</p>

      <div className="snapshot">
        <div className="price">${price.toFixed(2)}</div>
        <div className={`sentiment-change ${sentiment}`}>
          {sentimentChange}
        </div>
      </div>
    </div>
  );
}
