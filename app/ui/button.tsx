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
  className,
  onClick
}: ButtonProps) {

  const renderedIcon =
    icon && isValidElement(icon)
      ? cloneElement(icon, { className: "size-3.5" })
      : null;

  const Component = href ? Link : "button";

  const buttonContent = (
    <Component
      href={href}
      onClick={onClick}
      className={`flex items-center gap-1 bg-secondary rounded-sm px-2.5 py-2 cursor-pointer ${className}`}
    >
      {renderedIcon && <span>{renderedIcon}</span>}
      <span>{children}</span>
    </Component>
  );

  return hasHoverAnimation ? (
    <HoverAnimationBox>{buttonContent}</HoverAnimationBox>
  ) : (
    <div>{buttonContent}</div>
  );
}