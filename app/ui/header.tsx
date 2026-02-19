"use client";

import NavBar from "./navbar";
import { Circle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "../context/languageContext";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.3, 
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  },
};

export default function Header() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col bg-no-repeat lg:bg-cover lg:bg-center" style={{backgroundImage: "url('/images/background.png')"}}>
      <NavBar />
      <div className="flex flex-col justify-center items-center w-full h-screen px-(--p-base) sm:px-10 md:px-30 lg:px-55 xl:px-90">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-start text-start w-full max-w-4xl gap-4"
        >
          <motion.p variants={itemVariants}>{t("welcome", "header")}</motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-secondary font-title-header text-4xl sm:text-5xl md:text-6xl"
          >{t("name", "header")}</motion.h1>
          <motion.h2 variants={itemVariants} className="font-title text-3xl">
            {t("tagline", "header")}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-1xl">
            {t("bio", "header")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="
              flex items-center gap-2 text-xs 
              rounded-full px-2 py-1 
              availableButtonStyle
              shadow-base 
            "
          >
            <motion.span
              className="relative flex items-center justify-center"
            >
              <Circle className="size-3 bg-active relative rounded-full" />
            </motion.span>

            <motion.span
              className="text-active"
            >
              {t("status", "header")}
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
