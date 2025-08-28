import { Card, CardContent } from "@/components/ui/card";
import { Building, Cog, Shield, Zap, Wrench, Home, Heart, HardHat } from "lucide-react";

export default function CategoriesSection() {
  const categories = [
    {
      icon: Building,
      title: "Administration",
      items: [
        "Project Manager",
        "Public Relations Manager", 
        "Chartered Accountants",
        "Secretary/Executives",
        "Computer Operator"
      ]
    },
    {
      icon: Cog,
      title: "Operations",
      items: [
        "Heavy Equipment Operators",
        "Crane Operators",
        "Heavy Vehicle Drivers",
        "Light Vehicle Drivers",
        "Equipment Mechanics"
      ]
    },
    {
      icon: Shield,
      title: "Security",
      items: [
        "Unarmed Security Guards",
        "Residential Security",
        "Office/Bank Security",
        "Industrial Security",
        "Private Security"
      ]
    },
    {
      icon: Zap,
      title: "Technical",
      items: [
        "General Electricians",
        "Line Maintenance",
        "AC & Refrigeration",
        "Motor Welding",
        "Industrial Electrical"
      ]
    },
    {
      icon: Wrench,
      title: "Skilled Trades",
      items: [
        "Painters",
        "Moulders",
        "Helpers",
        "Dinters",
        "Tyreman"
      ]
    },
    {
      icon: Home,
      title: "Hospitality",
      items: [
        "House Keeping Staff",
        "Hotel Staff",
        "Catering Services",
        "Front Office Staff",
        "Maintenance Staff"
      ]
    },
    {
      icon: Heart,
      title: "Healthcare",
      items: [
        "Medical Services Staff",
        "Healthcare Assistants",
        "Hospital Support Staff",
        "Medical Technicians",
        "Care Workers"
      ]
    },
    {
      icon: HardHat,
      title: "Engineering",
      items: [
        "Engineering Staff",
        "Technical Labour",
        "Construction Workers",
        "Project Engineers",
        "Site Supervisors"
      ]
    }
  ];

  return (
    <section id="categories" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="categories-title">
            Categories We Provide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="categories-subtitle">
            We provide skilled professionals across multiple industries and job categories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                data-testid={`category-card-${index}`}
              >
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center" data-testid={`category-title-${index}`}>
                    <IconComponent className="w-5 h-5 mr-2 text-primary" />
                    {category.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} data-testid={`category-item-${index}-${itemIndex}`}>
                        • {item}
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
