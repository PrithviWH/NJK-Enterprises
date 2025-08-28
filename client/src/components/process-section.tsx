export default function ProcessSection() {
  const processSteps = [
    {
      number: 1,
      title: "Application Screening",
      description: "We review applications and shortlist candidates based on job requirements and qualifications."
    },
    {
      number: 2,
      title: "Testing & Interviews",
      description: "Comprehensive skill tests and interviews conducted by industry experts and HR specialists."
    },
    {
      number: 3,
      title: "Medical & Documentation",
      description: "Medical check-ups at authorized centers and processing of all required documentation."
    },
    {
      number: 4,
      title: "Deployment & Support",
      description: "Visa processing, orientation programs, and ongoing support throughout the placement process."
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
          {processSteps.map((step, index) => (
            <div key={index} className="text-center animate-slide-up" data-testid={`process-step-${index}`}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground" data-testid={`process-step-title-${index}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`process-step-description-${index}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
