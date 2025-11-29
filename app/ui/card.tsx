import { CardProps } from "@/types/card";
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

  return (
    <section
      className={`flex flex-col justify-center gap-1 w-full bg-secondary rounded-md p-8 ${alignmentClass} ${className}`}
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
    </section>
  );
}
