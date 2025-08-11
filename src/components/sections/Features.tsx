import { Sparkles, Rocket, Palette, Layers, Shield } from "lucide-react";

const features = [
  {
    title: "Project‑based learning",
    text: "Build real interfaces and flows that reflect modern product work.",
    Icon: Rocket,
  },
  {
    title: "Design systems",
    text: "Learn tokens, variants, and accessibility the professional way.",
    Icon: Layers,
  },
  {
    title: "Visual craft",
    text: "Master layouts, typography, motion, and delightful interactions.",
    Icon: Palette,
  },
  {
    title: "Career focus",
    text: "Portfolio guidance, reviews, and interview prep to land the job.",
    Icon: Shield,
  },
];

const Features = () => {
  return (
    <section id="features" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm btn-glass"><Sparkles size={16}/> Features</span>
        <h2 className="section-title mt-4">Built for modern UI/UX education</h2>
        <p className="mt-3 text-muted-foreground">A focused toolkit that keeps you learning fast and building confidently.</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, text, Icon }) => (
          <div key={title} className="card-glass group rounded-xl p-6 transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/20">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-1 font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
