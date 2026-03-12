import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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

/* ──────────────────── Post Form with Subcategory ──────────────────── */
function PostForm({ onAdd, category, onCancel, subcategories }: { onAdd: (post: BlogPost) => void; category: string; onCancel: () => void; subcategories?: string[] }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrls, setImgUrls] = useState<string[]>([""]);
  const [subcategory, setSubcategory] = useState(subcategories?.[0] || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

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
    onAdd(newPost);
    onCancel();
  };

  const addImageUrlField = () => setImgUrls([...imgUrls, ""]);
  const updateImageUrl = (index: number, value: string) => {
    const newUrls = [...imgUrls];
    newUrls[index] = value;
    setImgUrls(newUrls);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="bg-white rounded-2xl border border-[#c9a96e]/30 shadow-2xl overflow-hidden mb-8 max-w-[800px] mx-auto">
      <div className="bg-[#2a2a2a] p-5 text-white flex justify-between items-center">
        <h3 className="text-base font-semibold flex items-center gap-2"><Send size={16} className="text-[#c9a96e]" /> 새로운 이야기 기록하기</h3>
        <button onClick={onCancel} className="text-white/60 hover:text-white transition-colors"><Circle size={16} fill="currentColor" className="opacity-50" /></button>
      </div>
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {subcategories && (
            <div className="col-span-1">
              <label className="block text-[#888] mb-2" style={{ fontSize: "0.8rem", fontWeight: 700 }}>카테고리</label>
              <select
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                className="w-full px-4 py-3 bg-[#faf7f2] border border-[#f0ebe3] rounded-xl focus:outline-none focus:border-[#c9a96e] transition-colors appearance-none cursor-pointer"
                style={{ fontSize: "0.95rem" }}
              >
                {subcategories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          )}
          <div className={subcategories ? "col-span-1" : "col-span-2"}>
            <label className="block text-[#888] mb-2" style={{ fontSize: "0.8rem", fontWeight: 700 }}>제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요..."
              className="w-full px-4 py-3 bg-[#faf7f2] border border-[#f0ebe3] rounded-xl focus:outline-none focus:border-[#c9a96e] transition-colors"
              style={{ fontSize: "0.95rem" }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-[#888]" style={{ fontSize: "0.8rem", fontWeight: 700 }}>이미지 첨부</label>
            <button 
              type="button" 
              onClick={addImageUrlField}
              className="text-[#c9a96e] hover:underline"
              style={{ fontSize: "0.75rem", fontWeight: 600 }}
            >
              + 입력창 추가
            </button>
          </div>
          <div className="space-y-3 bg-[#faf7f2] p-4 rounded-xl border border-[#f0ebe3] max-h-[200px] overflow-y-auto">
            {imgUrls.map((url, idx) => (
              <input
                key={idx}
                type="text"
                value={url}
                onChange={(e) => updateImageUrl(idx, e.target.value)}
                placeholder={`이미지 URL ${idx + 1}을 입력하세요...`}
                className="w-full px-4 py-2 bg-white border border-[#f0ebe3] rounded-lg focus:outline-none focus:border-[#c9a96e] transition-colors"
                style={{ fontSize: "0.85rem" }}
              />
            ))}
          </div>
          <p className="text-[#bbb] mt-2" style={{ fontSize: "0.7rem" }}>여러 장의 이미지를 첨부할 수 있도록 입력창을 추가할 수 있습니다.</p>
        </div>

        <div>
          <label className="block text-[#888] mb-2" style={{ fontSize: "0.8rem", fontWeight: 700 }}>내용</label>
          <textarea
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="소중한 순간을 글로 남겨주세요..."
            className="w-full px-5 py-4 bg-[#faf7f2] border border-[#f0ebe3] rounded-xl focus:outline-none focus:border-[#c9a96e] transition-colors resize-none leading-relaxed"
            style={{ fontSize: "0.95rem" }}
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button type="button" onClick={onCancel} className="flex-1 px-6 py-4 border border-[#f0ebe3] text-[#777] rounded-xl hover:bg-[#faf7f2] transition-colors" style={{ fontSize: "0.9rem", fontWeight: 700 }}>취소</button>
          <button type="submit" className="flex-[2] px-6 py-4 bg-[#c9a96e] text-white rounded-xl hover:bg-[#a08558] transition-colors shadow-lg shadow-[#c9a96e]/20" style={{ fontSize: "0.9rem", fontWeight: 700 }}>등록하기 ✨</button>
        </div>
      </form>
    </motion.div>
  );
}

/* ──────────────────── Story Board List ──────────────────── */
function StoryBoard({ posts }: { posts: BlogPost[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const currentPosts = posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="overflow-x-auto bg-white rounded-2xl border border-[#f0ebe3] shadow-sm mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#f0ebe3] bg-[#faf7f2]">
              <th className="py-4 px-4 text-center text-[#8b6914] font-bold" style={{ fontSize: "0.75rem", width: "80px" }}>번호</th>
              <th className="py-4 px-4 text-left text-[#8b6914] font-bold" style={{ fontSize: "0.75rem" }}>제목</th>
              <th className="py-4 px-4 text-center text-[#8b6914] font-bold" style={{ fontSize: "0.75rem", width: "100px" }}>작성자</th>
              <th className="py-4 px-4 text-center text-[#8b6914] font-bold" style={{ fontSize: "0.75rem", width: "120px" }}>작성일</th>
              <th className="py-4 px-4 text-center text-[#8b6914] font-bold" style={{ fontSize: "0.75rem", width: "80px" }}>조회</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post, idx) => {
              const displayNumber = posts.length - ((currentPage - 1) * itemsPerPage + idx);
              const isExpanded = expandedId === post.id;
              
              return (
                <React.Fragment key={post.id}>
                  <tr 
                    onClick={() => setExpandedId(isExpanded ? null : post.id)}
                    className="border-b border-[#f5f0ea] hover:bg-[#fafafa] cursor-pointer transition-colors"
                  >
                    <td className="py-5 px-4 text-center text-[#999]" style={{ fontSize: "0.85rem" }}>{11000 + displayNumber}</td>
                    <td className="py-5 px-4 text-left">
                      <div className="flex items-center gap-2">
                        {post.subcategory && (
                          <span className="px-2 py-0.5 bg-[#f5efe6] text-[#8b6914] rounded-md" style={{ fontSize: "0.7rem", fontWeight: 700 }}>{post.subcategory}</span>
                        )}
                        <span className="text-[#2a2a2a] line-clamp-1" style={{ fontSize: "0.92rem", fontWeight: 500 }}>{post.title}</span>
                        {post.img && <CheckCircle2 size={12} className="text-[#c9a96e]" />}
                      </div>
                    </td>
                    <td className="py-5 px-4 text-center text-[#777]" style={{ fontSize: "0.85rem" }}>박진희</td>
                    <td className="py-5 px-4 text-center text-[#777]" style={{ fontSize: "0.85rem" }}>{post.date}</td>
                    <td className="py-5 px-4 text-center text-[#999]" style={{ fontSize: "0.85rem" }}>{Math.floor(Math.random() * 500) + 100}</td>
                  </tr>
                  {isExpanded && (
                    <tr className="bg-[#fcfaf7]">
                      <td colSpan={5} className="p-8">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 max-w-[800px] mx-auto">
                          <div className="flex items-center gap-2 text-[#bbb] mb-2">
                            <Clock size={13} />
                            <span style={{ fontSize: "0.78rem" }}>{post.date}</span>
                            <span className="text-[#ddd]">•</span>
                            <span className="text-[#c9a96e]" style={{ fontSize: "0.75rem", fontWeight: 700 }}>{post.subcategory || "기본"}</span>
                          </div>
                          <h4 className="text-[#2a2a2a]" style={{ fontSize: "1.2rem", fontWeight: 700 }}>{post.title}</h4>
                          <div className="h-px bg-[#f0ebe3] w-full" />
                          <div className="space-y-4">
                            {post.fullContent.map((p, i) => (
                              <p key={i} className="text-[#555] leading-relaxed" style={{ fontSize: "0.95rem" }}>{p}</p>
                            ))}
                          </div>
                          {post.img && (
                            <div className="rounded-2xl overflow-hidden border border-[#f0ebe3]">
                              <ImageWithFallback src={post.img} alt={post.title} className="w-full h-auto max-h-[500px] object-cover" />
                            </div>
                          )}
                          <div className="pt-6 border-t border-[#f0ebe3] flex justify-between items-center">
                            <button className="flex items-center gap-2 text-[#999] hover:text-[#2a2a2a] transition-colors" style={{ fontSize: "0.85rem" }}>
                              <MessageCircle size={16} /> 댓글 0개
                            </button>
                            <button onClick={() => setExpandedId(null)} className="text-[#c9a96e] hover:underline" style={{ fontSize: "0.85rem", fontWeight: 600 }}>닫기</button>
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                currentPage === i + 1 
                  ? "bg-[#2a2a2a] text-white shadow-md font-bold" 
                  : "bg-white text-[#888] border border-[#f0ebe3] hover:bg-[#faf7f2]"
              }`}
              style={{ fontSize: "0.85rem" }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ──────────────────── Section Header ──────────────────── */
function SectionHeader({ label, title, subtitle, emoji }: { label: string; title: string; subtitle?: string; emoji?: string }) {
  return (
    <motion.div variants={fadeUp} className="mb-10">
      <div className="text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f5efe6]/80 to-[#ece5d9]/80 backdrop-blur-sm rounded-full mb-4 border border-[#e8e0d4]/40 shadow-sm">
          {emoji && <span style={{ fontSize: "0.85rem" }}>{emoji}</span>}
          <span className="text-[#8b6914]" style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em" }}>{label}</span>
        </div>
        <h2 className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a]" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 600 }}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-[#bbb] mt-2 max-w-[500px]" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}

/* ──────────────────── Text Blog Card ──────────────────── */
function TextBlogCard({ post }: { post: BlogPost }) {
  const [expanded, setExpanded] = useState(false);
  const [comments, setComments] = useState<Comment[]>(post.comments);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, { id: `new-${Date.now()}`, author: "방문자", text: newComment.trim(), date: "2026.03.10", liked: false, likes: 0 }]);
    setNewComment("");
  };

  const toggleLike = (cid: string) => setComments(comments.map(c => c.id === cid ? { ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 } : c));

  return (
    <motion.article variants={fadeUp} className="bg-white rounded-2xl border border-[#f0ebe3] p-6 hover:shadow-lg transition-all">
      <div className="flex items-center gap-2 text-[#bbb] mb-3">
        <Clock size={13} />
        <span style={{ fontSize: "0.78rem" }}>{post.date}</span>
        {post.subcategory && (
          <>
            <span className="text-[#ddd]">•</span>
            <span className="text-[#c9a96e]" style={{ fontSize: "0.75rem", fontWeight: 600 }}>{post.subcategory}</span>
          </>
        )}
      </div>
      <h3 className="text-[#2a2a2a] mb-3" style={{ fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.4 }}>
        {post.title}
      </h3>
      <p className="text-[#777] leading-relaxed" style={{ fontSize: "0.92rem" }}>{post.preview}</p>

      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
            <div className="pt-4 space-y-4 border-t border-[#f0ebe3] mt-4">
              {post.fullContent.map((p, i) => <p key={i} className="text-[#777] leading-relaxed" style={{ fontSize: "0.92rem" }}>{p}</p>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-1 mt-4 text-[#c9a96e] hover:text-[#a08558] transition-colors cursor-pointer" style={{ fontSize: "0.82rem", fontWeight: 600 }}>
        {expanded ? <>접기 <ChevronUp size={15} /></> : <>더 읽기 <ChevronDown size={15} /></>}
      </button>

      {/* Comments */}
      <div className="mt-5 pt-4 border-t border-[#f5f0ea]">
        <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 text-[#bbb] hover:text-[#2a2a2a] transition-colors cursor-pointer" style={{ fontSize: "0.82rem" }}>
          <MessageCircle size={15} />
          <span>댓글 {comments.length}개</span>
        </button>
        <AnimatePresence>
          {showComments && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="mt-4 space-y-3">
                {comments.map(c => (
                  <div key={c.id} className="flex gap-3 p-3 bg-[#faf7f2] rounded-xl">
                    <div className="w-7 h-7 rounded-full bg-[#e8e0d4] flex items-center justify-center shrink-0"><User size={12} className="text-[#8a7a66]" /></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#2a2a2a]" style={{ fontSize: "0.82rem", fontWeight: 600 }}>{c.author}</span>
                        <span className="text-[#ccc]" style={{ fontSize: "0.72rem" }}>{c.date}</span>
                      </div>
                      <p className="text-[#777]" style={{ fontSize: "0.82rem" }}>{c.text}</p>
                      <button onClick={() => toggleLike(c.id)} className={`flex items-center gap-1 mt-1.5 transition-colors cursor-pointer ${c.liked ? "text-red-400" : "text-[#ccc] hover:text-red-400"}`} style={{ fontSize: "0.72rem" }}>
                        <Heart size={11} fill={c.liked ? "currentColor" : "none"} /><span>{c.likes}</span>
                      </button>
                    </div>
                  </div>
                ))}
                <div className="flex gap-2 items-start">
                  <div className="w-7 h-7 rounded-full bg-[#2a2a2a] flex items-center justify-center shrink-0"><User size={12} className="text-white" /></div>
                  <div className="flex-1 flex gap-2">
                    <input type="text" value={newComment} onChange={e => setNewComment(e.target.value)} onKeyDown={e => e.key === "Enter" && handleAddComment()} placeholder="따뜻한 댓글을 남겨주세요..." className="flex-1 px-3 py-2 bg-[#faf7f2] border border-[#f0ebe3] rounded-xl text-[#555] placeholder-[#ccc] focus:outline-none focus:border-[#c9a96e] transition-colors" style={{ fontSize: "0.82rem" }} />
                    <button onClick={handleAddComment} className="px-3 py-2 bg-[#2a2a2a] text-white rounded-xl hover:bg-[#444] transition-colors cursor-pointer shrink-0"><Send size={13} /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

/* ──────────────────── Photo Grid ──────────────────── */
function PhotoGrid({ photos }: { photos: { img: string; label: string; desc: string; special?: ThankfulPerson[] }[] }) {
  return (
    <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {photos.map((p, i) => (
        <div key={i} className="relative group rounded-2xl overflow-hidden aspect-[3/4] shadow-md border border-[#f0ebe3]">
          <ImageWithFallback src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
          
          {/* Default Label */}
          <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 group-hover:translate-y-[-10px]">
            <p className="text-[#c9a96e] mb-1" style={{ fontSize: "0.85rem", fontWeight: 700 }}>{p.label}</p>
            <p className="text-white/90 leading-tight" style={{ fontSize: "0.82rem", fontWeight: 400 }}>{p.desc}</p>
          </div>

          {/* Special Hover Content (4-Grid Quadrants) */}
          {p.special && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col">
              <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
                {p.special.slice(0, 4).map((person, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ scale: 1.1, opacity: 0 }} 
                    whileHover={{ scale: 1.05 }}
                    animate={{ scale: 1, opacity: 1 }} 
                    transition={{ delay: idx * 0.1 }}
                    className="relative overflow-hidden border border-white/10"
                  >
                    <ImageWithFallback src={person.img} alt={person.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors flex items-end justify-center pb-2">
                      <span className="text-white text-[0.65rem] font-bold bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">{person.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-px bg-white/20 absolute" />
                <div className="h-full w-px bg-white/20 absolute" />
              </div>
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
}


/* ════════════════════════════════════════════════
   DATA
   ════════════════════════════════════════════════ */

const thankfulPeople: ThankfulPerson[] = [
  { name: "유영우", img: "https://images.unsplash.com/photo-1664101606938-e664f5852fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZWxkZXJseSUyMGJ1c2luZXNzbWFuJTIwcG9ydHJhaXQlMjAxfGVufDF8fHx8MTc3MzEyNDAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { name: "이정우", img: "https://images.unsplash.com/photo-1592878995758-02b32ddabdd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBhc2lhbiUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHN1aXQlMjAyfGVufDF8fHx8MTc3MzEyNDAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { name: "김동익", img: "https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMDR8ZW58MXx8fHwxNzczMTI0MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { name: "윤태희", img: "https://images.unsplash.com/photo-1622169804256-0eb6873ff441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdCUyMDF8ZW58MXx8fHwxNzczMTI0MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

// 1. 소중한 사람들
const preciousPeoplePhotos = [
  { img: "https://images.unsplash.com/photo-1708388065014-abafa002040a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmYW1pbHklMjBnYXRoZXJpbmclMjB3YXJtfGVufDF8fHx8MTc3MTkwNTA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "가족 👨‍👩‍👧‍👦", desc: "삶의 뿌리이자 안식처" },
  { img: "https://images.unsplash.com/photo-1753351055728-23df89f9d273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwZ3JvdXAlMjBsYXVnaGluZyUyMGNhZmV8ZW58MXx8fHwxNzcxOTA1MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "친구 🫂", desc: "웃음과 눈물을 나누는 사이" },
  { img: "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb2xsZWFndWVzJTIwbWVldGluZ3xlbnwxfHx8fDE3NzE5MDUwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "지인 🤝", desc: "서로의 성장을 응원하는 관계" },
  { img: "https://images.unsplash.com/photo-1678345201361-f070f85b62a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3IlMjBncmF0aXR1ZGUlMjBoYW5kc2hha2UlMjB3YXJtfGVufDF8fHx8MTc3MTkwNTA5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "감사한 사람들 🙏", desc: "삶에 빛이 되어준 은인들", special: thankfulPeople },
];

const preciousPeoplePosts: BlogPost[] = [
  {
    id: "pp1", category: "people", subcategory: "가족", title: "가족이라는 이름의 따뜻함 🏠", date: "2025.01.10",
    preview: "세상 어디를 가도, 돌아갈 곳이 있다는 건 가장 큰 축복입니다.",
    fullContent: ["어린 시절 어머니가 해주시던 된장찌개의 향, 아버지와 걷던 저녁 산책길. 그 시절엔 너무 당연했던 것들이, 시간이 흐를수록 가장 귀한 기억이 됩니다. 💛"],
    comments: [],
  },
];

// 2. 소중한 이야기
const preciousStories: BlogPost[] = [
  {
    id: "ps1", category: "stories", subcategory: "사람의 변화", title: "첫 강단에 섰던 날 🎤", date: "2024.12.01",
    preview: "27년 전, 떨리는 마음으로 처음 학생들 앞에 섰습니다.",
    fullContent: ["수업 준비를 밤새 하고도, 강단 앞에 서면 머릿속이 하얘지곤 했습니다. 하지만 학생들의 반짝이는 눈을 보는 순간, 모든 두려움이 사라졌습니다. ✨"],
    comments: [],
  },
  {
    id: "ps2", category: "stories", subcategory: "인생의 변화", title: "인생을 바꾼 한 마디 💡", date: "2024.11.20",
    preview: "\"당신은 할 수 있어요.\" 누군가의 진심 어린 격려가 내 인생의 방향을 완전히 바꿔놓았습니다.",
    fullContent: ["힘든 시기를 보내고 있을 때, 멘토가 건넨 한마디가 저를 일으켜 세웠습니다. 🌟"],
    comments: [],
  },
  {
    id: "ps3", category: "stories", subcategory: "삶에서 배운 것", title: "실패의 가치 🔥", date: "2024.10.15",
    preview: "완벽하지 않아도 괜찮습니다. 넘어진 그 자리에서 다시 일어서는 것, 그것이 진정한 성장입니다.",
    fullContent: ["사업이 실패했을 때, 모든 것을 잃은 기분이었습니다. 하지만 그 시간이 저를 더 단단하게 만들었고, 진짜 중요한 것이 무엇인지 깨닫게 해주었습니다. 💪"],
    comments: [],
  },
  {
    id: "ps4", category: "stories", subcategory: "사람들에게 배운 것", title: "겸손의 힘 🙏", date: "2024.09.28",
    preview: "성공한 사람일수록 겸손합니다. 많은 사람을 만나며 배운 가장 큰 교훈입니다.",
    fullContent: ["진정으로 위대한 사람들은 자신을 낮춥니다. 그들에게서 배운 겸손의 미덕이 제 삶을 더욱 풍요롭게 만들었습니다. ✨"],
    comments: [],
  },
];

// 3. 여행기
const travelPhotos = [
  { img: "https://images.unsplash.com/photo-1597434429739-2574d7e06807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMG5hdHVyZSUyMHNjZW5pY3xlbnwxfHx8fDE3NzE5MDUwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "자연 속에 여행 🏔️", desc: "자연이 주는 위안" },
  { img: "https://images.unsplash.com/photo-1655760795950-9cb82352f089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGUlMjB0cmF2ZWwlMjBhcmNoaXRlY3R1cmUlMjBiZWF1dGlmdWx8ZW58MXx8fHwxNzcxOTA1MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "성장했던 여행 🏰", desc: "문화와 예술의 향연" },
  { img: "https://images.unsplash.com/photo-1760465789650-c1aa4ee6c714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aGVhc3QlMjBhc2lhJTIwdHJvcGljYWwlMjBiZWFjaCUyMHRyYXZlbHxlbnwxfHx8fDE3NzE5MDUwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "힐링했던 여행 🌴", desc: "따뜻한 바람과 미소" },
  { img: "https://images.unsplash.com/photo-1672110781309-7d9292d440b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRyYXZlbCUyMHRlbXBsZSUyMGF1dHVtbnxlbnwxfHx8fDE3NzE5MDUwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "소중한 여행 🇯🇵", desc: "고요한 아름다움의 나라" },
];

const travelPosts: BlogPost[] = [
  {
    id: "tr1", category: "travel", subcategory: "자연 속에 여행", title: "히말라야의 평화 🏔️", date: "2024.08.20",
    img: "https://images.unsplash.com/photo-1597434429739-2574d7e06807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMG5hdHVyZSUyMHNjZW5pY3xlbnwxfHx8fDE3NzE5MDUwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    preview: "히말라야 산기슭에서 만난 고요함은 제 영혼을 정화시켜 주었습니다.",
    fullContent: ["자연 앞에서는 인간이 얼마나 작은 존재인지 깨닫게 됩니다. 그 깨달음이 오히려 마음을 편안하게 해주었습니다. 🏔️"],
    comments: [],
  },
  {
    id: "tr2", category: "travel", subcategory: "성장했던 여행", title: "프라하의 밤 🌃", date: "2024.07.15",
    img: "https://images.unsplash.com/photo-1655760795950-9cb82352f089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGUlMjB0cmF2ZWwlMjBhcmNoaXRlY3R1cmUlMjBiZWF1dGlmdWx8ZW58MXx8fHwxNzcxOTA1MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    preview: "프라하의 카를교 위에서 만난 석양은 세상에서 가장 아름다운 풍경이었습니다.",
    fullContent: ["수백 년의 역사가 살아 숨 쉬는 그곳에서, 나의 고민은 한없이 작아졌습니다. 🏰"],
    comments: [],
  },
];

// 4. 취미
const hobbyPhotos = [
  { img: "https://images.unsplash.com/photo-1763368230669-3a2e97368032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYm9va3MlMjBsaWJyYXJ5JTIwY296eXxlbnwxfHx8fDE3NzE4OTczODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "책 📖", desc: "한 권의 책이 인생을 바꿉니다" },
  { img: "https://images.unsplash.com/photo-1759103570596-f957c99b4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHBpYW5vJTIwY2xhc3NpY2FsJTIwaW5zdHJ1bWVudHxlbnwxfHx8fDE3NzE5MDUwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "음악 🎵", desc: "영혼을 울리는 선율" },
  { img: "https://images.unsplash.com/photo-1636307268087-82fea49c541e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBtdXNldW0lMjBwYWludGluZyUyMGdhbGxlcnl8ZW58MXx8fHwxNzcxODUxMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "미술 🎨", desc: "색과 형태로 만나는 세상" },
  { img: "https://images.unsplash.com/photo-1729105137334-6811cf3dd5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2RhJTIwbWVkaXRhdGlvbiUyMGV4ZXJjaXNlJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzcxOTA1MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "운동 🧘‍♀️", desc: "요가와 명상으로 시작하는 하루" },
];

const hobbyPosts: BlogPost[] = [
  {
    id: "hb1", category: "hobby", subcategory: "책", title: "인생 책 한 권의 무게 📚", date: "2024.05.20",
    img: "https://images.unsplash.com/photo-1763368230669-3a2e97368032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYm9va3MlMjBsaWJyYXJ5JTIwY296eXxlbnwxfHx8fDE3NzE4OTczODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    preview: "수천 권의 책을 읽었지만, 인생을 바꾼 책은 손에 꼽습니다.",
    fullContent: ["《타이탄의 도구들》은 제 삶의 방향을 완전히 바꾸어 놓았습니다. 성공한 사람들의 작은 습관에서 큰 통찰을 얻었습니다. 💡"],
    comments: [],
  },
];

// 5. 사색과 음식
const contemplationFoodPhotos = [
  { img: "https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbmF0dXJlJTIwcGVhY2VmdWwlMjBjb250ZW1wbGF0aW9ufGVufDF8fHx8MTc3MTkwNTA5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "사색 🧘", desc: "고요 속에서 만나는 진정한 나" },
  { img: "https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBzZXJ2aWNlJTIwaGVscGluZ3xlbnwxfHx8fDE3NzE4MTE3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "봉사 🙏", desc: "나눔으로 얻는 행복" },
  { img: "https://images.unsplash.com/photo-1627984464075-cc47d83d70ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwaG9tZW1hZGUlMjBmb29kJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NzE5MDUwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "요리 🍲", desc: "사랑을 담는 시간" },
  { img: "https://images.unsplash.com/photo-1672172505672-babacdc28071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBmb29kJTIwbWFya2V0JTIwYXNpYW4lMjBuaWdodHxlbnwxfHx8fDE3NzE5MDUxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", label: "미식 여행 🍜", desc: "음식으로 만나는 세계" },
];

const contemplationFoodPosts: BlogPost[] = [
  {
    id: "cf1", category: "contemplation", subcategory: "사색", title: "고요한 새벽, 나를 만나는 시간 🌅", date: "2024.07.22",
    img: "https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbmF0dXJlJTIwcGVhY2VmdWwlMjBjb250ZW1wbGF0aW9ufGVufDF8fHx8MTc3MTkwNTA5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    preview: "사색은 가장 깊은 대화입니다. 세상의 소음을 멈추고, 내면의 목소리에 귀 기울이는 시간이 저를 단단하게 만듭니다.",
    fullContent: ["매주 일요일 아침, 한 시간의 명상 시간을 갖습니다. 아무 생각 없이 앉아있는 것 같지만, 그 시간이 가장 생산적인 시간입니다. ✨"],
    comments: [],
  },
  {
    id: "fd1", category: "contemplation", subcategory: "음식", title: "엄마의 된장찌개, 그리고 집밥의 의미 🍲", date: "2024.06.10",
    img: "https://images.unsplash.com/photo-1627984464075-cc47d83d70ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwaG9tZW1hZGUlMjBmb29kJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NzE5MDUwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    preview: "요리는 사랑의 표현입니다. 정성을 담아 만든 음식에는 말로 전하지 못하는 마음이 담겨 있습니다.",
    fullContent: ["어머니의 된장찌개 레시피를 따라 만들어 보지만, 그 맛은 나오지 않습니다. 아마도 그 안에 담긴 수십 년의 사랑을 흉내 낼 수는 없기 때문일 것입니다. 🥺"],
    comments: [],
  },
];


/* ════════════════════════════════════════════════
   PAGE COMPONENT
   ════════════════════════════════════════════════ */
export default function StoryPage() {
  const [activeTab, setActiveTab] = useState("people");
  const [peoplePosts, setPeoplePosts] = useState<BlogPost[]>(preciousPeoplePosts);
  const [storiesPosts, setStoriesPosts] = useState<BlogPost[]>(preciousStories);
  const [travelPostsState, setTravelPostsState] = useState<BlogPost[]>(travelPosts);
  const [hobbyPostsState, setHobbyPostsState] = useState<BlogPost[]>(hobbyPosts);
  const [contemplationFoodPostsState, setContemplationFoodPostsState] = useState<BlogPost[]>(contemplationFoodPosts);
  const [writingSection, setWritingSection] = useState<string | null>(null);

  const tabs = [
    { id: "people", label: "소중한 사람들", emoji: "💛" },
    { id: "stories", label: "소중한 이야기", emoji: "💎" },
    { id: "travel", label: "여행기", emoji: "✈️" },
    { id: "hobby", label: "취미", emoji: "🎨" },
    { id: "contemplation", label: "사색과 음식", emoji: "🍽️" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1586071365462-b7d5c1b4cc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wZmlyZSUyMGNhbXBpbmclMjBuaWdodCUyMGNvenl8ZW58MXx8fHwxNzcxODE4NzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Story hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-[800px]">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-xl rounded-full mb-5 border border-white/15">
              <span style={{ fontSize: "0.82rem" }}>💬</span>
              <span style={{ fontSize: "0.82rem" }} className="text-white/80">My Story</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 600, lineHeight: 1.2 }}>
              삶을 빛내는 <span className="bg-gradient-to-r from-[#FFD93D] via-[#FF6B6B] to-[#FFD93D] bg-clip-text text-transparent">이야기들</span> ✨
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60" style={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}>
              사람, 여행, 일상, 그리고 소중한 순간들의 기록 💛
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Tab Nav */}
      <div className="sticky top-[68px] z-40 bg-white/90 backdrop-blur-xl border-b border-[#f0ebe3]/50 shadow-sm">
        <div className="max-w-[1100px] mx-auto px-6 py-3">
          <div className="flex gap-1.5 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  document.getElementById(`section-${tab.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`shrink-0 px-4 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? "bg-[#2a2a2a] text-white shadow-md"
                    : "bg-[#faf7f2] text-[#888] hover:bg-[#f0ebe3] hover:text-[#555]"
                }`}
                style={{ fontSize: "0.82rem", fontWeight: activeTab === tab.id ? 600 : 400 }}
              >
                <span style={{ fontSize: "0.9rem" }}>{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 1. 소중한 사람들 */}
      <section id="section-people" className="py-14 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <SectionHeader 
              label="PRECIOUS PEOPLE" 
              title="나의 소중한 사람들 💛" 
              subtitle="가족, 친구, 지인, 감사한 사람들" 
              emoji="👨‍👩‍👧‍👦" 
            />

            <PhotoGrid photos={preciousPeoplePhotos} />
            
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setWritingSection(writingSection === "people" ? null : "people")}
                className="flex items-center gap-2 px-6 py-3 bg-[#2a2a2a] text-white rounded-xl hover:bg-[#444] transition-all shadow-md group"
                style={{ fontSize: "0.9rem", fontWeight: 600 }}
              >
                <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                이야기 등록
              </button>
            </div>
            
            <AnimatePresence>
              {writingSection === "people" && (
                <PostForm 
                  category="people" 
                  subcategories={["가족", "친구", "지인", "감사한 사람들"]}
                  onAdd={(post) => setPeoplePosts([post, ...peoplePosts])} 
                  onCancel={() => setWritingSection(null)} 
                />
              )}
            </AnimatePresence>

            <div className="w-full">
              <StoryBoard posts={peoplePosts} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. 소중한 이야기 */}
      <section id="section-stories" className="py-14 px-6 lg:px-12 bg-gradient-to-br from-[#faf7f2] to-[#f5efe6] scroll-mt-[130px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <SectionHeader 
              label="PRECIOUS MOMENTS" 
              title="나의 소중한 이야기 ✨" 
              subtitle="사람의 변화, 인생의 변화, 삶에서 배운 것, 사람들에게 배운 것" 
              emoji="💎" 
            />

            <div className="flex justify-center mb-8">
              <button
                onClick={() => setWritingSection(writingSection === "stories" ? null : "stories")}
                className="flex items-center gap-2 px-6 py-3 bg-[#2a2a2a] text-white rounded-xl hover:bg-[#444] transition-all shadow-md group"
                style={{ fontSize: "0.9rem", fontWeight: 600 }}
              >
                <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                이야기 등록
              </button>
            </div>

            <AnimatePresence>
              {writingSection === "stories" && (
                <PostForm 
                  category="stories"
                  subcategories={["사람의 변화", "인생의 변화", "삶에서 배운 것", "사람들에게 배운 것"]}
                  onAdd={(post) => setStoriesPosts([post, ...storiesPosts])} 
                  onCancel={() => setWritingSection(null)} 
                />
              )}
            </AnimatePresence>

            <div className="w-full">
              <StoryBoard posts={storiesPosts} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. 여행기 */}
      <section id="section-travel" className="py-14 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <SectionHeader 
              label="TRAVEL STORIES" 
              title="나의 여행기 ✈️" 
              subtitle="자연 속에 여행, 성장했던 여행, 힐링했던 여행, 소중한 여행" 
              emoji="🗺️" 
            />

            <PhotoGrid photos={travelPhotos} />
            
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setWritingSection(writingSection === "travel" ? null : "travel")}
                className="flex items-center gap-2 px-6 py-3 bg-[#2a2a2a] text-white rounded-xl hover:bg-[#444] transition-all shadow-md group"
                style={{ fontSize: "0.9rem", fontWeight: 600 }}
              >
                <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                이야기 등록
              </button>
            </div>

            <AnimatePresence>
              {writingSection === "travel" && (
                <PostForm 
                  category="travel"
                  subcategories={["자연 속에 여행", "성장했던 여행", "힐링했던 여행", "소중한 여행"]}
                  onAdd={(post) => setTravelPostsState([post, ...travelPostsState])} 
                  onCancel={() => setWritingSection(null)} 
                />
              )}
            </AnimatePresence>

            <div className="w-full">
              <StoryBoard posts={travelPostsState} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. 취미 */}
      <section id="section-hobby" className="py-14 px-6 lg:px-12 bg-gradient-to-br from-[#faf7f2] to-[#f5efe6] scroll-mt-[130px]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <SectionHeader 
              label="HOBBIES" 
              title="취미 🎨" 
              subtitle="책, 음악, 미술, 운동" 
              emoji="🎨" 
            />

            <PhotoGrid photos={hobbyPhotos} />
            
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setWritingSection(writingSection === "hobby" ? null : "hobby")}
                className="flex items-center gap-2 px-6 py-3 bg-[#2a2a2a] text-white rounded-xl hover:bg-[#444] transition-all shadow-md group"
                style={{ fontSize: "0.9rem", fontWeight: 600 }}
              >
                <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                이야기 등록
              </button>
            </div>

            <AnimatePresence>
              {writingSection === "hobby" && (
                <PostForm 
                  category="hobby"
                  subcategories={["책", "음악", "미술", "운동"]}
                  onAdd={(post) => setHobbyPostsState([post, ...hobbyPostsState])} 
                  onCancel={() => setWritingSection(null)} 
                />
              )}
            </AnimatePresence>

            <div className="w-full">
              <StoryBoard posts={hobbyPostsState} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. 사색과 음식 */}
      <section id="section-contemplation" className="py-14 px-6 lg:px-12 scroll-mt-[130px]">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <SectionHeader 
              label="CONTEMPLATION & FOOD" 
              title="사색과 음식 🍽️" 
              subtitle="사색, 봉사, 요리, 미식 여행" 
              emoji="🍽️" 
            />

            <PhotoGrid photos={contemplationFoodPhotos} />
            
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setWritingSection(writingSection === "contemplation" ? null : "contemplation")}
                className="flex items-center gap-2 px-6 py-3 bg-[#2a2a2a] text-white rounded-xl hover:bg-[#444] transition-all shadow-md group"
                style={{ fontSize: "0.9rem", fontWeight: 600 }}
              >
                <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                이야기 등록
              </button>
            </div>

            <AnimatePresence>
              {writingSection === "contemplation" && (
                <PostForm 
                  category="contemplation"
                  subcategories={["사색", "봉사", "요리", "미식 여행"]}
                  onAdd={(post) => setContemplationFoodPostsState([post, ...contemplationFoodPostsState])} 
                  onCancel={() => setWritingSection(null)} 
                />
              )}
            </AnimatePresence>

            <div className="w-full">
              <StoryBoard posts={contemplationFoodPostsState} />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
