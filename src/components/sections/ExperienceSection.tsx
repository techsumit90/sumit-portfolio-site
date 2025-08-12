import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  skills: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: 'Web Development Intern',
      company: 'Calibers Infotech',
      period: 'Oct 2024 – Jan 2025',
      location: 'Remote',
      achievements: [
        'Managed 10+ websites for dynamic web applications across various domains',
        'Collaborated in agile teams on live product development for startups',
        'Improved page load speed by 20% using frontend optimization techniques'
      ],
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Performance Optimization', 'Agile']
    },
    {
      title: 'UI/UX Design Intern',
      company: 'Zoblik Technologies',
      period: 'Jan 2023 – Dec 2023',
      location: 'Pune, India',
      achievements: [
        'Designed user-centric wireframes and prototypes for mobile and web apps',
        'Increased user engagement by 75% through visual design enhancements',
        'Worked closely with frontend developers for HTML/CSS implementation'
      ],
      skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the impact I've made
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-8 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] fade-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold text-gradient mb-2">{exp.title}</h3>
                    <h4 className="text-xl font-semibold text-foreground mb-4">{exp.company}</h4>
                    
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-success" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3">Technologies & Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="hover:scale-105 transition-transform">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
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

export default ExperienceSection;