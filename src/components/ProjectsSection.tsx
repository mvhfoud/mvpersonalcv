import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Analyse du Churn Client – Secteur Télécom",
    description: "Conception et implémentation d'un modèle prédictif de churn client à partir d'un jeu de données de 7 000+ clients. Optimisation des performances (AUC 0.82) et développement d'un tableau de bord interactif sous Streamlit.",
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit", "Plotly"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "#",
    live: "https://churn-analysis-dashboard.streamlit.app"
  },
  {
    title: "Dashboard de Suivi des Performances Commerciales",
    description: "Développement d'un tableau de bord interactif sous Power BI pour analyser et suivre les performances commerciales en temps réel. Intégration de sources de données multiples via SQL et DAX.",
    tech: ["Power BI", "SQL", "DAX", "Excel", "ETL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "#",
    live: "#"
  }
];

export function ProjectsSection() {
  return 
  //   <section id="projects" className="cv-section bg-muted/30">
  //     <div className="max-w-6xl mx-auto">
  //       <div className="text-center mb-16">
  //         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Projects</h2>
  //         <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
  //       </div>
        
  //       <div className="grid md:grid-cols-2 gap-8">
  //         {projects.map((project, index) => (
  //           <div 
  //             key={index}
  //             className="project-card p-6 group animate-fade-in-up"
  //             style={{ animationDelay: `${index * 0.2}s` }}
  //           >
  //             <div className="relative overflow-hidden rounded-lg mb-6">
  //               <img 
  //                 src={project.image} 
  //                 alt={project.title}
  //                 className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
  //               />
  //               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
  //                 <div className="flex gap-2">
  //                   <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
  //                     <Github size={16} className="mr-1" />
  //                     Code
  //                   </Button>
  //                   <Button 
  //                     size="sm" 
  //                     variant="secondary" 
  //                     className="bg-white/20 text-white border-white/30 hover:bg-white/30"
  //                     onClick={() => window.open(project.live, '_blank')}
  //                   >
  //                     <ExternalLink size={16} className="mr-1" />
  //                     Live
  //                   </Button>
  //                 </div>
  //               </div>
  //             </div>
              
  //             <div className="space-y-4">
  //               <div className="flex items-start gap-3">
  //                 <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
  //                   <Code className="text-white" size={20} />
  //                 </div>
  //                 <div>
  //                   <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
  //                     {project.title}
  //                   </h3>
  //                 </div>
  //               </div>
                
  //               <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
  //               <div className="flex flex-wrap gap-2">
  //                 {project.tech.map((tech, techIndex) => (
  //                   <span 
  //                     key={techIndex}
  //                     className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
  //                   >
  //                     {tech}
  //                   </span>
  //                 ))}
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}