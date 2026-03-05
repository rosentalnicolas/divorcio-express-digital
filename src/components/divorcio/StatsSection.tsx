import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30, suffix: "", label: "Días para la obtención de la sentencia" },
  { value: 1500, suffix: "+", label: "Divorcios realizados" },
  { value: 98, suffix: "%", label: "De clientes con Sentencia de Divorcio" },
];

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <span className="font-heading text-5xl md:text-6xl font-bold text-gold">
        {count}{suffix}
      </span>
      <p className="font-body text-primary-foreground/80 mt-3 text-sm md:text-base tracking-wide">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-4">
          Estudio Líder en Procesos de Divorcio
        </h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
        <p className="text-center font-body text-primary-foreground/70 mb-16 max-w-2xl mx-auto">
          Desde el 2015 somos el estudio jurídico líder en procesos de divorcio en Capital Federal y Provincia de Buenos Aires.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
