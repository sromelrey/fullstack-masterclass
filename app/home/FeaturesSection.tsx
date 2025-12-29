import { GitBranch, Code2, HelpCircle } from 'lucide-react';

const features = [
  {
    icon: GitBranch,
    title: 'Structured Roadmap',
    description: 'Follow a carefully designed learning path that builds your skills progressively. No more wondering what to learn next.',
  },
  {
    icon: Code2,
    title: 'Real Projects',
    description: 'Build portfolio-ready projects that demonstrate your skills. From simple apps to fullstack applications.',
  },
  {
    icon: HelpCircle,
    title: 'Interactive Quizzes',
    description: 'Test your understanding with quizzes after each module. Reinforce learning and identify knowledge gaps.',
  },
];

 const FeaturesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive learning experience designed to take you from beginner to professional developer.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-premium p-6 lg:p-8 group hover:-translate-y-1 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-4 right-4 w-1 h-8 bg-gradient-to-b from-primary/30 to-transparent rounded-full" />
                <div className="absolute top-4 right-4 w-8 h-1 bg-gradient-to-r from-primary/30 to-transparent rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeaturesSection;