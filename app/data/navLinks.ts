import { NavLink } from "@/types/navLink";
import { UserStar, Mail, BriefcaseBusiness, FolderOpenDot} from 'lucide-react';

export const navLink: NavLink[] = [
  { icon: UserStar, href: "/#about", key: "about" },
  { icon: BriefcaseBusiness, href: "/#experience", key: "experience" },
  { icon: FolderOpenDot, href: "/#projects", key: "projects" },
  { icon: Mail, href: "/#contacts", key: "contact" },
];