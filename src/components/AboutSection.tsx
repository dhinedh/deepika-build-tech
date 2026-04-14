import { CheckCircle2, Factory, HardHat } from "lucide-react";
import pebImg from "@/assets/peb-building.jpg";

const capabilities = [
  "Advanced PEB Design & Engineering",
  "Automated CNC Fabrication",
  "Rigorous Safety & Quality Control",
  "End-to-end On-site Erection",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 skewed-bg hidden lg:block" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Strong Visual Block */}
          <div className="relative group mt-8 lg:mt-0">
            {/* Main Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[450px] md:h-[550px] w-full z-10 transition-transform duration-700 group-hover:-translate-y-2">
              <img 
                src={pebImg} 
                alt="Engineering Facility" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-10 bg-white rounded-2xl shadow-xl p-6 md:p-8 z-20 border border-gray-100 flex items-center gap-4 md:gap-6 animate-fade-in-up animation-delay-200">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-navy flex items-center justify-center flex-shrink-0 shadow-inner">
                <span className="text-2xl md:text-3xl font-bold text-gold">10+</span>
              </div>
              <div>
                <p className="text-lg md:text-xl font-heading font-extrabold text-navy leading-none mb-1">Years of</p>
                <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest">Excellence</p>
              </div>
            </div>

            {/* Decorative Offset Pattern */}
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-full h-full rounded-[2rem] border-2 border-slate-200 -z-10 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
          </div>

          {/* Right: Premium Content Block */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-gold" />
              <span className="text-gold font-bold text-sm tracking-[0.2em] uppercase">Who We Are</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-navy leading-[1.1] mb-6">
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600 block sm:inline">Industrial</span> Infrastructure
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Deepika Builtech is South India's premier PEB and heavy structure fabricator. From concept to completion, we blend cutting-edge engineering capabilities with unwavering commitment, delivering resilient and scalable construction solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-y-5 gap-x-4 mb-12">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-navy/10">
                    <CheckCircle2 className="w-4 h-4 text-navy" />
                  </div>
                  <span className="text-navy/80 font-bold text-sm leading-snug">{cap}</span>
                </div>
              ))}
            </div>

            {/* Strong Value Badges */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20">
                  <Factory className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xl text-navy">State-of-the-art</h4>
                  <p className="text-sm font-medium text-gray-500">Fabrication facility</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center border border-navy/10">
                  <HardHat className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xl text-navy">Pro Team</h4>
                  <p className="text-sm font-medium text-gray-500">Expert engineers</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
