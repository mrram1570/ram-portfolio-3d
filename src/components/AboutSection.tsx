import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="section-padding min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="glass-card p-8 btn-3d">
              <div className="flex items-center space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 animate-glow">
                  <img 
                    src="/src/assets/profile-photo.jpg" 
                    alt="J.RAM Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">J.RAM</h3>
                  <p className="text-lg text-muted-foreground">Full Stack Developer</p>
                  <div className="flex space-x-2 mt-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8 btn-3d">
              <h4 className="text-2xl font-semibold text-foreground mb-4">My Mission</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To secure a challenging position in which I have a lot of interest and knowledge, 
                in a reputed organization to expand my learning, skills and knowledge, through which 
                I can be helpful to the society, my company and myself.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass-card p-8 btn-3d">
              <h4 className="text-2xl font-semibold text-foreground mb-6">Professional Stats</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold gradient-text mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    New
                  </motion.div>
                  <p className="text-muted-foreground">Fresher</p>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold gradient-text mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    5+
                  </motion.div>
                  <p className="text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold gradient-text mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    3+
                  </motion.div>
                  <p className="text-muted-foreground">Technologies</p>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold gradient-text mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    100%
                  </motion.div>
                  <p className="text-muted-foreground">Dedication</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8 btn-3d">
              <h4 className="text-2xl font-semibold text-foreground mb-4">What I Do</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Frontend Development with React & TypeScript</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-muted-foreground">3D Web Experiences with Three.js</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-muted-foreground">Responsive UI/UX Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Database Management with SQL</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}