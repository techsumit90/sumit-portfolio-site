import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <Card className="p-8 shadow-medium hover:shadow-strong transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Hello! I'm Sumit</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Motivated and detail-oriented Computer Engineering student with hands-on experience 
                  in UI/UX design, frontend development, and responsive interface creation. Proven ability 
                  to manage live projects, develop user-friendly frontends, and apply AI-powered logic 
                  to improve user experience.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm passionate about creating digital experiences that not only look great but also 
                  solve real-world problems. Whether it's building responsive web applications or 
                  designing intuitive user interfaces, I strive to deliver quality work that makes 
                  a difference.
                </p>
                <Button 
                  size="lg" 
                  className="shadow-medium hover:shadow-strong transition-all hover:scale-105"
                  asChild
                >
                  <a href="/resume.pdf" download="Sumit_Salmuthe_Resume.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </Card>
            </div>

            <div className="fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <img
                  src={profileImage}
                  alt="Sumit Salmuthe"
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-strong hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section divider */}
      <div className="mt-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>
    </section>
  );
};

export default AboutSection;