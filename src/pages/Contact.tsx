import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Youtube,
  MessageCircle
} from 'lucide-react';
import { SectionLabel, AnimatedButton } from '../components/Shared';
import { ContactForm } from '../components/ContactForm';
import { DivisionCards } from '../components/DivisionCards';

export default function Contact() {
  const corporateEmails = [
    { label: 'General Enquiry', email: 'info@movedifferent.co.ke' },
    { label: 'Business / Partnership', email: 'business@movedifferent.co.ke' },
    { label: 'Investor Enquiry', email: 'investors@movedifferent.co.ke' }
  ];

  const socialLinks = [
    { Icon: Linkedin, href: 'https://linkedin.com/company/movedifferent', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://instagram.com/movedifferent', label: 'Instagram' },
    { Icon: Twitter, href: 'https://twitter.com/movedifferent', label: 'Twitter' },
    { Icon: Youtube, href: 'https://youtube.com/@movedifferent', label: 'YouTube' }
  ];

  return (
    <div className="pt-24 lg:pt-32 bg-[#0B1120]">
      <Helmet>
        <title>Contact Us | Move Different Group — East Africa's Premier Conglomerate</title>
        <meta name="description" content="Get in touch with Move Different Group. Let's build something that moves. Our corporate office is located at The GreenHouse, Nairobi." />
        <meta property="og:title" content="Contact Move Different Group" />
        <meta property="og:description" content="Reach out to East Africa's most ambitious conglomerate. Let's build the future together." />
        <meta property="og:image" content="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/move-different-group-hq-cbb61ca3-1775745977717.webp" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/05bc078a-4409-45ad-ac77-ab8315f8df7b/move-different-group-hq-cbb61ca3-1775745977717.webp" 
            alt="MD Group HQ"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/90 via-[#0B1120]/95 to-[#0B1120]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,185,84,0.08)_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel text="Contact" />
            <h1 className="display-hero text-white mb-8">
              Let's Build Something <br className="hidden md:block" /> 
              <span className="text-[#1DB954]">That Moves.</span>
            </h1>
            <p className="body-lg text-[#4A6080] max-w-2xl mx-auto font-sans">
              Ready to redefine excellence in East Africa? Our corporate team is standing by to discuss your next strategic move.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Split Layout */}
      <section className="py-20 lg:py-32 bg-[#0B1120] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Column - Form (60%) */}
            <div className="lg:w-[60%]">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#112240] p-8 md:p-12 rounded-3xl border border-white/10 shadow-deep"
              >
                <h2 className="heading-lg text-white mb-8 font-heading">Send an Enquiry</h2>
                <ContactForm />
              </motion.div>
            </div>

            {/* Right Column - Details (40%) */}
            <div className="lg:w-[40%] space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="label-caps text-[#1DB954] mb-6">Corporate Office</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1DB954]/10 flex items-center justify-center text-[#1DB954] flex-shrink-0">
                        <MapPin size={24} />
                      </div>
                      <p className="body-md text-white/80 pt-1 font-sans">
                        2nd Floor, The GreenHouse,<br />
                        Adams Arcade, Ngong Road,<br />
                        Nairobi, Kenya
                      </p>
                    </div>

                    <a href="tel:+254798852545" className="flex items-center gap-4 group cursor-pointer min-h-[48px]">
                      <div className="w-12 h-12 rounded-xl bg-[#1DB954]/10 flex items-center justify-center text-[#1DB954] group-hover:bg-[#1DB954] group-hover:text-white transition-all flex-shrink-0">
                        <Phone size={24} />
                      </div>
                      <span className="body-md text-white/80 group-hover:text-[#1DB954] transition-colors font-sans">+254 798 852 545</span>
                    </a>

                    <div className="space-y-4">
                      {corporateEmails.map((item) => (
                        <a key={item.label} href={`mailto:${item.email}`} className="flex items-center gap-4 group cursor-pointer min-h-[48px]">
                          <div className="w-12 h-12 rounded-xl bg-[#1DB954]/10 flex items-center justify-center text-[#1DB954] group-hover:bg-[#1DB954] group-hover:text-white transition-all flex-shrink-0">
                            <Mail size={24} />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-[#4A6080] leading-none mb-1 tracking-widest">{item.label}</p>
                            <span className="body-md text-white/80 group-hover:text-[#1DB954] transition-colors font-sans">{item.email}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <AnimatedButton 
                    variant="primary"
                    className="w-full h-14"
                    onClick={() => window.open('https://wa.me/254798852545?text=Hello%20Move%20Different%20Group,%20I%20would%20like%20to%20enquire%20about...', '_blank')}
                  >
                    <MessageCircle size={20} /> WhatsApp Us Now
                  </AnimatedButton>
                  <p className="text-center text-[11px] text-[#4A6080] mt-3 uppercase tracking-widest font-bold font-heading">
                    Fastest response via WhatsApp
                  </p>
                </div>

                <div className="bg-[#112240] p-8 rounded-2xl border border-white/5">
                  <h4 className="label-caps text-[#1DB954] mb-6">Office Hours</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm font-sans">Monday – Friday</span>
                      <span className="text-white font-mono text-sm text-right">8:00 AM – 6:00 PM EAT</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm font-sans">Saturday</span>
                      <span className="text-white font-mono text-sm text-right">9:00 AM – 1:00 PM EAT</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="label-caps text-[#1DB954] mb-6 text-center">Follow the Movement</h4>
                  <div className="flex items-center justify-center gap-6">
                    {socialLinks.map(({ Icon, href, label }, idx) => (
                      <motion.a 
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="text-[#4A6080] hover:text-[#1DB954] transition-colors p-2"
                      >
                        <Icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-24 pt-20 border-t border-white/5">
             <h3 className="heading-lg text-white mb-10 text-center font-heading">Division Direct Contact</h3>
             <DivisionCards />
          </div>
        </div>
      </section>

      {/* Embedded Map */}
      <section className="h-[500px] bg-[#0B1120] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7906180550474!2d36.78696147576569!3d-1.2995255986883203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109be7944e83%3A0x67341851e500e576!2sThe%20GreenHouse!5e0!3m2!1sen!2ske!4v1715600000000!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Move Different Group HQ - The GreenHouse, Nairobi"
        />
        <div className="absolute inset-0 pointer-events-none border-y border-white/10 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
      </section>
    </div>
  );
}