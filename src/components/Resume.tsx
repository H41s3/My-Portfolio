import { useState, useEffect } from "react";
import { FileText, Download, Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);

  const workExperience = [
    {
      title: "Freelance Software Developer",
      company: "Client Projects",
      duration: "2023",
      bullets: [
        "Built the frontend for a pet-adoption website for a marketing student client at Far Eastern University (Philippines)",
        "Presented to faculty as part of the client's marketing project, with a focus on responsive design and usability"
      ]
    },
    {
      title: "Independent Developer",
      company: "Self-Directed Projects",
      duration: "2023 – Present",
      bullets: [
        "Shipped a production ML-serving API (FastAPI + DistilBERT) with Prometheus/Grafana observability and a 95%-coverage CI gate",
        "Built an NLP-powered resume parser (FastAPI + spaCy) that extracts structured data and scores resumes automatically",
        "Published a cross-platform desktop app to the Microsoft Store with an automated GitHub Actions release pipeline"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Software Engineering (Honours)",
      institution: "Deakin University",
      duration: "Present",
      description: "Currently pursuing a Bachelor of Software Engineering (Honours), focusing on software engineering fundamentals and development methodologies. In parallel, independently studying artificial intelligence, machine learning, and modern web technologies to broaden technical expertise and future-proof my career in software engineering."
    },
    {
      degree: "Diploma of Information Technology",
      institution: "Deakin College",
      duration: "Completed",
      description: "Gained foundational knowledge in information technology, including programming fundamentals, database concepts, and system analysis."
    }
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

    const element = document.querySelector("#resume");
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
    <section id="resume" className="section bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            My Qualifications
          </span>
          <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">
            Resume
          </h2>
          <p className="text-muted-foreground mt-4">
            My educational background and project experience
          </p>
          {/* Add your resume PDF at public/resume.pdf — this link already points there, so it'll start working the moment the file exists. */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center mt-6 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={isVisible ? "animate-slide-in-left" : "opacity-0"} style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-8">
              <div className="p-2 rounded-lg bg-primary/10 mr-4 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-4 before:w-0.5 before:bg-border">
              {workExperience.map((job) => (
                <div 
                  key={`${job.title}-${job.company}`}
                  className="relative pl-10"
                  style={{ animationDelay: `${0.3 + workExperience.indexOf(job) * 0.1}s` }}
                >
                  <div className="absolute left-2 top-1 h-4 w-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-serif font-semibold">{job.title}</h4>
                    <p className="text-primary text-sm mb-2">{job.company}</p>
                    <p className="text-muted-foreground text-xs mb-3">{job.duration}</p>
                    <ul className="list-disc pl-4 text-sm space-y-1">
                      {job.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-card p-6 rounded-xl border border-border">
              <h4 className="text-lg font-serif font-semibold mb-4">Key Skills I'm Developing</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-primary/10 mr-3 mt-0.5 text-primary">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Web Development</p>
                    <p className="text-xs text-muted-foreground">React, TypeScript, Tailwind CSS</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-primary/10 mr-3 mt-0.5 text-primary">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Artificial Intelligence</p>
                    <p className="text-xs text-muted-foreground">Machine Learning and Deep Learning</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-primary/10 mr-3 mt-0.5 text-primary">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Problem Solving</p>
                    <p className="text-xs text-muted-foreground">Algorithmic Thinking, Debugging</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={isVisible ? "animate-slide-in-right" : "opacity-0"} style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center mb-8">
              <div className="p-2 rounded-lg bg-primary/10 mr-4 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-4 before:w-0.5 before:bg-border">
              {education.map((edu) => (
                <div 
                  key={`${edu.degree}-${edu.institution}`}
                  className="relative pl-10"
                  style={{ animationDelay: `${0.5 + education.indexOf(edu) * 0.1}s` }}
                >
                  <div className="absolute left-2 top-1 h-4 w-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/20 transition-all duration-300">
                    <h4 className="text-lg font-serif font-semibold">{edu.degree}</h4>
                    <p className="text-primary text-sm mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground text-xs mb-3">{edu.duration}</p>
                    <p className="text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-card p-6 rounded-xl border border-border">
              <h4 className="text-lg font-serif font-semibold mb-4">Self-Directed Learning</h4>
              <p className="text-sm text-muted-foreground mb-4">Building on my degree with independent study and hands-on project work.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-primary/10 mr-3 mt-0.5 text-primary">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Machine Learning & NLP</p>
                    <p className="text-xs text-muted-foreground">Applied via scikit-learn, spaCy, and PyTorch in personal projects</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-primary/10 mr-3 mt-0.5 text-primary">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Production Backend Engineering</p>
                    <p className="text-xs text-muted-foreground">API design, testing, observability, and deployment with FastAPI</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-primary/10 mr-3 mt-0.5 text-primary">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Full-Stack Delivery</p>
                    <p className="text-xs text-muted-foreground">Shipping and maintaining live apps end to end, from database to UI</p>
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

export default Resume;
