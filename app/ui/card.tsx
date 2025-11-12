import Image from "next/image";
import Title from "./title";

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
    <div className="flex flex-col w-full mb-85 sm:mb-75 md:mb-55 lg:mb-50">

      <div className="relative flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-90 lg:w-90 xl:w-130">
          <Image src={imageSrc} alt={imageAlt} width={2000} height={1000} className="w-full h-full object-cover rounded-md"/>
        </div>

        <div className="absolute items-start top-[103%] md:top-auto md:left-85 flex flex-col md:items-end gap-4">
          <Title size="text-lg sm:text-2xl lg:text-3xl">{title}</Title>
          <p className="bg-secondary p-7 rounded-sm">{description}</p>
          <div className="flex gap-4">
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
