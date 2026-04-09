import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  ShieldCheck, 
  Download, 
  ExternalLink, 
  Briefcase, 
  Globe, 
  Truck, 
  LayoutDashboard, 
  Dumbbell,
  ArrowRight,
  Activity,
  Target,
  Layers,
  Users,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { SectionLabel, AnimatedButton, StatCounter } from '../components/Shared';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const investorFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  firm: z.string().min(2, "Firm name is required"),
  investorType: z.string(),
  message: z.string().optional(),
});

type InvestorFormValues = z.infer<typeof investorFormSchema>;

const Investors = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<InvestorFormValues>({
    resolver: zodResolver(investorFormSchema),
    defaultValues: {
      investorType: 'Institutional Fund'
    }
  });

  const onSubmit = async (data: InvestorFormValues) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Investor enquiry:', data);
    toast.success("Enquiry submitted. Our Investor Relations team will contact you within 24 hours.");
    reset();
  };

  return (
    <div className="pt-20 bg-[#0B1120]">
      {/* Hero Section */}
      <section className="relative py-48 overflow-hidden flex items-center min-h-[80vh]">
        <div className="absolute inset-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/investor-meeting-skyline-f2421f61-1775746530925.webp"
            className="w-full h-full object-cover opacity-30"
            alt="Skyline"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/90 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <SectionLabel text="Investor Relations" light />
            <h1 className="display-hero text-white mb-8 italic">Institutional Scale. <br /><span className="text-[#C9A84C]">Alpha Returns.</span></h1>
            <p className="body-lg text-white/70 mb-12 max-w-2xl">
              Move Different Group provides a diversified entry point into East Africa's fastest-growing sectors, managed with global institutional rigor and a focus on long-term value creation.
            </p>
            <div className="flex flex-wrap gap-6">
              <AnimatedButton variant="gold" className="px-12 h-16 text-lg">Download Prospectus 2024</AnimatedButton>
              <AnimatedButton variant="secondary" className="px-12 h-16 border-white/20 text-white">Q3 Performance Report</AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Panel */}
      <section className="py-24 bg-[#112240] border-y border-white/5 shadow-2xl relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatCounter value={18} label="Annual Growth (YoY)" suffix="%" />
            <StatCounter value={250} label="Assets Managed (M)" suffix="M+" />
            <StatCounter value={12} label="Active Projects" suffix="" />
            <StatCounter value={98} label="Partner Retention" suffix="%" />
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-32 bg-[#0B1120] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <SectionLabel text="Investment Thesis" />
            <h2 className="display-lg text-white italic">Strategic Value Creation</h2>
            <p className="body-md text-[#4A6080] mt-6 max-w-2xl mx-auto">We identify, acquire, and scale market-leading businesses that form the backbone of the East African economy.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              { icon: TrendingUp, title: 'Sector Dominance', desc: 'We target businesses that occupy critical infrastructure and service roles in the regional economy, ensuring essential demand.' },
              { icon: BarChart3, title: 'Data-Led Operations', desc: 'Our proprietary digital technology stack optimizes supply chains and operations to drive industry-leading margins.' },
              { icon: ShieldCheck, title: 'Risk Mitigation', desc: 'Strategic diversification across logistics, tech, and lifestyle provides a natural hedge against single-sector volatility.' }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#112240] p-12 rounded-[3rem] border border-white/5 hover:border-[#C9A84C]/50 transition-all group"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] mb-10 group-hover:scale-110 transition-transform">
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl font-heading text-white mb-6 leading-tight">{item.title}</h3>
                <p className="body-md text-[#4A6080] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Model */}
      <section className="py-32 bg-[#112240] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionLabel text="Our Model" />
              <h2 className="display-lg text-white mb-10 italic">The MD Growth <br />Flywheel.</h2>
              <div className="space-y-12">
                {[
                  { icon: Target, title: "Acquisition Excellence", desc: "Identifying undervalued assets with high scalability potential in high-barrier-to-entry sectors." },
                  { icon: Activity, title: "Operational Enhancement", desc: "Integrating our proprietary digital stack and management systems to drive immediate efficiency gains." },
                  { icon: Layers, title: "Synergistic Scaling", desc: "Leveraging group resources and massive network effects to expand rapidly across East African borders." }
                ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-8"
                  >
                    <div className="w-14 h-14 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] shrink-0 font-serif font-bold">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-2xl font-heading text-white mb-3">{step.title}</h4>
                      <p className="body-md text-[#4A6080] leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[50px] overflow-hidden shadow-2xl border border-[#C9A84C]/30"
              >
                <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/investment-model-abstract-edfaaba6-1775746530731.webp" alt="Flywheel Model" className="w-full" />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C9A84C]/20 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Track Record Timeline */}
      <section className="py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/investor-track-record-timeline-be69a26f-1775746922692.webp" 
                  alt="Growth Timeline" 
                  className="w-full rounded-[3rem] shadow-deep border border-white/5"
                />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 w-64 bg-[#112240] border-l-4 border-[#C9A84C] p-8 rounded-r-2xl shadow-2xl">
                <p className="text-4xl font-serif font-bold text-white">5Y</p>
                <p className="text-sm text-[#4A6080] mt-2 label-caps font-bold">Consecutive Growth</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionLabel text="Our Track Record" />
              <h2 className="display-lg text-white mb-10 italic">A Legacy of <br />Consistent Growth.</h2>
              <p className="body-lg text-[#4A6080] mb-12">
                Since our inception, Move Different Group has maintained a sharp focus on capital efficiency and operational excellence, resulting in superior risk-adjusted returns.
              </p>
              <div className="space-y-10">
                {[
                  { year: '2019', milestone: 'Founded as a logistics disruptor in Nairobi, Kenya.' },
                  { year: '2021', milestone: 'Expansion into Digital Tech and Fitness sectors, achieving 100% growth.' },
                  { year: '2023', milestone: 'Cross-border expansion into Uganda and Rwanda operations.' },
                  { year: '2024', milestone: 'Reached $150M+ in consolidated portfolio valuation with Q4 projections.' }
                ].map((m, i) => (
                  <div key={i} className="flex items-start gap-8 group">
                    <span className="text-3xl font-serif font-bold text-[#C9A84C] min-w-[100px] group-hover:translate-x-2 transition-transform">{m.year}</span>
                    <div className="pt-4 flex-1">
                       <div className="h-[1px] w-full bg-white/10 mb-4" />
                       <span className="text-white/80 font-sans leading-relaxed">{m.milestone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-32 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div className="max-w-2xl">
              <SectionLabel text="Portfolio Distribution" />
              <h2 className="display-lg text-white mt-4 italic">Diversified Across Critical Sectors.</h2>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#1DB954]" />
                <span className="text-xs text-[#4A6080] label-caps">Stable Yield</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#2563EB]" />
                <span className="text-xs text-[#4A6080] label-caps">High Growth</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Digital', weight: '35%', color: '#2563EB', icon: Globe, count: '15+ Projects', type: 'Growth' },
              { label: 'Logistics', weight: '30%', color: '#F59E0B', icon: Truck, count: '500+ Vehicles', type: 'Yield' },
              { label: 'Interiors', weight: '20%', color: '#C2714F', icon: LayoutDashboard, count: '1.2M Sq.Ft', type: 'Yield' },
              { label: 'Fitness', weight: '15%', color: '#16A34A', icon: Dumbbell, count: '12 Locations', type: 'Growth' }
            ].map((sector) => (
              <motion.div 
                key={sector.label} 
                whileHover={{ y: -10 }}
                className="bg-[#0B1120] p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 rounded-xl bg-white/5" style={{ color: sector.color }}>
                    <sector.icon size={28} />
                  </div>
                  <span className="text-3xl font-serif font-bold text-white">{sector.weight}</span>
                </div>
                <h4 className="text-2xl font-heading text-white mb-2">{sector.label}</h4>
                <div className="flex items-center justify-between mb-8">
                   <p className="text-xs text-[#4A6080] label-caps font-bold tracking-widest">{sector.count}</p>
                   <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/40">{sector.type}</span>
                </div>
                <div className="mt-6 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: sector.weight }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full"
                    style={{ backgroundColor: sector.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Invest / Partner */}
      <section className="py-32 bg-[#0B1120]" id="investor-form">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#112240] rounded-[50px] p-12 md:p-24 border border-white/10 shadow-3xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid lg:grid-cols-2 gap-24 items-start relative z-10">
              <div>
                <SectionLabel text="Partner With Us" />
                <h2 className="display-lg text-white mb-8 italic">Enquire About <br />Partnerships</h2>
                <p className="body-md text-[#4A6080] mb-12 leading-relaxed">
                  We welcome enquiries from family offices, institutional funds, and strategic partners looking to participate in our next phase of regional expansion. Our Investor Relations team ensures full transparency and institutional-grade reporting.
                </p>
                <div className="space-y-6">
                  {[
                    { icon: Briefcase, title: "Priority Access", desc: "First-look rights to new ventures and pre-seed rounds." },
                    { icon: PieChart, title: "Detailed Reporting", desc: "Comprehensive quarterly governance and impact audits." },
                    { icon: Globe, title: "Network Expansion", desc: "Access to our regional network of political and business leaders." }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#0B1120] flex items-center justify-center text-[#C9A84C] shrink-0">
                        <benefit.icon size={24} />
                      </div>
                      <div>
                        <h5 className="text-white font-bold">{benefit.title}</h5>
                        <p className="text-sm text-[#4A6080] mt-1">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#0B1120] p-12 rounded-[3rem] border border-white/10 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label-caps text-[10px] text-[#4A6080] block mb-3 tracking-[0.2em]">Full Name</label>
                      <input 
                        {...register('name')} 
                        type="text" 
                        className={`w-full h-14 bg-[#112240] border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 text-white outline-none focus:border-[#C9A84C] transition-colors`} 
                        placeholder="John Smith" 
                      />
                    </div>
                    <div>
                      <label className="label-caps text-[10px] text-[#4A6080] block mb-3 tracking-[0.2em]">Email Address</label>
                      <input 
                        {...register('email')} 
                        type="email" 
                        className={`w-full h-14 bg-[#112240] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 text-white outline-none focus:border-[#C9A84C] transition-colors`} 
                        placeholder="john@firm.com" 
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label-caps text-[10px] text-[#4A6080] block mb-3 tracking-[0.2em]">Firm / Organization</label>
                      <input 
                        {...register('firm')} 
                        type="text" 
                        className={`w-full h-14 bg-[#112240] border ${errors.firm ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 text-white outline-none focus:border-[#C9A84C] transition-colors`} 
                        placeholder="Capital Ventures" 
                      />
                    </div>
                    <div>
                      <label className="label-caps text-[10px] text-[#4A6080] block mb-3 tracking-[0.2em]">Investor Type</label>
                      <select 
                        {...register('investorType')} 
                        className="w-full h-14 bg-[#112240] border border-white/10 rounded-xl px-6 text-white outline-none focus:border-[#C9A84C] appearance-none"
                      >
                        <option>Institutional Fund</option>
                        <option>Family Office</option>
                        <option>Private Equity</option>
                        <option>Accredited Individual</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label-caps text-[10px] text-[#4A6080] block mb-3 tracking-[0.2em]">Message (Optional)</label>
                    <textarea 
                      {...register('message')} 
                      className="w-full h-32 bg-[#112240] border border-white/10 rounded-xl p-6 text-white outline-none focus:border-[#C9A84C] transition-colors resize-none" 
                      placeholder="Tell us about your investment objectives..."
                    />
                  </div>
                  <AnimatedButton 
                    disabled={isSubmitting} 
                    variant="gold" 
                    className="w-full h-16 text-lg font-bold"
                  >
                    {isSubmitting ? 'Sending Enquiry...' : 'Request Information Pack'}
                  </AnimatedButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Footer */}
      <section className="py-24 bg-[#0B1120] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-10 mb-12 opacity-30">
             <div className="flex items-center gap-2"><Building2 size={16} /> <span className="text-[10px] label-caps tracking-widest">SEC Registered Equivalent</span></div>
             <div className="flex items-center gap-2"><CheckCircle2 size={16} /> <span className="text-[10px] label-caps tracking-widest">IFRS Compliant Reporting</span></div>
             <div className="flex items-center gap-2"><ShieldCheck size={16} /> <span className="text-[10px] label-caps tracking-widest">Verified Assets</span></div>
          </div>
          <p className="text-[10px] text-[#4A6080] uppercase tracking-widest leading-[2] border-t border-white/5 pt-12 max-w-2xl mx-auto">
            Disclaimer: Investment in private markets involves significant risk. Move Different Group is a regulated entity in its respective operational jurisdictions. Past performance is not indicative of future results. Please consult with your financial advisor before making any investment decisions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Investors;