const tips = [
  {
    category: "練習の心得",
    color: "#f97316",
    items: [
      { title: "毎日15〜30分がベスト", body: "週1回2時間より毎日15分の方が上達が早い。習慣化が最も大切。" },
      { title: "まずゆっくり弾く", body: "速く弾こうとすると悪い癖がつく。完璧に弾けるテンポを見つけ、そこから徐々に速くする。" },
      { title: "指が痛いのは正常", body: "最初の2〜3週間は指先が痛くなる。続けるうちに「たこ」ができて痛くなくなる。" },
    ]
  },
  {
    category: "左手のコツ",
    color: "#22c55e",
    items: [
      { title: "指を立てる", body: "指を立てて押さえることで、隣の弦に触れずきれいな音が出る。爪を短く切ることも重要。" },
      { title: "フレットの近くを押さえる", body: "フレットのすぐ横（ブリッジ側）を押さえると少ない力できれいな音が出る。" },
      { title: "親指の位置", body: "親指はネック裏の中央に置く。グリップしすぎると他の指が動きにくくなる。" },
    ]
  },
  {
    category: "右手のコツ",
    color: "#3b82f6",
    items: [
      { title: "力を抜いて持つ", body: "ピックは軽く持つ。強く握ると音が硬くなり疲れやすい。" },
      { title: "手首のスナップ", body: "ストロークは腕全体を動かすのではなく、手首のスナップを使う。" },
      { title: "アップストロークも同じ音量", body: "ダウンとアップで音量が変わらないように。最初はダウンだけに集中してもOK。" },
    ]
  },
  {
    category: "よくある悩み",
    color: "#a855f7",
    items: [
      { title: "Fコードが弾けない", body: "ほぼ全員が壁にぶつかる。毎日少しずつ練習すれば1〜3ヶ月で弾けるようになる。焦らずに。" },
      { title: "コードチェンジが遅い", body: "「次のコードの形」を頭の中でイメージしながら弾くと速くなる。「先読み」の練習を。" },
      { title: "音がビビる・鳴らない", body: "指がフレットから離れすぎている可能性大。押さえる位置をフレットに近づけてみる。" },
    ]
  },
  {
    category: "モチベーション維持",
    color: "#eab308",
    items: [
      { title: "好きな曲を目標にする", body: "「この曲を弾けるようになりたい」という具体的な目標を持つと練習が楽しくなる。" },
      { title: "録音して聴いてみる", body: "自分の演奏を録音すると上達を実感しやすい。1ヶ月後に聴き比べると驚くはず。" },
      { title: "G-D-Em-Cは最強", body: "このコード進行だけでJ-POPやポップスの多くが弾ける。まずここを目指そう。" },
    ]
  },
];

export default function Tips() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {tips.map(section => (
        <div key={section.category}>
          <div style={{
            fontSize: 14,
            fontWeight: 700,
            color: section.color,
            marginBottom: 12,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <div style={{ width: 3, height: 16, background: section.color, borderRadius: 2 }} />
            {section.category}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
            {section.items.map(item => (
              <div key={item.title} style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: 16,
              }}>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6, color: "var(--text)" }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.6 }}>
                  {item.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
