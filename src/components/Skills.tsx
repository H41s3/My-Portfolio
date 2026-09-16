
import { useState, useEffect } from "react";
import { Monitor, Database, Server, Brain } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "spaCy", "Pandas", "NumPy"],
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Python", "FastAPI", "Flask", "REST APIs", "Node.js", "Pydantic", "Authentication"],
    },
    {
      name: "Database & Infra",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB", "SQL", "Redis", "Docker", "Supabase"],
    },
    {
      name: "Frontend & Tooling",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Git", "GitHub Actions", "Linux"],
    },
  ];

  const alsoUsed = ["Jupyter", "Matplotlib", "OpenAI API", "Firebase", "AWS", "C++", "Swift", "NLP", "Prometheus", "Grafana"];

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
            Software engineering covers a lot of ground — mine is machine learning and AI, backed by solid backend and full-stack fundamentals.
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
              <div className="flex flex-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 bg-card rounded-xl p-6 border border-border ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <h3 className="text-xl font-serif font-semibold mb-4">Also Worked With</h3>
          <div className="flex flex-wrap">
            {alsoUsed.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
