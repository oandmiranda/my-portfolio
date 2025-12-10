"use client";

import { cloneElement, isValidElement } from "react";
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
  const renderedIcon =
    icon && isValidElement(icon)
      ? cloneElement(icon, { className: "size-4" })
      : null;

  const isLink = Boolean(href);
  const Component = isLink ? Link : "button";

  const baseClasses = `buttonBaseClasses`;

  const cursorClass = isLink ? "cursor-pointer" : "cursor-default";

  const buttonContent = (
    <Component
      target="_blank"
      rel="noopener noreferrer"
      {...(isLink ? { href } : { type: "button" })}
      onClick={onClick}
      className={`${baseClasses} ${cursorClass} ${
        bgTransparent ? "bg-transparent" : "bg-secondary"
      } ${shadowType} ${className}`}
    >
      {renderedIcon && <span>{renderedIcon}</span>}
      <span>{children}</span>
    </Component>
  );

  return hasHoverAnimation ? (
    <HoverAnimationBox>{buttonContent}</HoverAnimationBox>
  ) : (
    buttonContent
  );
}
