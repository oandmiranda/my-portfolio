import { reverse } from "dns";
import AboutSection from "./ui/aboutSection";
import Card from "./ui/card";
import Header from "./ui/header";
import Title from "./ui/title";

const cardData = [
  {
    imageSrc: "/images/image-test.png",
    imageAlt: "miraflix-project",
    title: "Miraflix",
    description:
      "This is a description for card 1,jksdkfjskdljfskjfklsdjf ksdljfjsdfhjshdfk shdjfa;lkfdaksjdfn kahjsdfasdfasdfhsdf jksdfbkjaskdf;kjabsdfkj asldkfjsjdkfksjdhfshdbfjb sdhfb f sdfj sdfbsndf nsbdf.",
    technologies: ["React", "TypeScript", "CSS"],
    reverse: false
  },
  {
    imageSrc: "/images/image-test2.png",
    imageAlt: "project-two",
    title: "Coffee Shop",
    description:
      "This is a description for card 1,jksdkfjskdljfskjfklsdjf ksdljfjsdfhjshdfk shdjfa;lkfdaksjdfn kahjsdfasdfasdfhsdf jksdfbkjaskdf;kjabsdfkj asldkfjsjdkfksjdhfshdbfjb sdhfb f sdfj sdfbsndf nsbdf",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    reverse: true
  },
];

export default function Home() {
  return (
    <main className="py-4">
      <Header />
      <AboutSection />

      <section className="flex flex-col justify-center items-start py-50 px-4 sm:px-10 md:px-40 lg:px-70">
        <div className="flex items-center gap-2 mb-8">
          <span>02.</span>
          <Title size="text-xl">Some things Ive Built</Title>
        </div>
        {cardData.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </section>
    </main>
  );
}
