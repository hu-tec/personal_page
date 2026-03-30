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
      await fetch(`${API_URL}/api/story_posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      });
      onAdd(newPost);
      onCancel();
    } catch {
      alert('저장에 실패했습니다.');
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
const thankfulPeople: ThankfulPerson[] = [
  { name: "유영우", img: "https://images.unsplash.com/photo-1664101606938-e664f5852fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZWxkZXJseSUyMGJ1c2luZXNzbWFuJTIwcG9ydHJhaXQlMjAxfGVufDF8fHx8MTc3MzEyNDAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { name: "이정우", img: "https://images.unsplash.com/photo-1592878995758-02b32ddabdd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBhc2lhbiUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHN1aXQlMjAyfGVufDF8fHx8MTc3MzEyNDAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { name: "김동익", img: "https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMDR8ZW58MXx8fHwxNzczMTI0MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { name: "윤태희", img: "https://images.unsplash.com/photo-1622169804256-0eb6873ff441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBhc2lhbiUyMG1hbiUyMGhlYWRzaG90JTIwMXxlbnwxfHx8fDE3NzMxMjQwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

const initialPeoplePosts: BlogPost[] = [
  {
    id: "pp1", category: "people", subcategory: "가족", title: "가족이라는 이름의 따뜻함", date: "2025.01.10",
    preview: "세상 어디를 가도, 돌아갈 곳이 있다는 건 가장 큰 축복입니다.",
    fullContent: ["어린 시절 어머니가 해주시던 된장찌개의 향, 아버지와 걷던 저녁 산책길. 그 시절엔 너무 당연했던 것들이, 시간이 흐를수록 가장 귀한 기억이 됩니다."],
    comments: [],
  },
];

const travelPhotos = [
  { img: "https://images.unsplash.com/photo-1597434429739-2574d7e06807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMG5hdHVyZSUyMHNjZW5pY3xlbnwxfHx8fDE3NzE5MDUwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "NATURE", desc: "자연이 주는 위안" },
  { img: "https://images.unsplash.com/photo-1655760795950-9cb82352f089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGUlMjB0cmF2ZWwlMjBhcmNoaXRlY3R1cmUlMjBiZWF1dGlmdWx8ZW58MXx8fHwxNzcxOTA1MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "GROWTH", desc: "문화와 예술의 향연" },
  { img: "https://images.unsplash.com/photo-1760465789650-c1aa4ee6c714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aGVhc3QlMjBhc2lhJTIwdHJvcGljYWwlMjBiZWFjaCUyMHRyYXZlbHxlbnwxfHx8fDE3NzE5MDUwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "HEALING", desc: "따뜻한 바람과 미소" },
  { img: "https://images.unsplash.com/photo-1672110781309-7d9292d440b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRyYXZlbCUyMHRlbXBsZSUyMGF1dHVtbnxlbnwxfHx8fDE3NzE5MDUwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "PRECIOUS", desc: "고요한 아름다움의 나라" },
];

export default function StoryPage() {
  const [peoplePosts, setPeoplePosts] = useState<BlogPost[]>(initialPeoplePosts);
  const [showPeopleForm, setShowPeopleForm] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/story_posts`)
      .then(res => res.json())
      .then((rows: { id: number; data: string }[]) => {
        const saved = rows.map(r => {
          try { return JSON.parse(r.data) as BlogPost; } catch { return null; }
        }).filter((p): p is BlogPost => p !== null);
        if (saved.length > 0) setPeoplePosts([...saved, ...initialPeoplePosts]);
      })
      .catch(() => { /* 오프라인 시 초기 데이터 유지 */ });
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white/80 py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* 1. 소중한 사람들 */}
        <section className="mb-32">
          <SectionHeader label="PRECIOUS CONNECTIONS" title="나의 소중한 사람들" subtitle="인생이라는 여정을 풍요롭게 만들어준 인연들" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: "FAMILY", desc: "삶의 뿌리이자 안식처", img: "https://images.unsplash.com/photo-1708388065014-abafa002040a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmYW1pbHklMjBnYXRoZXJpbmclMjB3YXJtfGVufDF8fHx8MTc3MTkwNTA5MXww" },
              { label: "FRIENDS", desc: "웃음과 눈물을 나누는 사이", img: "https://images.unsplash.com/photo-1753351055728-23df89f9d273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwZ3JvdXAlMjBsYXVnaGluZyUyMGNhZmV8ZW58MXx8fHwxNzcxOTA1MDkxfDA" },
              { label: "COLLEAGUES", desc: "서로의 성장을 응원하는 관계", img: "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb2xsZWFndWVzJTIwbWVldGluZ3xlbnwxfHx8fDE3NzE5MDUwOTJ8MA" },
              { label: "MENTORS", desc: "삶에 빛이 되어준 은인들", img: "https://images.unsplash.com/photo-1678345201361-f070f85b62a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3IlMjBncmF0aXR1ZGUlMjBoYW5kc2hha2UlMjB3YXJtfGVufDF8fHx8MTc3MTkwNTA5Mnww" },
            ].map((p, i) => (
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
            <button onClick={() => setShowPeopleForm(true)} className="px-8 py-3 bg-[#c9a96e] text-black rounded-full font-bold tracking-widest uppercase text-[10px] hover:bg-[#b8976a] transition-all shadow-xl shadow-[#c9a96e]/20">Record New Story</button>
          </div>

          <AnimatePresence>
            {showPeopleForm && <PostForm onAdd={(p) => setPeoplePosts([p, ...peoplePosts])} category="people" onCancel={() => setShowPeopleForm(false)} subcategories={["가족", "친구", "지인", "멘토"]} />}
          </AnimatePresence>

          <StoryBoard posts={peoplePosts} />
        </section>

        {/* 2. 여행기 */}
        <section>
          <SectionHeader label="WORLD EXPLORATION" title="나의 여행기" subtitle="낯선 곳에서의 만남, 그 속에서 찾은 나" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {travelPhotos.map((p, i) => (
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
        </section>

      </div>
    </div>
  );
}