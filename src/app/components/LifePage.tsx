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
  { img: "https://images.unsplash.com/photo-1759736762971-09c931424d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBsYXlpbmclMjB0ZW5uaXMlMjBvdXRkb29yJTIwY291cnR8ZW58MXx8fHwxNzczNjQwMTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "테니스", sub: "35년차 · 1990년부터" },
  { img: "https://images.unsplash.com/photo-1758274539654-23fa349cc090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1b21hbiUyMG1lZGl0YXRpbmclMjBwZWFjZWZ1bCUyMG5hdHVyZXxlbnwxfHx8fDE3NzM2NDAxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "명상", sub: "28년차 · 1999년부터" },
  { img: "https://images.unsplash.com/photo-1633210155517-df87bd0883d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbiUyMHN1bW1pdCUyMHNjZW5pY3xlbnwxfHx8fDE3NzM2NDAxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "등산", sub: "26년차 · 2001년부터" },
  { img: "https://images.unsplash.com/photo-1771612508429-9990b65adada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBsYXlpbmclMjBnb2xmJTIwZ3JlZW4lMjBmaWVsZHxlbnwxfHx8fDE3NzM2NDAxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "골프", sub: "23년차 · 2002년부터" },
  { img: "https://images.unsplash.com/photo-1616569925882-18e6a431bba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2luZyUyMHlvZ2ElMjBzdW5zZXQlMjBiZWFjaHxlbnwxfHx8fDE3NzM2NDAxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "요가", sub: "15년차 · 2012년부터" },
];

const lifeBooks = [
  { title: "《싯다르타》", author: "헤르만 헤세", quote: "당신이 사랑하는 것이 당신을 만들어 간다." },
  { title: "《지금 알고 있는 것을 그때도 알았더라면》", author: "류시화", quote: "내가 가장 두려워했던 일이 결국 나를 가장 성장시켰다." },
  { title: "《아름다운 것들》", author: "이해인 수녀", quote: "사람이 사람에게 꽃이 될 수 있다면, 이 세상은 얼마나 아름다울까." },
  { title: "《인간관계론》", author: "데일 카네기", quote: "다른 사람에게 중요한 사람이 되어주어라." },
  { title: "《아몬드》", author: "손원평", quote: "감정이 없는 내가 감정을 배웠다는 것. 그것이 내가 자란 증거였다." },
];

const lifeMovies = [
  { title: "쉰들러 리스트", year: "1993", quote: "한 사람을 구하는 자는 세계를 구한다." },
  { title: "라스베가스를 떠나며", year: "1995", quote: "사랑은 때때로 구원보다 강하다." },
  { title: "벤자민 버튼의 시간은 거꾸로 간다", year: "2008", quote: "살기 위한 나이는 따로 없다." },
  { title: "가위손", year: "1990", quote: "진심은 겉모습을 넘어 전해진다." },
  { title: "쇼생크 탈출", year: "1994", quote: "희망은 좋은 것이다. 좋은 것은 절대 사라지지 않는다." },
  { title: "페르시아어 수업", year: "2020", quote: "생존을 위해 언어를 만들어낸 사람의 이야기." },
];

const lifeDestinations = [
  { place: "네팔", desc: "사람들의 순수함이 마음을 울린 곳", detail: "히말라야 산기슭의 작은 마을에서 만난 아이들의 미소. 물질적으로는 아무것도 없었지만, 그곳에는 진짜 행복이 있었습니다.", img: "https://images.unsplash.com/photo-1511215579272-6192432f83bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXBhbCUyMGhpbWFsYXlhJTIwbW91bnRhaW4lMjB2aWxsYWdlfGVufDF8fHx8MTc3Mjc5MzA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { place: "거제도", desc: "어린 시절의 향기가 남아있는 곳", detail: "바다 냄새, 할머니 집 마당의 감나무, 포구의 작은 배들. 거제도에 가면 어린 시절의 나를 다시 만날 수 있습니다.", img: "https://images.unsplash.com/photo-1758327740350-ab960ea066ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBpc2xhbmQlMjBjb2FzdCUyMHNjZW5pY3xlbnwxfHx8fDE3NzI3OTM0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { place: "플로리다", desc: "바람, 바다, 그리고 여유", detail: "팜비치의 석양 아래 걷다 보면, 복잡했던 머릿속이 한없이 가벼워집니다. 바다가 주는 위안은 언제나 특별합니다.", img: "https://images.unsplash.com/photo-1645865290832-f81627455afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yaWRhJTIwYmVhY2glMjBwYWxtJTIwdHJlZXMlMjBzdW5zZXR8ZW58MXx8fHwxNzcyNzkzNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

const respectedPeople = [
  { name: "교황 프란치스코", reason: "겸손과 섬김의 리더십, 말보다 행동으로 보여주는 사랑" },
  { name: "달라이 라마", reason: "고통 속에서도 미소를 잃지 않는 자비의 화신" },
  { name: "이해인 수녀", reason: "시와 기도로 세상을 따뜻하게 만드는 영혼의 작가" },
  { name: "나의 아버지들", reason: "무덤까지 함께한, 조건 없는 사랑의 표본" },
  { name: "진심으로 살아가는 모든 이들", reason: "직위나 명예가 아닌, 진정성으로 세상을 움직이는 사람들" },
];

const favorites = [
  { label: "음악", value: "재즈, 클래식, 힙합, R&B" },
  { label: "음식", value: "야채, 회, 짱구, 새우깡" },
  { label: "시간", value: "커피 한잔과 조용한 아침" },
  { label: "공간", value: "바람이 부는 자연 속 어디든" },
  { label: "대화", value: "깊은 생각을 나누는 진솔한 수다" },
  { label: "독서", value: "잠들기 전 한 페이지의 여유" },
];

const dailyRoutine = ["아침 명상", "커피 타임", "몰입 시간", "산책", "독서", "안부 전화", "수다"];

const lifeSections = [
  { id: "education", label: "EDUCATION" },
  { id: "philosophy", label: "PHILOSOPHY" },
  { id: "hobbies", label: "HOBBIES" },
  { id: "favorites", label: "FAVORITES" },
  { id: "lifestory", label: "STORY" },
  { id: "lifeelements", label: "ELEMENTS" },
  { id: "reflections", label: "REFLECTIONS" },
];

const lifeStoryItems = [
  { label: "터닝포인트", value: "삶의 방향을 바꾼 순간들이 있었어요. 그때마다 '행복'과 '나의 강점'이 나침반이 되었습니다.", gradient: "from-white/10 to-white/0" },
  { label: "영감을 주는 것들", value: "깊은 생각을 나누는 사람, 추천받은 좋은 책, 그리고 산 중의 깨달음들.", gradient: "from-white/10 to-white/0" },
  { label: "자연이란", value: "힐링이고, 위로이고, 격려이며 행복입니다.", gradient: "from-white/10 to-white/0" },
  { label: "내 멘토들", value: "나를 진심으로 사랑해주는 사람들.", gradient: "from-white/10 to-white/0" },
];

export default function LifePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white/80">
      {/* Hero — Cinematic */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1622393346904-7c75877bc914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBvY2VhbiUyMHdhdmVzJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcyNzkxNzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Life hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030213]/80 via-[#030213]/40 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[700px]">
            <motion.h1 variants={fadeUp} className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500, lineHeight: 1.2 }}>
              타이틀 뒤에 숨겨진<br /><span className="text-[#c9a96e] italic">'사람'</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="italic text-white/50 font-['Cormorant_Garamond','Noto_Serif_KR',serif] border-l border-[#c9a96e] pl-6 py-2" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)", lineHeight: 1.6 }}>
              "내일이 없다고 생각하고, 오늘 지금 바로 이순간 최선을 다하자."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Link Bar */}
      <div className="sticky top-[80px] z-40 bg-[#030213]/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-24 py-4">
          <div className="flex gap-4 overflow-x-auto justify-center" style={{ scrollbarWidth: "none" }}>
            {lifeSections.map(sec => (
              <button
                key={sec.id}
                onClick={() => document.getElementById(`section-${sec.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="shrink-0 px-6 py-2 rounded-full transition-all cursor-pointer text-white/40 hover:text-[#c9a96e] hover:bg-white/5 font-['Montserrat'] tracking-widest uppercase"
                style={{ fontSize: "0.75rem", fontWeight: 600 }}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <section id="section-education" className="py-24 px-6 lg:px-12 scroll-mt-[130px] bg-[#0a0a0a]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Education</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>전공 & 자격</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { t: "경영학 학사", s: "학부 전공" },
                { t: "Brain Education 석사", s: "대학원 전공" },
                { t: "TESOL 자격증", s: "영어교사 자격" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="p-10 bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/10 text-center shadow-xl">
                  <p className="text-white mb-3" style={{ fontSize: "1.1rem", fontWeight: 600 }}>{item.t}</p>
                  <p className="text-white/30 font-light" style={{ fontSize: "0.85rem" }}>{item.s}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Identity — JINNY Acronym */}
      <section className="py-24 px-6 lg:px-12 bg-[#120f0d]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Identity</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>
                나, 어떤 사람인가요?
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { l: "J", t: "Joy", d: "사람에게 기쁨을 주는 사람" },
                { l: "I", t: "Integrity", d: "진심과 정직을 지키는 사람" },
                { l: "N", t: "Nurture", d: "사람을 키우는 사람" },
                { l: "N", t: "Nobility", d: "품격 있는 행동을 실천하는 사람" },
                { l: "Y", t: "Yield", d: "결과를 만들어내는 실천가" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="bg-white/5 rounded-[32px] p-8 border border-white/10 shadow-xl flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-[#c9a96e]/10 rounded-full flex items-center justify-center text-[#c9a96e] mb-6 shadow-sm font-['Playfair_Display'] italic font-bold" style={{ fontSize: "1.5rem" }}>
                    {item.l}
                  </div>
                  <p className="text-white mb-3" style={{ fontWeight: 700, fontSize: "1rem" }}>{item.t}</p>
                  <p className="text-white/30 leading-relaxed font-light" style={{ fontSize: "0.8rem" }}>{item.d}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ Hobbies — 4-column photo grid ═══ */}
      <section id="section-hobbies" className="py-24 px-6 lg:px-12 scroll-mt-[130px] bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Hobbies</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-20">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2.5rem, 4vw, 3rem)", fontWeight: 500 }}>나의 취미와 관심사</h2>
              <p className="text-white/20 mt-4 font-['Montserrat'] tracking-widest font-bold uppercase" style={{ fontSize: "0.75rem" }}>삶을 지탱하는 아름다운 것들</p>
            </motion.div>

            {/* Horizontal Timeline */}
            <motion.div variants={fadeUp} className="mb-24 px-4">
              <div className="relative">
                <div className="absolute top-[22px] left-0 right-0 h-[1px] bg-white/10" />
                <div className="relative flex justify-between items-start gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
                  {[
                    { year: "1990", desc: "35년차 테니스" },
                    { year: "1999", desc: "28년차 명상" },
                    { year: "2001", desc: "26년차 등산" },
                    { year: "2002", desc: "23년차 골프" },
                    { year: "2012", desc: "15년차 요가" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center min-w-[150px] text-center">
                      <div className="w-20 h-10 rounded-full border border-[#c9a96e]/30 bg-[#1a1714] flex items-center justify-center mb-4 z-10 shadow-2xl">
                        <span className="text-[#c9a96e] font-['Playfair_Display'] italic font-bold" style={{ fontSize: "1rem" }}>{item.year}</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#c9a96e] mb-6 z-10 border border-black shadow-gold" />
                      <p className="text-white/50 font-light" style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {hobbyPhotos.map((p, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -10 }} className="relative rounded-[32px] overflow-hidden group shadow-2xl border border-white/5 aspect-[3/4]">
                  <ImageWithFallback src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white font-['Noto_Serif_KR',serif] mb-2" style={{ fontSize: "1.2rem", fontWeight: 500 }}>{p.label}</p>
                    <p className="text-white/40 font-light" style={{ fontSize: "0.8rem" }}>{p.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-12 space-y-10">
              <div className="flex flex-wrap justify-center gap-3">
                {["등산", "자전거", "음악", "그림", "노래", "수다", "맛집", "산책", "여행"].map((tag, idx) => (
                  <motion.span key={idx} whileHover={{ y: -4 }} className="px-6 py-2.5 bg-white/5 rounded-full border border-white/10 text-white/40 hover:text-[#c9a96e] hover:border-[#c9a96e]/30 transition-all font-light" style={{ fontSize: "0.9rem" }}>
                    {tag}
                  </motion.span>
                ))}
              </div>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative p-16 rounded-[40px] shadow-2xl overflow-hidden border border-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1714] to-[#030213]" />
                <div className="relative z-10 text-center">
                  <p className="text-white font-['Cormorant_Garamond','Noto_Serif_KR',serif] leading-relaxed italic" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 300 }}>
                    "할 줄 아는 건 많은데,<br />잘하는 건 기대금지"
                  </p>
                  <div className="w-12 h-[1px] bg-[#c9a96e]/30 mx-auto my-8" />
                  <p className="text-white/30 font-light tracking-widest uppercase" style={{ fontSize: "0.9rem" }}>
                    그러나 늘 웃어요
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 좋아하는 것들 — Cozy daily vibe ═══ */}
      <section id="section-favorites" className="py-24 px-6 lg:px-12 bg-[#120f0d] scroll-mt-[130px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Favorites</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>내가 좋아하는 것들</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {favorites.map((fav, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="bg-white/5 backdrop-blur-xl rounded-[32px] p-10 border border-white/10 shadow-xl">
                  <p className="text-[#c9a96e] font-['Montserrat'] tracking-widest font-bold uppercase mb-4" style={{ fontSize: "0.7rem" }}>{fav.label}</p>
                  <p className="text-white font-light leading-relaxed" style={{ fontSize: "1.1rem" }}>{fav.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 삶의 이야기 ═══ */}
      <section id="section-lifestory" className="py-24 px-6 lg:px-12 bg-[#0a0a0a] scroll-mt-[130px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Story</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2.5rem, 4vw, 3rem)", fontWeight: 500 }}>삶의 이야기</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
                  <img src={motherImg} alt="소중한 사람" className="w-full h-auto object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <p className="absolute bottom-8 left-10 text-white font-light" style={{ fontSize: "1rem" }}>소중한 사람과 함께한 시간</p>
                </div>
              </motion.div>
              <div className="space-y-6">
                {lifeStoryItems.map((item, i) => (
                  <motion.div key={i} variants={fadeUp} whileHover={{ x: 10 }} className="bg-white/5 backdrop-blur-xl rounded-[32px] p-8 border border-white/10 shadow-xl transition-all">
                    <p className="text-[#c9a96e] font-['Montserrat'] tracking-widest font-bold uppercase mb-3" style={{ fontSize: "0.75rem" }}>{item.label}</p>
                    <p className="text-white/60 font-light leading-relaxed" style={{ fontSize: "1rem" }}>{item.value}</p>
                  </motion.div>
                ))}
                <motion.div variants={fadeUp} className="p-10 bg-gradient-to-br from-white/10 to-transparent rounded-[32px] border border-white/10 mt-10">
                  <p className="text-white font-['Montserrat'] tracking-[0.3em] font-bold uppercase mb-6" style={{ fontSize: "0.7rem" }}>Daily Routine</p>
                  <div className="flex flex-wrap gap-3">
                    {dailyRoutine.map((item, i) => (
                      <span key={i} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-light" style={{ fontSize: "0.85rem" }}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Life Elements */}
      <section id="section-lifeelements" className="py-24 px-6 lg:px-12 bg-[#120f0d] scroll-mt-[130px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Life Elements</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-20">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>나의 삶을 이루는 것들</h2>
              <p className="text-white/20 mt-4 font-['Montserrat'] tracking-widest font-bold uppercase" style={{ fontSize: "0.75rem" }}>나를 만들어 온 책, 영화, 그리고 사람들</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* 인생책 */}
              <motion.div variants={fadeUp} className="bg-white/5 rounded-[40px] p-12 border border-white/10 shadow-2xl backdrop-blur-md">
                <h3 className="text-[#c9a96e] font-['Montserrat'] tracking-widest font-bold uppercase mb-10" style={{ fontSize: "0.85rem" }}>INSPIRATIONAL BOOKS</h3>
                <div className="space-y-8">
                  {lifeBooks.map((book, i) => (
                    <div key={i} className="group">
                      <p className="text-white mb-2 transition-colors group-hover:text-[#c9a96e]" style={{ fontSize: "1.1rem", fontWeight: 500 }}>{book.title}</p>
                      <p className="text-white/20 font-['Montserrat'] font-bold mb-3" style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}>{book.author}</p>
                      <p className="text-white/40 italic font-light font-['Noto_Serif_KR',serif]" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>{`"${book.quote}"`}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 인생 영화 */}
              <motion.div variants={fadeUp} className="bg-white/5 rounded-[40px] p-12 border border-white/10 shadow-2xl backdrop-blur-md">
                <h3 className="text-[#c9a96e] font-['Montserrat'] tracking-widest font-bold uppercase mb-10" style={{ fontSize: "0.85rem" }}>CINEMATIC MOMENTS</h3>
                <div className="space-y-8">
                  {lifeMovies.map((m, i) => (
                    <div key={i} className="group">
                      <div className="flex items-baseline gap-3 mb-2">
                        <p className="text-white transition-colors group-hover:text-[#c9a96e]" style={{ fontSize: "1.1rem", fontWeight: 500 }}>{m.title}</p>
                        <p className="text-white/20 font-['Playfair_Display'] italic" style={{ fontSize: "0.85rem" }}>{m.year}</p>
                      </div>
                      <p className="text-white/40 italic font-light font-['Noto_Serif_KR',serif]" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>{`"${m.quote}"`}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 여행지 */}
              <motion.div variants={fadeUp} className="bg-white/5 rounded-[40px] p-12 border border-white/10 shadow-2xl backdrop-blur-md">
                <h3 className="text-[#c9a96e] font-['Montserrat'] tracking-widest font-bold uppercase mb-10" style={{ fontSize: "0.85rem" }}>PLACES OF PEACE</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {lifeDestinations.map((dest, i) => (
                    <motion.div key={i} whileHover={{ y: -6 }}>
                      <div className="relative rounded-2xl overflow-hidden aspect-square mb-4 shadow-xl border border-white/5">
                        <ImageWithFallback src={dest.img} alt={dest.place} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <p className="absolute bottom-3 left-4 text-white font-bold" style={{ fontSize: "0.85rem" }}>{dest.place}</p>
                      </div>
                      <p className="text-white/40 font-light leading-tight" style={{ fontSize: "0.75rem" }}>{dest.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* 존경하는 사람들 */}
              <motion.div variants={fadeUp} className="bg-white/5 rounded-[40px] p-12 border border-white/10 shadow-2xl backdrop-blur-md">
                <h3 className="text-[#c9a96e] font-['Montserrat'] tracking-widest font-bold uppercase mb-10" style={{ fontSize: "0.85rem" }}>RESPECTED VOICES</h3>
                <div className="grid grid-cols-1 gap-4">
                  {respectedPeople.map((p, i) => (
                    <div key={i} className="p-6 bg-white/5 rounded-[24px] border border-white/5">
                      <p className="text-white mb-2" style={{ fontSize: "1rem", fontWeight: 600 }}>{p.name}</p>
                      <p className="text-white/30 font-light leading-relaxed" style={{ fontSize: "0.8rem" }}>{p.reason}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 사색의 조각들 ═══ */}
      <section id="section-reflections" className="relative py-32 px-6 lg:px-12 overflow-hidden scroll-mt-[130px] bg-[#030213]">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1727944679843-f378b1bc6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFycnklMjBuaWdodCUyMHNreSUyMGRyZWFteXxlbnwxfHx8fDE3NzI3OTM0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Starry sky" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030213] via-[#030213]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Reflections</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-20">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>
                사색의 조각들
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                { quote: "겨울 나무는 꽃이 없어도\n참 아름답다." },
                { quote: "사람은 때로 일을 멈추고\n바람처럼, 음악처럼,\n하늘처럼 존재해야 한다." },
                { quote: "진짜 나를 만난 순간은,\n유용함이 아닌\n'무용한 시간들' 속에서였다." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="p-10 bg-white/5 backdrop-blur-3xl rounded-[32px] border border-white/10 text-center shadow-2xl">
                  <p className="text-white/70 font-['Cormorant_Garamond','Noto_Serif_KR',serif] italic whitespace-pre-line leading-relaxed" style={{ fontSize: "1.1rem", fontWeight: 300 }}>
                    "{item.quote}"
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="p-16 bg-[#c9a96e]/5 backdrop-blur-3xl rounded-[40px] border border-[#c9a96e]/20 text-center shadow-2xl">
              <p className="text-[#c9a96e] font-['Playfair_Display'] italic mb-10" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, lineHeight: 1.4 }}>
                "모든 것이 무너져 내리는 순간에도<br />우리는 무엇인가를 사랑할 수 있다."
              </p>
              <div className="w-12 h-[1px] bg-[#c9a96e]/30 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}