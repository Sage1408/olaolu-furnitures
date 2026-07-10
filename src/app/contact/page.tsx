"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <section className="pt-28 pb-12 bg-brown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brown-600 text-sm font-medium tracking-widest uppercase"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 mt-3"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-brown-600 max-w-xl mx-auto"
          >
            Have a question or want to discuss a custom piece? We would love to
            hear from you.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-brown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-brown-900 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-green-50 border border-green-200"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-800 font-medium">
                      Thank you! Your message has been sent. We will get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brown-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-brown-200 bg-white text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brown-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-brown-200 bg-white text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brown-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-brown-200 bg-white text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you are looking for..."
                      className="w-full px-4 py-3 rounded-xl border border-brown-200 bg-white text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-brown-800 text-brown-50 font-semibold rounded-xl hover:bg-brown-700 transition-colors text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-brown-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-brown-200">
                    <div className="w-10 h-10 rounded-lg bg-brown-100 text-brown-700 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-brown-900">Visit Our Showroom</h3>
                      <p className="text-sm text-brown-500 mt-0.5">
                        123 Furniture Street, Ikeja, Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-brown-200">
                    <div className="w-10 h-10 rounded-lg bg-brown-100 text-brown-700 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-brown-900">Call Us</h3>
                      <p className="text-sm text-brown-500 mt-0.5">+234 800 000 0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-brown-200">
                    <div className="w-10 h-10 rounded-lg bg-brown-100 text-brown-700 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-brown-900">Email Us</h3>
                      <p className="text-sm text-brown-500 mt-0.5">hello@olaolufurnitures.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-brown-800 to-brown-700 text-center">
                <h3 className="font-semibold text-brown-50 mb-2">Business Hours</h3>
                <div className="space-y-1 text-sm text-brown-300">
                  <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 9:00 AM – 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
