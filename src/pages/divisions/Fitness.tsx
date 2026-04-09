import React from 'react';
import { Dumbbell, CheckCircle2, ArrowRight, Zap, Shield, Heart, Activity, Target, Users } from 'lucide-react';
import { SectionLabel, AnimatedButton, StatCounter } from '../../components/Shared';
import { motion } from 'framer-motion';

const Fitness = () => {
  const tiers = [
    { title: 'Performance Tier', detail: 'Elite coaching for pro athletes.', price: '15,000 KES/mo', features: ['Biometric Tracking', 'Pro Coaching', 'Recovery Access'] },
    { title: 'Corporate Wellness', detail: 'For high-impact teams.', price: 'Custom', features: ['Group Sessions', 'Health Audit', 'On-site Workshops'] },
    { title: 'Lifestyle Membership', detail: 'Holistic health for all.', price: '8,500 KES/mo', features: ['Full Studio Access', 'Nutrition Plan', 'Community Events'] }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/fitness-division-hero-76996b9f-1775745192078.webp" alt="Fitness" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/70 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-[#16A34A]">
                <Dumbbell size={24} />
              </div>
              <span className="label-caps text-white/70 tracking-widest">Performance Reimagined</span>
            </div>
            <h1 className="display-hero text-white mb-8 italic">MD <span className="text-[#16A34A]">Fitness</span></h1>
            <p className="body-lg text-white/70 max-w-2xl mb-12">
              A premium health and wellness ecosystem providing elite coaching, modern facilities, and community-driven results. We define the future of high-performance living.
            </p>
            <div className="flex flex-wrap gap-4">
              <AnimatedButton variant="primary" className="bg-[#16A34A] px-12 h-16 border-none group shadow-green">
                Join Community <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </AnimatedButton>
              <AnimatedButton variant="secondary" className="px-12 h-16 border-white/20 text-white">
                Member Portal
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1120] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <StatCounter value={5000} suffix="+" label="Active Members" color="[#16A34A]" />
            <StatCounter value={12} suffix="" label="Premium Studios" color="white" />
            <StatCounter value={150} suffix="+" label="Expert Coaches" color="white" />
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionLabel text="The Experience" />
              <h2 className="display-lg text-white mb-8">World-Class <br />Infrastructure.</h2>
              <p className="body-lg text-[#4A6080] mb-12">
                Our facilities are engineered for performance. From recovery technology to Olympic-grade equipment, we provide the tools for transformation.
              </p>
              <div className="space-y-8">
                {[
                  { icon: Activity, title: 'Biometric Lab', desc: 'Real-time physiological data tracking for personalized results.' },
                  { icon: Target, title: 'Recovery Suite', desc: 'Cryotherapy and infrared sauna therapy for rapid muscle repair.' },
                  { icon: Users, title: 'Performance Community', desc: "High-octane environments with the region's top high-achievers." }
                ].map((f, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#16A34A] group-hover:bg-[#16A34A] group-hover:text-white transition-all">
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
            <div className="relative">
               <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/fitness-facility-featured-db2de6a0-1775746244778.webp" className="rounded-[48px] shadow-2xl border border-white/10" alt="Fitness Facility" />
               <div className="absolute -top-10 -right-10 bg-[#16A34A] p-10 rounded-3xl hidden md:block">
                  <p className="text-white font-serif text-3xl font-bold">5-Star</p>
                  <p className="text-white/70 label-caps text-[10px]">Wellness Rating</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24">
              <SectionLabel text="Join the Collective" />
              <h2 className="display-lg text-white">Membership Tiers.</h2>
           </div>
           <div className="grid lg:grid-cols-3 gap-8">
              {tiers.map((tier, i) => (
                <div key={i} className="bg-[#0B1120] p-12 rounded-[48px] border border-white/10 flex flex-col group hover:border-[#16A34A]/50 transition-all">
                   <h3 className="text-2xl font-heading text-white mb-2">{tier.title}</h3>
                   <p className="text-[#4A6080] text-sm mb-8">{tier.detail}</p>
                   <p className="text-3xl font-serif font-bold text-white mb-10">{tier.price}</p>
                   <ul className="space-y-4 mb-12 flex-1">
                      {tier.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-white/60 text-sm">
                           <CheckCircle2 size={16} className="text-[#16A34A]" />
                           {f}
                        </li>
                      ))}
                   </ul>
                   <AnimatedButton variant={i === 1 ? 'primary' : 'secondary'} className={i === 1 ? 'bg-[#16A34A] border-none' : 'border-[#16A34A] text-[#16A34A]'}>
                      Get Started
                   </AnimatedButton>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <SectionLabel text="Methodology" />
              <h2 className="display-lg text-white">Beyond the Gym.</h2>
            </div>
            <p className="body-md text-[#4A6080] max-w-xs">
              Integrated performance coaching for athletes and professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Elite Performance Training', description: 'Science-backed programs for professional athletes and high-performers.' },
              { title: 'Corporate Wellness', description: "Custom health programs for the region's leading business organizations." },
              { title: 'Personalized Nutrition', description: 'Data-driven meal planning and supplements for optimal human performance.' },
              { title: 'MD Recovery Suites', description: 'State-of-the-art recovery technology including cryotherapy and sauna.' },
              { title: 'Community Classes', description: 'High-energy group training environments that foster connection and results.' },
              { title: 'Youth Athletics', description: 'Developing the next generation of African sporting talent with elite coaching.' }
            ].map((service, i) => (
              <motion.div 
                key={service.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="bg-[#112240] p-12 rounded-[40px] border border-white/5 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#16A34A]/10 flex items-center justify-center text-[#16A34A] mb-8 group-hover:bg-[#16A34A] group-hover:text-white transition-all duration-300">
                  <Heart size={28} />
                </div>
                <h3 className="text-xl font-heading text-white mb-6 leading-tight">{service.title}</h3>
                <p className="body-md text-[#4A6080] leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#112240]">
         <div className="max-w-7xl mx-auto px-6">
            <SectionLabel text="Elite Coaches" />
            <h2 className="display-lg text-white mb-16 text-center md:text-left">Train With The Best.</h2>
            <div className="grid md:grid-cols-4 gap-8">
               {[
                 { name: 'Marcus Chen', role: 'Performance Lead', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=700&fit=crop' },
                 { name: 'Sarah Juma', role: 'Nutritionist', img: 'https://images.unsplash.com/photo-1548691905-57c36cc8d93f?w=500&h=700&fit=crop' },
                 { name: 'Kevin Otieno', role: 'Recovery Expert', img: 'https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?w=500&h=700&fit=crop' },
                 { name: 'Liza Vance', role: 'Mobility Coach', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=700&fit=crop' }
               ].map(coach => (
                  <div key={coach.name} className="relative group rounded-3xl overflow-hidden aspect-[3/4] border border-white/10">
                     <img src={coach.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={coach.name} />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent flex flex-col justify-end p-8">
                        <p className="text-white font-heading font-bold text-xl mb-1">{coach.name}</p>
                        <p className="text-[#16A34A] text-[10px] label-caps tracking-widest">{coach.role}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Fitness;