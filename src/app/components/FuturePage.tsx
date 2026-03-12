import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import volunteerImg from "figma:asset/78614baa4f2f79a335e929adb5327ea604389efa.png";
import { ChevronRight, Sparkles, Users, Heart, Zap } from "lucide-react";
import { NavLink } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const futureSections = [
  { id: "vision", label: "비전" },
  { id: "nanum", label: "나눔 프로젝트" },
  { id: "talent", label: "인재 육성" },
  { id: "volunteer", label: "봉사 이야기" },
  { id: "advice", label: "조언·버킷리스트" },
];

const talentProjects = [
  { emoji: "🤖", title: "AI 기반 자격 인증 시스템", desc: "미래를 위한 혁신적 인증 체계", gradient: "from-cyan-100/60 to-blue-100/60" },
  { emoji: "🔗", title: "전문가 매칭 플랫폼", desc: "인재와 기회를 연결하는 시스템", gradient: "from-violet-100/60 to-purple-100/60" },
  { emoji: "🌱", title: "지식 생태계 구축", desc: "퇴직 전문가와 청년을 연결", gradient: "from-emerald-100/60 to-green-100/60" },
  { emoji: "⚖️", title: "AI와 인간 전문성의 조화", desc: "기술과 사람의 아름다운 균형", gradient: "from-amber-100/60 to-yellow-100/60" },
];

const volunteerStories = [
  {
    emoji: "🌍", title: "해외 교육 봉사",
    desc: "네팔, 캄보디아 등 교육 인프라가 부족한 지역에서 현지 학생들과 함께한 교육 나눔. 힌말라야 산기슭의 작은 학교에서 아이들에게 영어를 가르치며, 교육의 진정한 의미를 깨달았습니다. 언어가 통하지 않아도 마음은 통했고, 그곳 아이들의 순수한 눈빛 속에서 제가 더 많은 것을 배웠습니다.",
    detail: "네팔과 캄보디아의 오지 마을을 방문하여 매년 2주간 집중 교육 프로그램을 운영합니다. 교과서와 학용품을 전달하고, 현지 교사들과 협력하여 지속 가능한 교육 시스템을 구축하는 것이 목표입니다.",
    highlight: "네팔 · 캄보디아 · 동남아시아",
    img: "https://images.unsplash.com/photo-1764738130385-182c58353131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGRldmVsb3BpbmclMjBjb3VudHJ5JTIwc2Nob29sfGVufDF8fHx8MTc3Mjc5MzQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    emoji: "🏤", title: "국제행사 통역 봉사",
    desc: "APEC, 아시안게임 등 대규모 국제행사에서 통역 봉사로 한국의 위상을 높였습니다. 수백 명의 외국인 참가자들과 소통하며, 언어가 마음을 연결하는 다리임을 매번 확인합니다. 문화와 언어의 차이를 넘어 진정한 소통이 이루어지는 순간, 통역이란 단순한 언어 변환이 아니라 마음과 마음을 잇는 일임을 깨닫습니다.",
    detail: "올림픽, 세계박람회, G20 정상회의 등 국제적 규모의 행사에서 10년 이상 통역 봉사를 해왔습니다. 동시통역, 순차통역, 에스코트 통역 등 다양한 형태로 국가 간 소통에 기여하고 있습니다.",
    highlight: "APEC · 아시안게임 · 국제회의",
    img: "https://images.unsplash.com/photo-1662702933459-eeb71db82f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwY29uZmVyZW5jZSUyMGludGVycHJldGVyJTIwdHJhbnNsYXRpb258ZW58MXx8fHwxNzcyNzkwNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    emoji: "👥", title: "통역사절단 구성 및 운영",
    desc: "전문 통역 인력을 체계적으로 모집·교육하여 재능 나눔 문화를 확산했습니다. 매년 200명 이상의 통역 봉사자를 교육하고 국내외 행사에 파견합니다. 단순히 통역 기술만 가르치는 것이 아니라, 봉사의 정신과 문화적 감수성, 그리고 책임감을 함께 전달하는 것이 저의 사명입니다.",
    detail: "체계적인 교육 커리큘럼을 개발하여 초급부터 고급까지 단계별 훈련 프로그램을 운영합니다. 실전 경험을 쌓을 수 있도록 멘토링 시스템을 도입하고, 우수 봉사자에게는 국제 행사 참여 기회를 제공합니다.",
    highlight: "전문 인력 양성 · 200명+ 배출",
    img: "https://images.unsplash.com/photo-1618173887111-3ecfc91c41b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JpbmclMjB3b3Jrc2hvcCUyMHBlb3BsZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3Mjc5MzQ3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    emoji: "❤️", title: "소외 지역 재능 나눔",
    desc: "국내외 소외 지역에서 전문성 기반 따뜻한 재능 나눔을 실천합니다. 도서 지역 학교 방문, 저소득층 자녀 멘토링, 시니어 디지털 교육 등을 진행합니다. 작은 섬마을의 학생들에게 영어를 가르치고, 어르신들께 스마트폰 사용법을 알려드리며, 저는 오히려 삶의 진정한 가치를 배웁니다.",
    detail: "월 2회 정기적으로 소외 지역을 방문하여 맞춤형 교육 프로그램을 운영합니다. 지역 특성에 맞는 교육 콘텐츠를 개발하고, 지속 가능한 지원 체계를 구축하여 일회성이 아닌 장기적 파트너십을 유지합니다.",
    highlight: "국내외 소외 지역 · 정기 방문",
    img: "https://images.unsplash.com/photo-1562709911-a355229de124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwaGVscGluZyUyMGVsZGVybHl8ZW58MXx8fHwxNzcyNzkzNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const bucketList = [
  { icon: "🌍", text: "전 세계에서 한 달 살기", gradient: "from-blue-50 to-sky-100", border: "border-blue-200/50" },
  { icon: "💪", text: "건강하게 120세까지", gradient: "from-green-50 to-emerald-100", border: "border-green-200/50" },
  { icon: "🙏", text: "하나님, 가족, 친구에 집중", gradient: "from-violet-50 to-purple-100", border: "border-violet-200/50" },
  { icon: "✨", text: "모든 순간에 감사하기", gradient: "from-amber-50 to-yellow-100", border: "border-amber-200/50" },
  { icon: "🌱", text: "자연과 배움 속에서 살기", gradient: "from-teal-50 to-cyan-100", border: "border-teal-200/50" },
  { icon: "💼", text: "85세까지 일하기", gradient: "from-rose-50 to-pink-100", border: "border-rose-200/50" },
];

const lifeAdvice = [
  {
    title: "당신의 강점은?",
    emoji: "💪",
    content: [
      "단점을 고치느라 지치지 마세요.",
      "이미 잘하는 것을 더 빛나게 ✨",
      "남과 비교하지 말고, 어제의 나와 비교하세요.",
      "강점은 반복할수록 날카로워집니다 🔥",
    ],
    gradient: "from-blue-100/60 to-indigo-100/60",
  },
  {
    title: "하고도, 안 하고도 후회?",
    emoji: "🤔",
    content: [
      "마음이 간다면, 해보세요 🔥",
      "삶은 짧고, 기회는 다시 안 와요.",
      "실패해도 괜찮아요. 후회보다 낫잖아요.",
      "용기 내는 순간이 인생의 터닝포인트 🎯",
    ],
    gradient: "from-orange-100/60 to-amber-100/60",
  },
  {
    title: "오늘을 살아보세요",
    emoji: "🌸",
    content: [
      "행복은 미루는 게 아니에요.",
      "작고 평범한 것에 행복이 숨어 있어요 💛",
      "지금 이 순간이 가장 젊은 날이에요.",
      "오늘 하루, 감사할 일 3가지를 적어보세요 📝",
    ],
    gradient: "from-green-100/60 to-emerald-100/60",
  },
  {
    title: "관계의 힘을 믿으세요",
    emoji: "🤝",
    content: [
      "혼자 빨리 가기보단, 함께 멀리 가세요.",
      "진심은 반드시 통합니다 💌",
      "좋은 사람 곁에 있으면 나도 좋아져요.",
      "인연을 소중히 — 그것이 가장 큰 자산 ✨",
    ],
    gradient: "from-purple-100/60 to-pink-100/60",
  },
  {
    title: "건강이 모든 것의 기본",
    emoji: "🏃",
    content: [
      "몸이 건강해야 꿈도 꿀 수 있어요.",
      "매일 30분, 나를 위한 시간을 투자하세요 🧘",
      "잠을 줄이지 마세요 — 회복이 성장입니다.",
      "좋은 음식, 좋은 생각, 좋은 습관 💚",
    ],
    gradient: "from-teal-100/60 to-cyan-100/60",
  },
  {
    title: "배움을 멈추지 마세요",
    emoji: "📚",
    content: [
      "나이는 숫자일 뿐, 배움엔 끝이 없어요.",
      "호기심이 당신을 젊게 합니다 🌟",
      "새로운 분야에 도전하면 뇌가 춤춰요 🧠",
      "책 한 권이 인생을 바꿀 수 있어요 📖",
    ],
    gradient: "from-rose-100/60 to-orange-100/60",
  },
];

export default function FuturePage() {
  const recruitedCount = 847;
  const goalCount = 1000;
  const remaining = goalCount - recruitedCount;

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[480px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://cdn.imweb.me/thumbnail/20250430/085d276844895.jpg" alt="Future hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/75" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 pt-24 pb-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[800px]">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-xl rounded-full mb-5 border border-white/15">
              <span>🌍</span>
              <span className="text-white/80" style={{ fontSize: "0.82rem" }}>Future Vision</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1.2 }}>
              세상을 향한 따뜻한 시선,<br />함께 그리는 <span className="bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B] bg-clip-text text-transparent">내일</span> ✨
            </motion.h1>

            {/* 1,000명 Vision — overlaid on hero */}
            <motion.div variants={fadeUp} className="max-w-[600px] mx-auto bg-black/25 backdrop-blur-md rounded-2xl border border-white/10 py-6 px-8">
              <p className="text-white/50 mb-1" style={{ fontSize: "0.88rem", fontWeight: 600 }}>"세상을 바꾸는"</p>
              <p className="bg-gradient-to-r from-[#FFD93D] via-[#FF6B6B] to-[#FFD93D] bg-clip-text text-transparent font-['Cormorant_Garamond','Noto_Serif_KR',serif]" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 700 }}>
                1,000명의 전문가와 함께
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap mt-4">
                {["행동으로 🔥", "돈으로 💰", "마음으로 💛"].map((word, i) => (
                  <span key={i} className="px-3.5 py-1.5 bg-white/8 border border-white/15 rounded-full text-white/80" style={{ fontSize: "0.78rem" }}>{word}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Link Bar */}
      <div className="sticky top-[68px] z-40 bg-white/90 backdrop-blur-xl border-b border-[#f0ebe3]/50 shadow-sm">
        <div className="max-w-[1100px] mx-auto px-6 py-3">
          <div className="flex gap-1.5 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {futureSections.map(sec => (
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

      {/* ═══ 나눔 프로젝트 — 1000명 모집 강력 어필 ═══ */}
      <section id="section-nanum" className="py-16 px-6 lg:px-12 bg-gradient-to-br from-[#1a1a2e] via-[#2a2a3e] to-[#1a1a2e] scroll-mt-[130px]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {/* Section header */}
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full mb-5 border border-white/10">
                <Heart size={14} className="text-[#FF6B6B]" />
                <span className="text-white/70" style={{ fontSize: "0.82rem", fontWeight: 600 }}>NOBLESSE OBLIGE PROJECT</span>
              </div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white mb-3" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 600 }}>
                저와 함께 <span className="bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B] bg-clip-text text-transparent">1,000명</span>의 전문가를 모집합니다 🔥
              </h2>
              <p className="text-white/50 max-w-[600px] mx-auto" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                재능을 나누는 기회, 가치를 창출하는 공헌
              </p>
            </motion.div>

            {/* Big CTA card */}
            <motion.div variants={fadeUp} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#c9a96e]/20 via-[#2a2a3e] to-[#FF6B6B]/10 border border-[#c9a96e]/20 p-8 md:p-12 mb-8">
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#FFD93D]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FF6B6B]/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFD93D]/10 rounded-full mb-5 border border-[#FFD93D]/20">
                    <Sparkles size={12} className="text-[#FFD93D]" />
                    <span className="text-[#FFD93D]" style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em" }}>RECRUITING NOW</span>
                  </div>
                  <h3 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white mb-4" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 700, lineHeight: 1.4 }}>
                    상위 1% 전문가들과 함께 만드는<br />
                    <span className="text-[#c9a96e]">'노블레스 오블리주 실천 그룹'</span>
                  </h3>
                  <p className="text-white/60 mb-4" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
                    단순 기부를 넘어 <span className="text-white/90">참여형 사회 공헌 프로젝트</span>에 함께하시죠.
                    가장 귀한 것은 <span className="text-[#FFD93D]">'함께 성장할 수 있는 기회'</span>입니다.
                  </p>
                  <div className="space-y-2 mb-6">
                    {[
                      { icon: "🔥", text: "행동으로 — 전문 지식과 재능을 현장에서 나눕니다" },
                      { icon: "💰", text: "돈으로 — 소외 계층 교육 기금에 함께합니다" },
                      { icon: "💛", text: "마음으로 — 멘토링과 상담으로 따뜻한 영향력을" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                        <p className="text-white/70" style={{ fontSize: "0.82rem", lineHeight: 1.5 }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress counter */}
                <div className="text-center">
                  <div className="bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                    <p className="text-white/40 mb-3" style={{ fontSize: "0.78rem", fontWeight: 600 }}>현재 모집 현황</p>
                    <div className="flex items-end justify-center gap-1 mb-2">
                      <span className="bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B] bg-clip-text text-transparent font-['Cormorant_Garamond',serif]" style={{ fontSize: "4rem", fontWeight: 800, lineHeight: 1 }}>{recruitedCount}</span>
                      <span className="text-white/30 mb-2" style={{ fontSize: "1.2rem" }}>/ {goalCount}명</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-white/10 rounded-full h-3 mb-4 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(recruitedCount / goalCount) * 100}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#FFD93D] to-[#FF6B6B] rounded-full relative"
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg shadow-[#FF6B6B]" />
                      </motion.div>
                    </div>

                    <div className="bg-gradient-to-r from-[#FF6B6B]/10 to-[#FFD93D]/10 rounded-2xl p-4 border border-[#FF6B6B]/10">
                      <p className="text-white/90 mb-1" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                        안남았다고 정말 작성하고 싶어요~ 🥹
                      </p>
                      <p className="text-white/50" style={{ fontSize: "0.75rem" }}>
                        마감이 얼마 남지 않았어요 — 서두르세요! ⏰
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2 justify-center">
                      {["CEO 🏢", "교수 📚", "의사 🏥", "변호사 ⚖️", "예술가 🎨"].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60" style={{ fontSize: "0.7rem" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div variants={fadeUp} className="text-center py-4">
              <p className="text-white/30 italic font-['Cormorant_Garamond','Noto_Serif_KR',serif]" style={{ fontSize: "1rem" }}>
                "나눔은 줄어드는 것이 아니라, 함께 커지는 것입니다" ✨
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 인재 육성 — Separate section ═══ */}
      <section id="section-talent" className="py-14 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f5efe6] rounded-full mb-4">
                <Zap size={14} className="text-[#c9a96e]" />
                <span className="text-[#8b6914]" style={{ fontSize: "0.8rem", fontWeight: 600 }}>TALENT DEVELOPMENT</span>
              </div>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600 }}>인재 육성 프로젝트 🌟</h2>
              <p className="text-[#bbb] max-w-[500px] mx-auto mt-2" style={{ fontSize: "0.88rem" }}>
                미래를 이끌 전문가를 양성하고, 기술과 사람의 조화를 만들어갑니다
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4">
              {talentProjects.map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -3 }} className={`flex items-start gap-4 p-6 bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl border border-white/40`}>
                  <span className="shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm" style={{ fontSize: "1.4rem" }}>{item.emoji}</span>
                  <div>
                    <p className="text-[#2a2a2a] mb-1" style={{ fontSize: "1rem", fontWeight: 600 }}>{item.title}</p>
                    <p className="text-[#999]" style={{ fontSize: "0.82rem" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 봉사 이야기 — Taller cards ═══ */}
      <section id="section-volunteer" className="py-14 px-6 lg:px-12 bg-gradient-to-br from-[#faf7f2] to-[#f5efe6] scroll-mt-[130px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600 }}>
                봉사 이야기 ✨
              </h2>
              <p className="text-[#bbb] max-w-[500px] mx-auto mt-2" style={{ fontSize: "0.88rem" }}>
                전문성과 지혜를 사람들을 위해 나눕니다 💛
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {volunteerStories.map((story, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl overflow-hidden border border-[#f0ebe3] shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-[260px] overflow-hidden">
                    <ImageWithFallback src={story.img} alt={story.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-md" style={{ fontSize: "1.2rem" }}>{story.emoji}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-block px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 border border-white/20" style={{ fontSize: "0.65rem", fontWeight: 600 }}>{story.highlight}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#2a2a2a] mb-2.5" style={{ fontSize: "0.95rem", fontWeight: 600 }}>{story.title}</h3>
                    <p className="text-[#888] mb-4" style={{ fontSize: "0.78rem", lineHeight: 1.7 }}>{story.desc}</p>
                    <div className="pt-3 border-t border-[#f0ebe3]">
                      <p className="text-[#aaa] italic" style={{ fontSize: "0.75rem", lineHeight: 1.7 }}>{story.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ Life Advice — 6 cards (2x content) ═══ */}
      <section id="section-advice" className="py-14 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-8">
              <span className="inline-block mb-2" style={{ fontSize: "1.8rem" }}>📜</span>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600 }}>나를 사랑하는 사람들에게 💌</h2>
              <p className="text-[#bbb] max-w-[500px] mx-auto mt-2" style={{ fontSize: "0.88rem" }}>
                27년간 깨달은, 인생에서 정말 중요한 것들
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {lifeAdvice.map((advice, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -3 }} className={`bg-gradient-to-br ${advice.gradient} backdrop-blur-sm rounded-2xl p-6 border border-white/40`}>
                  <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4" style={{ fontSize: "1.2rem" }}>{advice.emoji}</span>
                  <h3 className="text-[#2a2a2a] mb-3" style={{ fontSize: "1rem", fontWeight: 600 }}>{advice.title}</h3>
                  <div className="space-y-2">
                    {advice.content.map((line, j) => (
                      <p key={j} className="text-[#555]" style={{ fontSize: "0.84rem", lineHeight: 1.5 }}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bucket List */}
            <motion.div variants={fadeUp} className="text-center mb-6">
              <span className="inline-block mb-2" style={{ fontSize: "1.8rem" }}>🪣</span>
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", fontWeight: 600 }}>
                Jinny Park의 버킷리스트 ✨
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {bucketList.map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -3, scale: 1.02 }} className={`flex items-center gap-3 p-5 bg-gradient-to-br ${item.gradient} rounded-2xl border ${item.border} shadow-sm hover:shadow-md transition-all`}>
                  <span className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center shadow-sm shrink-0" style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                  <p className="text-[#444]" style={{ fontSize: "0.88rem", fontWeight: 500 }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-8 text-center">
              <NavLink to="/story" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2a2a2a] to-[#1a1a2e] hover:from-[#444] hover:to-[#2a2a2a] text-white px-8 py-3.5 rounded-full transition-all shadow-lg shadow-black/10" style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                나의 이야기 보기 💬 <ChevronRight size={18} />
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}