import Image from "next/image";
import Title from "./title";
import Link from "next/link";
import { Dot, SquaresUnite, ExternalLink } from "lucide-react";
import Animation from "./animation";
import { ProjectProps } from "@/types/project";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HoverAnimationBox from "./hoverAnimation";
import { useLanguage } from "../context/languageContext";

// Define as props de transição
const modalTransition = {
  duration: 0.4,
  scale: {
    type: "spring",
    visualDuration: 0.4,
    bounce: 0.2,
  },
};

// Define as Props de animação
const modalAnimationProps = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: modalTransition,
};

export default function Project({
  imageSrc,
  imageAlt,
  videoSrc,
  title,
  description,
  technologies,
  gitHubLink,
  href,
  details,
}: ProjectProps) {
  const [openModal, setOpenModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const { t } = useLanguage();

  const modalRef = useRef<HTMLDivElement>(null);

  // refereência para o elemento do video
  const videoRef = useRef<HTMLVideoElement>(null);

  // efeito para detectar cliques fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenModal(false);
      }
    }

    if (openModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal]);

  // Ajusta a velocidade do vídeo quando ele é mostrado
  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, [showVideo]);

  return (
    <section
      className="group relative flex flex-col mb-40 w-full scroll-mt-50"
      id="projects"
      onMouseEnter={() => setShowVideo(true)}
      onMouseLeave={() => setShowVideo(false)}
    >
      {showVideo && (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <Animation
            className="hidden rounded-md p-0.5 absolute top-1 right-1 z-1 md:flex"
            type="fade"
          >
            <ExternalLink size={28} />
          </Animation>
        </Link>
      )}

      <Animation className="p-(--p-sm) md:p-(p-base) mx-2 md:mx-0">
        <div
          className="absolute -inset-3 rounded-2xl border border-[rgb(var(--secondary-rgb)/0.2)] group-hover:bg-background 
             group-hover:border-[rgb(var(--secondary-rgb)/0.4)] group-hover:shadow-project
             transition-all duration-700 pointer-events-none"
        />

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 relative z-10">
          {/* text container */}
          <div className="relative w-full flex flex-col items-start z-2 gap-6 md:gap-4 md:w-[50%]">
            <HoverAnimationBox>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Title size="font-title text-base md:text-lg">{title}</Title>
                <span>
                  <ExternalLink size={15} />
                </span>
              </Link>
            </HoverAnimationBox>

            <p className="bg-secondary text-darkColor font-semibold p-(--p-sm) rounded-md text-sm md:-mr-20 whitespace-pre-line">
              {description}
            </p>

            <div className="flex justify-between items-center md:flex-col md:items-start gap-6 w-full">
              <div className="flex flex-wrap gap-1 text-xs">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center whitespace-nowrap -space-x-1"
                  >
                    <Dot width={20} className="text-active" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-12 text-sm md:mt-6 md:gap-10 md:text-md font-semibold">
              <Link
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-1 cursor-pointer"
              >
                <p>{t("github", "projects")}</p>
                <Image
                  src={"/github.svg"}
                  alt="github-icon"
                  width={28}
                  height={28}
                />
              </Link>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  setOpenModal(true);
                }}
                className="shrink-0 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <p>{t("findOutMore", "projects")}</p>
                <SquaresUnite size={22} />
              </div>
            </div>
          </div>

          {/* image/video container */}
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full md:w-[50%] rounded-md overflow-hidden shadow-softGlow"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={2000}
              height={1000}
              className={`w-full h-full object-cover rounded-md transition-opacity duration-300 ${
                showVideo ? "opacity-0" : "opacity-100"
              }`}
            />

            {showVideo && (
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-100"
              />
            )}
          </Link>
        </div>

        {/* openModal */}
        <AnimatePresence>
          {openModal && (
            <motion.div
              ref={modalRef}
              className="absolute inset-0 flex flex-col items-start justify-between bg-secondary p-2 rounded-md z-20 md:justify-end"
              {...modalAnimationProps}
            >
              <p className="text-sm p-(--p-sm) w-[96%] text-darkColor font-semibold leading-6 whitespace-pre-line overflow-auto mb-4">
                {details}
              </p>

              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenModal(false);
                }}
              >
                <SquaresUnite className="cursor-pointer text-text" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </Animation>
    </section>
  );
}
