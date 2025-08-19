"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Cpu,
  Globe,
  Smartphone,
  Sparkles,
} from "lucide-react";

/**
 * ⚡ Portafolio centrado y animado (one‑page)
 * Autora: Adriana Marcela Corona Gordillo
 * 
 * ✔ Diseño: hero centrado con avatar, CTA, proyectos, stack, sobre mí y contacto.
 * ✔ Estilo: minimal + acento, vidrio (glass), sombras suaves, bordes 2xl.
 * ✔ Animación: framer‑motion para entrada, hover y scroll.
 * ✔ Accesible y responsive.
 * 
 * 👉 Coloca este archivo como app/page.tsx (Next.js) o src/App.tsx (Vite).
 * 👉 Requiere Tailwind CSS y lucide-react + framer-motion.
 */

// UI helpers simples (sin dependencias externas)
function Button({
  children,
  variant = "solid",
  className = "",
  ...rest
}: any) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 text-sm md:text-base rounded-2xl transition";
  const styles =
    variant === "outline"
      ? "border border-black/10 bg-white/70 hover:bg-white"
      : "bg-black text-white hover:opacity-90";
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}

function Card({ className = "", children }: any) {
  return (
    <div
      className={`border border-black/10 bg-white/70 backdrop-blur rounded-2xl shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
function CardContent({ className = "", children }: any) {
  return <div className={`p-5 md:p-6 ${className}`}>{children}</div>;
}

const PROFILE = {
  name: "Adriana Marcela Corona Gordillo",
  role: "Ingeniera de Software · Desarrolladora Java",
  tagline:
    "Ingeniera de Software con experiencia en desarrollo, soporte e implementación de aplicaciones empresariales. Java (JSP/JSF/Swing), Spring/Spring Boot, Angular, APIs REST, CI/CD, Docker, Kubernetes.",
  location: "Bogotá, Colombia",
  email: "adrianamcoronag20@gmail.com",
  github: "https://github.com/adrianacg111",
  linkedin: "https://www.linkedin.com/in/adriana-coronag/",
  resumeUrl: "/cv.pdf",
  tech: [
    "Java",
    "Spring",
    "Spring Boot",
    "Angular",
    "JavaScript",
    "HTML5/CSS3",
    "TypeScript",
    "MySQL",
    "SQL Server",
    "Oracle",
    "PostgreSQL",
    "Informix",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Azure DevOps",
    "GoAnywhere",
    "Oracle WebLogic",
    "IBM WebSphere",
    "WildFly",
    "Apache Tomcat",
    "Grafana",
    "Maven",
    "Scrum",
  ],
};

const PROJECTS = [
  {
    title: "Microservicios de Trámites",
    description:
      "Implementación de microservicios con Spring Boot desplegados en contenedores Docker y orquestados en Kubernetes. Integración CI/CD con Jenkins.",
    tech: ["Spring Boot", "Java", "Docker", "Kubernetes", "Jenkins"],
    live: "",
    repo: "",
    icon: <Cpu className="w-5 h-5" aria-hidden />,
    highlights: ["CI/CD", "Contenerización", "Escalabilidad"],
  },
  {
    title: "Portal Corporativo (Sector Financiero)",
    description:
      "Despliegues y soporte de portales sobre IBM WebSphere Portal y Oracle WebLogic. Automatización de paquetes con GoAnywhere y pipelines en Jenkins.",
    tech: ["IBM WebSphere", "Oracle WebLogic", "GoAnywhere", "Jenkins"],
    live: "",
    repo: "",
    icon: <Globe className="w-5 h-5" aria-hidden />,
    highlights: ["Automatización", "Optimización", "Soporte Prod"],
  },
  {
    title: "Factura Electrónica & Front-End Angular",
    description:
      "Módulos web con Angular y capa back en Java/MySQL. Pruebas funcionales/integración y cumplimiento normativo en flujos de facturación electrónica.",
    tech: ["Angular", "Java", "MySQL", "HTML5", "Bootstrap", "CSS3"],
    live: "",
    repo: "",
    icon: <Smartphone className="w-5 h-5" aria-hidden />,
    highlights: ["Scrum", "UI responsiva", "QA"],
  },
];

// Avatar SVG minimalista
function Avatar() {
  return (
    <img
      src="/avatar.jpg"
      alt="Foto de Adriana Marcela Corona"
      className="w-28 h-28 rounded-full object-cover drop-shadow-sm"
    />
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border px-3 py-1 text-xs md:text-sm bg-white/60 backdrop-blur border-black/10">
      {children}
    </span>
  );
}

function SectionTitle({ icon, title }: { icon?: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {icon}
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group hover:shadow-xl transition-shadow">
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-black/70 mb-3">
            <span className="inline-flex items-center gap-2">
              {p.icon}
              <span>{p.title}</span>
            </span>
            <span className="ml-auto flex gap-2">
              {p.live && (
                <a className="inline-flex items-center gap-1 hover:underline" href={p.live} target="_blank" rel="noreferrer">
                  Live <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {p.repo && (
                <a className="inline-flex items-center gap-1 hover:underline" href={p.repo} target="_blank" rel="noreferrer">
                  Repo <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </span>
          </div>
          <p className="text-sm md:text-base text-black/80 mb-3">{p.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {p.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {p.highlights?.map((h) => (
              <span key={h} className="text-xs md:text-sm text-black/60 inline-flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> {h}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function PortfolioCenteredAnimated() {
  const gradient = useMemo(
    () => ({
      backgroundImage:
        "radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,.25) 0%, rgba(99,102,241,0) 60%), radial-gradient(50% 50% at 100% 0%, rgba(16,185,129,.18) 0%, rgba(16,185,129,0) 50%), radial-gradient(40% 40% at 0% 0%, rgba(244,114,182,.18) 0%, rgba(244,114,182,0) 40%)",
    }),
    []
  );

  return (
    <main className="min-h-screen text-neutral-900 bg-gradient-to-b from-[#f8fafc] to-white relative">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-80" style={gradient} />

      {/* Container */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16">
        {/* HERO */}
        <section className="flex flex-col items-center text-center gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative">
              <motion.div
                className="rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-emerald-400 to-pink-400 shadow-md"
                animate={{ rotate: [0, 4, 0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-full bg-white p-3">
                  <Avatar />
                </div>
              </motion.div>
              <motion.span
                className="absolute -bottom-2 -right-2 text-xs md:text-sm bg-white/70 border border-black/10 rounded-full px-2 py-1 backdrop-blur"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {PROFILE.location}
              </motion.span>
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{PROFILE.name}</h1>
              <p className="mt-1 text-lg md:text-xl text-black/70">{PROFILE.role}</p>
              <p className="mt-3 max-w-2xl text-black/80">{PROFILE.tagline}</p>
            </div>

            <div className="flex gap-2 md:gap-3">
              <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
                <Button>Descargar CV</Button>
              </a>
              <a href={`mailto:${PROFILE.email}`}>
                <Button variant="outline">
                  Contáctame <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-4 text-black/70">
              <a
                href={PROFILE.github}
                className="inline-flex items-center gap-1 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                className="inline-flex items-center gap-1 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1 hover:underline">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </motion.div>
        </section>

        {/* STACK */}
        <section className="mt-12 md:mt-16">
          <SectionTitle title="Stack & Skills" icon={<Cpu className="w-5 h-5" />} />
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="flex flex-wrap gap-2">
            {PROFILE.tech.map((t) => (
              <motion.div key={t} whileHover={{ y: -2 }} className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-sm">
                {t}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROYECTOS */}
        <section className="mt-12 md:mt-16">
          <SectionTitle title="Proyectos destacados" icon={<Globe className="w-5 h-5" />} />
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section className="mt-12 md:mt-16">
          <SectionTitle title="Sobre mí" icon={<Sparkles className="w-5 h-5" />} />
          <Card>
            <CardContent>
              <p className="text-black/80 leading-relaxed">
                Soy una desarrolladora orientada a producto. Me gusta trabajar de cerca con diseño y negocio para
                entregar interfaces claras, accesibles y centradas en el usuario. He construido desde landing pages de alto
                rendimiento hasta sistemas internos complejos con dashboards y flujos de aprobación.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CONTACTO */}
        <section className="mt-12 md:mt-20 pb-10 md:pb-16">
          <Card>
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">¿Construimos algo juntos?</h3>
                <p className="text-black/70">Estoy disponible para proyectos freelance o full‑time.</p>
              </div>
              <a href={`mailto:${PROFILE.email}`}>
                <Button>Escríbeme</Button>
              </a>
            </CardContent>
          </Card>
        </section>

        {/* FOOTER */}
        <footer className="py-6 text-center text-sm text-black/50">
          © {new Date().getFullYear()} {PROFILE.name}. Hecho con React, Tailwind y Framer Motion.
        </footer>
      </div>
    </main>
  );
}
