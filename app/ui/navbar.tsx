import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-4 sm:px-5 md:px-8 lg-px-12">
      <div className="flex items-center gap-4">
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
          <span className="text-sm">FrontEnd Engineer</span>
        </div>
      </div>

      <div className="hidden gap-8 sm:text-sm md:flex text-text ">
        <Link href={"/"}>
          <span>About</span>
        </Link>
        <Link href={"/"}>
          <span>Experience</span>
        </Link>
        <Link href={"/"}>
          <span>Expertise</span>
        </Link>
        <Link href={"/"}>
          <span>Projects</span>
        </Link>
        <Link href={"/"}>
          <span>Contact</span>
        </Link>
      </div>
      <Menu />
    </div>
  );
}
