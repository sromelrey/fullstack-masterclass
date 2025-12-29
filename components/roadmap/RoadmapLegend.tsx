import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Lock, AlertCircle } from 'lucide-react';

export const RoadmapLegend = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="h-4 w-4 text-green-400" />
          <span className="text-muted-foreground">Available</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <AlertCircle className="h-4 w-4 text-amber-400" />
          <span className="text-muted-foreground">Coming Soon</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <Lock className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Locked</span>
        </div>
      </div>

      <div className="hidden sm:block w-px h-4 bg-border" />

      <div className="flex items-center gap-3">
        <Badge variant="outline" className="text-xs bg-green-500/10 text-green-400 border-green-500/30">
          Beginner
        </Badge>
        <Badge variant="outline" className="text-xs bg-blue-500/10 text-blue-400 border-blue-500/30">
          Intermediate
        </Badge>
        <Badge variant="outline" className="text-xs bg-purple-500/10 text-purple-400 border-purple-500/30">
          Advanced
        </Badge>
      </div>
    </div>
  );
};
