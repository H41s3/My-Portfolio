
import { useState, useEffect } from "react";
import { Terminal, Smartphone, GraduationCap } from "lucide-react";

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
          <span className="section-label">// about</span>
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
            className={isVisible ? "animate-slide-in-right" : "opacity-0"}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-5">
                Currently
              </p>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="p-2 rounded-lg bg-primary/10 mr-4 text-primary shrink-0">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Shipping ML & backend systems</p>
                    <p className="text-sm text-muted-foreground">A production sentiment analysis API and an NLP-powered resume parser</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-2 rounded-lg bg-primary/10 mr-4 text-primary shrink-0">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Learning iOS development</p>
                    <p className="text-sm text-muted-foreground">Building a SwiftUI app, still in progress</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-2 rounded-lg bg-primary/10 mr-4 text-primary shrink-0">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Finishing my degree</p>
                    <p className="text-sm text-muted-foreground">Bachelor of Software Engineering (Honours) at Deakin University</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
