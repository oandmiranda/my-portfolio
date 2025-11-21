"use client"

import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@/types/navLink";
import Animation from "./animation";
import Button from "./button";
import HoverAnimationBox from "./hoverAnimation";

const navLink: NavLink[] = [
  { href: "/", name:"About" },
  { href: "/", name:"Projects" },
  { href: "/", name:"Experience" },
  { href: "/", name:"Contact" },
];

export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-4 sm:px-5 md:px-8 lg-px-12">
      <Animation animation="secondary" trigger="mount">
        <HoverAnimationBox className="flex items-center gap-3.5 cursor-pointer">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={"/images/my-picture.jpeg"}
            alt="my-picture"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="hidden sm:flex flex-col">
          <a className="font-logo text-2xl whitespace-nowrap cursor-pointer">
            Anderson Miranda
          </a>
          <span className="text-xs">FrontEnd Engineer</span>
        </div>
      </HoverAnimationBox>
      </Animation>

      <Animation animation="slideUp">
        <div className="flex text-text items-center text-xs gap-4 scale-[0.85] xs:scale-100 sm:gap-5 md:gap-8 sm:text-base ">
          { navLink.map((link, index) => (
              <Link key={index} href={link.href}>
                <span>{link.name}</span>
              </Link>
          ))}
          <Button hasHoverAnimation>Resume</Button>
      </div>
      </Animation>
     
    </div>
  );
}
