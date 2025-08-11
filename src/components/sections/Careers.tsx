import { Briefcase, Palette, Sparkles, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import avatar1 from "@/assets/avatar-learner-1.png";
import avatar2 from "@/assets/avatar-learner-2.png";
import avatar3 from "@/assets/avatar-learner-3.png";

const roles = [
  { title: "UX Researcher", color: "from-[hsl(var(--brand-mint)/0.2)]", img: avatar1 },
  { title: "UX Strategist", color: "from-[hsl(var(--brand-yellow)/0.2)]", img: avatar2 },
  { title: "UI Designer", color: "from-[hsl(var(--brand-coral)/0.2)]", img: avatar3 },
  { title: "Interaction Designer", color: "from-primary/10", img: avatar2 },
  { title: "Visual Designer", color: "from-[hsl(var(--brand-mint)/0.2)]", img: avatar3 },
  { title: "Design Lead", color: "from-[hsl(var(--brand-yellow)/0.2)]", img: avatar1 },
];

const Careers = () => {
  return (
    <section id="careers" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm btn-glass"><Briefcase size={16}/> Future Careers</span>
        <h2 className="section-title mt-4">Where your skills can take you</h2>
        <p className="mt-3 text-muted-foreground">Discover friendly, high-demand roles you can grow into with our learning paths.</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((r) => (
          <Card key={r.title} className="card-glass overflow-hidden">
            <CardHeader className="relative">
              <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${r.color} to-transparent`} />
              <CardTitle className="flex items-center gap-2 text-xl">
                <CheckCircle2 className="text-[hsl(var(--brand-mint))]"/> {r.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <img src={r.img} alt={`${r.title} avatar`} className="h-16 w-16 rounded-full border" loading="lazy" width={64} height={64} />
              <p className="text-sm text-muted-foreground">Build practical projects and a portfolio tailored for this role.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Careers;
