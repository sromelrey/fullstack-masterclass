import { Badge } from '@/components/ui/badge';
import { Clock, Lock, CheckCircle2 } from 'lucide-react';
import { RoadmapModule } from '@/data/roadmapData';

interface RoadmapNodeCardProps {
  module: RoadmapModule;
  onClick: () => void;
  isStart?: boolean;
  stepNumber?: number;
}

export const RoadmapNodeCard = ({ module, onClick, isStart = false, stepNumber }: RoadmapNodeCardProps) => {
  const isLocked = module.status === 'locked';
  const isComingSoon = module.status === 'coming-soon';
  const isAvailable = module.status === 'available';

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Advanced':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = () => {
    if (isLocked) return <Lock className="h-4 w-4" />;
    if (isAvailable) return <CheckCircle2 className="h-4 w-4 text-green-400" />;
    return null;
  };

  return (
    <button
      onClick={onClick}
      disabled={isLocked}
      className={`
        relative w-full max-w-[280px] text-left
        premium-card group overflow-visible
        transition-all duration-300
        ${isStart ? 'animate-pulse-glow mt-4' : ''}
        ${isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}
        ${isAvailable ? 'border-primary/30 hover:border-primary/60' : ''}
      `}
    >
      {/* Status Badge */}
      {(isLocked || isComingSoon) && (
        <Badge
          variant="secondary"
          className="absolute -top-2 -right-2 bg-secondary/80 text-xs"
        >
          {isLocked ? 'Locked' : 'Coming Soon'}
        </Badge>
      )}

      {/* Step Number Badge */}
      {stepNumber && (
        <div className="absolute -top-3 -left-3 flex items-center justify-center w-7 h-7 rounded-full bg-primary/90 text-primary-foreground font-bold text-sm shadow-lg">
          {stepNumber}
        </div>
      )}

      <div className="p-4 space-y-3">
        {/* Title Row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-base leading-tight text-foreground group-hover:text-primary transition-colors">
            {module.title}
          </h3>
          <div className="shrink-0">
            {getStatusIcon()}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {module.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{module.durationHours}h</span>
          </div>
          {module.lessons.length > 0 && (
            <span>• {module.lessons.length} lessons</span>
          )}
          {module.projects.length > 0 && (
            <span>• {module.projects.length} projects</span>
          )}
        </div>

        {/* Level Badge */}
        <Badge
          variant="outline"
          className={`text-xs ${getLevelColor(module.level)}`}
        >
          {module.level}
        </Badge>
      </div>
    </button>
  );
};
