import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
 
 const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Level Up Your
            <span className="text-gradient block mt-2">Coding Skills?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            Join thousands of developers who are mastering JavaScript and building 
            their dream careers. Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="glow" size="xl">
              <Link href="/course/javascript-masterclass">
                Start Free Preview
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link href="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
export default CTASection;