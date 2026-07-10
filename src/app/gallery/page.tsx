"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Living Room", "Bedroom", "Office", "Dining", "Custom"];

const products = [
  { id: 1, title: "Modern Sofa Set", category: "Living Room", gradient: "from-brown-800 to-brown-600" },
  { id: 2, title: "Executive Desk", category: "Office", gradient: "from-brown-900 to-brown-700" },
  { id: 3, title: "King Size Bed", category: "Bedroom", gradient: "from-brown-700 to-brown-500" },
  { id: 4, title: "Dining Table Set", category: "Dining", gradient: "from-brown-600 to-brown-400" },
  { id: 5, title: "Bookshelf", category: "Custom", gradient: "from-brown-800 to-brown-500" },
  { id: 6, title: "Coffee Table", category: "Living Room", gradient: "from-brown-700 to-brown-400" },
  { id: 7, title: "Wardrobe Cabinet", category: "Bedroom", gradient: "from-brown-900 to-brown-600" },
  { id: 8, title: "Office Chair", category: "Office", gradient: "from-brown-600 to-brown-300" },
  { id: 9, title: "Rustic Dining Bench", category: "Dining", gradient: "from-brown-800 to-brown-400" },
  { id: 10, title: "Custom Shelving Unit", category: "Custom", gradient: "from-brown-700 to-brown-600" },
  { id: 11, title: "Accent Armchair", category: "Living Room", gradient: "from-brown-500 to-brown-300" },
  { id: 12, title: "Nightstand Set", category: "Bedroom", gradient: "from-brown-800 to-brown-500" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="pt-28 pb-12 bg-brown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brown-600 text-sm font-medium tracking-widest uppercase"
          >
            Our Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 mt-3"
          >
            Furniture Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-brown-600 max-w-xl mx-auto"
          >
            Browse our wide range of handcrafted furniture, from timeless
            classics to modern designs.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-brown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-brown-800 text-brown-50"
                    : "bg-brown-100 text-brown-700 hover:bg-brown-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl bg-brown-100 cursor-pointer"
                >
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
                  >
                    <div className="text-brown-200/40 text-7xl font-bold select-none">
                      {product.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <div>
                      <span className="text-xs font-medium text-brown-300 uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-semibold text-brown-50">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-brown-500 py-12">
              No products in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </>
  );
}
