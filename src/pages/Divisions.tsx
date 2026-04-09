import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Truck, 
  LayoutDashboard, 
  Dumbbell, 
  ArrowRight, 
  Zap, 
  Users, 
  Target,
  ExternalLink
} from 'lucide-react';
import { SectionLabel, AnimatedButton } from '../components/Shared';
import { Link } from 'react-router-dom';

const divisions = [
  { 
    id: 'idn', 
    name: "Infinite Digital Network", 
    tagline: "The Digital Future, Built Today",
    icon: Globe, 
    color: "#2563EB", 
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/digital-division-hero-c67ae582-1775745192783.webp", 
    path: "/digital",
    desc: "Driving East Africa's digital transformation with industry-leading technology, software development, and innovative digital marketing strategies."
  },
  { 
    id: 'logistics', 
    name: "Move Different Logistics", 
    tagline: "Moving Africa Forward",
    icon: Truck, 
    color: "#F59E0B", 
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/logistics-division-hero-5288253c-1775745192659.webp", 
    path: "/logistics",
    desc: "Comprehensive supply chain solutions and logistics management, optimized for efficiency and reliability across regional borders."
  },
  { 
    id: 'interiors', 
    name: "54 Inspired Interiors", 
    tagline: "Luxury in Every Detail",
    icon: LayoutDashboard, 
    color: "#C2714F", 
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/interiors-division-hero-ae76d051-1775745191531.webp", 
    path: "/interiors",
    desc: "Luxury interior design and construction that blends modern aesthetics with local craftsmanship for commercial and residential spaces."
  },
  { 
    id: 'fitness', 
    name: "MD Fitness", 
    tagline: "Performance Reimagined",
    icon: Dumbbell, 
    color: "#16A34A", 
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/fitness-division-hero-76996b9f-1775745192078.webp", 
    path: "/fitness",
    desc: "A premium health and wellness ecosystem providing high-performance coaching, world-class facilities, and results-driven fitness community."
  }
];

const Divisions = () => {
  return (
    <div className="pt-20 bg-[#0B1120]">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/strategic-synergy-visualization-897d0450-1775747231125.webp" className="w-full h-full object-cover opacity-20" alt="Synergy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-[#0B1120]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionLabel text="Our Companies" light />
          <h1 className="display-hero text-white mb-8 italic">Diverse Expertise. <br />One Vision.</h1>
          <p className="body-lg text-white/60 max-w-2xl">
            Move Different Group operates a curated portfolio of specialized divisions, each a leader in its respective field. From digital innovation to physical infrastructure, we build the future of East Africa.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {divisions.map((div, i) => (
              <motion.div 
                key={div.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[540px] rounded-[40px] overflow-hidden shadow-deep border border-white/5"
              >
                <img 
                  src={div.img} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                  alt={div.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent transition-opacity group-hover:opacity-80" />
                
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md" style={{ color: div.color }}>
                      <div.icon size={24} />
                    </div>
                    <span className="label-caps text-white/60 text-xs">{div.tagline}</span>
                  </div>
                  <h3 className="display-sm text-white mb-6 group-hover:translate-x-2 transition-transform">{div.name}</h3>
                  <p className="body-md text-white/70 mb-8 max-w-sm line-clamp-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {div.desc}
                  </p>
                  <Link to={div.path} className="w-full">
                    <AnimatedButton variant="secondary" className="w-full text-white group-hover:bg-white group-hover:text-[#0B1120]">
                      View Division Details <ArrowRight size={16} />
                    </AnimatedButton>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Synergy Section */}
      <section className="py-32 bg-[#112240] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <SectionLabel text="The Power of Synergy" />
          <h2 className="display-lg text-white mb-12 italic">Cross-Division Integration.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "Operational Velocity", text: "Leveraging shared resources to accelerate market entry and scaling." },
              { icon: Target, title: "Strategic Alignment", text: "Synchronizing goals across divisions to maximize long-term group value." },
              { icon: Users, title: "Collective Intelligence", text: "Knowledge sharing between specialists in tech, logistics, and design." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 rounded-[2.5rem] bg-[#0B1120] border border-white/5 hover:border-[#1DB954]/50 transition-colors"
              >
                <item.icon size={40} className="text-[#1DB954] mb-8 mx-auto" />
                <h4 className="text-xl font-heading text-white mb-4">{item.title}</h4>
                <p className="body-md text-[#4A6080]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1DB954]/5 rounded-full blur-[120px]" />
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0B1120] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="display-md text-white mb-8">Interested in collaborating with one of our divisions?</h2>
          <Link to="/contact">
            <AnimatedButton variant="primary" className="px-12 h-16 text-lg">
              Partner With Us <ExternalLink size={20} />
            </AnimatedButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Divisions;