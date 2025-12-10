import { TitleProps } from "@/types/title";

export default function Title({children, size = "text-2xl", className}: TitleProps) {
    return (
        <h1 className={`${size} font-semibold ${className}`}>{children}</h1>
    );
}