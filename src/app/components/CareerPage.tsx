import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import appointmentImg from "figma:asset/b2eaf69f1187098a6dbe39e0de7236758691208e.png";
import universityGroupImg from "figma:asset/4286a6c3f69fe54058b6ef4d30bf957dc2602da3.png";
import ebusImg from "figma:asset/57185f5d5304d44a3eb4e29abd17a50533f9fad4.png";
import yonseiIcsImg from "figma:asset/2081838724bc1dfa788192cd63b2e74319574e58.png";
import patentCert1 from "figma:asset/a1d6d7ad8553917472401c0f23584e571a7b44be.png";
import patentCert2 from "figma:asset/eff7d9f934a0f6b716644f6d085e8ca6b06be206.png";
import promptPatentApp from "figma:asset/0d6b803d565aa1189874bfa7ecd3e76c2e6a6a9d.png";
import patentApp2 from "figma:asset/a900f957b7e0ab0fa2d0bc0e5fec1833410c827b.png";
import civilCert from "figma:asset/633d5d434ea6e6fca69eca484434aa27ad4f2b5b.png";
import mojExplain from "figma:asset/40955f27c15b920af34ad89dec4860f8d5abb627.png";
import shinhanMou from "figma:asset/158f439f38074ec6c636d16327502bc5c50d9b40.png";
import yonseiMou from "figma:asset/f924f835a12e1715aedfaf1d9cbd3fe20ceb81c2.png";
import videoGalleryImg from "figma:asset/e13c92904bd0b879c4eb54f8e083e62ff6d2aa0b.png";
import { Sparkles, Upload, Play } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Sections ─── */
const careerSections = [
  { id: "story", label: "사업 이야기" },
  { id: "current", label: "현재 활동" },
  { id: "milestones", label: "연혁" },
  { id: "records", label: "공식 기록" },
  { id: "partners", label: "글로벌 협력" },
  { id: "philosophy", label: "경영 철학" },
  { id: "videos", label: "영상 아카이브" },
];

/* ─── Data ─── */
const currentCards = [
  { emoji: "🎓", title: "캘리포니아 국제대학교 (하와이)\n미주 부총장", desc: "글로벌 교육 네트워크", color: "from-blue-50 to-indigo-50", highlight: true },
  { emoji: "🌍", title: "UN 산하 IAEWP 교육위원\n/ 휴텍씨 대표이사", desc: "교육 사업 총괄", color: "from-green-50 to-teal-50", highlight: false },
  { emoji: "📋", title: "국가공인 시험기관\n및 교육기관 운영", desc: "누적 30만+ 응시", color: "from-amber-50 to-yellow-50", highlight: false },
  { emoji: "🏢", title: "4개 법인 + 1개 사단법인\n운영", desc: "교육·기술·국제협력", color: "from-purple-50 to-pink-50", highlight: false },
  { emoji: "🤖", title: "109개 AI 통번역\n4건 특허 보유", desc: "AI 평가 시스템", color: "from-cyan-50 to-blue-50", highlight: false },
  { emoji: "🏫", title: "(전) ICS 국제학교\n이사장", desc: "글로벌 인재 양성", color: "from-rose-50 to-orange-50", highlight: false },
];

const careerCards = [
  {
    era: "2022~2026", title: "프롬프트 & AI 언어 자격 시대 🚀", emoji: "🔥",
    items: ["프롬프트 전문가 자격증 특허 출원", "AI 기반 통번역 자격제도 확대", "캘리포니아 국제대학교 미주 부총장", "글로벌 협약 및 대학 연계 확대", "109개 AI 통번역 시스템 구축", "4건 특허 보유 (출원 포함)"],
    accent: "#FF6B6B",
  },
  {
    era: "2016~2021", title: "AI와 새로운 도전 🤖", emoji: "✨",
    items: ["AI vs 휴먼 번역 대결 진행", "AI 통번역 시스템 시험화", "과학기술부 AI 통번역 민간시험 승인", "신한대 AI 언어기반 산학협력 협약", "민간자격등록증 취득 (번역·통역)"],
    accent: "#4ECDC4",
  },
  {
    era: "2006~2015", title: "국제화 & 산학협력 🌏", emoji: "🌍",
    items: ["통번역 시험 해외 진출", "IAEWP 교육위원 활동", "ICS 국제학교 이사장", "미국대학 학점연계 'EBUS' 운영", "연세대 × HuTechC 교육 협력 협약", "UN 산하 국제기구 활동 확대"],
    accent: "#6C5CE7",
  },
  {
    era: "1999~2005", title: "교육·통번역의 시작 🌱", emoji: "🌱",
    items: ["국제통역번역협회 사무총장", "통역번역 시험 제도 도입", "코리아헤럴드 영남 문화센터 운영", "TESOL 교사 2만여 명 배출", "영어교육 체계 수립 및 확산", "국제 통번역 인력 양성 기반 구축"],
    accent: "#FFD93D",
  },
];

/* ─── Split docs into categories ─── */
const certDocs = [
  { src: civilCert, title: "민간자격등록증", sub: "통역번역 민간자격 등록", year: "2021" },
  { src: mojExplain, title: "법무부 설명자료", sub: "ITT 번역문 인증 자격 기준", year: "2013" },
];
const patentDocs = [
  { src: patentCert1, title: "특허증 — 번역서비스", sub: "제 10-2526392호", year: "2023" },
  { src: patentCert2, title: "특허증 — 통역서비스", sub: "제 10-2526391호", year: "2023" },
  { src: promptPatentApp, title: "출원증명 — LLM 프롬프트", sub: "PATENT-2024-0029160", year: "2024" },
  { src: patentApp2, title: "출원사실증명원", sub: "AI 기반 서비스 특허 출원", year: "2024" },
];
const mouDocs = [
  { src: yonseiMou, title: "협약서 — 연세대 × HuTechC", sub: "AI 통번역 교육 협력 협약", year: "2018" },
  { src: shinhanMou, title: "협약서 — 신한대 × 휴텍씨", sub: "AI 언어기반 인문학연구소 산학협력", year: "2021" },
];

function DocGrid({ docs, accent }: { docs: { src: string; title: string; sub: string; year: string }[]; accent: string }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {docs.map((doc, i) => (
        <motion.div key={i} variants={fadeUp} whileHover={{ y: -3 }}>
          <div className="relative bg-white rounded-2xl border border-[#f0ebe3] overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="aspect-[3/4] overflow-hidden relative">
              <img src={doc.src} alt={doc.title} className="w-full h-full object-cover object-top blur-[0.5px] opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-white/30" />
              <div className="absolute top-0 left-0 right-0 p-3 pb-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white px-2 py-0.5 rounded-full" style={{ fontSize: "0.62rem", fontWeight: 600, backgroundColor: accent }}>{doc.year}</span>
                </div>
                <p className="text-white leading-snug drop-shadow-md" style={{ fontSize: "0.78rem", fontWeight: 600 }}>{doc.title}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/80 to-transparent pt-10 pb-2.5 px-3">
                <p className="text-[#777] leading-snug" style={{ fontSize: "0.72rem" }}>{doc.sub}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function CareerPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://cdn.imweb.me/thumbnail/20250501/a96a5a2df7242.png" alt="Career hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[800px]">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-5 border border-white/20">
              <span style={{ fontSize: "0.82rem" }}>🚀</span>
              <span style={{ fontSize: "0.82rem" }} className="text-white/90">Career Journey</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 600, lineHeight: 1.3 }}>
              27년 넘는 시간,<br /><span className="bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B] bg-clip-text text-transparent">변화의 최전선에서</span> 길을 만들다 ✨
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/75 max-w-[550px] mx-auto" style={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}>
              언어와 교육, 기술의 융합을 통해 혁신을 이끌고 수많은 이들과 함께 성장해 온 여정
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Link Bar */}
      <div className="sticky top-[68px] z-40 bg-white/90 backdrop-blur-xl border-b border-[#f0ebe3]/50 shadow-sm">
        <div className="max-w-[1100px] mx-auto px-6 py-3">
          <div className="flex gap-1.5 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {careerSections.map(sec => (
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

      {/* Intro */}
      <section id="section-story" className="pt-10 pb-14 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5efe6] rounded-full mb-5">
                <span style={{ fontSize: "0.8rem" }}>📖</span>
                <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>BUSINESS STORY</span>
              </div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a] mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600 }}>Jinny Park의 사업 이야기</h2>
              <p className="text-[#c9a96e] font-['Cormorant_Garamond','Noto_Serif_KR',serif] italic mb-6" style={{ fontSize: "1rem" }}>"교육, 언어, 인공지능의 경계를 허물다" 💡</p>
            </motion.div>
            <motion.p variants={fadeUp} className="text-[#777] leading-relaxed" style={{ fontSize: "0.95rem" }}>
              1999년부터 27년이 넘는 시간, 언어를 통한 교육의 힘을 믿고 시작한 길. 그 길 위에서 나는, 언어와 기술, 사람과 사람을 연결해왔습니다.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Current Activities — Title-focused */}
      <section id="section-current" className="py-10 px-6 lg:px-12 bg-gradient-to-br from-[#faf7f2] to-[#f5efe6] scroll-mt-[130px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full mb-4 border border-[#f0ebe3]">
                <Sparkles size={14} className="text-[#c9a96e]" />
                <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>CURRENT</span>
              </div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600 }}>현재 활동 요약</h2>
            </motion.div>

            {/* Hero photo banner */}
            <motion.div variants={fadeUp} className="mb-8 rounded-2xl overflow-hidden shadow-lg relative">
              <img src={appointmentImg} alt="임명장 수여" className="w-full h-[280px] md:h-[340px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/80 via-[#1a1a2e]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#c9a96e]/20 backdrop-blur-md rounded-full mb-3 border border-[#c9a96e]/30">
                  <Sparkles size={10} className="text-[#c9a96e]" />
                  <span className="text-[#c9a96e]" style={{ fontSize: "0.65rem", fontWeight: 700 }}>HIGHLIGHT</span>
                </div>
                <p className="text-white font-['Cormorant_Garamond','Noto_Serif_KR',serif]" style={{ fontSize: "1.3rem", fontWeight: 700, lineHeight: 1.4 }}>
                  🎓 캘리포니아 국제대학교 (하와이) 미주 부총장 임명장 수여
                </p>
              </div>
            </motion.div>

            {/* 6 Activity Cards — New Magazine-style design */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {currentCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-[#f0ebe3] shadow-sm hover:shadow-xl transition-all"
                >
                  {/* Top accent bar */}
                  <div className={`h-1 bg-gradient-to-r ${card.highlight ? 'from-[#c9a96e] to-[#e0c68a]' : card.color.replace('from-', 'from-').replace('to-', 'to-').replace('50', '300')}`} />
                  
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      {/* Emoji circle */}
                      <div className={`shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                        <span style={{ fontSize: "1.5rem" }}>{card.emoji}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        {card.highlight && (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-gradient-to-r from-[#c9a96e]/15 to-[#e0c68a]/15 rounded-full mb-2 border border-[#c9a96e]/20">
                            <Sparkles size={9} className="text-[#c9a96e]" />
                            <span className="text-[#8b6914]" style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.05em" }}>HIGHLIGHT</span>
                          </div>
                        )}
                        <h3 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#1a1a2e] whitespace-pre-line" style={{ fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.4 }}>
                          {card.title}
                        </h3>
                        <p className="text-[#aaa] mt-2 flex items-center gap-1.5" style={{ fontSize: "0.75rem" }}>
                          <span className="w-1 h-1 rounded-full bg-[#c9a96e] inline-block" />
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom hover glow for highlight */}
                  {card.highlight && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* ═══ Timeline — 4 columns ═══ */}
            <motion.div variants={fadeUp} className="text-center mt-8 mb-6" id="section-milestones">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full mb-4 border border-[#f0ebe3]">
                <span style={{ fontSize: "0.8rem" }}>📅</span>
                <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>MILESTONES</span>
              </div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600 }}>연혁</h2>
              <div className="flex items-center justify-center gap-3 mt-3">
                <span className="bg-gradient-to-r from-[#FFD93D] to-[#FF8A5B] bg-clip-text text-transparent font-['Cormorant_Garamond',serif]" style={{ fontSize: "1.8rem", fontWeight: 800 }}>1999</span>
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B]" />
                <span className="bg-gradient-to-r from-[#FF6B6B] to-[#6C5CE7] bg-clip-text text-transparent font-['Cormorant_Garamond',serif]" style={{ fontSize: "1.8rem", fontWeight: 800 }}>2026</span>
              </div>
              <p className="text-[#bbb] mt-1" style={{ fontSize: "0.82rem" }}>27년의 발자취 🦶</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {careerCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-2xl p-5 border border-[#f0ebe3] shadow-sm hover:shadow-md transition-all overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 rounded-b-full" style={{ backgroundColor: card.accent }} />
                  <div className="pt-2">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span style={{ fontSize: "1rem" }}>{card.emoji}</span>
                      <p className="font-['Cormorant_Garamond','Noto_Serif_KR',serif]" style={{ fontSize: "1.2rem", fontWeight: 700, color: card.accent }}>{card.era}</p>
                    </div>
                    <p className="text-[#2a2a2a] mb-3" style={{ fontSize: "0.88rem", fontWeight: 600, lineHeight: 1.4 }}>{card.title}</p>
                    <ul className="space-y-1.5">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[#888]" style={{ fontSize: "0.78rem" }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: card.accent, opacity: 0.6 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ═══ Official Docs — Split into 3 categories ═══ */}
            <motion.div variants={fadeUp} className="text-center mt-8 mb-6" id="section-records">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full mb-4 border border-[#f0ebe3]">
                <span style={{ fontSize: "0.8rem" }}>📜</span>
                <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>OFFICIAL RECORDS</span>
              </div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600 }}>공식 기록 아카이브</h2>
            </motion.div>

            {/* Category: 특허 */}
            <motion.div variants={fadeUp} className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center" style={{ fontSize: "1rem" }}>📋</span>
                <h3 className="text-[#2a2a2a]" style={{ fontSize: "1.05rem", fontWeight: 600 }}>특허</h3>
                <div className="flex-1 h-[1px] bg-[#f0ebe3] ml-2" />
              </div>
              <DocGrid docs={patentDocs} accent="#6C5CE7" />
            </motion.div>

            {/* Category: 협약 + 인증 — side by side */}
            <motion.div variants={fadeUp} className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center" style={{ fontSize: "1rem" }}>🤝</span>
                <h3 className="text-[#2a2a2a]" style={{ fontSize: "1.05rem", fontWeight: 600 }}>협약 & 인증</h3>
                <div className="flex-1 h-[1px] bg-[#f0ebe3] ml-2" />
              </div>
              <DocGrid docs={[...mouDocs, ...certDocs]} accent="#c9a96e" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Global Partnerships */}
      <section id="section-partners" className="py-14 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5efe6] rounded-full mb-4">
                <span style={{ fontSize: "0.8rem" }}>🤝</span>
                <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>GLOBAL PARTNERSHIPS</span>
              </div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", fontWeight: 600 }}>글로벌 산학협력 현장 🌏</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { src: universityGroupImg, label: "글로벌 대학 협력", sub: "국제 교육 파트너십 🎓" },
                { src: ebusImg, label: "CCCD-EBUS 한국 아카데미", sub: "미국대학 학점연계 협약식 📝" },
                { src: yonseiIcsImg, label: "연세대 × ICS School", sub: "글로벌 영어캠프 협약식 🤝" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -4 }} className="relative rounded-2xl overflow-hidden group shadow-sm">
                  <img src={item.src} alt={item.label} className="w-full h-[230px] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white" style={{ fontSize: "0.95rem", fontWeight: 600 }}>{item.label}</p>
                    <p className="text-white/60 mt-0.5" style={{ fontSize: "0.78rem" }}>{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Philosophy */}
      <section id="section-philosophy" className="py-16 px-6 lg:px-12 bg-gradient-to-br from-[#faf7f2] to-[#f5efe6] scroll-mt-[130px]">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full mb-6 border border-[#f0ebe3]">
                <span style={{ fontSize: "0.8rem" }}>💭</span>
                <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>BUSINESS PHILOSOPHY</span>
              </div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a] mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 600, lineHeight: 1.4 }}>
                기술보다 중요한 것은<br />
                <span className="text-[#c9a96e]">사람을 향한 교육의 진심</span>입니다 💛
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mx-auto my-6" />
              <p className="text-[#888] leading-relaxed mb-4" style={{ fontSize: "1rem" }}>
                언어는 도구이자 다리이고,<br />
                나는 그 다리 위에 따뜻한 길을 만들고 싶었습니다. 🌉
              </p>
              <p className="text-[#c9a96e] italic font-['Cormorant_Garamond','Noto_Serif_KR',serif]" style={{ fontSize: "0.9rem" }}>
                – Jinny Park ✨
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Archive */}
      <section id="section-videos" className="py-14 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5efe6] rounded-full mb-4">
                <Play size={14} className="text-[#c9a96e]" />
                <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>VIDEO ARCHIVE</span>
              </div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a] mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600 }}>경력 발자취 영상 아카이브 🎬</h2>
              <p className="text-[#bbb]" style={{ fontSize: "0.88rem" }}>27년간의 여정을 담은 소중한 순간들</p>
            </motion.div>

            {/* Video Grid — 4x2 layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "국제회의 통역 현장", desc: "글로벌 컨퍼런스 통역 실황 🌍", thumb: videoGalleryImg },
                { title: "한글무능력 특강", desc: "한글 능력 향상 전문 교육 📝", thumb: videoGalleryImg },
                { title: "한국어능력 특강", desc: "한국어 구사 능력 평가 시스템 🇰🇷", thumb: videoGalleryImg },
                { title: "대표 인사말", desc: "비전과 미래를 향한 메시지 💌", thumb: videoGalleryImg },
                { title: "대회 수습 준공식", desc: "프로젝트 완료 및 준공 행사 🏆", thumb: videoGalleryImg },
                { title: "홍보인력 특강", desc: "전문 인력 양성 교육 프로그램 📢", thumb: videoGalleryImg },
                { title: "아랍인 대상 특강", desc: "외국인 학습자 특별 교육 🌏", thumb: videoGalleryImg },
                { title: "능력 평가 시스템", desc: "전문성 검증 및 인증 절차 ✅", thumb: videoGalleryImg },
              ].map((video, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -4 }} className="group relative bg-white rounded-2xl overflow-hidden border border-[#f0ebe3] shadow-sm hover:shadow-lg transition-all">
                  {/* Thumbnail */}
                  <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-[#f5efe6] to-[#faf7f2]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={24} className="text-[#c9a96e] ml-1" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-full text-white/90 border border-white/20" style={{ fontSize: "0.65rem", fontWeight: 600 }}>📹 영상</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-[#2a2a2a] mb-1.5" style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.4 }}>{video.title}</h3>
                    <p className="text-[#999] flex items-center gap-1.5" style={{ fontSize: "0.78rem" }}>
                      <span className="w-1 h-1 rounded-full bg-[#c9a96e] inline-block" />
                      {video.desc}
                    </p>
                  </div>

                  {/* Upload area (placeholder) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#c9a96e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              ))}
            </div>

            {/* Upload instruction */}
            <motion.div variants={fadeUp} className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#f5efe6] rounded-full border border-[#f0ebe3]">
                <Upload size={16} className="text-[#c9a96e]" />
                <span className="text-[#888]" style={{ fontSize: "0.82rem" }}>영상 파일을 업로드하여 아카이브를 완성하세요</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}