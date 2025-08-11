import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  GraduationCap,
  ArrowRight,
  Phone,
  Mail,
  Search as SearchIcon,
  Globe,
  IndianRupee,
  ShoppingCart,
  LogIn,
  UserPlus,
  ChevronDown,
} from "lucide-react";

const Hero = () => {
  return (
    <header className="relative overflow-hidden cyber-grid">
      {/* Sticky Top Utility Bar */}
      <div className="sticky top-0 z-50 w-full bg-primary/90 text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="hidden items-center gap-4 text-sm md:flex">
            <span className="inline-flex items-center gap-1 opacity-90">
              <Phone size={16} /> +91 00000 00000
            </span>
            <span className="inline-flex items-center gap-1 opacity-90">
              <Mail size={16} /> info@encrypticsecurity.com
            </span>
          </div>
          <div className="mx-4 hidden w-full max-w-xl md:block">
            <div className="relative">
              <SearchIcon
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-70"
                size={16}
              />
              <Input
                type="search"
                placeholder="Search courses"
                className="h-9 pl-9 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/70"
                aria-label="Search courses"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <button className="inline-flex items-center gap-1 opacity-90 transition hover:opacity-100">
              <Globe size={16} /> EN
            </button>
            <button className="inline-flex items-center gap-1 opacity-90 transition hover:opacity-100">
              <IndianRupee size={16} /> INR
            </button>
            <button aria-label="Cart" className="opacity-90 transition hover:opacity-100">
              <ShoppingCart size={18} />
            </button>
            <Button variant="ghost" size="sm" asChild className="btn-glass">
              <a href="/login" className="inline-flex items-center gap-1">
                <LogIn size={16} /> Login
              </a>
            </Button>
            <Button variant="accent" size="sm" asChild className="hover-scale">
              <a href="/register" className="inline-flex items-center gap-1">
                <UserPlus size={16} /> Register
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating rounded Navbar */}
      <nav className="container sticky top-14 z-40 mx-auto flex items-center justify-between rounded-2xl border bg-card/90 px-4 py-3 backdrop-blur-md shadow-lg">
        <a href="#" className="flex items-center gap-2" aria-label="Home">
          <img
            src="/lovable-uploads/c0eb2a53-c84d-4cb0-afbd-2074219ed2ae.png"
            alt="EncrypticSecurity logo"
            className="h-8 w-auto"
            width={128}
            height={32}
            loading="eager"
          />
        </a>
        <div className="hidden items-center gap-1 md:flex">
          <Button variant="ghost" className="btn-glass">
            <span className="inline-flex items-center gap-1">
              Categories <ChevronDown size={16} />
            </span>
          </Button>
          <a href="/" className="px-3 py-2 rounded-lg transition-colors hover:bg-muted">
            Home
          </a>
          <a href="/courses" className="px-3 py-2 rounded-lg transition-colors hover:bg-muted">
            Courses
          </a>
          <a href="#" className="px-3 py-2 rounded-lg transition-colors hover:bg-muted">
            Instructors
          </a>
          <a href="#" className="px-3 py-2 rounded-lg transition-colors hover:bg-muted">
            Store
          </a>
          <a href="#" className="px-3 py-2 rounded-lg transition-colors hover:bg-muted">
            Forums
          </a>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Button asChild variant="accent" className="hover-scale">
            <a href="/courses">Start Learning</a>
          </Button>
        </div>
      </nav>

      {/* Floating playful shapes */}
      <div className="pointer-events-none absolute -left-10 top-10 shape-blob shape-blue float-slow" />
      <div className="pointer-events-none absolute -right-10 top-24 shape-blob shape-mint float-slower" />
      <div className="pointer-events-none absolute left-1/2 top-[65%] hidden -translate-x-1/2 md:block shape-blob shape-mint float-slow" />

      {/* Hero Content - full width */}
      <div className="container mx-auto px-4 pb-14 pt-16 md:pb-20 lg:py-28">
        <div className="relative z-10 mx-auto max-w-3xl text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm btn-glass">
            <GraduationCap className="opacity-80" />
            <span className="font-medium">Enrollment Now Open</span>
            <ArrowRight size={16} className="opacity-80" />
          </div>
          <h1 className="section-title">
            Build a Secure Tomorrow with Encryptic Security
          </h1>
          <p className="text-lg text-muted-foreground">
            Join EncrypticSecurity, where expertise meets protection. Learn from industry experts and secure your future in cybersecurity.
          </p>
          <div className="flex items-center justify-center gap-3 flex-col sm:flex-row">
            <Button asChild variant="accent" className="hover-scale">
              <a href="/courses">Explore Courses <ArrowRight /></a>
            </Button>
            <Button asChild variant="hero" className="hover-scale">
              <a href="#placement">Get Placement Assistance</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
