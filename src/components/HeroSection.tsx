import { ArrowRight, Building2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt="Pre-engineered steel building under construction"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-medium text-sm tracking-wider uppercase">
              Chennai's Trusted PEB Experts
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
            Building India's
            <span className="text-gradient-gold block">Industrial Future</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 animate-fade-in-up animation-delay-400 leading-relaxed">
            End-to-end Pre-Engineered Building solutions — from design and fabrication to installation. 10+ years, 150+ projects delivered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up animation-delay-600">
            <a href="#contact">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold text-lg px-8 shadow-gold">
                Request Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8">
                Our Services
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-8 animate-fade-in-up animation-delay-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur flex items-center justify-center">
                <Building2 className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="text-primary-foreground font-bold text-xl">150+</div>
                <div className="text-primary-foreground/60 text-sm">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur flex items-center justify-center">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="text-primary-foreground font-bold text-xl">100+</div>
                <div className="text-primary-foreground/60 text-sm">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
