import { Shield, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function MissionSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary via-primary/90 to-accent text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="mission-title">
            Our Mission
          </h2>
          <blockquote className="text-2xl md:text-3xl font-bold mb-8 max-w-4xl mx-auto leading-relaxed" data-testid="mission-statement">
            "DELIVERING EXCELLENCE TO INDIVIDUALS, BUSINESS AND COMMUNITIES."
          </blockquote>
          <p className="text-xl opacity-95 max-w-3xl mx-auto leading-relaxed" data-testid="mission-description">
            Our mission statement reflects our commitment to offering the highest quality service to our clients, candidates and all the other stakeholders we work with, as well as the delivery of our corporate social responsibility program to help the wider community. It demonstrates how we continually strive to go above and beyond to provide exceptional service.
          </p>
        </div>
        
        {/* Our Guarantee Section */}
        <div className="animate-slide-up">
          <Card className="glass-effect border-white/20 backdrop-blur-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" data-testid="guarantee-title">
                  Our Guarantee
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed text-center max-w-4xl mx-auto text-lg" data-testid="guarantee-description">
                We undertake to repatriate on our own expenses if any candidate deployed by NJK ENTERPRISES who is found professionally or medically unfit or refuses to work as specified by company within a probationary period of <strong className="text-white">90 days</strong> from the date of his deployment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
