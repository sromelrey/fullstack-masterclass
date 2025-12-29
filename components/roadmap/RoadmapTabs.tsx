'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface RoadmapTabsProps {
  activeRoadmap: string;
  onRoadmapChange: (roadmapId: string) => void;
}

const roadmaps = [
  { id: 'javascript', label: 'JavaScript' },
  { id: 'react', label: 'React' },
  { id: 'node', label: 'Node.js' },
  { id: 'fullstack', label: 'Full-Stack' },
];

export const RoadmapTabs = ({ activeRoadmap, onRoadmapChange }: RoadmapTabsProps) => {
  return (
    <Tabs value={activeRoadmap} onValueChange={onRoadmapChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent p-0">
        {roadmaps.map((roadmap) => (
          <TabsTrigger
            key={roadmap.id}
            value={roadmap.id}
            className="
              px-4 py-3 text-sm font-medium
              border border-border/50
              data-[state=active]:bg-primary/10
              data-[state=active]:border-primary/50
              data-[state=active]:text-primary
              hover:bg-secondary/50
              transition-all duration-200
            "
          >
            {roadmap.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
