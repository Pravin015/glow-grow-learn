import { Button } from "@/components/ui/button";
import { GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-uiux.png";

const Hero = () => {
  return (
    <header className="relative overflow-hidden pt-8 md:pt-12 lg:pt-16">
      <nav className="container mx-auto flex items-center justify-between rounded-2xl border bg-card/80 px-4 py-3 backdrop-blur-md">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(var(--primary-glow))]" aria-hidden />
          <span className="font-extrabold tracking-tight">BrightUX</span>
        </a>
        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="ghost" className="btn-glass">Courses</Button>
          <Button variant="ghost" className="btn-glass">Careers</Button>
          <Button variant="ghost" className="btn-glass">Projects</Button>
          <Button variant="accent" className="hover-scale">Join Now</Button>
        </div>
      </nav>

      {/* Floating playful shapes */}
      <div className="pointer-events-none absolute -left-10 top-10 shape-blob shape-blue float-slow" />
      <div className="pointer-events-none absolute -right-10 top-24 shape-blob shape-mint float-slower" />
      <div className="pointer-events-none absolute left-1/2 top-[65%] hidden -translate-x-1/2 md:block shape-blob shape-yellow float-slow" />

      <div className="container mx-auto grid items-center gap-10 px-4 pb-10 pt-10 md:grid-cols-2 md:pb-16 lg:gap-12 lg:py-20">
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm btn-glass">
            <Sparkles className="opacity-80" />
            Friendly, modern paths to UI/UX mastery
          </div>
          <h1 className="section-title">
            Design smarter. Learn UI/UX with real projects.
          </h1>
          <p className="text-lg text-muted-foreground">
            A cheerful learning platform with career-focused tracks, bite-sized lessons, and hands-on projects that make you job ready.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" className="hover-scale">
              <GraduationCap /> Start Learning
            </Button>
            <Button variant="accent" className="hover-scale">
              Explore Courses <ArrowRight />
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
