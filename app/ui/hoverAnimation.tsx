"use client";

import { HoverAnimationBoxProps, HoverAnimationVariant } from "@/types/hoverAnimationBox";
import { motion, MotionProps } from "framer-motion"; 

const hoverAnimationVariants: Record<HoverAnimationVariant, MotionProps> = {
  
  // variants
  scale: {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
    transition: { type: "tween" },
  },

  lift: {
    whileHover: { y: -5, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" },
    whileTap: { y: 0, boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)" },
    transition: { type: "spring", stiffness: 300 },
  },
  
  jiggle: {
    whileHover: { rotate: [0, 2, -2, 0] },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function HoverAnimationBox({
  children,
  className,
  variant = "scale",
}: HoverAnimationBoxProps) {
  
  const selectedAnimation = hoverAnimationVariants[variant];

  return (
    <motion.div
      className={className}
      {...selectedAnimation}
    >
      {children}
    </motion.div>
  );
}