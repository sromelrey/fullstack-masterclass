'use client';

import { useParams } from 'next/navigation';
import { javascriptRoadmap } from '@/data/js-roadmap';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ChevronLeft, ChevronRight, Play, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function LessonPage() {
  const params = useParams();
  const moduleId = params.moduleId as string;
  const lessonSlug = params.lessonSlug as string;

  const currentModule = javascriptRoadmap.modules.find((m) => m.id === moduleId);
  const currentLesson = currentModule?.lessons.find((l) => l.slug === lessonSlug);

  if (!currentModule || !currentLesson) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Lesson not found</h2>
        <Button asChild>
          <Link href="/courses/javascript">Back to Course Overview</Link>
        </Button>
      </div>
    );
  }

  // Navigation Logic
  const allLessons = javascriptRoadmap.modules.flatMap(m => 
    m.lessons.map(l => ({ ...l, moduleId: m.id }))
  );
  
  const currentIndex = allLessons.findIndex(l => l.slug === lessonSlug);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
        <span>/</span>
        <Link href="/courses/javascript" className="hover:text-primary transition-colors">JavaScript</Link>
        <span>/</span>
        <span className="text-foreground truncate max-w-[200px]">{currentModule.title}</span>
      </nav>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
            Module {currentModule.order}
          </Badge>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{currentLesson.durationMin} mins</span>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          {currentLesson.title}
        </h1>
        
        <p className="text-lg text-muted-foreground">
          {currentModule.description}
        </p>
      </div>

      {/* Lesson Video Placeholder */}
      <div className="aspect-video bg-muted rounded-2xl border border-border/50 flex flex-col items-center justify-center mb-10 overflow-hidden relative group">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
         <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform cursor-pointer">
              <Play className="h-8 w-8 text-primary fill-primary" />
            </div>
            <p className="text-muted-foreground font-medium">Video Content Coming Soon</p>
         </div>
      </div>

      {/* Lesson Content Placeholder */}
      <div className="prose prose-invert max-w-none mb-16">
        <h2 className="text-2xl font-bold mb-4">About this lesson</h2>
        <p>
          In this lesson, we&apos;ll be diving deep into <strong>{currentLesson.title}</strong>. 
          This is a critical part of mastering JavaScript and understanding how the engine works under the hood.
        </p>
        <p>
          Each lesson in the JavaScript Masterclass is designed to provide you with both theoretical knowledge 
          and practical implementation steps.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-border/50">
        {prevLesson ? (
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href={`/courses/javascript/${prevLesson.moduleId}/${prevLesson.slug}`}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Previous</span>
                <span className="truncate max-w-[150px]">{prevLesson.title}</span>
              </div>
            </Link>
          </Button>
        ) : <div />}

        {nextLesson ? (
          <Button variant="hero" asChild className="w-full sm:w-auto">
            <Link href={`/courses/javascript/${nextLesson.moduleId}/${nextLesson.slug}`}>
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold text-primary-foreground/70">Next</span>
                <span className="truncate max-w-[150px]">{nextLesson.title}</span>
              </div>
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        ) : (
          <Button variant="glow" asChild className="w-full sm:w-auto">
            <Link href="/courses/javascript">
              Finish Course
              <Rocket className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
