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
      <Title>{t("title", "experience")}</Title>
      <section
        className="mt-2 grid grid-cols-[20%_80%] w-full gap-5 bg-primary p-8 rounded-lg justify-center items-start scroll-mt-50 shadow-softGlow"
        id="experience"
      >
        <div className="flex flex-col items-start gap-4 text-sm pt-1">
          <span className="italic">{t("jobStatus", "experience")}</span>

          <Link
            href={
              "https://linktr.ee/aspromocoes?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnlCfIZrMnco_lYgrcS3Zf_f2r-Cp5nXvZ9JuZgi3GpOMweqQG33B_gxG0ILw_aem_0sTSZb6LuucqsU4JsOyZIQ"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2 bg-container p-2 rounded-sm shadow-softGlow hover:shadow-project transition-all duration-400"
          >
            <div className="flex items-center gap-sm text-tertiary">
              <span className="font-bold">AS Promoções</span>
              <span>
                <ExternalLink size={12} />
              </span>
            </div>

            <span className="text-xs">{t("slogan", "experience")}</span>
          </Link>
        </div>

        <div className="flex flex-col items-start gap-base">
          <Title size="text-lg" className="font-bold text-tertiary">
            {t("job", "experience")}
          </Title>
          <p className="text-md">{t("content", "experience")}</p>

          <div className="flex gap-base text-active">
            {technologiesList.map((tech, index) => (
              <Button key={index} shadowType="shadow-softGlow" className="cursor-alias text-sm availableButtonStyle">
                {tech}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </Animation>
  );
}
