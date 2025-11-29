"use client";

import Image from "next/image";
import { GraduationCap, Lightbulb, Languages } from "lucide-react";
import Title from "./title";
import Animation from "./animation";
import { useLanguage } from "../context/languageContext";
import Slider from "./slider";
import Card from "./card";

export default function AboutSection() {
  // chama a função de tradução
  const { t } = useLanguage();

  const softSkillsList = [
    t("comunication", "aboutMe", "softSkills"),
    t("discipline", "aboutMe", "softSkills"),
    t("skill3", "aboutMe", "softSkills"),
    t("skill4", "aboutMe", "softSkills"),
  ];

  return (
    <section className="flex flex-col w-full" id="about">
      <Animation type="fade">
        <div className="flex items-center gap-2 mb-4">
          <span>01.</span>
          <Title size="text-2xl">{t("title", "aboutMe")}</Title>
        </div>

        {/* cards section */}
        <div className="flex flex-col gap-2.5 w-full md:grid md:grid-cols-3">
          <Card
            mainLabel={t("content", "aboutMe")}
            className="md:col-span-2 h-full"
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
            centerItems
            icon={<GraduationCap />}
            mainLabel={t("status", "aboutMe", "graduation")}
            textType="specialTitle"
            subLabel={t("course", "aboutMe", "graduation")}
            className="md:col-span-1"
          />

          <Card
            centerItems
            icon={<Languages />}
            mainLabel={t("englishLevel", "aboutMe")}
            textType="specialTitle"
            className="md:col-span-1"
          />

          <Card
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
