import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const cards = [
  {
    id: 1,
    emoji: "🍼",
    title: "AI Slaapcoach",
    desc: "Personalized sleep advice for your little one",
    color: "#7EC8E3",
  },
  {
    id: 2,
    emoji: "🌙",
    title: "Sleep Tracker",
    desc: "Track naps and night sleep with one tap",
    color: "#a78bfa",
  },
  {
    id: 3,
    emoji: "🤱",
    title: "Feeding Log",
    desc: "Breastfeeding & pumping made simple",
    color: "#34d399",
  },
  {
    id: 4,
    emoji: "👶",
    title: "Milestones",
    desc: "Celebrate every tiny achievement",
    color: "#fbbf24",
  },
];

const demos = ["whileHover", "AnimatePresence", "whileInView", "stagger"];

export default function MotionDemo() {
  const [activeDemo, setActiveDemo] = useState("whileHover");
  const [visible, setVisible] = useState(true);
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0f1e 0%, #0d1b35 100%)",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        color: "#f0f4ff",
        padding: "24px 16px",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: 32 }}
      >
        <div style={{ fontSize: 13, letterSpacing: 4, color: "#7EC8E3", textTransform: "uppercase", marginBottom: 8 }}>
          Motion.dev interaktivní demo
        </div>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 800,
            margin: 0,
            background: "linear-gradient(90deg, #7EC8E3, #fff, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Animace pro tvé appky
        </h1>
        <p style={{ color: "#8892b0", fontSize: 14, marginTop: 8 }}>
          Klikni na záložky a vyzkoušej si každý efekt živě
        </p>
      </motion.div>

      {/* Tab switcher */}
      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 32,
        }}
      >
        {demos.map((d) => (
          <motion.button
            key={d}
            onClick={() => setActiveDemo(d)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              background: activeDemo === d
                ? "linear-gradient(90deg, #7EC8E3, #a78bfa)"
                : "rgba(255,255,255,0.08)",
              color: activeDemo === d ? "#0a0f1e" : "#8892b0",
              transition: "color 0.2s, background 0.2s",
            }}
          >
            {d}
          </motion.button>
        ))}
      </div>

      {/* DEMO AREAS */}

      {/* 1. whileHover */}
      {activeDemo === "whileHover" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ maxWidth: 500, margin: "0 auto" }}
        >
          <p style={{ textAlign: "center", color: "#8892b0", fontSize: 13, marginBottom: 20 }}>
            👆 Najeď myší na kartu — nebo klikni na srdíčko
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {cards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.03, x: 6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${card.color}33`,
                  borderRadius: 16,
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: 32 }}>{card.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: card.color }}>{card.title}</div>
                  <div style={{ fontSize: 13, color: "#8892b0" }}>{card.desc}</div>
                </div>
                <motion.button
                  onClick={() => toggleLike(card.id)}
                  whileTap={{ scale: 1.4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: 22,
                    cursor: "pointer",
                    filter: liked[card.id] ? "none" : "grayscale(1)",
                  }}
                >
                  ❤️
                </motion.button>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "#4a5568" }}>
            → Toto použiješ na karty babysitterů v RaisingAmsterdam
          </div>
        </motion.div>
      )}

      {/* 2. AnimatePresence */}
      {activeDemo === "AnimatePresence" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ maxWidth: 400, margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ color: "#8892b0", fontSize: 13, marginBottom: 20 }}>
            👆 Klikni na tlačítko — element elegantně zmizí a objeví se
          </p>
          <motion.button
            onClick={() => setVisible((v) => !v)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "12px 28px",
              borderRadius: 12,
              border: "none",
              background: "linear-gradient(90deg, #7EC8E3, #a78bfa)",
              color: "#0a0f1e",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: 15,
              marginBottom: 28,
            }}
          >
            {visible ? "Skrýt modal" : "Zobrazit modal"}
          </motion.button>

          <AnimatePresence>
            {visible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -20 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{
                  background: "rgba(126,200,227,0.1)",
                  border: "1px solid #7EC8E344",
                  borderRadius: 20,
                  padding: 28,
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>🌙</div>
                <div style={{ fontWeight: 700, fontSize: 18, color: "#7EC8E3", marginBottom: 8 }}>
                  Dobrá noc, maminko!
                </div>
                <div style={{ color: "#8892b0", fontSize: 14, lineHeight: 1.6 }}>
                  Dnešní spánek byl 6h 23min.<br />
                  Nejdelší úsek: 3h 10min. 🎉
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "#4a5568" }}>
            → Toto použiješ na modaly, pop-upy, toast notifikace
          </div>
        </motion.div>
      )}

      {/* 3. whileInView */}
      {activeDemo === "whileInView" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ maxWidth: 460, margin: "0 auto" }}
        >
          <p style={{ textAlign: "center", color: "#8892b0", fontSize: 13, marginBottom: 20 }}>
            👆 Scrolluj dolů — každý blok se animuje při vstupu do výhledu
          </p>
          {[
            { emoji: "🍼", title: "Krok 1 — Kupte přístup", desc: "Jednorázový poplatek, doživotní přístup." },
            { emoji: "📧", title: "Krok 2 — Obdržíte licenční klíč", desc: "Na email okamžitě po platbě." },
            { emoji: "🚀", title: "Krok 3 — Aktivujte appku", desc: "Zadejte klíč a začněte hned." },
            { emoji: "💬", title: "Krok 4 — Ptejte se AI Slaapcoache", desc: "40 dotazů denně zdarma." },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 200, damping: 20 }}
              style={{
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                marginBottom: 20,
                background: "rgba(255,255,255,0.04)",
                borderRadius: 16,
                padding: "16px 20px",
                border: "1px solid rgba(126,200,227,0.15)",
              }}
            >
              <div style={{ fontSize: 30 }}>{step.emoji}</div>
              <div>
                <div style={{ fontWeight: 700, color: "#7EC8E3", marginBottom: 4 }}>{step.title}</div>
                <div style={{ color: "#8892b0", fontSize: 14 }}>{step.desc}</div>
              </div>
            </motion.div>
          ))}
          <div style={{ textAlign: "center", marginTop: 8, fontSize: 12, color: "#4a5568" }}>
            → Toto použiješ na landing page RaisingSmall
          </div>
        </motion.div>
      )}

      {/* 4. Stagger */}
      {activeDemo === "stagger" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ maxWidth: 500, margin: "0 auto" }}
        >
          <p style={{ textAlign: "center", color: "#8892b0", fontSize: 13, marginBottom: 20 }}>
            ✨ Karty se objeví jedna po druhé — stagger efekt
          </p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                style={{
                  background: `linear-gradient(135deg, ${card.color}18, ${card.color}08)`,
                  border: `1px solid ${card.color}44`,
                  borderRadius: 16,
                  padding: "20px 16px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 8 }}>{card.emoji}</div>
                <div style={{ fontWeight: 700, color: card.color, fontSize: 13 }}>{card.title}</div>
                <div style={{ color: "#8892b0", fontSize: 11, marginTop: 4 }}>{card.desc}</div>
              </motion.div>
            ))}
          </motion.div>
          <div style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "#4a5568" }}>
            → Toto použiješ na grid babysitterů nebo seznam funkcí appky
          </div>
        </motion.div>
      )}
    </div>
  );
}
