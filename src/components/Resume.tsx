import { Download, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
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
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Download my comprehensive resume to learn more about my skills, experience, 
              and academic background.
            </p>
          </div>

          {/* Resume Card */}
          <div className="glass p-12 rounded-3xl card-shadow hover-lift animate-fade-in">
            <div className="flex flex-col items-center space-y-8">
              {/* Resume Icon */}
              <div className="bg-gradient-primary p-8 rounded-full glow-primary">
                <FileText className="w-16 h-16 text-white" />
              </div>

              {/* Resume Info */}
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Shaik Zahid Hussain</h3>
                <p className="text-xl text-primary font-semibold mb-6">
                  Frontend Developer & Python Specialist
                </p>
                <div className="text-muted-foreground space-y-2">
                  <p>• Comprehensive overview of technical skills and projects</p>
                  <p>• Detailed work experience and internship achievements</p>
                  <p>• Academic background and certifications</p>
                  <p>• Contact information and professional links</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <Button
                  size="lg"
                  onClick={handleViewResume}
                  className="flex-1 bg-gradient-primary hover:scale-105 transition-bounce text-lg py-6 glow-primary"
                >
                  <ExternalLink className="mr-3" size={20} />
                  View Resume
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadResume}
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce text-lg py-6"
                >
                  <Download className="mr-3" size={20} />
                  Download PDF
                </Button>
              </div>

              {/* Additional Info */}
              <div className="text-sm text-muted-foreground mt-6">
                Last updated: December 2024 • File size: ~250KB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;