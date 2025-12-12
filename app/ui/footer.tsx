"use client";

import { Github, Linkedin, MailOpen, ChevronsUp } from "lucide-react";
import { motion, Variants } from "framer-motion"; //
import InformationArea from "./dataArea";
import { useLanguage } from "../context/languageContext";
import DownloadButton from "./downloadButton";
import Button from "./button";
import Title from "./title";
import Link from "next/link";

export default function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
    // remove o hash da url (se houver) ao voltar ao topo
    window.history.replaceState(null, "", "/");
  };

  // float button animation to scroll to top
  const floatVariants: Variants = {
    float: {
      y: [0, -13, 0], // Move de 0px para -8px (para cima) e retorna a 0px
      transition: {
        duration: 1.4, // Duração da animação
        ease: "easeInOut", // Suaviza o início e o fim
        repeat: Infinity, // Repete infinitamente
        repeatType: "loop", // Faz o ciclo se repetir
      },
    },
  };

  const buttonHoverClass = `hover:shadow-project transition-all duration-700`;

  return (
    <section className="flex flex-col items-start m-auto w-full" id="contacts">
      <Title className="font-title text-sm-title md:text-md-title">
        {t("title", "footer")}
      </Title>
      <div className="w-full flex flex-col mt-2 gap-8 md:flex-row md:gap-base md:text-md">
        <InformationArea>
          <DownloadButton
            shadowType="shadow-softGlow"
            className={buttonHoverClass}
            iconColor="text-secondary"
            justifyStart
            bgTransparent
          />
        </InformationArea>

        <InformationArea title={t("title", "footer", "socialMedias")}>
          <Button
            bgTransparent
            icon={<Linkedin />}
            shadowType="shadow-softGlow"
            href="https://www.linkedin.com/in/oandmiranda/"
            className={buttonHoverClass}
          >
            Linkedin
          </Button>
          <Button
            bgTransparent
            icon={<Github />}
            shadowType="shadow-softGlow"
            href="https://github.com/oandmiranda"
            className={buttonHoverClass}
          >
            GitHub
          </Button>
        </InformationArea>

        <InformationArea title="E-mail:">
          <Button
            bgTransparent
            icon={<MailOpen />}
            shadowType="shadow-softGlow"
            className={buttonHoverClass}
          >
            <Link href={"mailto: and.miranda1818@gmail.com"}>and.miranda1818@gmail.com</Link>
          </Button>
        </InformationArea>
      </div>

      <motion.div
        variants={floatVariants}
        animate="float"
        className="m-auto mt-12 mb-10"
      >
        <button
          onClick={scrollToTop}
          className="ml-auto p-2 bg-secondary rounded-full cursor-pointer"
        >
          <ChevronsUp className="size-8 md:size-13" />
        </button>
      </motion.div>
    </section>
  );
}
