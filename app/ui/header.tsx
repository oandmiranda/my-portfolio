import NavBar from "./navbar";
import { Circle } from 'lucide-react';

export default function Header() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <video
                className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
                src="/videos/video_draft.mov"
                autoPlay
                loop
                muted
            /> */}
      <NavBar />
      <div className="flex justify-center items-center w-full h-screen px-4 sm:px-10 md:px-30 lg:px-55 xl:px-90">
        <div className="flex flex-col justify-center items-start text-start w-full max-w-4xl gap-4">
            <p>Hi,</p>
            <h1 className="text-4xl font-title-header sm:text-5xl md:text-6xl">{`I'M MIRANDA.`}</h1>
            <h2 className="text-3xl sm:text-4xl">I build things for the web</h2>
            <p className="text-1xl">
                Front-End Developer and tech enthusiastic – creating exceptional web
                and app experiences
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span><Circle className="size-3 text-green-500"/></span>
              <span>Available for work</span>
            </div>
        </div>
      </div>
    </div>
  );
}
