import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Shield, Award, Globe } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Shield, text: "90-day guarantee on all placements" },
    { icon: Users, text: "Comprehensive medical checks & aptitude tests" },
    { icon: Globe, text: "Fully computerized office system & virtual databank" },
    { icon: Award, text: "National & international recruitment expertise" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6 animate-scale-in">"Count on us" - Your Trusted Partner</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
              Professional <span className="gradient-text">Recruitment</span> &<br />
              <span className="text-foreground dark:text-white">Staffing Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl" data-testid="hero-description">
              We are an assembly of hardworking, experienced, dynamic and dedicated professionals working to provide quality and superior business solutions. We strongly stand to mediate between job creators and job seekers.
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
            <Card className="glass-effect shadow-2xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground dark:text-white" data-testid="hero-card-title">
                  Why Choose NJK Enterprises?
                </h3>
                <div className="space-y-6">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed pt-2" data-testid={`feature-${index}`}>{feature.text}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
