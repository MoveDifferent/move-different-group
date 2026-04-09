import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const WhatsAppButton = () => {
  const { pathname } = useLocation();
  const pageName = pathname === '/' ? 'Home' : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
  const waMessage = encodeURIComponent(`Hello Move Different Group, I am reaching out from your ${pageName} page.`);

  return (
    <motion.a
      href={`https://wa.me/254798852545?text=${waMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-20 md:bottom-8 right-6 md:right-8 z-[9999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-deep group"
      aria-label="WhatsApp Us Now"
    >
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-[#25D366] rounded-full opacity-30"
      />
      <MessageCircle className="text-white relative z-10" size={28} />
      <div className="absolute right-full mr-4 bg-md-navy text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-white/10 hidden md:block">
        Fastest response via WhatsApp
      </div>
    </motion.a>
  );
};