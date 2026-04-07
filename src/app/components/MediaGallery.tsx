import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

interface MediaCategory {
  id: string;
  label: string;
  emoji: string;
  title: string;
  desc: string;
  featured: string;
  images: { src: string; caption: string }[];
}

const categories: MediaCategory[] = [
  {
    id: "ai", label: "AI 번역 대결", emoji: "",
    title: "AI vs 휴먼 번역의 미래를 논하다",
    desc: "인공지능과 인간 번역가의 대결, 그 역사적 순간을 기록하다",
    featured: "https://cdn.imweb.me/thumbnail/20250428/f7ddcd14959a4.jpg",
    images: [
      { src: "https://cdn.imweb.me/thumbnail/20250428/f059c4f1654d8.jpeg", caption: "AI 번역 대결 현장" },
      { src: "https://cdn.imweb.me/thumbnail/20250428/7a96231ff2593.jpg", caption: "언론 보도" },
      { src: "https://cdn.imweb.me/thumbnail/20250428/52c86bcfd75ca.jpg", caption: "대결 심사 과정" },
      { src: "https://cdn.imweb.me/thumbnail/20250428/c598f799aa329.jpg", caption: "결과 발표" },
      { src: "https://cdn.imweb.me/thumbnail/20250428/d09817b2ac0bd.jpg", caption: "미디어 인터뷰" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/48aa78ac7711e.jpg", caption: "후속 보도" },
    ],
  },
  {
    id: "scholarship", label: "장학금 & 교육", emoji: "",
    title: "함께 성장하는 삶 – 장학금 지급 활동",
    desc: "교육의 기회를 나누고, 인재의 꿈을 응원합니다",
    featured: "https://cdn.imweb.me/thumbnail/20250428/9bd440a75fab2.png",
    images: [
      { src: "https://cdn.imweb.me/thumbnail/20250428/da0c504e05114.png", caption: "장학금 수여식" },
      { src: "https://cdn.imweb.me/thumbnail/20250428/255e87490946b.jpg", caption: "교육 지원 활동" },
    ],
  },
  {
    id: "contest", label: "경연 & 봉사", emoji: "",
    title: "글로벌 인재를 발굴하고 세계로 보내다",
    desc: "2002~2012 선발대회 및 해외 자원봉사 파견 기록",
    featured: "https://cdn.imweb.me/thumbnail/20250429/5a46d63149098.jpg",
    images: [
      { src: "https://cdn.imweb.me/thumbnail/20250429/fbdb14ef514fb.jpg", caption: "경연대회 현장" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/035c2fd99bfae.jpg", caption: "참가자 선발" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/d50a8bec6aab9.jpg", caption: "해외 파견" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/9f69114980c38.jpg", caption: "봉사 활동" },
    ],
  },
  {
    id: "school", label: "국제학교", emoji: "",
    title: "국경 없는 교실, 세계를 품은 학교",
    desc: "ICS 국제학교 운영 및 미국 대학 학점연계 프로그램",
    featured: "https://cdn.imweb.me/thumbnail/20250429/8ce5a22f15cc5.png",
    images: [
      { src: "https://cdn.imweb.me/thumbnail/20250429/0004a1b466e7e.jpg", caption: "국제학교 캠퍼스" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/d1ffe9c0bd29c.jpg", caption: "학교 운영" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/db093ec745788.jpg", caption: "미국 대학 협력" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/17bcd1f3f838c.jpg", caption: "교육 프로그램" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/a6cd5a973e874.jpg", caption: "졸업식" },
    ],
  },
  {
    id: "exam", label: "통번역 시험", emoji: "",
    title: "30만 명이 응시한 대한민국 통번역 시험의 역사",
    desc: "통역 번역 시험 운영 및 국내외 업무 협약 현장",
    featured: "https://cdn.imweb.me/thumbnail/20250429/887643e80003d.jpg",
    images: [
      { src: "https://cdn.imweb.me/thumbnail/20250429/d51e6d8c5551e.jpg", caption: "시험 현장" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/b6fd36d4f2440.jpg", caption: "시험 진행" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/8bccba1f1b097.jpg", caption: "협약식" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/11839d7747cf8.jpg", caption: "업무 협약" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/891e5b3282ffe.jpg", caption: "대학 협력" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/319aa736a88c0.jpg", caption: "MOU 체결" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/7957aa92ac981.jpg", caption: "기관 방문" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/c727a333c08aa.jpg", caption: "국제 협력" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/88e9277542fbc.jpg", caption: "기념 촬영" },
      { src: "https://cdn.imweb.me/thumbnail/20250429/ab2f77f8d2a0a.jpg", caption: "협약 조인" },
    ],
  },
  {
    id: "web", label: "홈페이지 & 홍보", emoji: "",
    title: "브랜드의 첫인상을 디자인하다",
    desc: "웹사이트 사례 및 홍보 자료 아카이브",
    featured: "https://cdn.imweb.me/thumbnail/20250428/99a494e390dd8.jpg",
    images: [
      { src: "https://cdn.imweb.me/thumbnail/20250428/b7e87101c6228.jpg", caption: "웹사이트 메인" },
      { src: "https://cdn.imweb.me/thumbnail/20250430/64126d357e95e.jpg", caption: "서비스 페이지" },
      { src: "https://cdn.imweb.me/thumbnail/20250428/f3b8958c3b736.jpg", caption: "홍보 자료" },
    ],
  },
];

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const active = categories.find((c) => c.id === activeTab)!;

  return (
    <section className="relative py-20 px-6 lg:px-12 overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#c9a96e]/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#4ECDC4]/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {/* Header — Big & Bold */}
          <motion.div variants={fadeUp} className="text-center mb-12">
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
              <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">Media Gallery</span>
              <div className="h-[1px] w-24 bg-[#c9a96e]" />
            </motion.div>
            <h2
              className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1.2 }}
            >언론에서 바라본<br /><span className="bg-gradient-to-r from-[#FFD93D] via-[#c9a96e] to-[#FFD93D] bg-clip-text text-transparent">JINNY PARK</span> </h2>
            <p className="text-white/40 mt-4 max-w-[500px] mx-auto" style={{ fontSize: "0.92rem" }}>
              27년간의 여정을 함께 기록해온 언론 미디어 아카이브
            </p>
          </motion.div>

          {/* Tab Pills — Glassmorphism */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer flex items-center gap-2 ${isActive
                    ? "bg-white text-[#1a1a2e] border-white shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                    : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/25"
                    }`}
                  style={{ fontSize: "0.85rem", fontWeight: isActive ? 600 : 400 }}
                >
                  <span style={{ fontSize: "1rem" }}>{cat.emoji}</span>
                  {cat.label}
                </button>
              );
            })}
          </motion.div>

          {/* Content — Expanded vertical layout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Featured — HERO-sized image */}
              <div
                className="relative rounded-3xl overflow-hidden cursor-pointer group mb-6"
                onClick={() => setLightbox(active.featured)}
              >
                <ImageWithFallback
                  src={active.featured}
                  alt={active.label}
                  className="w-full aspect-[16/9] md:aspect-[21/9] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
                    <span style={{ fontSize: "0.9rem" }}>{active.emoji}</span>
                    <span className="text-white/80" style={{ fontSize: "0.78rem" }}>{active.label}</span>
                  </div>
                  <h3
                    className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white mb-2"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 600, lineHeight: 1.3 }}
                  >
                    {active.title}
                  </h3>
                  <p className="text-white/50 max-w-[500px]" style={{ fontSize: "0.9rem" }}>
                    {active.desc}
                  </p>
                </div>

                {/* Click hint */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-xl text-white/80 rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity border border-white/10" style={{ fontSize: "0.75rem" }}>
                  📸 클릭하여 확대
                </div>
              </div>

              {/* Thumbnails — Masonry-like grid */}
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {active.images.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="rounded-2xl overflow-hidden cursor-pointer group relative"
                    onClick={() => setLightbox(img.src)}
                  >
                    <ImageWithFallback
                      src={img.src}
                      alt={img.caption}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                      <div className="w-full p-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-center truncate" style={{ fontSize: "0.72rem" }}>
                          {img.caption}
                        </p>
                      </div>
                    </div>
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(201,169,110,0.3)]" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-[900px] max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={lightbox}
                alt="확대 이미지"
                className="w-full h-full object-contain rounded-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer border border-white/10"
              >
                <X size={18} />
              </button>

              {(() => {
                const allImages = [active.featured, ...active.images.map(img => img.src)];
                const currentIdx = allImages.indexOf(lightbox);
                if (currentIdx === -1) return null;
                return (
                  <>
                    <button
                      onClick={() => setLightbox(allImages[(currentIdx - 1 + allImages.length) % allImages.length])}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setLightbox(allImages[(currentIdx + 1) % allImages.length])}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                    >
                      <ChevronRight size={18} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl text-white px-4 py-1.5 rounded-full border border-white/10" style={{ fontSize: "0.78rem" }}>
                      {currentIdx + 1} / {allImages.length}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
