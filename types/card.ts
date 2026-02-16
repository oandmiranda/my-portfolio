export type CardProps = {
    icon?: React.ReactElement;
    mainLabel?: string;
    subLabel?: string;
    details?: string[];
    className?: string;
    children?: React.ReactNode;
    centerItems?: boolean;
    textType?: "default" | "specialTitle";
    enableGlow?: boolean;
}