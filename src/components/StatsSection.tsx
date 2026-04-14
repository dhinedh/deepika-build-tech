import { useEffect, useRef, useState } from "react";
import { Trophy, Building2, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Building2, value: 150, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 100, suffix: "+", label: "Satisfied Clients" },
  { icon: Trophy, value: 1, suffix: "", label: "Excellence Award" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-navy-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-foreground/10 backdrop-blur flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-gold" />
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="text-primary-foreground/60 mt-2 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
