"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A thin bar pinned to the top of the viewport that fills as the page scrolls.
 * Uses a spring so the fill glides rather than tracking the scroll rigidly.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-brown-600"
      aria-hidden="true"
    />
  );
}
