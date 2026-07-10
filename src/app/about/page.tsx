"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const values = [
  {
    title: "Craftsmanship",
    desc: "Every piece is handcrafted by skilled artisans with years of experience and a passion for woodworking.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Quality Materials",
    desc: "We source only the finest woods, fabrics, and materials to ensure durability and timeless beauty.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    desc: "Your satisfaction drives everything we do. We work closely with you to bring your vision to life.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Custom Designs",
    desc: "Need something unique? We create bespoke furniture tailored to your specific needs and space.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const team = [
  { name: "Adebayo Olaolu", role: "Founder & Master Craftsman", initial: "AO" },
  { name: "Chioma Eze", role: "Lead Designer", initial: "CE" },
  { name: "Emeka Nwosu", role: "Production Manager", initial: "EN" },
  { name: "Folake Adeyemi", role: "Customer Relations", initial: "FA" },
];

export default function About() {
  return (
    <>
      <section className="pt-28 pb-12 bg-brown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brown-600 text-sm font-medium tracking-widest uppercase"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 mt-3"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-brown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-gradient-to-br from-brown-800 to-brown-600 aspect-[4/3] flex items-center justify-center"
            >
              <span className="text-brown-200/30 text-8xl font-bold select-none">OF</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-brown-900">
                Crafting Dreams into Furniture Since 2015
              </h2>
              <div className="mt-4 space-y-4 text-brown-600 leading-relaxed">
                <p>
                  Ola-Olu Furnitures was born from a simple belief: your home
                  deserves furniture that is as unique as you are. Founded by
                  Adebayo Olaolu, a master craftsman with over two decades of
                  experience, our workshop has grown from a small local studio
                  into a trusted name in furniture design.
                </p>
                <p>
                  Every piece we create carries the heritage of Nigerian
                  craftsmanship blended with contemporary design sensibilities.
                  We take pride in transforming raw materials into functional
                  art that tells a story.
                </p>
                <p>
                  Today, we serve clients across the country, offering both
                  ready-made collections and fully customizable pieces. Our
                  commitment remains unchanged: quality, integrity, and
                  beauty in every detail.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div className="text-center mb-16" {...fadeIn}>
            <span className="text-brown-600 text-sm font-medium tracking-widest uppercase">
              What We Stand For
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brown-900 mt-3">
              Our Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-brown-200 hover:border-brown-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-brown-100 text-brown-700 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-brown-900 mb-2">{value.title}</h3>
                <p className="text-sm text-brown-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mb-16" {...fadeIn}>
            <span className="text-brown-600 text-sm font-medium tracking-widest uppercase">
              Meet the Team
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brown-900 mt-3">
              The People Behind the Craft
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brown-700 to-brown-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brown-50 text-2xl font-bold">
                    {member.initial}
                  </span>
                </div>
                <h3 className="font-semibold text-brown-900">{member.name}</h3>
                <p className="text-sm text-brown-500">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeIn}
            className="text-center p-12 rounded-2xl bg-gradient-to-br from-brown-800 to-brown-700"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-brown-50 mb-4">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-brown-300 max-w-lg mx-auto mb-8">
              Whether you have a specific design in mind or need inspiration, we
              are here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brown-50 text-brown-900 font-semibold rounded-full hover:bg-brown-100 transition-colors text-sm"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
