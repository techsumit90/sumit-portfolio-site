import { Button } from '@/components/ui/button';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Back to Top */}
          <div className="flex justify-center mb-8">
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="rounded-full px-6 py-3 hover:scale-105 transition-all shadow-soft hover:shadow-medium"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>

          {/* Footer Content */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Sumit Salmuthe</span>
            </div>
            
            <p className="text-muted-foreground">
              © {currentYear} Sumit Salmuthe. All rights reserved.
            </p>
            
            <div className="text-sm text-muted-foreground">
              <p>Built with React, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;