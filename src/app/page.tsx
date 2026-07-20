"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

const heading = ["Transform", "Your", "Space"];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Background drifts down and dims as the hero scrolls away; the text layer
  // lifts and fades faster, creating depth between the two planes.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt="Elegantly furnished living room with a sofa, armchair and warm lighting"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Layered scrim: keep the furniture visible up top, deepen toward the
            bottom and edges so the headline and CTAs stay readable. */}
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/55 to-brown-900/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(61,35,20,0.55)_100%)]" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase text-brown-300 bg-brown-50/10 rounded-full border border-brown-400/20">
              Premium Handcrafted Furniture
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brown-50 leading-tight max-w-4xl mx-auto"
          >
            {heading.map((word) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: -40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { type: "spring", stiffness: 200, damping: 20 },
                  },
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 200, damping: 20 },
                },
              }}
              className="inline-block text-brown-300"
            >
              Into a Home
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-brown-300 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our collection of expertly crafted furniture pieces designed
            to bring warmth, elegance, and comfort to every room.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/gallery"
                className="block px-8 py-3.5 bg-brown-50 text-brown-900 font-semibold rounded-full hover:shadow-xl hover:bg-brown-100 transition-all text-sm"
              >
                Explore Gallery
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/contact"
                className="block px-8 py-3.5 border border-brown-400/40 text-brown-200 font-semibold rounded-full hover:bg-brown-50/15 hover:border-brown-300 transition-all text-sm"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-brown-400/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-brown-300 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeIn}>
            <span className="text-brown-600 text-sm font-medium tracking-widest uppercase">
              Collection
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brown-900 mt-3">
              Featured Furniture
            </h2>
            <p className="mt-4 text-brown-600 max-w-xl mx-auto">
              Handpicked pieces from our latest collection, crafted with
              precision and passion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-brown-100 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-brown-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-brown-900 mt-1">
                    {product.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-brown-900/0 group-hover:bg-brown-900/10 transition-colors rounded-2xl" />
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" {...fadeIn}>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-brown-800 text-brown-50 font-medium rounded-full hover:bg-brown-700 hover:shadow-lg transition-all text-sm"
              >
                View All Products
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brown-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <span className="text-brown-400 text-sm font-medium tracking-widest uppercase">
                Our Craft
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brown-50 mt-3">
                Where Quality Meets Design
              </h2>
              <p className="mt-4 text-brown-300 leading-relaxed">
                Every piece of furniture at Ola-Olu Furnitures is a testament to
                our commitment to excellence. We source the finest materials and
                employ skilled artisans to create pieces that stand the test of
                time.
              </p>
              <Link
                href="/about"
                className="group mt-6 inline-flex items-center gap-2 text-brown-300 font-medium hover:text-brown-50 transition-colors text-sm"
              >
                <span className="relative">
                  Learn Our Story
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brown-300 transition-all duration-300 group-hover:w-full" />
                </span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {["Precision", "Quality", "Design", "Comfort"].map((item) => (
                <div
                  key={item}
                  className="p-6 rounded-2xl bg-brown-800/50 border border-brown-700/50 text-center"
                >
                  <div className="text-2xl font-bold text-brown-50">{item}</div>
                  <div className="text-sm text-brown-400 mt-1">
                    We deliver {item.toLowerCase()} in every piece
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <span className="text-brown-600 text-sm font-medium tracking-widest uppercase">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brown-900 mt-3">
              Ready to Transform Your Space?
            </h2>
            <p className="mt-4 text-brown-600 max-w-xl mx-auto">
              Whether you need a single piece or a complete makeover, we are here
              to help bring your vision to life.
            </p>
          </motion.div>

          <motion.div className="mt-10" {...fadeIn}>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-brown-800 text-brown-50 font-semibold rounded-full hover:bg-brown-700 hover:shadow-lg transition-all text-sm"
              >
                Get Started
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
