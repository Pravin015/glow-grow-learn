import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Check } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm btn-glass"><Rocket size={16}/> Real‑world Projects</span>
        <h2 className="section-title mt-4">Build work you’re proud to show</h2>
        <p className="mt-3 text-muted-foreground">Create beautiful case studies with step‑by‑step guidance and mentor feedback.</p>
      </div>

      <Card className="card-glass mx-auto mt-10 max-w-5xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Rocket className="text-[hsl(var(--brand-coral))]"/> Hands-on Practice</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Responsive app redesign and prototyping",
              "User research with real participants",
              "Design systems and components",
              "Usability testing and iterations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-1 text-[hsl(var(--brand-mint))]"/> <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="hero" className="hover-scale">Start a Project</Button>
            <Button variant="glass" className="hover-scale">See Examples</Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Projects;
