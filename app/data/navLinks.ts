import { NavLink } from "@/types/navLink";
import { FolderOpenDot } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';
import { UserStar } from 'lucide-react';
import { Mail } from 'lucide-react';

export const navLink: NavLink[] = [
  { icon: UserStar, href: "/#about", key: "about" },
  { icon: BriefcaseBusiness, href: "/#experience", key: "experience" },
  { icon: FolderOpenDot, href: "/#projects", key: "projects" },
  { icon: Mail, href: "/#contacts", key: "contact" },
];