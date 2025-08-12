import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  status: 'Completed' | 'Pursuing';
  description: string;
}

const EducationSection = () => {
  const education: Education[] = [
    {
      degree: 'B.E. in Computer Engineering',
      institution: 'Late G.N. Sapkal College of Engineering',
      period: '2023 - 2027',
      status: 'Pursuing',
      description: 'Currently pursuing Bachelor of Engineering with focus on computer systems, software development, and emerging technologies.'
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'KVN Naik Polytechnic',
      period: '2020 - 2023',
      status: 'Completed',
      description: 'Completed diploma with strong foundation in programming, database management, and web development technologies.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey and continuous learning path
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-8 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start lg:items-center gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gradient mb-2">{edu.degree}</h3>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{edu.institution}</h4>
                        
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{edu.period}</span>
                          </div>
                          <Badge 
                            variant={edu.status === 'Completed' ? 'default' : 'secondary'}
                            className="transition-colors"
                          >
                            {edu.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
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

export default EducationSection;