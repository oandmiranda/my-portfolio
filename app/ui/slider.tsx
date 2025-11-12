"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const animation = { duration: 10000, easing: (t: number) => t };

export default function Slider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 8,
      spacing: 12,
    },
    created(s) {
      s.moveToIdx(8, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 8, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 8, true, animation);
    },
  });

  return (
    <>
      <div className="mt-25 flex">
        <span>
          <ChevronRight width={15}/>
        </span>
        <h2 className="text-lg font-semibold">
          Here are a few technologies I’ve been working with recently:
        </h2>
      </div>

      <div ref={sliderRef} className="keen-slider mt-8">
        <div className="keen-slider__slide number-slide3">
          <Image src={"/git.svg"} alt="git-logo" width={40} height={40} />
        </div>
        <div className="keen-slider__slide number-slide1">
          <Image src={"/html.svg"} alt="html-logo" width={40} height={40} />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image src={"/css.svg"} alt="css-logo" width={40} height={40} />
        </div>
         <div className="keen-slider__slide number-slide3">
          <Image
            src={"/styled-components.svg"}
            alt="styled-components-logo"
            width={40}
            height={40}
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            src={"/javascript.svg"}
            alt="javascript-logo"
            width={40}
            height={40}
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            src={"/typescript.svg"}
            alt="typescript-logo"
            width={40}
            height={40}
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={"/react.svg"} alt="react-logo" width={40} height={40} />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            src={"/next.svg"}
            alt="next-logo"
            width={40}
            height={40}
            className="bg-white rounded-sm p-0.5"
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            src={"/tailwind.svg"}
            alt="tailwind-logo"
            width={40}
            height={40}
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={"/nodejs.svg"} alt="nodejs-logo" width={40} height={40} />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            src={"/postgresql.svg"}
            alt="postgresql-logo"
            width={40}
            height={40}
          />
        </div>
      </div>
    </>
  );
}
