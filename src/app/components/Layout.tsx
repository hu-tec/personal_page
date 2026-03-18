import { Outlet, NavLink, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/career", label: "CAREER" },
  { path: "/life", label: "LIFE" },
  { path: "/future", label: "FUTURE" },
  { path: "/story", label: "STORY" },
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-['Noto_Serif_KR',serif]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#3A2E23] shadow-[0_1px_20px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[80px]">
          <NavLink
            to="/"
            className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] tracking-wide text-white transition-colors duration-300 flex items-center gap-2"
            style={{ fontSize: "1.5rem", fontWeight: 600 }}
          >
            <Sparkles size={18} className="text-[#c9a96e]" />
            Jinny Park
          </NavLink>

          {/* Center Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative px-5 py-2 rounded-full transition-all duration-300 text-white/70 tracking-widest ${
                    isActive
                      ? "text-[#c9a96e] font-bold"
                      : "hover:text-white"
                  }`
                }
                style={{ fontSize: "0.85rem", fontWeight: 500 }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side SNS Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-white/60 hover:text-[#c9a96e] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/60 hover:text-[#c9a96e] transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-white/60 hover:text-[#c9a96e] transition-colors"><Youtube size={20} /></a>
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
      <footer className="bg-[#030213] py-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center gap-8">
            <div>
              <p
                className="font-['Cormorant_Garamond','Noto_Serif_KR',serif] text-white mb-3 flex items-center justify-center gap-2"
                style={{ fontSize: "1.6rem", fontWeight: 600 }}
              >
                <Sparkles size={18} className="text-[#c9a96e]" />
                Jinny Park
              </p>
              <p className="text-white/40 font-light tracking-wide" style={{ fontSize: "0.9rem" }}>
                교육 · 언어 · AI의 경계를 허물며 더 나은 내일을 만듭니다
              </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              {["HOME", "CAREER", "LIFE", "FUTURE", "STORY"].map((label, i) => (
                <NavLink
                  key={i}
                  to={["/" , "/career", "/life", "/future", "/story"][i]}
                  className="px-6 py-2.5 rounded-full bg-white/5 text-white/50 hover:text-[#c9a96e] hover:bg-white/10 transition-all border border-white/5"
                  style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em" }}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
          <div
            className="mt-12 pt-8 border-t border-white/5 text-center text-white/20 font-light"
            style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}
          >
            <p>© 2025 Jinny Park · Professional Integrity</p>
            <p className="mt-2 opacity-50 font-['Montserrat'] uppercase tracking-widest" style={{ fontSize: "0.7rem" }}>jinnypark116@gmail.com · 02-6207-9090</p>
          </div>
        </div>
      </footer>
    </div>
  );
}