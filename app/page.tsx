import AboutSection from "./ui/aboutSection";
import Card from "./ui/card";
import Footer from "./ui/footer";
import Header from "./ui/header";
import Slider from "./ui/slider";
import Title from "./ui/title";

const cardData = [
  {
    imageSrc: "/images/image-test.png",
    imageAlt: "miraflix-project",
    title: "Miraflix",
    description:
      "This is a description for card 1,jksdkfjskdljfskjfklsdjf ksdljff;kjabsdfkj a description for card 1,jksdkfjskdljfskjfklsdjf ksdljfjsdfhjshdfk shd f sdfj sdfbsndf nsbdf description for card 1,jksdkfjskdljfskjfklsdjf ksdljfjsdfhjshdfk shd f sdfj sdfbsndf nsbdfsldkfjsjdkfksjdh.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Styled-Components",
      "API REST",
    ],
    reverse: false,
  },
  {
    imageSrc: "/images/image-test2.png",
    imageAlt: "project-two",
    title: "Coffee Shop",
    description:
      "This is a description for card 1,jksdkfjskdljfskjfklsdjf ksdljfjsdfhjshdfk shd f sdfj sdfbsndf nsbdf  description for card 1,jksdkfjskdljfskjfklsdjf ksdljfjsdfhjshdfk shd f sdfj sdfbsndf nsbdf description for card 1,jksdkfjskdljfskjfklsdjf ksdljfjsdfhjshdfk shd f sdfj sdfbsndf nsbdf",
    technologies: ["React", "TypeScript", "Styled-Components", "Redux"],
    reverse: true,
  },
];

export default function Home() {
  return (
    <main className="py-4">
      <Header />

      <section className="flex flex-col justify-center items-start px-4 sm:px-10 md:px-30 lg:px-55 xl:px-90">
        <AboutSection />
        <Slider />
        <div className="flex gap-2 mb-13 mt-40">
          <span>02.</span>
          <Title size="text-2xl">Some things Ive Built</Title>
        </div>
          {cardData.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        <Footer />
      </section>
    </main>
  );
}
