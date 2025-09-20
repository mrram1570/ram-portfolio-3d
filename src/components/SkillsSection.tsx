import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function SkillsSection() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C Programming", "Java Developer", "JavaScript ES6+", "TypeScript"],
      color: "from-primary to-primary/70",
      icon: "💻"
    },
    {
      category: "Web Technologies", 
      items: ["HTML5", "CSS3", "Bootstrap", "React.js", "Three.js"],
      color: "from-secondary to-secondary/70",
      icon: "🌐"
    },
    {
      category: "Database & Tools",
      items: ["SQL Basics", "Git", "VS Code", "Responsive Design"],
      color: "from-accent to-accent/70",
      icon: "🛠️"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="section-padding min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            My Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={cardVariants}
              className="group"
            >
              <Card className="glass-card p-8 h-full btn-3d border-0 overflow-hidden relative">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={{ 
                      rotateY: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {skill.category}
                  </h3>
                  
                  <div className="space-y-3">
                    {skill.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.3 + (index * 0.1) + (itemIndex * 0.1) 
                        }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 group/item"
                      >
                        <motion.div 
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Skill level indicator */}
                  <div className="mt-6">
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 0.5 + (index * 0.2) }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Proficiency Level
                    </p>
                  </div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full opacity-30`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}