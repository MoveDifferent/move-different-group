import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Share2, Facebook, Github, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-md-dark pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-md-green/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex flex-col leading-none">
              <div className="flex items-center gap-1">
                <span className="font-serif text-2xl font-bold text-white">Move Different</span>
                <span className="font-serif text-2xl font-bold text-md-green">Group</span>
              </div>
              <span className="text-[10px] font-heading text-md-slate uppercase tracking-widest mt-2">East Africa's Premier Conglomerate</span>
            </Link>
            <p className="body-md text-md-slate max-w-xs">
              Strategically building brands and growing industries from Nairobi to the world. Built for Africa, Built for the Future.
            </p>
            <div className="flex gap-4 pt-2">
              {[Linkedin, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-md-accent flex items-center justify-center text-md-slate hover:text-md-green hover:bg-md-green/10 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="label-caps text-white mb-8">Our Divisions</h4>
            <ul className="space-y-4">
              {['Infinite Digital Network', 'Move Different Logistics', '54 Inspired Interiors', 'MD Fitness'].map(item => (
                <li key={item}>
                  <a href="#" className="body-md text-md-slate hover:text-white transition-colors flex items-center group gap-2">
                    {item} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-caps text-white mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['About the Group', 'Our Impact', 'Investor Relations', 'Career Portal', 'Case Studies'].map(item => (
                <li key={item}>
                  <a href="#" className="body-md text-md-slate hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-caps text-white mb-8">Contact HQ</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-md-green flex-shrink-0" />
                <span className="text-sm text-md-slate">2nd Floor, The GreenHouse, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-md-green flex-shrink-0" />
                <span className="text-sm text-md-slate">+254 798 852 545</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-md-green flex-shrink-0" />
                <span className="text-sm text-md-slate">info@movedifferent.co.ke</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-md-slate font-sans">
            © {year} Move Different Group. All rights reserved. Built with precision for the African continent.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-md-slate">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};