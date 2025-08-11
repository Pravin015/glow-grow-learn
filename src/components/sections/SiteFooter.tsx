import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t bg-card/60 backdrop-blur-md">
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(var(--primary-glow))]" aria-hidden />
            <span className="font-extrabold tracking-tight">BrightUX</span>
          </div>
          <p className="text-sm text-muted-foreground">A friendly place to learn UI/UX with clarity and confidence.</p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Explore</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#careers" className="hover:underline">Future Careers</a></li>
            <li><a href="#path" className="hover:underline">Course Path</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Resources</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:underline">Getting Started</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Connect</h3>
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter" className="btn-glass inline-flex h-10 w-10 items-center justify-center rounded-md"><Twitter /></a>
            <a href="#" aria-label="GitHub" className="btn-glass inline-flex h-10 w-10 items-center justify-center rounded-md"><Github /></a>
            <a href="#" aria-label="Email" className="btn-glass inline-flex h-10 w-10 items-center justify-center rounded-md"><Mail /></a>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BrightUX. Learn, design, and build your future.
      </div>
    </footer>
  );
};

export default Footer;
