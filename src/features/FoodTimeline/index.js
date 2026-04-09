import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const eras = [
  {
    year: "3000 BCE",
    era: "Indus Valley",
    emoji: "🏺",
    title: "Birth of Indian Cuisine",
    desc: "Archaeological evidence shows wheat, barley, sesame, and lentils cultivated in Mohenjo-daro. Early spice trade routes emerge.",
    dishes: ["Barley flatbreads", "Sesame sweets", "Lentil stew"],
    color: "#c8922a",
  },
  {
    year: "1500 BCE",
    era: "Vedic Period",
    emoji: "📜",
    title: "Sacred Foods & Ayurveda",
    desc: "Vedic texts document food rituals. Ghee becomes sacred. Ayurvedic food philosophy classifies foods as Sattvic, Rajasic, or Tamasic.",
    dishes: ["Panchagavya", "Khichdi", "Soma"],
    color: "#b87333",
  },
  {
    year: "300 BCE",
    era: "Mauryan Empire",
    emoji: "🦚",
    title: "Organized Agriculture",
    desc: "Emperor Ashoka promotes vegetarianism. Rice cultivation expands across the subcontinent. Sugar cane processing begins.",
    dishes: ["Rice pudding", "Sugarcane juice", "Dried lentils"],
    color: "#8b6914",
  },
  {
    year: "300 CE",
    era: "Gupta Golden Age",
    emoji: "✨",
    title: "Culinary Arts Flourish",
    desc: "Sanskrit cookbooks emerge. Spice trade with Rome brings new exchange. Sweets and confections become a culinary art form.",
    dishes: ["Modak", "Payasam", "Sandesh"],
    color: "#9b7d00",
  },
  {
    year: "700 CE",
    era: "Arab Trade",
    emoji: "🚢",
    title: "Spice Route Connections",
    desc: "Arab traders bring saffron and new techniques. Kerala's Malabar Coast becomes the global center of the spice trade.",
    dishes: ["Biryani precursors", "Halwa", "Saffron rice"],
    color: "#7a5c1e",
  },
  {
    year: "1200 CE",
    era: "Delhi Sultanate",
    emoji: "🕌",
    title: "Perso-Islamic Influence",
    desc: "Persian and Central Asian cuisines blend with Indian. Tandoor ovens spread. Rich meat preparations and flatbreads enter royal kitchens.",
    dishes: ["Seekh kebab", "Naan", "Sheer khurma"],
    color: "#8b4513",
  },
  {
    year: "1526 CE",
    era: "Mughal Empire",
    emoji: "👑",
    title: "Mughal Culinary Renaissance",
    desc: "Akbar's court produces Ain-i-Akbari documenting royal recipes. Dum cooking perfected. Biryani, korma, and kebabs reach their peak.",
    dishes: ["Biryani", "Nihari", "Shahi korma"],
    color: "#722f37",
  },
  {
    year: "1600 CE",
    era: "Portuguese Arrival",
    emoji: "🌶️",
    title: "Columbian Exchange",
    desc: "Portuguese traders introduce chillies, potatoes, tomatoes, and vinegar. Goa develops a unique fusion cuisine. Indian food is transformed forever.",
    dishes: ["Vindaloo", "Goan fish curry", "Sorpotel"],
    color: "#a0522d",
  },
  {
    year: "1857 CE",
    era: "British Raj",
    emoji: "🫖",
    title: "Colonial Kitchen",
    desc: "Tea culture spreads across India. Anglo-Indian dishes emerge. Railway catering standardizes regional snacks. Chai becomes a national drink.",
    dishes: ["Mulligatawny", "Railway cutlet", "Chai"],
    color: "#4a7c59",
  },
  {
    year: "1947 CE",
    era: "Independence",
    emoji: "🇮🇳",
    title: "Unified Indian Cuisine",
    desc: "Partition reshapes food geography. Regional cuisines gain national recognition. Street food culture booms in cities.",
    dishes: ["Chole bhature", "Pav bhaji", "Masala dosa"],
    color: "#138808",
  },
  {
    year: "2000s",
    era: "Modern India",
    emoji: "🍽️",
    title: "Global Fusion & Revival",
    desc: "Indian chefs win global recognition. Forgotten regional recipes are rediscovered. Farm-to-table movement meets ancient Ayurvedic wisdom.",
    dishes: ["Molecular biryani", "Millet bowls", "Artisan chai"],
    color: "#FF9933",
  },
];

export default function FoodTimeline() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="tl-page">
      <Link to="/" className="page-back">← Back</Link>
      <div className="tl-header">
        <h1 className="tl-title">Historical Food Timeline</h1>
        <p className="tl-sub">
          Journey through 5,000 years of Indian culinary history — from Indus Valley grains to Mughal feasts and modern fusion.
        </p>
      </div>

      {/* Horizontal scrollable timeline */}
      <div className="tl-scroll-wrapper">
        <div className="tl-track">
          {/* Horizontal line */}
          <div className="tl-line" />

          {eras.map((era, i) => (
            <div
              key={era.year}
              className={`tl-node ${i % 2 === 0 ? "tl-node--above" : "tl-node--below"} ${selected?.year === era.year ? "tl-node--active" : ""}`}
              onClick={() => setSelected(selected?.year === era.year ? null : era)}
            >
              <div className="tl-connector" />
              <div className="tl-dot" style={{ background: era.color, boxShadow: `0 0 12px ${era.color}66` }} />
              <div className="tl-card" style={{ borderColor: selected?.year === era.year ? era.color : undefined }}>
                <div className="tl-emoji">{era.emoji}</div>
                <div className="tl-year" style={{ color: era.color }}>{era.year}</div>
                <div className="tl-era-name">{era.era}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Panel */}
      {selected && (
        <div className="tl-detail" style={{ borderColor: selected.color }}>
          <button className="tl-close" onClick={() => setSelected(null)}>✕</button>
          <div className="tl-detail-top">
            <span className="tl-detail-emoji">{selected.emoji}</span>
            <div>
              <div className="tl-detail-year" style={{ color: selected.color }}>{selected.year} — {selected.era}</div>
              <h2 className="tl-detail-title">{selected.title}</h2>
            </div>
          </div>
          <p className="tl-detail-desc">{selected.desc}</p>
          <div className="tl-dishes-label">Notable Foods</div>
          <div className="tl-dishes">
            {selected.dishes.map((d) => (
              <span key={d} className="tl-dish-tag" style={{ borderColor: `${selected.color}44`, color: selected.color }}>{d}</span>
            ))}
          </div>
        </div>
      )}

      {!selected && (
        <p className="tl-hint">← Scroll and click any era to explore its food history</p>
      )}
    </div>
  );
}
