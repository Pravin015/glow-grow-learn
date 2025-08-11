import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getAllCourses } from "@/data/courses";
import { Star, Clock, Layers } from "lucide-react";

const HomeCourses = () => {
  const data = getAllCourses();
  return (
    <section aria-labelledby="courses-home" className="container mx-auto px-4 py-16">
      <header className="mb-8 flex items-end justify-between">
        <div>
          <h2 id="courses-home" className="section-title">Courses</h2>
          <p className="mt-2 text-muted-foreground">Learn in-demand skills with hands-on modules and expert mentors.</p>
        </div>
        <Button asChild variant="accent" className="hidden sm:inline-flex">
          <Link to="/courses">View All</Link>
        </Button>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((c) => (
          <article key={c.slug} className="card-glass group rounded-2xl p-5 transition shadow-sm hover:shadow-xl">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                <Layers className="h-3.5 w-3.5" /> {c.modules.length} modules
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="h-3.5 w-3.5 text-primary" /> 4.8
              </span>
            </div>
            <h3 className="mt-3 line-clamp-2 font-semibold leading-snug">{c.name}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{c.overview}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Self-paced</span>
              <span>Beginner–Advanced</span>
            </div>
            <div className="mt-5">
              <Button asChild variant="accent" className="w-full">
                <Link to={`/courses/${c.slug}`}>View Details</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeCourses;
