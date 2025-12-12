"use client";

import { useRef } from "react";
import Image from "next/image";
import { GraduationCap, Lightbulb, Languages } from "lucide-react";
import Animation from "./animation";
import { useLanguage } from "../context/languageContext";
import { translations } from "@/app/context/translations";
import Slider from "./slider";
import Card from "./card";
import ScrollTitle from "./scrollTitle";

export default function AboutSection() {
  const { t } = useLanguage();

  // cada seção precisa do seu próprio ref
  const sectionRef = useRef<HTMLDivElement>(null);

  const softSkillsList = Object.keys(translations.en.aboutMe.softSkills).map(
    (key) => t(key, "aboutMe", "softSkills")
  );

  return (
    <section ref={sectionRef} className="flex flex-col w-full scroll-mt-20" id="about">
      
      <Animation type="slideUp" className="sticky top-[44%]">
        <ScrollTitle sectionRef={sectionRef}>
          {t("title", "aboutMe")}
        </ScrollTitle>
      </Animation>

      <Animation type="fade">
        <div className="pt-[calc(78vh)] flex flex-col gap-base w-full mt-2 md:grid md:grid-cols-3">

          <Card
            mainLabel={t("content", "aboutMe")}
            className="md:col-span-2 h-full text-md leading-6 px-(--p-sm) md:px-(--p-base)"
          />

          <Animation type="slideUp">
            <Card className="h-60 sm:h-70 md:h-full border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] image-border-decoration md:col-span-1">
              <Image
                src={"/images/my-picture.jpeg"}
                alt="my picture"
                fill
                className="object-cover rounded-md"
              />
            </Card>
          </Animation>

          <Card
            enableGlow
            centerItems
            icon={<GraduationCap />}
            mainLabel={t("status", "aboutMe", "graduation")}
            subLabel={t("course", "aboutMe", "graduation")}
            textType="specialTitle"
            className="md:col-span-1"
          />

          <Card
            enableGlow
            centerItems
            icon={<Languages />}
            mainLabel={t("englishLevel", "aboutMe")}
            textType="specialTitle"
            className="md:col-span-1"
          />

          <Card
            enableGlow
            centerItems
            icon={<Lightbulb />}
            softSkills={softSkillsList}
            textType="specialTitle"
            className="md:col-span-1"
          />

          <Slider />
        </div>
      </Animation>
    </section>
  );
}