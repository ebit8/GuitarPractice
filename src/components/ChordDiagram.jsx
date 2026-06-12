const STRING_COUNT = 6;
const FRET_COUNT = 4;
const W = 140;
const H = 160;
const PAD_LEFT = 28;
const PAD_TOP = 30;
const PAD_BOTTOM = 16;
const FRET_W = (W - PAD_LEFT - 16) / (STRING_COUNT - 1);
const FRET_H = (H - PAD_TOP - PAD_BOTTOM) / FRET_COUNT;

const FINGER_COLORS = ["", "#f97316", "#3b82f6", "#22c55e", "#a855f7"];

export default function ChordDiagram({ chord }) {
  if (!chord) return null;

  const cx = (stringNum) => PAD_LEFT + (STRING_COUNT - stringNum) * FRET_W;
  const cy = (fretNum) => PAD_TOP + (fretNum - chord.minFret) * FRET_H + FRET_H / 2;

  const barreFingers = chord.barre
    ? chord.fingers.filter(f => f.barre)
    : [];
  const dotFingers = chord.barre
    ? chord.fingers.filter(f => !f.barre)
    : chord.fingers;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ display: "block" }}>
      {/* Nut (only when starting at fret 1) */}
      {chord.minFret === 1 && (
        <rect x={PAD_LEFT} y={PAD_TOP - 4} width={FRET_W * 5} height={4} fill="#f1f5f9" rx={2} />
      )}

      {/* Fret lines */}
      {Array.from({ length: FRET_COUNT + 1 }).map((_, i) => (
        <line key={i}
          x1={PAD_LEFT} x2={PAD_LEFT + FRET_W * 5}
          y1={PAD_TOP + i * FRET_H} y2={PAD_TOP + i * FRET_H}
          stroke="#4b5563" strokeWidth={1}
        />
      ))}

      {/* String lines */}
      {Array.from({ length: STRING_COUNT }).map((_, i) => (
        <line key={i}
          x1={PAD_LEFT + i * FRET_W} x2={PAD_LEFT + i * FRET_W}
          y1={PAD_TOP} y2={PAD_TOP + FRET_H * FRET_COUNT}
          stroke="#6b7280" strokeWidth={1}
        />
      ))}

      {/* Fret numbers on left */}
      {Array.from({ length: FRET_COUNT }).map((_, i) => (
        <text key={i}
          x={PAD_LEFT - 6} y={PAD_TOP + i * FRET_H + FRET_H / 2 + 4}
          textAnchor="end" fontSize={9} fill="#6b7280"
        >
          {chord.minFret + i}
        </text>
      ))}

      {/* String labels */}
      {Array.from({ length: STRING_COUNT }).map((_, i) => (
        <text key={i}
          x={PAD_LEFT + (5 - i) * FRET_W} y={PAD_TOP - 10}
          textAnchor="middle" fontSize={8} fill="#6b7280"
        >
          {i + 1}
        </text>
      ))}

      {/* Muted strings */}
      {chord.muted?.map(s => (
        <text key={s} x={cx(s)} y={PAD_TOP - 12}
          textAnchor="middle" fontSize={11} fill="#ef4444" fontWeight="bold">×</text>
      ))}

      {/* Open strings */}
      {chord.open?.map(s => (
        <circle key={s} cx={cx(s)} cy={PAD_TOP - 12} r={4}
          fill="none" stroke="#22c55e" strokeWidth={1.5} />
      ))}

      {/* Barre bar */}
      {chord.barre && (() => {
        const { fret, finger, fromString = 1, toString: toStr = 6 } = chord.barre;
        const leftStr = Math.max(fromString, toStr);
        const rightStr = Math.min(fromString, toStr);
        const x1 = cx(leftStr) - 5;
        const x2 = cx(rightStr) + 5;
        const y = cy(fret);
        return (
          <rect key="barre"
            x={x1} y={y - 8} width={x2 - x1} height={16}
            rx={8} fill={FINGER_COLORS[finger]} opacity={0.9}
          />
        );
      })()}

      {/* Finger dots */}
      {dotFingers.map((f, i) => (
        <g key={i}>
          <circle cx={cx(f.string)} cy={cy(f.fret)} r={8} fill={FINGER_COLORS[f.finger]} />
          <text x={cx(f.string)} y={cy(f.fret) + 4}
            textAnchor="middle" fontSize={9} fill="white" fontWeight="bold">
            {f.finger}
          </text>
        </g>
      ))}
    </svg>
  );
}
