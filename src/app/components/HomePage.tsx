import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronRight, Sparkles, Heart, ArrowDown } from "lucide-react";
import { NavLink } from "react-router";
import MediaGallery from "./MediaGallery";
import colleaguesImg from "figma:asset/f9631c2e7bf230d64eff82200903e629cb41b41a.png";
import marathonImg from "figma:asset/0f8453795dd662ffd4ff94633072636e34293459.png";
import timelineImg from "figma:asset/d9555326164840fecc88bd39baf8459fc8f36530.png";
import heroProfile from "figma:asset/8a95e17c1266acf6ef562be3b94aa200c28b8f0e.png";
import essenceProfile from "figma:asset/0ee047dc493038a84474d8c1b016e4804d1e0f35.png";
import hanbokProfile from "figma:asset/b509baba4bb503e20a21cbc3b78abf2edfe8d057.png";
import heroMain from "figma:asset/29e64ffd6f89fe98365ac0334d677f166fb31e59.png";
import newHeroBg from "figma:asset/c0e618e62ed091e470faf524cdb5a2156961ffa9.png";

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
  { emoji: "", title: "따뜻한 엄마", desc: "두 딸의 성장을 <br> 함께하는  동반자", gradient: "from-white/5 to-white/0" },
  { emoji: "", title: "국제적 마인드", desc: "한국·미국·캐나다·유럽을 <br> 넘나든 글로벌 경영 감각", gradient: "from-white/5 to-white/0" },
  { emoji: "", title: "자연과 명상", desc: "자연과 함께 20년 명상으로 내면을 다스리는 지혜", gradient: "from-white/5 to-white/0" },
  { emoji: "", title: "함께할 때 강한 리더", desc: "협업에 강하고 <br>시너지를 만드는 사람", gradient: "from-white/5 to-white/0" },
];

const stats = [
  { num: "27", suffix: "YRS", label: "PROFESSIONAL EXPERIENCE" },
  { num: "20", suffix: "YRS", label: "LANGUAGE & EDUCATION" },
  { num: "7", suffix: "YRS", label: "AI TECHNOLOGY" },
  { num: "30", suffix: "M+", label: "ITT CANDIDATES" },
];

const homeSections = [
  { id: "essence", label: "ESSENCE" },
  { id: "media", label: "MEDIA" },
  { id: "philosophy", label: "PHILOSOPHY" },
  { id: "mystory", label: "STORY" },
  { id: "hobbies", label: "HOBBIES" },
  { id: "vision", label: "VISION" },
];

const ScrollingMarquee = ({ text, direction = 1, speed = 0.3 }) => {
  return (
    <div className="overflow-hidden flex whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
      <motion.div
        initial={{ x: direction > 0 ? "-100%" : "0%" }}
        animate={{ x: direction > 0 ? "0%" : "-100%" }}
        transition={{ duration: 100 / speed, repeat: Infinity, ease: "linear" }}
        className="flex"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-[12vw] font-black mx-4 font-['Montserrat'] tracking-tighter uppercase">
            {text} —
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const DiamondCard = ({ title, desc, top, left, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 45, x: "-50%", y: "-50%" }}
      whileInView={{ opacity: 1, scale: 1, rotate: 45, x: "-50%", y: "-50%" }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ scale: 1.05, x: "-50%", y: "-50%" }}
      style={{ top, left }}
      className="absolute w-[clamp(180px,25vw,220px)] aspect-square backdrop-blur-2xl bg-[#0a0a0a]/80 border border-white/10 flex items-center justify-center p-6 group overflow-hidden cursor-default hover:border-[#c9a96e]/40 transition-colors duration-500 z-30"
    >
      {/* Hover Fill Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#c9a96e]/20 to-transparent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-1000 ease-out" />

      <div className="-rotate-45 text-center relative z-10">
        <h4 className="font-['Noto_Serif_KR',serif] text-[#c9a96e] mb-2 tracking-widest font-bold" style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)" }}>
          {title}
        </h4>
        <p
          className="text-white/60 leading-relaxed font-['Noto_Serif_KR',serif]"
          style={{ fontSize: "clamp(0.7rem, 1vw, 0.85rem)" }}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    </motion.div>
  );
};

const Counter = ({ value, duration = 2, repeatDelay = 1 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let timer;
    const animate = () => {
      const incrementTime = (duration * 1000) / end;
      timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
          setTimeout(() => {
            start = 0;
            setCount(0);
            animate();
          }, repeatDelay * 1000);
        }
      }, incrementTime);
    };

    animate();
    return () => clearInterval(timer);
  }, [value, duration, repeatDelay]);

  return <span>{count}</span>;
};

const CountingNumber = ({ value, suffix }) => {
  return (
    <>
      <Counter value={value} />
      {suffix}
    </>
  );
};

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const saturation = useTransform(scrollYProgress, [0.1, 0.3], ["grayscale(100%)", "grayscale(0%)"]);

  return (
    <div className="bg-[#1a1a1a]">
      {/* Hero Section — Full Background Image Overlay */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={newHeroBg}
            alt="Jinny Park"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-[#3A2E23]/10 mix-blend-multiply" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-10 lg:px-20 h-full flex flex-col">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col gap-10 max-w-full pt-[35vh]"
          >
            {/* Stats Card — Top Placement */}
            <motion.div variants={fadeUp} className="w-[520px] h-[90px] hidden md:block">
              <div className="grid grid-cols-4 h-full bg-[#3C2814]/50 backdrop-blur-2xl rounded-[20px] px-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 items-center">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center h-12 ${i < stats.length - 1 ? "border-r border-white/10" : ""}`}
                  >
                    <div className="flex items-baseline gap-0.5 mb-0.5">
                      <span className="font-['Playfair_Display'] italic text-[#D6B97B]" style={{ fontSize: "1.5rem", fontWeight: 600, lineHeight: 1 }}>
                        <Counter value={s.num} />
                      </span>
                      <span className="text-[#D6B97B]/80 font-['Montserrat'] font-bold" style={{ fontSize: "0.6rem", letterSpacing: "0.05em" }}>
                        {s.suffix}
                      </span>
                    </div>
                    <p className="text-white/40 font-['Montserrat'] tracking-[0.1em] leading-tight text-center uppercase" style={{ fontSize: "7px", fontWeight: 700 }}>
                      {s.label.split(' ').slice(0, 2).join(' ')}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Main Titles */}
            <div className="space-y-6 max-w-4xl">
              <motion.h1
                variants={fadeUp}
                className="font-['Noto_Serif_KR',serif] text-white leading-[1.2] tracking-tight whitespace-nowrap"
                style={{ fontSize: "clamp(3.5rem, 5vw, 4.5rem)", fontWeight: 400 }}
              >
                30년 교육의 지혜,<br />
                <span className="italic text-[#D6B97B]">AI</span>로 언어의 장벽을 넘다
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="space-y-3 text-white/80 font-['Montserrat'] font-light max-w-2xl"
                style={{ fontSize: "1rem", lineHeight: 1.8 }}
              >
                <p>27년 중 20년 언어와 교육, 7년 AI 기술 분야에서 제시하는 명확한 방향</p>
                <p>깊은 사색과 폭넓은 경험으로 빚어낸 삶의 원숙함과 따뜻한 통찰</p>
              </motion.div>
            </div>

            {/* Scroll Indicator only */}
            <motion.div variants={fadeUp} className="pt-4 flex items-center gap-8">
              <div className="flex items-center gap-4 group cursor-default opacity-60">
                <div className="w-12 h-[1px] bg-[#D6B97B]" />
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/80">Scroll to Explore</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Link Bar — Unified Style */}
      <div className="sticky top-[80px] z-40 bg-[#030213]/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-24 py-4">
          <div className="flex gap-4 overflow-x-auto justify-center" style={{ scrollbarWidth: "none" }}>
            {homeSections.map(sec => (
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

      {/* ===== 1. The Essence — Cinematic Editorial Layout ===== */}
      <section id="section-essence" className="relative py-40 px-6 overflow-hidden bg-[#1a1a1a] scroll-mt-[130px]">
        {/* Background Marquee — Persistent Slow Crawl */}
        {/* Background Marquee — Ultra-slow Symmetrical System */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute top-[12%] left-0 right-0">
            <ScrollingMarquee text="JINNY PARK — ESSENCE — IDENTITY — INSIGHT — WISDOM — AI STRATEGY" speed={0.3} direction={-1} />
          </div>
          <div className="absolute bottom-[12%] left-0 right-0">
            <ScrollingMarquee text="JINNY PARK — ESSENCE — IDENTITY — INSIGHT — WISDOM — AI STRATEGY" speed={0.3} direction={1} />
          </div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-32"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">The Essence</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-white font-['Playfair_Display'] leading-tight mb-12"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 300 }}
            >
              삶의 결이 담긴, <span className="italic">진정한 나다움</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/50 font-['Montserrat'] max-w-4xl mx-auto leading-[2.2] tracking-wide"
              style={{ fontSize: "1.05rem", fontWeight: 400 }}
            >
              교육자로서의 30년, 기술 전략가로서의 7년. 그 화려한 지표들 이면에 존재하는<br />인간 박미진의 본질은 가장 단순하고 따뜻한 곳을 향해 있습니다.
            </motion.p>
          </motion.div>

          <div className="relative flex flex-col items-center py-24 mx-auto min-h-[950px]">
            {/* 500px Wide Image Container with Gold Corner Decoration — Shifted up for balance */}
            <div className="relative w-[500px] aspect-[4/5] group -mt-20">
              {/* Gold Corner Ornaments */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#c9a96e]/60 z-30" />
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-[#c9a96e]/60 z-30" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-[#c9a96e]/60 z-30" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#c9a96e]/60 z-30" />

              {/* Central Cinematic Image with 2.5s Saturation Animation — Hanbok Profile */}
              <motion.div
                initial={{ filter: "grayscale(100%)" }}
                whileInView={{ filter: "grayscale(0%)" }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="relative z-20 w-full h-full rounded-[40px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8)] border border-white/5"
              >
                <ImageWithFallback
                  src={hanbokProfile}
                  alt="Essence Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Content Overlay - Quote & Tags */}
                <div className="absolute bottom-0 left-0 right-0 p-8 pt-20">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="text-white/90 font-['Noto_Serif_KR',serif] text-center mb-8 leading-relaxed tracking-tight"
                    style={{ fontSize: "1.05rem", fontWeight: 500, textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
                  >
                    "혼자서는 게으르지만,<br />함께할 땐 기적을 만드는 사람"
                  </motion.p>

                  <div className="flex justify-between items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-gradient-to-r from-[#c9a96e] to-[#e0c68a] text-white px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2"
                      style={{ fontSize: "0.82rem", fontWeight: 600 }}
                    >
                      <span>1월 16일생 · ESFP · O형</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-[#1a1a1a]/80 backdrop-blur-md text-white/90 px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-white/10"
                      style={{ fontSize: "0.82rem", fontWeight: 600 }}
                    >
                      <span className="font-['Playfair_Display'] italic tracking-wider">Since 1999</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Diamond Overlapping Cards — Adjusted vertically to center with the image */}
              <DiamondCard
                title={coreKeywords[0].title}
                desc={coreKeywords[0].desc}
                top="60px"
                left="-37px"
                delay={0.2}
              />
              <DiamondCard
                title={coreKeywords[1].title}
                desc={coreKeywords[1].desc}
                top="60px"
                left="537px"
                delay={0.3}
              />
              <DiamondCard
                title={coreKeywords[2].title}
                desc={coreKeywords[2].desc}
                top="380px"
                left="-37px"
                delay={0.4}
              />
              <DiamondCard
                title={coreKeywords[3].title}
                desc={coreKeywords[3].desc}
                top="380px"
                left="537px"
                delay={0.5}
              />
            </div>

            {/* Bottom Identity Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-40"
            >
              <NavLink
                to="/identity"
                className="group flex items-center gap-6 text-white/30 hover:text-[#c9a96e] transition-colors duration-500"
                style={{ fontSize: "13px", letterSpacing: "0.5em", fontWeight: 700 }}
              >
                EXPLORE THE FULL IDENTITY STORY
                <motion.div
                  whileHover={{ x: 12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ChevronRight size={24} className="stroke-[1px]" />
                </motion.div>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 2. Media ===== */}
      <div id="section-media" className="scroll-mt-[130px]">
        <MediaGallery />
      </div>

      {/* ===== 4. Philosophy ===== */}
      <section id="section-philosophy" className="py-24 px-6 lg:px-12 bg-[#0a0a0a] scroll-mt-[130px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Philosophy</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>
                나의 철학
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
              <div className="relative rounded-[40px] overflow-hidden group border border-white/5">
                <img src={colleaguesImg} alt="함께하는 사람들" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-8 text-white flex items-center gap-2" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  함께하는 사람들과의 소중한 시간
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-3xl rounded-[40px] p-12 border border-white/10 shadow-2xl">
                <p className="text-white mb-6 leading-relaxed font-['Noto_Serif_KR',serif]" style={{ fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.8 }}>"기술은 수단일 뿐,<br />세상을 바로보는 따뜻한 눈빛과 마음이 진심인<br />'사람과 함께하는 것'입니다."</p>
                <div className="w-16 h-[1px] bg-[#c9a96e] mb-6" />
                <p className="text-white/30 italic font-['Playfair_Display']" style={{ fontSize: "1rem" }}>– Jinny Park</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 5. Personal Story ===== */}
      <section id="section-mystory" className="py-24 px-6 lg:px-12 bg-[#120f0d] scroll-mt-[130px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Story</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>
                사람 이야기
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-10">
              <div className="space-y-10 font-['Noto_Serif_KR',serif]">
                <div className="bg-white/5 rounded-[32px] p-10 border border-white/10 shadow-xl backdrop-blur-md">
                  <p className="text-white/70 leading-[2.2]" style={{ fontSize: "1rem" }}>벤틀리를 타며 사업이 쉬워보였어요. 성공하는 삶이 인생의 증표인 줄 알았어요. 손목엔 피아제, 어깨엔 에르메스. 세상이 쉬워보였어요.</p>
                </div>
                <div className="bg-white/5 rounded-[32px] p-10 border border-white/10 shadow-xl backdrop-blur-md">
                  <p className="text-white/70 leading-[2.2]" style={{ fontSize: "1rem" }}>그런데 이상하죠. 하루가 끝나고 그 멋진 차를 타고 돌아오는 길엔 문득, 마음 한구석이 뻥 뚫린 듯했어요.</p>
                </div>
              </div>
              <div className="space-y-10 font-['Noto_Serif_KR',serif]">
                <div className="bg-white/5 rounded-[32px] p-10 border border-white/10 shadow-xl backdrop-blur-md">
                  <p className="text-white/70 leading-[2.2]" style={{ fontSize: "1rem" }}>
                    그러다 네팔에서 작은 봉사활동을 하게 됐습니다. 색연필 한 자루를 건넸을 뿐인데, 아이 하나가 제 손을 꼭 잡으며 말했어요.
                  </p>
                  <p className="text-[#c9a96e] font-['Cormorant_Garamond','Noto_Serif_KR',serif] italic mt-6" style={{ fontSize: "1.4rem", fontWeight: 500 }}>
                    "언니 다시 오실 거죠?"
                  </p>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-transparent rounded-[32px] p-10 border border-white/10 shadow-xl backdrop-blur-md">
                  <p className="text-white/70 leading-[2.2]" style={{ fontSize: "1rem" }}>
                    그날 이후 저는 깨달았습니다. 진짜 삶의 본질은 거창한 성취가 아니라, 누군가에게 따뜻한 존재로 남는 것.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-16 p-10 bg-white/5 rounded-[32px] border border-white/5 text-center backdrop-blur-md">
              <p className="text-white/50 italic font-['Noto_Serif_KR',serif]" style={{ fontSize: "1.2rem" }}>
                "행복은 소유에서 오지 않는다. 느끼는 데서 온다."
              </p>
              <p className="text-white/20 mt-4 font-['Montserrat'] uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>– Tal Ben-Shahar</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 6. Hobbies ===== */}
      <section id="section-hobbies" className="py-24 px-6 lg:px-12 bg-[#0a0a0a] scroll-mt-[130px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Hobbies</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>
                나의 취미와 여행
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { img: "https://cdn.imweb.me/thumbnail/20250428/5c9e5f76ff456.jpg", label: "TRAVEL" },
                { img: "https://cdn.imweb.me/thumbnail/20250428/d3cef64b5eb28.jpg", label: "MEDITATION" },
                { img: "https://cdn.imweb.me/thumbnail/20250428/ec394b609d4a5.jpg", label: "TENNIS" },
                { img: "https://cdn.imweb.me/thumbnail/20250428/8bb2223a6a453.jpg", label: "GOLF" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -10 }} className="relative group overflow-hidden rounded-[32px] shadow-2xl border border-white/5">
                  <ImageWithFallback src={item.img} alt={item.label} className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <span className="absolute bottom-6 left-6 text-white font-['Montserrat'] tracking-[0.3em] font-bold" style={{ fontSize: "0.75rem" }}>{item.label}</span>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-8 relative rounded-[40px] overflow-hidden group shadow-2xl border border-white/5">
              <img src={marathonImg} alt="국제평화 마라톤대회" className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-white font-['Noto_Serif_KR',serif]" style={{ fontSize: "1.4rem", fontWeight: 500 }}>국제평화 마라톤대회</p>
                <p className="text-white/50 mt-2 font-['Montserrat'] tracking-widest uppercase" style={{ fontSize: "0.75rem" }}>함께 뛰고, 함께 웃는 순간들</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== 7. Vision — Photo-based CTA with impact ===== */}
      <section id="section-vision" className="relative overflow-hidden scroll-mt-[130px] bg-[#030213]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://cdn.imweb.me/thumbnail/20250501/11d2ca7b37296.png"
            alt="Jinny Park Vision"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030213] via-[#030213]/80 to-transparent" />
        </div>
        <div className="relative z-10 py-32 px-6 lg:px-12">
          <div className="max-w-[1200px] mx-auto text-center text-white">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
                <div className="h-[1px] w-24 bg-[#c9a96e]" />
                <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Vision</span>
                <div className="h-[1px] w-24 bg-[#c9a96e]" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] mb-4 text-white" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 500, lineHeight: 1.2 }}>1,000명의 전문가와 함께</motion.h2>
              <motion.h2 variants={fadeUp} className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] mb-12 text-[#c9a96e] italic" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.2 }}>세상을 바꾸는 여정을 시작합니다</motion.h2>
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 flex-wrap mb-16">
                {["행동으로", "돈으로", "마음으로"].map((word, i) => (
                  <span key={i} className="px-8 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white/80 font-['Noto_Serif_KR',serif]" style={{ fontSize: "1.1rem", fontWeight: 400 }}>{word}</span>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} className="text-white/40 leading-[2] mb-12 max-w-[600px] mx-auto font-light" style={{ fontSize: "1rem" }}>아프리카 · 네팔 · 캄보디아 해외 교육, 교사, 교재, 학교 봉사 지원<br />노블레스 오블리주를 실천하는 사람들과 함께합니다.</motion.p>
              <motion.div variants={fadeUp}>
                <NavLink
                  to="/future"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c9a96e] to-[#e0c68a] hover:from-[#b8976a] hover:to-[#d4b896] text-white px-10 py-4 rounded-full transition-all shadow-2xl shadow-[#c9a96e]/20 hover:shadow-shadow-[#c9a96e]/30"
                  style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "0.05em" }}
                >
                  VIEW OUR FUTURE
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