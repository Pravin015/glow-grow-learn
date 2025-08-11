const AboutUs = () => {
  return (
    <section aria-labelledby="about-heading" className="container mx-auto px-4 py-16">
      <header className="mb-8 text-center">
        <h2 id="about-heading" className="section-title">About EncrypticSecurity</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          EncrypticSecurity Pvt. Ltd is an Accredited Training Center of EC-Council & Offensive Security. Since 2016, we’ve trained thousands with hands-on labs, industry tools, and expert mentorship.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { k: "10+", label: "Courses (Online & Offline)" },
          { k: "5+", label: "Branches" },
          { k: "1500+", label: "Successful Careers Made" },
          { k: "10,000+", label: "Students Trained" },
          { k: "₹36 LPA", label: "Highest CTC" },
          { k: "Placement", label: "Support & Mentorship" },
        ].map((s) => (
          <article key={s.label} className="card-glass rounded-2xl p-6 text-center">
            <div className="text-3xl font-extrabold text-primary">{s.k}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </article>
        ))}
      </div>

      <div id="placement" className="mt-12 rounded-2xl border p-6 card-glass">
        <h3 className="text-xl font-semibold">Placement Process</h3>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Eligibility Criteria",
            "Placement Training",
            "Resume Presentation",
            "Aptitude Test",
            "Mock Interviews",
            "Scheduling Interviews",
            "Placement at Dream Job",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold">
                {idx + 1}
              </span>
              <span className="text-sm text-muted-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AboutUs;
