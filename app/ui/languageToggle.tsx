"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/languageContext";

export default function LanguageToggle(): JSX.Element {
  const { language, toggleLanguage } = useLanguage();

  const springTransition = { type: "spring" as const, stiffness: 200, damping: 25 };

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className="
        group
        relative 
        flex items-center 
        w-[70px] h-6
        sm:w-[90px] md:h-8 
        p-1
        bg-gray-200 dark:bg-gray-800 
        rounded-full 
        cursor-pointer
      "
    >
      {/* Separador Central " | " */}
      <span 
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          text-gray-400 dark:text-gray-600 
          text-xs font-light
          pointer-events-none
        "
      >
        |
      </span>

      {/* Background animado com posição fixa */}
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-secondary rounded-full shadow-softGlow z-10"
        animate={{
          left: language === "en" ? 4 : "auto",
          right: language === "en" ? "auto" : 4,
        }}
        transition={springTransition}
      />


      {/* Texto EN */}
      <span
        className={`
          relative z-20 
          w-1/2 text-center 
          text-xs font-bold
          transition-colors duration-300 // Aumentei um pouco a duração da cor do texto também
          ${
            language === "en"
              ? "text-gray-900 dark:text-white"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
          }
        `}
      >
        EN
      </span>

      {/* Texto PT */}
      <span
        className={`
          relative z-20 
          w-1/2 text-center 
          text-xs font-bold
          transition-colors duration-300 // Aumentei um pouco a duração da cor do texto também
          ${
            language === "pt"
              ? "text-gray-900 dark:text-white"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
          }
        `}
      >
        PT
      </span>
    </button>
  );
}