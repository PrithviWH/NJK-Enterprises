import { Card } from "@/components/ui/card";

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
            <h3 className="text-2xl font-semibold mb-6 text-foreground" data-testid="company-profile-title">
              Our Company Profile
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed" data-testid="company-description-1">
                As a placement agency, we provide national job opportunities for skilled, semi-skilled and unskilled workers with various corporate giants in India. We cater to the needs of diverse industries including office staff, construction, hospitality, engineering, medical services, oil & gas shipping and more.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="company-description-2">
                Our well-defined recruitment process ensures we match the right candidates with the right opportunities, backed by comprehensive testing, medical checks, and orientation programs.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card className="text-center p-6 border border-border">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-years">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="text-center p-6 border border-border">
                  <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-placements">5000+</div>
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
