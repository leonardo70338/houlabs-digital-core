import { motion } from "framer-motion";
import { Cpu, Link2, Code2, Bot } from "lucide-react";

const cards = [
  {
    icon: Cpu,
    num: "01",
    title: "Transformación digital",
    desc: "Automatizamos procesos y modernizamos la operación de tu empresa.",
  },
  {
    icon: Link2,
    num: "02",
    title: "Integraciones SAP",
    desc: "Conectamos SAP Business One con otros sistemas empresariales.",
  },
  {
    icon: Code2,
    num: "03",
    title: "Software a medida",
    desc: "Desarrollamos herramientas adaptadas a las necesidades de cada negocio.",
  },
  {
    icon: Bot,
    num: "04",
    title: "Automatización inteligente",
    desc: "Reducimos tareas repetitivas y errores operativos.",
  },
];

const TrustSection = () => (
  <section id="trust" className="bg-surface-alt py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 max-w-2xl"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Tecnología que impulsa el crecimiento empresarial
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          En Houlabs ayudamos a las empresas a modernizar su operación mediante software
          especializado, automatización de procesos e integración de sistemas empresariales.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            className="group relative overflow-hidden rounded-2xl border border-brand-subtle bg-card p-8 shadow-ceramic transition-colors"
          >
            <span className="absolute -top-4 -right-2 text-7xl font-bold text-foreground/[0.03] font-mono select-none">
              {c.num}
            </span>
            <c.icon size={24} strokeWidth={1.5} className="text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
