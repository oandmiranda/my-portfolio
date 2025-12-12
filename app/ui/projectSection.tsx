"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import Card from "./project";
import { useLanguage } from "../context/languageContext";
import { ProjectProps } from "@/types/project";
import ScrollTitle from "./scrollTitle";
import Animation from "./animation";

// VARIANTS ----------------------------------------------------
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

  // SECTION REF PARA CONTROLAR O SCROLL CORRETAMENTE
  const sectionRef = useRef<HTMLDivElement>(null);

  const projectData: ProjectProps[] = [
    {
      imageSrc: "/images/miraflix-image.png",
      imageAlt: "miraflix-image",
      videoSrc: "/videos/miraflix-video.mp4",
      title: "Miraflix",
      description: t("description", "projects", "miraflix"),
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Styled-Components",
        "API REST",
        "PostgreSQL",
        "Node.js",
        "Express",
        "JWT Auth",
      ],
      reverse: false,
      gitHubLink: "https://github.com/oandmiranda/Mira-flix-frontend",
      href: "https://mira-flix-frontend.vercel.app/",
      findOutMore:
        "please visit the project repository to find out more about this project call Miraflix",
      details: t("details", "projects", "miraflix"),
    },
    {
      imageSrc: "/images/coffeeshop-image.png",
      imageAlt: "project-two",
      videoSrc: "/videos/coffeeshop-video.mp4",
      title: "Coffee Shop",
      description: t("description", "projects", "coffeeShop"),
      technologies: ["React", "TypeScript", "Styled-Components"],
      reverse: true,
      gitHubLink: "https://github.com/oandmiranda/Coffeeshop",
      href: "https://coffeeshop-sage.vercel.app/",
      findOutMore: "Find out more",
      details: t("details", "projects", "coffeeShop"),
    },
  ];

  return (
    <section ref={sectionRef} className="relative pt-40 flex flex-col">
      {/* TÍTULO ANIMADO COM SCROLL CONTROLADO PELA SECTION */}
      <Animation type="slideUp" className="sticky top-[44%]">
        <ScrollTitle
          sectionRef={sectionRef}
        >
          {t("projects", "sessions")}
        </ScrollTitle>
      </Animation>

      {/* CARDS ------------------------------------------------ */}
      <motion.div className="relative pt-[calc(78vh)]">
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectData.map((card) => (
            <motion.div key={card.title} variants={cardItemVariants}>
              <Card key={card.title} {...card} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
