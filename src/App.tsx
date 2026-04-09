import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Toaster } from 'sonner';
import { HelmetProvider } from 'react-helmet-async';

import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Investors from './pages/Investors';
import Impact from './pages/Impact';
import Portfolio from './pages/Portfolio';
import Divisions from './pages/Divisions';

// Import individual division pages
import Digital from './pages/divisions/Digital';
import Logistics from './pages/divisions/Logistics';
import Interiors from './pages/divisions/Interiors';
import Fitness from './pages/divisions/Fitness';

import './styles.css';

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HelmetProvider>
      <Router>
        <Toaster position="top-center" richColors />
        
        {/* Scroll Progress Indicator */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-[#1DB954] z-[200] origin-left" 
          style={{ scaleX }}
        />

        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/investors" element={<PageTransition><Investors /></PageTransition>} />
              <Route path="/impact" element={<PageTransition><Impact /></PageTransition>} />
              <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
              <Route path="/companies" element={<PageTransition><Divisions /></PageTransition>} />
              
              {/* Division Routes */}
              <Route path="/digital" element={<PageTransition><Digital /></PageTransition>} />
              <Route path="/logistics" element={<PageTransition><Logistics /></PageTransition>} />
              <Route path="/interiors" element={<PageTransition><Interiors /></PageTransition>} />
              <Route path="/fitness" element={<PageTransition><Fitness /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}