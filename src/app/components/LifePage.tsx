import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import motherImg from "figma:asset/2065b1bb46eb4b658d62ee2d2d4e31075c1045cc.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

/* ─── Data ─── */
const hobbyPhotos = [
  { img: "https://cdn.imweb.me/thumbnail/20250501/b40e6a610475f.png", label: "골프 ⛳", sub: "23년차 · 뒷땅 스페셜리스트 😂" },
  { img: "https://cdn.imweb.me/thumbnail/20250501/d52bf7ff86c97.png", label: "명상 & 요가 🧘‍♀️", sub: "25년차 명상러 · 세도나, 네팔 수련" },
  { img: "https://cdn.imweb.me/thumbnail/20250501/ddc6a432294fa.png", label: "음악 & 미술 🎨", sub: "재즈부터 힙합까지 · 그림 감상" },
  { img: "https://cdn.imweb.me/thumbnail/20250501/5bf94adddc749.png", label: "맛집 탐험 🍽️", sub: "야채부터 새우깡까지 다 좋아!" },
];

const lifeBooks = [
  { title: "《싯다르타》", author: "헤르만 헤세", quote: "당신이 사랑하는 것이 당신을 만들어 간다.", emoji: "🕊️" },
  { title: "《지금 알고 있는 것을 그때도 알았더라면》", author: "류시화", quote: "내가 가장 두려워했던 일이 결국 나를 가장 성장시켰다.", emoji: "💡" },
  { title: "《아름다운 것들》", author: "이해인 수녀", quote: "사람이 사람에게 꽃이 될 수 있다면, 이 세상은 얼마나 아름다울까.", emoji: "🌸" },
  { title: "《인간관계론》", author: "데일 카네기", quote: "다른 사람에게 중요한 사람이 되어주어라.", emoji: "🤝" },
  { title: "《아몬드》", author: "손원평", quote: "감정이 없는 내가 감정을 배웠다는 것. 그것이 내가 자란 증거였다.", emoji: "🌰" },
];

const lifeMovies = [
  { title: "쉰들러 리스트", year: "1993", quote: "한 사람을 구하는 자는 세계를 구한다.", emoji: "🎬" },
  { title: "라스베가스를 떠나며", year: "1995", quote: "사랑은 때때로 구원보다 강하다.", emoji: "🎰" },
  { title: "벤자민 버튼의 시간은 거꾸로 간다", year: "2008", quote: "살기 위한 나이는 따로 없다.", emoji: "⏳" },
  { title: "가위손", year: "1990", quote: "진심은 겉모습을 넘어 전해진다.", emoji: "✂️" },
  { title: "쇼생크 탈출", year: "1994", quote: "희망은 좋은 것이다. 좋은 것은 절대 사라지지 않는다.", emoji: "🕊️" },
  { title: "페르시아어 수업", year: "2020", quote: "생존을 위해 언어를 만들어낸 사람의 이야기.", emoji: "📖" },
];

const lifeDestinations = [
  { place: "네팔 🇳🇵", desc: "사람들의 순수함이 마음을 울린 곳", detail: "히말라야 산기슭의 작은 마을에서 만난 아이들의 미소. 물질적으로는 아무것도 없었지만, 그곳에는 진짜 행복이 있었습니다.", img: "https://images.unsplash.com/photo-1511215579272-6192432f83bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMGhpbWFsYXlhJTIwbW91bnRhaW4lMjB2aWxsYWdlfGVufDF8fHx8MTc3Mjc5MzA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { place: "플로리다 🌴", desc: "바람, 바다, 그리고 여유", detail: "팜비치의 석양 아래 걷다 보면, 복잡했던 머릿속이 한없이 가벼워집니다. 바다가 주는 위안은 언제나 특별합니다.", img: "https://images.unsplash.com/photo-1645865290832-f81627455afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yaWRhJTIwYmVhY2glMjBwYWxtJTIwdHJlZXMlMjBzdW5zZXR8ZW58MXx8fHwxNzcyNzkzNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { place: "거제도 🌊", desc: "어린 시절의 향기가 남아있는 곳", detail: "바다 냄새, 할머니 집 마당의 감나무, 포구의 작은 배들. 거제도에 가면 어린 시절의 나를 다시 만날 수 있습니다.", img: "https://images.unsplash.com/photo-1758327740350-ab960ea066ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBpc2xhbmQlMjBjb2FzdCUyMHNjZW5pY3xlbnwxfHx8fDE3NzI3OTM0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { place: "프라하 🏰", desc: "시간이 멈춘 듯한 동화 같은 도시", detail: "카를교 위의 석양, 오래된 골목의 커피 향. 프라하는 걸을 때마다 새로운 이야기를 들려줍니다.", img: "https://images.unsplash.com/photo-1655760795950-9cb82352f089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGUlMjB0cmF2ZWwlMjBhcmNoaXRlY3R1cmUlMjBiZWF1dGlmdWx8ZW58MXx8fHwxNzcxOTA1MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { place: "교토 🇯🇵", desc: "고요한 아름다움의 나라", detail: "수백 년 된 절의 정원에서 단풍잎이 떨어지는 소리에 귀 기울이며, 와비사비의 아름다움을 배웁니다.", img: "https://images.unsplash.com/photo-1672110781309-7d9292d440b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRyYXZlbCUyMHRlbXBsZSUyMGF1dHVtbnxlbnwxfHx8fDE3NzE5MDUwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

const respectedPeople = [
  { name: "교황 프치스코", reason: "겸손과 섬김의 리더십, 말보다 행동으로 보여주는 사랑", emoji: "🙏" },
  { name: "달라이 라마", reason: "고통 속에서도 미소를 잃지 않는 자비의 화신", emoji: "☸️" },
  { name: "이해인 수녀", reason: "시와 기도로 세상을 따뜻하게 만드는 영혼의 작가", emoji: "✍️" },
  { name: "나의 아버지들", reason: "무덤까지 함께한, 조건 없는 사랑의 표본", emoji: "💛" },
  { name: "진심으로 살아가는 모든 이들", reason: "직위나 명예가 아닌, 진정성으로 세상을 움직이는 사람들", emoji: "🌟" },
];

const favorites = [
  { icon: "🎵", label: "음악", value: "재즈, 클래식, 힙합, R&B", bg: "from-violet-100/60 to-purple-100/60" },
  { icon: "🍽️", label: "음식", value: "야채, 회, 짱구, 새우깡", bg: "from-orange-100/60 to-amber-100/60" },
  { icon: "☕", label: "시간", value: "커피 한잔과 조용한 아침", bg: "from-yellow-100/60 to-amber-100/60" },
  { icon: "🌿", label: "공간", value: "바람이 부는 자연 속 어디든", bg: "from-green-100/60 to-emerald-100/60" },
  { icon: "💬", label: "대화", value: "깊은 생각을 나누는 진솔한 수다", bg: "from-blue-100/60 to-cyan-100/60" },
  { icon: "📖", label: "독서", value: "잠들기 전 한 페이지의 여유", bg: "from-rose-100/60 to-pink-100/60" },
];

const dailyRoutine = ["🧘 아침 명상", "☕ 커피 타임", "💻 몰입 시간", "🎵 산책", "📖 독서", "📱 안부 전화", "💬 수다"];

const lifeSections = [
  { id: "education", label: "전공·자격" },
  { id: "philosophy", label: "인생 철학" },
  { id: "hobbies", label: "취미·관심사" },
  { id: "favorites", label: "좋아하는 것들" },
  { id: "lifestory", label: "삶의 이야기" },
  { id: "lifeelements", label: "삶을 이루는 것들" },
  { id: "reflections", label: "사색의 조각들" },
];

const lifeStoryItems = [
  { label: "터닝포인트", value: "삶의 방향을 바꾼 순간들이 있었어요. 그때마다 '행복'과 '나의 강점'이 나침반이 되었습니다.", icon: "🔄", gradient: "from-blue-100/60 to-indigo-100/60" },
  { label: "영감을 주는 것들", value: "깊은 생각을 나누는 사람, 추천받은 좋은 책, 그리고 산책 중의 깨달음들.", icon: "✨", gradient: "from-yellow-100/60 to-amber-100/60" },
  { label: "자연이란", value: "힐링이고, 위로이고, 격려이며 행복입니다.", icon: "🌿", gradient: "from-green-100/60 to-emerald-100/60" },
  { label: "내 멘토들", value: "나를 진심으로 사랑해주는 사람들.", icon: "💜", gradient: "from-purple-100/60 to-pink-100/60" },
];

export default function LifePage() {
  return (
    <div>
      {/* Hero — Cinematic */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1622393346904-7c75877bc914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBvY2VhbiUyMHdhdmVzJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcyNzkxNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Life hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[700px]">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-xl rounded-full mb-5 border border-white/15">
              <span>🌿</span>
              <span className="text-white/80" style={{ fontSize: "0.82rem" }}>Life Journey</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Cormorant_Garamond','Noto_Serif_KR',serif]" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1.2 }}>
              타이틀 뒤에 숨겨진<br /><span className="bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B] bg-clip-text text-transparent">'사람'</span> 💛
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Section Link Bar */}
      <div className="sticky top-[68px] z-40 bg-white/90 backdrop-blur-xl border-b border-[#f0ebe3]/50 shadow-sm">
        <div className="max-w-[1100px] mx-auto px-6 py-3">
          <div className="flex gap-1.5 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {lifeSections.map(sec => (
              <button
                key={sec.id}
                onClick={() => document.getElementById(`section-${sec.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="shrink-0 px-4 py-2 rounded-full transition-all cursor-pointer bg-[#faf7f2] text-[#888] hover:bg-[#f0ebe3] hover:text-[#555]"
                style={{ fontSize: "0.82rem", fontWeight: 500 }}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <section id="section-education" className="py-14 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[900px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-8">
              <span className="inline-block mb-3" style={{ fontSize: "2rem" }}>🎓</span>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "1.8rem", fontWeight: 600 }}>전공 & 자격</h2>
            </motion.div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { t: "경영학 학사", s: "학부 전공", e: "📊", g: "from-blue-50 to-indigo-50" },
                { t: "Brain Education 석사", s: "대학원 전공", e: "🧠", g: "from-purple-50 to-pink-50" },
                { t: "TESOL 자격증", s: "영어교사 자격", e: "📝", g: "from-green-50 to-teal-50" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -4, scale: 1.02 }} className={`p-5 bg-gradient-to-br ${item.g} rounded-3xl border border-white/60 text-center`}>
                  <span className="inline-block mb-2" style={{ fontSize: "1.8rem" }}>{item.e}</span>
                  <p className="text-[#2a2a2a]" style={{ fontSize: "1rem", fontWeight: 600 }}>{item.t}</p>
                  <p className="text-[#aaa] mt-1" style={{ fontSize: "0.78rem" }}>{item.s}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy — Glass card */}
      <section id="section-philosophy" className="py-12 px-6 lg:px-12 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden scroll-mt-[130px]">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD93D]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF6B6B]/8 rounded-full blur-[100px]" />
        <div className="max-w-[600px] mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="inline-block mb-3" style={{ fontSize: "2.5rem" }}>🎯</span>
              <h3 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] mb-4" style={{ fontSize: "1.5rem", fontWeight: 600 }}>인생의 철학</h3>
              <div className="p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
                <p className="text-white/80" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                  가장 중요한 것:<br />
                  <span className="bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B] bg-clip-text text-transparent" style={{ fontWeight: 600 }}>소중한 사람들과 소중한 순간에 집중하는 것</span> ✨
                </p>
                <div className="w-12 h-[1px] bg-white/10 mx-auto my-4" />
                <p className="italic text-white/40" style={{ fontSize: "0.92rem" }}>"내일이 없다고 생각하고, 매순간 최선을 다하자." 🔥</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ Hobbies — 4-column photo grid ═══ */}
      <section id="section-hobbies" className="py-16 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="inline-block mb-3" style={{ fontSize: "2rem" }}>🎯</span>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "1.8rem", fontWeight: 600 }}>나의 취미와 관심사</h2>
              <p className="text-[#bbb] mt-2" style={{ fontSize: "0.88rem" }}>삶을 지탱하는 아름다운 것들 🌸</p>
            </motion.div>
            
            {/* 4-column photo cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hobbyPhotos.map((p, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -6, scale: 1.02 }} className="relative rounded-3xl overflow-hidden group cursor-pointer aspect-[3/4] shadow-lg">
                  <ImageWithFallback src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white mb-1" style={{ fontSize: "1.1rem", fontWeight: 600 }}>{p.label}</p>
                    <p className="text-white/60" style={{ fontSize: "0.78rem" }}>{p.sub}</p>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#c9a96e]/20 to-transparent" />
                </motion.div>
              ))}
            </div>

            {/* Hobby tags — pill style */}
            <motion.div variants={fadeUp} className="mt-6 space-y-4">
              <div className="flex flex-wrap justify-center gap-2">
                {["🦶 등산", "🚴 자전거", "🎶 음악", "🎨 그림", "🎤 노래", "💬 수다", "🍜 맛집", "🚶 산책", "✈️ 여행"].map((tag, idx) => (
                  <motion.span key={idx} whileHover={{ scale: 1.1, y: -2 }} className="px-4 py-2 bg-white rounded-full border border-[#f0ebe3] text-[#555] shadow-sm hover:shadow-md hover:border-[#c9a96e]/40 transition-all cursor-default" style={{ fontSize: "0.88rem" }}>
                    {tag}
                  </motion.span>
                ))}
              </div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative p-8 rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#1a1a2e]" />
                <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#FFD93D]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-[#FF6B6B]/10 rounded-full blur-[80px]" />
                <div className="relative z-10 text-center">
                  <p className="bg-gradient-to-r from-[#FFD93D] via-[#FF6B6B] to-[#FFD93D] bg-clip-text text-transparent font-['Cormorant_Garamond','Noto_Serif_KR',serif]" style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 700, lineHeight: 1.8 }}>
                    "할 줄 아는 건 많은데,<br />잘하는 건 기대금지 😄"
                  </p>
                  <p className="text-white/70 mt-3 font-['Cormorant_Garamond','Noto_Serif_KR',serif]" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                    그러나 늘 웃어요~ 💛
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 좋아하는 것들 — Cozy daily vibe ═══ */}
      <section id="section-favorites" className="py-14 px-6 lg:px-12 bg-gradient-to-br from-[#faf7f2] to-[#f5efe6] scroll-mt-[130px]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-8">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "1.6rem", fontWeight: 600 }}>💖 내가 좋아하는 것들</h2>
              <p className="text-[#bbb] mt-2" style={{ fontSize: "0.85rem" }}>소소하지만 확실한 행복들 ☀️</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {favorites.map((fav, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -3 }} className={`bg-gradient-to-br ${fav.bg} backdrop-blur-sm rounded-3xl p-5 border border-white/40`}>
                  <span className="inline-block mb-2" style={{ fontSize: "1.5rem" }}>{fav.icon}</span>
                  <p className="text-[#2a2a2a]" style={{ fontSize: "0.92rem", fontWeight: 600 }}>좋아하는 {fav.label}</p>
                  <p className="text-[#888] mt-1" style={{ fontSize: "0.82rem" }}>{fav.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 삶의 이야기 — Photo + Cards, cozy layout ═══ */}
      <section id="section-lifestory" className="py-16 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "1.8rem", fontWeight: 600 }}>🌈 삶의 이야기</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <motion.div variants={fadeUp}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img src={motherImg} alt="소중한 사람" className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <p className="absolute bottom-4 left-5 text-white" style={{ fontSize: "0.88rem", fontWeight: 600 }}>💛 소중한 사람과 함께한 시간</p>
                </div>
              </motion.div>
              <div className="space-y-4">
                {lifeStoryItems.map((item, i) => (
                  <motion.div key={i} variants={fadeUp} whileHover={{ x: 4 }} className={`bg-gradient-to-r ${item.gradient} backdrop-blur-sm rounded-3xl p-5 border border-white/40`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                      <p className="text-[#2a2a2a]" style={{ fontSize: "1rem", fontWeight: 600 }}>{item.label}</p>
                    </div>
                    <p className="text-[#666]" style={{ fontSize: "0.88rem", lineHeight: 1.6 }}>{item.value}</p>
                  </motion.div>
                ))}
                {/* Routine — below mentors */}
                <motion.div variants={fadeUp} className="p-5 bg-[#faf7f2] rounded-3xl border border-[#f0ebe3]">
                  <p className="text-[#2a2a2a] mb-3" style={{ fontSize: "0.95rem", fontWeight: 600 }}>🧘‍♀️ 나의 루틴, 나의 하루</p>
                  <div className="flex flex-wrap gap-2">
                    {dailyRoutine.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-white border border-[#f0ebe3] text-[#555]" style={{ fontSize: "0.78rem" }}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 나의 삶을 이루는 것들 — EXPANDED ═══ */}
      <section id="section-lifeelements" className="py-16 px-6 lg:px-12 bg-gradient-to-br from-[#faf7f2] to-[#f5efe6] scroll-mt-[130px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "1.8rem", fontWeight: 600 }}>
                나의 삶을 이루는 것들 ✨
              </h2>
              <p className="text-[#bbb] mt-2" style={{ fontSize: "0.88rem" }}>나를 만들어 온 책, 영화, 여행, 그리고 사람들</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 인생책 */}
              <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 border border-[#f0ebe3] shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center" style={{ fontSize: "1.2rem" }}>📚</span>
                  <h3 className="text-[#2a2a2a]" style={{ fontSize: "1.15rem", fontWeight: 600 }}>인생책</h3>
                </div>
                <div className="space-y-4">
                  {lifeBooks.map((book, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="shrink-0 mt-0.5" style={{ fontSize: "1.1rem" }}>{book.emoji}</span>
                      <div>
                        <p className="text-[#2a2a2a]" style={{ fontSize: "0.88rem", fontWeight: 600 }}>{book.title}</p>
                        <p className="text-[#bbb]" style={{ fontSize: "0.75rem" }}>{book.author}</p>
                        <p className="text-[#888] italic mt-0.5" style={{ fontSize: "0.78rem" }}>{`"${book.quote}"`}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 인생 영화 — EXPANDED */}
              <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 border border-[#f0ebe3] shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center" style={{ fontSize: "1.2rem" }}>🎬</span>
                  <h3 className="text-[#2a2a2a]" style={{ fontSize: "1.15rem", fontWeight: 600 }}>인생 영화</h3>
                </div>
                <div className="space-y-4">
                  {lifeMovies.map((m, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="shrink-0 mt-0.5" style={{ fontSize: "1.1rem" }}>{m.emoji}</span>
                      <div>
                        <p className="text-[#2a2a2a]" style={{ fontSize: "0.88rem", fontWeight: 600 }}>{m.title} <span className="text-[#ccc]">({m.year})</span></p>
                        <p className="text-[#888] italic mt-0.5" style={{ fontSize: "0.78rem" }}>{`"${m.quote}"`}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 여행지 — EXPANDED with photos */}
              <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 border border-[#f0ebe3] shadow-sm md:col-span-2">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center" style={{ fontSize: "1.2rem" }}>✈️</span>
                  <h3 className="text-[#2a2a2a]" style={{ fontSize: "1.15rem", fontWeight: 600 }}>여행지</h3>
                </div>
                <div className="grid md:grid-cols-5 gap-4">
                  {lifeDestinations.map((dest, i) => (
                    <motion.div key={i} whileHover={{ y: -4 }} className="group">
                      <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-3">
                        <ImageWithFallback src={dest.img} alt={dest.place} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <p className="absolute bottom-3 left-3 text-white" style={{ fontSize: "0.9rem", fontWeight: 600 }}>{dest.place}</p>
                      </div>
                      <p className="text-[#2a2a2a]" style={{ fontSize: "0.82rem", fontWeight: 600 }}>{dest.desc}</p>
                      <p className="text-[#999] mt-1" style={{ fontSize: "0.75rem", lineHeight: 1.5 }}>{dest.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* 존경하는 사람들 — EXPANDED */}
              <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 border border-[#f0ebe3] shadow-sm md:col-span-2">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center" style={{ fontSize: "1.2rem" }}>🙏</span>
                  <h3 className="text-[#2a2a2a]" style={{ fontSize: "1.15rem", fontWeight: 600 }}>존경하는 사람들</h3>
                </div>
                <div className="grid md:grid-cols-5 gap-4">
                  {respectedPeople.map((p, i) => (
                    <motion.div key={i} whileHover={{ y: -3 }} className="p-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl border border-white/60">
                      <span className="inline-block mb-2" style={{ fontSize: "1.5rem" }}>{p.emoji}</span>
                      <p className="text-[#2a2a2a]" style={{ fontSize: "0.88rem", fontWeight: 600 }}>{p.name}</p>
                      <p className="text-[#999] mt-1" style={{ fontSize: "0.75rem", lineHeight: 1.5 }}>{p.reason}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 사색의 조각들 — Compact ═══ */}
      <section id="section-reflections" className="relative py-12 px-6 lg:px-12 overflow-hidden scroll-mt-[130px]">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1727944679843-f378b1bc6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFycnklMjBuaWdodCUyMHNreSUyMGRyZWFteXxlbnwxfHx8fDE3NzI3OTM0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Starry sky" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-[1000px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-8">
              <span className="inline-block mb-2" style={{ fontSize: "1.5rem" }}>✍️</span>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 600 }}>
                사색의 조각들 💭
              </h2>
            </motion.div>

            {/* 3 quotes in a row */}
            <div className="grid md:grid-cols-3 gap-3 mb-3">
              {[
                { quote: "겨울 나무는 꽃이 없어도\n참 아름답다.", emoji: "🌳" },
                { quote: "사람은 때로 일을 멈추고\n바람처럼, 음악처럼,\n하늘처럼 존재해야 한다.", emoji: "🍃" },
                { quote: "진짜 나를 만난 순간은,\n유용함이 아닌\n'무용한 시간들' 속에서였다.", emoji: "✨" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 text-center">
                  <span className="inline-block mb-2" style={{ fontSize: "1.2rem" }}>{item.emoji}</span>
                  <p className="text-white/75 font-['Cormorant_Garamond','Noto_Serif_KR',serif] italic whitespace-pre-line" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                    "{item.quote}"
                  </p>
                </motion.div>
              ))}
            </div>

            {/* 4th item — single row */}
            <motion.div variants={fadeUp} className="p-5 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15 text-center">
              <p className="text-white/50 leading-relaxed" style={{ fontSize: "0.88rem" }}>
                나는 26년 동안 사업을 하며 숫자와 씨름했지만, 사실 나는 무용한 것들을 더 사랑합니다. 💛
                <span className="text-white/30 mx-2">·</span>
                하늘, 바람, 별, 구름, 휘파람 소리, 웃음소리, 책 냄새, 아이의 미소... ☁️🌟
              </p>
              <p className="text-[#FFD93D]/50 italic font-['Cormorant_Garamond','Noto_Serif_KR',serif] mt-3" style={{ fontSize: "0.82rem" }}>
                – Jinny Park 🌸
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}