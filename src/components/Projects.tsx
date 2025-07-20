import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Phishing URL Detection',
      description: 'Machine learning model using Django to detect and classify phishing URLs with real-time analysis and user-friendly interface.',
      techStack: ['Python', 'Django', 'Machine Learning', 'scikit-learn', 'HTML/CSS'],
      githubUrl: 'https://github.com/zahidhussain',
      liveUrl: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Weather Application',
      description: 'Interactive weather app with real-time data fetching from APIs, location-based forecasts, and responsive design.',
      techStack: ['Python', 'APIs', 'Tkinter', 'JSON', 'Weather APIs'],
      githubUrl: 'https://github.com/zahidhussain',
      liveUrl: '#',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'E-commerce Sales Analysis',
      description: 'Comprehensive data analysis platform using PySpark for processing large-scale e-commerce data and generating insights.',
      techStack: ['PySpark', 'Python', 'Data Analysis', 'Apache Spark', 'Pandas'],
      githubUrl: 'https://github.com/zahidhussain',
      liveUrl: '#',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
              Here are some of my recent projects showcasing my skills in web development, 
              machine learning, and data analysis.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-3xl overflow-hidden card-shadow hover-lift transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Header with Gradient */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:scale-105 transition-bounce"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce px-8"
              onClick={() => window.open('https://github.com/zahidhussain', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;