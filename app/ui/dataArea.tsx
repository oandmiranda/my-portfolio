import { DataAreaProps } from "@/types/dataArea";

export default function DataArea({ title, children, className}: DataAreaProps) {
    return (
        <section className={`flex flex-col flex-1 items-start justify-center gap-4 bg-primary rounded-md h-50 p-4 shadow-softGlow lg:p-6 ${className}`}>
            <h1 className="font-bold">{title}</h1>
            <div className="w-full flex flex-col gap-2">
                {children}
            </div>
        </section>
    )
}