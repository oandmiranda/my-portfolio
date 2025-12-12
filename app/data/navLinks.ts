import { NavLink } from "@/types/navLink";
import { UserStar, Mail, BriefcaseBusiness, FolderOpenDot} from 'lucide-react';

export const navLink: NavLink[] = [
  { icon: FolderOpenDot, href: "/#projects", key: "projects" },
  { icon: BriefcaseBusiness, href: "/#experience", key: "experience" },
  { icon: UserStar, href: "/#about", key: "about" },
  { icon: Mail, href: "/#contacts", key: "contact" },
];