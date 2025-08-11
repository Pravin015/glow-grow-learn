import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getAllCourses } from "@/data/courses";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const data = getAllCourses();
  const title = "Courses | EncrypticSecurity Pvt. Ltd";
  const description = "Explore cybersecurity, development, data, and DevOps courses with icon-based modules and hands-on labs.";

  return (
    <main className="container mx-auto px-4 py-10">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={typeof window !== "undefined" ? window.location.href : "/courses"} />
      </Helmet>

      <header className="mb-8 text-center">
        <h1 className="section-title">Explore Our Courses</h1>
        <p className="mt-2 text-muted-foreground">
          Industry-aligned programs with visual modules and practical projects.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((c) => (
          <article key={c.slug} className="card-glass rounded-2xl p-6 hover-scale">
            <h2 className="text-xl font-semibold">{c.name}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{c.overview}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {c.modules.slice(0, 4).map((m) => (
                <span key={m.title} className="rounded-full border px-2 py-1">{m.title}</span>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild variant="accent" className="w-full">
                <Link to={`/courses/${c.slug}`}>View Details</Link>
              </Button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Courses;
