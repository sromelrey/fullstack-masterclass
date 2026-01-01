// Roadmap Data Structure for Course Platform

import { javascriptRoadmap } from "./js-roadmap";
import { reactRoadmap } from "./reactjs-roadmap";
import { LessonType } from "./courseData";

export type RoadmapLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type RoadmapStatus = 'available' | 'coming-soon' | 'locked';

export interface RoadmapLesson {
  id: string;
  title: string;
  slug: string;
  durationMin: number;
  description?: string;
  type?: LessonType;
  codeExample?: {
    fileName: string;
    code: string;
  };
}

export interface RoadmapProject {
  id: string;
  title: string;
  description?: string;
}

export interface RoadmapModule {
  id: string;
  title: string;
  description: string;
  icon?: string;
  lessons: RoadmapLesson[];
  projects: RoadmapProject[];
  durationHours: number;
  level: RoadmapLevel;
  prerequisites: string[];
  status: RoadmapStatus;
  position: { x: number; y: number }; // For tree layout positioning
  order: number; // Sequential order in roadmap
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  modules: RoadmapModule[];
}

// All roadmaps combined
export const allRoadmaps: Record<string, Roadmap> = {
  javascript: javascriptRoadmap,
  react: reactRoadmap,
};
