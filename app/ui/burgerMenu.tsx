"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const sidebarVariants = {
    open: {
      x: 70,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40
      }
    }
  }

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05,
        stiffness: 1000,
        velocity: -100
      }
    },
    closed: {
      opacity: 0,
      y: 30,
      transition: {
        stiffness: 1000
      }
    }
  }

  return (
    <nav className="relative lg:hidden">
      {/* Botão */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 z-50 relative"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MENU (Sidebar) */}
      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed top-0 left-0 h-full w-64 text-white p-6 shadow-xl z-40"
      >
        <motion.ul
          className="space-y-6 mt-10"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          {["Home", "Projects", "About", "Contact"].map((item, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer text-lg"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.aside>
    </nav>
  )
}