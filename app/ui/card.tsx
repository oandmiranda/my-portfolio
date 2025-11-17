import Image from "next/image";
import Title from "./title";
import Link from "next/link";
import { Dot } from "lucide-react";
import FadeIn from "./fadeIn";


type CardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  technologies: string[];
};

export default function Card({
  imageSrc,
  imageAlt,
  title,
  description,
  technologies,
}: CardProps) {
  return (
    <section className="flex flex-col w-full mb-20 md:mb-30">

     <FadeIn>
       <Link href={"/"}>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="w-full flex flex-col items-start z-2 gap-5 md:w-[45%] lg:w-[50%]">
            <Title size="text-lg sm:text-xl">{title}</Title>
            <p className="bg-secondary p-7 rounded-sm text-sm md:-mr-20">
              {description}
            </p>

            <div className="flex justify-between items-start md:flex-col md:items-start gap-4 w-full">
              <div className="flex flex-wrap gap-1.5 text-xs">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center whitespace-nowrap -space-x-1"
                  >
                    <Dot width={20} />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
              <Image
                src={"/github.svg"}
                alt="github-icon"
                width={25}
                height={25}
                className="shrink-0"
              />
            </div>
          </div>

          <div className="w-full md:w-[55%] lg:w-[50%]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={2000}
              height={1000}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </Link>
     </FadeIn>

    </section>
  );
}
