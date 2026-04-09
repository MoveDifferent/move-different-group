import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedButton = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button'
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'gold' | 'ghost' | 'whatsapp'; 
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}) => {
  const variants = {
    primary: "bg-[#1DB954] text-white shadow-[0_10px_20px_-10px_rgba(29,185,84,0.3)] hover:bg-[#16A34A]",
    secondary: "border-[1.5px] border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954]/10",
    gold: "bg-gradient-to-r from-[#D4AF37] to-[#F1D279] text-[#0B1120] shadow-[0_10px_20px_-10px_rgba(212,175,55,0.3)]",
    ghost: "text-white/65 hover:text-white",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      className={`px-6 h-12 rounded-lg font-heading text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};