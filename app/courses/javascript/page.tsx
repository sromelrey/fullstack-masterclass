import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function JavaScriptMasterclassPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
          JavaScript Master Class
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="text-foreground">Coming</span>{' '}
          <span className="text-gradient">Soon</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          The JavaScript Masterclass course content is currently being developed. 
          Check out the roadmap to see what&apos;s planned!
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link href="/courses">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </Button>
          <Button variant="hero" asChild>
            <Link href="/roadmap?tab=javascript">
              View Roadmap
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
