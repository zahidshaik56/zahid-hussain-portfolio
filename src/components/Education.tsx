import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {/* Bachelor of Technology */}
            <div className="glass p-8 md:p-12 rounded-3xl card-shadow hover-lift animate-fade-in">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Icon */}
                <div className="bg-gradient-primary p-6 rounded-2xl shrink-0 glow-primary">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>

                {/* Education Details */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Bachelor of Technology
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-4">
                    Computer Science Engineering
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <span className="text-lg font-medium">University:</span>
                        <span className="text-muted-foreground">JNTU Anantapur</span>
                      </div>
                      
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Graduation: 2025</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <span className="text-lg font-medium">CGPA:</span>
                      <span className="text-xl font-bold text-primary">8.5/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intermediate (XII) */}
            <div className="glass p-8 md:p-12 rounded-3xl card-shadow hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Icon */}
                <div className="bg-gradient-primary p-6 rounded-2xl shrink-0 glow-primary">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>

                {/* Education Details */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Intermediate (XII)
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <span className="text-lg font-medium">School:</span>
                        <span className="text-muted-foreground">Penchal Reddy High School</span>
                      </div>
                      
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Year: 2021</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <span className="text-lg font-medium">Location:</span>
                      <span className="text-muted-foreground">Kadapa, Rayachoti</span>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <span className="text-lg font-medium">CGPA:</span>
                      <span className="text-xl font-bold text-primary">82%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SSC (X) */}
            <div className="glass p-8 md:p-12 rounded-3xl card-shadow hover-lift animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Icon */}
                <div className="bg-gradient-primary p-6 rounded-2xl shrink-0 glow-primary">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>

                {/* Education Details */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Secondary School Certificate (X)
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <span className="text-lg font-medium">School:</span>
                        <span className="text-muted-foreground">Sri Raju High School</span>
                      </div>
                      
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">Year: 2019</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <span className="text-lg font-medium">Location:</span>
                      <span className="text-muted-foreground">Kadapa, Rayachoti</span>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <span className="text-lg font-medium">CGPA:</span>
                      <span className="text-xl font-bold text-primary">7.3/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;