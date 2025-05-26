import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { createPortal } from "react-dom";

const projects = [
  {
    id: 1,
    title: "Pet Adoption Front-End",
    description: "A modern pet adoption platform connecting loving homes with pets in need. Features a beautiful UI",
    image: "/pets.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoLink: "https://pets4doption.netlify.app",
    githubLink: "#",
    featured: true,
    keyFeatures: [
      "Advanced search and filtering system for pets",
      "Real-time pet availability updates",
      "Interactive pet profile galleries",
      "Responsive design for all devices"
    ],
    challenges: "A key challenge was implementing the real-time pet availability system while maintaining optimal performance. I solved this by implementing efficient state management and data caching strategies, reducing unnecessary re-renders and API calls."
  },
  {
    id: 2,
    title: "Recipe App (Cuisinefy)",
    description: "A responsive recipe management application built with React and styled using Tailwind CSS. Cuisinefy allows users to browse, search, and save their favorite recipes through an intuitive, modern interface. The app integrates the Edamam API to fetch real-time recipe data based on user input.",
    image: "/cuisinefy.png",
    tags: ["React", "Tailwind CSS", "API"],
    demoLink: "#",
    githubLink: "#",
    featured: true,
    keyFeatures: [
      "Dynamic recipe search with multiple filters",
      "Personalized recipe recommendations",
      "Ingredient-based recipe suggestions",
      "Nutrition information display"
    ],
    challenges: "The main challenge was optimizing API calls to the Edamam service while providing a seamless user experience. I implemented debouncing for search queries and local storage caching to reduce API usage and improve response times."
  },
  {
    id: 3,
    title: "Health Tracking Dashboard",
    description: "An intuitive dashboard for health metrics visualization and goal tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    demoLink: "#",
    githubLink: "#",
    featured: false,
    keyFeatures: [
      "Interactive data visualization with D3.js",
      "Custom goal setting and tracking",
      "Progress analytics and reporting",
      "Real-time health metric updates"
    ],
    challenges: "Developing complex data visualizations that remained performant with large datasets was challenging. I implemented data aggregation on the backend and progressive loading techniques to maintain smooth interactions even with extensive historical data."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <button 
              key={project.id}
              className={`project-card bg-card w-full text-left ${isVisible ? "animate-slide-in-bottom" : "opacity-0"}`}
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
                  >
                    Live Demo <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code <Github className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </button>
          ))}
        </div>

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
                      >
                        View Live Demo <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                      <a 
                        href={selectedProject.githubLink} 
                        className="inline-flex items-center justify-center px-4 py-2 border border-primary text-sm font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors"
                      >
                        View Code <Github className="h-4 w-4 ml-2" />
                      </a>
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
