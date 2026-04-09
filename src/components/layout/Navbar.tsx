import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Truck, 
  LayoutDashboard, 
  Dumbbell, 
  ArrowRight
} from 'lucide-react';
import { AnimatedButton } from '../Shared';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMegaOpen, setIsMegaOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setIsMenuOpen(false);
    setIsMegaOpen(false);
  }, [location.pathname]);

  const companies = [
    { name: "Infinite Digital Network", icon: Globe, color: "#2563EB", desc: "Digital Marketing & Tech", path: '/digital' },
    { name: "Move Different Logistics", icon: Truck, color: "#F59E0B", desc: "Logistics & Transport", path: '/logistics' },
    { name: "54 Inspired Interiors", icon: LayoutDashboard, color: "#C2714F", desc: "Design & Construction", path: '/interiors' },
    { name: "MD Fitness", icon: Dumbbell, color: "#16A34A", desc: "Health & Fitness", path: '/fitness' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Impact', path: '/impact' },
    { name: 'Investors', path: '/investors' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'h-[72px] bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'h-[88px] bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none">
            <div className="flex items-center gap-1">
              <span className="font-serif text-xl md:text-2xl font-bold text-white whitespace-nowrap">Move Different</span>
              <span className="font-serif text-xl md:text-2xl font-bold text-[#1DB954]">Group</span>
            </div>
            <span className="text-[9px] font-heading text-[#4A6080] uppercase tracking-[0.2em] mt-1">East Africa's Premier Conglomerate</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-heading font-medium transition-all duration-300 relative group ${location.pathname === link.path ? 'text-[#1DB954]' : 'text-white/70 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1DB954] transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
              </Link>
            ))}
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsMegaOpen(true)}
              onMouseLeave={() => setIsMegaOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-sm font-heading font-medium text-white/70 hover:text-white transition-all cursor-pointer group">
                Divisions <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isMegaOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[640px] bg-[#112240] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 grid grid-cols-2 gap-10"
                  >
                    <div>
                      <h4 className="label-caps text-[#1DB954] mb-6 flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#1DB954] rounded-full" />
                        Our Business Units
                      </h4>
                      <div className="space-y-4">
                        {companies.map((c) => (
                          <Link key={c.name} to={c.path} className="group/item flex items-start gap-4 p-3 -m-3 rounded-xl hover:bg-white/5 transition-all">
                            <div className="p-2.5 rounded-lg bg-[#0B1120] border border-white/5" style={{ color: c.color }}>
                              <c.icon size={20} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white group-hover/item:text-[#1DB954] transition-colors">{c.name}</p>
                              <p className="text-[11px] text-[#4A6080] mt-0.5">{c.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="label-caps text-[#C9A84C] mb-6 flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#C9A84C] rounded-full" />
                        Quick Access
                      </h4>
                      <div className="space-y-4 flex-1">
                        <Link to="/companies" className="block text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all">Divisions Overview</Link>
                        <Link to="/portfolio" className="block text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all">Latest Projects</Link>
                        <Link to="/impact" className="block text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all">Impact Report</Link>
                        <Link to="/investors" className="block text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all">Investor Portal</Link>
                      </div>
                      <div className="mt-8 pt-6 border-t border-white/5">
                        <Link to="/companies" className="flex items-center gap-2 text-sm text-[#1DB954] font-bold hover:gap-4 transition-all">
                          View All Companies <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/investors">
              <AnimatedButton variant="gold" className="h-11 px-6 text-[10px] uppercase tracking-widest">Investors</AnimatedButton>
            </Link>
          </div>

          <button className="lg:hidden text-white cursor-pointer min-w-[48px] min-h-[48px] flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[150] bg-[#0B1120] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/5">
              <div className="flex items-center gap-1">
                <span className="font-serif text-xl font-bold text-white">Move Different</span>
                <span className="font-serif text-xl font-bold text-[#1DB954]">Group</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="text-white cursor-pointer min-w-[48px] min-h-[48px] flex items-center justify-center"><X size={32} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 space-y-12">
              <div className="flex flex-col gap-8">
                {navLinks.map(link => (
                  <Link key={link.path} to={link.path} className="text-4xl font-serif font-bold text-white" onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                ))}
                <Link to="/companies" className="text-4xl font-serif font-bold text-[#1DB954]" onClick={() => setIsMenuOpen(false)}>Our Companies</Link>
              </div>
              <div className="pt-12 border-t border-white/5 space-y-4">
                <Link to="/contact" className="block" onClick={() => setIsMenuOpen(false)}>
                  <AnimatedButton variant="primary" className="w-full h-16 text-lg">Get In Touch</AnimatedButton>
                </Link>
                <Link to="/investors" className="block" onClick={() => setIsMenuOpen(false)}>
                  <AnimatedButton variant="gold" className="w-full h-16 text-lg">Investor Portal</AnimatedButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};