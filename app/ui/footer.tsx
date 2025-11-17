import Link from "next/link";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';



export default function Footer() {
    return (
        <section className="flex items-center justify-center gap-6">
            <Link href={"/"} className="p-2.5 bg-surface rounded-full"><Github className="size-8"/></Link>
            <Link href={"/"} className="p-2.5 bg-surface rounded-full"><Linkedin className="size-8"/></Link>
            <Link href={"/"} className="p-2.5 bg-surface rounded-full"><Mail className="size-8"/></Link>
        </section>
    )
}