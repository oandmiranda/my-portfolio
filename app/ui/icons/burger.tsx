import { Logs } from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const MenuBurgerIcon = ({ size = 24, className, ...props }: IconProps) => (
  <Logs size={size} className={` ${className}`} {...props} />
);