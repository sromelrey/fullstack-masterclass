'use client';

import { useState } from 'react';
import { RoadmapModule } from '@/data/roadmapData';
import { ChevronDown, Clock, Rocket, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

interface RoadmapAccordionProps {
  modules: RoadmapModule[];
  onLessonClick?: (moduleId: string, lessonId: string) => void;
}

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

const getStatusColor = (status: string) => {
  switch (status) {
    case 'available':
      return 'border-primary/30 hover:border-primary/60';
    case 'coming-soon':
      return 'border-yellow-500/30 hover:border-yellow-500/60';
    case 'locked':
      return 'border-muted opacity-60';
    default:
      return 'border-muted';
  }
};

export const RoadmapAccordion = ({ modules, onLessonClick }: RoadmapAccordionProps) => {
  const sortedModules = [...modules].sort((a, b) => a.order - b.order);
  const [openModules, setOpenModules] = useState<string[]>([sortedModules[0]?.id || '']);

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  return (
    <div className="space-y-3">
      {sortedModules.map((module, index) => {
        const isOpen = openModules.includes(module.id);
        const totalLessons = module.lessons.length;
        const totalProjects = module.projects.length;
        const isLocked = module.status === 'locked';
        const isComingSoon = module.status === 'coming-soon';

        return (
          <Collapsible
            key={module.id}
            open={isOpen}
            onOpenChange={() => !isLocked && toggleModule(module.id)}
          >
            <div
              className={cn(
                'premium-card overflow-hidden transition-all duration-300',
                getStatusColor(module.status),
                isOpen && 'ring-1 ring-primary/20'
              )}
            >
              <CollapsibleTrigger
                className={cn(
                  'flex items-center gap-4 w-full p-4 text-left transition-colors',
                  'hover:bg-white/5',
                  isLocked && 'cursor-not-allowed opacity-60'
                )}
                disabled={isLocked}
              >
                {/* Step Number */}
                <div className={cn(
                  'flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm shrink-0',
                  isOpen 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-primary/20 text-primary'
                )}>
                  {index + 1}
                </div>

                {/* Module Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground truncate">
                      {module.title}
                    </h3>
                    {isComingSoon && (
                      <Badge variant="outline" className="text-xs bg-yellow-500/10 text-yellow-400 border-yellow-500/30">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {module.description}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground shrink-0">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{totalLessons} lessons</span>
                  </div>
                  {totalProjects > 0 && (
                    <div className="flex items-center gap-1">
                      <Rocket className="h-4 w-4" />
                      <span>{totalProjects} projects</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{module.durationHours}h</span>
                  </div>
                  <Badge variant="outline" className={cn('text-xs', getLevelColor(module.level))}>
                    {module.level}
                  </Badge>
                </div>

                {/* Chevron */}
                <ChevronDown
                  className={cn(
                    'h-5 w-5 text-muted-foreground transition-transform shrink-0',
                    isOpen && 'rotate-180'
                  )}
                />
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="border-t border-border/50">
                  {/* Lessons List */}
                  <div className="p-4 space-y-1">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                      Lessons
                    </div>
                    <div className="space-y-1">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <button
                          key={lesson.id}
                          onClick={() => onLessonClick?.(module.id, lesson.id)}
                          className="flex items-center gap-3 w-full p-3 rounded-lg text-left transition-colors hover:bg-white/5 group"
                        >
                          {/* Lesson Number */}
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-medium shrink-0">
                            {lessonIndex + 1}
                          </div>

                          {/* Lesson Title */}
                          <span className="flex-1 text-sm text-foreground group-hover:text-primary transition-colors">
                            {lesson.title}
                          </span>

                          {/* Duration */}
                          <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0">
                            <Clock className="h-3 w-3" />
                            {formatDuration(lesson.durationMin)}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Projects */}
                    {module.projects.length > 0 && (
                      <>
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-6 mb-3">
                          Projects
                        </div>
                        <div className="space-y-1">
                          {module.projects.map((project) => (
                            <div
                              key={project.id}
                              className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20"
                            >
                              <Rocket className="h-5 w-5 text-primary shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-foreground">
                                  {project.title}
                                </div>
                                {project.description && (
                                  <div className="text-xs text-muted-foreground">
                                    {project.description}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        );
      })}
    </div>
  );
};
