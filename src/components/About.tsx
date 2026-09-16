
import { useState, useEffect } from "react";
import { Award, BookOpen, Code, Brain } from "lucide-react";

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
          Software Engineering (Honours) student at Deakin University focused on machine learning, AI, and backend development with Python. I enjoy solving complex problems and building systems that work behind the scenes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <p className="leading-relaxed">
              I'm a software engineering student at Deakin University drawn to machine learning, artificial intelligence, and backend systems. That interest started with a fascination for how intelligent systems solve real-world problems — from automating tasks to making sense of complex data.
            </p>
            <p className="leading-relaxed">
              I build with Python to ship robust backend solutions and experiment with ML models, from a production-grade sentiment analysis API to an NLP-powered resume parser. I've also built full-stack web apps to sharpen those skills end to end, but my real interest is what happens behind the scenes — designing APIs, processing data, and building systems that think.
            </p>
            <p className="leading-relaxed">
              Outside of coding, I keep up with the latest in AI research and tinker with side projects — because even future ML engineers need a break now and then.
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
              <Brain className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">AI & ML Focus</h3>
              <p className="text-sm text-muted-foreground">
                I build intelligent systems that learn and adapt.
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
