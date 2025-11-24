"use client";

import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@/types/navLink"; // Verifique se o caminho está correto
import { Download } from "lucide-react";
import Animation from "./animation";
import Button from "./button";
import HoverAnimationBox from "./hoverAnimation";
import { useLanguage } from "../context/languageContext";
import LanguageToggle from "./languageToggle";

const navLink: NavLink[] = [
  { href: "/#about", key: "about" },
  { href: "/#experience", key: "experience" },
  { href: "/#projects", key: "projects" },
  { href: "/#contact", key: "contact" },
];

export default function NavBar() {
  const { t } = useLanguage();

  return (
    // 1. Adicione 'relative' ao container pai para que o absolute funcione dentro dele
    // 2. Troquei 'justify-around' e 'gap-50' por 'justify-between' e padding padrão (px-4...)
    //    pois 'gap-50' (200px) costuma quebrar layouts em telas menores.
    <div className="relative flex justify-between items-center px-4 sm:px-5 md:px-8 lg:px-12 py-4">
      
      {/* LADO ESQUERDO: Logo */}
      <Link href={"/"}>
        <HoverAnimationBox className="flex items-center gap-1.5 cursor-default">
          <Animation animation="secondary" trigger="mount">
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

          <Animation animation="slideUp">
            <div className="hidden sm:flex flex-col">
              <span className="font-logo text-2xl whitespace-nowrap">
                Anderson Miranda
              </span>
              <span className="text-xs">FrontEnd Engineer</span>
            </div>
          </Animation>
        </HoverAnimationBox>
      </Link>

      {/* CENTRO: Toggle 
         Usamos 'absolute', 'left-1/2' e '-translate-x-1/2' para garantir 
         o centro matemático, independente dos vizinhos.
      */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LanguageToggle />
      </div>

      {/* LADO DIREITO: Links */}
      <Animation animation="slideUp">
        <div className="flex text-text items-center gap-5 text-sm scale-[0.85] sm:scale-100 md:gap-8 md:text-md">
          {navLink.map((link, index) => (
            <Link key={index} href={link.href}>
              <span>{t(link.key, 'nav')}</span>
            </Link>
          ))}
          <Button
            href={"https://www.google.com.br"}
            icon={<Download />}
            hasHoverAnimation
          >
            {t("resume", 'nav')}
          </Button>
        </div>
      </Animation>
    </div>
  );
}