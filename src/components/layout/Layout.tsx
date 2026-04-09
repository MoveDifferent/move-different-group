import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Truck, 
  LayoutDashboard, 
  Dumbbell, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Youtube, 
  Facebook, 
  MessageCircle,
  Layers
} from 'lucide-react';
import { AnimatedButton } from '../Shared';
import { useStore } from '../../store/useStore';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMenuOpen, setMenuOpen } = useStore();
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location, setMenuOpen]);

  const companies = [
    { name: "Infinite Digital Network", icon: Globe, color: "#2563EB", desc: "Digital Marketing & Technology", path: "/digital" },
    { name: "Move Different Logistics", icon: Truck, color: "#F59E0B", desc: "Logistics & Transport", path: "/logistics" },
    { name: "54 Inspired Interiors", icon: LayoutDashboard, color: "#C2714F", desc: "Design & Construction", path: "/interiors" },
    { name: "MD Fitness", icon: Dumbbell, color: "#16A34A", desc: "Health & Fitness", path: "/fitness" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'h-[60px] md:h-[72px] bg-[#0B1120]/95 backdrop-blur-xl border-b border-[#1DB954]/15' : 'h-[72px] md:h-[88px] bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none cursor-pointer">
            <div className="flex items-center gap-1">
              <span className="font-serif text-2xl font-bold text-white">Move Different</span>
              <span className="font-serif text-2xl font-bold text-[#1DB954]">Group</span>
            </div>
            <span className="text-[9px] font-heading text-[#4A6080] uppercase tracking-widest mt-1">East Africa's Premier Conglomerate</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-heading text-white/75 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-heading text-white/75 hover:text-white transition-colors">About</Link>
            <div 
              className="relative group"
              onMouseEnter={() => setIsMegaOpen(true)}
              onMouseLeave={() => setIsMegaOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-heading text-white/75 hover:text-white transition-colors cursor-pointer">
                Our Companies <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isMegaOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-[#112240] border border-white/10 rounded-xl overflow-hidden shadow-deep p-6 grid grid-cols-2 gap-8"
                  >
                    <div>
                      <h4 className="label-caps text-[#1DB954] mb-4">Our Divisions</h4>
                      <div className="space-y-4">
                        {companies.map((c) => (
                          <Link key={c.name} to={c.path} className="group/item flex items-start gap-4 cursor-pointer p-2 -m-2 rounded-lg hover:bg-white/5 transition-colors">
                            <div className="p-2 rounded-md bg-[#1B3A5C]" style={{ color: c.color }}>
                              <c.icon size={18} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white group-hover/item:text-[#1DB954] transition-colors">{c.name}</p>
                              <p className="text-xs text-[#4A6080]">{c.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="label-caps text-[#1DB954] mb-4">Group Links</h4>
                      <div className="space-y-3">
                        <Link to="/companies" className="block text-sm text-[#1DB954] font-semibold hover:text-white transition-colors">Ecosystem Overview</Link>
                        <Link to="/portfolio" className="block text-sm text-white/60 hover:text-white transition-colors">Portfolio Overview</Link>
                        <Link to="/impact" className="block text-sm text-white/60 hover:text-white transition-colors">Our Impact</Link>
                        <Link to="/investors" className="block text-sm text-white/60 hover:text-white transition-colors">Investor Center</Link>
                        <Link to="/about#leadership" className="block text-sm text-white/60 hover:text-white transition-colors">Leadership Team</Link>
                      </div>
                      <div className="mt-8 pt-6 border-t border-white/5">
                        <Link to="/portfolio" className="flex items-center gap-2 text-sm text-[#1DB954] font-semibold hover:gap-3 transition-all">
                          View All Projects <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/impact" className="text-sm font-heading text-white/75 hover:text-white transition-colors">Impact</Link>
            <Link to="/investors" className="text-sm font-heading text-white/75 hover:text-white transition-colors">Investors</Link>
            <Link to="/contact" className="text-sm font-heading text-white/75 hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/investors">
              <AnimatedButton variant="gold" className="h-10 text-xs">Investors \\u2197</AnimatedButton>
            </Link>
            <Link to="/contact">
              <AnimatedButton variant="primary" className="h-10 text-xs">Work With Us</AnimatedButton>
            </Link>
          </div>

          <button className="lg:hidden text-white cursor-pointer" onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            <div className="flex items-center justify-between px-6 h-[60px] border-b border-white/10">
              <div className="flex items-center gap-1">
                <span className="font-serif text-xl font-bold text-white">Move Different</span>
              </div>
              <button onClick={() => setMenuOpen(false)} className="text-white cursor-pointer"><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              <div className="flex flex-col gap-6">
                {[ 
                  { name: 'Home', path: '/' }, 
                  { name: 'About', path: '/about' }, 
                  { name: 'Ecosystem', path: '/companies' }, 
                  { name: 'Impact', path: '/impact' }, 
                  { name: 'Portfolio', path: '/portfolio' }, 
                  { name: 'Investors', path: '/investors' }, 
                  { name: 'Contact', path: '/contact' } 
                ].map(link => (
                  <Link key={link.name} to={link.path} className="text-2xl font-serif font-bold text-white" onClick={() => setMenuOpen(false)}>{link.name}</Link>
                ))}
                <div className="pt-4 space-y-4">
                  <p className="label-caps text-[#1DB954]">Divisions</p>
                  {companies.map(c => (
                    <Link key={c.name} to={c.path} className="block text-lg text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>{c.name}</Link>
                  ))}
                </div>
              </div>
              <div className="pt-8 border-t border-white/10 space-y-4">
                <Link to="/contact" className="block"><AnimatedButton variant="primary" className="w-full">Work With Us</AnimatedButton></Link>
                <Link to="/investors" className="block"><AnimatedButton variant="secondary" className="w-full">Investor Portal</AnimatedButton></Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-[#080E1A] border-t border-[#1DB954]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1 mb-6">
              <span className="font-serif text-2xl font-bold text-white">Move Different</span>
              <span className="font-serif text-2xl font-bold text-[#1DB954]">Group</span>
            </div>
            <p className="body-md text-[#4A6080] mb-8">
              East Africa's premier multi-division conglomerate. We move different to build a better future.
            </p>
            <div className="flex items-center gap-4">
              <Linkedin className="text-[#4A6080] hover:text-white cursor-pointer transition-colors" size={20} />
              <Instagram className="text-[#4A6080] hover:text-white cursor-pointer transition-colors" size={20} />
              <Twitter className="text-[#4A6080] hover:text-white cursor-pointer transition-colors" size={20} />
              <Youtube className="text-[#4A6080] hover:text-white cursor-pointer transition-colors" size={20} />
              <Facebook className="text-[#4A6080] hover:text-white cursor-pointer transition-colors" size={20} />
            </div>
            <div className="mt-8 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
              <span className="text-xs text-[#4A6080]">Committed to Sustainable Growth</span>
            </div>
          </div>

          <div>
            <h4 className="label-caps text-white mb-6">Divisions</h4>
            <ul className="space-y-4 text-[#4A6080] body-md">
              <li><Link to="/digital" className="hover:text-[#1DB954] transition-colors">Infinite Digital Network</Link></li>
              <li><Link to="/logistics" className="hover:text-[#1DB954] transition-colors">Move Different Logistics</Link></li>
              <li><Link to="/interiors" className="hover:text-[#1DB954] transition-colors">54 Inspired Interiors</Link></li>
              <li><Link to="/fitness" className="hover:text-[#1DB954] transition-colors">MD Fitness</Link></li>
              <li className="pt-2 border-t border-white/5"><Link to="/companies" className="text-[#1DB954] font-semibold">Ecosystem Overview</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-caps text-white mb-6">Group</h4>
            <ul className="space-y-4 text-[#4A6080] body-md">
              <li><Link to="/about" className="hover:text-white transition-colors">About the Group</Link></li>
              <li><Link to="/about#leadership" className="hover:text-white transition-colors">Leadership Team</Link></li>
              <li><Link to="/investors" className="hover:text-white transition-colors">Investor Relations</Link></li>
              <li><Link to="/impact" className="hover:text-white transition-colors">Impact Report</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Project Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-caps text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-[#4A6080] body-md">
              <li>Westlands Business Park</li>
              <li>Nairobi, Kenya</li>
              <li>+254 798 852 545</li>
              <li className="text-[#1DB954] font-semibold">enquiries@movedifferent.group</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/30">\\u00a9 2024 Move Different Group. All Rights Reserved.</span>
          <div className="flex items-center gap-8">
            <span className="text-xs text-white/30 hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-white/30 hover:text-white cursor-pointer">Terms of Service</span>
            <span className="text-xs text-white/30 hover:text-white cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/254798852545?text=Hello%20Move%20Different%20Group"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[200] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-deep group"
    >
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-[#25D366] rounded-full opacity-30"
      />
      <MessageCircle className="text-white relative z-10" size={28} />
      <div className="absolute right-full mr-4 bg-[#0B1120] text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </div>
    </motion.a>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#0B1120] text-white min-h-screen selection:bg-[#1DB954]/30">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};