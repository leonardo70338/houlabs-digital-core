import { Phone, Mail, Globe } from "lucide-react";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Soluciones", href: "#trust" },
  { label: "LogiCenter", href: "#product" },
  { label: "Servicios", href: "#services" },
  { label: "Contacto", href: "#cta" },
];

const FooterSection = () => (
  <footer className="border-t border-brand-subtle bg-card py-16">
    <div className="container mx-auto px-4">
      <div className="grid gap-12 sm:grid-cols-3">
        <div>
          <div className="text-xl font-bold text-foreground mb-3">
            Hou<span className="text-gradient-primary">labs</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Soluciones tecnológicas y desarrollo de software empresarial.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider font-mono">
            Enlaces
          </h4>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider font-mono">
            Contacto
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={14} strokeWidth={1.5} className="text-primary" /> 3187609089
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail size={14} strokeWidth={1.5} className="text-primary" /> administracion@houlabs.com.co
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe size={14} strokeWidth={1.5} className="text-primary" /> www.houlabs.com.co
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-brand-subtle pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Houlabs. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
