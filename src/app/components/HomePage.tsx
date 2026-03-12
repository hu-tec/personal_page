import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronRight, Sparkles, Heart, ArrowDown } from "lucide-react";
import { NavLink } from "react-router";
import MediaGallery from "./MediaGallery";
import colleaguesImg from "figma:asset/f9631c2e7bf230d64eff82200903e629cb41b41a.png";
import marathonImg from "figma:asset/0f8453795dd662ffd4ff94633072636e34293459.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const brandKeywords = [
  { letter: "J", word: "Joy", desc: "사람에게 기쁨을 주는 사람", color: "#FF6B6B" },
  { letter: "I", word: "Integrity", desc: "진심과 정직을 지키는 사람", color: "#4ECDC4" },
  { letter: "N", word: "Nurture", desc: "사람을 키우는 사람", color: "#FFD93D" },
  { letter: "N", word: "Nobility", desc: "품격 있는 행동을 실천하는 사람", color: "#6C5CE7" },
  { letter: "Y", word: "Yield", desc: "결과를 만들어내는 실천가", color: "#FF8A5B" },
];

const coreKeywords = [
  { emoji: "🔥", title: "행동파 사업가", desc: "빠른 실행과 현실 중심의 전략가", gradient: "from-orange-50 to-red-50" },
  { emoji: "💛", title: "따뜻한 엄마", desc: "두 딸의 성장을 함께하는 동반자", gradient: "from-yellow-50 to-amber-50" },
  { emoji: "🌍", title: "국제적 마인드", desc: "한국·미국·캐나다·유럽을 넘나든 글로벌 경영 감각", gradient: "from-blue-50 to-cyan-50" },
  { emoji: "🧘‍♀️", title: "자연과 명상", desc: "자연과 함께 20년 명상으로 내면을 다스리는 지혜", gradient: "from-green-50 to-emerald-50" },
  { emoji: "🤝", title: "함께할 때 강한 리더", desc: "협업에 강하고 시너지를 만드는 사람", gradient: "from-purple-50 to-pink-50" },
];

const stats = [
  { num: "27", suffix: "년", label: "업계 경력" },
  { num: "20", suffix: "년", label: "언어·교육" },
  { num: "7", suffix: "년", label: "AI 기술" },
  { num: "30", suffix: "만+", label: "ITT 응시자" },
];

const homeSections = [
  { id: "about", label: "나는 누구?" },
  { id: "media", label: "미디어" },
  { id: "core", label: "핵심 키워드" },
  { id: "philosophy", label: "철학" },
  { id: "mystory", label: "사람 이야기" },
  { id: "hobbies", label: "취미·여행" },
  { id: "vision", label: "비전" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://cdn.imweb.me/thumbnail/20250501/11d2ca7b37296.png"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 pt-24 pb-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[800px]">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-xl rounded-full mb-6 border border-white/15">
              <Sparkles size={14} className="text-[#FFD93D]" />
              <span style={{ fontSize: "0.82rem" }} className="text-white/80">Personal Branding</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, lineHeight: 1.2 }}>
              완성된 전문성,<br /><span className="bg-gradient-to-r from-[#FFD93D] via-[#FF6B6B] to-[#FFD93D] bg-clip-text text-transparent">세상을 위한 가치로</span> ✨
            </motion.h1>
            <motion.div variants={fadeUp} className="space-y-2 text-white/75" style={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", lineHeight: 1.8 }}>
              <p>27년 중 20년 언어와 교육, 7년 AI 기술 분야에서 제시하는 명확한 방향</p>
              <p>깊은 사색과 폭넓은 경험으로 빚어낸 삶의 원숙함과 따뜻한 통찰 💛</p>
            </motion.div>

            {/* Stats — overlaid on hero */}
            <motion.div variants={fadeUp} className="mt-10 max-w-[700px] mx-auto">
              <div className="grid grid-cols-4 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 py-5 px-3">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={`text-center ${i < stats.length - 1 ? "border-r border-white/15" : ""}`}
                  >
                    <p className="font-['Cormorant_Garamond',serif] text-[#c9a96e]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, lineHeight: 1.1 }}>
                      {s.num}<span style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}>{s.suffix}</span>
                    </p>
                    <p className="text-white/50 mt-1" style={{ fontSize: "clamp(0.65rem, 1vw, 0.78rem)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
            <ArrowDown size={20} className="text-white/50" />
          </motion.div>
        </div>
      </section>

      {/* Section Link Bar */}
      <div className="sticky top-[68px] z-40 bg-white/90 backdrop-blur-xl border-b border-[#f0ebe3]/50 shadow-sm">
        <div className="max-w-[1100px] mx-auto px-6 py-3">
          <div className="flex gap-1.5 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {homeSections.map(sec => (
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

      {/* ===== 1. About — Trendy layout ===== */}
      <section id="section-about" className="py-16 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <motion.div variants={fadeUp} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
                  <ImageWithFallback
                    src="https://cdn.imweb.me/thumbnail/20250501/11d2ca7b37296.png"
                    alt="Jinny Park"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-20">
                    <p className="text-white/90 font-['Cormorant_Garamond','Noto_Serif_KR',serif] italic text-center" style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)", fontWeight: 600, lineHeight: 1.6 }}>
                      "혼자서는 게으르지만,<br />함께할 땐 기적을 만드는 사람" ✨
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-4 right-4 flex justify-between gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-[#c9a96e] to-[#e0c68a] text-white px-5 py-2.5 rounded-2xl shadow-lg" style={{ fontSize: "0.85rem" }}>
                    <span style={{ fontWeight: 600 }}>🎂 1월 16일생 · ESFP · O형</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-[#2a2a2a] text-white px-5 py-2.5 rounded-2xl shadow-lg" style={{ fontSize: "0.85rem" }}>
                    <span className="font-['Cormorant_Garamond',serif] italic" style={{ fontWeight: 600 }}>Since 1999 🚀</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5efe6] rounded-full mb-4">
                  <span style={{ fontSize: "0.8rem" }}>👋</span>
                  <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>WHO AM I?</span>
                </div>
                <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a] mb-6" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 600, lineHeight: 1.3 }}>
                  나, 어떤 사람인가요?
                </h2>
                <div className="space-y-3">
                  {brandKeywords.map((kw, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-[#f0ebe3] hover:shadow-md transition-shadow"
                    >
                      <span
                        className="font-['Cormorant_Garamond',serif] w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
                        style={{ fontSize: "1.3rem", fontWeight: 700, backgroundColor: kw.color }}
                      >
                        {kw.letter}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="text-[#2a2a2a]" style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                          {kw.word}
                        </span>
                        <span className="text-[#aaa] mx-2">—</span>
                        <span className="text-[#888]" style={{ fontSize: "0.88rem" }}>{kw.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== 2. Media ===== */}
      <div id="section-media" className="scroll-mt-[130px]">
        <MediaGallery />
      </div>

      {/* ===== 3. Core Keywords — Bento Grid ===== */}
      <section id="section-core" className="py-16 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5efe6] rounded-full mb-4">
                <span style={{ fontSize: "0.8rem" }}>💡</span>
                <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>CORE VALUES</span>
              </div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600 }}>
                나를 설명하는 핵심 키워드 5가지
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {coreKeywords.map((kw, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`p-5 rounded-2xl bg-gradient-to-br ${kw.gradient} border border-white/80 hover:shadow-lg transition-all text-center`}
                >
                  <span className="inline-block mb-3" style={{ fontSize: "2.2rem" }}>{kw.emoji}</span>
                  <p className="text-[#2a2a2a] mb-1.5" style={{ fontSize: "1rem", fontWeight: 600 }}>{kw.title}</p>
                  <p className="text-[#999]" style={{ fontSize: "0.82rem", lineHeight: 1.5 }}>{kw.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-10">
              <div className="max-w-[650px] mx-auto text-center">
                <div className="bg-gradient-to-r from-[#faf7f2] via-white to-[#faf7f2] rounded-2xl p-6 border border-[#f0ebe3]">
                  <p className="text-[#c9a96e] mb-2" style={{ fontSize: "0.82rem" }}>✨ 나를 한 줄로 말한다면?</p>
                  <p className="text-[#2a2a2a] font-['Cormorant_Garamond','Noto_Serif_KR',serif]" style={{ fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.6 }}>
                    "함께할 때 가장 빛나는, 사람 속에 있고 싶은 글로벌 창업가" 🌟
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 4. Philosophy ===== */}
      <section id="section-philosophy" className="py-16 px-6 lg:px-12 bg-gradient-to-br from-[#faf7f2] to-[#f0ebe3] scroll-mt-[130px]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden group">
                <img src={colleaguesImg} alt="함께하는 사람들" className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white flex items-center gap-2" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  <Heart size={14} className="text-pink-300" />
                  함께하는 사람들과의 소중한 시간
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/80 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5efe6] rounded-full mb-4">
                  <span style={{ fontSize: "0.8rem" }}>💭</span>
                  <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>PHILOSOPHY</span>
                </div>
                <p className="text-[#2a2a2a] mb-4 leading-relaxed" style={{ fontSize: "1.1rem", fontWeight: 500, lineHeight: 1.7 }}>
                  "교육과 기술은 수단일 뿐,<br />진짜 만들고 싶은 건 진심이 흐르는<br />'사람과 함께하는 것'입니다." 💛
                </p>
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#c9a96e] to-transparent mb-4" />
                <p className="text-[#aaa] italic" style={{ fontSize: "0.9rem" }}>– Jinny Park</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 5. Personal Story ===== */}
      <section id="section-mystory" className="py-16 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5efe6] rounded-full mb-4">
                <span style={{ fontSize: "0.8rem" }}>📖</span>
                <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>MY STORY</span>
              </div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600 }}>
                Jinny의 사람 이야기
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 md:gap-10">
              <div className="space-y-6 font-['Noto_Serif_KR',serif]">
                <div className="bg-white rounded-2xl p-6 border border-[#f0ebe3] shadow-sm">
                  <p className="text-[#555] leading-[2]" style={{ fontSize: "0.95rem" }}>
                    한때는 벤틸리를 몰랐어요. 🚗<br />
                    그게 멋지고 성공적인 인생의 증표인 줄 알았죠.<br />
                    손목엔 스위스 시계, 어깨엔 헤르메스.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-[#f0ebe3] shadow-sm">
                  <p className="text-[#555] leading-[2]" style={{ fontSize: "0.95rem" }}>
                    그런데 이상하죠. 🤔<br />
                    하루가 끝나고 그 멋진 차를 혼자 타고 돌아오는 길엔<br />
                    문득, 마음 한구석이 뻑 뚫린 듯했어요.
                  </p>
                </div>
              </div>
              <div className="space-y-6 font-['Noto_Serif_KR',serif]">
                <div className="bg-white rounded-2xl p-6 border border-[#f0ebe3] shadow-sm">
                  <p className="text-[#555] leading-[2]" style={{ fontSize: "0.95rem" }}>
                    그러다 네팔에서 작은 봉사활동을 하게 됐습니다. 🇳🇵<br />
                    색연필 한 자루를 건넸을 뿐인데,<br />
                    아이 하나가 제 손을 꼭 잡으며 말했어요.
                  </p>
                  <p className="text-[#c9a96e] font-['Cormorant_Garamond','Noto_Serif_KR',serif] italic mt-4" style={{ fontSize: "1.15rem", fontWeight: 600 }}>
                    "언니 다시 오실 거죠?" 🥺
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#faf7f2] to-[#f5efe6] rounded-2xl p-6 border border-[#e8e0d4]">
                  <p className="text-[#555] leading-[2]" style={{ fontSize: "0.95rem" }}>
                    그날 이후 저는 깨달았습니다. 💡<br />
                    진짜 삶의 본질은 거창한 성취가 아니라,<br />
                    누군가에게 따뜻한 존재로 남는 것. 💛
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 p-5 bg-gradient-to-r from-[#faf7f2] via-white to-[#faf7f2] rounded-2xl border border-[#f0ebe3] text-center">
              <p className="text-[#888] italic" style={{ fontSize: "1rem" }}>
                "행복은 소유에서 오지 않는다. 느끼는 데서 온다." 🌸
              </p>
              <p className="text-[#ccc] mt-2" style={{ fontSize: "0.82rem" }}>– 탈 벤 샤하르</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 6. Hobbies ===== */}
      <section id="section-hobbies" className="py-14 px-6 lg:px-12 bg-gradient-to-br from-[#faf7f2] to-[#f5efe6] scroll-mt-[130px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full mb-4 border border-[#f0ebe3]">
                <span style={{ fontSize: "0.8rem" }}>🎯</span>
                <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>HOBBIES & TRAVEL</span>
              </div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600 }}>
                나의 취미와 여행 🌏
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { img: "https://cdn.imweb.me/thumbnail/20250428/5c9e5f76ff456.jpg", label: "여행 ✈️" },
                { img: "https://cdn.imweb.me/thumbnail/20250428/d3cef64b5eb28.jpg", label: "명상 🧘‍♀️" },
                { img: "https://cdn.imweb.me/thumbnail/20250428/ec394b609d4a5.jpg", label: "테니스 🎾" },
                { img: "https://cdn.imweb.me/thumbnail/20250428/8bb2223a6a453.jpg", label: "골프 ⛳" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -4 }} className="relative group overflow-hidden rounded-2xl shadow-sm">
                  <ImageWithFallback src={item.img} alt={item.label} className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white" style={{ fontSize: "1rem", fontWeight: 600 }}>{item.label}</span>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-4 relative rounded-2xl overflow-hidden group shadow-sm">
              <img src={marathonImg} alt="국제평화 마라톤대회" className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white" style={{ fontSize: "1rem", fontWeight: 600 }}>🏃‍♀️ 국제평화 마라톤대회</p>
                <p className="text-white/60" style={{ fontSize: "0.8rem" }}>함께 뛰고, 함께 웃는 순간들</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 7. Vision — Photo-based CTA with impact ===== */}
      <section id="section-vision" className="relative overflow-hidden scroll-mt-[130px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://cdn.imweb.me/thumbnail/20250501/11d2ca7b37296.png"
            alt="Jinny Park Vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/30" />
        </div>
        <div className="relative z-10 py-24 px-6 lg:px-12">
          <div className="max-w-[900px] mx-auto text-center text-white">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-xl rounded-full mb-6 border border-white/15">
                <span style={{ fontSize: "0.82rem" }} className="text-[#FFD93D]">🌟</span>
                <span style={{ fontSize: "0.82rem" }} className="text-white/80">MY VISION</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, lineHeight: 1.3 }}>
                1,000명의 전문가와 함께
              </motion.h2>
              <motion.h2 variants={fadeUp} className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] mb-8" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, lineHeight: 1.3 }}>
                <span className="bg-gradient-to-r from-[#FFD93D] via-[#FF6B6B] to-[#FFD93D] bg-clip-text text-transparent">세상을 바꾸는 여정</span> ✨
              </motion.h2>
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 flex-wrap mb-8">
                {["행동으로 🔥", "돈으로 💰", "마음으로 💛"].map((word, i) => (
                  <span key={i} className="px-5 py-2.5 bg-white/8 backdrop-blur-xl border border-white/15 rounded-full text-white/90" style={{ fontSize: "0.9rem", fontWeight: 500 }}>{word}</span>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} className="text-white/50 leading-relaxed mb-10 max-w-[500px] mx-auto" style={{ fontSize: "0.95rem" }}>
                국제행사 지원 · 네팔 · 캄보디아 해외 교육 봉사<br />
                노블레스 오블리주를 실천하는 사람들과 함께. 💛
              </motion.p>
              <motion.div variants={fadeUp}>
                <NavLink
                  to="/future"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a96e] to-[#e0c68a] hover:from-[#b8976a] hover:to-[#d4b896] text-white px-8 py-3.5 rounded-full transition-all shadow-lg shadow-[#c9a96e]/25 hover:shadow-xl hover:shadow-[#c9a96e]/30"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  나아갈 길 더보기
                  <ChevronRight size={20} />
                </NavLink>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}