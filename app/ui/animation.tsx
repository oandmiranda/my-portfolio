"use client";

import { AnimationProps } from "@/types/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Animation({
  children,
  delay = 0,
  className,
  type = "fade",
  trigger = "scroll",
}: AnimationProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const animations = {
    fade: {
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
          duration: 1.9,
          delay,
          ease: "easeOut",
        },
      },
    },
    slideUp: {
      hidden: {
        opacity: 0,
        y: 30,
        scale: 1,
        filter: "blur(2px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: 1.8,
          delay,
          ease: "easeOut",
        },
      },
    },

    secondary: {
      hidden: {
        opacity: 0,
        scale: 0.6,
        rotate: -4,
        filter: "blur(4px)",
      },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        transition: {
          duration: 1.8,
          delay,
          ease: "easeOut",
        },
      },
    },
  };

  // 🔥 Definição da lógica do trigger
  const shouldAnimate =
    trigger === "mount" ? true : isInView;

  return (
    <motion.div
      ref={ref}
      variants={animations[type] as unknown as import("framer-motion").Variants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}