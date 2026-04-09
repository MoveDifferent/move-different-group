import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, ArrowRight, Activity, Zap, Layers, Maximize2 } from 'lucide-react';
import { SectionLabel, AnimatedButton } from '../components/Shared';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Digital', 'Logistics', 'Interiors', 'Fitness'];

  const projects = [
    { id: 1, title: 'Eco-Luxe Heights', category: 'Interiors', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', desc: 'Luxury sustainable residence in Nairobi.', height: 'h-[400px]' },
    { id: 2, title: 'M-Gate Pay', category: 'Digital', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', desc: 'Regional payment infrastructure.', height: 'h-[320px]' },
    { id: 3, title: 'Nairobi SmartHub', category: 'Logistics', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', desc: 'Automated regional distribution.', height: 'h-[450px]' },
    { id: 4, title: 'Apex Performance', category: 'Fitness', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', desc: 'High-performance training center.', height: 'h-[320px]' },
    { id: 5, title: 'Safari Rest', category: 'Interiors', img: 'https://images.unsplash.com/photo-1616489953149-75a1744bc82d?w=800&q=80', desc: 'Luxury safari lodge fit-out.', height: 'h-[400px]' },
    { id: 6, title: 'Group One App', category: 'Digital', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', desc: 'Unified ecosystem mobile platform.', height: 'h-[350px]' },
    { id: 7, title: 'East Corridor 1', category: 'Logistics', img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80', desc: 'Strategic cross-border transport.', height: 'h-[400px]' },
    { id: 8, title: 'Digital Trade Port', category: 'Logistics', img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?w=800&q=80', desc: 'Customs automation platform.', height: 'h-[320px]' },
    { id: 9, title: 'Sky Garden HQ', category: 'Interiors', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', desc: 'Biophilic office design for tech giants.', height: 'h-[450px]' }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-20">
      <section className="py-32 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1DB954]/5 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="max-w-3xl text-center md:text-left">
              <SectionLabel text="Venture Gallery" />
              <h1 className="display-lg text-white mb-8">Shaping the <br /><span className="gradient-text">African Landscape.</span></h1>
              <p className="body-lg text-[#4A6080] max-w-xl">
                Explore our portfolio of high-impact ventures across East Africa's most strategic growth sectors.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-8 py-3 rounded-full text-xs font-heading font-bold transition-all border ${activeFilter === cat ? 'bg-[#1DB954] border-[#1DB954] text-white shadow-green' : 'border-white/10 text-white/40 hover:border-white/20'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid group relative rounded-[32px] overflow-hidden border border-white/5 bg-[#112240]"
                >
                  <div className={`${project.height} relative overflow-hidden`}>
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-6 right-6">
                      <div className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-heading text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-[#4A6080] mb-6">{project.desc}</p>
                    <AnimatedButton variant="ghost" className="p-0 text-[#1DB954] group-hover:translate-x-1 transition-transform">
                      View Case Study <ArrowRight size={14} className="ml-2" />
                    </AnimatedButton>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-32 bg-[#112240] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/portfolio-featured-case-study-ec5b1ed4-1775745191619.webp" 
                alt="Featured Case Study" 
                className="rounded-[48px] shadow-2xl border border-white/10 relative z-10" 
              />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-10 -right-10 bg-[#1DB954] p-12 rounded-[32px] z-20 hidden md:block shadow-green"
              >
                <div className="flex items-center gap-4 text-white mb-2">
                  <Activity size={24} />
                  <p className="label-caps text-[10px] tracking-widest">Efficiency Gain</p>
                </div>
                <p className="text-4xl font-serif font-bold text-white">+48%</p>
              </motion.div>
            </div>
            
            <div>
              <SectionLabel text="Featured Case Study" />
              <h2 className="display-lg text-white mb-8">Integrated Urban <br />Logistics Ecosystem.</h2>
              <p className="body-lg text-[#4A6080] mb-12">
                By unifying regional customs data with our proprietary fleet management tech, we reduced cross-border transit times by nearly half for East African trade.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                {[
                  { icon: Zap, text: 'Real-time AI routing' },
                  { icon: Activity, text: 'Automated dispatch' },
                  { icon: Zap, text: 'Digital paperwork' },
                  { icon: Activity, text: 'Solar-powered hubs' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/80">
                    <div className="w-8 h-8 rounded-lg bg-[#1DB954]/10 flex items-center justify-center text-[#1DB954]"><item.icon size={16} /></div>
                    <span className="text-sm font-heading font-semibold">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <AnimatedButton variant="primary" className="px-12 h-16 text-lg group">
                Read Full Report <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Stats Section */}
      <section className="py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
             {[
               { icon: Layers, title: 'Multi-Sector Reach', val: '04', detail: 'Key Industrial Verticals' },
               { icon: Maximize2, title: 'Total Asset Value', val: '$250M', detail: 'Market Capitalization' },
               { icon: Zap, title: 'Annual Growth', val: '22%', detail: 'Portfolio Performance' }
             ].map((stat, i) => (
               <div key={i} className="p-12 bg-[#112240] rounded-[48px] border border-white/10 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 text-[#1DB954]">
                    <stat.icon size={32} />
                  </div>
                  <h4 className="label-caps text-[#4A6080] mb-4">{stat.title}</h4>
                  <p className="text-6xl font-serif font-bold text-white mb-2">{stat.val}</p>
                  <p className="text-xs text-white/40">{stat.detail}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="label-caps text-[10px] text-[#4A6080] text-center mb-16 tracking-[0.3em]">Institutional Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-20 grayscale hover:opacity-100 transition-all duration-700">
            {['Safaricom', 'Equity Bank', 'Airtel', 'KCB Bank', 'Britam', 'NCBA'].map(client => (
              <span key={client} className="text-2xl font-heading font-bold text-white tracking-tighter">{client}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#1DB954] to-[#16A34A] rounded-[56px] p-12 md:p-24 text-center text-[#0B1120] relative overflow-hidden shadow-green">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="display-lg mb-8">Ready to Build the <br />Future of Africa?</h2>
              <p className="body-lg mb-16 max-w-2xl mx-auto text-[#0B1120]/80">
                Whether you're looking for a strategic partner or investment opportunities, let's start a conversation that moves things differently.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <AnimatedButton variant="white" className="h-16 px-12 text-lg bg-[#0B1120] text-white border-none shadow-2xl">
                  Contact Our Team
                </AnimatedButton>
                <AnimatedButton variant="ghost" className="h-16 px-12 text-lg text-[#0B1120] border-[#0B1120]/20 font-bold">
                  View Service Deck
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;