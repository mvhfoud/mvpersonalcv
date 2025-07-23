import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [

  {
    degree: "Master informatique: Systèmes interactifs, intelligents et autonomes",
    school: "IMT-Atlantique / BretagneINP-Enib, Brest",
    period: "2025 (en cours)",
    gpa: "Formation en cours",
    description: "Spécialisation recherche orientée IA, interaction homme-machine, robotique, systèmes multi-agents et apprentissage automatique. Formation sélective axée sur l'autonomie en recherche, l'implémentation de systèmes intelligents et la validation scientifique.",
    achievements: [
    "Réalisé des projets de recherche appliqué en interaction homme-machine, robotique et IA supervisé par des chercheurs de l'IMT et l'ENIB.",
    "Développé des systèmes interactifs immersifs en réalité virtuelle/augmentée (Unity, capteurs, agents autonomes).",
    "Mis en œuvre des méthodes d’apprentissage automatique et de Deep Learning appliquées à la perception, au dialogue et à la prise de décision autonome."
  ]
  },
  {
    degree: "Cycle d'ingénieur en IA & Data Science et le Genie Industriel",
    school: "ENSAM, Meknès",
    period: "2024",
    gpa: "En cours",
    description: "Formation en Génie Industriel – Option IA & Data Science, combinant l’optimisation des systèmes industriels avec l’intelligence artificielle et l’analyse de données.",
    achievements: [
      "Fondamentaux en IA et Data Science",
      "Projets pratiques d'analyse de données",
      "Bases solides en statistiques et developement d'Apis"
    ]
  },
  {
    degree: "Années préparatoires integrées",
    school: "ENSAM, Meknès",
    period: "2022",
    gpa: "Diplômé",
    description: "Années préparatoires integrées en Mathématiques, Physique et Informatique",
    achievements: [
      "Maîtrise des bases de données et SQL",
      "Maîtrise des Algorithmes et structures en C++",
      "Fondamentaux de statistiques"
    ]
  }
];

const certifications = [
  {
    title: "Deep Learning Fundamentals",
    issuer: "Formation spécialisée",
    date: "2024",
    credentialId: "Réseaux de neurones, TensorFlow, Keras"
  },
  {
    title: "Machine Learning Fundamentals",
    issuer: "Formation spécialisée",
    date: "2024",
    credentialId: "Algorithmes ML, Scikit-learn, Python"
  },
  {
    title: "Big Data 101 & Hadoop 101",
    issuer: "Formation Big Data",
    date: "2023",
    credentialId: "Écosystème Hadoop, HDFS, Architecture distribuée"
  },
  {
    title: "MapReduce and YARN",
    issuer: "Formation Big Data",
    date: "2023",
    credentialId: "Traitement parallèle, Gestion des ressources"
  },
  {
    title: "Applied Data Science with R",
    issuer: "Formation Data Science",
    date: "2023",
    credentialId: "R Programming, Analyse statistique, Visualisation"
  }
];

export function EducationSection() {
  return (
    <section id="education" className="cv-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <GraduationCap className="text-primary" size={28} />
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="cv-card p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-semibold">{edu.school}</p>
                      <div className="flex items-center gap-4 text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <span>•</span>
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Award className="text-primary" size={28} />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="cv-card p-6 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground">{cert.title}</h4>
                      <p className="text-primary font-semibold">{cert.issuer}</p>
                      <p className="text-muted-foreground text-sm">Issued: {cert.date}</p>
                      <p className="text-muted-foreground text-sm">ID: {cert.credentialId}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Skills */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6 text-foreground">Languages & Additional Skills</h4>
              <div className="cv-card p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Languages</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>Français (Natif)</li>
                      <li>Anglais (Courant)</li>
                      <li>Espagnole (Débutant)</li>

                      <li>Arabe (Natif)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Centres d'intérêt</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>Badminton, ping-pong</li>
                      <li>Vélo</li>
                      <li>Échecs et jeux de stratégie</li>
                    </ul>
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