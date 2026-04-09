import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send } from 'lucide-react';
import { AnimatedButton } from './Shared';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  division: z.string().min(1, 'Please select a division'),
  message: z.string().min(10, 'Message is too short'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    toast.success('Message sent successfully! Our team will get back to you soon.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-heading font-semibold text-white/70 uppercase tracking-widest">Full Name</label>
          <input
            {...register('name')}
            className="w-full h-14 bg-md-navy/50 border border-white/10 rounded-xl px-6 text-white focus:border-md-green outline-none transition-all"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-heading font-semibold text-white/70 uppercase tracking-widest">Email Address</label>
          <input
            {...register('email')}
            className="w-full h-14 bg-md-navy/50 border border-white/10 rounded-xl px-6 text-white focus:border-md-green outline-none transition-all"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-heading font-semibold text-white/70 uppercase tracking-widest">Inquiry Division</label>
        <select
          {...register('division')}
          className="w-full h-14 bg-md-navy/50 border border-white/10 rounded-xl px-6 text-white focus:border-md-green outline-none transition-all appearance-none"
        >
          <option value="">Select a division</option>
          <option value="digital">Infinite Digital Network</option>
          <option value="logistics">Move Different Logistics</option>
          <option value="interiors">54 Inspired Interiors</option>
          <option value="fitness">MD Fitness</option>
          <option value="investors">Investor Relations</option>
        </select>
        {errors.division && <p className="text-red-500 text-xs mt-1">{errors.division.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-heading font-semibold text-white/70 uppercase tracking-widest">Message</label>
        <textarea
          {...register('message')}
          rows={5}
          className="w-full bg-md-navy/50 border border-white/10 rounded-xl p-6 text-white focus:border-md-green outline-none transition-all resize-none"
          placeholder="How can we move together?"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <AnimatedButton
        type="submit"
        className="w-full h-16 text-lg group"
        style={{ backgroundColor: isSubmitting ? '#1DB954/50' : '#1DB954' }}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="animate-spin">...</span> Sending
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </span>
        )}
      </AnimatedButton>
    </form>
  );
};