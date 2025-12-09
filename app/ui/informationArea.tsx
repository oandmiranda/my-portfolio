
type InformationAreaProps = {
    children: React.ReactNode;
    title: string;
}

export default function InformationArea({ title, children}: InformationAreaProps) {
    return (
        <section className="flex flex-col flex-1 items-start justify-center gap-4 bg-primary rounded-md h-50 p-4 shadow-softGlow lg:p-6">
            <h1 className="font-bold">{title}</h1>
            <div className="w-full flex flex-col gap-2">
                {children}
            </div>
        </section>
    )
}