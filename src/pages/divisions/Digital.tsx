import React from 'react';
import { 
  Globe, 
  Cpu, 
  Database, 
  Zap, 
  Layers, 
  Lock, 
  ArrowRight, 
  BarChart, 
  Code, 
  ShieldCheck, 
  Activity, 
  Cloud
} from 'lucide-react';
import { SectionLabel, AnimatedButton, StatCounter } from '../../components/Shared';
import { motion } from 'framer-motion';

const Digital = () => {
  const features = [
    { 
      icon: Cpu, 
      title: 'Enterprise AI', 
      desc: 'Deploying proprietary machine learning models to optimize regional supply chains and retail automation.' 
    },
    { 
      icon: Cloud, 
      title: 'Managed Infrastructure', 
      desc: 'High-availability cloud solutions for mission-critical enterprise applications in East Africa.' 
    },
    { 
      icon: ShieldCheck, 
      title: 'Cyber Governance', 
      desc: "Institutional-grade security frameworks that protect the region's most valuable digital assets." 
    }
  ];

  const services = [
    { 
      title: 'Performance Marketing', 
      description: 'Data-driven campaigns that convert global audiences into loyal customers through algorithmic targeting.',
      icon: BarChart
    },
    { 
      title: 'Enterprise Software', 
      description: 'Custom-built CRM, ERP, and bespoke applications for regional conglomerates and state agencies.',
      icon: Code
    },
    { 
      title: 'Data Science & Analytics', 
      description: 'Leveraging big data to solve complex logistics, consumer behavior, and financial forecasting.',
      icon: Activity
    },
    { 
      title: 'Brand Architecture', 
      description: 'Crafting digital identities that define the narrative of modern African commerce.',
      icon: Globe
    },
    { 
      title: 'Digital Transformation', 
      description: 'Strategic consulting helping legacy businesses transition to a digital-first operational model.',
      icon: Zap
    },
    { 
      title: 'API Ecosystems', 
      description: 'Building the connective tissue for pan-African fintech and commerce platforms.',
      icon: Layers
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/digital-division-hero-328ff105-1775746645306.webp" 
          alt="Digital Division" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/70 to-transparent" />
        
        {/* Particle Overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#2563EB] rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() 
              }}
              animate={{ 
                y: [null, "-20%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 5 + 5, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-4 rounded-2xl bg-[#2563EB]/10 backdrop-blur-md border border-[#2563EB]/20 text-[#2563EB]">
                <Globe size={24} />
              </div>
              <span className="label-caps text-white/70 tracking-widest">Architecting the Digital Frontier</span>
            </div>
            <h1 className="display-hero text-white mb-8 italic">
              Infinite <br />
              <span className="text-[#2563EB]">Digital Network</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mb-12">
              Leading East Africa's digital transformation with AI solutions and enterprise software. 
              We are building the systems that power the continent's most ambitious organizations.
            </p>
            <div className="flex flex-wrap gap-4">
              <AnimatedButton variant="primary" className="bg-[#2563EB] px-12 h-16 border-none shadow-blue group">
                Consult Our Experts <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </AnimatedButton>
              <AnimatedButton variant="secondary" className="px-12 h-16 border-white/20 text-white">
                View Tech Stack
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1120] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <StatCounter value={150} suffix="M+" label="Digital Reach" color="[#2563EB]" />
            <StatCounter value={250} suffix="+" label="Enterprise Brands" color="white" />
            <StatCounter value={45} suffix="" label="Regional Tech Awards" color="white" />
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="relative">
                <div className="aspect-square rounded-[56px] overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/digital-service-visualization-6e6f4782-1775746644812.webp" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0" 
                    alt="IDN Service" 
                  />
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="absolute -bottom-10 -left-10 bg-[#2563EB] p-10 rounded-[40px] hidden md:block"
                >
                   <Database size={32} className="text-white mb-4" />
                   <p className="text-white font-serif text-3xl font-bold">AI-First</p>
                   <p className="text-white/70 label-caps text-[10px]">Operational Strategy</p>
                </motion.div>
             </div>
             <div>
                <SectionLabel text="Innovation Focus" />
                <h2 className="display-lg text-white mb-8">Systems Built for <br />Complexity.</h2>
                <p className="body-lg text-[#4A6080] mb-12">
                  We don't just build apps; we architect ecosystems. Our engineering team solves the friction of African commerce through data and design.
                </p>
                <div className="space-y-8">
                  {features.map((f, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                        <f.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-heading font-bold mb-2">{f.title}</h4>
                        <p className="text-sm text-[#4A6080] leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#112240] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <SectionLabel text="Our Capabilities" />
              <h2 className="display-lg text-white">Infinite Reach.</h2>
            </div>
            <p className="body-md text-[#4A6080] max-w-xs">
              A unified technology stack driving growth across logistics, finance, and retail.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={service.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="bg-[#0B1120] p-12 rounded-[40px] border border-white/5 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] mb-8 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-heading text-white mb-6 leading-tight">{service.title}</h3>
                <p className="body-md text-[#4A6080] leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[56px] overflow-hidden border border-white/10 group shadow-2xl bg-[#112240]/40 p-12 md:p-24 text-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
               <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/digital-footprint-map-eabe467a-1775746644827.webp" 
                className="w-full h-full object-cover" 
                alt="Background" 
               />
            </div>
            
            <div className="relative z-10">
               <SectionLabel text="Global Scale" />
               <h2 className="display-lg text-white mb-8 italic">Defining the Narrative <br /><span className="text-[#2563EB]">of Digital Africa.</span></h2>
               <p className="body-lg text-white/70 max-w-2xl mx-auto mb-16">
                 Join 250+ enterprise partners who leverage Infinite Digital Network to navigate the complexities of regional growth with precision and speed.
               </p>
               <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <AnimatedButton variant="white" className="h-16 px-12 text-lg">Partner with IDN</AnimatedButton>
                  <AnimatedButton variant="ghost" className="h-16 px-12 text-lg text-white border-white/10">View Case Studies</AnimatedButton>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="label-caps text-[10px] text-[#4A6080] mb-12 tracking-[0.3em]">Strategic Cloud Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            {['AWS', 'Google Cloud', 'Microsoft Azure', 'Oracle', 'Snowflake', 'Databricks'].map(p => (
              <span key={p} className="text-xl font-heading font-bold text-white tracking-tighter">{p}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Digital;