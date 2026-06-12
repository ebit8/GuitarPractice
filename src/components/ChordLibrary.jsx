import { useState } from "react";
import { chords, chordCategories, getChordsInCategory } from "../data/chords";
import ChordDiagram from "./ChordDiagram";

const DIFF_STARS = ["", "★☆☆☆", "★★☆☆", "★★★☆", "★★★★"];
const DIFF_COLORS = ["", "#22c55e", "#3b82f6", "#f97316", "#ef4444"];

function DiffBadge({ d }) {
  return (
    <span style={{ fontSize: 11, color: DIFF_COLORS[d] }}>{DIFF_STARS[d]}</span>
  );
}

export default function ChordLibrary() {
  const [selected, setSelected] = useState("Em");
  const [filterCat, setFilterCat] = useState(null);
  // name フィールドで検索（オブジェクトキーと name が異なるコードに対応）
  const chord = Object.values(chords).find(c => c.name === selected) ?? chords[selected];

  const categoriesToShow = filterCat
    ? chordCategories.filter(c => c.id === filterCat)
    : chordCategories;

  return (
    <div>
      {/* Category filter */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        <button
          onClick={() => setFilterCat(null)}
          style={{
            padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600,
            background: filterCat === null ? "var(--surface2)" : "transparent",
            color: filterCat === null ? "var(--text)" : "var(--text-dim)",
            border: `1px solid ${filterCat === null ? "var(--accent)" : "var(--border)"}`,
          }}
        >すべて</button>
        {chordCategories.map(cat => (
          <button key={cat.id}
            onClick={() => setFilterCat(filterCat === cat.id ? null : cat.id)}
            style={{
              padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600,
              background: filterCat === cat.id ? `${cat.color}22` : "transparent",
              color: filterCat === cat.id ? cat.color : "var(--text-dim)",
              border: `1px solid ${filterCat === cat.id ? cat.color : "var(--border)"}`,
            }}
          >{cat.label}</button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        {/* Left: chord list by category */}
        <div style={{ width: 220, flexShrink: 0, maxHeight: "75vh", overflowY: "auto", paddingRight: 4 }}>
          {categoriesToShow.map(cat => {
            const catChords = getChordsInCategory(cat.id);
            return (
              <div key={cat.id} style={{ marginBottom: 20 }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: cat.color,
                  marginBottom: 8, display: "flex", alignItems: "center", gap: 6,
                }}>
                  <div style={{ width: 3, height: 12, background: cat.color, borderRadius: 2 }} />
                  {cat.label}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {catChords.map(c => (
                    <button key={c.name}
                      onClick={() => setSelected(c.name)}
                      style={{
                        background: selected === c.name ? "var(--surface2)" : "transparent",
                        border: `1px solid ${selected === c.name ? cat.color : "var(--border)"}`,
                        borderRadius: 8,
                        padding: "8px 12px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "var(--text)",
                        textAlign: "left",
                        transition: "all 0.1s",
                      }}
                    >
                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <span style={{ fontWeight: 700, fontSize: 15, minWidth: 36 }}>{c.name}</span>
                        <span style={{ fontSize: 11, color: "var(--text-dim)" }}>{c.fullName.length > 8 ? c.fullName.slice(0, 8) + "…" : c.fullName}</span>
                      </div>
                      <DiffBadge d={c.difficulty} />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: detail */}
        {chord && (
          <div style={{
            flex: 1, background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: 16, padding: 24, minWidth: 0,
          }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
              <div>
                <div style={{ fontSize: 36, fontWeight: 800, lineHeight: 1 }}>{chord.name}</div>
                <div style={{ fontSize: 15, color: "var(--text-dim)", marginTop: 4 }}>{chord.fullName}</div>
              </div>
              <div style={{
                background: `${DIFF_COLORS[chord.difficulty]}22`,
                border: `1px solid ${DIFF_COLORS[chord.difficulty]}44`,
                borderRadius: 8, padding: "4px 12px",
                color: DIFF_COLORS[chord.difficulty], fontSize: 13, fontWeight: 600,
              }}>
                {DIFF_STARS[chord.difficulty]}
              </div>
            </div>

            {/* Genre tags */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {chord.genres?.map(g => (
                <span key={g} style={{
                  fontSize: 11, padding: "2px 8px", borderRadius: 10,
                  background: "var(--surface2)", color: "var(--text-dim)",
                  border: "1px solid var(--border)",
                }}>{g}</span>
              ))}
            </div>

            {/* Diagram */}
            <div style={{ marginBottom: 20, padding: 16, background: "var(--surface2)", borderRadius: 12, display: "inline-block" }}>
              <ChordDiagram chord={chord} />
            </div>

            {/* Description */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 600, marginBottom: 4 }}>説明</div>
              <div style={{ fontSize: 14, lineHeight: 1.6 }}>{chord.desc}</div>
            </div>

            {/* Tips */}
            <div style={{ padding: 14, background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.25)", borderRadius: 10, marginBottom: 16 }}>
              <div style={{ fontSize: 12, color: "#eab308", fontWeight: 600, marginBottom: 4 }}>💡 コツ</div>
              <div style={{ fontSize: 13, lineHeight: 1.6 }}>{chord.tips}</div>
            </div>

            {/* String status */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {chord.muted?.length > 0 && (
                <div style={{ fontSize: 12, color: "#ef4444" }}>
                  ✕ ミュート: {chord.muted.map(s => `${s}弦`).join(", ")}
                </div>
              )}
              {chord.open?.length > 0 && (
                <div style={{ fontSize: 12, color: "#22c55e" }}>
                  ○ 開放弦: {chord.open.map(s => `${s}弦`).join(", ")}
                </div>
              )}
              {chord.barre && (
                <div style={{ fontSize: 12, color: "#f97316" }}>
                  ▬ セーハ: {chord.barre.fret}フレット
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
