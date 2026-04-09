import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Truck, 
  LayoutDashboard, 
  Dumbbell, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Users, 
  Target,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionLabel, AnimatedButton } from '../components/Shared';

const Companies = () => {
  const divisions = [
    {
      id: 'digital',
      name: "Infinite Digital Network",
      tagline: "The Digital Future",
      icon: Globe,
      color: "#2563EB",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/idn-digital-tech-8bf2685a-1775744214372.webp",
      description: "Leading East Africa's digital transformation with AI solutions and enterprise software. Architecting systems for complexity.",
      path: "/digital",
      metrics: ['150M+ Reach', '45+ Awards']
    },
    {
      id: 'logistics',
      name: "Move Different Logistics",
      tagline: "Moving Africa Forward",
      icon: Truck,
      color: "#F59E0B",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/logistics-transport-2db7edbe-1775744214657.webp",
      description: "Data-driven supply chain solutions optimized for cross-border transit. Connecting regional markets with zero friction.",
      path: "/logistics",
      metrics: ['500+ Fleet', '99.8% Success']
    },
    {
      id: 'interiors',
      name: "54 Inspired Interiors",
      tagline: "Luxury Reimagined",
      icon: LayoutDashboard,
      color: "#C2714F",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/inspired-interiors-5bef59a9-1775744215155.webp",
      description: "Bespoke architectural design and high-end construction for elite spaces. Merging regional soul with global luxury.",
      path: "/interiors",
      metrics: ['1.2M Sq. Ft.', '45+ Hotels']
    },
    {
      id: 'fitness',
      name: "MD Fitness",
      tagline: "Elite Performance",
      icon: Dumbbell,
      color: "#16A34A",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/md-fitness-e0da0b40-1775744215471.webp",
      description: "A premium wellness ecosystem providing elite coaching and facilities. Defining the future of high-performance living.",
      path: "/fitness",
      metrics: ['5000+ Members', '12 Studios']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-[#0B1120]">
        <div className="absolute inset-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/group-companies-overview-hero-24f48498-1775746931864.webp"
            alt="Ecosystem Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-[#0B1120]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <SectionLabel text="The MD Ecosystem" light />
            <h1 className="display-hero text-white mb-8 italic">Diversified Strength. <br /><span className="gradient-text">Unified Purpose.</span></h1>
            <p className="body-lg text-white/70 max-w-3xl mx-auto mb-12">
              Move Different Group operates across four strategic pillars, each a leader in its vertical. Together, we form an integrated engine of African progress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Division Showcase */}
      <section className="py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {divisions.map((div, i) => (
              <motion.div 
                key={div.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                <div className="lg:w-1/2 relative group">
                  <div className="aspect-[16/10] rounded-[48px] overflow-hidden border border-white/10 shadow-2xl relative">
                    <img src={div.img} alt={div.name} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent" />
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="absolute -bottom-8 -right-8 lg:-right-12 bg-[#112240] border border-white/10 p-8 rounded-3xl shadow-xl hidden sm:block"
                    style={{ borderTop: `4px solid ${div.color}` }}
                  >
                    <div className="flex flex-col gap-2">
                       {div.metrics.map((m, idx) => (
                         <div key={idx} className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: div.color }} />
                           <span className="text-white font-heading font-bold">{m}</span>
                         </div>
                       ))}
                    </div>
                  </motion.div>
                </div>

                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-6" style={{ color: div.color }}>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div.icon size={20} />
                    </div>
                    <span className="label-caps text-white/50">{div.tagline}</span>
                  </div>
                  <h2 className="display-md text-white mb-6 italic">{div.name}</h2>
                  <p className="body-md text-[#4A6080] mb-10 leading-relaxed">
                    {div.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to={div.path}>
                      <AnimatedButton variant="primary" style={{ backgroundColor: div.color }} className="px-10 h-14 border-none group">
                        Explore Division <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </AnimatedButton>
                    </Link>
                    <Link to="/portfolio">
                      <AnimatedButton variant="secondary" className="px-10 h-14 border-white/10 text-white">View Portfolio</AnimatedButton>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Synergy Section */}
      <section className="py-32 bg-[#112240] relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-[#1DB954]/5 rounded-full blur-[100px]" />
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <SectionLabel text="Strategic Advantage" />
               <h2 className="display-lg text-white">Synergy at Scale.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { icon: ShieldCheck, title: 'Unified Governance', desc: 'Centralized institutional standards across every subsidiary, ensuring consistent quality and transparency.' },
                 { icon: Zap, title: 'Integrated Tech', desc: 'Our Digital arm (IDN) powers the operations of Logistics and Fitness, creating a closed-loop data ecosystem.' },
                 { icon: Target, title: 'Market Intelligence', desc: 'Cross-sector data allows us to identify and capture emerging African growth trends faster than specialized rivals.' }
               ].map((item, i) => (
                 <div key={i} className="p-12 bg-[#0B1120] rounded-[48px] border border-white/5 hover:border-[#1DB954]/30 transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#1DB954] mb-8">
                       <item.icon size={32} />
                    </div>
                    <h4 className="text-xl font-heading text-white mb-6">{item.title}</h4>
                    <p className="text-[#4A6080] text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#112240] to-[#0B1120] rounded-[56px] p-12 md:p-24 border border-white/10 text-center relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="display-md text-white mb-8">Interested in a <br />Strategic Partnership?</h2>
                <p className="body-lg text-[#4A6080] max-w-2xl mx-auto mb-16">
                  Whether you're looking for enterprise solutions or investment entry into the region, our executive team is ready to connect.
                </p>
                <Link to="/contact">
                  <AnimatedButton variant="white" className="h-16 px-12 text-lg">Get in Touch</AnimatedButton>
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;