'use client';

import { useState } from 'react';
import { RoadmapModule } from '@/data/roadmapData';
import { ChevronDown, Play, FileText, Code, HelpCircle, Rocket, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

interface CourseSidebarProps {
  modules: RoadmapModule[];
  className?: string;
  title?: string;
}

// Map custom data to icons (you can expand this as needed)
const lessonTypeIcon: Record<string, LucideIcon> = {
  video: Play,
  reading: FileText,
  exercise: Code,
  quiz: HelpCircle,
  project: Rocket,
  default: Play,
};

export const CourseSidebar = ({
  modules,
  className,
  title = "Course Content"
}: CourseSidebarProps) => {
  const pathname = usePathname();
  
  // Extract current lesson slug from pathname if possible
  // e.g. /courses/javascript/module-1/lesson-1
  const segments = pathname.split('/');
  const currentLessonSlug = segments[segments.length - 1];

  // Find which module contains the current lesson based on slug
  const currentModule = modules.find(m => 
    m.lessons.some(l => l.slug === currentLessonSlug)
  );

  const [openModules, setOpenModules] = useState<string[]>(
    currentModule ? [currentModule.id] : [modules[0]?.id].filter(Boolean) as string[]
  );

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <aside className={cn(
      "w-full lg:w-80 lg:min-w-[320px] border-r border-border/50 bg-background/50 backdrop-blur-xl flex flex-col h-[calc(100vh-4rem)] sticky top-16",
      className
    )}>
      <div className="p-6 border-b border-border/50">
        <h2 className="font-bold text-lg text-foreground">{title}</h2>
        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
          <span>{modules.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons</span>
          <span>•</span>
          <span>{modules.reduce((acc, m) => acc + m.durationHours, 0)}h Total</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
        {modules.map((module) => {
          const isOpen = openModules.includes(module.id);
          const isCurrentModule = currentModule?.id === module.id;

          return (
            <Collapsible
              key={module.id}
              open={isOpen}
              onOpenChange={() => toggleModule(module.id)}
              className="mb-1"
            >
              <CollapsibleTrigger
                className={cn(
                  'flex items-center gap-3 w-full p-3 rounded-xl text-left transition-all duration-200',
                  'hover:bg-primary/5',
                  isCurrentModule && !isOpen && 'bg-primary/5 border border-primary/20'
                )}
              >
                {/* Module Avatar/Number */}
                <div className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold shrink-0",
                  isOpen || isCurrentModule ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  {module.order}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground truncate">
                    {module.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {module.lessons.length} lessons
                  </p>
                </div>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 text-muted-foreground transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )}
                />
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                <div className="mt-1 space-y-1 ml-4 pl-4 border-l border-border/50 py-1">
                  {module.lessons.map((lesson) => {
                    // Logic for icons - using manual mapping or default
                    const Icon = lessonTypeIcon['default'];
                    const isCurrent = lesson.slug === currentLessonSlug;
                    const courseId = segments[2];

                    return (
                      <Link
                        key={lesson.id}
                        href={`/courses/${courseId}/${module.id}/${lesson.slug}`}
                        className={cn(
                          'flex items-center gap-2 p-2.5 rounded-lg text-sm transition-all group',
                          isCurrent
                            ? 'bg-primary text-primary-foreground font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                        )}
                      >
                        {/* Status indicator */}
                        <div className={cn(
                          'flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                          isCurrent 
                            ? 'bg-primary-foreground text-primary' 
                            : 'bg-muted text-muted-foreground group-hover:bg-primary/10'
                        )}>
                          <Icon className="h-3 w-3" />
                        </div>

                        {/* Title */}
                        <span className="flex-1 truncate">{lesson.title}</span>

                        {/* Duration */}
                        <span className={cn(
                          "text-[10px] uppercase tracking-wider shrink-0 flex items-center gap-1 opacity-60",
                          isCurrent ? "text-primary-foreground" : "text-muted-foreground"
                        )}>
                          {lesson.durationMin}m
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </aside>
  );
};
