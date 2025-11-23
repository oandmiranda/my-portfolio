"use client";

import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@/types/navLink";
import { Download } from "lucide-react";
import Animation from "./animation";
import Button from "./button";
import HoverAnimationBox from "./hoverAnimation";

const navLink: NavLink[] = [
  { href: "/#about", name: "About" },
  { href: "/#experience", name: "Experience" },
  { href: "/#projects", name: "Projects" },
  { href: "/#contact", name: "Contact" },
];

export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-4 sm:px-5 md:px-8 lg-px-12">
      <Link href={"/"}>
        <HoverAnimationBox className="flex items-center gap-1.5 cursor-default">
          <Animation animation="secondary" trigger="mount">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={"/images/my-picture.jpeg"}
                alt="my-picture"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </Animation>

          <Animation animation="slideUp">
            <div className="hidden sm:flex flex-col">
              <span className="font-logo text-2xl whitespace-nowrap">
                Anderson Miranda
              </span>
              <span className="text-xs">FrontEnd Engineer</span>
            </div>
          </Animation>
        </HoverAnimationBox>
      </Link>

      <Animation animation="slideUp">
        <div className="flex text-text items-center gap-5 text-sm scale-[0.85] sm:scale-100 md:gap-8 md:text-md ">
          {navLink.map((link, index) => (
            <Link key={index} href={link.href}>
              <span>{link.name}</span>
            </Link>
          ))}
          <Button
            href={"https://www.google.com.br"}
            icon={<Download />}
            hasHoverAnimation
          >
            Resume
          </Button>
        </div>
      </Animation>
    </div>
  );
}
