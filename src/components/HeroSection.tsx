import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen cv-gradient-bg flex items-center justify-center text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary-glow to-accent blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-accent to-primary blur-3xl"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            Youssef MAHFOUD
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-primary-glow font-light">
            Software Engineer & Data Scientist
          </p>
          <p className="text-lg md:text-xl mb-4 text-gray font-light">
            (Website Still under Contruction)
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Passionné par l’intelligence artificielle et le développement logiciel, avec un intérêt particulier pour la vision par ordinateur, l’optimisation de modèles et l’intégration de systèmes intelligents.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>

          <div className="flex gap-4">
            <a href="https://github.com/mvhfoud" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full w-12 h-12 p-0"
              >
                <Github size={20} />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/youssef-mahfoud-b213381b3/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full w-12 h-12 p-0"
              >
                <Linkedin size={20} />
              </Button>
            </a>
            <a href="mailto:youssefmahartiste@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full w-12 h-12 p-0"
              >
                <Mail size={20} />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
