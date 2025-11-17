"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeIn({
  children,
  delay = 0,
  className,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.97,
      filter: "blur(1px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 2.1,
        delay,
        ease: [0.16, 1, 1, 1], // cubic-bezier moderno e suave
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}