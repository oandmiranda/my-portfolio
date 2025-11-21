import AboutSection from "./ui/aboutSection";
import Footer from "./ui/footer";
import Header from "./ui/header";
import ProjectsSection from "./ui/projectSession";
import Slider from "./ui/slider";


export default function Home() {
  return (
    <main className="py-4">
      <Header />

      <section className="flex flex-col justify-center items-start px-4 sm:px-10 md:px-30 lg:px-55 xl:px-90">
        <AboutSection />
        <Slider />
        <ProjectsSection />
        <Footer />
      </section>
    </main>
  );
}
