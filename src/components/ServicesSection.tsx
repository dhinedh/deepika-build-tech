import { ArrowRight } from "lucide-react";
import pebImg from "@/assets/peb-building.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import coldStorageImg from "@/assets/cold-storage.jpg";
import mezzanineImg from "@/assets/mezzanine.jpg";
import eotCraneImg from "@/assets/eot-crane.jpg";

const services = [
  {
    title: "PEB Building Structures",
    description: "Custom-designed pre-engineered steel buildings for industrial and commercial use, built for durability and speed.",
    image: pebImg,
  },
  {
    title: "Warehousing Solutions",
    description: "Large-scale storage facilities optimized for logistics operations with maximum space utilization.",
    image: warehouseImg,
  },
  {
    title: "Cold Storage",
    description: "Temperature-controlled environments engineered for food processing, pharmaceuticals, and specialized industries.",
    image: coldStorageImg,
  },
  {
    title: "Mezzanine Floors",
    description: "Steel-structured intermediate floors to double your usable space without expanding your building footprint.",
    image: mezzanineImg,
  },
  {
    title: "EOT Cranes",
    description: "Design and installation of Electric Overhead Traveling cranes for efficient material handling.",
    image: eotCraneImg,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-medium text-sm tracking-wider uppercase">What We Do</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Core <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive engineering solutions tailored to your industrial infrastructure needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-dark/30 group-hover:bg-navy-dark/10 transition-colors duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-gold font-semibold text-sm hover:gap-3 gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
