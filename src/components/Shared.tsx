import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const SectionLabel = ({ text, light = false }: { text: string; light?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-6"
  >
    <div className={`h-[1px] w-10 ${light ? 'bg-white/40' : 'bg-[#1DB954]'}`} />
    <span className={`label-caps ${light ? 'text-white' : 'text-[#1DB954]'}`}>{text}</span>
    <div className={`h-[1px] w-10 ${light ? 'bg-white/20' : 'bg-[#1DB954]/30'}`} />
  </motion.div>
);

export const AnimatedButton = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false,
  style
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'gold' | 'ghost' | 'white'; 
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  style?: React.CSSProperties;
}) => {
  const variants = {
    primary: "bg-[#1DB954] text-white shadow-green hover:bg-[#16A34A]",
    secondary: "border-[1.5px] border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954]/10",
    gold: "gradient-gold text-[#0B1120] shadow-gold",
    ghost: "text-white/65 hover:text-white",
    white: "bg-white text-[#0B1120] hover:bg-white/90 shadow-lg"
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={style}
      className={`px-6 h-12 rounded-lg font-heading text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export const StatCounter = ({ value, label, suffix = "+", color }: { value: number; label: string; suffix?: string; color?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animationFrameId = window.requestAnimationFrame(step);
        observer.disconnect();
      }
    });

    const element = document.getElementById(`stat-${label.replace(/\\\\s+/g, '-')}`);
    if (element) observer.observe(element);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [value, label]);

  return (
    <div id={`stat-${label.replace(/\\\\s+/g, '-')}`} className="flex flex-col">
      <span className={`stat-number text-white`} style={color ? { color } : {}}>{count.toLocaleString()}{suffix}</span>
      <span className="label-caps text-[#4A6080] mt-2">{label}</span>
    </div>
  );
};