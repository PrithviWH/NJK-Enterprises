import { Card } from "@/components/ui/card";
import { Award, Target, Users, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="about-title">
            About NJK Enterprises
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="about-subtitle">
            We have redefined the process of recruitment to a predictably accurate process with defined parameters for matching job skills of potential candidates with job profiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team collaboration" 
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="about-image"
            />
          </div>
          
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-foreground dark:text-white" data-testid="company-profile-title">
              Our Company Profile
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg" data-testid="company-description-1">
                <strong className="text-foreground dark:text-white">NJK ENTERPRISES</strong> has redefined the process of national recruitment to a predictably accurate process with defined parameters for matching job skills of potential candidates with job profiles of national & international companies.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="company-description-2">
                As a placement agency, we provide national jobs for skilled, semi-skilled and unskilled workers with various corporate giants in India. We cater to diverse industries like Office Staff, Office Assistant, House Keeping Staff, Unarmed Security staff, Construction Labour, Hospitality Staff, Engineering Staff & Labour, Medical services Staff, Oil & Gas shipping and more.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg">
                  <Globe className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-foreground dark:text-white">National & International</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-accent/5 rounded-lg">
                  <Award className="w-6 h-6 text-accent" />
                  <span className="text-sm font-medium text-foreground dark:text-white">Quality Assured</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card className="text-center p-6 glass-effect border-0 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold gradient-text mb-2" data-testid="stat-years">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="text-center p-6 glass-effect border-0 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold gradient-text mb-2" data-testid="stat-placements">5000+</div>
                  <div className="text-sm text-muted-foreground">Successful Placements</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
