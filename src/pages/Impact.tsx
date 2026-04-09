import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Users, 
  MapPin, 
  Zap, 
  ShieldCheck, 
  Heart, 
  Award, 
  CheckCircle2,
  Globe,
  GraduationCap,
  Handshake,
  ExternalLink
} from 'lucide-react';
import { SectionLabel, StatCounter, AnimatedButton } from '../components/Shared';

const Impact = () => {
  return (
    <div className="pt-20 bg-[#0B1120]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/sustainability-and-impact-27614e54-1775745194360.webp" 
            className="w-full h-full object-cover opacity-40 shadow-inner"
            alt="Impact Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel text="Our Responsibility" light />
            <h1 className="display-hero text-white mb-8 italic">Sustainable <span className="text-[#1DB954]">Success.</span></h1>
            <p className="body-lg text-white/70 max-w-2xl mb-12">
              Beyond profitability, our mission is to drive systemic change across East Africa. Through strategic investment in sustainability, education, and community, we build a future that lasts.
            </p>
            <div className="flex gap-6">
              <AnimatedButton variant="primary" className="px-12 h-16">Read 2024 Impact Report</AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 border-b border-white/5 bg-[#112240] relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <StatCounter value={4500} label="Lives Impacted Directly" suffix="+" />
          <StatCounter value={65} label="Local Supply Chain" suffix="%" />
          <StatCounter value={120} label="Full Scholarships" />
          <StatCounter value={30} label="Carbon Footprint Reduction" suffix="%" />
        </div>
      </section>

      {/* Regional Footprint */}
      <section className="py-32 bg-[#0B1120] relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel text="Regional Presence" />
            <h2 className="display-lg text-white mb-8 italic">Expanding Our <br />Footprint.</h2>
            <p className="body-md text-[#4A6080] mb-12 leading-relaxed">
              Our operations are strategically placed to maximize impact and reach. From our headquarters in Nairobi to growing hubs in Kigali and Kampala, we are building a truly pan-African ecosystem.
            </p>
            <div className="space-y-4">
              {[
                { city: 'Nairobi', country: 'Kenya', status: 'Group Headquarters' },
                { city: 'Kampala', country: 'Uganda', status: 'Regional Logistics Hub' },
                { city: 'Kigali', country: 'Rwanda', status: 'Digital Innovation Center' }
              ].map(site => (
                <div key={site.city} className="flex items-center justify-between p-8 bg-[#112240] rounded-[2rem] border border-white/5 hover:border-[#1DB954]/30 transition-all group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1120] flex items-center justify-center text-[#1DB954]">
                       <MapPin size={24} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl">{site.city}</div>
                      <div className="text-[#4A6080] text-sm">{site.country}</div>
                    </div>
                  </div>
                  <span className="text-[#1DB954] text-[10px] label-caps font-bold bg-[#1DB954]/10 px-4 py-2 rounded-full">{site.status}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="rounded-[50px] overflow-hidden border border-white/10 shadow-3xl"
            >
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/regional-impact-map-visualization-3cce35bc-1775747231011.webp" 
                className="w-full" 
                alt="Map Visualization" 
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1DB954]/10 rounded-full blur-[80px]" />
          </div>
        </div>
      </section>

      {/* Sustainability Pillar */}
      <section className="py-32 bg-[#112240] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="rounded-[50px] overflow-hidden shadow-2xl"
               >
                 <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/sustainability-pillar-216a4c1c-1775747570123.webp" alt="Sustainability" className="w-full" />
               </motion.div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionLabel text="Environment" />
              <h2 className="display-lg text-white mb-8 italic">Our Net-Zero <br />Commitment.</h2>
              <p className="body-md text-[#4A6080] mb-10 leading-relaxed">
                Climate resilience is central to our operational strategy. We are transitioning our logistics fleet to electric, implementing solar across all MD Fitness facilities, and using sustainable materials in every interior project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Zap, text: "Renewable Energy Focus" },
                  { icon: Leaf, text: "Waste Reduction Systems" },
                  { icon: Globe, text: "Ecosystem Restoration" },
                  { icon: CheckCircle2, text: "Carbon Offsetting" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/80">
                    <div className="p-2 rounded-lg bg-[#0B1120] text-[#1DB954]"><item.icon size={18} /></div>
                    <span className="font-bold text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Empowerment Pillar */}
      <section className="py-32 bg-[#0B1120] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionLabel text="Community" />
              <h2 className="display-lg text-white mb-8 italic">Empowering Local <br />Communities.</h2>
              <p className="body-md text-[#4A6080] mb-12 leading-relaxed">
                Our success is intertwined with the prosperity of the communities we serve. Through the Move Different Foundation, we invest in education, healthcare, and vocational training for the youth of East Africa.
              </p>
              <div className="space-y-8">
                {[
                  { icon: GraduationCap, title: "Educational Scholarships", desc: "Supporting future leaders in STEM and entrepreneurship." },
                  { icon: Users, title: "Workforce Development", desc: "Training over 2,000 youth in digital skills and trade crafts." },
                  { icon: Heart, title: "Health Initiatives", desc: "Mobile health clinics reaching remote areas of our logistics routes." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#112240] flex items-center justify-center text-[#1DB954] shrink-0">
                       <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-[#4A6080]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[50px] overflow-hidden shadow-2xl border border-white/5"
              >
                <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/community-pillar-63de67d7-1775747570622.webp" alt="Community" className="w-full" />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#1DB954]/5 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos & Press */}
      <section className="py-32 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionLabel text="Partners & Press" />
          <h2 className="display-md text-white mt-4 mb-20 italic">Collaborating for Global Impact.</h2>
          
          <div className="p-16 rounded-[40px] bg-[#0B1120] border border-white/5 mb-24">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/partner-logos-grid-913a4302-1775747570366.webp" 
              alt="Partners Grid" 
              className="w-full h-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
               { tag: "Press Release", title: "Move Different Group Expands Foundations Reach in Uganda", date: "March 2024" },
               { tag: "Case Study", title: "How We Achieved 30% Carbon Reduction in One Year", date: "Feb 2024" },
               { tag: "Award", title: "East Africa Sustainability Leader of the Year 2023", date: "Jan 2024" }
            ].map((article, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-[#0B1120] border border-white/5 group hover:border-[#1DB954]/50 transition-all">
                <span className="label-caps text-[#1DB954] text-[10px]">{article.tag}</span>
                <h4 className="text-xl font-heading text-white mt-4 mb-8 leading-tight">{article.title}</h4>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-xs text-[#4A6080]">{article.date}</span>
                  <AnimatedButton variant="secondary" className="h-10 px-4 text-xs group-hover:bg-white group-hover:text-[#0B1120]">Read More</AnimatedButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#0B1120] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-24 h-24 rounded-full bg-[#1DB954]/10 flex items-center justify-center text-[#1DB954] mx-auto mb-10">
             <Handshake size={40} />
          </div>
          <h2 className="display-lg text-white mb-8 italic">Join Our Movement.</h2>
          <p className="body-lg text-[#4A6080] mb-12">
            We are always looking for strategic partners who share our vision for a sustainable and prosperous East Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <AnimatedButton variant="primary" className="px-12 h-16 w-full sm:w-auto">Become a Partner</AnimatedButton>
             <AnimatedButton variant="secondary" className="px-12 h-16 w-full sm:w-auto text-white border-white/20">Contact Our Foundation</AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;