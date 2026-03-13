import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Diagnóstico", desc: "Analizamos tus procesos actuales y detectamos oportunidades de mejora." },
  { num: "02", title: "Diseño de solución", desc: "Diseñamos una solución tecnológica alineada con tu operación." },
  { num: "03", title: "Implementación", desc: "Desarrollamos e integramos la solución en tus sistemas." },
  { num: "04", title: "Optimización", desc: "Monitoreamos resultados y mejoramos continuamente." },
];

const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section className="bg-surface-alt py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cómo trabajamos
          </h2>
        </motion.div>

        <div ref={ref} className="relative max-w-2xl mx-auto">
          {/* Animated line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-border">
            <motion.div
              className="w-full bg-primary origin-top"
              style={{ scaleY, height: "100%" }}
            />
          </div>

          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-6 pl-2"
              >
                <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card shadow-glow">
                  <span className="text-xs font-bold font-mono text-primary">{s.num}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
