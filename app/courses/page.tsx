 import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, Code2, Zap, Database, Layout } from 'lucide-react';
import Link from 'next/link';
// import { javascriptCourse } from '@/data/courseData';

const courses = [
  {
    id: 'javascript-masterclass',
    title: 'JavaScript Master Class',
    description: 'Master JavaScript from fundamentals to advanced patterns. Build real-world projects and become a confident JS developer.',
    icon: Code2,
    color: 'from-amber-500/20 to-yellow-500/20',
    borderColor: 'border-amber-500/30',
    iconColor: 'text-amber-400',
    level: 'Beginner to Advanced',
    duration: '40+ hours',
    lessons: 72,
    projects: 4,
    status: 'available' as const,
  },
  {
    id: 'react-masterclass',
    title: 'React Master Class',
    description: 'Build modern, scalable React applications. Learn hooks, state management, performance optimization, and best practices.',
    icon: Zap,
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30',
    iconColor: 'text-cyan-400',
    level: 'Intermediate',
    duration: '35+ hours',
    lessons: 58,
    projects: 5,
    status: 'coming-soon' as const,
  },
  {
    id: 'NextJS-masterclass',
    title: 'NextJS Master Class',
    description: 'Build robust frontend services with NextJS. APIs, databases, authentication, deployment, and production best practices.',
    icon: Database,
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
    iconColor: 'text-green-400',
    level: 'Intermediate',
    duration: '30+ hours',
    lessons: 48,
    projects: 3,
    status: 'coming-soon' as const,
  },
  {
    id: 'NestJS-masterclass',
    title: 'NestJS Master Class',
    description: 'The complete journey from backend. Build and deploy production-ready backend applications.',
    icon: Layout,
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400',
    level: 'Advanced',
    duration: '60+ hours',
    lessons: 95,
    projects: 6,
    status: 'coming-soon' as const,
  },
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-background noise-bg">
      
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Master Classes
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">Choose Your</span>{' '}
              <span className="text-gradient">Learning Path</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive courses designed to take you from beginner to expert. 
              Each masterclass includes projects, quizzes, and real-world applications.
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {courses.map((course) => {
              const Icon = course.icon;
              const isAvailable = course.status === 'available';
              
              return (
                <div
                  key={course.id}
                  className={`premium-card group relative overflow-hidden ${
                    !isAvailable ? 'opacity-75' : ''
                  }`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-50`} />
                  
                  <div className="relative p-6 sm:p-8">
                    {/* Status Badge */}
                    {!isAvailable && (
                      <Badge 
                        variant="secondary" 
                        className="absolute top-4 right-4 bg-secondary/80"
                      >
                        Coming Soon
                      </Badge>
                    )}

                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-background/50 border ${course.borderColor} mb-4`}>
                      <Icon className={`h-6 w-6 ${course.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      {course.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Code2 className="h-4 w-4" />
                        <span>{course.projects} projects</span>
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <Badge variant="outline" className="text-xs">
                        {course.level}
                      </Badge>
                      
                      <div className="flex gap-2">
                        {/* View Roadmap Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="border border-primary/30 hover:bg-primary/10"
                        >
                          <Link href={`/roadmap?tab=${course.id.replace('-masterclass', '')}`}>
                            Roadmap
                          </Link>
                        </Button>

                        {/* Start Learning Button */}
                        {isAvailable ? (
                          <Button variant="hero" size="sm" asChild>
                            <Link href={`/course/${course.id}`}>
                              Start
                            </Link>
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" disabled>
                            Soon
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Can&apos;t decide? Start with JavaScript — it&apos;s the foundation of modern web development.
            </p>
            <Button variant="glow" size="lg" asChild>
              <Link href="/course/javascript-masterclass">
                Start JavaScript Master Class
              </Link>
            </Button>
          </div>
        </div>
      </main>

    
    </div>
  );
};

export default CoursesPage;
