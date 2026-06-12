import { useState, useEffect, useRef, useCallback } from "react";

const PRESETS = [
  { label: "超ゆっくり", bpm: 50 },
  { label: "ゆっくり", bpm: 70 },
  { label: "普通", bpm: 90 },
  { label: "少し速い", bpm: 110 },
  { label: "速い", bpm: 130 },
];

const BEATS_OPTIONS = [2, 3, 4];

export default function Metronome() {
  const [bpm, setBpm] = useState(80);
  const [running, setRunning] = useState(false);
  const [beat, setBeat] = useState(0);
  const [beats, setBeats] = useState(4);
  const [emphasis, setEmphasis] = useState(true);

  const audioCtx = useRef(null);
  const nextBeatTime = useRef(0);
  const currentBeat = useRef(0);
  const intervalRef = useRef(null);

  // bpm/beats/emphasis refs so the scheduler closure always reads latest values
  const bpmRef = useRef(bpm);
  const beatsRef = useRef(beats);
  const emphasisRef = useRef(emphasis);
  useEffect(() => { bpmRef.current = bpm; }, [bpm]);
  useEffect(() => { beatsRef.current = beats; }, [beats]);
  useEffect(() => { emphasisRef.current = emphasis; }, [emphasis]);

  const getCtx = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx.current;
  };

  const scheduleClick = useCallback((time, accent) => {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = accent ? 1400 : 900;
    gain.gain.setValueAtTime(accent ? 0.5 : 0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
    osc.start(time);
    osc.stop(time + 0.05);
  }, []);

  // Uses setInterval (not requestAnimationFrame) so it keeps running in background tabs
  const startScheduler = useCallback(() => {
    const ctx = getCtx();
    nextBeatTime.current = ctx.currentTime + 0.1;
    currentBeat.current = 0;

    intervalRef.current = setInterval(() => {
      const scheduleAhead = 0.1;
      while (nextBeatTime.current < ctx.currentTime + scheduleAhead) {
        const isAccent = emphasisRef.current && currentBeat.current === 0;
        scheduleClick(nextBeatTime.current, isAccent);

        const b = currentBeat.current;
        const delay = Math.max(0, (nextBeatTime.current - ctx.currentTime) * 1000 - 10);
        setTimeout(() => setBeat(b), delay);

        currentBeat.current = (currentBeat.current + 1) % beatsRef.current;
        nextBeatTime.current += 60 / bpmRef.current;
      }
    }, 25);
  }, [scheduleClick]);

  useEffect(() => {
    if (running) {
      startScheduler();
    } else {
      clearInterval(intervalRef.current);
      setBeat(0);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, startScheduler]);

  const handleBpmChange = (val) => {
    const v = Math.max(30, Math.min(220, val));
    setBpm(v);
    if (running) { setRunning(false); }
  };

  return (
    <div style={{ maxWidth: 480, margin: "0 auto" }}>
      <div style={{
        background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: 20, padding: 32, textAlign: "center",
      }}>
        {/* Beat display */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 32, minHeight: 48, alignItems: "center" }}>
          {Array.from({ length: beats }).map((_, i) => (
            <div key={i} style={{
              width: 40, height: 40, borderRadius: "50%",
              background: running && beat === i
                ? (emphasis && i === 0 ? "var(--accent)" : "var(--blue)")
                : "var(--surface2)",
              border: `2px solid ${i === 0 && emphasis ? "var(--accent)" : "var(--border)"}`,
              transition: "background 0.05s",
            }} />
          ))}
        </div>

        {/* BPM display */}
        <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1, marginBottom: 4, color: running ? "var(--accent)" : "var(--text)" }}>
          {bpm}
        </div>
        <div style={{ fontSize: 14, color: "var(--text-dim)", marginBottom: 4 }}>BPM</div>
        {running && (
          <div style={{ fontSize: 11, color: "var(--green)", marginBottom: 16 }}>
            ● タブを切り替えても再生継続中
          </div>
        )}

        {/* BPM slider */}
        <input type="range" min={30} max={220} value={bpm}
          onChange={e => handleBpmChange(Number(e.target.value))}
          style={{ width: "100%", marginBottom: 20, accentColor: "var(--accent)" }}
        />

        {/* Preset buttons */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
          {PRESETS.map(p => (
            <button key={p.bpm} onClick={() => handleBpmChange(p.bpm)}
              style={{
                background: bpm === p.bpm ? "var(--accent)" : "var(--surface2)",
                color: bpm === p.bpm ? "white" : "var(--text-dim)",
                border: `1px solid ${bpm === p.bpm ? "var(--accent)" : "var(--border)"}`,
                borderRadius: 8, padding: "6px 12px", fontSize: 12,
              }}
            >{p.label} ({p.bpm})</button>
          ))}
        </div>

        {/* Fine adjustment */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 28 }}>
          {[-10, -5, -1].map(d => (
            <button key={d} onClick={() => handleBpmChange(bpm + d)}
              style={{ background: "var(--surface2)", color: "var(--text)", border: "1px solid var(--border)", borderRadius: 8, padding: "8px 14px", fontSize: 14, fontWeight: 700 }}>
              {d}
            </button>
          ))}
          {[1, 5, 10].map(d => (
            <button key={d} onClick={() => handleBpmChange(bpm + d)}
              style={{ background: "var(--surface2)", color: "var(--text)", border: "1px solid var(--border)", borderRadius: 8, padding: "8px 14px", fontSize: 14, fontWeight: 700 }}>
              +{d}
            </button>
          ))}
        </div>

        {/* Settings row */}
        <div style={{ display: "flex", gap: 20, justifyContent: "center", alignItems: "center", marginBottom: 28 }}>
          <div>
            <div style={{ fontSize: 12, color: "var(--text-dim)", marginBottom: 6 }}>拍子</div>
            <div style={{ display: "flex", gap: 6 }}>
              {BEATS_OPTIONS.map(b => (
                <button key={b} onClick={() => { setBeats(b); if (running) setRunning(false); }}
                  style={{
                    background: beats === b ? "var(--blue)" : "var(--surface2)",
                    color: beats === b ? "white" : "var(--text-dim)",
                    border: `1px solid ${beats === b ? "var(--blue)" : "var(--border)"}`,
                    borderRadius: 8, padding: "6px 14px", fontSize: 13, fontWeight: 600,
                  }}>{b}/4</button>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: "var(--text-dim)", marginBottom: 6 }}>1拍目アクセント</div>
            <button onClick={() => setEmphasis(e => !e)}
              style={{
                background: emphasis ? "var(--purple)" : "var(--surface2)",
                color: emphasis ? "white" : "var(--text-dim)",
                border: `1px solid ${emphasis ? "var(--purple)" : "var(--border)"}`,
                borderRadius: 8, padding: "6px 14px", fontSize: 13, fontWeight: 600,
              }}>{emphasis ? "ON" : "OFF"}</button>
          </div>
        </div>

        {/* Play/Stop */}
        <button onClick={() => setRunning(r => !r)}
          style={{
            background: running ? "#ef4444" : "var(--green)",
            color: "white", borderRadius: 16, padding: "16px 48px",
            fontSize: 20, fontWeight: 800, width: "100%",
            boxShadow: running ? "0 0 20px rgba(239,68,68,0.3)" : "0 0 20px rgba(34,197,94,0.3)",
            transition: "all 0.2s",
          }}
        >
          {running ? "⏹ 停止" : "▶ スタート"}
        </button>
      </div>

      <div style={{ marginTop: 20, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: 16 }}>
        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 12, color: "var(--accent)" }}>💡 BPMの目安</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            ["BPM 40-60", "超ゆっくり。初めてコードを練習するとき"],
            ["BPM 60-80", "ゆっくり。コードチェンジの練習"],
            ["BPM 80-100", "少しノリが出る。慣れてきたら"],
            ["BPM 100+", "曲のテンポに近い。実践的な練習"],
          ].map(([label, desc]) => (
            <div key={label} style={{ padding: 10, background: "var(--surface2)", borderRadius: 8 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--blue)", marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
