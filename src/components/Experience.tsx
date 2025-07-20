import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Renu Sharma Foundation',
      duration: 'June 2024 - August 2024',
      type: 'Internship',
      achievements: [
        'Developed responsive web components using React.js and modern CSS frameworks',
        'Collaborated with design team to implement user-friendly interfaces for NGO projects',
        'Optimized website performance resulting in 40% faster loading times'
      ]
    },
    {
      title: 'Python Developer Intern',
      company: 'Motion Cut',
      duration: 'March 2024 - May 2024',
      type: 'Internship',
      achievements: [
        'Built data processing scripts using Python for automated report generation',
        'Implemented API integrations for third-party service connections',
        'Created documentation and testing frameworks for Python modules'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass p-8 rounded-3xl card-shadow hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Icon and Duration */}
                  <div className="lg:shrink-0">
                    <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto lg:mx-0 glow-primary">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div className="mt-4 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <span className="inline-block mt-2 px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-xl text-primary font-semibold flex items-center justify-center lg:justify-start">
                        {exp.company}
                        <ExternalLink className="w-4 h-4 ml-2 opacity-60" />
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;