import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import TypingText from '@/components/TypingText';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <TypingText 
              text="Hi, I'm Sumit Salmuthe 👋"
              speed={80}
              className="text-gradient"
            />
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 fade-in" style={{ animationDelay: '3s' }}>
            <TypingText 
              text="Frontend Developer | UI/UX Designer | Problem Solver"
              speed={60}
              className=""
            />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto fade-in" style={{ animationDelay: '5s' }}>
            Computer Engineering student building user-focused products with clean code,
            strong design thinking, and real project impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in" style={{ animationDelay: '6s' }}>
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold shadow-medium hover:shadow-strong transition-all hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold shadow-soft hover:shadow-medium transition-all hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold shadow-soft hover:shadow-medium transition-all hover:scale-105"
              asChild
            >
              <a href="/resume.pdf" download="Sumit_Salmuthe_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in" style={{ animationDelay: '7s' }}>
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;