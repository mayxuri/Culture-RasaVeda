import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const spices = [
  { name: "Turmeric", emoji: "🟡", flavor: "Warming", region: "Kerala", health: "Anti-inflammatory, antioxidant-rich, supports joint health and immunity." },
  { name: "Cardamom", emoji: "🫛", flavor: "Cooling", region: "Karnataka", health: "Aids digestion, freshens breath, supports respiratory health." },
  { name: "Black Pepper", emoji: "⚫", flavor: "Pungent", region: "Kerala", health: "Boosts metabolism, improves nutrient absorption, anti-bacterial." },
  { name: "Cinnamon", emoji: "🪵", flavor: "Warming", region: "Kerala", health: "Regulates blood sugar, anti-inflammatory, rich in antioxidants." },
  { name: "Cumin", emoji: "🌰", flavor: "Warming", region: "Rajasthan", health: "Improves digestion, boosts iron levels, anti-oxidant properties." },
  { name: "Fennel", emoji: "🌿", flavor: "Cooling", region: "Gujarat", health: "Relieves bloating, cooling effect on body, rich in fiber." },
  { name: "Mustard Seeds", emoji: "🫙", flavor: "Pungent", region: "Punjab", health: "Rich in omega-3, boosts metabolism, anti-inflammatory." },
  { name: "Cloves", emoji: "🌱", flavor: "Warming", region: "Tamil Nadu", health: "Powerful antiseptic, relieves toothache, improves digestion." },
  { name: "Asafoetida", emoji: "🧅", flavor: "Pungent", region: "Kashmir", health: "Reduces flatulence, anti-spasmodic, supports gut health." },
  { name: "Saffron", emoji: "🌸", flavor: "Cooling", region: "Kashmir", health: "Mood enhancer, anti-depressant, rich in carotenoids." },
  { name: "Fenugreek", emoji: "🍀", flavor: "Pungent", region: "Maharashtra", health: "Controls blood sugar, boosts milk production, lowers cholesterol." },
  { name: "Star Anise", emoji: "⭐", flavor: "Warming", region: "Bengal", health: "Anti-viral, aids digestion, rich in antioxidants." },
];

const FLAVOR_TYPES = ["All", "Warming", "Cooling", "Pungent"];

const flavorColors = {
  Warming: { bg: "rgba(255,100,50,0.12)", border: "rgba(255,100,50,0.3)", text: "#ff6432" },
  Cooling: { bg: "rgba(80,200,255,0.1)", border: "rgba(80,200,255,0.3)", text: "#50c8ff" },
  Pungent: { bg: "rgba(200,100,255,0.1)", border: "rgba(200,100,255,0.3)", text: "#c864ff" },
};

export default function SpiceGuide() {
  const [selectedFlavor, setSelectedFlavor] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = selectedFlavor === "All"
    ? spices
    : spices.filter((s) => s.flavor === selectedFlavor);

  return (
    <div className="page">
      <Link to="/" className="page-back">← Back</Link>
      <div className="page-header">
        <h1 className="page-title">Spice Guide & Flavor Profiles</h1>
        <p className="page-sub">
          Explore India's pantry of spices — their flavor families, regional origins, and ancient health wisdom.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        {FLAVOR_TYPES.map((f) => (
          <button
            key={f}
            className={`filter-btn ${selectedFlavor === f ? "active" : ""}`}
            onClick={() => setSelectedFlavor(f)}
          >
            {f === "Warming" ? "🔥 " : f === "Cooling" ? "❄️ " : f === "Pungent" ? "🌶️ " : ""}
            {f}
          </button>
        ))}
      </div>

      {/* Spice Grid */}
      <div className="grid">
        {filtered.map((spice) => {
          const fc = flavorColors[spice.flavor];
          const isOpen = expanded === spice.name;
          return (
            <div
              key={spice.name}
              className="card"
              onClick={() => setExpanded(isOpen ? null : spice.name)}
              style={{ cursor: "pointer", borderColor: isOpen ? fc.border : undefined }}
            >
              <div className="card-img">{spice.emoji}</div>
              <div className="card-body">
                <div className="card-title">{spice.name}</div>
                <div className="card-sub">{spice.region}</div>
                <span
                  className="tag"
                  style={{ background: fc.bg, color: fc.text, borderColor: fc.border, border: `1px solid ${fc.border}` }}
                >
                  {spice.flavor}
                </span>
                {isOpen && (
                  <p className="health-info">{spice.health}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
