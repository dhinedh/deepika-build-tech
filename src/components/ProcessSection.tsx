const steps = [
  { num: "01", title: "Initiation", desc: "Understanding your requirements and project scope" },
  { num: "02", title: "Planning", desc: "Detailed project planning with timelines and budgets" },
  { num: "03", title: "Design", desc: "Structural design using advanced engineering software" },
  { num: "04", title: "Manufacturing", desc: "Precision fabrication in our state-of-the-art facility" },
  { num: "05", title: "Construction", desc: "On-site erection with trained installation teams" },
  { num: "06", title: "Monitoring", desc: "Quality control and safety compliance at every stage" },
  { num: "07", title: "Completion", desc: "Final inspection, handover and after-sales support" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-medium text-sm tracking-wider uppercase">How We Work</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">7-Step</span> Process
          </h2>
          <p className="text-muted-foreground text-lg">
            A structured methodology ensuring quality, transparency, and on-time delivery.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-card shadow-card border-2 border-border group-hover:border-gold transition-colors duration-300 flex items-center justify-center relative z-10">
                  <span className="text-gold font-heading font-bold text-lg">{step.num}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground text-sm mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
