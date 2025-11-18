"use client";

import { FadeInProps } from "@/types/fadeIn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeIn({
  children,
  delay = 0,
  className,
  animation = "fade",
  trigger = "scroll",
}: FadeInProps) {
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
          duration: 1.8,
          delay,
          ease: [0.18, 1, 1, 1],
        },
      },
    },
    slideUp: {
      hidden: {
        opacity: 0,
        y: 30,
        scale: 1,
        filter: "blur(5px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 0.9,
        filter: "blur(0px)",
        transition: {
          duration: 1.8,
          delay,
          ease: [0.29, 1, 1, 1],
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
          ease: [0.18, 1, 1, 1],
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
      variants={animations[animation]}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}