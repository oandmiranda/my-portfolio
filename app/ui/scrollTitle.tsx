"use client";

import { motion, useScroll, useTransform } from "framer-motion";

type ScrollTitleProps = {
  children: React.ReactNode;
  className?: string;
  sectionRef: React.RefObject<HTMLDivElement | null>;
};

export default function ScrollTitle({ children, className, sectionRef }: ScrollTitleProps) {
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.20], [150, 0]);

  const blur = useTransform(
    scrollYProgress,
    [0.00, 0.40, 0.48, 0.55, 0.80],
    ["blur(0px)", "blur(0px)", "blur(8px)", "blur(11px)", "blur(14px)"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.12, 0.22, 0.3, 0.9],
    [0, 1, 1, 0.6]
  );

  return (
    <motion.h1
      style={{ y, filter: blur, opacity }}
      className={
        className ??
        "font-title font-bold text-center text-4xl sm:text-5xl md:text-5xl"
      }
    >
      {children}
    </motion.h1>
  );
}