"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Building2,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function ContactFormDetails() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        state: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section className="relative w-full py-14 sm:py-20 md:py-28 bg-[#FAF8F5] text-[#1E1915] overflow-hidden border-b border-[#E8DEC8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Corporate Desk Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <span className="font-crest text-[9.5px] uppercase tracking-[0.24em] text-[#9A7023] font-bold">
                Institutional Bureau
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#18130E] font-normal leading-tight mt-1">
                Corporate Desk
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed">
                Our central secretariat and global distribution officers are headquartered at Noida Sector 132.
              </p>
            </div>

            {/* Information Card Stack */}
            <div className="p-6 sm:p-7 rounded-xl bg-white border border-[#E9DFCE] shadow-2xs space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#FAF4EA] border border-[#E3D1B5] flex items-center justify-center text-[#9A7023] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <span className="font-crest text-[9px] uppercase tracking-wider text-stone-500 font-bold block">
                    Headquarters
                  </span>
                  <p className="font-serif text-sm sm:text-base text-stone-900 font-semibold mt-0.5 leading-snug">
                    B - 28 Noida 132, <br />
                    UP - 201306, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#F2EAE0]">
                <div className="w-9 h-9 rounded-lg bg-[#FAF4EA] border border-[#E3D1B5] flex items-center justify-center text-[#9A7023] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <span className="font-crest text-[9px] uppercase tracking-wider text-stone-500 font-bold block">
                    Official Inquiries
                  </span>
                  <a
                    href="mailto:contact@royalorigin.in"
                    className="font-mono text-xs sm:text-sm text-[#8C6925] font-semibold hover:underline mt-0.5 block"
                  >
                    contact@royalorigin.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#F2EAE0]">
                <div className="w-9 h-9 rounded-lg bg-[#FAF4EA] border border-[#E3D1B5] flex items-center justify-center text-[#9A7023] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <span className="font-crest text-[9px] uppercase tracking-wider text-stone-500 font-bold block">
                    Direct Corporate Line
                  </span>
                  <a
                    href="tel:+911204664253"
                    className="font-mono text-xs sm:text-sm text-stone-900 font-semibold hover:text-[#9A7023] transition-colors mt-0.5 block"
                  >
                    +91 120 466 4253
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Note */}
            <div className="p-4 rounded-lg bg-[#F5ECE0] border border-[#E3D1B5] flex items-center gap-3 text-xs text-stone-700">
              <Clock className="w-4 h-4 text-[#9A7023] shrink-0" />
              <span>
                Desk Operating Hours: Mon – Sat • 09:30 – 18:30 IST
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Simple Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-[#E8DEC8] shadow-sm"
          >
            <div className="mb-6">
              <span className="font-crest text-[9px] uppercase tracking-[0.24em] text-[#9A7023] font-bold">
                Inquiry Dispatch Protocol
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#18130E] font-normal leading-tight mt-1">
                Transmit a Message
              </h3>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-crest uppercase tracking-wider text-stone-700 font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DECBB4] bg-[#FAF8F5] text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#9A7023] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-crest uppercase tracking-wider text-stone-700 font-semibold mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DECBB4] bg-[#FAF8F5] text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#9A7023] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-crest uppercase tracking-wider text-stone-700 font-semibold mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DECBB4] bg-[#FAF8F5] text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#9A7023] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-crest uppercase tracking-wider text-stone-700 font-semibold mb-1">
                        State / Region *
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="e.g. Uttar Pradesh, Delhi"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DECBB4] bg-[#FAF8F5] text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#9A7023] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-crest uppercase tracking-wider text-stone-700 font-semibold mb-1">
                      Message / Requirement *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your inquiry regarding brand distribution, volume quota, or partnership..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#DECBB4] bg-[#FAF8F5] text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#9A7023] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#F3C644] via-[#E0A838] to-[#C98F20] text-stone-950 font-crest text-xs font-bold uppercase tracking-[0.18em] shadow-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    <Send className="w-3.5 h-3.5 stroke-[2.4]" />
                    <span>
                      {isSubmitting ? "Transmitting..." : "Send Message"}
                    </span>
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-[#E0A838]/15 border border-[#E0A838] flex items-center justify-center text-[#9A7023]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl text-stone-900 font-semibold">
                    Message Transmitted
                  </h4>
                  <p className="text-xs text-stone-600 max-w-sm leading-relaxed">
                    Thank you. Your inquiry has been routed to our Corporate Desk at B-28 Noida Sector 132. An officer will respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-[11px] font-crest uppercase tracking-wider text-[#9A7023] font-bold underline cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}