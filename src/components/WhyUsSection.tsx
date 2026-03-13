import { motion } from "framer-motion";
import { Award, Fingerprint, Repeat, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Award, title: "Experiencia especializada en SAP", desc: "Consultores con experiencia en integración y desarrollo de soluciones empresariales." },
  { icon: Fingerprint, title: "Soluciones a medida", desc: "Cada empresa es única, por eso adaptamos nuestras soluciones a sus necesidades." },
  { icon: Repeat, title: "Metodologías ágiles", desc: "Trabajamos con procesos ágiles que entregan valor continuamente." },
  { icon: HeartHandshake, title: "Acompañamiento continuo", desc: "Brindamos soporte antes, durante y después de la implementación." },
];

const WhyUsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 max-w-2xl"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          ¿Por qué elegir Houlabs?
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-brand-subtle bg-card p-8 shadow-ceramic transition-all hover:shadow-ceramic-hover"
          >
            <r.icon size={24} strokeWidth={1.5} className="text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
