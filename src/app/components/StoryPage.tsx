import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Heart,
  Send,
  Clock,
  User,
  CheckCircle2,
  Circle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ──────────────────── Types ──────────────────── */
interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
  liked: boolean;
  likes: number;
}

interface BlogPost {
  id: string;
  category: string;
  subcategory?: string;
  title: string;
  date: string;
  img?: string;
  preview: string;
  fullContent: string[];
  comments: Comment[];
}

interface ThankfulPerson {
  name: string;
  img: string;
}

/* ──────────────────── Post Form ──────────────────── */
function PostForm({ onAdd, category, onCancel, subcategories }: { onAdd: (post: BlogPost) => void; category: string; onCancel: () => void; subcategories?: string[] }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrls, setImgUrls] = useState<string[]>([""]);
  const [subcategory, setSubcategory] = useState(subcategories?.[0] || "");

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setSubmitting(true);

    const filteredUrls = imgUrls.filter(url => url.trim() !== "");

    const newPost: BlogPost = {
      id: `post-${Date.now()}`,
      category,
      subcategory: subcategories ? subcategory : undefined,
      title: title.trim(),
      date: new Date().toLocaleDateString("ko-KR"),
      img: filteredUrls[0] || undefined,
      preview: content.trim().split("\n")[0].slice(0, 100) + "...",
      fullContent: content.trim().split("\n"),
      comments: [],
    };

    try {
      const res = await fetch(`${API_URL}/api/story_posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      });
      if (!res.ok) throw new Error('서버 오류');
      onAdd(newPost);
      onCancel();
    } catch {
      alert('저장에 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  const addImageUrlField = () => setImgUrls([...imgUrls, ""]);
  const updateImageUrl = (index: number, value: string) => {
    const newUrls = [...imgUrls];
    newUrls[index] = value;
    setImgUrls(newUrls);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="bg-white/5 backdrop-blur-3xl rounded-[32px] border border-white/10 shadow-2xl overflow-hidden mb-12 max-w-[800px] mx-auto">
      <div className="bg-white/5 p-6 text-white flex justify-between items-center border-b border-white/5">
        <h3 className="text-base font-semibold flex items-center gap-2"><Send size={16} className="text-[#c9a96e]" /> 새로운 이야기 기록하기</h3>
        <button onClick={onCancel} className="text-white/40 hover:text-white transition-colors"><Circle size={16} fill="currentColor" className="opacity-50" /></button>
      </div>
      <form onSubmit={handleSubmit} className="p-10 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          {subcategories && (
            <div className="col-span-1">
              <label className="block text-white/30 mb-3 font-bold uppercase tracking-widest text-[10px]">카테고리</label>
              <select
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#c9a96e] transition-all appearance-none cursor-pointer"
              >
                {subcategories.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#1a1a1a]">{cat}</option>
                ))}
              </select>
            </div>
          )}
          <div className={subcategories ? "col-span-1" : "col-span-2"}>
            <label className="block text-white/30 mb-3 font-bold uppercase tracking-widest text-[10px]">제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요..."
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#c9a96e] transition-all"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="block text-white/30 font-bold uppercase tracking-widest text-[10px]">이미지 첨부</label>
            <button type="button" onClick={addImageUrlField} className="text-[#c9a96e] hover:underline text-[11px] font-bold">+ 입력창 추가</button>
          </div>
          <div className="space-y-4">
            {imgUrls.map((url, idx) => (
              <input
                key={idx}
                type="text"
                value={url}
                onChange={(e) => updateImageUrl(idx, e.target.value)}
                placeholder={`이미지 URL ${idx + 1}...`}
                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white/60 focus:outline-none focus:border-[#c9a96e] transition-all text-sm"
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-white/30 mb-3 font-bold uppercase tracking-widest text-[10px]">내용</label>
          <textarea
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="소중한 순간을 글로 남겨주세요..."
            className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-[24px] text-white/80 focus:outline-none focus:border-[#c9a96e] transition-all resize-none leading-relaxed"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button type="button" onClick={onCancel} className="flex-1 px-8 py-4 border border-white/10 text-white/40 rounded-2xl hover:bg-white/5 transition-all font-bold uppercase tracking-widest text-[11px]">취소</button>
          <button type="submit" disabled={submitting} className="flex-[2] px-8 py-4 bg-[#c9a96e] text-black rounded-2xl hover:bg-[#b8976a] transition-all font-bold uppercase tracking-widest text-[11px] shadow-2xl shadow-[#c9a96e]/20 disabled:opacity-50">{submitting ? '저장 중...' : '등록하기'}</button>
        </div>
      </form>
    </motion.div>
  );
}

/* ──────────────────── Story Board ──────────────────── */
function StoryBoard({ posts }: { posts: BlogPost[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const currentPosts = posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="overflow-hidden bg-white/5 rounded-[32px] border border-white/10 shadow-2xl mb-10">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white/5">
              <th className="py-6 px-6 text-center text-white/20 font-bold uppercase tracking-widest text-[10px]" style={{ width: "80px" }}>No</th>
              <th className="py-6 px-6 text-left text-white/20 font-bold uppercase tracking-widest text-[10px]">Title</th>
              <th className="py-6 px-6 text-center text-white/20 font-bold uppercase tracking-widest text-[10px]" style={{ width: "120px" }}>Author</th>
              <th className="py-6 px-6 text-center text-white/20 font-bold uppercase tracking-widest text-[10px]" style={{ width: "140px" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post, idx) => {
              const isExpanded = expandedId === post.id;
              return (
                <React.Fragment key={post.id}>
                  <tr onClick={() => setExpandedId(isExpanded ? null : post.id)} className="border-t border-white/5 hover:bg-white/5 cursor-pointer transition-all">
                    <td className="py-6 px-6 text-center text-white/20 font-['Montserrat'] text-xs">{posts.length - ((currentPage - 1) * itemsPerPage + idx)}</td>
                    <td className="py-6 px-6">
                      <div className="flex items-center gap-3">
                        {post.subcategory && <span className="px-3 py-1 bg-[#c9a96e]/10 text-[#c9a96e] rounded-md font-bold text-[9px] uppercase tracking-widest">{post.subcategory}</span>}
                        <span className="text-white/80 font-medium text-sm">{post.title}</span>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-center text-white/40 text-xs">JINNY</td>
                    <td className="py-6 px-6 text-center text-white/40 text-xs font-['Montserrat']">{post.date}</td>
                  </tr>
                  {isExpanded && (
                    <tr className="bg-black/20">
                      <td colSpan={4} className="p-12">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-[800px] mx-auto space-y-10">
                          <div className="flex items-center gap-4 text-[#c9a96e]/40 font-['Montserrat'] tracking-widest text-[10px] font-bold uppercase">
                            <Clock size={12} /> {post.date}
                            <span className="w-1.5 h-1.5 rounded-full bg-white/5" />
                            {post.subcategory || "GENERAL"}
                          </div>
                          <h4 className="text-white font-['Noto_Serif_KR',serif] text-2xl font-light leading-tight">{post.title}</h4>
                          <div className="space-y-6 text-white/50 leading-[2] font-light text-base">
                            {post.fullContent.map((p, i) => <p key={i}>{p}</p>)}
                          </div>
                          {post.img && (
                            <div className="rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
                              <ImageWithFallback src={post.img} alt={post.title} className="w-full h-auto object-cover" />
                            </div>
                          )}
                          <div className="pt-10 border-t border-white/5 flex justify-between items-center">
                            <button className="flex items-center gap-2 text-white/20 hover:text-[#c9a96e] transition-all text-xs uppercase tracking-widest font-bold"><MessageCircle size={14} /> 0 Comments</button>
                            <button onClick={() => setExpandedId(null)} className="text-[#c9a96e] hover:underline text-xs uppercase tracking-widest font-bold">Close Story</button>
                          </div>
                        </motion.div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ──────────────────── Section Header ──────────────────── */
function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <motion.div variants={fadeUp} className="text-center mb-16">
      <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 mb-6 text-center">
        <div className="h-[1px] w-24 bg-[#c9a96e]" />
        <span className="font-['Montserrat'] uppercase tracking-[0.5em] text-[#c9a96e] text-[12px] font-bold">{label}</span>
        <div className="h-[1px] w-24 bg-[#c9a96e]" />
      </motion.div>
      <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}>{title}</h2>
      {subtitle && <p className="text-white/30 font-light max-w-[600px] mx-auto leading-relaxed" style={{ fontSize: "1rem" }}>{subtitle}</p>}
    </motion.div>
  );
}

/* ──────────────────── DATA ──────────────────── */
const sections = [
  {
    id: "people",
    category: "people",
    label: "PRECIOUS CONNECTIONS",
    title: "나의 소중한 사람들",
    subtitle: "인생이라는 여정을 풍요롭게 만들어준 인연들",
    subcategories: ["가족", "친구", "지인", "멘토"],
    gallery: [
      { label: "FAMILY", desc: "삶의 뿌리이자 안식처", img: "https://images.unsplash.com/photo-1708388065014-abafa002040a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmYW1pbHklMjBnYXRoZXJpbmclMjB3YXJtfGVufDF8fHx8MTc3MTkwNTA5MXww" },
      { label: "FRIENDS", desc: "웃음과 눈물을 나누는 사이", img: "https://images.unsplash.com/photo-1753351055728-23df89f9d273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwZ3JvdXAlMjBsYXVnaGluZyUyMGNhZmV8ZW58MXx8fHwxNzcxOTA1MDkxfDA" },
      { label: "COLLEAGUES", desc: "서로의 성장을 응원하는 관계", img: "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb2xsZWFndWVzJTIwbWVldGluZ3xlbnwxfHx8fDE3NzE5MDUwOTJ8MA" },
      { label: "MENTORS", desc: "삶에 빛이 되어준 은인들", img: "https://images.unsplash.com/photo-1678345201361-f070f85b62a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3IlMjBncmF0aXR1ZGUlMjBoYW5kc2hha2UlMjB3YXJtfGVufDF8fHx8MTc3MTkwNTA5Mnww" },
    ]
  },
  {
    id: "travel",
    category: "travel",
    label: "WORLD EXPLORATION",
    title: "나의 여행기",
    subtitle: "세계 곳곳을 걸으며 만난 풍경과 사람들",
    subcategories: ["유럽", "일본", "동남아시아", "산과 자연"],
    gallery: [
      { label: "EUROPE", desc: "문화와 예술의 향연", img: "https://images.unsplash.com/photo-1655760795950-9cb82352f089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGUlMjB0cmF2ZWwlMjBhcmNoaXRlY3R1cmUlMjBiZWF1dGlmdWx8ZW58MXx8fHwxNzcxOTA1MDkzfDA" },
      { label: "JAPAN", desc: "고즈넉한 아름다움", img: "https://images.unsplash.com/photo-1672110781309-7d9292d440b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRyYXZlbCUyMHRlbXBsZSUyMGF1dHVtbnxlbnwxfHx8fDE3NzE5MDUwOTN8MA" },
      { label: "ASIA", desc: "따뜻한 바람과 여유", img: "https://images.unsplash.com/photo-1760465789650-c1aa4ee6c714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aGVhc3QlMjBhc2lhJTIwdHJvcGljYWwlMjBiZWFjaCUyMHRyYXZlbHxlbnwxfHx8fDE3NzE5MDUwOTh8MA" },
      { label: "NATURE", desc: "대자연이 주는 위안", img: "https://images.unsplash.com/photo-1597434429739-2574d7e06807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMG5hdHVyZSUyMHNjZW5pY3xlbnwxfHx8fDE3NzE5MDUwOTR8MA" },
    ]
  },
  {
    id: "precious_story",
    category: "precious_story",
    label: "PRECIOUS MOMENTS",
    title: "나의 소중한 이야기",
    subtitle: "인생을 만들어 온 찬란한 순간들",
    subcategories: ["첫 강단에 섰던 날", "인생을 바꾼 한 마디", "새벽 4시의 기도", "실패에서 배운 가장 큰 교훈"],
    gallery: [
      { label: "FIRST STAGE", desc: "설렘과 긴장의 시작", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWN0dXJlfGVufDF8fHx8MTcyMTI1Mjk3Mnww" },
      { label: "LIFE WORDS", desc: "나를 일으킨 한 마디", img: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nfGVufDF8fHx8MTcyMTI1Mjk3Mnww" },
      { label: "MORNING PRAYER", desc: "고요한 성찰의 시간", img: "https://images.unsplash.com/photo-1507668579450-4cbab921c220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwcHJheWVyfGVufDF8fHx8MTcyMTI1Mjk3Mnww" },
      { label: "LESSONS", desc: "실패가 남긴 선물", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZ3xlbnwxfHx8fDE3MjEyNTI5NzJ8MA" },
    ]
  },
  {
    id: "my_story",
    category: "my_story",
    label: "MY DIARY",
    title: "나의 이야기",
    subtitle: "일상의 소소한 행복과 깨달음",
    subcategories: ["유럽", "일본", "동남아시아", "산과 자연", "프라하의밤,별빛 아래 걷다", "교토의 가을, 붉은 단풍 아래서"],
    gallery: [
      { label: "WRITING", desc: "마음을 담는 시간", img: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwd3JpdGluZ3xlbnwxfHx8fDE3MjEyNTI5NzJ8MA" },
      { label: "WALKING", desc: "생각을 정리하는 걸음", img: "https://images.unsplash.com/photo-1506450820067-27cfbe20f0c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc2VuYSUyMHdhbGt8ZW58MXx8fHwxNzIxMjUyOTcyfDA" },
      { label: "COFFEE", desc: "일상의 작은 사치", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWV8ZW58MXx8fDE3MjEyNTI5NzJ8MA" },
      { label: "NATURE", desc: "자연과 함께하는 시간", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MXx8fDE3MjEyNTI5NzJ8MA" },
    ]
  },
  {
    id: "hobby",
    category: "hobby",
    label: "HOBBY & LIFESTYLE",
    title: "운동과 취미 — 책, 음악, 미술",
    subtitle: "몸과 마음을 가꾸는 시간",
    subcategories: ["운동", "책", "음악", "미술"],
    gallery: [
      { label: "EXERCISE", desc: "활력을 채우는 하루", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhfGVufDF8fHx8MTcyMTI1Mjk3Mnww" },
      { label: "BOOKS", desc: "인생을 바꾸는 문장", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc3RvcGV8ZW58MXx8fDE3MjEyNTI5NzJ8MA" },
      { label: "MUSIC", desc: "영혼을 울리는 선율", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY3xlbnwxfHx8fDE3MjEyNTI5NzJ8MA" },
      { label: "ART", desc: "색채로 만나는 세상", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTcyMTI1Mjk3Mnww" },
    ]
  },
  {
    id: "volunteer",
    category: "volunteer",
    label: "VOLUNTEER & REFLECTION",
    title: "봉사와 사색",
    subtitle: "세상과 마음을 나누는 삶의 가치",
    subcategories: ["봉사", "사색", "나눔", "명상"],
    gallery: [
      { label: "VOLUNTEER", desc: "따뜻한 손길", img: "https://images.unsplash.com/photo-1593113580332-ceb47bfbf8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJ8ZW58MXx8fDE3MjEyNTI5NzJ8MA" },
      { label: "REFLECTION", desc: "나를 돌아보는 대화", img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9ufGVufDF8fHx8MTcyMTI1Mjk3Mnww" },
      { label: "SHARING", desc: "함께 성장하는 기쁨", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5fGVufDF8fHx8MTcyMTI1Mjk3Mnww" },
      { label: "MEDITATION", desc: "마음의 평화와 안식", img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW58ZW58MXx8fDE3MjEyNTI5NzJ8MA" },
    ]
  },
  {
    id: "food_hobby",
    category: "food_hobby",
    label: "FOOD & LIFESTYLE",
    title: "음식과 취미 🍽️",
    subtitle: "맛으로 기억하는 순간들",
    subcategories: ["집밥", "맛집 탐방", "요리", "여행과 음식"],
    gallery: [
      { label: "HOME COOKING", desc: "정성이 담긴 한 끼", img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nfGVufDF8fHx8MTcyMTI1Mjk3Mnww" },
      { label: "RESTAURANT", desc: "새로운 맛의 발견", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50fGVufDF8fHx8MTcyMTI1Mjk3Mnww" },
      { label: "DESSERT", desc: "달콤한 휴식 시간", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0fGVufDF8fHx8MTcyMTI1Mjk3Mnww" },
      { label: "TRAVEL & FOOD", desc: "여행지에서 만난 감동", img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2R8ZW58MXx8fDE3MjEyNTI5NzJ8MA" },
    ]
  }
];

const initialPosts: BlogPost[] = [
  {
    id: "pp1", category: "people", subcategory: "가족", title: "가족이라는 이름의 따뜻함", date: "2025.01.10",
    preview: "세상 어디를 가도, 돌아갈 곳이 있다는 건 가장 큰 축복입니다.",
    fullContent: ["어린 시절 어머니가 해주시던 된장찌개의 향, 아버지와 걷던 저녁 산책길. 그 시절엔 너무 당연했던 것들이, 시간이 흐를수록 가장 귀한 기억이 됩니다."],
    comments: [],
  },
  {
    id: "pp2", category: "travel", subcategory: "유럽", title: "프라하의 밤, 별빛 아래 걷다", date: "2024.08.20",
    preview: "프라하의 카를교 위에서 만난 석양은 세상에서 가장 아름다운 풍경이었습니다.",
    fullContent: ["프라하의 카를교 위에서 만난 석양은 세상에서 가장 아름다운 풍경이었습니다. 여행은 새로운 눈을 선물합니다. 낡은 다리 위에서 들려오던 집시의 바이올린 소리, 그리고 붉게 타오르며 지던 해는 영원히 잊을 수 없을 것입니다."],
    comments: [],
  },
  {
    id: "pp3", category: "precious_story", subcategory: "첫 강단에 섰던 날", title: "첫 강단에 섰던 날", date: "2024.12.01",
    preview: "27년 전, 떨리는 마음으로 처음 학생들 앞에 섰습니다.",
    fullContent: ["27년 전, 떨리는 마음으로 처음 학생들 앞에 섰습니다. 그날의 긴장과 설렘이, 지금까지 이어지는 교육의 여정을 만들었습니다. 누군가의 앞에 서서 지식을 나눈다는 것은 참으로 숭고하고도 무거운 책임입니다."],
    comments: [],
  },
  {
    id: "pp4", category: "my_story", subcategory: "글쓰기", title: "내가 글을 쓰는 이유", date: "2025.01.28",
    preview: "글을 쓴다는 것은 나를 만나는 일입니다.",
    fullContent: ["글을 쓴다는 것은 나를 만나는 일입니다. 생각을 정리하고, 감정을 마주하고, 내면의 목소리에 귀 기울이는 시간. 조용한 밤, 스탠드 불빛 아래서 사각거리는 펜소리를 듣는 것은 제게 가장 큰 힐링입니다."],
    comments: [],
  },
  {
    id: "pp5", category: "hobby", subcategory: "책", title: "인생 책 한 권의 무게", date: "2024.11.05",
    preview: "수천 권의 책을 읽었지만, 인생을 바꾼 책은 손에 꼽습니다.",
    fullContent: ["수천 권의 책을 읽었지만, 인생을 바꾼 책은 손에 꼽습니다. 좋은 책은 오래된 친구와 같습니다. 페이지를 넘길 때마다 저자의 삶과 나의 삶이 교차하며 새로운 영감을 줍니다."],
    comments: [],
  },
  {
    id: "pp6", category: "volunteer", subcategory: "봉사", title: "나눌수록 커지는 마음", date: "2025.02.15",
    preview: "작은 나눔이 누군가에게는 큰 희망이 될 수 있다는 걸 배웠습니다.",
    fullContent: ["작은 나눔이 누군가에게는 큰 희망이 될 수 있다는 걸 배웠습니다. 타인을 돕는 과정에서 오히려 제 자신이 더 큰 위로를 받곤 합니다. 함께 살아가는 세상, 작은 실천이 세상을 조금이나마 따뜻하게 만들기를 소망합니다."],
    comments: [],
  },
  {
    id: "pp7", category: "food_hobby", subcategory: "집밥", title: "엄마의 된장찌개, 그리고 집밥의 의미 🍲", date: "2024.06.10",
    preview: "요리는 사랑의 표현입니다. 정성을 담아 만든 음식에는 말로 전하지 못하는 마음이 담겨 있습니다. 💛",
    fullContent: ["요리는 사랑의 표현입니다. 정성을 담아 만든 음식에는 말로 전하지 못하는 마음이 담겨 있습니다. 보글보글 끓는 소리를 들으며 가족을 생각하는 시간, 그것이 제가 요리를 사랑하는 가장 큰 이유입니다."],
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kfGVufDF8fHx8MTcyMTI1Mjk3Mnww",
    comments: [],
  },
  {
    id: "pp8", category: "food_hobby", subcategory: "여행과 음식", title: "여행지에서 만난 한 접시의 감동 🍜", date: "2024.05.20",
    preview: "낯선 도시의 작은 식당에서 만난 한 접시가, 그 여행의 가장 큰 추억이 되곤 합니다. 음식은 문화를 가장 빠르게 이해하는 방법입니다. 🌍",
    fullContent: ["낯선 도시의 작은 식당에서 만난 한 접시가, 그 여행의 가장 큰 추억이 되곤 합니다. 현지 사람들의 삶이 녹아 있는 음식을 맛보는 순간, 비로소 그들과 조금 더 가까워진 듯한 기분이 듭니다."],
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBmb29kfGVufDF8fHx8MTcyMTI1Mjk3Mnww",
    comments: [],
  }
];

export default function StoryPage() {
  const [allPosts, setAllPosts] = useState<BlogPost[]>(initialPosts);
  const [activeFormCategory, setActiveFormCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/story_posts`)
      .then(res => {
        if (!res.ok) throw new Error('서버 오류');
        return res.json();
      })
      .then((rows: { id: number; data: string }[]) => {
        const saved = rows.map(r => {
          try { return JSON.parse(r.data) as BlogPost; } catch { return null; }
        }).filter((p): p is BlogPost => p !== null);
        if (saved.length > 0) {
          const initialIds = new Set(initialPosts.map(p => p.id));
          const unique = saved.filter(p => !initialIds.has(p.id));
          setAllPosts([...unique, ...initialPosts]);
        }
      })
      .catch(() => { /* 오프라인 시 초기 데이터 유지 */ });
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white/80 py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">

        {sections.map((section, idx) => (
          <section key={section.id} className={idx < sections.length - 1 ? "mb-32" : ""}>
            <SectionHeader label={section.label} title={section.title} subtitle={section.subtitle} />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              {section.gallery.map((p, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -10 }} className="relative rounded-[32px] overflow-hidden aspect-[3/4] shadow-2xl border border-white/5 group">
                  <ImageWithFallback src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-[#c9a96e] font-['Montserrat'] tracking-widest font-bold uppercase text-[10px] mb-2">{p.label}</p>
                    <p className="text-white font-light text-sm">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-end mb-8">
              <button
                onClick={() => setActiveFormCategory(activeFormCategory === section.category ? null : section.category)}
                className="px-8 py-3 bg-[#c9a96e] text-black rounded-full font-bold tracking-widest uppercase text-[10px] hover:bg-[#b8976a] transition-all shadow-xl shadow-[#c9a96e]/20"
              >
                {activeFormCategory === section.category ? 'Cancel Writing' : 'Record New Story'}
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeFormCategory === section.category && (
                <PostForm
                  key={section.category}
                  onAdd={(p) => setAllPosts([p, ...allPosts])}
                  category={section.category}
                  onCancel={() => setActiveFormCategory(null)}
                  subcategories={section.subcategories}
                />
              )}
            </AnimatePresence>

            <StoryBoard posts={allPosts.filter(p => p.category === section.category)} />
          </section>
        ))}

      </div>
    </div>
  );
}