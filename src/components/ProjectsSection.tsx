import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function ProjectsSection() {
  const projects = [
    {
      title: "3D Portfolio Website",
      description: "Interactive portfolio with Three.js animations, glassmorphism design, and smooth scroll effects. Built with React, TypeScript, and Framer Motion.",
      technologies: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
      category: "Web Development",
      featured: true
    },
    {
      title: "Responsive Web Application",
      description: "Developed responsive web application using HTML, CSS, and Bootstrap at Ripan Technologies. Focused on clean UI design and cross-device compatibility.",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      category: "Frontend Development",
      featured: false
    },
    {
      title: "Database Management System",
      description: "SQL-based project for efficient data management with optimized queries and normalized database structure.",
      technologies: ["SQL", "Database Design", "Data Modeling"],
      category: "Database",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my technical skills through real-world applications and creative solutions
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`glass-card p-8 btn-3d overflow-hidden relative ${
                project.featured ? 'border-primary border-2' : ''
              }`}>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                )}

                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-3xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 0.5 + (index * 0.1) + (techIndex * 0.1) 
                            }}
                            viewport={{ once: true }}
                            className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button 
                        className="btn-3d bg-primary hover:bg-primary/90 text-primary-foreground"
                        size="lg"
                      >
                        View Project
                      </Button>
                      <Button 
                        variant="outline" 
                        className="btn-3d border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        size="lg"
                      >
                        View Code
                      </Button>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                        {/* Animated placeholder for project preview */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                        
                        {/* 3D floating elements */}
                        <motion.div
                          className="absolute top-4 left-4 w-8 h-8 bg-primary rounded-lg"
                          animate={{ 
                            rotateY: [0, 360],
                            y: [0, -10, 0]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.div
                          className="absolute bottom-4 right-4 w-6 h-6 bg-secondary rounded-full"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            x: [0, 10, 0]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        />
                        <motion.div
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent/50 rounded-xl"
                          animate={{ 
                            rotateZ: [0, 180, 360],
                            scale: [1, 0.8, 1]
                          }}
                          transition={{ 
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                        />
                        
                        <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                          💻
                        </div>
                      </div>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}