import { Card } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'React', percentage: 85, icon: '⚛️' },
    { name: 'HTML', percentage: 90, icon: '🌐' },
    { name: 'CSS', percentage: 85, icon: '🎨' },
    { name: 'JavaScript', percentage: 80, icon: '💛' },
    { name: 'C++', percentage: 75, icon: '⚡' },
    { name: 'Artificial Intelligence', percentage: 70, icon: '🤖' },
    { name: 'UI/UX Design', percentage: 90, icon: '🎯' },
    { name: 'Responsive Web Design', percentage: 85, icon: '📱' },
    { name: 'Creative Design', percentage: 80, icon: '✨' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and skills I've been working with recently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{skill.icon}</span>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className="text-sm font-semibold text-primary">{skill.percentage}%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 gradient-primary rounded-full transition-all duration-1000 ease-out progress-fill"
                      style={{ 
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              </Card>
            ))}
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

export default SkillsSection;