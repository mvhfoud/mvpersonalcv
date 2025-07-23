import { useState, useEffect } from 'react';

const skillCategories = [
  {
    title: "Langages",
    skills: [
            { name: "Python", level: 90 },

      { name: "Bash/Shell", level: 88 },
      { name: "C++", level: 85 },
      { name: "SQL/NoSQL", level: 88 },
      { name: "Java", level: 70 },
      { name: "Javascript/Typescript", level: 72 },
      { name: "Rust", level: 46 }

    ]
  },
  {
    title: "ML/DL",
    skills: [
      { name: "PyTorch/CUDA", level: 90 },

      { name: "Scikit-learn", level: 85 },
      { name: "TensorBoard/MLflow", level: 80 },
      { name: "Transformers/HF", level: 80 },
      { name: "Diffusers/OpenCV", level: 82 }
    ]
  },
  {
    title: "Ingénieurie logiciel",
    skills: [
      { name: "Programmation orientée objet (POO)", level: 90 },
      { name: "APIs REST/GraphQL", level: 85 },
      { name: "pytest, unittest, CTest", level: 80 },
      { name: "Git, GitLab, GitHub", level: 80 },
      { name: "Docker/Kubernetes", level: 82 },
      { name: "Prometheus/Grafana", level: 78 }
    ]
  },
  {
    title: "Autres",
    skills: [
      { name: "Excel/PowerBi", level: 92 },
      { name: "Unity", level: 80 },
      { name: "CATIAV5", level: 92 },

      { name: "Apache Spark, Kafka", level: 80 },
      { name: "Databricks/Snowflake", level: 78 },

      { name: "GCP", level: 78 },
      { name: "AWS", level: 65 }
    ]
  }
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="cv-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="cv-card p-6 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-cv-skill rounded-full h-2 overflow-hidden">
                      <div 
                        className={`skill-bar ${isVisible ? 'animate-pulse' : ''}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}