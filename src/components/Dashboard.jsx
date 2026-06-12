import { useState } from "react";
import { weeks, exerciseTypes } from "../data/curriculum";
import { chords } from "../data/chords";
import ChordDiagram from "./ChordDiagram";

function ExerciseCard({ ex }) {
  const type = exerciseTypes[ex.type] || { label: ex.type, color: "#888", icon: "🎸" };
  const chord = ex.chord ? chords[ex.chord] : null;

  return (
    <div style={{
      background: "var(--surface2)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      padding: "16px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
        <span style={{
          fontSize: 11, padding: "2px 8px", borderRadius: 20,
          background: `${type.color}22`, color: type.color, border: `1px solid ${type.color}44`,
        }}>
          {type.icon} {type.label}
        </span>
        <span style={{ fontSize: 11, color: "var(--text-dim)" }}>⏱ {ex.duration}分</span>
      </div>
      <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{ex.name}</div>
      <div style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.6, marginBottom: ex.steps?.length ? 12 : 0 }}>{ex.desc}</div>

      {ex.steps?.length > 0 && (
        <ol style={{ margin: "0 0 0 4px", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
          {ex.steps.map((step, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{
                flexShrink: 0, width: 20, height: 20, borderRadius: "50%",
                background: "var(--surface)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, fontWeight: 700, color: type.color, marginTop: 1,
              }}>{i + 1}</span>
              <span style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.55 }}>{step}</span>
            </li>
          ))}
        </ol>
      )}

      {chord && (
        <div style={{ marginTop: 14, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ padding: 10, background: "var(--surface)", borderRadius: 10 }}>
            <ChordDiagram chord={chord} />
          </div>
          <div>
            <div style={{ fontWeight: 600, color: "var(--green)", marginBottom: 4 }}>{chord.fullName}</div>
            <div style={{ fontSize: 12, color: "var(--text-dim)", maxWidth: 200, lineHeight: 1.5 }}>{chord.tips}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);

  const week = weeks[selectedWeek];
  const day = week?.days[selectedDay];

  return (
    <div style={{ paddingBottom: 40 }}>
      {/* Week selector */}
      <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
        {weeks.map((w, i) => (
          <button key={i}
            onClick={() => { setSelectedWeek(i); setSelectedDay(0); }}
            style={{
              background: i === selectedWeek ? "var(--accent)" : "var(--surface)",
              color: i === selectedWeek ? "white" : "var(--text-dim)",
              border: `1px solid ${i === selectedWeek ? "var(--accent)" : "var(--border)"}`,
              borderRadius: 10, padding: "8px 16px",
              fontWeight: i === selectedWeek ? 700 : 400, fontSize: 13,
            }}
          >
            Week {w.week}: {w.title}
          </button>
        ))}
      </div>

      {week && (
        <>
          <div style={{
            marginBottom: 16, padding: "12px 16px",
            background: "var(--surface)", borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
          }}>
            <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 600, marginBottom: 2 }}>テーマ</div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>{week.theme}</div>
          </div>

          {/* Day tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20, overflowX: "auto", paddingBottom: 4 }}>
            {week.days.map((d, i) => (
              <button key={i}
                onClick={() => setSelectedDay(i)}
                style={{
                  background: i === selectedDay ? "var(--surface2)" : "var(--surface)",
                  border: `2px solid ${i === selectedDay ? "var(--blue)" : "var(--border)"}`,
                  borderRadius: 10, padding: "8px 14px",
                  color: i === selectedDay ? "var(--text)" : "var(--text-dim)",
                  fontSize: 13, fontWeight: i === selectedDay ? 700 : 400,
                  whiteSpace: "nowrap", flexShrink: 0,
                }}
              >
                Day {d.day}
              </button>
            ))}
          </div>

          {day && (
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>{day.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {day.exercises.map(ex => (
                  <ExerciseCard key={ex.id} ex={ex} />
                ))}
              </div>
              <div style={{ marginTop: 14, fontSize: 13, color: "var(--text-dim)", textAlign: "center" }}>
                合計練習時間の目安: 約{day.exercises.reduce((a, e) => a + e.duration, 0)}分
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
