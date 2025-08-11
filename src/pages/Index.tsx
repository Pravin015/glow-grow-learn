import Hero from "@/components/sections/Hero";
import Careers from "@/components/sections/Careers";
import CoursePath from "@/components/sections/CoursePath";
import Projects from "@/components/sections/Projects";
import SiteFooter from "@/components/sections/SiteFooter";

const Index = () => {
  return (
    <div>
      <Hero />
      <main>
        <Careers />
        <CoursePath />
        <Projects />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
