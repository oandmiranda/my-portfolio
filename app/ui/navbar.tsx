"use client";

import Link from "next/link";
import Image from "next/image";
import Animation from "./animation";
import HoverAnimationBox from "./hoverAnimation";
import { useLanguage } from "../context/languageContext";
import LanguageToggle from "./languageToggle";
import { useEffect, useState } from "react";
import BurgerMenu from "./burgerMenu";
import { navLink } from "../data/navLinks";
import DownloadButton from "./downloadButton";

export default function NavBar() {

  const [scroll, setScroll] = useState(false);
  const { t } = useLanguage();

  const changeColor = () => {
    if (window.scrollY >= 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  // O useEffect simples, igual ao do seu projeto anterior
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []); // Sem a necessidade de [changeColor] na dependência

  const navClasses = `
    flex fixed justify-between items-center transition-all duration-300
    px-4 sm:px-5 md:px-8 lg:px-12 py-4 w-full z-4 h-20
    ${
      // FIXAÇÃO E ESTILO CONDICIONAL (ÚNICA PARTE QUE MUDA)
      scroll && "backdrop-blur-md bg-white/20 dark:bg-black/20 shadow-md top-0"
    }
  `;

  return (
    // 1. Adicione 'relative' ao container pai para que o absolute funcione dentro dele
    // 2. Troquei 'justify-around' e 'gap-50' por 'justify-between' e padding padrão (px-4...)
    //    pois 'gap-50' (200px) costuma quebrar layouts em telas menores.
    <>
      <div className={navClasses}>
        <Link href={"/"}>
          <HoverAnimationBox className="flex items-center gap-1.5 cursor-default">
            <Animation type="secondary" trigger="mount">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={"/images/my-picture.jpeg"}
                  alt="my-picture"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </Animation>

            <Animation type="slideUp">
              <div className="hidden sm:flex flex-col">
                <span className="font-logo text-2xl whitespace-nowrap">
                  Anderson Miranda
                </span>
                <span className="text-xs">FrontEnd Engineer</span>
              </div>
            </Animation>
          </HoverAnimationBox>
        </Link>

        {/* 
        'absolute', 'left-1/2' e '-translate-x-1/2' para garantir 
         o centro matemático, independente dos vizinhos.
      */}
        <Animation className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="hidden lg:flex items-center gap-5 text-sm scale-[0.85] sm:scale-100 md:gap-8 md:text-sm">
            {navLink.map((link, index) => (
              <Link key={index} href={link.href}>
                <span className="hover:text-tertiary transition-all duration-400">
                  {t(link.key, "nav")}
                </span>
              </Link>
            ))}
            <DownloadButton />
          </div>
        </Animation>

        <Animation
          type="slideUp"
          className="flex items-center gap-4 mr-0 sm:mr-20 lg:mr-0"
        >
          <LanguageToggle />
        </Animation>
        <BurgerMenu />
      </div>
    </>
  );
}
