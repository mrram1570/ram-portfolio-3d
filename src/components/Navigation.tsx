import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold gradient-text"
            >
              J.RAM
            </motion.div>
            
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3 }}
                >
                  <Button
                    variant={activeSection === item.id ? "default" : "ghost"}
                    onClick={() => onSectionClick(item.id)}
                    className={`btn-3d relative ${
                      activeSection === item.id 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary rounded-md -z-10"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}