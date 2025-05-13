
import { useState, useEffect } from "react";
import { Monitor, Database, Server, Layout, Figma, Code2 } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      name: "Frontend",
      icon: <Monitor className="h-6 w-6" />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 75 },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 85 },
        { name: "Python", level: 70 },
        { name: "API Development", level: 85 },
        { name: "Authentication", level: 80 },
      ],
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "SQL", level: 80 },
        { name: "Redis", level: 65 },
      ],
    },
    {
      name: "Tools & Others",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "AWS", level: 65 },
        { name: "Jest", level: 80 },
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
            I've worked with a range of technologies in the web development world, from frontend to backend.
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
            <span className="skill-pill">Redux</span>
            <span className="skill-pill">GraphQL</span>
            <span className="skill-pill">Sass</span>
            <span className="skill-pill">Webpack</span>
            <span className="skill-pill">RESTful APIs</span>
            <span className="skill-pill">Firebase</span>
            <span className="skill-pill">Vercel</span>
            <span className="skill-pill">Netlify</span>
            <span className="skill-pill">GitHub Actions</span>
            <span className="skill-pill">C#</span>
            <span className="skill-pill">C++</span>
            <span className="skill-pill">Arduino</span>
            <span className="skill-pill">Raspberry Pi</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
