import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'React.js Certification',
      issuer: 'FreeCodeCamp',
      date: 'March 2024',
      credentialId: 'FCC-001234',
      description: 'Comprehensive certification covering React fundamentals, hooks, state management, and modern React patterns.',
      skills: ['React.js', 'JavaScript', 'Component Architecture', 'State Management']
    },
    {
      title: 'Python for Data Science',
      issuer: 'Coursera',
      date: 'January 2024',
      credentialId: 'COURSERA-5678',
      description: 'Advanced certification in Python programming for data analysis, visualization, and machine learning.',
      skills: ['Python', 'Data Analysis', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      title: 'Frontend Web Development',
      issuer: 'Udemy',
      date: 'November 2023',
      credentialId: 'UDEMY-9012',
      description: 'Complete frontend development course covering HTML5, CSS3, JavaScript ES6+, and responsive design.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass p-8 rounded-3xl card-shadow hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Certificate Icon */}
                <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto mb-6 glow-primary">
                  <Award className="w-8 h-8 text-white" />
                </div>

                {/* Certificate Details */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  
                  <div className="space-y-2">
                    <p className="text-primary font-semibold flex items-center justify-center">
                      {cert.issuer}
                      <ExternalLink className="w-4 h-4 ml-2 opacity-60" />
                    </p>
                    
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Certifications;