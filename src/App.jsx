import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ChordLibrary from "./components/ChordLibrary";
import Metronome from "./components/Metronome";
import Tips from "./components/Tips";
import "./App.css";

const TABS = [
  { id: "dashboard", label: "練習プラン", icon: "📋" },
  { id: "chords", label: "コード表", icon: "🎵" },
  { id: "metronome", label: "メトロノーム", icon: "🎚️" },
  { id: "tips", label: "上達のコツ", icon: "💡" },
];

export default function App() {
  const [tab, setTab] = useState("dashboard");

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{
        background: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        padding: "0 20px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 24 }}>🎸</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, lineHeight: 1 }}>Guitar Practice</div>
              <div style={{ fontSize: 10, color: "var(--text-dim)" }}>初心者向け練習アプリ</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: "var(--text-dim)" }}>初心者コース</div>
        </div>
      </header>

      {/* Tab bar */}
      <nav style={{
        background: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        padding: "0 20px",
      }}>
        <div style={{
          maxWidth: 800,
          margin: "0 auto",
          display: "flex",
          gap: 2,
          overflowX: "auto",
        }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                background: "transparent",
                color: tab === t.id ? "var(--accent)" : "var(--text-dim)",
                padding: "12px 16px",
                fontSize: 13,
                fontWeight: tab === t.id ? 700 : 400,
                borderBottom: `2px solid ${tab === t.id ? "var(--accent)" : "transparent"}`,
                borderRadius: 0,
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "all 0.15s",
              }}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content — all panels always mounted so Metronome keeps playing across tab switches */}
      <main style={{ flex: 1, padding: "24px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: tab === "dashboard" ? "block" : "none" }}><Dashboard /></div>
          <div style={{ display: tab === "chords" ? "block" : "none" }}><ChordLibrary /></div>
          <div style={{ display: tab === "metronome" ? "block" : "none" }}><Metronome /></div>
          <div style={{ display: tab === "tips" ? "block" : "none" }}><Tips /></div>
        </div>
      </main>
    </div>
  );
}
