import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pet Adoption Front-End",
    description: "A modern pet adoption platform connecting loving homes with pets in need. Features a beautiful UI",
    image: "/pets.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoLink: "https://pets4doption.netlify.app",
    githubLink: "#",
    featured: true
  },
  {
    id: 2,
    title: "Recipe App (Cuisinefy)",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8c2417d1c?q=80&w=1470&auto=format&fit=crop",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
    featured: true
  },
  {
    id: 3,
    title: "Health Tracking Dashboard",
    description: "An intuitive dashboard for health metrics visualization and goal tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    demoLink: "#",
    githubLink: "#",
    featured: false
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
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
            <div 
              key={project.id}
              className={`project-card bg-card ${isVisible ? "animate-slide-in-bottom" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onClick={() => setSelectedProject(project)}
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
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-4xl w-full bg-card rounded-xl shadow-lg overflow-hidden max-h-[90vh] animate-scale">
              <button 
                className="absolute top-4 right-4 z-10 p-1 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 overflow-y-auto max-h-[90vh] md:max-h-none">
                  <h3 className="text-2xl font-serif font-semibold mb-4">{selectedProject.title}</h3>
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
                      <li>Responsive design with optimal user experience on all devices</li>
                      <li>Intuitive and accessible interface with smooth animations</li>
                      <li>Robust backend with secure data management</li>
                      <li>Comprehensive test coverage ensuring reliability</li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2">Challenges & Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      During development, I encountered challenges with performance optimization and data synchronization. I implemented efficient caching strategies and optimized database queries to ensure a smooth user experience even under heavy loads.
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
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
