"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/languageContext";

export default function LanguageToggle(): JSX.Element {
  const { language, toggleLanguage } = useLanguage();

  // 💡 Configuração da Transição (Ajuste aqui se quiser mais lento ou rápido)
  // stiffness: 200 (Menor = Mais lento/suave)
  // damping: 25 (Controla o "balanço" ao parar)
  const springTransition = { type: "spring", stiffness: 200, damping: 25 };

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className="
        group
        relative 
        flex items-center 
        w-[100px] h-9 
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

      {/* 💡 LADO ESQUERDO (Ativo quando EN) 
         Adicionei a prop 'transition' com a configuração mais lenta 
      */}
      {language === "en" ? (
        <motion.div
          layoutId="active-bg"
          className="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-gray-600 rounded-full shadow-sm z-10"
          transition={springTransition} 
        />
      ) : null}

      {/* 💡 LADO DIREITO (Ativo quando PT) 
         Adicionei a prop 'transition' com a configuração mais lenta 
      */}
      {language === "pt" ? (
         <motion.div
         layoutId="active-bg"
         className="absolute right-1 top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-gray-600 rounded-full shadow-sm z-10"
         transition={springTransition}
       />
      ) : null}


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