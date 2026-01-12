'use client';

import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LessonContent } from '@/components/courses/LessonContent';
import { Lesson, Module } from '@/data/courseData';
import { allRoadmaps } from '@/data/roadmapData';

export default function LessonPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const moduleId = params.moduleId as string;
  const lessonSlug = params.lessonSlug as string;

  const currentRoadmap = allRoadmaps[courseId];
  const currentModule = currentRoadmap?.modules.find((m) => m.id === moduleId);
  const currentLesson = currentModule?.lessons.find(
    (l) => l.slug === lessonSlug || l.id === lessonSlug
  );

  if (!currentRoadmap || !currentModule || !currentLesson) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Lesson not found</h2>
        <Button asChild>
          <Link href={`/courses/${courseId || 'javascript'}`}>Back to Course Overview</Link>
        </Button>
      </div>
    );
  }

  // Navigation Logic
  const allLessons = currentRoadmap.modules.flatMap(m => 
    m.lessons.map(l => ({ ...l, moduleId: m.id }))
  );
  
  const currentIndex = allLessons.findIndex(l => l.slug === lessonSlug || l.id === lessonSlug);
  const prevLessonData = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLessonData = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  // Mapping to LessonContentProps
  const lesson: Lesson = {
    id: currentLesson.id,
    title: currentLesson.title,
    slug: currentLesson.slug,
    description: currentLesson.description || `In this lesson, we'll be diving deep into ${currentLesson.title}. This is a critical part of mastering the subject and understanding how it works under the hood.`,
    duration: `${currentLesson.durationMin} mins`,
    type: currentLesson.type || 'article',
    completed: false,
    learningPoints: currentLesson.learningPoints,
    proTip: currentLesson.proTip,
    codeExample: currentLesson.codeExample,
    imageUrl: currentLesson.imageUrl,
    videoUrl: currentLesson.videoUrl,
  };

  const moduleData: Module = {
    id: currentModule.id,
    title: currentModule.title,
    description: currentModule.description,
    icon: currentModule.icon || '🚀',
  };

  const prevLesson = prevLessonData ? {
    id: prevLessonData.id,
    moduleId: prevLessonData.moduleId,
    slug: prevLessonData.slug,
    title: prevLessonData.title
  } : null;

  const nextLesson = nextLessonData ? {
    id: nextLessonData.id,
    moduleId: nextLessonData.moduleId,
    slug: nextLessonData.slug,
    title: nextLessonData.title
  } : null;

  const handleMarkComplete = () => {
    console.log('Marking lesson as complete:', lesson.id);
  };

  return (
    <LessonContent
      lesson={lesson}
      module={moduleData}
      onMarkComplete={handleMarkComplete}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
      basePath={`/courses/${courseId}`}
    />
  );
}
