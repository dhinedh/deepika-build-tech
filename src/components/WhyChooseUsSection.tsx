import { ShieldCheck, Clock, CheckSquare, Target, Settings, Building } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Precision Engineering",
    description: "Every structure is engineered with millimeter precision using advanced CAD and structural analysis software."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We strictly adhere to project timelines, ensuring zero delays in your critical infrastructure setup."
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality Control",
    description: "Rigorous quality checks at every phase, from raw material selection to final on-site erection."
  },
  {
    icon: Target,
    title: "Cost Effective Solutions",
    description: "Optimized designs that reduce material waste and lower overall project costs without compromising strength."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[2px] w-8 bg-gold" />
            <span className="text-gold font-bold text-sm tracking-widest uppercase">The Deepika Advantage</span>
            <div className="h-[2px] w-8 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-navy mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">Us</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We don't just build structures; we build trust through reliable, high-performance engineering tailored to your industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title} 
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 relative"
              >
                {/* Decorative fade for hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500 border border-navy/5 group-hover:border-gold/20">
                    <Icon className="w-7 h-7 text-navy group-hover:text-yellow-600 transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-navy mb-4 group-hover:text-navy transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative backdrops */}
      <div className="absolute -left-32 top-20 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default WhyChooseUsSection;
