"use client";

import { Github, Linkedin, Mail, ChevronsUp, Download } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; //
import InformationArea from "./informationArea";
import ContactArea from "./contactArea";
import { useLanguage } from '../context/languageContext';

export default function Footer() {
    const { t } = useLanguage();
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
        <section className="flex flex-col items-center gap-10 m-auto w-full" id='contacts'>

            <div className="flex flex-col gap-6 sm:flex-row sm:gap-2 w-full">
                <InformationArea title={t("title", "footer", "resume")}>
                    <ContactArea icon={<Download />} href="/">{t("download", "footer", "resume")}</ContactArea>
                </InformationArea>

                <InformationArea title={t("title", "footer", "socialMedias")}>
                    <ContactArea icon={<Linkedin />} href="https://www.linkedin.com/in/oandmiranda/">Linkedin</ContactArea>
                    <ContactArea icon={<Github />} href="https://github.com/oandmiranda">GitHub</ContactArea>
                </InformationArea>
                
                <InformationArea title="E-mail:">
                    <div className="flex items-center gap-1.5">
                        <Mail size={20}/>
                        <span className="text-sm">and.miranda1818@gmail.com</span>
                    </div>
                </InformationArea>
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