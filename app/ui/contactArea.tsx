import Link from "next/link";
import { cloneElement, isValidElement } from "react";

type ContactAreaProps = {
    icon: React.ReactNode;
    href?: string;
    children: React.ReactNode;
}

export default function ContactArea({icon, href = "", children}: ContactAreaProps) {
    const renderedIcon =
            icon && isValidElement(icon)
              ? cloneElement(icon, { className: "size-4.5" })
              : null;

    return (
        <Link href={href} className="flex items-center gap-2 border border-secondary p-2.5 rounded-md" target="_blank" rel="noopener noreferrer">
            {renderedIcon && <span >{renderedIcon}</span>}
            {children}
        </Link>
    )
}