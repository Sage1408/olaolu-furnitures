"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories, type Product } from "@/data/products";

const filters = ["All", ...categories] as const;

// WhatsApp number in international format, no "+" or spaces.
const WHATSAPP_NUMBER = "2348055365673";

function whatsappLink(product: Product) {
  const text = encodeURIComponent(
    `Hello Ola-Olu Furnitures, I'd like to request a quote for the "${product.title}".`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Product | null>(null);

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
            classics to modern designs. Tap any piece for details.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-brown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "text-brown-50"
                    : "bg-brown-100 text-brown-700 hover:bg-brown-200"
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-brown-800"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  layoutId={`card-${product.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelected(product)}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl bg-brown-100 cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
                >
                  <motion.div
                    layoutId={`image-${product.id}`}
                    className="relative aspect-[4/3] overflow-hidden"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
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

      <AnimatePresence>
        {selected && (
          <ProductModal
            product={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-brown-900/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        layoutId={`card-${product.id}`}
        role="dialog"
        aria-modal="true"
        aria-label={product.title}
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl bg-brown-50 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <motion.div
          layoutId={`image-${product.id}`}
          className="relative aspect-[16/9]"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brown-900/60 text-brown-50 flex items-center justify-center hover:bg-brown-900/80 transition-colors backdrop-blur-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </motion.div>

        <motion.div
          className="p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className="text-xs font-medium text-brown-500 uppercase tracking-wider">
            {product.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brown-900 mt-1">
            {product.title}
          </h2>
          <p className="mt-3 text-brown-600 leading-relaxed">
            {product.description}
          </p>

          <dl className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-brown-200">
              <dt className="text-xs font-medium text-brown-500 uppercase tracking-wider">
                Dimensions
              </dt>
              <dd className="mt-1 text-sm text-brown-800">
                {product.dimensions}
              </dd>
            </div>
            <div className="p-4 rounded-xl bg-white border border-brown-200">
              <dt className="text-xs font-medium text-brown-500 uppercase tracking-wider">
                Materials
              </dt>
              <dd className="mt-1 text-sm text-brown-800">
                {product.materials}
              </dd>
            </div>
          </dl>

          <a
            href={whatsappLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-brown-800 text-brown-50 font-semibold rounded-full hover:bg-brown-700 transition-colors text-sm"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Request a Quote on WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
