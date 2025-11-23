"use client";

import { HoverAnimationBoxProps, HoverAnimationVariant } from "@/types/hoverAnimationBox";
import { motion, MotionProps } from "framer-motion"; // Importe MotionProps para tipagem

// --- 1. Mapeamento das Animações ---
// Use o Record<T, V> para mapear strings para objetos MotionProps (animações)
const hoverAnimationVariants: Record<HoverAnimationVariant, MotionProps> = {
  
  // VARIANTE PADRÃO (ESCALA)
  scale: {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
    transition: { type: "tween" },
  },

  // VARIANTE 2 (LIFT/LEVANTAR)
  lift: {
    whileHover: { y: -5, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" },
    whileTap: { y: 0, boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)" },
    transition: { type: "spring", stiffness: 300 },
  },
  
  // VARIANTE 3 (JIGGLE/BALANCE)
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
  
  // 2. Seleção Dinâmica: Garante que a variante existe no mapa.
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