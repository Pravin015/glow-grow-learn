import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, Compass, Trophy } from "lucide-react";

const steps = [
  {
    title: "Foundations",
    icon: Compass,
    text: "Learn core UI/UX principles, patterns, and accessibility.",
  },
  {
    title: "Projects",
    icon: ListChecks,
    text: "Apply skills with briefs that mirror real client work.",
  },
  {
    title: "Portfolio & Prep",
    icon: Trophy,
    text: "Craft a standout portfolio and interview with confidence.",
  },
];

const CoursePath = () => {
  return (
    <section id="path" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm btn-glass">Course Path</span>
        <h2 className="section-title mt-4">A clear path from beginner to job‑ready</h2>
        <p className="mt-3 text-muted-foreground">Structured learning designed to keep you motivated and moving.</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <Card key={s.title} className="relative overflow-hidden card-glass">
            <div className="absolute right-3 top-3 h-16 w-16 rounded-xl bg-gradient-to-br from-[hsl(var(--brand-yellow))]/30 to-transparent" />
            <CardHeader>
              <s.icon className="text-primary" />
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{s.text}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CoursePath;
