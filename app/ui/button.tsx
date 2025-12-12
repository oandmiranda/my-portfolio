"use client";

import { isValidElement } from "react";
import HoverAnimationBox from "./hoverAnimation";
import Link from "next/link";
import { ButtonProps } from "@/types/button";

export default function Button({
  icon,
  hasHoverAnimation = false,
  children,
  href,
  bgTransparent,
  shadowType,
  className,
  onClick,
}: ButtonProps) {
  const renderedIcon = isValidElement(icon) ? (
    <span className="size-4 text-secondary">{icon}</span>
  ) : null;

  const isLink = Boolean(href);
  const cursorClass = isLink ? "cursor-pointer" : "cursor-default";

  const baseClasses = `buttonBaseClasses`;


  const buttonContent = isLink ? (
    <Link
      href={href as unknown as string}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${baseClasses} ${cursorClass} ${
        bgTransparent ? "bg-transparent" : "bg-secondary"
      } ${shadowType} ${className}`}
    >
      {renderedIcon && <span>{renderedIcon}</span>}
      <span>{children}</span>
    </Link>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${cursorClass} ${
        bgTransparent ? "bg-transparent" : "bg-secondary"
      } ${shadowType} ${className}`}
    >
      {renderedIcon && <span>{renderedIcon}</span>}
      <span>{children}</span>
    </button>
  );

  return hasHoverAnimation ? (
    <HoverAnimationBox>{buttonContent}</HoverAnimationBox>
  ) : (
    buttonContent
  );
}
