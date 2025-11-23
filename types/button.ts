export type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  hasHoverAnimation?: boolean;
  href?: Url;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
