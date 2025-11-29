"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { TechLogo } from "@/types/tech";
import { useLanguage } from "../context/languageContext";

const animation = { duration: 10000, easing: (t: number) => t };

const technologies: TechLogo[] = [
  { src: "/git.svg", alt: "git-logo" },
  { src: "/github.svg", alt: "github-logo" },
  { src: "/html.svg", alt: "html-logo" },
  { src: "/css.svg", alt: "css-logo" },
  { src: "/styled-components.svg", alt: "styled-components-logo" },
  { src: "/javascript.svg", alt: "javascript-logo" },
  { src: "/typescript.svg", alt: "typescript-logo" },
  { src: "/react.svg", alt: "react-logo" },
  {
    src: "/next.svg",
    alt: "next-logo",
    className: "bg-white rounded-full p-0.5",
  },
  { src: "/tailwind.svg", alt: "tailwind-logo" },
  { src: "/node.svg", alt: "nodejs-logo" },
  { src: "/postgresql.svg", alt: "postgresql-logo" },
  { src: "/jest.svg", alt: "jest-logo" },
];

export default function Slider() {
  const { t } = useLanguage();

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 11,
      spacing: 6,
    },
    created(s) {
      s.moveToIdx(3, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 3, true, animation);
    },
  });

  return (
    <section className="flex flex-col items-center w-full bg-secondary rounded-2xl py-5 sm:col-span-2 md:col-span-3">
      <h2 className="">
        {t("title", "aboutMe", "technologies")}
      </h2>

      <div ref={sliderRef} className="keen-slider mt-8">
        {technologies.map((tech, index) => (
          <div key={index} className="keen-slider__slide">
            <Image
              src={tech.src}
              alt={tech.alt}
              width={45}
              height={45}
              className={tech.className}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
