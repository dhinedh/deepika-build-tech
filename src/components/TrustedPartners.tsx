import { Building2, Briefcase, Flame, Component, Layout, Rocket, Box, Globe } from "lucide-react";

const partners = [
  { name: "BuildTech", icon: Building2 },
  { name: "UrbanStruct", icon: Layout },
  { name: "GlobalConst", icon: Globe },
  { name: "PrimeSteels", icon: Component },
  { name: "ApexEng", icon: Rocket },
  { name: "SolidFound", icon: Box },
  { name: "ElevateRE", icon: Briefcase },
  { name: "SummitEst", icon: Flame },
];

const marqueePartners = [...partners, ...partners];

const TrustedPartners = () => {
  return (
    <section className="bg-slate-100 py-8 border-b border-gray-200">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase">
          Trusted by over 150+ companies worldwide
        </p>
      </div>
      
      <div className="relative flex overflow-hidden w-full max-w-7xl mx-auto">
        {/* Soft edge fade overlay */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center py-2">
          {marqueePartners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-2.5 w-52 h-16 mx-4 bg-white rounded-xl border border-slate-200 shadow-md text-gray-500 hover:text-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <Icon className="w-5 h-5 stroke-[1.5]" />
                <span className="text-base font-bold tracking-tight">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
