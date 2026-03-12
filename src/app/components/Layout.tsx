import { Outlet, NavLink, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { path: "/", label: "Home", emoji: "✨" },
  { path: "/career", label: "경력 발자취", emoji: "🚀" },
  { path: "/life", label: "삶의 발자취", emoji: "🌿" },
  { path: "/future", label: "나아갈 길", emoji: "🌍" },
  { path: "/story", label: "나의 이야기", emoji: "💬" },
];

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-['Noto_Serif_KR',serif]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[68px]">
          <NavLink
            to="/"
            className={`font-['Cormorant_Garamond','Noto_Serif_KR',serif] tracking-wide transition-colors duration-300 flex items-center gap-2 ${
              scrolled ? "text-[#2a2a2a]" : "text-white"
            }`}
            style={{ fontSize: "1.4rem", fontWeight: 600 }}
          >
            <Sparkles size={18} className="text-[#c9a96e]" />
            Jinny Park
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-full transition-all duration-300 ${
                    scrolled ? "text-[#555]" : "text-white/90"
                  } ${
                    isActive
                      ? scrolled
                        ? "bg-[#f5efe6] text-[#8b6914]"
                        : "bg-white/15 text-white backdrop-blur-sm"
                      : "hover:bg-white/10"
                  }`
                }
                style={{ fontSize: "0.88rem", fontWeight: 500 }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden transition-colors p-2 rounded-full ${
              scrolled ? "text-[#2a2a2a] hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100/50 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `py-3 px-4 rounded-xl transition-colors text-[#2a2a2a] flex items-center gap-3 ${
                        isActive
                          ? "bg-gradient-to-r from-[#f5efe6] to-[#faf7f2] text-[#8b6914]"
                          : "hover:bg-gray-50"
                      }`
                    }
                    style={{ fontSize: "0.95rem" }}
                  >
                    <span>{item.emoji}</span>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#faf7f2] to-[#f5efe6] py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center gap-6">
            <div>
              <p
                className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-[#2a2a2a] mb-2 flex items-center justify-center gap-2"
                style={{ fontSize: "1.3rem", fontWeight: 600 }}
              >
                <Sparkles size={16} className="text-[#c9a96e]" />
                Jinny Park
              </p>
              <p className="text-[#999]" style={{ fontSize: "0.85rem" }}>
                교육 · 언어 · AI의 경계를 허물며 더 나은 내일을 만듭니다 ✨
              </p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              {["🏠 Home", "🚀 Career", "🌿 Life", "🌍 Future", "💬 Story"].map((label, i) => (
                <NavLink
                  key={i}
                  to={["/" , "/career", "/life", "/future", "/story"][i]}
                  className="px-4 py-2 rounded-full bg-white/80 text-[#777] hover:text-[#2a2a2a] hover:bg-white transition-all border border-[#e8e0d4]/50"
                  style={{ fontSize: "0.8rem" }}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
          <div
            className="mt-8 pt-6 border-t border-[#e8e0d4]/50 text-center text-[#bbb]"
            style={{ fontSize: "0.8rem" }}
          >
            <p>© 2025 Jinny Park · Made with 💛</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
