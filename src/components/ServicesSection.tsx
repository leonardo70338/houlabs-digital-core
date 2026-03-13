import { motion } from "framer-motion";
import {
  Link2, Settings, Search, FileText, BarChart3, GraduationCap, Code2, Puzzle, Smartphone,
} from "lucide-react";

const services = [
  { icon: Link2, title: "Integraciones SAP Business One", desc: "Conectamos SAP con CRM, ecommerce, ERPs externos y aplicaciones personalizadas para garantizar procesos sincronizados y datos en tiempo real.", span: "sm:col-span-2" },
  { icon: Settings, title: "Automatización de procesos", desc: "Automatizamos tareas operativas, financieras y bancarias como conciliaciones, facturación y reportes." },
  { icon: Search, title: "Consultoría SAP", desc: "Analizamos y optimizamos procesos dentro de SAP para mejorar eficiencia y alinearlos con los objetivos del negocio." },
  { icon: FileText, title: "Facturación electrónica", desc: "Implementamos soluciones de facturación electrónica integradas con SAP Business One cumpliendo normativas locales." },
  { icon: BarChart3, title: "Informes y dashboards", desc: "Desarrollamos reportes personalizados y paneles de control para la toma de decisiones estratégicas." },
  { icon: GraduationCap, title: "Capacitación", desc: "Entrenamos equipos para el uso eficiente de SAP y de las soluciones implementadas." },
  { icon: Code2, title: "Desarrollo de software a medida", desc: "Creamos soluciones digitales personalizadas para automatizar procesos específicos dentro de SAP.", span: "sm:col-span-2" },
  { icon: Puzzle, title: "Add-ons para SAP", desc: "Desarrollamos extensiones que integran SAP Business One con proveedores de facturación electrónica y otros sistemas." },
  { icon: Smartphone, title: "Soluciones móviles empresariales", desc: "Aplicaciones móviles para equipos comerciales y gestión de viáticos o gastos corporativos." },
];

const ServicesSection = () => (
  <section id="services" className="bg-surface-alt py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 max-w-2xl"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Nuestros servicios
        </h2>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={`group rounded-2xl border border-brand-subtle bg-card/50 p-6 backdrop-blur-sm shadow-ceramic transition-all hover:shadow-ceramic-hover hover:bg-gradient-to-br hover:from-card hover:to-secondary ${s.span ?? ""}`}
          >
            <s.icon size={22} strokeWidth={1.5} className="text-primary mb-3" />
            <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
