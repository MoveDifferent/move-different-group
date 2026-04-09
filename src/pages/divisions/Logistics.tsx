import React from 'react';
import { Truck, CheckCircle2, ArrowRight, Zap, Globe, Shield, Navigation, Package, Search } from 'lucide-react';
import { SectionLabel, AnimatedButton, StatCounter } from '../../components/Shared';
import { motion } from 'framer-motion';

const Logistics = () => {
  const features = [
    { icon: Navigation, title: 'Smart Routing', desc: 'AI-driven algorithms that calculate the fastest, safest trade routes in real-time.' },
    { icon: Package, title: 'Inventory Sync', desc: 'Full visibility across regional hubs with automated stock management.' },
    { icon: Search, title: 'Deep Tracking', desc: 'IoT-enabled units providing minute-by-minute status for every metric ton.' }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/logistics-division-hero-5288253c-1775745192659.webp" alt="Logistics" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/70 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-[#F59E0B]">
                <Truck size={24} />
              </div>
              <span className="label-caps text-white/70 tracking-widest">Moving Africa Forward</span>
            </div>
            <h1 className="display-hero text-white mb-8 italic">Move Different <br /><span className="text-[#F59E0B]">Logistics</span></h1>
            <p className="body-lg text-white/70 max-w-2xl mb-12">
              Reliable transport and supply chain solutions optimized through data-driven routing and fleet management excellence. We bridge the gap between borders.
            </p>
            <div className="flex flex-wrap gap-4">
              <AnimatedButton variant="primary" className="bg-[#F59E0B] px-12 h-16 border-none shadow-gold group">
                Request Quote <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </AnimatedButton>
              <AnimatedButton variant="secondary" className="px-12 h-16 border-white/20 text-white">
                Track Shipment
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1120] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <StatCounter value={500} suffix="+" label="Modern Fleet Vehicles" color="[#F59E0B]" />
            <StatCounter value={8} suffix="" label="Regional Logistics Hubs" color="white" />
            <StatCounter value={99} suffix=".8%" label="On-Time Delivery Rate" color="white" />
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="relative">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/logistics-routes-viz-73592cd0-1775746244248.webp" 
                  className="rounded-[48px] shadow-2xl border border-white/10" 
                  alt="Logistics Network" 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent_70%)]" />
             </div>
             <div>
                <SectionLabel text="Regional Arteries" />
                <h2 className="display-lg text-white mb-8">Unlocking the <br />East African Corridor.</h2>
                <p className="body-lg text-[#4A6080] mb-12">
                  Our strategic hubs in Nairobi, Kampala, and Kigali serve as the vital link for cross-border trade, reducing friction and maximizing speed.
                </p>
                <div className="space-y-8">
                  {features.map((f, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white transition-all">
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
              <SectionLabel text="Our Services" />
              <h2 className="display-lg text-white">Seamless Supply Chains.</h2>
            </div>
            <p className="body-md text-[#4A6080] max-w-xs">
              Integrated solutions for cross-border trade and last-mile efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Cross-Border Freight', description: 'Seamless movement of goods across Kenya, Uganda, Rwanda, and Tanzania.' },
              { title: 'Smart Warehousing', description: 'Automated storage solutions with real-time inventory tracking and optimization.' },
              { title: 'Last-Mile Delivery', description: 'Hyper-local distribution for e-commerce and retail giants in urban centers.' },
              { title: 'Cold Chain Logistics', description: 'Temperature-controlled transport for agricultural and pharmaceutical exports.' },
              { title: 'Fleet Management', description: 'Telematics-driven optimization of third-party fleets for maximum efficiency.' },
              { title: 'Customs Brokerage', description: 'Navigating regulatory landscapes with expert precision and zero downtime.' }
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
                <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] mb-8 group-hover:bg-[#F59E0B] group-hover:text-white transition-all duration-300">
                  <Globe size={28} />
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
          <div className="relative rounded-[56px] overflow-hidden border border-white/10 group shadow-2xl">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/logistics-fleet-hero-a96a6840-1775745565231.webp" className="w-full h-[600px] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" alt="Fleet" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent flex items-center justify-center p-12 text-center">
              <div className="max-w-2xl relative z-10">
                 <SectionLabel text="Reach" light />
                 <h2 className="display-md text-white mb-8">Regional Coverage. <br /><span className="text-[#F59E0B]">Digital Precision.</span></h2>
                 <p className="body-lg text-white/80 mb-12">Every mile is tracked, every shipment is optimized. We are redefining what it means to move goods in Africa through data.</p>
                 <AnimatedButton variant="white" className="h-14 px-10 mx-auto">Track Your Shipment</AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;