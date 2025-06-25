import "./About.css";

export default function About() {
  return (
    <div className="about-page">

      {/* Section with background image and title */}
      <section className="about-hero">
        <h1>About SentiStock</h1>
        <svg className="about-divider" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(5, 40, 68, 0.8)"
            d="M0,200 C360,100 720,300 1080,120 L1440,40 L1440,320 L0,320 Z"
          />
        </svg>
      </section>

      {/* Section with paragraph text */}
      <section className="about-description">
  <div className="summary-container">
    <h2 className="summary-title">Understand the Human Pulse of Wall Street</h2>
    {/* Other options:
    Invest with Insight. Powered by Emotion
    Where Market Data Meets Human Emotion
    Emotion is the Edge. SentiStock Delivers it
    */}
    <p className="summary-text">
      <strong>SentiStock</strong> is your modern lens into market sentiment. We use advanced transformer models
      to analyze social discourse and detect shifts in public opinion about the world's biggest companies.
    </p>
    <p className="summary-text">
      Real-time visualizations combine sentiment analysis, key financial indicators, and AI-powered forecasting
      to provide investors with the most intuitive understanding of market mood and potential movement.
    </p>
    <p className="summary-text">
      Whether you're an analyst, trader, or simply curious, SentiStock helps you explore the human side
      of the stock market, powered by machine learning.
    </p>
  </div>
</section>


    </div>
  );
}
