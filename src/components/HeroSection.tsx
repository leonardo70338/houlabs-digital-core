import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap, Database, BarChart3, RefreshCw } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const HeroSection = () => (
  <section id="hero" className="relative overflow-hidden pt-16">
    {/* Grid bg */}
    <div className="absolute inset-0 bg-grid" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-glow opacity-60" />

    <div className="container relative mx-auto px-4 py-24 lg:py-32">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid items-center gap-12 lg:grid-cols-5"
      >
        {/* Left – 3 cols */}
        <div className="lg:col-span-3 space-y-8">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-subtle bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              SAP Business One Partner
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Transformamos procesos empresariales con{" "}
            <span className="text-gradient-primary">tecnología inteligente</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            Desarrollamos soluciones de software, automatizaciones e integraciones con SAP Business
            One que optimizan operaciones, reducen errores y permiten tomar decisiones en tiempo
            real.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="mailto:administracion@houlabs.com.co"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 active:scale-95"
            >
              Solicitar asesoría <ArrowRight size={16} strokeWidth={1.5} />
            </a>
            <a
              href="#product"
              className="inline-flex items-center gap-2 rounded-full border border-brand-subtle bg-card px-8 py-4 text-sm font-semibold text-foreground shadow-ceramic transition-all hover:shadow-ceramic-hover hover:-translate-y-0.5"
            >
              Ver soluciones
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-6 pt-4">
            {[
              { val: "99.9%", label: "Sync Accuracy" },
              { val: "2.4s", label: "Response Time" },
              { val: "+50", label: "Empresas" },
            ].map((s) => (
              <div key={s.label} className="text-left">
                <div className="text-2xl font-bold text-foreground font-mono">{s.val}</div>
                <div className="text-xs text-muted-foreground tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right – Dashboard mockup – 2 cols */}
        <motion.div variants={item} className="lg:col-span-2">
          <div className="relative rounded-2xl border border-brand-subtle bg-[#0A0A0B] p-6 shadow-glow-lg">
            {/* Top bar */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-auto text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                LogiCenter v3.2
              </span>
            </div>

            {/* Fake dashboard */}
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-neutral-900/60 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Layers size={16} strokeWidth={1.5} className="text-purple-400" />
                  <span className="text-sm text-neutral-300">Entregas hoy</span>
                </div>
                <span className="font-mono text-sm font-semibold text-neutral-100">142</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-neutral-900/60 px-4 py-3">
                <div className="flex items-center gap-3">
                  <RefreshCw size={16} strokeWidth={1.5} className="text-purple-400" />
                  <span className="text-sm text-neutral-300">Sincronización</span>
                </div>
                <span className="flex items-center gap-2 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  <span className="font-mono text-green-400 text-xs">En tiempo real</span>
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-neutral-900/60 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Database size={16} strokeWidth={1.5} className="text-purple-400" />
                  <span className="text-sm text-neutral-300">SAP B1</span>
                </div>
                <span className="font-mono text-xs text-green-400">Conectado</span>
              </div>

              {/* Chart bars */}
              <div className="rounded-lg bg-neutral-900/60 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Entregas / Semana</span>
                  <BarChart3 size={14} strokeWidth={1.5} className="text-neutral-600" />
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-purple-600 to-purple-400"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2 pt-1">
                <Zap size={12} strokeWidth={1.5} className="text-purple-400" />
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                  Sincronización automática
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
