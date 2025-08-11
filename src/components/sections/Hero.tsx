import { Button } from "@/components/ui/button";
import { GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-uiux.png";

const Hero = () => {
  return (
    <header className="relative overflow-hidden pt-8 md:pt-12 lg:pt-16 cyber-grid">
      <nav className="container sticky top-4 z-50 mx-auto flex items-center justify-between rounded-2xl border bg-card/80 px-4 py-3 backdrop-blur-md">
          <a href="#" className="flex items-center gap-2" aria-label="Home">
            <img
              src="/lovable-uploads/c0eb2a53-c84d-4cb0-afbd-2074219ed2ae.png"
              alt="Brand logo"
              className="h-8 w-auto"
              width={128}
              height={32}
              loading="eager"
            />
          </a>
        <div className="hidden items-center gap-2 sm:flex">
          <Button asChild variant="ghost" className="btn-glass"><a href="/courses">Courses</a></Button>
          <Button asChild variant="ghost" className="btn-glass"><a href="#placement">Placement</a></Button>
          <Button asChild variant="accent" className="hover-scale"><a href="/courses">Explore</a></Button>
        </div>
      </nav>

      {/* Floating playful shapes */}
      <div className="pointer-events-none absolute -left-10 top-10 shape-blob shape-blue float-slow" />
      <div className="pointer-events-none absolute -right-10 top-24 shape-blob shape-mint float-slower" />
      <div className="pointer-events-none absolute left-1/2 top-[65%] hidden -translate-x-1/2 md:block shape-blob shape-mint float-slow" />

      <div className="container mx-auto grid items-center gap-10 px-4 pb-10 pt-10 md:grid-cols-2 md:pb-16 lg:gap-12 lg:py-20">
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm btn-glass">
            <Sparkles className="opacity-80" />
            Friendly, modern paths to UI/UX mastery
          </div>
          <h1 className="section-title">
            Build a Secure Tomorrow with Encryptic Security
          </h1>
          <p className="text-lg text-muted-foreground">
            Join EncrypticSecurity, where expertise meets protection. Learn from industry experts and secure your future in cybersecurity.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" className="hover-scale">
              <a href="/courses">Explore Courses <ArrowRight /></a>
            </Button>
            <Button asChild variant="hero" className="hover-scale">
              <a href="#placement">Get Placement Assistance</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src={hero}
            alt="Friendly UI/UX learning hero illustration with floating UI cards"
            className="mx-auto w-full max-w-2xl rounded-2xl border object-cover shadow-2xl"
            loading="eager"
            width={1024}
            height={640}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
