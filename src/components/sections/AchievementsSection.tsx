import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Users, Lightbulb } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: 'award' | 'trophy' | 'users' | 'lightbulb';
  category: string;
}

const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      title: 'Smart India Hackathon (SIH) Internal Round',
      description: 'Selected for the prestigious Smart India Hackathon internal round, showcasing innovative problem-solving skills and technical expertise.',
      icon: 'trophy',
      category: 'Competition'
    },
    {
      title: 'Tech Competition Participant',
      description: 'Actively participated in technology competitions at Sandip Foundation and RSM Polytechnic Nasik, demonstrating commitment to continuous learning.',
      icon: 'award',
      category: 'Competition'
    },
    {
      title: 'Startup Community Project Recognition',
      description: 'Recognized for exceptional teamwork and innovation in the Startup Community project, highlighting collaborative skills and creative thinking.',
      icon: 'users',
      category: 'Recognition'
    },
    {
      title: 'Innovation Excellence',
      description: 'Consistently demonstrated innovative approaches to problem-solving and project development across various technical domains.',
      icon: 'lightbulb',
      category: 'Innovation'
    }
  ];

  const getIcon = (iconType: Achievement['icon']) => {
    const iconClass = "w-6 h-6 text-primary";
    switch (iconType) {
      case 'award': return <Award className={iconClass} />;
      case 'trophy': return <Trophy className={iconClass} />;
      case 'users': return <Users className={iconClass} />;
      case 'lightbulb': return <Lightbulb className={iconClass} />;
      default: return <Award className={iconClass} />;
    }
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition and accomplishments that drive my passion for excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {getIcon(achievement.icon)}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gradient">{achievement.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {achievement.category}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
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

export default AchievementsSection;