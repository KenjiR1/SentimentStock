import { useEffect, useRef } from "react";

export default function StockCard({ ticker, name, sentiment, price, sentimentChange, expanded, onToggle }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (expanded && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.strokeStyle = "#58a6ff";
      ctx.beginPath();
      ctx.moveTo(10, 50);
      ctx.lineTo(100, 20);
      ctx.lineTo(190, 80);
      ctx.stroke();
    }
  }, [expanded]);

  return (
    <div
      className={`stock-card ${sentiment} ${expanded ? "expanded" : ""}`}
      onClick={onToggle}
    >
      <h3>{name} <span className="ticker">({ticker})</span></h3>

      {/* Snapshot with price and sentiment change */}
      <div className="snapshot">
        <div className="price">${price.toFixed(2)}</div>
        <div className={`sentiment-change ${sentiment}`}>
          {sentimentChange}
        </div>
      </div>

      {/* Rest of your card content */}
      <div className="card-details">
        {expanded && (
          <>
            <div className="graph-placeholder">
              <canvas ref={canvasRef} width={300} height={300} />
            </div>
            <button onClick={e => { e.stopPropagation(); onToggle(); }}>
              Collapse
            </button>
          </>
        )}
      </div>
    </div>
  );
}
