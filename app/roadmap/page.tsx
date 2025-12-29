'use client';

import { Suspense, useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { RoadmapTabs } from '@/components/roadmap/RoadmapTabs';
import { RoadmapAccordion } from '@/components/roadmap/RoadmapAccordion';
import { allRoadmaps } from '@/data/roadmapData';

const RoadmapContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get('tab');
  
  // Initialize from URL parameter or default to javascript
  const initialTab = useMemo(() => {
    return tabParam && allRoadmaps[tabParam] ? tabParam : 'javascript';
  }, [tabParam]);
  
  const [activeRoadmap, setActiveRoadmap] = useState(initialTab);

  const currentRoadmap = allRoadmaps[activeRoadmap];

  const handleLessonClick = (moduleId: string, lessonId: string) => {
    // Navigate to lesson page (you can customize this route)
    router.push(`/courses/${activeRoadmap}/${moduleId}/${lessonId}`);
  };

  // Calculate total stats
  const totalLessons = currentRoadmap.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const totalHours = currentRoadmap.modules.reduce((acc, m) => acc + m.durationHours, 0);
  const totalProjects = currentRoadmap.modules.reduce((acc, m) => acc + m.projects.length, 0);

  return (
    <>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
          Learning Roadmaps
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="text-foreground">Your Journey to</span>{' '}
          <span className="text-gradient">Mastery</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Follow a structured learning path designed to take you from beginner to expert. 
          Expand any module to see lessons and start learning.
        </p>
      </div>

      {/* Roadmap Tabs */}
      <div className="max-w-4xl mx-auto mb-8">
        <RoadmapTabs
          activeRoadmap={activeRoadmap}
          onRoadmapChange={setActiveRoadmap}
        />
      </div>

      {/* Roadmap Info */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {currentRoadmap.title}
        </h2>
        <p className="text-muted-foreground mb-4">
          {currentRoadmap.description}
        </p>
        
        {/* Stats */}
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">{currentRoadmap.modules.length}</span>
            <span>modules</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground" />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">{totalLessons}</span>
            <span>lessons</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground" />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">{totalHours}h</span>
            <span>total</span>
          </div>
          {totalProjects > 0 && (
            <>
              <div className="w-1 h-1 rounded-full bg-muted-foreground" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{totalProjects}</span>
                <span>projects</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Roadmap Accordion */}
      <div className="max-w-3xl mx-auto">
        <RoadmapAccordion
          modules={currentRoadmap.modules}
          onLessonClick={handleLessonClick}
        />
      </div>
    </>
  );
};

const RoadmapPage = () => {
  return (
    <div className="min-h-screen bg-background noise-bg">
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <Suspense fallback={
            <div className="text-center py-20">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent" />
              <p className="mt-4 text-muted-foreground">Loading roadmap...</p>
            </div>
          }>
            <RoadmapContent />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default RoadmapPage;
