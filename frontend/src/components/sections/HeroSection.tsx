import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Star } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Announcement Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Star className="w-4 h-4 mr-2 fill-current" />
            New: Revolutionary features now available
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Build the Future with
            <span className="text-primary block">Modern Technology</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We create exceptional digital experiences that transform ideas into reality. 
            Join thousands of satisfied customers worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg"
              onClick={() => scrollToSection('#contact')}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg"
              onClick={() => scrollToSection('#about')}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.9/5 from 2,000+ reviews</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div>Trusted by 10,000+ companies worldwide</div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div>99.9% uptime guaranteed</div>
          </div>
        </div>

        {/* Hero Image/Video Placeholder */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-br from-muted via-muted/50 to-muted/30 p-8 border shadow-2xl">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">Product Demo Video</p>
              </div>
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-background p-4 rounded-lg shadow-lg border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-medium">Live Dashboard</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background p-4 rounded-lg shadow-lg border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-sm font-medium">Real-time Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};