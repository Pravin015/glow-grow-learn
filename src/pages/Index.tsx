import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Careers from "@/components/sections/Careers";
import CoursePath from "@/components/sections/CoursePath";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import SiteFooter from "@/components/sections/SiteFooter";

const Index = () => {
  return (
    <div>
      <Hero />
      <main>
        <Features />
        <Careers />
        <CoursePath />
        <Projects />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
