'use client';

import { RoadmapModule } from '@/data/roadmapData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Clock, BookOpen, Code2, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface RoadmapDrawerProps {
  module: RoadmapModule | null;
  open: boolean;
  onClose: () => void;
}

export const RoadmapDrawer = ({ module, open, onClose }: RoadmapDrawerProps) => {
  if (!module) return null;

  const isLocked = module.status === 'locked';
  const isAvailable = module.status === 'available';

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Advanced':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="space-y-4 pb-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <SheetTitle className="text-2xl leading-tight pr-8">
                {module.title}
              </SheetTitle>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge
                  variant="outline"
                  className={`text-xs ${getLevelColor(module.level)}`}
                >
                  {module.level}
                </Badge>
                {isLocked && (
                  <Badge variant="secondary" className="text-xs">
                    <Lock className="h-3 w-3 mr-1" />
                    Locked
                  </Badge>
                )}
                {isAvailable && (
                  <Badge variant="outline" className="text-xs border-green-500/30 text-green-400">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Available
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          <SheetDescription className="text-sm leading-relaxed">
            {module.description}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 pb-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-lg border border-border/50 bg-secondary/20">
            <div className="text-center">
              <div className="flex justify-center mb-1">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div className="text-lg font-semibold text-foreground">
                {module.durationHours}h
              </div>
              <div className="text-xs text-muted-foreground">Duration</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-1">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              <div className="text-lg font-semibold text-foreground">
                {module.lessons.length}
              </div>
              <div className="text-xs text-muted-foreground">Lessons</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-1">
                <Code2 className="h-4 w-4 text-primary" />
              </div>
              <div className="text-lg font-semibold text-foreground">
                {module.projects.length}
              </div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </div>
          </div>

          {/* Prerequisites */}
          {module.prerequisites.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-foreground">Prerequisites</h3>
              <div className="flex flex-wrap gap-2">
                {module.prerequisites.map((prereq) => (
                  <Badge key={prereq} variant="outline" className="text-xs">
                    {prereq.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Lessons */}
          {module.lessons.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Lessons ({module.lessons.length})
              </h3>
              <div className="space-y-2">
                {module.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className="flex items-start gap-3 p-3 rounded-lg border border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {lesson.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {lesson.durationMin} minutes
                      </div>
                    </div>
                    {isAvailable && (
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {module.projects.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Projects ({module.projects.length})
              </h3>
              <div className="space-y-2">
                {module.projects.map((project) => (
                  <div
                    key={project.id}
                    className="p-3 rounded-lg border border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-colors"
                  >
                    <div className="text-sm font-medium text-foreground">
                      {project.title}
                    </div>
                    {project.description && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {project.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="pt-4 border-t border-border/50">
            {isAvailable ? (
              <Button variant="hero" className="w-full" size="lg" asChild>
                <Link href={`/course/${module.id}`}>
                  Start Module
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button variant="outline" className="w-full" size="lg" disabled>
                {isLocked ? (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Complete Prerequisites
                  </>
                ) : (
                  'Coming Soon'
                )}
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
