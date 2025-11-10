import NavBar from "./navbar";

export default function Header() {
    return (
        <div className="min-h-screen flex flex-col">
            <video
                className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
                // src="/videos/video_draft.mov"
                autoPlay
                loop
                muted
            />
            <NavBar />
            {/* make the content take remaining space so it can be vertically centered */}
            <div className="flex flex-1 flex-col justify-center items-center w-full gap-3">
                <h1 className="text-4xl font-title-header text-center sm:text-5xl md:text-6xl">{`I'M MIRANDA`}</h1>
                <p className="text-2xl text-center">Front-End Developer and tech enthusiastic - creating exceptional web and app experiences</p>
            </div>
        </div>
    )
}