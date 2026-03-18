import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronRight, Sparkles, Heart } from "lucide-react";
import { NavLink } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const futureSections = [
  { id: "vision", label: "VISION" },
  { id: "nanum", label: "PROJECT" },
  { id: "talent", label: "TALENT" },
  { id: "volunteer", label: "VOLUNTEER" },
  { id: "advice", label: "ADVICE" },
];

const talentProjects = [
  { title: "AI 기반 자격 인증 시스템", desc: "미래를 위한 혁신적 인증 체계" },
  { title: "전문가 매칭 플랫폼", desc: "인재와 기회를 연결하는 시스템" },
  { title: "지식 생태계 구축", desc: "퇴직 전문가와 청년을 연결" },
  { title: "AI와 인간 전문성의 조화", desc: "기술과 사람의 아름다운 균형" },
];

const volunteerStories = [
  {
    title: "해외 교육 봉사",
    desc: "네팔, 캄보디아 등 교육 인프라가 부족한 지역에서 현지 학생들과 함께한 교육 나눔. 히말라야 산기슭의 작은 학교에서 아이들에게 영어를 가르치며, 교육의 진정한 의미를 깨달았습니다. 언어가 통하지 않아도 마음은 통했고, 그곳 아이들의 순수한 눈빛 속에서 제가 더 많은 것을 배웠습니다.",
    detail: "네팔과 캄보디아의 오지 마을을 방문하여 매년 2주간 집중 교육 프로그램을 운영합니다. 교과서와 학용품을 전달하고, 현지 교사들과 협력하여 지속 가능한 교육 시스템을 구축하는 것이 목표입니다.",
    highlight: "NEPAL · CAMBODIA",
    img: "https://images.unsplash.com/photo-1764738130385-182c58353131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGRldmVsb3BpbmclMjBjb3VudHJ5JTIwc2Nob29sfGVufDF8fHx8MTc3Mjc5MzQ3nww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "국제행사 통역 봉사",
    desc: "APEC, 아시안게임 등 대규모 국제행사에서 통역 봉사로 한국의 위상을 높였습니다. 수백 명의 외국인 참가자들과 소통하며, 언어가 마음을 연결하는 다리임을 매번 확인합니다. 문화와 언어의 차이를 넘어 진정한 소통이 이루어지는 순간, 통역이란 단순한 언어 변환이 아니라 마음과 마음을 잇는 일임을 깨닫습니다.",
    detail: "올림픽, 세계박람회, G20 정상회의 등 국제적 규모의 행사에서 10년 이상 통역 봉사를 해왔습니다. 동시통역, 순차통역, 에스코트 통역 등 다양한 형태로 국가 간 소통에 기여하고 있습니다.",
    highlight: "APEC · ASIAN GAMES",
    img: "https://images.unsplash.com/photo-1662702933459-eeb71db82f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwY29uZmVyZW5jZSUyMGludGVycHJldGVyJTIwdHJhbnNsYXRpb258ZW58MXx8fHwxNzcyNzkwNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "통역사절단 구성 및 운영",
    desc: "전문 통역 인력을 체계적으로 모집·교육하여 재능 나눔 문화를 확산했습니다. 매년 200명 이상의 통역 봉사자를 교육하고 국내외 행사에 파견합니다. 단순히 통역 기술만 가르치는 것이 아니라, 봉사의 정신과 문화적 감수성, 그리고 책임감을 함께 전달하는 것이 저의 사명입니다.",
    detail: "체계적인 교육 커리큘럼을 개발하여 초급부터 고급까지 단계별 훈련 프로그램을 운영합니다. 실전 경험을 쌓을 수 있도록 멘토링 시스템을 도입하고, 우수 봉사자에게는 국제 행사 참여 기회를 제공합니다.",
    highlight: "200+ GRADUATES",
    img: "https://images.unsplash.com/photo-1618173887111-3ecfc91c41b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JpbmclMjB3b3Jrc2hvcCUyMHBlb3BsZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3Mjc5MzQ3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "소외 지역 재능 나눔",
    desc: "국내외 소외 지역에서 전문성 기반 따뜻한 재능 나눔을 실천합니다. 도서 지역 학교 방문, 저소득층 자녀 멘토링, 시니어 디지털 교육 등을 진행합니다. 작은 섬마을의 학생들에게 영어를 가르치고, 어르신들께 스마트폰 사용법을 알려드리며, 저는 오히려 삶의 진정한 가치를 배웁니다.",
    detail: "월 2회 정기적으로 소외 지역을 방문하여 맞춤형 교육 프로그램을 운영합니다. 지역 특성에 맞는 교육 콘텐츠를 개발하고, 지속 가능한 지원 체계를 구축하여 일회성이 아닌 장기적 파트너십을 유지합니다.",
    highlight: "LOCAL COMMUNITIES",
    img: "https://images.unsplash.com/photo-1562709911-a355229de124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwaGVscGluZyUyMGVsZGVybHl8ZW58MXx8fHwxNzcyNzkzNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const bucketList = [
  { text: "세상은 넓고 갈 곳은 많다", sub: "전 세계에서 한 달 살기" },
  { text: "건강하게 120세까지 살기", sub: "꾸준한 운동과 명상" },
  { text: "하나님, 가족, 친구와 함께", sub: "소중한 것에 집중" },
  { text: "모든 순간에 감사하기", sub: "작은 것에서 행복을" },
  { text: "자연과 배움 속에서 살기", sub: "성장하는 삶" },
  { text: "85세까지 일하기", sub: "일하는 것이 곧 살아있는 것" },
];

const lifeAdvice = [
  {
    title: "당신의 강점은?",
    content: [
      "단점을 고치느라 지치지 마세요.",
      "이미 잘하는 것을 더 빛나게",
      "남과 비교하지 말고, 어제의 나와 비교하세요.",
      "강점은 반복할수록 날카로워집니다",
    ],
  },
  {
    title: "하고도, 안 하고도 후회?",
    content: [
      "마음이 간다면, 해보세요",
      "삶은 짧고, 기회는 다시 안 와요.",
      "실패해도 괜찮아요. 후회보다 낫잖아요.",
      "용기 내는 순간이 인생의 터닝포인트",
    ],
  },
  {
    title: "오늘을 살아보세요",
    content: [
      "행복은 미루는 게 아니에요.",
      "작고 평범한 것에 행복이 숨어 있어요",
      "지금 이 순간이 가장 젊은 날이에요.",
      "오늘 하루, 감사할 일 3가지를 적어보세요",
    ],
  },
  {
    title: "관계의 힘을 믿으세요",
    content: [
      "혼자 빨리 가기보단, 함께 멀리 가세요.",
      "진심은 반드시 통합니다",
      "좋은 사람 곁에 있으면 나도 좋아져요.",
      "인연을 소중히 — 그것이 가장 큰 자산",
    ],
  },
  {
    title: "건강이 모든 것의 기본",
    content: [
      "몸이 건강해야 꿈도 꿀 수 있어요.",
      "매일 30분, 나를 위한 시간을 투자하세요",
      "잠을 줄이지 마세요 — 회복이 성장입니다.",
      "좋은 음식, 좋은 생각, 좋은 습관",
    ],
  },
  {
    title: "배움을 멈추지 마세요",
    content: [
      "나이는 숫자일 뿐, 배움엔 끝이 없어요.",
      "호기심이 당신을 젊게 합니다",
      "새로운 분야에 도전하면 뇌가 춤춰요",
      "책 한 권이 인생을 바꿀 수 있어요",
    ],
  },
];

export default function FuturePage() {
  const recruitedCount = 847;
  const goalCount = 1000;

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white/80">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://cdn.imweb.me/thumbnail/20250430/085d276844895.jpg" alt="Future hero" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030213]/80 via-[#030213]/40 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[800px]">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-2xl rounded-full mb-8 border border-white/10">
              <span className="text-[#c9a96e] font-['Montserrat'] tracking-[0.4em] font-bold uppercase text-[10px]">Future Vision</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white mb-10" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500, lineHeight: 1.2 }}>
              세상을 향한 따뜻한 시선,<br />함께 그리는 <span className="text-[#c9a96e] italic">내일</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="max-w-[600px] bg-white/5 backdrop-blur-3xl rounded-[32px] border border-white/10 p-10 shadow-2xl">
              <p className="text-white/30 mb-4 font-['Montserrat'] tracking-widest font-bold uppercase" style={{ fontSize: "0.75rem" }}>Our Goal</p>
              <p className="text-[#c9a96e] font-['Cormorant_Garamond','Noto_Serif_KR',serif] mb-8" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 400 }}>
                1,000명의 전문가와 함께
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                {["행동으로", "돈으로", "마음으로"].map((word, i) => (
                  <span key={i} className="text-white/60 font-['Noto_Serif_KR',serif] italic" style={{ fontSize: "1.1rem" }}>{word}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Link Bar */}
      <div className="sticky top-[80px] z-40 bg-[#030213]/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-24 py-4">
          <div className="flex gap-4 overflow-x-auto justify-center" style={{ scrollbarWidth: "none" }}>
            {futureSections.map(sec => (
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

      {/* 나눔 프로젝트 */}
      <section id="section-nanum" className="py-24 px-6 lg:px-12 bg-[#120f0d] scroll-mt-[130px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Project Nanum</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-20">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 500 }}>
                1,000명의 전문가를 모집합니다
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="relative overflow-hidden rounded-[48px] bg-white/5 border border-white/10 p-12 lg:p-20 shadow-2xl backdrop-blur-md">
              <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h3 className="font-['Noto_Serif_KR',serif] text-[#c9a96e] mb-10 italic" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, lineHeight: 1.4 }}>
                    상위 1% 전문가들과 함께 만드는<br />
                    노블레스 오블리주 실천 그룹
                  </h3>
                  <p className="text-white/40 mb-12 leading-[2.2] font-light" style={{ fontSize: "1.1rem" }}>
                    단순 기부를 넘어 참여형 사회 공헌 프로젝트에 함께하시죠. 가장 귀한 것은 함께 성장할 수 있는 기회입니다.
                  </p>
                  <div className="space-y-6">
                    {[
                      { text: "행동으로 — 전문 지식과 재능을 현장에서 나눕니다" },
                      { text: "돈으로 — 소외 계층 교육 기금에 함께합니다" },
                      { text: "마음으로 — 멘토링과 상담으로 따뜻한 영향력을" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9a96e] shrink-0" />
                        <p className="text-white/60 font-light" style={{ fontSize: "1rem" }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-black/40 backdrop-blur-3xl rounded-[40px] border border-white/10 p-16 shadow-2xl">
                    <p className="text-white/20 mb-6 font-['Montserrat'] tracking-widest font-bold uppercase" style={{ fontSize: "0.8rem" }}>Recruitment Status</p>
                    <div className="flex items-baseline justify-center gap-2 mb-6">
                      <span className="text-[#c9a96e] font-['Playfair_Display'] italic" style={{ fontSize: "6rem", fontWeight: 300, lineHeight: 1 }}>{recruitedCount}</span>
                      <span className="text-white/10 font-light" style={{ fontSize: "2rem" }}>/ {goalCount}</span>
                    </div>
                    
                    <div className="w-full bg-white/5 rounded-full h-1 mb-10 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(recruitedCount / goalCount) * 100}%` }}
                        transition={{ duration: 2, ease: "circOut" }}
                        className="h-full bg-[#c9a96e] rounded-full relative shadow-[0_0_20px_rgba(201,169,110,0.5)]"
                      />
                    </div>

                    <p className="text-white/40 italic font-['Noto_Serif_KR',serif]" style={{ fontSize: "1.1rem" }}>
                      "마감이 얼마 남지 않았습니다"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 인재 육성 */}
      <section id="section-talent" className="py-24 px-6 lg:px-12 bg-[#0a0a0a] scroll-mt-[130px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Talent Project</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>인재 육성 프로젝트</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {talentProjects.map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="p-10 bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/10 shadow-xl">
                  <p className="text-white mb-3" style={{ fontSize: "1.2rem", fontWeight: 600 }}>{item.title}</p>
                  <p className="text-white/30 font-light" style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 봉사 이야기 */}
      <section id="section-volunteer" className="py-24 px-6 lg:px-12 bg-[#120f0d] scroll-mt-[130px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Volunteer Stories</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-20">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2.5rem, 4vw, 3rem)", fontWeight: 500 }}>
                봉사 이야기
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {volunteerStories.map((story, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl transition-all"
                >
                  <div className="relative h-[300px] overflow-hidden group">
                    <ImageWithFallback src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-3 py-1 bg-[#c9a96e]/20 backdrop-blur-md rounded-full text-[#c9a96e] border border-[#c9a96e]/30 font-['Montserrat'] font-bold text-[10px] tracking-widest uppercase mb-3">{story.highlight}</span>
                      <h3 className="text-white font-['Noto_Serif_KR',serif]" style={{ fontSize: "1.3rem", fontWeight: 500 }}>{story.title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-white/40 mb-6 leading-relaxed font-light line-clamp-4" style={{ fontSize: "0.85rem" }}>{story.desc}</p>
                    <div className="pt-6 border-t border-white/5">
                      <p className="text-[#c9a96e]/60 italic font-light leading-relaxed" style={{ fontSize: "0.8rem" }}>{story.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Life Advice */}
      <section id="section-advice" className="py-24 px-6 lg:px-12 bg-[#0a0a0a] scroll-mt-[130px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Life Advice</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <motion.div variants={fadeUp} className="text-center mb-20">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>나를 사랑하는 사람들에게</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {lifeAdvice.map((advice, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="bg-white/5 backdrop-blur-xl rounded-[32px] p-10 border border-white/10 shadow-xl">
                  <h3 className="text-[#c9a96e] font-['Montserrat'] tracking-widest font-bold uppercase mb-8" style={{ fontSize: "0.85rem" }}>{advice.title}</h3>
                  <div className="space-y-4">
                    {advice.content.map((line, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-white/20 shrink-0" />
                        <p className="text-white/50 font-light leading-relaxed" style={{ fontSize: "0.95rem" }}>{line}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bucket List */}
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400 }}>
                My Bucket List
              </h2>
              <div className="w-12 h-[1px] bg-[#c9a96e]/30 mx-auto mt-6" />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {bucketList.map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.02 }} className="p-8 bg-white/5 rounded-[32px] border border-white/10 shadow-xl backdrop-blur-md">
                  <p className="text-white mb-2" style={{ fontSize: "1.1rem", fontWeight: 500 }}>{item.text}</p>
                  <p className="text-white/30 font-light" style={{ fontSize: "0.85rem" }}>{item.sub}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-24 text-center">
              <NavLink to="/story" className="group inline-flex items-center gap-4 bg-[#c9a96e] hover:bg-[#b8976a] text-black px-12 py-5 rounded-full transition-all shadow-2xl shadow-[#c9a96e]/20 font-bold tracking-widest uppercase" style={{ fontSize: "0.9rem" }}>
                View Full Story
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}