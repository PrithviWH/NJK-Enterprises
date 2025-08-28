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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl shadow-xl border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl group-hover:shadow-primary/25">
                  <Users className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-opacity duration-300"></div>
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-primary to-accent dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300" data-testid="logo">
                  NJK ENTERPRISES
                </h1>
                <span className="text-xs text-muted-foreground/80 hidden sm:inline font-medium tracking-wide">"Count on us"</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="flex items-center space-x-1 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 backdrop-blur-xl shadow-2xl border border-white/30 dark:border-gray-700/50">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'why-us', label: 'Why Us' },
                  { id: 'services', label: 'Services' },
                  { id: 'categories', label: 'Categories' }
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className={`relative px-6 py-3 text-sm font-medium rounded-full transition-all duration-500 ease-in-out overflow-hidden group ${
                      activeSection === item.id 
                        ? 'text-white shadow-lg transform scale-105' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:scale-105'
                    }`}
                    data-testid={`nav-${item.id}`}
                  >
                    {/* Active background with smooth animation */}
                    {activeSection === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x rounded-full"></div>
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Text */}
                    <span className="relative z-10 font-semibold tracking-wide">{item.label}</span>
                    
                    {/* Active indicator dot */}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Floating background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden lg:block">
            <div className="relative group">
              <Button
                onClick={() => scrollToSection('contact')}
                className="relative bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-3 rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 font-semibold tracking-wide overflow-hidden"
                data-testid="nav-cta-contact"
              >
                <span className="relative z-10">Get In Touch</span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
              
              {/* Button glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-300 scale-150"></div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl border border-white/30 dark:border-gray-700/50 flex items-center justify-center group hover:scale-110 transition-all duration-300"
              data-testid="mobile-menu-button"
            >
              <div className={`transition-all duration-500 ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`}>
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                ) : (
                  <Menu className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                )}
              </div>
              
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-700 ease-in-out transform ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-4 opacity-0 invisible'
        }`}>
          <div className="mx-4 mt-2 mb-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/50 overflow-hidden">
            <div className="px-6 py-8 space-y-2">
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
                  className={`w-full text-left px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-500 transform hover:scale-[1.02] group relative overflow-hidden ${
                    activeSection === item.id 
                      ? 'text-white shadow-xl' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                  }`}
                  data-testid={`mobile-nav-${item.id}`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.5s ease-out ${index * 0.1}s`
                  }}
                >
                  {/* Active/Hover background */}
                  {activeSection === item.id ? (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x rounded-2xl"></div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="tracking-wide">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg"></div>
                    )}
                  </div>
                </button>
              ))}
              
              <div className="pt-6 mt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white py-4 rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-500 transform hover:scale-105 font-semibold tracking-wide text-lg group overflow-hidden relative"
                  data-testid="mobile-nav-cta"
                >
                  <span className="relative z-10">Get In Touch</span>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
