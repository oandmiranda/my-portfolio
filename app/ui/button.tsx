"use client"

import { Download } from "lucide-react";
import HoverAnimationBox from "./hoverAnimation";
import Link from "next/link";
import { ButtonProps } from "@/types/button";

export default function Button({hasHoverAnimation = false, children}: ButtonProps) {

  const buttonContent = (
    <Link
      href={"/"}
      className="flex items-center gap-1 bg-surface rounded-sm py-2.5 px-2"
    >
      <span>
        <Download className="size-3.5" />
      </span>
      <span>{children}</span>
    </Link>
  );

  return (
    <>
      { hasHoverAnimation ? (
        <HoverAnimationBox>
          {buttonContent}
        </HoverAnimationBox>
      ) : 
        <div>
          {buttonContent}
        </div>
      }
    </>
  );
}
