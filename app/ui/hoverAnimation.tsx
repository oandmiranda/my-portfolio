"use client";

import { HoverAnimationBoxProps } from "@/types/hoverAnimationBox";
import { motion } from "framer-motion";

export default function HoverAnimationBox({
  children,
  className,
}: HoverAnimationBoxProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "tween" }}
    >
      {children}
    </motion.div>
  );
}
