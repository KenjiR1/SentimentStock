const initialCompanies = [
  {
    ticker: "TSLA",
    name: "Tesla, Inc.",
    price: 523,
    sentiment: "up",
    sentimentChange: "+0.26",
    color: "#e82127",
    tags: ["Automotive", "Tech", "AI"]
  },
  {
    ticker: "AAPL",
    name: "Apple, Inc.",
    price: 138.4,
    sentiment: "down",
    sentimentChange: "-0.16",
    color: "#a2aaad",
    tags: ["Tech", "Consumer"]
  },
  {
    ticker: "AMZN",
    name: "Amazon.com, Inc.",
    price: 3120.55,
    sentiment: "neutral",
    sentimentChange: "0.0",
    color: "#ff9900",
    tags: ["Tech", "Consumer"]
  },
  {
    ticker: "GOOGL",
    name: "Alphabet, Inc.",
    price: 612.04,
    sentiment: "up",
    sentimentChange: "+0.32",
    color: "#4285f4",
    tags: ["Tech", "AI"]
  },
  {
    ticker: "NVDA",
    name: "NVIDIA Corp",
    price: 141.97,
    sentiment: "down",
    sentimentChange: "-0.14",
    color: "#76b900",
    tags: ["Tech", "AI"]
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corporation",
    price: 290.12,
    sentiment: "up",
    sentimentChange: "+0.43",
    color: "#737373",
    tags: ["Tech", "AI"]
  },
  {
    ticker: "META",
    name: "Meta Platforms, Inc.",
    price: 190.47,
    sentiment: "down",
    sentimentChange: "-0.19",
    color: "#1877f2",
    tags: ["Tech", "AI"]
  },
  {
    ticker: "NFLX",
    name: "Netflix, Inc.",
    price: 350.23,
    sentiment: "up",
    sentimentChange: "+0.78",
    color: "#e50914",
    tags: ["Entertainment", "Streaming"]
  },
  {
    ticker: "INTC",
    name: "Intel Corporation",
    price: 50.67,
    sentiment: "down",
    sentimentChange: "-0.16",
    color: "#0071c5",
    tags: ["Tech"]
  },
  {
    ticker: "ADBE",
    name: "Adobe Inc.",
    price: 640.98,
    sentiment: "neutral",
    sentimentChange: "+0.02",
    color: "#ff0000",
    tags: ["Tech"]
  },
  {
    ticker: "ORCL",
    name: "Oracle Corporation",
    price: 87.34,
    sentiment: "up",
    sentimentChange: "+0.64",
    color: "#f80000",
    tags: ["Tech"]
  },
  {
    ticker: "UBER",
    name: "Uber Technologies Inc.",
    price: 42.18,
    sentiment: "up",
    sentimentChange: "+0.29",
    color: "#000000",
    tags: ["Tech", "Consumer"]
  },
  {
    ticker: "DIS",
    name: "The Walt Disney Company",
    price: 92.44,
    sentiment: "down",
    sentimentChange: "-0.21",
    color: "#113ccf",
    tags: ["Entertainment", "Streaming"]
  },
  {
    ticker: "CRM",
    name: "Salesforce, Inc.",
    price: 215.67,
    sentiment: "up",
    sentimentChange: "+0.11",
    color: "#00a1e0",
    tags: ["Tech"]
  },
  {
    ticker: "PYPL",
    name: "PayPal Holdings, Inc.",
    price: 65.23,
    sentiment: "down",
    sentimentChange: "-0.33",
    color: "#003087",
    tags: ["Finance", "Tech"]
  },
  {
    ticker: "BABA",
    name: "Alibaba Group Holding Ltd.",
    price: 85.90,
    sentiment: "neutral",
    sentimentChange: "+0.01",
    color: "#ff6a00",
    tags: ["Tech", "Consumer"]
  },
  {
    ticker: "SQ",
    name: "Block, Inc. (Square)",
    price: 68.55,
    sentiment: "up",
    sentimentChange: "+0.15",
    color: "#28c101",
    tags: ["Finance", "Tech"]
  },
  {
    ticker: "BA",
    name: "The Boeing Company",
    price: 177.32,
    sentiment: "down",
    sentimentChange: "-0.22",
    color: "#0072ce",
    tags: ["Consumer"]
  },
  {
    ticker: "SHOP",
    name: "Shopify Inc.",
    price: 61.23,
    sentiment: "up",
    sentimentChange: "+0.37",
    color: "#95bf47",
    tags: ["Tech", "Consumer"]
  },
  {
    ticker: "TWTR",
    name: "Twitter, Inc.",
    price: 43.18,
    sentiment: "neutral",
    sentimentChange: "0.00",
    color: "#1da1f2",
    tags: ["Tech", "Entertainment"]
  },
  {
    ticker: "ROKU",
    name: "Roku, Inc.",
    price: 57.92,
    sentiment: "down",
    sentimentChange: "-0.26",
    color: "#6f2da8",
    tags: ["Streaming", "Entertainment"]
  },
  {
    ticker: "TSM",
    name: "Taiwan Semiconductor Mfg.",
    price: 105.66,
    sentiment: "up",
    sentimentChange: "+0.48",
    color: "#cc0000",
    tags: ["Tech"]
  },
  {
    ticker: "ZM",
    name: "Zoom Vid Communications, Inc.",
    price: 71.14,
    sentiment: "down",
    sentimentChange: "-0.19",
    color: "#2d8cff",
    tags: ["Tech"]
  },
  {
    ticker: "COIN",
    name: "Coinbase Global, Inc.",
    price: 244.22,
    sentiment: "up",
    sentimentChange: "+0.52",
    color: "#0052ff",
    tags: ["Finance", "Tech"]
  },
  {
  ticker: "MDT",
  name: "Medtronic plc",
  price: 85.42,
  sentiment: "neutral",
  sentimentChange: "+0.01",
  color: "#0072c6", // Medtronic blue
  tags: ["Healthcare", "Tech"]
},
{
  ticker: "RIVN",
  name: "Rivian Automotive, Inc.",
  price: 19.83,
  sentiment: "down",
  sentimentChange: "-0.45",
  color: "#142c2e", // Rivian dark green-gray
  tags: ["Automotive", "Tech"]
},
{
  ticker: "LMT",
  name: "Lockheed Martin Corporation",
  price: 452.14,
  sentiment: "up",
  sentimentChange: "+0.18",
  color: "#003057", // Lockheed Martin dark blue
  tags: ["Defense", "Aerospace"]
},
{
  ticker: "RTX",
  name: "Raytheon Technologies Corp",
  price: 92.30,
  sentiment: "neutral",
  sentimentChange: "-0.03",
  color: "#3e3e6b", // Raytheon purple-blue
  tags: ["Defense", "Aerospace"]
},
{
  ticker: "BALL",
  name: "Ball Corporation",
  price: 54.20,
  sentiment: "up",
  sentimentChange: "+0.27",
  color: "#0077c8", // Ball Aerospace blue
  tags: ["Aerospace", "Consumer"]
},
{
  ticker: "JPM",
  name: "JPMorgan Chase & Co.",
  price: 158.91,
  sentiment: "up",
  sentimentChange: "+0.31",
  color: "#0072c6", // JPMorgan blue
  tags: ["Finance"]
}
];

export default initialCompanies;
