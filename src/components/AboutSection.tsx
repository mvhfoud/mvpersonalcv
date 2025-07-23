import { MapPin, Calendar, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="cv-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Curieux et polyvalent, j’aborde plusieurs sujets en parallèle, capable aussi bien de concevoir des modèles d’IA adaptés à des besoins métiers concrets et de les déployer en production selon les bonnes pratiques, que de travailler sur des approches innovantes en recherche, en concevant des architectures et des pipelines IA rigoureusement testés dans une démarche scientifique. Mon expertise en développement backend me permet de comprendre finement les contextes applicatifs, de structurer les bons flux de données et d’assurer les transformations nécessaires pour exploiter au mieux les modèles d’IA.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je suis actuellement à la recherche d’un CDI ou d’une alternance dans les domaines du machine learning, deep learning, data science ou du software engineering. Que ce soit pour développer des solutions logicielles robustes, concevoir des modèles intelligents ou analyser des flux de données complexes au sein de pipelines bien structurés, je suis prêt à m’investir pleinement dans un environnement technique stimulant, où je pourrai apprendre, construire et innover.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-foreground">Localisation</h3>
                <p className="text-muted-foreground">Ile-de-france, France</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-foreground">Experience</h3>
                <p className="text-muted-foreground">+1 Année</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-foreground">Projects</h3>
                <p className="text-muted-foreground">6+ Réalisés</p>
              </div>
            </div>
          </div>
          
          <div className="cv-card p-8 animate-scale-in">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium text-foreground">Youssef MAHFOUD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Age:</span>
                    <span className="font-medium text-foreground">22</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium text-primary">youssefmahartiste@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-medium text-foreground">07 45 50 23 49</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages:</span>
                    <span className="font-medium text-foreground">Anglais, Français, Espagnole, Arabe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}