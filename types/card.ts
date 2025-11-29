export type CardProps = {
    icon?: React.ReactNode;
    mainLabel?: string;
    subLabel?: string;
    softSkills?: string[];
    className?: string;
    children?: React.ReactNode;
    centerItems?: boolean;
    textType?: "default" | "specialTitle";
    enableGlow?: boolean;
}