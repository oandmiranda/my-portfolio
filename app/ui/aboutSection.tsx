import Image from "next/image";
import Title from "./title";
import FadeIn from "./fadeIn";

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-4">
      <FadeIn>
        <div className="flex items-center gap-2">
          <span>01.</span>
          <Title size="text-2xl">About Me</Title>
        </div>

        <div className="flex gap-8">
          <div className="w-full sm:w-[60%] md:w-[65%] border-base pt-4">
            <p>
              Hey, I’m Miranda — a passionate Front-End Developer with a strong
              focus on building modern, responsive, and user-friendly web
              interfaces. My journey in tech started with a curiosity about how
              things work behind the screen, and over time, it grew into a solid
              career where I get to combine creativity and logic every day. I
              have experience working with technologies like React, Next.js,
              TypeScript, and Tailwind CSS, developing projects that connect
              design and functionality seamlessly.
              <br />
              <br />
              I’m constantly learning and exploring new tools to write cleaner
              code, improve performance, and create engaging user experiences.
            </p>
          </div>

          <FadeIn animation="slideUp">
            <div className="hidden sm:block sm:w-80 sm:h-80 lg:w-90 lg:h-90 2xl:h-100 w-full rounded-sm image-border-decoration">
              <Image
                src={"/images/my-picture.jpeg"}
                alt="my picture"
                width={2000}
                height={1000}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    </section>
  );
}
