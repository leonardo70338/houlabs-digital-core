import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const CtaSection = () => (
  <section id="cta" className="relative overflow-hidden py-24">
    <div className="absolute inset-0 bg-grid opacity-50" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow" />

    <div className="container relative mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          Impulsa la transformación digital de tu empresa
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Optimiza procesos, reduce errores y mejora el control de tu operación con soluciones
          tecnológicas diseñadas para crecer.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:administracion@houlabs.com.co"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 active:scale-95"
          >
            Solicitar asesoría <ArrowRight size={16} strokeWidth={1.5} />
          </a>
          <a
            href="mailto:administracion@houlabs.com.co"
            className="inline-flex items-center gap-2 rounded-full border border-brand-subtle bg-card px-8 py-4 text-sm font-semibold text-foreground shadow-ceramic transition-all hover:shadow-ceramic-hover hover:-translate-y-0.5"
          >
            <MessageCircle size={16} strokeWidth={1.5} /> Contactar
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
