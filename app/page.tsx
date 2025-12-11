import { LanguageProvider } from "./context/languageContext";
import AboutSection from "./ui/aboutSection";
import ExperienceSection from "./ui/experienceSection";
import Footer from "./ui/footer";
import Header from "./ui/header";
import ProjectsSection from "./ui/projectSection";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="py-1">
        <Header />

        <section className="flex flex-col justify-center gap-55 items-start px-4 sm:px-10 md:px-20 lg:px-35 xl:px-80">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <Footer />
        </section>
      </main>
    </LanguageProvider>
  );
}
