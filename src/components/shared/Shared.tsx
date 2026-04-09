import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionLabel({ children, className, light = false }: { children: React.ReactNode, className?: string, light?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <div className="w-2 h-2 rounded-full bg-primary" />
      <span className={cn("text-[10px] font-bold tracking-[0.3em] uppercase", light ? "text-white/80" : "text-primary")}>
        {children}
      </span>
    </div>
  );
}

export function GlassCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("glass p-8 rounded-2xl relative overflow-hidden group", className)}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
      {children}
    </motion.div>
  );
}

export function MapSVG({ activeMarkets = ["KE", "UG", "TZ", "RW", "ET"] }: { activeMarkets?: string[] }) {
  // Simplified East Africa SVG Map
  const markets = [
    { id: "KE", name: "Kenya", x: 160, y: 150 },
    { id: "UG", name: "Uganda", x: 130, y: 155 },
    { id: "TZ", name: "Tanzania", x: 150, y: 190 },
    { id: "RW", name: "Rwanda", x: 125, y: 175 },
    { id: "ET", name: "Ethiopia", x: 165, y: 105 },
  ];

  return (
    <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
      <svg viewBox="0 0 300 300" className="w-full h-full text-white/5 fill-current">
        {/* Abstract Africa Outline */}
        <path d="M150,50 C180,50 210,80 220,120 C230,160 210,220 180,250 C150,280 120,250 100,220 C80,180 90,120 120,80 C130,60 140,50 150,50 Z" />
      </svg>
      
      {markets.map((m) => (
        activeMarkets.includes(m.id) && (
          <div
            key={m.id}
            className="absolute group"
            style={{ left: `${(m.x / 300) * 100}%`, top: `${(m.y / 300) * 100}%` }}
          >
            <div className="relative">
              <div className="w-3 h-3 bg-primary rounded-full relative z-10" />
              <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping opacity-75" />
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-navy-mid border border-white/10 px-3 py-1 rounded text-[10px] font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
              {m.name} (Active)
            </div>
          </div>
        )
      ))}
    </div>
  );
}

export function MetricCard({ label, value, subtext }: { label: string, value: string, subtext?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 border-l border-white/10 hover:border-primary transition-colors duration-500"
    >
      <div className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2">{label}</div>
      <div className="text-4xl md:text-5xl font-serif text-white mb-2">{value}</div>
      {subtext && <div className="text-white/40 text-xs">{subtext}</div>}
    </motion.div>
  );
}