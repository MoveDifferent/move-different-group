import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Truck, LayoutDashboard, Dumbbell, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const divisions = [
  {
    name: "Infinite Digital Network",
    email: "digital@movedifferent.co.ke",
    color: "#2563EB",
    icon: Globe,
    path: "/digital",
    tagline: "Digital Transformation"
  },
  {
    name: "Move Different Logistics",
    email: "logistics@movedifferent.co.ke",
    color: "#F59E0B",
    icon: Truck,
    path: "/logistics",
    tagline: "Regional Logistics"
  },
  {
    name: "54 Inspired Interiors",
    email: "interiors@movedifferent.co.ke",
    color: "#C2714F",
    icon: LayoutDashboard,
    path: "/interiors",
    tagline: "Luxury Interiors"
  },
  {
    name: "MD Fitness",
    email: "fitness@movedifferent.co.ke",
    color: "#16A34A",
    icon: Dumbbell,
    path: "/fitness",
    tagline: "Performance Wellness"
  }
];

export const DivisionCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {divisions.map((div, i) => (
        <motion.div
          key={div.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-[#112240] p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all group shadow-2xl relative overflow-hidden"
        >
          <div 
            className="absolute top-0 right-0 w-32 h-32 opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full"
            style={{ backgroundColor: div.color }}
          />
          
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-[#0B1120] group-hover:scale-110 transition-transform"
            style={{ color: div.color }}
          >
            <div.icon size={32} />
          </div>
          
          <span className="label-caps text-[10px] text-white/40 mb-3 block">{div.tagline}</span>
          <h4 className="font-heading font-bold text-white mb-6 text-xl leading-tight">{div.name}</h4>
          
          <div className="flex items-center gap-3 mb-10">
            <Mail size={14} className="text-[#4A6080]" />
            <p className="text-[11px] text-[#4A6080] break-all uppercase font-bold tracking-widest">{div.email}</p>
          </div>
          
          <Link 
            to={div.path}
            className="flex items-center gap-2 text-sm font-bold text-[#1DB954] group-hover:gap-4 transition-all"
          >
            Contact Division <ArrowRight size={16} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};