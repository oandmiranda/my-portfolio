"use client";

import Link from "next/link";
import Animation from "./animation";
import { ExternalLink } from "lucide-react";
import Button from "./button";
import Title from "./title";
import { useLanguage } from "../context/languageContext";
import { translations } from "../context/translations";

export default function ExperienceSection() {
  const { t } = useLanguage();
  const technologiesList = Object.keys(
    translations.en.experience.jobTechnologies
  ).map((key) => t(key, "experience", "jobTechnologies"));

  return (
    <Animation>
      <Title className="font-title text-sm-title md:text-md-title">{t("title", "experience")}</Title>
      <section
        className="mt-2 grid grid-cols-1 md:grid-cols-[20%_80%] w-full gap-5 bg-primary p-(--p-sm) md:p-(--p-base) rounded-lg justify-center items-start scroll-mt-50 shadow-softGlow"
        id="experience"
      >
        <div className="flex flex-col items-start gap-base text-sm pt-1">
          <span className="italic">{t("jobStatus", "experience")}</span>

          <Link
            href={
              "https://www.linkedin.com/company/as-promo%C3%A7%C3%B5es-comerciais/"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 bg-container p-2 rounded-sm shadow-softGlow hover:shadow-project transition-all duration-700"
          >
            <div className="flex items-center gap-sm text-secondary">
              <span className="font-title font-bold">AS Promoções</span>
              <span>
                <ExternalLink size={12} />
              </span>
            </div>

            <span className="text-xs">{t("slogan", "experience")}</span>
          </Link>
        </div>

        <div className="flex flex-col items-start gap-base mt-3 md:mt-0">
          <Title size="font-title text-md md:text-lg" className="font-bold text-secondary">
            {t("job", "experience")}
          </Title>
          <p className="text-md whitespace-pre-line">{t("content", "experience")}</p>

          <div className="flex flex-wrap gap-base text-active">
            {technologiesList.map((tech, index) => (
              <Button key={index} shadowType="shadow-softGlow" className="cursor-alias text-sm text-text-darkColor bg-secondary">
                {tech}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </Animation>
  );
}
