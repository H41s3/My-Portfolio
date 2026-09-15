import { useState, useEffect } from "react";
import { ChevronsDown, ChevronsUp, ExternalLink, Github } from "lucide-react";
import { createPortal } from "react-dom";

const projects = [
  {
    id: 1,
    title: "Sentiment Analysis API",
    description: "A production ML-serving API using FastAPI and quantized DistilBERT, with request-scoped async offloading so CPU-bound inference never blocks the event loop.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop",
    tags: ["FastAPI", "PyTorch", "Hugging Face", "Docker", "Prometheus", "Grafana"],
    demoLink: "https://sentiment-api-nv4e.onrender.com/docs",
    demoLabel: "API Docs",
    githubLink: "https://github.com/H41s3/sentiment-api",
    featured: true,
    keyFeatures: [
      "Layered production ML-serving API (FastAPI + quantized DistilBERT) with request-scoped async offloading",
      "Strict Pydantic API contracts, opt-in API-key auth, and per-key rate limiting with a Redis-backed distributed counter",
      "Full observability with custom Prometheus metrics, provisioned Grafana dashboards, and a 358-test suite enforced by a 95% coverage gate in CI",
      "336 incrementally-scoped commits documenting the full build, deploy, and debugging history"
    ],
    challenges: "Debugged a real production memory crash under a hard 512MB deployment ceiling — isolated the root cause, tested three fix candidates, and verified the final result at ~442MB stable against live platform metrics. Also fixed a multi-worker rate-limit drift bug with a Redis-backed distributed counter."
  },
  {
    id: 2,
    title: "p1p — Desktop Companion App",
    description: "A BB-8-style system tray companion that sends gentle wellness nudges throughout the workday — stretch reminders, hydration prompts, and motivational boosts. Packaged for Windows and Mac and published on the Microsoft Store.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop",
    tags: ["Electron", "JavaScript", "HTML/CSS", "GitHub Actions", "electron-builder"],
    demoLink: "https://apps.microsoft.com/search?query=p1p",
    demoLabel: "Microsoft Store",
    featured: true,
    keyFeatures: [
      "BB-8-style system tray companion with stretch, hydration, and motivational wellness nudges",
      "Packaged for Windows and Mac using electron-builder",
      "Automated Microsoft Store builds via a GitHub Actions CI/CD pipeline",
      "Originally built as a personal gift, then polished and published publicly after real-world testing"
    ],
    challenges: "Shipping a personal tray app to the Microsoft Store meant treating packaging and release as first-class work. I automated Windows and Mac builds with electron-builder and GitHub Actions so store submissions stayed repeatable instead of being a one-off local process."
  },
  {
    id: 3,
    title: "Lvo — Emotional Clarity AI",
    description: "A personal AI companion built with React, Vite, and Tailwind CSS, using the OpenAI API to help users work through feelings with clearer, more grounded conversations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Vite", "Tailwind CSS", "OpenAI API"],
    demoLink: "https://lyai.netlify.app",
    githubLink: "https://github.com/H41s3/LYO",
    featured: true,
    keyFeatures: [
      "Conversational UI focused on emotional clarity rather than generic chatbot replies",
      "React + Vite frontend styled with Tailwind CSS",
      "OpenAI API integration for contextual, supportive responses",
      "Deployed live on Netlify for easy sharing and iteration"
    ],
    challenges: "The main challenge was shaping an AI experience that felt personal and emotionally useful without becoming noisy or generic. I focused the prompt design and interface on short, clear conversations so the product stayed approachable while still using a capable model."
  },
  {
    id: 4,
    title: "Pet Adoption Front-End",
    description: "A modern pet adoption platform connecting loving homes with pets in need. Features a beautiful UI",
    image: "/pets.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoLink: "https://p3tpals.netlify.app",
    githubLink: "https://github.com/H41s3/Pet-Pals.git",
    featured: false,
    keyFeatures: [
      "Responsive design with optimal user experience on all devices",
      "Intuitive and accessible interface with smooth animations",
      "Clean, scalable component structure using React and TypeScript"
    ],
    challenges: "During development, a key challenge was ensuring consistent responsiveness and accessibility across a range of devices and screen sizes while maintaining a clean and visually appealing interface. I addressed this by implementing a mobile-first design approach, utilizing Tailwind CSS’s utility classes effectively, and refining animations to balance smoothness and performance. Additionally, I optimized the component structure to improve maintainability and scalability for future feature additions."
  },
  {
    id: 5,
    title: "Recipe App (Cuisinefy)",
    description: "A responsive recipe management application built with React and styled using Tailwind CSS. Cuisinefy allows users to browse, search, and save their favorite recipes through an intuitive, modern interface. The app integrates the Edamam API to fetch real-time recipe data based on user input.",
    image: "/cuisinefy.png",
    tags: ["React", "Tailwind CSS", "API"],
    demoLink: "https://cu1sinefy.netlify.app/",
    githubLink: "https://github.com/H41s3/cuisinefyy.git",
    featured: false,
    keyFeatures: [
      "Dynamic recipe search with multiple filters",
      "Personalized recipe recommendations",
      "Ingredient-based recipe suggestions",
      "Nutrition information display"
    ],
    challenges: "The main challenge was optimizing API calls to the Edamam service while providing a seamless user experience. I implemented debouncing for search queries and local storage caching to reduce API usage and improve response times."
  }
];

const INITIAL_VISIBLE_COUNT = 1;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, INITIAL_VISIBLE_COUNT);
  const hasHiddenProjects = projects.length > INITIAL_VISIBLE_COUNT;

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

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

    const element = document.querySelector("#projects");
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
    <section id="projects" className="section bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4">
            A showcase of my best work, highlighting my technical skills and problem-solving abilities.
          </p>
        </div>

        <div
          id="more-projects"
          className={showAllProjects
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "grid grid-cols-1 max-w-md mx-auto gap-8"}
        >
          {visibleProjects.map((project, index) => (
            <button 
              key={project.id}
              className={`project-card bg-card w-full text-left ${isVisible || showAllProjects ? "animate-slide-in-bottom" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onClick={() => setSelectedProject(project)}
              tabIndex={0}
              aria-label={`View details of ${project.title}`}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden bg-white">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain p-4"
                />
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="skill-pill text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <a 
                    href={project.demoLink} 
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.demoLabel ?? "Live Demo"} <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <Github className="h-4 w-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {hasHiddenProjects && (
          <div className={`flex justify-center mt-10 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <button
              type="button"
              onClick={() => setShowAllProjects((open) => !open)}
              className="group p-3 rounded-full text-primary hover:bg-primary/10 transition-colors"
              aria-expanded={showAllProjects}
              aria-controls="more-projects"
              aria-label={showAllProjects ? "Hide additional projects" : "Show all projects"}
            >
              {showAllProjects ? (
                <ChevronsUp className="h-8 w-8 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronsDown className="h-8 w-8 animate-bounce transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}

        {selectedProject && mounted && createPortal(
          <>
            <button 
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[99999] overflow-hidden"
              onClick={() => setSelectedProject(null)}
              style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0,
                isolation: 'isolate'
              }}
              aria-label="Close project details"
            />
            <div 
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
              style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0,
                isolation: 'isolate'
              }}
            >
              <dialog 
                className="relative w-full max-w-4xl bg-card rounded-xl shadow-lg my-4 max-h-[90vh] overflow-hidden" 
                style={{ isolation: 'isolate' }}
                aria-labelledby="modal-title"
                open
              >
                <button 
                  className="absolute top-4 right-4 z-[10000] p-1 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                  <div className="relative h-full">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-8rem)] scroll-smooth">
                    <h3 id="modal-title" className="text-2xl font-serif font-semibold mb-4">{selectedProject.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {selectedProject.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="skill-pill"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Key Features</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {selectedProject.keyFeatures.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Challenges & Solutions</h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedProject.challenges}
                      </p>
                    </div>
                    
                    <div className="flex gap-4 mt-8">
                      <a 
                        href={selectedProject.demoLink} 
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {selectedProject.demoLabel ? `View ${selectedProject.demoLabel}` : "View Live Demo"} <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                      {selectedProject.githubLink && (
                        <a 
                          href={selectedProject.githubLink} 
                          className="inline-flex items-center justify-center px-4 py-2 border border-primary text-sm font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code <Github className="h-4 w-4 ml-2" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          </>,
          document.body
        )}
      </div>
    </section>
  );
};

export default Projects;
