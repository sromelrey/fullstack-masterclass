import { Button } from "@/components/ui/button";
import RotatingText from "./RotatingText";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 noise-bg" />
      <div className="vignette" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-100 h-50 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Now live: JavaScript Master Class • React track next
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-fade-up delay-100">
            <span className="block text-foreground">Become a</span>
            <span className="block text-gradient">Notorious Coder</span>
          </h1>

          {/* Rotating motivational text */}
          <div className="mb-8 animate-fade-up delay-200 min-h-[2.5rem] flex items-center justify-center">
            <RotatingText />
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-300">
            A structured fullstack roadmap from{" "}
            <span className="text-foreground font-medium">
              JavaScript → Next.js → NestJS
            </span>
            . Learn through real projects, checkpoints, and battle-tested
            patterns—then ship with confidence.
          </p>
        </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button asChild variant="hero" size="xl">
              <Link href="/courses/javascript">
                Start JavaScript Master Class
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link href="/courses/javascript">
                <Play className="h-5 w-5" />
                View Roadmap
              </Link>
            </Button>
          </div>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-up delay-400">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-foreground">
              50+
            </div>
            <div className="text-sm text-muted-foreground mt-1">Lessons</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-foreground">
              4
            </div>
            <div className="text-sm text-muted-foreground mt-1">Projects</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-foreground">
              40+
            </div>
            <div className="text-sm text-muted-foreground mt-1">Hours</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
