import { Code, Database, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Crafting responsive and interactive web applications using modern frameworks',
    },
    {
      icon: Code,
      title: 'Python Scripting',
      description: 'Developing efficient automation tools and data processing solutions',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Building robust data pipelines and analytics solutions for insights',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate <span className="text-primary font-semibold">Frontend Developer</span> and{' '}
                <span className="text-primary font-semibold">Python Specialist</span> currently pursuing my B.Tech in 
                Computer Science Engineering. With a strong foundation in modern web technologies and data engineering, 
                I love creating digital experiences that are both beautiful and functional.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey in technology spans from building responsive web applications using React.js and modern 
                frameworks to developing robust Python solutions for data analysis and automation. I'm particularly 
                interested in the intersection of frontend development and data science, where user experience meets 
                meaningful insights.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or working on personal projects that challenge my skills and creativity.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="glass p-6 rounded-2xl hover-lift hover-glow card-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-xl">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;