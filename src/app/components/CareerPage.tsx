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
  { id: "story", label: "STORY" },
  { id: "current", label: "CURRENT" },
  { id: "milestones", label: "MILESTONES" },
  { id: "records", label: "RECORDS" },
  { id: "partners", label: "PARTNERS" },
  { id: "philosophy", label: "PHILOSOPHY" },
  { id: "videos", label: "VIDEOS" },
];

/* ─── Data ─── */
const currentCards = [
  { emoji: "", title: "캘리포니아 국제대학교 (하와이)\n미주 부총장", desc: "글로벌 교육 네트워크", color: "from-white/10 to-white/0", highlight: true },
  { emoji: "", title: "UN 산하 IAEWP 교육위원\n/ 휴텍씨 대표이사", desc: "교육 사업 총괄", color: "from-white/10 to-white/0", highlight: false },
  { emoji: "", title: "국가공인 시험기관\n및 교육기관 운영", desc: "누적 30만+ 응시", color: "from-white/10 to-white/0", highlight: false },
  { emoji: "", title: "4개 법인 + 1개 사단법인\n운영", desc: "교육·기술·국제협력", color: "from-white/10 to-white/0", highlight: false },
  { emoji: "", title: "109개 AI 통번역\n4건 특허 보유", desc: "AI 평가 시스템", color: "from-white/10 to-white/0", highlight: false },
  { emoji: "", title: "(전) ICS 국제학교\n이사장", desc: "글로벌 인재 양성", color: "from-white/10 to-white/0", highlight: false },
];

const careerCards = [
  {
    era: "2022~2026", title: "프롬프트 & AI 언어 자격 시대", emoji: "",
    items: ["프롬프트 전문가 자격증 특허 출원", "AI 기반 통번역 자격제도 확대", "캘리포니아 국제대학교 미주 부총장", "글로벌 협약 및 대학 연계 확대", "109개 AI 통번역 시스템 구축", "4건 특허 보유 (출원 포함)"],
    accent: "#c9a96e",
  },
  {
    era: "2016~2021", title: "AI와 새로운 도전", emoji: "",
    items: ["AI vs 휴먼 번역 대결 진행", "AI 통번역 시스템 시험화", "과학기술부 AI 통번역 민간시험 승인", "신한대 AI 언어기반 산학협력 협약", "민간자격등록증 취득 (번역·통역)"],
    accent: "#c9a96e",
  },
  {
    era: "2006~2015", title: "국제화 & 산학협력", emoji: "",
    items: ["통번역 시험 해외 진출", "IAEWP 교육위원 활동", "ICS 국제학교 이사장", "미국대학 학점연계 'EBUS' 운영", "연세대 × HuTechC 교육 협력 협약", "UN 산하 국제기구 활동 확대"],
    accent: "#c9a96e",
  },
  {
    era: "1999~2005", title: "교육·통번역의 시작", emoji: "",
    items: ["국제통역번역협회 사무총장", "통역번역 시험 제도 도입", "코리아헤럴드 영남 문화센터 운영", "TESOL 교사 2만여 명 배출", "영어교육 체계 수립 및 확산", "국제 통번역 인력 양성 기반 구축"],
    accent: "#c9a96e",
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
              <img src={doc.src} alt={doc.title} className="w-full h-full object-cover object-top blur-[1.5px] opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-white/5" />
              <div className="absolute top-0 left-0 right-0 p-3 pb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white px-2 py-0.5 rounded-full shadow-lg" style={{ fontSize: "0.62rem", fontWeight: 700, backgroundColor: accent }}>{doc.year}</span>
                </div>
                <p className="text-[#2a2a2a] leading-snug font-bold" style={{ fontSize: "0.82rem", textShadow: "0 1px 3px rgba(255,255,255,0.9)" }}>{doc.title}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 to-transparent pt-10 pb-2.5 px-3">
                <p className="text-[#666]" style={{ fontSize: "0.72rem" }}>{doc.sub}</p>
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
    <div className="bg-[#0a0a0a] min-h-screen text-white/80">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://cdn.imweb.me/thumbnail/20250501/a96a5a2df7242.png" alt="Career hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030213]/80 via-[#030213]/40 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[800px]">
            <motion.h1 variants={fadeUp} className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500, lineHeight: 1.2 }}>
              27년 넘는 시간,<br /><span className="text-[#c9a96e] italic">변화의 최전선에서</span> 길을 만들다
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 max-w-[550px] font-light leading-relaxed" style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)" }}>
              언어와 교육, 기술의 융합을 통해 혁신을 이끌고 수많은 이들과 함께 성장해 온 여정
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Link Bar */}
      <div className="sticky top-[80px] z-40 bg-[#030213]/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-24 py-4">
          <div className="flex gap-4 overflow-x-auto justify-center" style={{ scrollbarWidth: "none" }}>
            {careerSections.map(sec => (
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

      {/* Intro */}
      <section id="section-story" className="py-24 px-6 lg:px-12 scroll-mt-[130px] bg-[#0a0a0a]">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Story</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>Jinny Park의 사업 이야기</h2>
              <p className="text-[#c9a96e] font-['Cormorant_Garamond','Noto_Serif_KR',serif] italic tracking-widest uppercase mt-4" style={{ fontSize: "1rem" }}>"교육, 언어, 인공지능의 경계를 허물다"</p>
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/40 leading-[2.2] font-light" style={{ fontSize: "1.1rem" }}>
              1999년부터 27년이 넘는 시간, 언어를 통한 교육의 힘을 믿고 시작한 길. 그 길 위에서 나는, 언어와 기술, 사람과 사람을 연결해왔습니다.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Current Activities */}
      <section id="section-current" className="py-24 px-6 lg:px-12 bg-[#120f0d] scroll-mt-[130px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Current Status</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>현재 활동 요약</h2>
            </motion.div>

            {/* Hero photo banner */}
            <motion.div variants={fadeUp} className="mb-12 rounded-[40px] overflow-hidden shadow-2xl relative border border-white/5">
              <img src={appointmentImg} alt="임명장 수여" className="w-full h-[450px] object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030213] via-[#030213]/40 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full mb-6 border border-white/10">
                  <span className="text-[#c9a96e] font-['Montserrat'] tracking-widest font-bold uppercase" style={{ fontSize: "0.65rem" }}>HIGHLIGHT</span>
                </div>
                <h3 className="text-white font-['Noto_Serif_KR',serif]" style={{ fontSize: "1.8rem", fontWeight: 400, lineHeight: 1.4 }}>
                  캘리포니아 국제대학교 (하와이) 미주 부총장 임명장 수여
                </h3>
              </div>
            </motion.div>

            {/* 6 Activity Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {currentCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group bg-white/5 backdrop-blur-xl rounded-[32px] p-8 border border-white/10 hover:border-[#c9a96e]/30 transition-all shadow-xl"
                >
                  <div className="flex flex-col gap-6">
                    <div>
                      {card.highlight && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c9a96e]/10 rounded-full mb-4 border border-[#c9a96e]/20">
                          <span className="text-[#c9a96e] font-['Montserrat'] font-bold uppercase" style={{ fontSize: "0.6rem", letterSpacing: "0.1em" }}>HIGHLIGHT</span>
                        </div>
                      )}
                      <h3 className="font-['Noto_Serif_KR',serif] text-white whitespace-pre-line leading-relaxed" style={{ fontSize: "1.1rem", fontWeight: 500 }}>
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-white/30 font-light" style={{ fontSize: "0.85rem" }}>
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ═══ Timeline — 4 columns ═══ */}
            <motion.div variants={fadeUp} className="text-center mt-24 mb-16" id="section-milestones">
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
                <div className="h-[1px] w-24 bg-[#c9a96e]" />
                <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Milestones</span>
                <div className="h-[1px] w-24 bg-[#c9a96e]" />
              </motion.div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>연혁</h2>
              <div className="flex items-center justify-center gap-6 mt-8">
                <span className="text-[#c9a96e] font-['Playfair_Display'] italic" style={{ fontSize: "2.2rem", fontWeight: 300 }}>1999</span>
                <div className="w-24 h-[1px] bg-white/10" />
                <span className="text-[#c9a96e] font-['Playfair_Display'] italic" style={{ fontSize: "2.2rem", fontWeight: 300 }}>2026</span>
              </div>
              <p className="text-white/20 mt-4 font-['Montserrat'] uppercase tracking-widest font-bold" style={{ fontSize: "0.7rem" }}>27년의 발자취</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 mb-24">
              {careerCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="bg-white/5 rounded-[32px] p-8 border border-white/10 shadow-xl backdrop-blur-md relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#c9a96e]/30" />
                  <div className="pt-2">
                    <p className="font-['Playfair_Display'] italic text-[#c9a96e] mb-4" style={{ fontSize: "1.5rem", fontWeight: 400 }}>{card.era}</p>
                    <p className="text-white mb-6 leading-relaxed" style={{ fontSize: "1rem", fontWeight: 500 }}>{card.title}</p>
                    <ul className="space-y-3">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/40 leading-relaxed" style={{ fontSize: "0.85rem" }}>
                          <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a96e] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ═══ Official Docs — Split into 3 categories ═══ */}
            <motion.div variants={fadeUp} className="text-center mt-24 mb-16" id="section-records">
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
                <div className="h-[1px] w-24 bg-[#c9a96e]" />
                <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Records Archive</span>
                <div className="h-[1px] w-24 bg-[#c9a96e]" />
              </motion.div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>공식 기록 아카이브</h2>
            </motion.div>

            {/* Category: 특허 */}
            <motion.div variants={fadeUp} className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-white font-['Montserrat'] tracking-widest font-bold uppercase" style={{ fontSize: "0.85rem" }}>특허</h3>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>
              <DocGrid docs={patentDocs} accent="#c9a96e" />
            </motion.div>

            {/* Category: 협약 + 인증 — side by side */}
            <motion.div variants={fadeUp} className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-white font-['Montserrat'] tracking-widest font-bold uppercase" style={{ fontSize: "0.85rem" }}>협약 & 인증</h3>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>
              <DocGrid docs={[...mouDocs, ...certDocs]} accent="#c9a96e" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Global Partnerships */}
      <section id="section-partners" className="py-24 px-6 lg:px-12 bg-[#0a0a0a] scroll-mt-[130px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Partnerships</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>글로벌 산학협력 현장</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { src: universityGroupImg, label: "GLOBAL UNIVERSITY PARTNERSHIP", sub: "국제 교육 파트너십" },
                { src: ebusImg, label: "CCCD-EBUS ACADEMY", sub: "미국대학 학점연계 협약식" },
                { src: yonseiIcsImg, label: "YONSEI × ICS SCHOOL", sub: "글로벌 영어캠프 협약식" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="relative rounded-[32px] overflow-hidden group shadow-2xl border border-white/5">
                  <img src={item.src} alt={item.label} className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030213] via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white font-['Montserrat'] tracking-widest font-bold uppercase mb-2" style={{ fontSize: "0.75rem" }}>{item.label}</p>
                    <p className="text-white/50" style={{ fontSize: "0.85rem" }}>{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Philosophy */}
      <section id="section-philosophy" className="py-32 px-6 lg:px-12 bg-[#120f0d] scroll-mt-[130px]">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-10 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Philosophy</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white mb-10" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.4 }}>
                기술보다 중요한 것은<br />
                <span className="text-[#c9a96e] italic">사람을 향한 교육의 진심</span>입니다
              </h2>
              <div className="w-16 h-[1px] bg-[#c9a96e] mx-auto my-12" />
              <p className="text-white/40 leading-[2.2] mb-12 font-light" style={{ fontSize: "1.2rem" }}>
                언어는 도구이자 다리이고,<br />
                나는 그 다리 위에 따뜻한 길을 만들고 싶었습니다.
              </p>
              <p className="text-[#c9a96e] italic font-['Playfair_Display'] tracking-widest" style={{ fontSize: "1.1rem" }}>
                – Jinny Park
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Archive */}
      <section id="section-videos" className="py-24 px-6 lg:px-12 bg-[#0a0a0a] scroll-mt-[130px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Videos</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>영상 아카이브</h2>
              <p className="text-white/20 font-['Montserrat'] tracking-widest font-bold uppercase" style={{ fontSize: "0.75rem" }}>27년간의 여정을 담은 소중한 순간들</p>
            </motion.div>

            {/* Video Grid — 4x2 layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "국제회의 통역 현장", desc: "글로벌 컨퍼런스 통역 실황", thumb: videoGalleryImg },
                { title: "한글무능력 특강", desc: "한글 능력 향상 전문 교육", thumb: videoGalleryImg },
                { title: "한국어능력 특강", desc: "한국어 구사 능력 평가 시스템", thumb: videoGalleryImg },
                { title: "대표 인사말", desc: "비전과 미래를 향한 메시지", thumb: videoGalleryImg },
                { title: "대회 수습 준공식", desc: "프로젝트 완료 및 준공 행사", thumb: videoGalleryImg },
                { title: "홍보인력 특강", desc: "전문 인력 양성 교육 프로그램", thumb: videoGalleryImg },
                { title: "아랍인 대상 특강", desc: "외국인 학습자 특별 교육", thumb: videoGalleryImg },
                { title: "능력 평가 시스템", desc: "전문성 검증 및 인증 절차", thumb: videoGalleryImg },
              ].map((video, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="group relative bg-white/5 rounded-[32px] overflow-hidden border border-white/10 shadow-xl transition-all">
                  {/* Thumbnail */}
                  <div className="relative h-[220px] overflow-hidden bg-[#1a1714]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play size={28} className="text-[#c9a96e] ml-1" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-8">
                    <h3 className="text-white mb-3" style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.4 }}>{video.title}</h3>
                    <p className="text-white/30 font-light" style={{ fontSize: "0.8rem" }}>{video.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Upload instruction */}
            <motion.div variants={fadeUp} className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                <Upload size={18} className="text-[#c9a96e]" />
                <span className="text-white/40 font-light" style={{ fontSize: "0.85rem" }}>영상 파일을 업로드하여 아카이브를 완성하세요</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}