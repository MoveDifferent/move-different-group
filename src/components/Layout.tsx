import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Truck, 
  Phone,
  Home as HomeIcon,
  Info,
  Mail,
  Building2
} from 'lucide-react';
import { Toaster } from 'sonner';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { WhatsAppButton } from './layout/WhatsAppButton';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const bottomNavLinks = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Companies', path: '/companies', icon: Building2 },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <div className="bg-md-navy text-white min-h-screen selection:bg-md-green/30 selection:text-white overflow-x-hidden">
      <Toaster position="top-center" richColors theme="dark" />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-md-green z-[200] origin-left" 
        style={{ scaleX }}
      />
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      
      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-md-navy/95 backdrop-blur-xl border-t border-white/10 z-[100] flex items-center justify-around px-4">
        {bottomNavLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path} 
            className={`flex flex-col items-center gap-1 transition-colors min-w-[64px] min-h-[48px] justify-center ${pathname === link.path ? 'text-md-green' : 'text-md-slate hover:text-white'}`}
          >
            <link.icon size={20} />
            <span className="text-[9px] uppercase font-bold tracking-wider">{link.name}</span>
          </Link>
        ))}
      </div>
      
      {/* Spacer for bottom nav on mobile */}
      <div className="lg:hidden h-16" />
    </div>
  );
};