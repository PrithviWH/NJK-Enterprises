import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Database, Award, Globe, Heart } from "lucide-react";

export default function WhyUsSection() {
  const features = [
    {
      icon: Zap,
      title: "Genuine Passion & Agility",
      description: "Our genuine passion and enthusiasm for what we do, coupled with our agility enables us to respond swiftly to clients' needs ensuring trusted partnership."
    },
    {
      icon: Award,
      title: "Highest Standards",
      description: "We uphold and promote the highest possible standards across our recruitment practices and are pioneers in our sector with nationally recognized corporate social responsibility."
    },
    {
      icon: Users,
      title: "Expert Management Team",
      description: "Our team of expertise collaborate to form an excellent management team with proven track record in recruitment and staffing solutions."
    },
    {
      icon: Database,
      title: "Computerized System",
      description: "A fully computerized Office System and Virtual Databank designed to enable prompt communication among every staff for efficient and best service delivery."
    },
    {
      icon: Heart,
      title: "Medical & Aptitude Expertise",
      description: "Our own reliable expertise for medical check-ups and aptitude tests enables us to handpick the best before we actually select anyone for final recruitment."
    },
    {
      icon: Globe,
      title: "International Experience",
      description: "Extensive experience in international recruitment with proven processes for visa handling, documentation, and overseas placement procedures."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-6" data-testid="why-us-title">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="why-us-subtitle">
            What makes us the most reliable source for your recruitment and staffing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="glass-effect border-0 hover:scale-105 transition-all duration-300 animate-slide-up group"
                data-testid={`why-us-card-${index}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white" data-testid={`why-us-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`why-us-description-${index}`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}