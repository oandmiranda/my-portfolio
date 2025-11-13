"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const animation = { duration: 10000, easing: (t: number) => t };

export default function Slider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 11,
      spacing: 6,
    },
    created(s) {
      s.moveToIdx(4, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 4, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 4, true, animation);
    },
  });

  return (
    <>
      <div className="mt-25 flex">
        <span>
          {/* <ChevronRight width={15}/> */}
        </span>
        <h2 className="text-lg font-semibold">
            Here are a few technologies I’ve been working with recently:
        </h2>
      </div>

      <div ref={sliderRef} className="keen-slider mt-8">
        <div className="keen-slider__slide number-slide1">
          <Image src={"/git.svg"} alt="git-logo" width={40} height={40} />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image src={"/html.svg"} alt="html-logo" width={40} height={40} />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image src={"/css.svg"} alt="css-logo" width={40} height={40} />
        </div>
         <div className="keen-slider__slide number-slide4">
          <Image
            src={"/styled-components.svg"}
            alt="styled-components-logo"
            width={40}
            height={40}
          />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image
            src={"/javascript.svg"}
            alt="javascript-logo"
            width={40}
            height={40}
          />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image
            src={"/typescript.svg"}
            alt="typescript-logo"
            width={40}
            height={40}
          />
        </div>
        <div className="keen-slider__slide number-slide7">
          <Image src={"/react.svg"} alt="react-logo" width={40} height={40} />
        </div>
        <div className="keen-slider__slide number-slide8">
          <Image
            src={"/next.svg"}
            alt="next-logo"
            width={40}
            height={40}
            className="bg-white rounded-full p-0.5"
          />
        </div>
        <div className="keen-slider__slide number-slide9">
          <Image
            src={"/tailwind.svg"}
            alt="tailwind-logo"
            width={40}
            height={40}
          />
        </div>
        <div className="keen-slider__slide number-slide10">
          <Image src={"/node.svg"} alt="nodejs-logo" width={40} height={40} />
        </div>
        <div className="keen-slider__slide number-slide11">
          <Image
            src={"/postgresql.svg"}
            alt="postgresql-logo"
            width={40}
            height={40}
          />
        </div>
        <div className="keen-slider__slide number-slide12">
          <Image
            src={"/jest.svg"}
            alt="jest-logo"
            width={40}
            height={40}
          />
        </div>
      </div>
    </>
  );
}
