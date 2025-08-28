import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "90-day guarantee on all placements",
    "Comprehensive medical checks & aptitude tests",
    "Full computerized system & virtual databank",
    "National & international recruitment expertise"
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/5 to-accent/5 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
        }}
      ></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight" data-testid="hero-title">
              Professional <span className="text-primary">Recruitment</span> & Staffing Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl" data-testid="hero-description">
              We are an assembly of hardworking, experienced, dynamic and dedicated professionals working to provide quality and superior business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                data-testid="button-explore-services"
              >
                Explore Our Services
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 text-lg transition-all duration-200"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <Card className="shadow-xl border border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground" data-testid="hero-card-title">
                  Why Choose NJK Enterprises?
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-muted-foreground" data-testid={`feature-${index}`}>{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
