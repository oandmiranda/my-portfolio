"use client"

import NavBar from "./navbar";
import { Circle } from 'lucide-react';
import { motion, Variants } from "framer-motion";

// O Maestro que controla o tempo
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // AQUI ESTÁ A MÁGICA DO EFEITO DOMINÓ
      staggerChildren: 0.2, // Espera 0.2s entre cada filho
      delayChildren: 0.3 // (Opcional) Espera 0.3s antes de começar tudo
    }
  }
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {type: "spring", stiffness: 100}  /* molinha suave */ 
  },
};

export default function Header() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <video
                className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
                src="/videos/video_draft.mov"
                autoPlay
                loop
                muted
            /> */}
      <NavBar />
      <div className="flex flex-col justify-center items-center w-full h-screen px-4 sm:px-10 md:px-30 lg:px-55 xl:px-90">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col justify-center items-start text-start w-full max-w-4xl gap-4">
            <motion.p variants={itemVariants}>Hi,</motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl font-title-header sm:text-5xl md:text-6xl">{`I'M MIRANDA.`}</motion.h1>
            <motion.h2 variants={itemVariants }className="text-3xl sm:text-4xl">I build things for the web</motion.h2>
            <motion.p variants={itemVariants} className="text-1xl">
                Front-End Developer and tech enthusiastic – creating exceptional web
                and app experiences
            </motion.p>
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-sm">
              <motion.span><Circle className="size-3 text-green-500"/></motion.span>
              <motion.span>Available for work</motion.span>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
