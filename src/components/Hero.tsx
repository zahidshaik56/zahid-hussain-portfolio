import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const handleViewResume = () => {
    // In a real app, this would open the resume PDF in a new tab
    window.open('/resume.pdf', '_blank');
  };

  const handleDownloadResume = () => {
    // In a real app, this would trigger a download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shaik_Zahid_Hussain_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden glass p-2 hover-glow transition-smooth">
              <img
                src={profilePhoto}
                alt="Shaik Zahid Hussain"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Shaik Zahid Hussain</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Frontend Developer & Python Specialist passionate about creating beautiful, 
              functional web applications and data-driven solutions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handleViewResume}
                className="bg-gradient-primary hover:scale-105 transition-bounce text-lg px-8 py-3 glow-primary"
              >
                <ExternalLink className="mr-2" size={20} />
                View Resume
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadResume}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce text-lg px-8 py-3"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;