import React from 'react';
import { motion } from 'framer-motion';

export const SectionLabel = ({ text }: { text: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center justify-center lg:justify-start gap-4 mb-6"
  >
    <div className="h-[1px] w-10 bg-[#1DB954]" />
    <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#1DB954] font-heading">{text}</span>
    <div className="h-[1px] w-10 bg-[#1DB954]/30" />
  </motion.div>
);