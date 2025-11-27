
// scroll-scrubbing é aparentemente o nome do conceito
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Card from "./card";
import Animation from "./animation";
import { CardProps } from "@/types/card";
import { useLanguage } from "../context/languageContext";


// VARIANTS para a Animação dos CARDS (Staggered Effect)
// ----------------------------------------------------
const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function ProjectsSection() {
  const { t } = useLanguage();

  const cardData: CardProps[] = [
  {
    imageSrc: "/images/miraflix-image.png",
    imageAlt: "miraflix-image",
    videoSrc: "/videos/miraflix-video.mp4",
    title: "Miraflix",
    description:
      t("description", "projects", "miraflix"),
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Styled-Components",
      "API REST",
      "PostgreSQL",
      "Node.js",
      "Express",
      "JWT Auth"
    ],
    reverse: false,
    gitHubLink: "https://github.com/oandmiranda/Mira-flix-frontend",
    href: "https://mira-flix-frontend.vercel.app/",
    findOutMore: "please visit the project repository to find out more about this project call Miraflix",
    details: t("details", "projects", "miraflix"),
  },
  {
    imageSrc: "/images/coffeeshop-image.png",
    imageAlt: "project-two",
    videoSrc: "/videos/coffeeshop-video.mp4",
    title: "Coffee Shop",
    description:
      t("description", "projects", "coffeeShop"),
    technologies: ["React", "TypeScript", "Styled-Components"],
    reverse: true,
    gitHubLink: "https://github.com/oandmiranda/Coffeeshop",
    href: "https://coffeeshop-sage.vercel.app/",
    findOutMore: "Find out more",
    details: t("details", "projects", "coffeeShop"),
  },
];

  const targetRef = useRef<HTMLDivElement>(null);

  // 1. Monitorar o Scroll na Section
  // A animação começa quando o topo do target atinge o fim da viewport ("start end")
  // e termina quando o fim do target atinge o início da viewport ("end start").
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // 2. Mapear o Scroll para a Posição Y do Título (Movimento Suave)
  // [0, 0.2] mapeia o scroll de 0% a 20% da section
  // [150, 0] mapeia o Y de 150px (abaixo) para 0px (ancorado no centro).
  const y = useTransform(scrollYProgress, [0, 0.2], [150, 0]);

  // 3. Mapear o Scroll para o Blur do Título (Ofuscamento)
  // [0.1, 0.2, 0.3, 0.6] - Define os pontos de scroll para a transformação
  // [blur(8px), blur(0px), blur(0px), blur(4px)] - Define os valores de saída como STRING CSS
  // 👈 CORREÇÃO: Isso resolve o erro 'blur.to is not a function'.
  const blur = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
    ["blur(5px)", "blur(0px)", "blur(0px)", "blur(1px)", "blur(8px)", "blur(10px)", "blur(12px)", "blur(13px)"]
  );

  // 4. Mapear a Opacidade do Título (Fade in & Dim)
  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.1, 0.9],
    [0, 1, 1, 0.6]
  );

  return (
    // Dê uma altura grande (ex: 300vh) para permitir bastante rolagem para a animação.
    <section ref={targetRef} className="relative pt-40 flex flex-col">
     
      <Animation animation="slideUp" className="sticky top-[44%]">
        <motion.h1
        style={{
          y,
          filter: blur, // 👈 Aplicando a string CSS diretamente
          opacity,
        }}
        // top-1/3 centraliza o título verticalmente para começar a animação.
        className="text-4xl font-bold text-center sm:text-5xl md:text-5xl"
      >
        {t("projects", "sessions")}
      </motion.h1>
      </Animation>
      

      {/* ---------------------------------------------------- */}
      {/* CARDS DOS PROJETOS (APARECEM APÓS O TÍTULO ANCORAR)   */}
      {/* ---------------------------------------------------- */}
      <motion.div
        // Empurra o container dos cards para que só apareçam após o título ter ancorado no topo.
        className="relative pt-[calc(67vh)]"
      >
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          // whileInView ativa o stagger dos cards quando o container entra na vista.
          whileInView="visible"
          viewport={{ once: true,}}
        >
          {cardData.map((card) => (
            <motion.div key={card.title} variants={cardItemVariants}>
              <Card key={card.title} {...card} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
