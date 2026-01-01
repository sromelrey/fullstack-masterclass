'use client';

import { Lesson, Module } from '@/data/courseData';
import { Button } from '@/components/ui/button';
import { Check, ChevronLeft, ChevronRight, Play, Clock, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface LessonContentProps {
  lesson: Lesson;
  module: Module;
  onMarkComplete: () => void;
  prevLesson?: { id: string; moduleId: string; slug: string; title: string } | null;
  nextLesson?: { id: string; moduleId: string; slug: string; title: string } | null;
  basePath?: string;
}

export const LessonContent = ({
  lesson,
  module,
  onMarkComplete,
  prevLesson,
  nextLesson,
  basePath = '/courses/javascript',
}: LessonContentProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-border bg-card/30">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Module label */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="text-lg">{module.icon}</span>
            <span>{module.title}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            {lesson.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{lesson.duration}</span>
            </div>
            <div className="capitalize px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-xs">
              {lesson.type}
            </div>
            {lesson.completed && (
              <div className="flex items-center gap-1 text-primary">
                <Check className="h-4 w-4" />
                <span>Completed</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Video placeholder */}
        {lesson.type === 'video' && (
          <div className="aspect-video bg-secondary/50 rounded-2xl border border-border flex items-center justify-center mb-8 group cursor-pointer hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Play className="h-8 w-8 ml-1" />
              </div>
              <p className="text-muted-foreground">Click to play video</p>
            </div>
          </div>
        )}

        {/* Lesson description */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-muted-foreground text-lg leading-relaxed">
            {lesson.description}
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
            What you&apos;ll learn
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Understanding core concepts and best practices</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Practical examples with real-world applications</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Common pitfalls and how to avoid them</span>
            </li>
          </ul>

          {/* Code example */}
          {lesson.codeExample && (
            <div className="mt-8 p-4 rounded-xl bg-secondary/50 border border-border font-mono text-sm">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 pb-3 border-b border-border">
                <span className="flex h-3 w-3 rounded-full bg-destructive/50" />
                <span className="flex h-3 w-3 rounded-full bg-primary/50" />
                <span className="flex h-3 w-3 rounded-full bg-green-500/50" />
                <span className="ml-2">{lesson.codeExample.fileName}</span>
              </div>
              <pre className="text-foreground overflow-x-auto">
                <code>{lesson.codeExample.code}</code>
              </pre>
            </div>
          )}

          {/* Callout */}
          <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20 flex gap-3">
            <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Pro Tip</h4>
              <p className="text-sm text-muted-foreground">
                Practice writing code alongside the video. This hands-on approach 
                significantly improves retention and understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Mark complete */}
            <Button
              variant={lesson.completed ? 'outline' : 'hero'}
              onClick={onMarkComplete}
              className="w-full sm:w-auto"
            >
              <Check className="h-4 w-4" />
              {lesson.completed ? 'Completed' : 'Mark as Complete'}
            </Button>

            {/* Navigation */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {prevLesson ? (
                <Button asChild variant="outline" className="flex-1 sm:flex-none">
                  <Link href={`${basePath}/${prevLesson.moduleId}/${prevLesson.slug}`}>
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </Link>
                </Button>
              ) : (
                <div />
              )}
              
              {nextLesson && (
                <Button asChild variant="default" className="flex-1 sm:flex-none">
                  <Link href={`${basePath}/${nextLesson.moduleId}/${nextLesson.slug}`}>
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
