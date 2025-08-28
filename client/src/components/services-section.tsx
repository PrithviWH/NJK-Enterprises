import { Card, CardContent } from "@/components/ui/card";
import { Users, FileText, DollarSign, CheckCircle, Clock, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: "Recruitment Process",
      description: "Comprehensive international recruitment with defined parameters for matching job skills of potential candidates with job profiles of national & international companies.",
      features: [
        "Demand letter processing",
        "Application screening & shortlisting",
        "Skills testing & oral interviews",
        "Medical check-ups at authorized centres",
        "Visa processing with Embassy",
        "Basic orientation program"
      ]
    },
    {
      icon: FileText,
      title: "Staffing Solutions / Payroll Management",
      description: "Complete outsourcing solutions providing competitive edge by enabling better management of human capital and financial resources.",
      features: [
        "Short Term / Long Term contract staffing",
        "Predetermined evaluation periods",
        "Complete payroll processing",
        "Statutory and non-statutory compliances",
        "Monthly salary crediting",
        "Email & courier reports"
      ]
    },
    {
      icon: CheckCircle,
      title: "Document Processing",
      description: "Complete documentation and legal processing services for international placements with embassy coordination and compliance management.",
      features: [
        "Power of Attorney",
        "Service Agreement",
        "Employment Contract",
        "Guarantee Letter",
        "Government formalities",
        "Embassy coordination"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="services-title">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="services-subtitle">
            Comprehensive recruitment and staffing solutions tailored to meet your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-slide-up"
                data-testid={`service-card-${index}`}
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2" data-testid={`service-feature-${index}-${featureIndex}`}>
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
