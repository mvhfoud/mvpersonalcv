import { Building, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Ingénieur Logiciel et IA",
    company: "Dassault Systèmes 3DS",
    website: "https://www.3ds.com",
    period: "Fev 2025 - Aou 2025",
    description: "Stage PFE: Automatisation de la détection et de l'application des matériaux dans des maquettes 3D sous 3DExperience.",
    achievements: [
      "Framework 3D (C++) pour génération automatique de datasets multi-vues haute résolution depuis 3DEXPERIENCE.",
      "Encodeur de matériaux IA entraîné en PyTorch/CUDA (CNN, ViT, CBAM) avec déploiement Docker/Kubernetes et recherche sémantique via Qdrant.",
      "Web app complète (FastAPI + React/Three.js) pour le transfert interactif de matériaux générés par IA (FLUX.1/ControlNet) vers CATIA."
    ]
  },
  {
    title: "Ingénieur de recherche en IA",
    company: "Centre International d'Intelligence Artificielle du Maroc - Ai Movement",
    website: "https://aim.um6p.ma/en/home/",
    period: "Juin 2024 - Aou 2024",
    description: "Développé un modèle de détection 3D de tumeurs à partir de scans multivues, via reconstruction volumique et optimisation par projection 2D.",
    achievements: [
      "Reconstruction 3D de volumes mammaires à partir de scans CC/MLO (NeRF--), avec estimation caméra et export structuré (.npz).",
      "Détection 3D supervisée 2D via RPN custom (PyTorch/CUDA) et entraînement multi-backbone CNN.",
      "Pipeline ML complet avec backend FastAPI, suivi expérimental (MLflow/TensorBoard) et gestion des données."
    ]
  },
  {
    title: "Stage Power BI & IA Génerative",
    company: "TNC.Agency",
    website: "https://www.tnc.agency",
    period: "Juil 2024 - Sept 2024",
    description: "Introduction des modèles d'IA génerative pour les équipes du design, et la conception des dashboard pour les campagnes du marketing",
    achievements: [
      "Conçu et déployé 3 dashboards Power BI interactifs avec ETL/ELT (Azure Data Factory, SQL Server, APIs), réduisant de 70 % les analyses manuelles.",
      "Orchestration d'assets visuels via IA générative (Stable Diffusion XL, FLUX, Pony, ComfyUI) sur Kubernetes/Docker, +50 % de productivité créative."
    ]
  },
  {
    title: "Stage en R&D",
    company: "LEAR Corporation",
    website: "https://www.lear.com",
    period: "Juil 2023 - Aou 2023",
    description: "Stage en ingénierie mécanique appliquée à la sécurité automobile, axé sur la conception 3D de composants plastiques (CATIA V5, NX) et l'analyse de données issues de crash tests.",
    achievements: [
      "Conception 3D de pièces plastiques sur CATIA V5/NX, intégrant les contraintes de production.",
      "Analyse de crash tests pour sièges auto (normes ISO) afin d'optimiser sécurité et confort.",
      "Développé un pipeline Python d'analyse whiplash avec visualisations interactives, réduisant de 15 % les itérations physiques."
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="cv-section bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative grid md:grid-cols-2 gap-8 items-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot md:left-1/2 md:transform md:-translate-x-1/2"></div>
                
                {/* Content */}
                <div className={`cv-card p-6 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8 md:order-2'}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <a 
                        href={exp.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 underline decoration-primary/30 hover:decoration-primary/60"
                      >
                        {exp.company}
                      </a>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}