import { CardProps } from "@/types/card";
import { cloneElement, isValidElement } from "react";
import { motion } from "framer-motion";

export default function Card({
  icon,
  mainLabel,
  subLabel,
  softSkills,
  className,
  children,
  centerItems = false,
  textType,
}: CardProps) {
  const renderedIcon =
    icon && isValidElement(icon)
      ? cloneElement(icon, { className: "size-10" })
      : null;

  const getTextClassName = () => {
    switch (textType) {
      case "specialTitle":
        return "text-2xl font-bold";
      case "default":
      default:
        return "whitespace-pre-line";
    }
  };

  const textClassName = getTextClassName();

  const alignmentClass = centerItems ? "items-center" : "items-start";

  // Classe para garantir que o Card seja o ponto de referência (position: relative)
  const relativeClass = "relative overflow-hidden";

  // 🔑 Definições de cores e opacidades (ajuste conforme seu tema)
  const initialGlow = { opacity: 0.1, scale: 0.9 };
  const hoverGlow = { opacity: 0.5, scale: 1.2 };

  return (
    <motion.section
      initial="initial"
      whileHover="hover"
      // Combina a classe de posicionamento e as classes existentes
      className={`flex flex-col justify-center gap-1 w-full bg-secondary rounded-md p-8 ${alignmentClass} ${className} ${relativeClass}`}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2">
        {renderedIcon && <span>{renderedIcon}</span>}
        <span className={textClassName}>{mainLabel}</span>
      </div>

      {subLabel && <span className="text-sm text-center">{subLabel}</span>}

      {softSkills && (
        <>
          <span className={textClassName}>Soft Skills</span>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}

      {children && <div>{children}</div>}
    </motion.section>
  );
}
