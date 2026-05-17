import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import projectStartup from '@/assets/project-startup.jpg';
import projectAmazon from '@/assets/project-amazon.jpg';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Web Development' | 'UI/UX';
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Startup Community Web App',
      description: 'A comprehensive platform with predictive startup idea generator, admin panel, login system, chart editing capabilities, and language recommendation features.',
      image: projectStartup,
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Bootstrap'],
      liveUrl: 'https://sumit-salmuthe.github.io',
      githubUrl: 'https://github.com/sumit-salmuthe'
    },
    {
      id: '2',
      title: 'Amazon Clone Website',
      description: 'A fully responsive e-commerce clone with clean and user-friendly UX, featuring product listings, shopping cart, and modern web interface.',
      image: projectAmazon,
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://sumit-salmuthe.github.io',
      githubUrl: 'https://github.com/sumit-salmuthe'
    }
  ];

  const categories = ['All', 'Web Development', 'UI/UX'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated set of practical builds that highlight product thinking, execution speed, and frontend craftsmanship
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12 fade-in">
            <div className="inline-flex flex-wrap gap-2 p-1 bg-muted rounded-lg">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "ghost"}
                  onClick={() => setActiveFilter(category)}
                  className="px-6 py-2 transition-all hover:scale-105"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-[1.02] fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <Button size="sm" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gradient">{project.title}</h3>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 fade-in">
              <p className="text-muted-foreground text-lg">
                No projects found in this category. Please try a different filter.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Section divider */}
      <div className="mt-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;