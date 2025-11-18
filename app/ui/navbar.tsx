import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";
import { NavLink } from "@/types/navLink";
import FadeIn from "./fadeIn";
import Button from "./button";

const navLink: NavLink[] = [
  { href: "/", name:"About" },
  { href: "/", name:"Projects" },
  { href: "/", name:"Experience" },
  { href: "/", name:"Contact" },
];

export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-4 sm:px-5 md:px-8 lg-px-12">
      <FadeIn animation="secondary" trigger="mount">
        <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={"/images/my-picture.jpeg"}
            alt="my-picture"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-logo text-2xl whitespace-nowrap">
            Anderson Miranda
          </span>
          <span className="text-xs">FrontEnd Engineer</span>
        </div>
      </div>
      </FadeIn>

      <FadeIn animation="slideUp">
           <div className="hidden items-center gap-8 sm:text-sm md:flex text-text ">
        { navLink.map((link, index) => (
            <Link key={index} href={link.href}>
              <span>{link.name}</span>
            </Link>
        ))}
        {/* button */}
        <Button>Resume</Button>
      </div>
      </FadeIn>
     
      <Menu />
    </div>
  );
}
