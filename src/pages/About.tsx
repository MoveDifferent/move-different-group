import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, MapPin, Award, CheckCircle2, Globe, Heart, ArrowRight, Lightbulb, Zap, Rocket } from 'lucide-react';
import { SectionLabel, AnimatedButton } from '../components/Shared';

const About = () => {
  const values = [
    { title: 'Innovation', icon: Lightbulb, desc: 'We challenge every assumption and build better systems for a changing world.', color: '#1DB954' },
    { title: 'Integrity', icon: Shield, desc: 'Institutional transparency is the bedrock of our global partnerships.', color: '#C9A84C' },
    { title: 'Impact', icon: Target, desc: 'We measure success by the prosperity of the communities we serve.', color: '#2563EB' },
    { title: 'Integration', icon: Zap, desc: 'Seamlessly connecting logistics, tech, and lifestyle into one ecosystem.', color: '#F59E0B' }
  ];

  const pillars = [
    { title: 'Local Insight', desc: 'Deep regional roots across East Africa allow us to navigate markets with unmatched precision.' },
    { title: 'Global Standards', desc: 'We apply world-class operational rigor to every division, ensuring institutional-grade excellence.' },
    { title: 'Multi-Sector Synergy', desc: 'The conglomerate structure allows for unique value-chains across our tech and logistics arms.' }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[75vh] flex items-center overflow-hidden">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/about-hero-7e53a57c-1775745192635.webp"
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionLabel text="Our Genesis" light />
          <h1 className="display-hero text-white mb-6 italic">Built for the <br /><span className="gradient-text">Next Generation.</span></h1>
          <p className="body-lg text-white/70 max-w-2xl mb-10">
            Move Different Group was founded to bridge the gap between regional potential and global execution standards. We are a pan-African powerhouse driving innovation across logistics, technology, and lifestyle.
          </p>
          <AnimatedButton variant="secondary" className="px-10 h-14 border-white/20 text-white">
            Discover Our Heritage
          </AnimatedButton>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel text="Our Core Values" />
            <h2 className="display-lg text-white">The DNA of Our Group.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[32px] bg-[#112240] border border-white/5 relative group overflow-hidden"
              >
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700">
                  <v.icon size={160} />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8" style={{ color: v.color }}>
                  <v.icon size={28} />
                </div>
                <h3 className="text-xl font-heading text-white mb-4">{v.title}</h3>
                <p className="body-md text-[#4A6080] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#112240] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionLabel text="Our Evolution" />
              <h2 className="display-lg text-white mb-12">A Decade of Defying <br />the Status Quo.</h2>
              
              <div className="relative pl-8 border-l border-white/10 space-y-16">
                {[
                  { year: '2016', title: 'The Logistics Disruptor', desc: 'Started with a fleet of 5 trucks, introducing data-led routing to East African trade routes.' },
                  { year: '2018', title: 'Digital Transformation', desc: 'Infinite Digital Network is born, providing enterprise software to regional giants.' },
                  { year: '2021', title: 'Lifestyle & Wellness', desc: 'Acquisition of 54 Interiors and launch of MD Fitness, completing the group ecosystem.' },
                  { year: '2024', title: 'The Unified Conglomerate', desc: 'Move Different Group consolidates all divisions into a single strategic entity.' }
                ].map((item, i) => (
                  <motion.div 
                    key={item.year} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#112240] border-2 border-[#1DB954] z-10" />
                    <span className="font-mono text-2xl text-[#1DB954] font-bold block mb-2">{item.year}</span>
                    <h3 className="text-xl font-heading text-white mb-3">{item.title}</h3>
                    <p className="body-md text-[#4A6080] max-w-md">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-[48px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/leadership-group-48435b85-1775745564738.webp" 
                  alt="Leadership Team" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-10 -left-10 bg-[#1DB954] p-12 rounded-[32px] hidden md:block shadow-green"
              >
                <p className="text-5xl font-serif font-bold text-white mb-2">1,200+</p>
                <p className="label-caps text-white/70 text-xs tracking-widest">Employees Region-wide</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Difference */}
      <section className="py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <SectionLabel text="The Group Advantage" />
              <h2 className="display-lg text-white mb-8">The Pillars of <br />Difference.</h2>
              <p className="body-lg text-[#4A6080] mb-12">
                We are structured to solve complex challenges at scale. Our competitive edge lies in the intersection of our four core pillars.
              </p>
              <div className="space-y-12">
                {pillars.map((p, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#1DB954] font-bold shrink-0">{i + 1}</div>
                    <div>
                      <h4 className="text-white font-heading font-bold mb-2">{p.title}</h4>
                      <p className="text-sm text-[#4A6080] leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" className="rounded-3xl h-64 w-full object-cover grayscale opacity-50" alt="About img 1" />
                <img src="https://images.unsplash.com/photo-1573161158971-8352fc2de542?w=500&q=80" className="rounded-3xl h-48 w-full object-cover" alt="About img 2" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80" className="rounded-3xl h-48 w-full object-cover" alt="About img 3" />
                <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&q=80" className="rounded-3xl h-64 w-full object-cover grayscale opacity-50" alt="About img 4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-16 rounded-[40px] bg-[#0B1120] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={120} className="text-[#1DB954]" />
              </div>
              <SectionLabel text="Our Mission" />
              <h3 className="display-md text-white mb-6">Empowering Africa through Operational Excellence.</h3>
              <p className="body-lg text-[#4A6080]">
                To provide institutional-grade services across logistics, tech, and lifestyle sectors, fostering sustainable economic growth and community impact.
              </p>
            </div>
            <div className="p-16 rounded-[40px] bg-[#0B1120] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe size={120} className="text-[#1DB954]" />
              </div>
              <SectionLabel text="Our Vision" />
              <h3 className="display-md text-white mb-6">To be the Infrastructure of African Prosperity.</h3>
              <p className="body-lg text-[#4A6080]">
                By 2030, we aim to be the most trusted strategic partner for global organizations entering the East African market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <SectionLabel text="Executive Leadership" />
              <h2 className="display-lg text-white">The Minds Moving Africa.</h2>
            </div>
            <p className="body-md text-[#4A6080] max-w-xs">
              A diverse board of experts with global experience and local insight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'David Mwangi', role: 'Group CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop' },
              { name: 'Sarah Kiama', role: 'Chief Operating Officer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=700&fit=crop' },
              { name: 'John Omondi', role: 'Head of Logistics', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=700&fit=crop' },
              { name: 'Elena Vance', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=700&fit=crop' }
            ].map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-8 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="label-caps text-[10px] text-[#1DB954] mb-1">{member.role}</p>
                    <h4 className="text-2xl font-heading text-white">{member.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#112240] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionLabel text="Regional Footprint" />
              <h2 className="display-lg text-white">Nairobi Roots, <br />Pan-African Presence.</h2>
              <p className="body-lg text-[#4A6080] mb-12">
                With operational headquarters in Nairobi, we navigate the complex trade corridors of East Africa with precision and local expertise.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { city: 'Nairobi', type: 'Global HQ' },
                  { city: 'Kampala', type: 'Logistics Hub' },
                  { city: 'Kigali', type: 'Digital Center' },
                  { city: 'Dar es Salaam', type: 'Coastal Gateway' }
                ].map(loc => (
                  <div key={loc.city} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
                    <div>
                      <p className="text-white font-heading font-bold">{loc.city}</p>
                      <p className="text-[10px] label-caps text-white/40">{loc.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/regional-presence-map-33c266c3-1775745191733.webp" 
                alt="Map" 
                className="w-full rounded-[48px] opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent" />
              
              <div className="absolute top-[40%] left-[55%]">
                <div className="w-4 h-4 bg-[#1DB954] rounded-full relative">
                  <div className="absolute inset-0 bg-[#1DB954] rounded-full animate-ping opacity-75" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionLabel text="Strategic Partners" />
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            {['UNICEF', 'Safaricom', 'Equity Bank', 'Toyota', 'Google Cloud', 'DHL'].map(p => (
              <span key={p} className="text-3xl font-heading font-bold text-white tracking-tighter">{p}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;