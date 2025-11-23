"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ChevronsUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; //

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0});
    }

    // float button animation to scroll to top
    const floatVariants: Variants= {
        float: {
            y: [0, -13, 0], // Move de 0px para -8px (para cima) e retorna a 0px
            transition: {
                duration: 1.4, // Duração da animação
                ease: "easeInOut", // Suaviza o início e o fim
                repeat: Infinity, // Repete infinitamente
                repeatType: "loop" // Faz o ciclo se repetir
            }
        }
    };

    return (
        <section className="flex flex-col items-center gap-10 m-auto">
            <div className="flex gap-6">
                <Link href={"https://github.com/oandmiranda"} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-surface rounded-full"><Github className="size-8"/></Link>
                <Link href={"https://www.linkedin.com/in/oandmiranda/"} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-surface rounded-full"><Linkedin className="size-8"/></Link>
                <Link href={"/"} className="p-2.5 bg-surface rounded-full"><Mail className="size-8"/></Link>
            </div>
            
            <motion.div
                variants={floatVariants}
                animate="float" // Inicia a animação 'float'
            >
                <button 
                    onClick={scrollToTop} 
                    className="ml-auto p-2 bg-primary rounded-full cursor-pointer"
                >
                    <ChevronsUp className="size-13" />
                </button>
            </motion.div>
        </section>
    )
}