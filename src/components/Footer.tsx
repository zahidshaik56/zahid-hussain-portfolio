import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/zahidhussain',
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/zahidhussain',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:zahidhussain@example.com',
      color: 'hover:text-green-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Shaik Zahid Hussain
              </h3>
              <p className="text-muted-foreground">
                Frontend Developer & Python Specialist
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  className={`p-3 rounded-full hover-lift transition-bounce ${social.color}`}
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </Button>
              ))}
            </div>

            {/* Back to Top */}
            <Button
              variant="outline"
              onClick={scrollToTop}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce"
            >
              Back to Top ↑
            </Button>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-primary"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span>© 2024 Shaik Zahid Hussain. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>

            <div className="text-xs">
              <span>Last updated: December 2024</span>
            </div>
          </div>

          {/* Easter Egg */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground/50">
              "Code is poetry written in logic" - Zahid
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;