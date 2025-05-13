
import { useState, useEffect } from "react";
import { Award, BookOpen, Code, Heart } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.querySelector("#about");
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
    <section id="about" className="section bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_14px]"></div>
      <div className="container mx-auto relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">
            My Journey as a Developer
          </h2>
          <p className="text-muted-foreground mt-4">
            I'm a passionate software engineering student focused on creating elegant and efficient solutions to complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <p className="leading-relaxed">
              I’m a dedicated software engineering student at Deakin University with a strong foundation in modern development practices. My journey began with a curiosity about how technology can solve real-world problems, which inspired me to pursue a career in software development.
            </p>
            <p className="leading-relaxed">
              With a focus on writing clean, maintainable code and crafting intuitive user experiences, I strive to build applications that are both reliable and enjoyable to use. I’m actively expanding my skills in AI, machine learning, and intelligent systems, alongside core software engineering principles.
            </p>
            <p className="leading-relaxed">
              When I’m not coding, you’ll find me keeping up with the latest tech trends, working on personal projects, sharing what I learn with the developer community — or watching cat videos because, well, who doesn’t love cats?
            </p>
          </div>

          <div 
            className={`grid grid-cols-2 gap-6 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="p-6 rounded-xl bg-muted/50 border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <Code className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                I write maintainable, well-documented code following best practices.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-muted/50 border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <Heart className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">User-Focused</h3>
              <p className="text-sm text-muted-foreground">
                I create intuitive experiences that delight users.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-muted/50 border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Always Learning</h3>
              <p className="text-sm text-muted-foreground">
                I continuously expand my knowledge and skills.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-muted/50 border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                I deliver high-quality solutions that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
