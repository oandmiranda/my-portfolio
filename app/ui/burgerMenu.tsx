"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Animation from "./animation";
import { ChartNoAxesGantt, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/languageContext";
import { navLink } from "../data/navLinks";
import DownloadButton from "./downloadButton";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const sidebarVariants = {
    open: {
      x: 5,
      transition: {
        type: "spring" as const,
        stiffness: 220,
        damping: 40,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 35,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 },
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <nav className="relative lg:hidden">
      <Animation type="slideUp" trigger="mount">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 relative z-8 cursor-pointer">
          {isOpen ? <X size={28} /> : <ChartNoAxesGantt size={28} />}
        </button>
      </Animation>

      {/* BACKDROP */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 w-full h-screen bg-black z-6"
        />
      )}

      {/* SIDEBAR */}
      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="
          fixed top-0 left-0 
          h-screen 
          w-2/2
          bg-black/85 
          px-10 pt-20
          z-7
          flex flex-col
          md:w-1/2
        "
      >
        <motion.ul
          className="space-y-8"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          {navLink.map((link, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer text-base flex items-center gap-3 hover:text-tertiary transition-all duration-300"
            >
              {link.icon && <link.icon size={20} />}
              <Link
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {t(link.key, "nav")}
              </Link>
            </motion.li>
          ))}
          <DownloadButton />
        </motion.ul>
      </motion.aside>
    </nav>
  );
}
