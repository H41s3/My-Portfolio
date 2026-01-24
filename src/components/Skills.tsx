
import { useState, useEffect } from "react";
import { Monitor, Database, Server, Brain, Code2 } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "scikit-learn", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "Pandas", level: 80 },
        { name: "NumPy", level: 80 },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "Flask/FastAPI", level: 75 },
        { name: "REST APIs", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "Authentication", level: 75 },
      ],
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 80 },
        { name: "Redis", level: 65 },
      ],
    },
    {
      name: "Frontend & Tools",
      icon: <Monitor className="h-6 w-6" />,
      skills: [
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Linux", level: 75 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#skills");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="skills" className="section bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_14px]"></div>
      <div className="container mx-auto relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-4">
            I work with technologies across machine learning, backend development, and data systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className={`bg-card rounded-xl p-6 border border-border ${isVisible ? "animate-slide-in-bottom" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 * (categoryIndex + 1)}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-primary/10 mr-4 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold">{category.name}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${0.1 * (index + 1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 bg-card rounded-xl p-6 border border-border ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <h3 className="text-xl font-serif font-semibold mb-4">All Technologies</h3>
          <div className="flex flex-wrap">
            {skillCategories.flatMap(category => 
              category.skills.map(skill => (
                <span key={skill.name} className="skill-pill">
                  {skill.name}
                </span>
              ))
            )}
            <span className="skill-pill">Jupyter</span>
            <span className="skill-pill">Matplotlib</span>
            <span className="skill-pill">PyTorch</span>
            <span className="skill-pill">OpenAI API</span>
            <span className="skill-pill">RESTful APIs</span>
            <span className="skill-pill">Firebase</span>
            <span className="skill-pill">AWS</span>
            <span className="skill-pill">GitHub Actions</span>
            <span className="skill-pill">C++</span>
            <span className="skill-pill">Data Processing</span>
            <span className="skill-pill">NLP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
