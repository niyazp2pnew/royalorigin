"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

// Clean Pure SVGs for Social Channels
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XTwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

export default function FooterContact() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    state: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact-bureau"
      className="relative w-full py-16 sm:py-24 md:py-28 bg-[#FAF8F5] text-[#1E1915] overflow-hidden border-t border-[#E8DEC8]"
    >
      {/* Soft Ambient Cream Glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full bg-[#F3E7D3]/70 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Simple, Friendly Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-[1px] w-6 sm:w-10 bg-[#C9983A]" />
            <span className="font-crest text-[10px] sm:text-xs tracking-[0.25em] text-[#9A7023] uppercase font-bold">
              Get in Touch
            </span>
            <div className="h-[1px] w-6 sm:w-10 bg-[#C9983A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#17130F] tracking-tight">
            Let’s Connect & <br />
            <span className="italic font-light text-[#A87926]">
              Work Together.
            </span>
          </h2>

          <p className="mt-3 max-w-lg text-stone-600 text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed">
            Interested in distribution, institutional supply, or general brand inquiries? Drop us a line below and we will get back to you promptly.
          </p>
        </div>

        {/* 2-Column Split: Info & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
                <Image
                  src="/icon.png"
                  alt="Royal Origin Crest"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-crest text-xs sm:text-sm tracking-[0.2em] text-[#1E1915] font-bold uppercase leading-tight">
                  Royal Origin
                </h3>
                <p className="font-crest text-[8.5px] tracking-[0.25em] text-[#9A7023] uppercase font-semibold">
                  Distillery Limited
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3 pt-1">
              {/* Address */}
              <div className="flex items-start gap-3.5 p-4 rounded-md bg-white border border-[#E9DFCE] shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#F5ECE0] flex items-center justify-center shrink-0 mt-0.5 text-[#9A7023]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-crest text-[9px] uppercase tracking-[0.2em] text-stone-500 font-semibold">
                    Office Location
                  </p>
                  <p className="text-xs sm:text-sm text-stone-800 mt-0.5 leading-relaxed font-sans">
                    B - 28 Noida Sector - 132, <br />
                    Uttar Pradesh - 201306, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-4 rounded-md bg-white border border-[#E9DFCE] shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#F5ECE0] flex items-center justify-center shrink-0 mt-0.5 text-[#9A7023]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-crest text-[9px] uppercase tracking-[0.2em] text-stone-500 font-semibold">
                    Email Address
                  </p>
                  <a
                    href="mailto:contact@royalorigin.in"
                    className="text-xs sm:text-sm text-stone-800 hover:text-[#9A7023] transition-colors mt-0.5 block font-medium"
                  >
                    contact@royalorigin.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 p-4 rounded-md bg-white border border-[#E9DFCE] shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#F5ECE0] flex items-center justify-center shrink-0 mt-0.5 text-[#9A7023]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-crest text-[9px] uppercase tracking-[0.2em] text-stone-500 font-semibold">
                    Phone Number
                  </p>
                  <a
                    href="tel:+911204664253"
                    className="text-xs sm:text-sm text-stone-800 hover:text-[#9A7023] transition-colors mt-0.5 block font-medium"
                  >
                    +91 120 466 4253
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-md bg-[#F4EDE2] border border-[#E3D4BE] text-xs text-stone-700">
              <Clock className="w-4 h-4 text-[#9A7023] shrink-0" />
              <span>Monday to Saturday • 9:30 AM to 6:30 PM IST</span>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-crest text-[9px] uppercase tracking-[0.22em] text-stone-500 mb-2.5 font-semibold">
                Follow Us Online
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-[#DFD2BF] bg-white flex items-center justify-center text-stone-700 hover:text-[#9A7023] hover:border-[#9A7023] transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-[#DFD2BF] bg-white flex items-center justify-center text-stone-700 hover:text-[#9A7023] hover:border-[#9A7023] transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-[#DFD2BF] bg-white flex items-center justify-center text-stone-700 hover:text-[#9A7023] hover:border-[#9A7023] transition-all"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X Twitter"
                  className="w-9 h-9 rounded-full border border-[#DFD2BF] bg-white flex items-center justify-center text-stone-700 hover:text-[#9A7023] hover:border-[#9A7023] transition-all"
                >
                  <XTwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean & Easy Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 rounded-lg bg-white border border-[#E5DAC8] shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F4E9D5] flex items-center justify-center text-[#9A7023] mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-stone-900">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-sm font-sans leading-relaxed">
                    Thank you, {formData.fullName}. We have received your note and will be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        mobileNumber: "",
                        email: "",
                        state: "",
                        message: "",
                      });
                    }}
                    className="mt-6 px-5 py-2 rounded-full border border-[#D5C4AC] font-crest text-[10px] uppercase tracking-wider text-stone-800 hover:bg-stone-50 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-stone-200 pb-3 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1E1915] font-normal">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Fill out the simple form below and our team will get back to you.
                    </p>
                  </div>

                  {/* 1. Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF8F5] border border-[#DDD0BC] text-stone-900 placeholder:text-stone-400 text-xs sm:text-sm focus:outline-none focus:border-[#9A7023] transition-colors"
                    />
                  </div>

                  {/* 2. Mobile & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.mobileNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, mobileNumber: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF8F5] border border-[#DDD0BC] text-stone-900 placeholder:text-stone-400 text-xs sm:text-sm focus:outline-none focus:border-[#9A7023] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF8F5] border border-[#DDD0BC] text-stone-900 placeholder:text-stone-400 text-xs sm:text-sm focus:outline-none focus:border-[#9A7023] transition-colors"
                      />
                    </div>
                  </div>

                  {/* 3. State / Location (Manual Text Input) */}
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      State / Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Uttar Pradesh, Maharashtra, Delhi..."
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF8F5] border border-[#DDD0BC] text-stone-900 placeholder:text-stone-400 text-xs sm:text-sm focus:outline-none focus:border-[#9A7023] transition-colors"
                    />
                  </div>

                  {/* 4. Message Box */}
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="How can we help you? (e.g., brand inquiry, distribution in your area)..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF8F5] border border-[#DDD0BC] text-stone-900 placeholder:text-stone-400 text-xs sm:text-sm focus:outline-none focus:border-[#9A7023] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#F3C644] via-[#E0A838] to-[#C98F20] text-stone-950 font-crest text-xs font-bold uppercase tracking-[0.2em] shadow-sm hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      <span>
                        {loading ? "Sending..." : "Submit Inquiry"}
                      </span>
                      {!loading && (
                        <Send className="w-3.5 h-3.5 stroke-[2.2]" />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}