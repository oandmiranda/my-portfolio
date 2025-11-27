"use client";

import Image from "next/image";
import Title from "./title";
import FadeIn from "./animation";
// 💡 1. Importe o hook
import { useLanguage } from "../context/languageContext";

export default function AboutSection() {
  // 💡 2. Recupere a função de tradução
  const { t } = useLanguage();

  return (
    <section className="flex flex-col w-full gap-4" id="about">
      <FadeIn>
        <div className="flex items-center gap-2">
          <span>01.</span>
          {/* 💡 3. Tradução do Título */}
          <Title size="text-2xl">{t("title", "aboutMe")}</Title>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-8 w-full">
          <div className="w-full md:w-[65%] border-base pt-4">
            {/* 💡 4. Tradução do Conteúdo */}
            {/* Nota: Como definimos uma única chave 'content' no objeto de tradução,
                todo o texto virá junto. Se você quiser quebrar em parágrafos visuais,
                o ideal seria criar 'paragraph1' e 'paragraph2' no translations.ts,
                ou adicionar '\n' no texto e usar CSS 'whitespace-pre-line'.
                
                Por enquanto, usando a estrutura atual:
            */}
            <p className="whitespace-pre-line">
              {t("content", "aboutMe")}
            </p>
          </div>

          <FadeIn animation="slideUp">
            <div className="block w-full sm:h-80 lg:w-90 lg:h-100 2xl:h-110 rounded-sm border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] image-border-decoration">
              <Image
                src={"/images/my-picture.jpeg"}
                alt="my picture"
                width={2000}
                height={1000}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    </section>
  );
}