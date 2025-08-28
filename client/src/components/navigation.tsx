import { useState, useEffect } from "react";
import { Menu, X, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'why-us', 'services', 'categories', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const getNavItemClass = (sectionId: string) => {
    const baseClass = "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group";
    const activeClass = activeSection === sectionId 
      ? "text-white bg-gradient-to-r from-primary to-accent shadow-lg scale-105" 
      : "text-muted-foreground hover:text-primary hover:bg-primary/10";
    return `${baseClass} ${activeClass}`;
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect border-b border-border/20 shadow-lg backdrop-blur-xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300" data-testid="logo">NJK ENTERPRISES</h1>
                <span className="text-xs text-muted-foreground hidden sm:inline opacity-75">"Count on us"</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 bg-white/10 dark:bg-black/10 rounded-2xl p-2 backdrop-blur-sm border border-white/20">
              <button 
                onClick={() => scrollToSection('home')} 
                className={getNavItemClass('home')}
                data-testid="nav-home"
              >
                <span className="relative z-10">Home</span>
                {activeSection === 'home' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg animate-pulse"></div>
                )}
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className={getNavItemClass('about')}
                data-testid="nav-about"
              >
                <span className="relative z-10">About</span>
              </button>
              <button 
                onClick={() => scrollToSection('why-us')} 
                className={getNavItemClass('why-us')}
                data-testid="nav-why-us"
              >
                <span className="relative z-10">Why Us</span>
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className={getNavItemClass('services')}
                data-testid="nav-services"
              >
                <span className="relative z-10">Services</span>
              </button>
              <button 
                onClick={() => scrollToSection('categories')} 
                className={getNavItemClass('categories')}
                data-testid="nav-categories"
              >
                <span className="relative z-10">Categories</span>
              </button>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="nav-cta-contact"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-button"
          >
            <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
              {isMenuOpen ? 
                <X className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" /> : 
                <Menu className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              }
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-3 bg-gradient-to-br from-white/95 to-blue-50/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-xl border-t border-white/20 shadow-lg">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'why-us', label: 'Why Us' },
              { id: 'services', label: 'Services' },
              { id: 'categories', label: 'Categories' },
              { id: 'contact', label: 'Contact' }
            ].map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                    : 'text-muted-foreground hover:text-primary hover:bg-white/50 dark:hover:bg-white/10'
                }`}
                data-testid={`mobile-nav-${item.id}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </div>
              </button>
            ))}
            
            <div className="pt-4 border-t border-white/20">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                data-testid="mobile-nav-cta"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
