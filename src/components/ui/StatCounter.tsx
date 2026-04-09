import React from 'react';
import { motion, useInView } from 'framer-motion';

export const StatCounter = ({ value, label, prefix = "", suffix = "" }: { value: string, label: string, prefix?: string, suffix?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl md:text-5xl font-serif font-bold text-white mb-2"
      >
        {prefix}{value}{suffix}
      </motion.div>
      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-md-slate">{label}</div>
    </div>
  );
};