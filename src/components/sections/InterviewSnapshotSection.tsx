import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const interviewHighlights = [
  {
    title: 'What I build',
    points: ['Responsive web apps', 'Clean UI systems', 'Interactive portfolio experiences']
  },
  {
    title: 'How I work',
    points: ['Break big problems into clear tasks', 'Communicate progress regularly', 'Focus on user-first decisions']
  },
  {
    title: 'What you can expect',
    points: ['Readable and maintainable code', 'Quick iteration and feedback loops', 'Ownership from idea to launch']
  }
];

const InterviewSnapshotSection = () => {
  return (
    <section id="snapshot" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4">Interview Snapshot</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">If you visit my GitHub, here is what you will see</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Projects with practical use-cases, thoughtful UI choices, and a strong focus on shipping useful features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {interviewHighlights.map((highlight, index) => (
              <Card
                key={highlight.title}
                className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02] fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gradient">{highlight.title}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {highlight.points.map((point) => (
                    <li key={point} className="flex gap-2 items-start">
                      <span className="text-primary font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>
    </section>
  );
};

export default InterviewSnapshotSection;
