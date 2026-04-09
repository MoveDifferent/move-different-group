import React from 'react';
import { LayoutDashboard, CheckCircle2, ArrowRight, Zap, Shield, Sparkles, PenTool, Home, Award } from 'lucide-react';
import { SectionLabel, AnimatedButton, StatCounter } from '../../components/Shared';
import { motion } from 'framer-motion';

const Interiors = () => (
  <div className="pt-20">
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/interiors-division-hero-ae76d051-1775745191531.webp" alt="Interiors" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/70 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-[#C2714F]">
              <LayoutDashboard size={24} />
            </div>
            <span className="label-caps text-white/70 tracking-widest">Luxury in Every Detail</span>
          </div>
          <h1 className="display-hero text-white mb-8 italic">54 Inspired <br /><span className="text-[#C2714F]">Interiors</span></h1>
          <p className="body-lg text-white/70 max-w-2xl mb-12">
            High-end interior design and architectural construction that blends modern aesthetics with local craftsmanship. We create spaces that perform and inspire.
          </p>
          <div className="flex flex-wrap gap-4">
            <AnimatedButton variant="primary" className="bg-[#C2714F] px-12 h-16 border-none group">
              Book Consultation <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </AnimatedButton>
            <AnimatedButton variant="secondary" className="px-12 h-16 border-white/20 text-white">
              View Showcase
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-[#0B1120] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <StatCounter value={1} suffix=".2M" label="Sq. Ft. Completed" color="[#C2714F]" />
          <StatCounter value={45} suffix="+" label="Hotel Projects" color="white" />
          <StatCounter value={15} suffix="" label="Design Medals" color="white" />
        </div>
      </div>
    </section>

    <section className="py-32 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <SectionLabel text="Design Philosophy" />
            <h2 className="display-lg text-white mb-8">Crafting Local <br />Luxury at Scale.</h2>
            <p className="body-lg text-[#4A6080] mb-12">
              We believe in "54" – representing the diversity of the African continent. Our designs utilize regional materials like Mvule wood and artisanal stone, elevated by global engineering standards.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: PenTool, title: 'Bespoke Design', desc: 'Custom architectural plans.' },
                { icon: Home, title: 'Sustainable Core', desc: 'Green-certified materials.' },
                { icon: Award, title: 'Artisan Led', desc: 'Local craftsmanship mastery.' },
                { icon: Zap, title: 'Tech Enabled', desc: 'Smart home integration.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="text-[#C2714F] mb-2"><item.icon size={20} /></div>
                  <h4 className="text-white font-heading font-bold">{item.title}</h4>
                  <p className="text-xs text-[#4A6080]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/interiors-featured-project-64151d42-1775746243021.webp" className="rounded-[56px] shadow-2xl border border-white/10" alt="Interior Design" />
             <div className="absolute -bottom-10 -left-10 bg-[#C2714F] p-10 rounded-3xl hidden md:block">
                <p className="text-white font-serif text-3xl font-bold">Award Winning</p>
                <p className="text-white/70 label-caps text-[10px]">Aga Khan Design Finalist</p>
             </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-32 bg-[#112240] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel text="Our Craft" />
            <h2 className="display-lg text-white">End-to-End Excellence.</h2>
          </div>
          <p className="body-md text-[#4A6080] max-w-xs">
            From conceptual architecture to bespoke artisanal furniture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Architectural Design', description: 'Conceptualizing spaces that balance functionality with striking visual identity.' },
            { title: 'Interior Fit-Out', description: 'Turnkey solutions for luxury residential, corporate, and hospitality projects.' },
            { title: 'Bespoke Furniture', description: 'Handcrafted furniture pieces utilizing regional materials and global styles.' },
            { title: 'Project Management', description: 'Overseeing complex construction timelines with a focus on quality and cost.' },
            { title: 'Sustainable Build', description: 'Incorporating green technologies and materials into every square foot.' },
            { title: 'Art curation', description: 'Sourcing and integrating contemporary African art into modern interiors.' }
          ].map((service, i) => (
            <motion.div 
              key={service.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-[#0B1120] p-12 rounded-[40px] border border-white/5 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#C2714F]/10 flex items-center justify-center text-[#C2714F] mb-8 group-hover:bg-[#C2714F] group-hover:text-white transition-all duration-300">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-heading text-white mb-6 leading-tight">{service.title}</h3>
              <p className="body-md text-[#4A6080] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-32 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6 text-center">
         <SectionLabel text="Portfolio" />
         <h2 className="display-lg text-white mb-20">Landmark Spaces.</h2>
         <div className="grid md:grid-cols-2 gap-12">
            {[
               { title: 'Eco-Luxe Heights', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80' },
               { title: 'Heritage Restored', img: 'https://images.unsplash.com/photo-1616489953149-75a1744bc82d?w=800&q=80' }
            ].map(project => (
               <div key={project.title} className="group cursor-pointer">
                  <div className="aspect-[16/9] rounded-[40px] overflow-hidden mb-8 border border-white/10">
                     <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                  </div>
                  <h4 className="text-2xl font-heading text-white group-hover:text-[#C2714F] transition-colors">{project.title}</h4>
               </div>
            ))}
         </div>
      </div>
    </section>
  </div>
);

export default Interiors;