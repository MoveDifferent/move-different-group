import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "/about" },
  {
    name: "Divisions",
    href: "#",
    subLinks: [
      { name: "Digital (IDN)", href: "/digital" },
      { name: "Logistics", href: "/logistics" },
      { name: "Interiors (54 Inspired)", href: "/interiors" },
      { name: "Fitness (MD Fitness)", href: "/fitness" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Impact", href: "/impact" },
  { name: "Investors", href: "/investors" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-deep/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
            <span className="text-white font-serif font-bold text-xl">M</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-serif font-bold text-lg tracking-wider">MOVE DIFFERENT</span>
            <span className="text-primary text-[10px] tracking-[0.2em] font-medium">GROUP</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.subLinks ? (
                <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer">
                  {link.name} <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href ? "text-primary" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              )}

              {link.subLinks && (
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200">
                  <div className="bg-navy-mid border border-white/10 rounded-lg p-2 shadow-xl">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-6">
              CONTACT US
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-navy-deep z-50 lg:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                  <span className="text-white font-serif font-bold text-lg">M</span>
                </div>
                <span className="text-white font-serif font-bold text-md tracking-wider">MOVE DIFFERENT</span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <div className="flex flex-col gap-3">
                      <span className="text-sm font-bold text-white/40 uppercase tracking-widest">{link.name}</span>
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="text-2xl font-serif text-white hover:text-primary transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-serif text-white hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-white/10">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary py-6 text-lg font-serif">GET IN TOUCH</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}