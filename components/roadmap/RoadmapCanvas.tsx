'use client';

import { RoadmapModule } from '@/data/roadmapData';
import { RoadmapNodeCard } from './RoadmapNodeCard';

interface RoadmapCanvasProps {
  modules: RoadmapModule[];
  onNodeClick: (module: RoadmapModule) => void;
}

export const RoadmapCanvas = ({ modules, onNodeClick }: RoadmapCanvasProps) => {
  const sortedModules = [...modules].sort((a, b) => a.order - b.order);

  return (
    <div className="relative w-full">
      <div className="max-w-6xl mx-auto px-4 pt-6">
        {/* Simple grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedModules.map((module, index) => (
            <RoadmapNodeCard
              key={module.id}
              module={module}
              onClick={() => onNodeClick(module)}
              isStart={index === 0}
              stepNumber={index + 1}
            />
          ))}
        </div>

        {/* Completion indicator */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Complete all modules to master the track
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
