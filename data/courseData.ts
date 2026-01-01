export type LessonType = 'video' | 'article' | 'quiz' | 'exercise';

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  type: LessonType;
  completed?: boolean;
  codeExample?: {
    fileName: string;
    code: string;
  };
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
}
