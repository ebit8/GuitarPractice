export const chordCategories = [
  { id: "basic", label: "基本コード（ポップ・ロック）", color: "#f97316", desc: "最も使用頻度が高い。J-Pop・ロックの大半はこれで対応できる" },
  { id: "seventh", label: "セブンスコード", color: "#22c55e", desc: "ブルース・ジャズ・ポップに多用。雰囲気がぐっと増す" },
  { id: "tension", label: "テンション・アコースティック", color: "#a855f7", desc: "おしゃれなサウンド。バラード・アコースティック系に頻出" },
  { id: "barre", label: "バレーコード", color: "#ef4444", desc: "人差し指で全弦を押さえる。難しいが習得すれば表現の幅が大きく広がる" },
  { id: "jazz", label: "ジャズコード", color: "#06b6d4", desc: "ii-V-Iなどジャズ特有の進行で必須。maj7・m7・6th・半減7が中心" },
];

export const chords = {
  // ─── 基本コード ───────────────────────────────────────────
  Em: {
    name: "Em", fullName: "Eマイナー", category: "basic",
    usageFreq: 5, difficulty: 1,
    genres: ["J-Pop", "ロック", "バラード"],
    desc: "ギター最初のコード。2本の指だけ",
    fingers: [
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 3 },
    ],
    muted: [], open: [6, 3, 2, 1], minFret: 1, maxFret: 4,
    tips: "指を立てて隣の弦に触れないようにする"
  },
  Am: {
    name: "Am", fullName: "Aマイナー", category: "basic",
    usageFreq: 5, difficulty: 1,
    genres: ["J-Pop", "ロック", "バラード"],
    desc: "Emと並ぶ最重要マイナーコード",
    fingers: [
      { string: 2, fret: 1, finger: 1 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
    ],
    muted: [6], open: [5, 1], minFret: 1, maxFret: 4,
    tips: "5弦から1弦まで鳴らす。6弦はミュート"
  },
  G: {
    name: "G", fullName: "Gメジャー", category: "basic",
    usageFreq: 5, difficulty: 2,
    genres: ["J-Pop", "ロック", "フォーク"],
    desc: "超頻出コード。全弦を鳴らせる開放感が魅力",
    fingers: [
      { string: 6, fret: 3, finger: 2 },
      { string: 5, fret: 2, finger: 1 },
      { string: 2, fret: 3, finger: 3 },
      { string: 1, fret: 3, finger: 4 },
    ],
    muted: [], open: [4, 3], minFret: 1, maxFret: 4,
    tips: "小指と薬指を使う形に慣れると後々楽になる"
  },
  C: {
    name: "C", fullName: "Cメジャー", category: "basic",
    usageFreq: 5, difficulty: 2,
    genres: ["J-Pop", "ポップ", "ロック"],
    desc: "G・D・Emと合わせてよく使われるコード",
    fingers: [
      { string: 2, fret: 1, finger: 1 },
      { string: 4, fret: 2, finger: 2 },
      { string: 5, fret: 3, finger: 3 },
    ],
    muted: [6], open: [3, 1], minFret: 1, maxFret: 4,
    tips: "6弦はミュート。1弦がきれいに鳴るか確認"
  },
  D: {
    name: "D", fullName: "Dメジャー", category: "basic",
    usageFreq: 5, difficulty: 2,
    genres: ["J-Pop", "ポップ", "ロック"],
    desc: "三角形の形が特徴的。G・C・Emと相性が良い",
    fingers: [
      { string: 3, fret: 2, finger: 1 },
      { string: 1, fret: 2, finger: 2 },
      { string: 2, fret: 3, finger: 3 },
    ],
    muted: [6, 5], open: [4], minFret: 1, maxFret: 4,
    tips: "5・6弦はミュート。4弦から1弦まで"
  },
  E: {
    name: "E", fullName: "Eメジャー", category: "basic",
    usageFreq: 4, difficulty: 1,
    genres: ["ロック", "ブルース"],
    desc: "Emに中指1本を追加するだけ。ロックの定番",
    fingers: [
      { string: 3, fret: 1, finger: 1 },
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 3 },
    ],
    muted: [], open: [6, 2, 1], minFret: 1, maxFret: 4,
    tips: "全弦を鳴らせる。Emから人差し指1本追加するイメージ"
  },
  A: {
    name: "A", fullName: "Aメジャー", category: "basic",
    usageFreq: 4, difficulty: 2,
    genres: ["ロック", "ポップ"],
    desc: "3本の指を2フレットに並べる。バレーBmの基本形",
    fingers: [
      { string: 4, fret: 2, finger: 1 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 2, finger: 3 },
    ],
    muted: [6], open: [5, 1], minFret: 1, maxFret: 4,
    tips: "3本が密集する。指を立てて1弦が鳴るようにする"
  },
  Dm: {
    name: "Dm", fullName: "Dマイナー", category: "basic",
    usageFreq: 4, difficulty: 2,
    genres: ["J-Pop", "バラード", "ポップ"],
    desc: "切ない雰囲気。AmやEmと組み合わせることが多い",
    fingers: [
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 3, finger: 3 },
      { string: 1, fret: 1, finger: 1 },
    ],
    muted: [6, 5], open: [4], minFret: 1, maxFret: 4,
    tips: "5・6弦はミュート。4弦から1弦まで"
  },
  F: {
    name: "F", fullName: "Fメジャー", category: "basic",
    usageFreq: 4, difficulty: 4,
    genres: ["J-Pop", "ポップ", "ロック"],
    desc: "初心者最大の壁。でも必ず弾けるようになる",
    fingers: [
      { string: 4, fret: 3, finger: 3 },
      { string: 5, fret: 3, finger: 4 },
      { string: 3, fret: 2, finger: 2 },
    ],
    barre: { fret: 1, finger: 1, fromString: 1, toString: 6 },
    muted: [], open: [], minFret: 1, maxFret: 4,
    tips: "人差し指を寝かせて全弦押さえる。まず1・2弦だけ鳴らす練習から"
  },

  // ─── セブンスコード ────────────────────────────────────────
  G7: {
    name: "G7", fullName: "G7", category: "seventh",
    usageFreq: 4, difficulty: 2,
    genres: ["ブルース", "ポップ", "ジャズ"],
    desc: "C (IV)コードへ向かう強い推進力。多くの曲で登場",
    fingers: [
      { string: 6, fret: 3, finger: 3 },
      { string: 5, fret: 2, finger: 2 },
      { string: 1, fret: 1, finger: 1 },
    ],
    muted: [], open: [4, 3, 2], minFret: 1, maxFret: 4,
    tips: "Gコードから小指を離して人差し指を1弦に追加"
  },
  D7: {
    name: "D7", fullName: "D7", category: "seventh",
    usageFreq: 4, difficulty: 2,
    genres: ["ブルース", "ポップ", "カントリー"],
    desc: "Dの変形。ブルースやカントリーでよく使われる",
    fingers: [
      { string: 3, fret: 2, finger: 3 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 2, finger: 2 },
    ],
    muted: [6, 5], open: [4], minFret: 1, maxFret: 4,
    tips: "Dコードから薬指を離して人差し指を2弦に移動"
  },
  E7: {
    name: "E7", fullName: "E7", category: "seventh",
    usageFreq: 3, difficulty: 1,
    genres: ["ブルース", "ロック"],
    desc: "Eコードの簡略形。ブルースの基本コード",
    fingers: [
      { string: 5, fret: 2, finger: 2 },
      { string: 3, fret: 1, finger: 1 },
    ],
    muted: [], open: [6, 4, 2, 1], minFret: 1, maxFret: 4,
    tips: "EコードよりむしろEコードを覚えてから派生として"
  },
  A7: {
    name: "A7", fullName: "A7", category: "seventh",
    usageFreq: 3, difficulty: 1,
    genres: ["ブルース", "カントリー"],
    desc: "Aコードの簡略形。押さえる指が2本だけで楽",
    fingers: [
      { string: 4, fret: 2, finger: 2 },
      { string: 2, fret: 2, finger: 3 },
    ],
    muted: [6], open: [5, 3, 1], minFret: 1, maxFret: 4,
    tips: "開放弦が多く音が鳴りやすい。ブルースの練習に最適"
  },
  C7: {
    name: "C7", fullName: "C7", category: "seventh",
    usageFreq: 3, difficulty: 3,
    genres: ["ブルース", "ジャズ", "ポップ"],
    desc: "Cコードの変形。ジャズっぽい響き",
    fingers: [
      { string: 5, fret: 3, finger: 3 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 3, finger: 4 },
      { string: 2, fret: 1, finger: 1 },
    ],
    muted: [6], open: [1], minFret: 1, maxFret: 4,
    tips: "4本の指を使う。Cコードより難しいが同じ形から発展"
  },
  B7: {
    name: "B7", fullName: "B7", category: "seventh",
    usageFreq: 2, difficulty: 3,
    genres: ["ブルース", "ジャズ"],
    desc: "Em進行によく現れる。少し複雑な形状",
    fingers: [
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 3 },
      { string: 1, fret: 2, finger: 4 },
    ],
    muted: [6], open: [2], minFret: 1, maxFret: 4,
    tips: "4本の指がバラバラのフレットに入る。焦らず1本ずつ"
  },

  // ─── テンション・アコースティック ─────────────────────────
  Em7: {
    name: "Em7", fullName: "Eマイナー7", category: "tension",
    usageFreq: 4, difficulty: 1,
    genres: ["J-Pop", "バラード", "ジャズポップ"],
    desc: "Emより柔らかく切ない響き。J-Popで非常に頻出",
    fingers: [
      { string: 5, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 3 },
      { string: 2, fret: 3, finger: 4 },
    ],
    muted: [], open: [6, 3, 1], minFret: 1, maxFret: 4,
    tips: "Emに小指1本追加するだけ。まずEmを完璧にしてから"
  },
  Am7: {
    name: "Am7", fullName: "Aマイナー7", category: "tension",
    usageFreq: 4, difficulty: 1,
    genres: ["J-Pop", "バラード", "ジャズポップ"],
    desc: "Amより洗練された響き。コード進行に滑らかさが出る",
    fingers: [
      { string: 4, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 },
    ],
    muted: [6], open: [5, 3, 1], minFret: 1, maxFret: 4,
    tips: "Amから中指を取るだけ。押さえる指が2本で簡単"
  },
  Cmaj7: {
    name: "Cmaj7", fullName: "Cメジャー7", category: "tension",
    usageFreq: 3, difficulty: 2,
    genres: ["J-Pop", "バラード", "ジャズポップ"],
    desc: "Cより甘くおしゃれ。バラードの定番コード",
    fingers: [
      { string: 4, fret: 2, finger: 2 },
      { string: 5, fret: 3, finger: 3 },
    ],
    muted: [6], open: [3, 2, 1], minFret: 1, maxFret: 4,
    tips: "Cコードから人差し指を離すだけ。開放弦が多くきれいに鳴る"
  },
  Fmaj7: {
    name: "Fmaj7", fullName: "Fメジャー7", category: "tension",
    usageFreq: 3, difficulty: 2,
    genres: ["J-Pop", "バラード", "ジャズポップ"],
    desc: "Fよりずっと簡単！バレー不要でおしゃれな響き",
    fingers: [
      { string: 4, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 },
    ],
    muted: [6, 5], open: [1], minFret: 1, maxFret: 4,
    tips: "Fが弾けない初心者の強い味方。4弦〜1弦だけ使う"
  },
  Cadd9: {
    name: "Cadd9", fullName: "Cアドナインス", category: "tension",
    usageFreq: 3, difficulty: 2,
    genres: ["J-Pop", "アコースティック", "ポップロック"],
    desc: "Cコードに広がりが出る。アコギでよく使われる",
    fingers: [
      { string: 4, fret: 2, finger: 2 },
      { string: 5, fret: 3, finger: 3 },
      { string: 2, fret: 3, finger: 4 },
    ],
    muted: [6], open: [3, 1], minFret: 1, maxFret: 4,
    tips: "Cmaj7に小指を追加するイメージ。小指の練習に良い"
  },
  Dsus4: {
    name: "Dsus4", fullName: "Dサスペンデッド4", category: "tension",
    usageFreq: 2, difficulty: 2,
    genres: ["ロック", "ポップロック"],
    desc: "DとDsus4を交互に弾くのがロック定番パターン",
    fingers: [
      { string: 3, fret: 2, finger: 1 },
      { string: 2, fret: 3, finger: 3 },
      { string: 1, fret: 3, finger: 4 },
    ],
    muted: [6, 5], open: [4], minFret: 1, maxFret: 4,
    tips: "Dコードから人差し指を1弦→3弦へ移動するだけ"
  },
  Asus2: {
    name: "Asus2", fullName: "Aサスペンデッド2", category: "tension",
    usageFreq: 2, difficulty: 1,
    genres: ["アコースティック", "ポップ"],
    desc: "開放弦が多く澄んだ響き。アコギで映える",
    fingers: [
      { string: 4, fret: 2, finger: 1 },
      { string: 3, fret: 2, finger: 2 },
    ],
    muted: [6], open: [5, 2, 1], minFret: 1, maxFret: 4,
    tips: "Amから人差し指を外すだけ。簡単で美しい音"
  },

  // ─── バレーコード ──────────────────────────────────────────
  Bm: {
    name: "Bm", fullName: "Bマイナー", category: "barre",
    usageFreq: 4, difficulty: 3,
    genres: ["J-Pop", "ロック"],
    desc: "G-D-Em-C進行でよく使われる重要コード",
    fingers: [
      { string: 2, fret: 3, finger: 2 },
      { string: 3, fret: 4, finger: 3 },
      { string: 4, fret: 4, finger: 4 },
    ],
    barre: { fret: 2, finger: 1, fromString: 1, toString: 5 },
    muted: [6], open: [], minFret: 2, maxFret: 5,
    tips: "人差し指で1〜5弦を2フレットでセーハ。中指で2弦3フレット、薬指・小指で3弦・4弦の4フレットを押さえる"
  },
  Fm: {
    name: "F#m", fullName: "F#マイナー（嬰ヘ短調）", category: "barre",
    usageFreq: 3, difficulty: 3,
    genres: ["J-Pop", "ロック", "バラード"],
    desc: "Dメジャーキーの6度コード。よく見かける",
    fingers: [
      { string: 5, fret: 4, finger: 3 },
      { string: 4, fret: 4, finger: 4 },
    ],
    barre: { fret: 2, finger: 1, fromString: 1, toString: 6 },
    muted: [], open: [], minFret: 2, maxFret: 5,
    tips: "2フレットでEm型のバレーコード。BmよりFの形"
  },
  Bb: {
    name: "Bb", fullName: "B♭メジャー", category: "barre",
    usageFreq: 3, difficulty: 4,
    genres: ["ポップ", "ジャズ", "ロック"],
    desc: "FキーやCキーの曲でよく出てくる",
    fingers: [
      { string: 4, fret: 3, finger: 2 },
      { string: 3, fret: 3, finger: 3 },
      { string: 2, fret: 3, finger: 4 },
    ],
    barre: { fret: 1, finger: 1, fromString: 1, toString: 5 },
    muted: [6], open: [], minFret: 1, maxFret: 4,
    tips: "人差し指で5弦〜1弦をセーハ + 2〜4弦の3フレットを押さえる"
  },
  Cm: {
    name: "Cm", fullName: "Cマイナー", category: "barre",
    usageFreq: 2, difficulty: 4,
    genres: ["J-Pop", "バラード"],
    desc: "短調の曲でよく登場。Am型バレーコードを3フレットに移動した形",
    fingers: [
      { string: 2, fret: 4, finger: 2 },
      { string: 3, fret: 5, finger: 3 },
      { string: 4, fret: 5, finger: 4 },
    ],
    barre: { fret: 3, finger: 1, fromString: 1, toString: 5 },
    muted: [6], open: [], minFret: 3, maxFret: 6,
    tips: "人差し指で1〜5弦を3フレットでセーハ。中指で2弦4フレット、薬指・小指で3弦・4弦の5フレットを押さえる"
  },

  // ─── ジャズコード ──────────────────────────────────────────
  Dm7: {
    name: "Dm7", fullName: "Dマイナー7", category: "jazz",
    usageFreq: 5, difficulty: 2,
    genres: ["ジャズ", "ボサノバ", "J-Pop"],
    desc: "ジャズの ii-V-I（Dm7→G7→Cmaj7）の要。ポップスでも頻出のおしゃれコード",
    fingers: [
      { string: 3, fret: 2, finger: 2 },
    ],
    barre: { fret: 1, finger: 1, fromString: 1, toString: 2 },
    muted: [6, 5], open: [4], minFret: 1, maxFret: 4,
    tips: "1フレットで1・2弦をセーハ、3弦2フレットに中指。4弦は開放弦"
  },
  Gmaj7: {
    name: "Gmaj7", fullName: "Gメジャー7", category: "jazz",
    usageFreq: 4, difficulty: 2,
    genres: ["ジャズ", "ボサノバ", "J-Pop"],
    desc: "ジャズのI和音の定番。Gコードより柔らかく浮遊感がある",
    fingers: [
      { string: 6, fret: 3, finger: 3 },
      { string: 5, fret: 2, finger: 2 },
      { string: 1, fret: 2, finger: 4 },
    ],
    muted: [], open: [4, 3, 2], minFret: 1, maxFret: 4,
    tips: "小指を1弦2フレットに追加するのがポイント。開放弦を多く鳴らして"
  },
  Dmaj7: {
    name: "Dmaj7", fullName: "Dメジャー7", category: "jazz",
    usageFreq: 4, difficulty: 2,
    genres: ["ジャズ", "ボサノバ", "J-Pop"],
    desc: "Dコードをmaj7化。明るく浮遊感のある美しい響き",
    fingers: [],
    barre: { fret: 2, finger: 1, fromString: 1, toString: 3 },
    muted: [6, 5], open: [4], minFret: 1, maxFret: 4,
    tips: "3・2・1弦すべて2フレット。人差し指で3本まとめてセーハできる"
  },
  Amaj7: {
    name: "Amaj7", fullName: "Aメジャー7", category: "jazz",
    usageFreq: 3, difficulty: 2,
    genres: ["ジャズ", "ボサノバ"],
    desc: "Aキーのトニック。甘くロマンティックな響き",
    fingers: [
      { string: 3, fret: 1, finger: 1 },
      { string: 4, fret: 2, finger: 3 },
      { string: 2, fret: 2, finger: 4 },
    ],
    muted: [6], open: [5, 1], minFret: 1, maxFret: 4,
    tips: "人差し指で3弦1フレット、薬指で4弦2フレット、小指で2弦2フレット"
  },
  Em7b5: {
    name: "Em7♭5", fullName: "Eハーフディミニッシュ", category: "jazz",
    usageFreq: 3, difficulty: 2,
    genres: ["ジャズ", "クラシック"],
    desc: "マイナーii-V-I（Em7♭5→A7→Dm）の ii コード。独特の緊張感",
    fingers: [
      { string: 5, fret: 1, finger: 1 },
      { string: 2, fret: 3, finger: 3 },
    ],
    muted: [], open: [6, 4, 3, 1], minFret: 1, maxFret: 4,
    tips: "5弦1フレットと2弦3フレットだけ。開放弦が多くて鳴らしやすい"
  },
  Am6: {
    name: "Am6", fullName: "Aマイナー6", category: "jazz",
    usageFreq: 3, difficulty: 3,
    genres: ["ジャズ", "ボサノバ", "タンゴ"],
    desc: "6th音が入ったマイナーコード。ジャズのエンディングに定番",
    fingers: [
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
      { string: 2, fret: 1, finger: 1 },
      { string: 1, fret: 2, finger: 4 },
    ],
    muted: [6], open: [5], minFret: 1, maxFret: 4,
    tips: "4本の指を使う。Am7と比べてF#音（1弦2フレット）が加わったイメージ"
  },
  C6: {
    name: "C6", fullName: "Cメジャー6", category: "jazz",
    usageFreq: 3, difficulty: 2,
    genres: ["ジャズ", "ボサノバ", "スウィング"],
    desc: "6th音（A）が加わったCコード。ジャズのリズムカッティングに多用",
    fingers: [
      { string: 2, fret: 1, finger: 1 },
      { string: 4, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
      { string: 5, fret: 3, finger: 4 },
    ],
    muted: [6], open: [1], minFret: 1, maxFret: 4,
    tips: "Cmaj7の形に近い。4弦と3弦が同じフレット（2フレット）なのがポイント"
  },
};

// Return sorted chord list: usageFreq desc → difficulty asc
export function getChordsInCategory(catId) {
  return Object.values(chords)
    .filter(c => c.category === catId)
    .sort((a, b) => b.usageFreq - a.usageFreq || a.difficulty - b.difficulty);
}
