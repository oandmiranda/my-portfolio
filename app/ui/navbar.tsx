import Link from "next/link";
import Menu from "./menu";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-4 sm:px-5 md:px-8 lg-px-12">
        <div className="flex items-center gap-2">
            <button className="font-title-header text-2xl w-10 h-10 bg-surface rounded-full">M</button>
            <span className="font-logo text-3xl whitespace-nowrap">Anderson Miranda</span>
        </div>
        <div className="hidden gap-8 sm:text-sm md:flex text-text ">
            <Link href={"/"}><span>About</span></Link>
            <Link href={"/"}><span>Experience</span></Link>
            <Link href={"/"}><span>Expertise</span></Link>
            <Link href={"/"}><span>Projects</span></Link>
            <Link href={"/"}><span>Contact</span></Link>
        </div>
            <Menu />
    </div>
  );
}