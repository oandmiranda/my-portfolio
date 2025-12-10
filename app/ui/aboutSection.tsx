"use client";

import Image from "next/image";
import { GraduationCap, Lightbulb, Languages } from "lucide-react";
import Title from "./title";
import Animation from "./animation";
import { useLanguage } from "../context/languageContext";
import { translations } from "@/app/context/translations"
import Slider from "./slider";
import Card from "./card";

export default function AboutSection() {
  // chama a função de tradução
  const { t } = useLanguage();

const softSkillsList = Object.keys(
  translations.en.aboutMe.softSkills
).map((key) => t(key, "aboutMe", "softSkills"));

  return (
    <section className="flex flex-col w-full scroll-mt-20" id="about">
      <Animation type="fade">
          <Title>{t("title", "aboutMe")}</Title>

        {/* cards section */}
        <div className="flex flex-col gap-base w-full mt-2 md:grid md:grid-cols-3">
          <Card
            mainLabel={t("content", "aboutMe")}
            className="md:col-span-2 h-full text-md leading-6"
          />

          <Animation type="slideUp">
            <Card className="h-60 sm:h-70 md:h-full border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] image-border-decoration md:col-span-1">
              <Image
                src={"/images/my-picture.jpeg"}
                alt="my picture"
                layout="fill"
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
