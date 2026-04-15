'use client';
import { useState } from 'react';
import { Mail, Phone, Send, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to connect. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div>
              <h2 className="text-accent-cyan font-mono tracking-widest text-sm uppercase mb-3 text-center md:text-left">Inquiry</h2>
              <motion.h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-center md:text-left">
                Let&apos;s <span className="text-gradient">Connect</span>
              </motion.h3>
              <p className="mt-6 text-gray-400 leading-relaxed text-lg text-center md:text-left">
                I am open to global opportunities, collaborations, and discussions about the future of AI.
                Whether you have a specific project or just want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="space-y-6">
              {[
                // { icon: Mail, label: 'Email', value: 'pratikkumar.bhumca22@gmail.com', href: 'mailto:pratikkumar.bhumca22@gmail.com', color: 'text-accent-cyan' },
                {
                  icon: Mail,
                  label: 'Email',
                  value: (
                    <div className="space-y-1">
                      <a href="mailto:pratikkumar.bhumca22@gmail.com" className="block hover:text-accent-cyan">
                        pratikkumar.bhumca22@gmail.com
                      </a>
                      <a href="mailto:pratikkumar@bhu.ac.in" className="block hover:text-accent-cyan">
                        pratikkumar@bhu.ac.in
                      </a>
                    </div>
                  ),
                  color: 'text-accent-cyan'
                },
                { icon: Phone, label: 'Phone', value: '+91 9199081805', href: 'tel:+919199081805', color: 'text-accent-blue' },
                { icon: MapPin, label: 'Location', value: 'New Delhi, India (Global Remote)', color: 'text-gray-400' }
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 glass rounded-2xl flex items-center justify-center border-white/5 group-hover:border-white/20 transition-all`}>
                    <item.icon className={item.color} size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{item.label}</p>
                    {/* {item.href ? (
                      <a href={item.href} className="text-white hover:text-accent-cyan transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )} */}

                    {typeof item.value === 'string' && item.href ? (
                      <a href={item.href} className="text-white hover:text-accent-cyan transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 md:p-12 rounded-[2rem] cyber-border relative group"
          >
            <div className="absolute inset-0 bg-accent-cyan/5 blur-[100px] -z-10 group-hover:bg-accent-cyan/10 transition-colors" />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full glass p-4 rounded-xl border-white/5 focus:border-accent-cyan outline-none transition-all placeholder:text-gray-700 bg-white/[0.02]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full glass p-4 rounded-xl border-white/5 focus:border-accent-cyan outline-none transition-all placeholder:text-gray-700 bg-white/[0.02]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="How can I help you today?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full glass p-4 rounded-xl border-white/5 focus:border-accent-cyan outline-none transition-all placeholder:text-gray-700 resize-none bg-white/[0.02]"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-cyan text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </motion.button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`flex items-center gap-2 p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                >
                  {status.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

