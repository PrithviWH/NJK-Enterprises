import { Card, CardContent } from "@/components/ui/card";
import { Building, Cog, Shield, Zap, Wrench, Home, Heart, HardHat } from "lucide-react";

export default function CategoriesSection() {
  const categories = [
    {
      icon: Building,
      title: "Administration",
      items: [
        "Project Manager",
        "Public Relation Manager",
        "Chartered Accountants",
        "Accountant/Cashier",
        "Secretary/Executives",
        "Clerk/Typist/Receptionist",
        "Sales Personnel/Store Keeper",
        "Computer Operator"
      ]
    },
    {
      icon: Cog,
      title: "Heavy Equipment & Drivers",
      items: [
        "Operators - Dozer, Fork lift, Roller, Payloader, Back Hoe",
        "Operators - Crane (Mobile/Crawler/Hydraulic)",
        "Heavy Drivers - (Trailor/Dump/Truck)",
        "Light Drivers - (Bus/Van/Car/Light Vehicles)",
        "Mechanics - (Heavy/Light Equipment's Under Chassis)",
        "Tyreman",
        "Dinters",
        "Painters",
        "Moulders",
        "Helpers"
      ]
    },
    {
      icon: Shield,
      title: "Security",
      items: [
        "Unarmed Security Guard",
        "Residential / Private Security",
        "Official / Bank Security",
        "Industrial Security"
      ]
    },
    {
      icon: Zap,
      title: "Electrical",
      items: [
        "General Electrician (House Wiring)",
        "Electrical Line Maintenance (Industrial)",
        "AC & Refrigeration Motor Welding"
      ]
    },
    {
      icon: Home,
      title: "General Staff",
      items: [
        "House Keeping Staff",
        "Office Staff",
        "Office Assistant",
        "Construction Labour",
        "Hospitality Staff"
      ]
    },
    {
      icon: Heart,
      title: "Medical Services",
      items: [
        "Medical Services Staff",
        "Healthcare Professionals",
        "Medical Support Staff"
      ]
    },
    {
      icon: HardHat,
      title: "Engineering & Labour",
      items: [
        "Engineering Staff & Labour",
        "Technical Specialists",
        "Construction Engineers",
        "Project Supervisors"
      ]
    },
    {
      icon: Building,
      title: "Oil & Gas Shipping",
      items: [
        "Maritime Personnel",
        "Offshore Workers",
        "Shipping Crew",
        "Technical Support"
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
