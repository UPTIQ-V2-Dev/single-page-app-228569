import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">ModernApp</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Building exceptional digital experiences with modern technology. 
              We create solutions that matter for businesses and users alike.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-muted-foreground space-y-2">
              <p>hello@modernapp.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 ModernApp. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="gap-2"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};