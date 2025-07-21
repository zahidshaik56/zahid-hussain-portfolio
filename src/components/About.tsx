import { Code, Database, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Crafting responsive and interactive web applications using modern frameworks',
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
                I am a fresh graduate with a Bachelor of Technology in Computer Science Engineering, and a keen interest in Frontend Development and Python programming. Having a good foundation in new web technologies and data engineering, I enjoy building responsive and easy-to-use web applications and in creating Python-based solutions for data automation and analysis.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Throughout my academic career, I created several personal and academic projects using React.js, HTML/CSS, and JavaScript, and used Python for backend development and data analysis. I am specially interested in the convergence of frontend development and data science, which brings design, functionality, and insights together.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As a new graduate, I have a curious mind, a quick learning capacity, and a genuine passion to use coding to solve real-world problems. I am always exploring new technologies, working on open-source projects, and tackling challenges that challenge me creatively and technically.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm interested in opportunities to develop as a developer, learn alongside experienced teams, and help build meaningful digital solutions.
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