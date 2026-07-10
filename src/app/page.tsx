"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const featuredProducts = [
  {
    id: 1,
    title: "Luxury Sofa Set",
    category: "Living Room",
    image: null,
    gradient: "from-brown-800 to-brown-600",
  },
  {
    id: 2,
    title: "King Size Bed",
    category: "Bedroom",
    image: null,
    gradient: "from-brown-700 to-brown-500",
  },
  {
    id: 3,
    title: "Executive Desk",
    category: "Office",
    image: null,
    gradient: "from-brown-900 to-brown-700",
  },
  {
    id: 4,
    title: "Dining Table",
    category: "Dining",
    image: null,
    gradient: "from-brown-600 to-brown-400",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brown-900 via-brown-800 to-brown-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brown-400 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brown-300 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brown-50 leading-tight max-w-4xl mx-auto"
          >
            Transform Your Space
            <br />
            <span className="text-brown-300">Into a Home</span>
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
            <Link
              href="/gallery"
              className="px-8 py-3.5 bg-brown-50 text-brown-900 font-semibold rounded-full hover:bg-brown-100 transition-colors text-sm"
            >
              Explore Gallery
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-brown-400/40 text-brown-200 font-semibold rounded-full hover:bg-brown-50/10 transition-colors text-sm"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

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
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
                >
                  <div className="text-brown-200/50 text-6xl font-bold select-none">
                    {product.title.charAt(0)}
                  </div>
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
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brown-800 text-brown-50 font-medium rounded-full hover:bg-brown-700 transition-colors text-sm"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
                className="mt-6 inline-flex items-center gap-2 text-brown-300 font-medium hover:text-brown-50 transition-colors text-sm"
              >
                Learn Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brown-800 text-brown-50 font-semibold rounded-full hover:bg-brown-700 transition-colors text-sm"
            >
              Get Started
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
