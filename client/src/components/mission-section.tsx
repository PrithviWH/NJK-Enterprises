export default function MissionSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="mission-title">
            Our Mission
          </h2>
          <blockquote className="text-2xl md:text-3xl font-semibold mb-8 max-w-4xl mx-auto leading-relaxed" data-testid="mission-statement">
            "DELIVERING EXCELLENCE TO INDIVIDUALS, BUSINESS AND COMMUNITIES."
          </blockquote>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed" data-testid="mission-description">
            Our mission statement reflects our commitment to offering the highest quality service to our clients, candidates and all stakeholders we work with, as well as the delivery of our corporate social responsibility program to help the wider community.
          </p>
        </div>
      </div>
    </section>
  );
}
