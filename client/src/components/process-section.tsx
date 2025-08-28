import { FileText, Users, Heart, Plane } from "lucide-react";

export default function ProcessSection() {
  const processSteps = [
    {
      number: 1,
      icon: FileText,
      title: "Application & Screening",
      description: "We pro-actively tap the market for excellent candidates. Applications received, shortlisting and calling selected candidates for tests and interviews."
    },
    {
      number: 2,
      icon: Users,
      title: "Testing & Interviews",
      description: "Industry experts conduct in-depth interviews with each individual, obtaining detailed information on educational background, experience, job history, and career goals."
    },
    {
      number: 3,
      icon: Heart,
      title: "Medical & Documentation",
      description: "Medical check-ups at authorized centers and processing of all required documents including employment contracts, power of attorney, and guarantee letters."
    },
    {
      number: 4,
      icon: Plane,
      title: "Deployment & Orientation",
      description: "Visa processing with Embassy, ticketing, immigration processes, and basic orientation program informing about labour laws and work environment."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="process-title">
            Our Work Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="process-subtitle">
            A streamlined, comprehensive process designed to ensure the perfect match between candidates and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center animate-slide-up group" data-testid={`process-step-${index}`}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white" data-testid={`process-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`process-step-description-${index}`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
