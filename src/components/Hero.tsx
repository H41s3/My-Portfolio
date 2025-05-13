
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-background to-muted pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Software Engineer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              <span className="block">Hi, I'm </span>
              <span className="text-primary">Emilio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Building clean, user-focused software with thoughtful design and working with AI, Machine Learning, and Intelligent Systems.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -left-4 -top-4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-slow"></div>
            <div className="relative p-8 rounded-2xl glass-dark animate-float">
              <div className="p-2 bg-primary/10 rounded-lg mb-4 w-max">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <div className="space-y-3 font-mono text-left text-sm">
                <div className="flex">
                  <span className="text-blue-400">const</span>
                  <span className="text-white ml-2">developer</span>
                  <span className="text-white ml-2">=</span>
                  <span className="text-white ml-2">{'{'}</span>
                </div>
                <div className="flex ml-4">
                  <span className="text-green-400">name:</span>
                  <span className="text-orange-300 ml-2">'Emilio'</span><span className="text-white">,</span>
                </div>
                <div className="flex ml-4">
                  <span className="text-green-400">skills:</span>
                  <span className="text-white ml-2">[</span>
                  <span className="text-orange-300">'React'</span><span className="text-white">,</span>
                  <span className="text-orange-300 ml-1">'TypeScript'</span><span className="text-white">,</span>
                  <span className="text-orange-300 ml-1">'UI/UX'</span>
                  <span className="text-white">]</span><span className="text-white">,</span>
                </div>
                <div className="flex ml-4">
                  <span className="text-green-400">passion:</span>
                  <span className="text-orange-300 ml-2">'Building amazing web experiences'</span>
                </div>
                <div className="text-white">{'}'}</div>
                <div className="flex mt-2">
                  <span className="text-purple-400">function</span>
                  <span className="text-yellow-300 ml-2">createImpact</span>
                  <span className="text-white">()</span>
                  <span className="text-white ml-2">{'{'}</span>
                </div>
                <div className="text-green-300 ml-4">// Let's build something great together</div>
                <div className="text-white">{'}'}</div>
              </div>
              <div className="flex space-x-2 mt-6">
                <div className="h-6 w-16 bg-primary/20 rounded-full"></div>
                <div className="h-6 w-16 bg-primary/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="mb-2">Scroll down</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
