import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import avatar1 from "@/assets/avatar-learner-1.png";
import avatar2 from "@/assets/avatar-learner-2.png";
import avatar3 from "@/assets/avatar-learner-3.png";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Junior Product Designer",
    quote: "The modules feel like real work. I shipped a portfolio in weeks and finally understood design systems.",
    avatar: avatar1,
  },
  {
    name: "Maya Chen",
    role: "UX Researcher",
    quote: "Clear, modern, and practical. The projects and feedback prepared me for interviews immediately.",
    avatar: avatar2,
  },
  {
    name: "Jordan Patel",
    role: "UI Designer",
    quote: "Loved the motion and interaction lessons. The course felt sleek and approachable at the same time.",
    avatar: avatar3,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm btn-glass">What learners say</span>
        <h2 className="section-title mt-4">Results from real students</h2>
        <p className="mt-3 text-muted-foreground">Motivated by clarity, community, and portfolio outcomes.</p>
      </div>

      <div className="relative mt-10">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                <Card className="card-glass h-full">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="flex items-center gap-3">
                      <img src={t.avatar} alt={`${t.name} avatar`} className="h-10 w-10 rounded-full border" loading="lazy" width={40} height={40} />
                      <div>
                        <div className="font-medium">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">“{t.quote}”</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="btn-glass" />
          <CarouselNext className="btn-glass" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
