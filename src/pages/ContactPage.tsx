import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram, Twitter, Youtube, ArrowRight, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { SectionLabel, AnimatedButton } from '../components/Shared';

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short"),
  organisation: z.string().optional(),
  enquiryType: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      phone: "+254 ",
      enquiryType: "General Enquiry"
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    toast.success("Message sent successfully! Our team will contact you shortly.");
    reset();
  };

  const divisions = [
    { name: "Infinite Digital Network", email: "digital@movedifferent.group", color: "#2563EB", slug: "digital" },
    { name: "Move Different Logistics", email: "logistics@movedifferent.group", color: "#F59E0B", slug: "logistics" },
    { name: "54 Inspired Interiors", email: "interiors@movedifferent.group", color: "#C2714F", slug: "interiors" },
    { name: "MD Fitness", email: "fitness@movedifferent.group", color: "#16A34A", slug: "fitness" },
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/contact-hero-background-69a79727-1775744656065.webp"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1120]/85" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <SectionLabel text="Get In Touch" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-hero text-white mb-6"
          >
            Let's Build Something <br /> That <span className="text-[#1DB954]">Moves.</span>
          </motion.h1>
          <p className="body-lg text-white/60 max-w-2xl mx-auto">
            Partner with East Africa's most innovative conglomerate. Reach out to our team for partnerships, investments, or service enquiries.
          </p>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[60%_40%] gap-16 lg:gap-24">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-xl text-white mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="label-caps text-[#4A6080]">Full Name</label>
                    <input 
                      {...register("fullName")}
                      className={`w-full h-12 bg-[#112240] border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 focus:border-[#1DB954] transition-colors outline-none text-white`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="label-caps text-[#4A6080]">Email Address</label>
                    <input 
                      {...register("email")}
                      className={`w-full h-12 bg-[#112240] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 focus:border-[#1DB954] transition-colors outline-none text-white`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="label-caps text-[#4A6080]">Phone Number</label>
                    <input 
                      {...register("phone")}
                      className={`w-full h-12 bg-[#112240] border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 focus:border-[#1DB954] transition-colors outline-none text-white`}
                      placeholder="+254 ..."
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="label-caps text-[#4A6080]">Organisation</label>
                    <input 
                      {...register("organisation")}
                      className="w-full h-12 bg-[#112240] border border-white/10 rounded-lg px-4 focus:border-[#1DB954] transition-colors outline-none text-white"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="label-caps text-[#4A6080]">Enquiry Type</label>
                  <select 
                    {...register("enquiryType")}
                    className="w-full h-12 bg-[#112240] border border-white/10 rounded-lg px-4 focus:border-[#1DB954] transition-colors outline-none text-white cursor-pointer appearance-none"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Investment">Investment Inquiry</option>
                    <option value="Service Quote">Service Quote</option>
                    <option value="Career">Career Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="label-caps text-[#4A6080]">Message</label>
                  <textarea 
                    {...register("message")}
                    className={`w-full h-40 bg-[#112240] border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg p-4 focus:border-[#1DB954] transition-colors outline-none text-white resize-none`}
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>

                <AnimatedButton 
                  type="submit" 
                  className="w-full h-14 text-base"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </AnimatedButton>
              </form>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h3 className="label-caps text-[#1DB954] mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <a href="https://maps.app.goo.gl/dummy" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#1B3A5C] flex items-center justify-center text-[#1DB954] shrink-0 border border-white/5">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-[#1DB954] transition-colors">Headquarters</p>
                      <p className="text-[#4A6080] text-sm">The GreenHouse, Westlands, Nairobi, Kenya</p>
                    </div>
                  </a>
                  <a href="tel:+254798852545" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#1B3A5C] flex items-center justify-center text-[#1DB954] shrink-0 border border-white/5">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-[#1DB954] transition-colors">Phone Support</p>
                      <p className="text-[#4A6080] text-sm">+254 798 852 545</p>
                    </div>
                  </a>
                  <a href="mailto:enquiries@movedifferent.group" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#1B3A5C] flex items-center justify-center text-[#1DB954] shrink-0 border border-white/5">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-white font-semibold group-hover:text-[#1DB954] transition-colors">Email Enquiries</p>
                      <p className="text-[#4A6080] text-sm">enquiries@movedifferent.group</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-8 bg-[#1B3A5C]/30 rounded-2xl border border-white/5">
                <h3 className="heading-md text-white mb-4">WhatsApp Support</h3>
                <p className="text-[#4A6080] text-sm mb-8">For immediate assistance, connect with our support team via WhatsApp.</p>
                <a href="https://wa.me/254798852545?text=Hello%20Move%20Different%20Group" target="_blank" rel="noopener noreferrer">
                  <AnimatedButton variant="primary" className="w-full h-14 bg-[#16A34A] hover:bg-[#14532D]">
                    <MessageSquare size={18} /> WhatsApp Us Now
                  </AnimatedButton>
                </a>
                <p className="text-[10px] text-center text-[#4A6080] mt-4 uppercase tracking-widest font-semibold">Fastest response via WhatsApp</p>
              </div>

              <div>
                <h3 className="label-caps text-[#1DB954] mb-6">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#4A6080]">Mon–Fri</span>
                    <span className="text-white">8:00 AM – 6:00 PM EAT</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#4A6080]">Saturday</span>
                    <span className="text-white">9:00 AM – 1:00 PM EAT</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#4A6080]">Sunday</span>
                    <span className="text-gold uppercase text-[10px] font-bold">By Appointment Only</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="label-caps text-[#1DB954] mb-6">Follow Our Journey</h3>
                <div className="flex gap-4">
                  {[Linkedin, Instagram, Twitter, Youtube].map((Icon, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ y: -4, color: '#1DB954' }}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-[#112240] flex items-center justify-center text-white/40 border border-white/5 transition-colors"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-deep h-[500px] dark-map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.820251346387!2d36.8049282!3d-1.2816353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7a030012f%3A0xc3f738018e6c701f!2sThe%20GreenHouse!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </section>

      {/* Division Contact Cards */}
      <section className="py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="heading-lg text-white">Division Quick Contact</h2>
            <p className="body-md text-[#4A6080]">Reach our specialized teams directly for division-specific enquiries.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((div, i) => (
              <motion.div
                key={div.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#112240] rounded-2xl border-l-4 border-white/5 relative group overflow-hidden"
                style={{ borderLeftColor: div.color }}
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundColor: div.color }}
                />
                <h4 className="font-serif text-xl font-bold text-white mb-2">{div.name}</h4>
                <p className="text-xs text-[#4A6080] uppercase tracking-wider mb-6">Division Unit</p>
                <a href={`mailto:${div.email}`} className="text-sm text-white/60 hover:text-white block mb-8 transition-colors">
                  {div.email}
                </a>
                <AnimatedButton 
                  variant="secondary" 
                  className="h-10 px-4 text-xs w-full"
                  onClick={() => toast.info(`Contacting ${div.name}...`)}
                >
                  Contact <ArrowRight size={14} />
                </AnimatedButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};