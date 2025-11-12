type TitleProps = {
    children: React.ReactNode;
    size: string;
    className?: string;
};

export default function Title({children, size, className}: TitleProps) {
    return (
        <h1 className={`${size} font-semibold ${className}`}>{children}</h1>
    );
}