import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { courseMap } from "@/data/courses";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle, Bug, Cloud, Key, Terminal, Globe, Lock,
  Wrench, Link as LinkIcon, Server, ArrowUpRight,
  Smartphone, Apple, FolderOpen, Shield,
  Radio, Book, Search, Ban, KeyRound, Link2, BarChart3,
  FileText, GraduationCap, Laptop,
  Inbox, Trophy, Binoculars, Code, Building,
  BellRing, Database, BookOpen, Brain, MessageSquare, Settings, Ship, Boxes, Scroll
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  "alert-triangle": AlertTriangle,
  bug: Bug,
  cloud: Cloud,
  key: Key,
  terminal: Terminal,
  globe: Globe,
  lock: Lock,
  wrench: Wrench,
  link: LinkIcon,
  server: Server,
  "arrow-up-right": ArrowUpRight,
  smartphone: Smartphone,
  apple: Apple,
  "folder-open": FolderOpen,
  shield: Shield,
  radio: Radio,
  book: Book,
  search: Search,
  ban: Ban,
  "key-round": KeyRound,
  "link-2": Link2,
  "bar-chart-3": BarChart3,
  "file-text": FileText,
  "graduation-cap": GraduationCap,
  laptop: Laptop,
  inbox: Inbox,
  trophy: Trophy,
  binoculars: Binoculars,
  code: Code,
  building: Building,
  "bell-ring": BellRing,
  database: Database,
  "book-open": BookOpen,
  brain: Brain,
  "message-square": MessageSquare,
  settings: Settings,
  ship: Ship,
  boxes: Boxes,
  scroll: Scroll,
};

const ModuleIcon = ({ name }: { name: string }) => {
  const Ico = iconMap[name] || Shield;
  return <Ico className="h-5 w-5 text-primary" aria-hidden />;
};

const CoursePage = () => {
  const { slug } = useParams();
  const course = slug ? courseMap[slug] : undefined;

  if (!course) {
    return (
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="section-title">Course Not Found</h1>
        <p className="mt-2 text-muted-foreground">The course you are looking for does not exist.</p>
        <div className="mt-6">
          <Button asChild variant="accent">
            <Link to="/courses">Back to Courses</Link>
          </Button>
        </div>
      </main>
    );
  }

  const title = `${course.name} | EncrypticSecurity Pvt. Ltd`;
  const description = `${course.tagline} — ${course.overview}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.overview,
    provider: {
      "@type": "Organization",
      name: "EncrypticSecurity Pvt. Ltd",
      sameAs: "/"
    }
  };

  return (
    <main>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={typeof window !== "undefined" ? window.location.href : `/courses/${course.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="relative overflow-hidden">
        <div className="container mx-auto grid items-center gap-8 px-4 py-16 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm btn-glass">
              <Shield className="h-4 w-4" />
              <span>EncrypticSecurity Course</span>
            </div>
            <h1 className="section-title mt-4">{course.name}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{course.tagline}</p>
            <p className="mt-3 text-muted-foreground">{course.overview}</p>
            <div className="mt-6 flex gap-3">
              <Button asChild variant="accent" className="hover-scale">
                <a href="#enroll">Enroll Now</a>
              </Button>
              <Button asChild variant="hero" className="hover-scale">
                <Link to="/courses">All Courses</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="card-glass rounded-2xl p-6">
              <h2 className="mb-3 text-lg font-semibold">Key Outcomes</h2>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li>• Career roles: {course.careers.join(", ")}</li>
                <li>• Placement support with top CTC up to ₹36 LPA</li>
                <li>• Industry demand: High across domains</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 pb-16">
        <h2 className="mb-4 text-2xl font-bold">Modules</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {course.modules.map((m) => (
            <article key={m.title} className="card-glass flex items-center gap-3 rounded-xl p-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border">
                <ModuleIcon name={m.icon} />
              </div>
              <h3 className="font-medium">{m.title}</h3>
            </article>
          ))}
        </div>
        <div id="enroll" className="mt-8 text-center">
          <Button variant="accent" className="hover-scale">Enroll Now</Button>
        </div>
      </section>
    </main>
  );
};

export default CoursePage;
