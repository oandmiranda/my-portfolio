export type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  hasHoverAnimation?: boolean;
  href?: Url;
  bgTransparent?: boolean;
  shadowType?: "shadow-softGlow" | "shadow-project"
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
