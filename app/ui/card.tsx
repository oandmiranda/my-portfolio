import { CardProps } from "@/types/card";
import { Check } from "lucide-react";
import { cloneElement, isValidElement } from "react";

export default function Card({
  icon,
  mainLabel,
  subLabel,
  softSkills,
  className,
  children,
  centerItems = false,
  textType,
  enableGlow = false,
}: CardProps) {
  const renderedIcon =
    icon && isValidElement(icon)
      ? cloneElement(icon, {
          className: `
            size-10 transition-all duration-500 
            ${
              enableGlow
                ? "group-hover:scale-124 group-hover:text-secondary"
                : ""
            }
          `,
        })
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

  const glowClasses = enableGlow
    ? `
      relative overflow-hidden group
      transition-all duration-500
      hover:text-tertiary
      hover:shadow-[rgb(var(--secondary-rgb)/0.9)]
    `
    : "";

  const labelHoverColor = `group-hover:tracking-wide group-hover:text-text`;

  return (
    <section
      className={`
        flex flex-col justify-center gap-1 h-60 w-full 
        bg-primary rounded-md p-8 shadow-softGlow
        ${alignmentClass} 
        ${glowClasses} 
        ${className}
      `}
    >
      {enableGlow && (
        <div
          className="
            absolute inset-0 
            opacity-0 group-hover:opacity-100 
            transition-all duration-500 
            bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_75%)]
          "
        />
      )}

      {/* Só renderiza esse bloco quando NÃO tiver softSkills */}
      {!softSkills && (
        <div className="flex items-center gap-2">
          {renderedIcon && <span>{renderedIcon}</span>}
          <span
            className={`${textClassName} transition-all duration-500 ${
              enableGlow ? labelHoverColor : ""
            }`}
          >
            {mainLabel}
          </span>
        </div>
      )}

      {subLabel && <span className="text-sm text-center">{subLabel}</span>}

      {softSkills && (
        <div className="flex md:flex-col items-center gap-6 md:gap-4">
          <div className="flex items-center gap-2">
            {renderedIcon && <span>{renderedIcon}</span>}

            <span
              className={`${textClassName} transition-all duration-500 ${
                enableGlow ? labelHoverColor : ""
              }`}
            >
              Soft Skills
            </span>
          </div>

          <ul className="flex flex-col items-start justify-start gap-2.5">
            {softSkills.map((skill, index) => (
              <li key={index} className="flex gap-2 items-center">
                <Check className="text-active" size={15}/>
                <span className="text-sm lg:text-md">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {children && <div>{children}</div>}
    </section>
  );
}
