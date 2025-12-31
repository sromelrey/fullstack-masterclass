'use client';

import { usePathname } from 'next/navigation';
import { CourseSidebar } from '@/components/courses/CourseSidebar';
import { allRoadmaps } from '@/data/roadmapData';

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const courseId = segments[2];
  const currentRoadmap = (courseId && allRoadmaps[courseId]) ? allRoadmaps[courseId] : null;

  return (
    <div className="flex min-h-screen bg-background pt-16">
      {/* Sidebar - only show if a roadmap is selected */}
      {currentRoadmap && (
        <CourseSidebar 
          modules={currentRoadmap.modules} 
          title={currentRoadmap.title}
          className="hidden lg:flex"
        />
      )}
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
