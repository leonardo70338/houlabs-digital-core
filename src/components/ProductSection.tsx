import { motion } from "framer-motion";
import { Check, Wifi, WifiOff, RefreshCw, MapPin, DollarSign, Truck, Database } from "lucide-react";

const features = [
  { icon: Database, text: "Integración directa con SAP Business One" },
  { icon: Truck, text: "Control de entregas en tiempo real" },
  { icon: RefreshCw, text: "Registro de devoluciones con trazabilidad" },
  { icon: DollarSign, text: "Control de dinero recaudado por conductor" },
  { icon: MapPin, text: "Optimización de rutas y recursos" },
  { icon: WifiOff, text: "Funcionamiento incluso sin conexión a internet" },
  { icon: Wifi, text: "Sincronización automática cuando hay señal" },
];

const ProductSection = () => (
  <section id="product" className="py-24">
    <div className="container mx-auto px-4">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 inline-block rounded-full border border-brand-subtle bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-widest text-secondary-foreground font-mono">
            Producto destacado
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            LogiCenter – Control total en entregas y devoluciones
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            LogiCenter es una plataforma diseñada para optimizar la logística de distribución,
            brindando control total sobre entregas, devoluciones y recaudo en ruta.
          </p>

          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f.text} className="flex items-start gap-3">
                <Check size={18} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm text-foreground">{f.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative rounded-2xl border border-brand-subtle bg-[#0A0A0B] p-6 shadow-glow-lg">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-auto text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                LogiCenter Dashboard
              </span>
            </div>

            {/* Route list */}
            <div className="space-y-3">
              {[
                { route: "Ruta Norte", driver: "Carlos M.", deliveries: 28, status: "En curso", pct: 64 },
                { route: "Ruta Centro", driver: "Laura G.", deliveries: 34, status: "Completada", pct: 100 },
                { route: "Ruta Sur", driver: "Andrés P.", deliveries: 22, status: "Pendiente", pct: 0 },
              ].map((r) => (
                <div key={r.route} className="rounded-lg bg-neutral-900/60 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-sm font-medium text-neutral-200">{r.route}</div>
                      <div className="text-[11px] text-neutral-500">{r.driver} · {r.deliveries} entregas</div>
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest ${
                        r.status === "Completada"
                          ? "text-green-400"
                          : r.status === "En curso"
                          ? "text-purple-400"
                          : "text-neutral-500"
                      }`}
                    >
                      {r.status}
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-neutral-800">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                  Sincronización automática
                </span>
              </div>
              <span className="text-[10px] text-neutral-600 font-mono">SAP B1 ✓</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProductSection;
