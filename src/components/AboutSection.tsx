import { CheckCircle2 } from "lucide-react";

const capabilities = [
  "Advanced MIG, TIG & Submerged Arc Welding",
  "CNC Profiling & Drilling Machinery",
  "CO₂ Welding Techniques",
  "Rigorous Health & Safety Training",
  "ISO-standard Quality Management",
  "End-to-end Project Delivery",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-medium text-sm tracking-wider uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Engineering <span className="text-gradient-gold">Excellence</span> Since 2013
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Deepika Builtech has earned its reputation as South India's premier PEB construction firm through unwavering commitment to quality, precision engineering, and on-time project delivery. Our state-of-the-art fabrication facilities and experienced team ensure every project meets the highest industry standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-3xl p-8 shadow-card">
              <div className="text-sm text-gold font-semibold tracking-wider uppercase mb-6">
                Excellence Award Recipient
              </div>
              <blockquote className="text-foreground text-xl font-heading font-semibold leading-relaxed mb-6">
                "Recognized for outstanding contributions to industrial construction and pre-engineered building solutions in South India."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-bold text-lg">DB</span>
                </div>
                <div>
                  <div className="text-foreground font-semibold">Deepika Builtech</div>
                  <div className="text-muted-foreground text-sm">Industry Excellence Award</div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
