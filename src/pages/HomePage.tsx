import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Truck, LayoutDashboard, Dumbbell, TrendingUp, ShieldCheck, Users, Award, ExternalLink } from 'lucide-react';
import { SectionLabel, AnimatedButton } from '../components/Shared';

const StatCounter = ({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) => {
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

    const element = document.getElementById(`stat-${label.replace(/\s+/g, '-')}`);
    if (element) observer.observe(element);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [value, label]);

  return (
    <div id={`stat-${label.replace(/\s+/g, '-')}`} className="flex flex-col">
      <span className="stat-number text-white">{count.toLocaleString()}{suffix}</span>
      <span className="label-caps text-[#4A6080] mt-2">{label}</span>
    </div>
  );
};

export const HomePage = () => {
  const divisions = [
    {
      id: 'idn',
      name: "Infinite Digital Network",
      tagline: "The Digital Future, Built Today",
      icon: Globe,
      color: "#2563EB",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/idn-digital-tech-8bf2685a-1775744214372.webp",
      description: "Leading East Africa's digital transformation with cutting-edge marketing, AI solutions, and enterprise software development."
    },
    {
      id: 'logistics',
      name: "Move Different Logistics",
      tagline: "Moving Africa Forward",
      icon: Truck,
      color: "#F59E0B",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/logistics-transport-2db7edbe-1775744214657.webp",
      description: "Reliable transport and supply chain solutions optimized through data-driven routing and fleet management excellence."
    },
    {
      id: 'interiors',
      name: "54 Inspired Interiors",
      tagline: "Luxury in Every Detail",
      icon: LayoutDashboard,
      color: "#C2714F",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/inspired-interiors-5bef59a9-1775744215155.webp",
      description: "High-end interior design and architectural construction that blends modern aesthetics with local craftsmanship."
    },
    {
      id: 'fitness',
      name: "MD Fitness",
      tagline: "Performance Reimagined",
      icon: Dumbbell,
      color: "#16A34A",
      img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/md-fitness-e0da0b40-1775744215471.webp",
      description: "A premium health and wellness ecosystem providing elite coaching, modern facilities, and community-driven results."
    }
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/group-hero-416d3145-1775744215113.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/90 via-[#0B1120]/60 to-[#0B1120]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(29,185,84,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[1px] w-full bg-[#1DB954]/50 mb-12 max-w-xs mx-auto"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="label-caps text-[#1DB954] mb-6 block">East Africa's Premier Multi-Division Conglomerate</span>
            <h1 className="display-hero text-white mb-8">
              Innovating the Future of <br className="hidden md:block" /> 
              <span className="text-white/60">Pan-African Development.</span>
            </h1>
            <p className="body-lg text-white/75 max-w-2xl mx-auto mb-12">
              Operating at the intersection of logistics, technology, construction, and lifestyle. 
              We are more than a business group—we are a movement redefining excellence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <AnimatedButton variant="primary" className="w-full sm:w-auto px-12">Our Portfolio</AnimatedButton>
            <AnimatedButton variant="secondary" className="w-full sm:w-auto px-12">Investor Enquiries</AnimatedButton>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/40">Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#1DB954] to-transparent" />
        </motion.div>
      </section>

      <section className="py-20 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="display-xl mb-8">We Move Different.</h2>
            <p className="body-lg text-[#4A6080]">
              Move Different Group is a strategic conglomerate focused on high-impact sectors within the East African landscape. By integrating innovation, operational rigor, and local expertise, we create ecosystems that empower businesses and communities alike.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#112240] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center md:text-left">
            <SectionLabel text="Our Ecosystem" />
            <h2 className="display-lg text-white">Specialized Expertise, <br />Global Standards.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {divisions.map((div, i) => (
              <motion.div
                key={div.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative h-[480px] rounded-2xl overflow-hidden shadow-deep border border-white/5"
              >
                <div className="absolute inset-0">
                  <img src={div.img} alt={div.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#0B1120]/80 group-hover:bg-[#0B1120]/40 transition-colors duration-500" />
                  <div 
                    className="absolute top-0 left-0 w-full h-1" 
                    style={{ backgroundColor: div.color }}
                  />
                </div>

                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-[#0B1120]/80 backdrop-blur-md" style={{ color: div.color }}>
                      <div.icon size={24} />
                    </div>
                    <span className="label-caps text-white/50">{div.tagline}</span>
                  </div>
                  <h3 className="heading-lg text-white mb-4">{div.name}</h3>
                  <p className="body-md text-white/70 max-w-sm mb-8 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {div.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <AnimatedButton variant="secondary" className="h-10 px-6 group-hover:bg-white group-hover:text-[#0B1120] group-hover:border-white">
                      Explore Division <ExternalLink size={14} />
                    </AnimatedButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionLabel text="Investor Relations" />
              <h2 className="display-lg text-white mb-8">Stability, Growth, and Sustained Returns.</h2>
              <p className="body-lg text-[#4A6080] mb-12">
                Move Different Group provides institutional investors with unique access to high-growth sectors across East Africa, underpinned by corporate governance and operational excellence.
              </p>
              
              <div className="grid grid-cols-2 gap-12">
                <StatCounter value={150} label="Mln+ Portfolio Value (USD)" />
                <StatCounter value={22} label="Annual Growth Rate (%)" suffix="%" />
                <StatCounter value={8} label="Countries of Impact" />
                <StatCounter value={450} label="Talent Network" />
              </div>

              <div className="mt-16">
                <AnimatedButton variant="gold" className="px-12 h-14">
                  Download Investor Prospectus 2024
                </AnimatedButton>
              </div>
            </div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="rounded-3xl overflow-hidden border border-[#C9A84C]/30 shadow-gold">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/corporate-leadership-73899057-1775744215661.webp" 
                    alt="Leadership Team" 
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -right-10 top-1/2 -translate-y-1/2 w-64 bg-[#112240]/90 backdrop-blur-xl border-l-4 border-[#C9A84C] p-6 shadow-deep hidden md:block"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-[#C9A84C]" size={20} />
                    <span className="label-caps text-[#C9A84C]">Alpha Strategy</span>
                  </div>
                  <p className="text-2xl font-serif font-bold text-white">Market Leading ROI</p>
                  <p className="text-sm text-[#4A6080] mt-2">Outperforming regional benchmarks for 5 consecutive years.</p>
                </motion.div>
              </motion.div>

              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#1DB954]/10 rounded-full blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#C9A84C]/10 rounded-full blur-[100px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionLabel text="Our Impact" />
          <h2 className="display-lg text-white mb-20">Driven by Purpose. Defined by Results.</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability First",
                desc: "Our operations are built on a net-zero roadmap, ensuring that East Africa's growth doesn't come at a cost to its future.",
                icon: ShieldCheck,
                accent: "#1DB954"
              },
              {
                title: "Local Empowerment",
                desc: "We prioritize local talent and supply chains, creating a multiplier effect that strengthens regional economies.",
                icon: Users,
                accent: "#C9A84C"
              },
              {
                title: "Global Innovation",
                desc: "Applying world-class technology and management practices to local challenges, setting a new bar for African enterprise.",
                icon: Award,
                accent: "#2563EB"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1B3A5C] p-10 rounded-2xl border border-white/5 text-left"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${item.accent}20`, color: item.accent }}>
                  <item.icon size={28} />
                </div>
                <h3 className="heading-md text-white mb-4">{item.title}</h3>
                <p className="body-md text-[#4A6080]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};