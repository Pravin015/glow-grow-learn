import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AboutUs from "@/components/sections/AboutUs";
import Careers from "@/components/sections/Careers";
import CoursePath from "@/components/sections/CoursePath";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import SiteFooter from "@/components/sections/SiteFooter";
import HomeCourses from "@/components/sections/HomeCourses";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>EncrypticSecurity Pvt. Ltd – Cybersecurity Courses & Training</title>
        <meta name="description" content="Build a secure tomorrow with EncrypticSecurity. Accredited training in cybersecurity with placement support and hands-on modules." />
        <link rel="canonical" href={typeof window !== "undefined" ? window.location.href : "/"} />
      </Helmet>
      <Hero />
      <main>
        <AboutUs />
        <HomeCourses />
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
