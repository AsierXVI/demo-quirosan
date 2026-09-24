"use client";

import { useState } from "react";
import { clinicData } from "@/data/clinic";

const heroImage = "/images/hero-fisioterapia.jpg";
const heroImageAlt = "Sesión de quiromasaje y masaje deportivo en camilla";

const whatsappMessage =
  `Hola, me gustaría pedir cita en Quirosan. ¿Tienen disponibilidad esta semana?`;

const rating = "4.9";
const reviewsCount = "47";

const copy = {
  kicker: "Centro de Quiromasaje en Santander",
  clinicName: "Quirosan",
  headlineTagline: "Quiromasaje y Masaje Deportivo en Santander",
  subtitle:
    "Descarga muscular, alivio eficaz de contracturas y tratamientos corporales personalizados. Atención profesional sin esperas en el centro de Santander.",
  headerCta: "Pedir Cita",
  heroCta: "Pedir cita por WhatsApp",
  servicesCta: "Ver todos los servicios",
  contactCta: "Escribir por WhatsApp",
  floatingCta: "Pedir Cita",
  servicesTitle: "Nuestros Servicios",
  servicesIntro:
    "Tratamientos manuales y presoterapia adaptados a tus objetivos de recuperación, alivio o bienestar.",
  aboutTitle: "¿Por qué elegir Quirosan?",
  aboutIntro:
    "Atención individualizada, técnicas manuales rigurosas y dedicación exclusiva en cada sesión.",
  reviewsTitle: "Reseñas de nuestros clientes",
  reviewsIntro: "Opiniones reales y verificadas en Google Maps de personas tratadas en Quirosan.",
  contactTitle: "Ubicación y Horarios",
  contactIntro:
    `Estamos en ${clinicData.address}. Llámanos o escríbenos directamente por WhatsApp para reservar tu sesión.`,
};

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "¿Por qué Quirosan?", href: "#nosotros" },
  { name: "Opiniones", href: "#opiniones" },
  { name: "Contacto", href: "#contacto" },
];

const services = [
  {
    id: "masaje-deportivo",
    title: "Masaje deportivo",
    icon: "sport",
    desc: "Descarga muscular profunda, prevención de sobrecargas y aceleración de la recuperación para deportistas.",
  },
  {
    id: "masaje-descontracturante",
    title: "Masaje descontracturante",
    icon: "hands",
    desc: "Técnicas manuales para disolver contracturas, nudos y aliviar la tensión acumulada en espalda y cuello.",
  },
  {
    id: "masaje-relajante",
    title: "Masaje relajante",
    icon: "calm",
    desc: "Maniobras suaves y fluidas para reducir el estrés, calmar el sistema nervioso y desconectar cuerpo y mente.",
  },
  {
    id: "masaje-craneal",
    title: "Masaje craneal",
    icon: "head",
    desc: "Terapia focalizada en cuello, sienes y cráneo para aliviar cefaleas, migrañas y sobrecarga por bruxismo.",
  },
  {
    id: "masaje-anticelulitico",
    title: "Masaje anticelulítico",
    icon: "droplet",
    desc: "Masaje manual enérgico para movilizar el tejido adiposo, activar la circulación y mejorar la firmeza de la piel.",
  },
  {
    id: "reductor-abdomen",
    title: "Reductor de abdomen",
    icon: "body",
    desc: "Maniobras específicas para reducir volumen, drenar la retención de líquidos y estilizar la zona abdominal.",
  },
  {
    id: "presoterapia",
    title: "Presoterapia",
    icon: "wave",
    desc: "Compresión neumática secuencial para activar el retorno linfático y aliviar la sensación de piernas pesadas.",
  },
];

const reasons = [
  {
    num: "01",
    title: "Experiencia en quiromasaje y deporte",
    desc: "Dominamos las técnicas manuales más efectivas para cada disciplina deportiva y dolencia muscular cotidiana.",
  },
  {
    num: "02",
    title: "Sesiones exclusivas 1 a 1",
    desc: "Dedicación íntegra y personalizada durante todo tu tiempo de consulta. Sin prisas ni salas compartidas.",
  },
  {
    num: "03",
    title: "Gama completa de masajes",
    desc: "Desde la descarga deportiva hasta el bienestar relajante y los tratamientos corporales reductores y presoterapia.",
  },
  {
    num: "04",
    title: "Flexibilidad y trato cercano",
    desc: "Citas en el mismo día cuando hay disponibilidad y resolución directa de dudas por WhatsApp.",
  },
];

const reviews = [
  {
    name: "Laura Martínez",
    date: "Hace 2 semanas",
    treatment: "Masaje Descontracturante",
    text: "Llegué con la espalda cargadísima y una contractura en el trapecio que no me dejaba girar el cuello. En una sola sesión noté una mejoría tremenda. Manos expertas y trato de diez.",
    avatar: "L",
  },
  {
    name: "Javier Ramos",
    date: "Hace 1 mes",
    treatment: "Masaje Deportivo",
    text: "Acudí para descargar piernas antes de la media maratón de Santander. El masaje deportivo fue enérgico y justo lo que necesitaba para competir al 100% sin calambres.",
    avatar: "J",
  },
  {
    name: "Elena Gómez",
    date: "Hace 2 meses",
    treatment: "Masaje Craneal y Relajante",
    text: "Padezco bruxismo y tensión cervical continua. El masaje craneal de Quirosan es una maravilla absoluta, te deja una sensación de alivio y desconexión total.",
    avatar: "E",
  },
  {
    name: "Carlos Fernández",
    date: "Hace 3 meses",
    treatment: "Presoterapia y Piernas Cansadas",
    text: "Probé la presoterapia combinada con masaje y la sensación de ligereza en las piernas es inmediata. Instalaciones súper limpias y atención impecable.",
    avatar: "C",
  },
  {
    name: "Marta Santamaría",
    date: "Hace 3 meses",
    treatment: "Masaje Anticelulítico y Abdomen",
    text: "Tratamiento muy profesional y efectivo. Se nota el conocimiento en cada maniobra y la constancia se nota en la firmeza de la piel desde las primeras sesiones.",
    avatar: "M",
  },
  {
    name: "David Trueba",
    date: "Hace 4 meses",
    treatment: "Masaje Deportivo de Descarga",
    text: "Entreno fuerza a diario y las sobrecargas son habituales. En Quirosan dan con el punto exacto de la molestia y sales como nuevo. Muy recomendable.",
    avatar: "D",
  },
];

function getWhatsAppUrl(customMessage) {
  const text = encodeURIComponent(customMessage || whatsappMessage);
  return `https://wa.me/${clinicData.whatsapp}?text=${text}`;
}

function getTelHref() {
  return `tel:${clinicData.phone.replace(/\s/g, "")}`;
}

function getMapEmbedUrl() {
  const query = encodeURIComponent(clinicData.address);
  return `https://maps.google.com/maps?q=${query}&z=16&output=embed`;
}

function getMapLink() {
  const query = encodeURIComponent(clinicData.address);
  return `https://maps.google.com/?q=${query}`;
}

function GoogleIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.13C3.25 21.35 7.34 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.26C.46 8.18 0 9.99 0 12s.46 3.82 1.26 5.42l4.02-3.13z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.65 1.26 6.58l4.02 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
      />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex gap-1 text-amber-400" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9 5.06 16.71l.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function ServiceIcon({ type }) {
  const cls = "h-8 w-8 text-teal-600";
  if (type === "sport")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 0-3 19.5M12 2a10 10 0 0 1 3 19.5M2 12h20M4.2 7h15.6M4.2 17h15.6" />
      </svg>
    );
  if (type === "hands")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1M14 7V5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1M10 6V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v11" />
        <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34L4 18" />
      </svg>
    );
  if (type === "calm")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    );
  if (type === "head")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26C17.81 13.47 19 11.38 19 9c0-3.87-3.13-7-7-7z" />
        <path d="M9 18v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2" />
        <line x1="9" y1="12" x2="15" y2="12" />
      </svg>
    );
  if (type === "droplet")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C12 2 5 9.5 5 14a7 7 0 0 0 14 0c0-4.5-7-12-7-12z" />
        <path d="M12 21v-5" />
        <path d="M9.5 16.5c0 1.38 1.12 2.5 2.5 2.5" />
      </svg>
    );
  if (type === "body")
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="8" rx="4" ry="5" />
        <path d="M8 13c-3 1-5 3-5 5.5C3 21 7 22 12 22s9-1 9-3.5c0-2.5-2-4.5-5-5.5" />
        <path d="M9 11.5c0 1 .5 2.5 3 2.5s3-1.5 3-2.5" />
      </svg>
    );
  // wave (presoterapia)
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
      <path d="M2 7c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
      <path d="M2 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.07c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.37-.8-2.6-1.07-4.27-3.73-4.4-3.9-.13-.17-1.05-1.39-1.05-2.66 0-1.26.66-1.88.89-2.14.24-.26.51-.32.68-.32.17 0 .34 0 .49.01.16.01.37-.06.58.44.22.52.75 1.83.82 1.96.07.14.11.3.02.48-.09.17-.14.28-.27.44-.14.15-.29.35-.41.47-.14.13-.28.28-.12.56.16.27.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.17-.18.72-.84.91-1.13.19-.28.39-.24.65-.14.26.1 1.66.78 1.95.92.29.14.48.21.55.33.07.13.07.74-.17 1.41z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const defaultWhatsAppUrl = getWhatsAppUrl();

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const visibleReviewCards = [
    reviews[reviewIndex % reviews.length],
    reviews[(reviewIndex + 1) % reviews.length],
    reviews[(reviewIndex + 2) % reviews.length],
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* 1. HERO + UNIFIED NAVBAR (INTEGRATED OVER PHOTO, NO BOTTOM BORDER, NO '+' SYMBOL) */}
      <section
        id="inicio"
        className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden text-white"
      >
        {/* NATURAL HERO PHOTO */}
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* NEUTRAL OVERLAY (CRISP LEGIBILITY, WITHOUT COLOR TINTS) */}
        <div className="absolute inset-0 bg-slate-900/60" />

        {/* UNIFIED HEADER (OVER PHOTO, NO BORDER BOTTOM) */}
        <header className="relative z-50 w-full bg-transparent">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
            {/* LOGO: QUIROSAN + SUBTITLE (NO '+' SYMBOL) */}
            <a href="#inicio" className="flex flex-col text-left group">
              <span className="text-2xl font-black text-white tracking-tight leading-none group-hover:text-teal-300 transition">
                Quirosan
              </span>
              <span className="mt-1 text-xs font-medium text-teal-300 tracking-wide">
                Quiromasaje y masaje deportivo
              </span>
            </a>

            {/* DESKTOP NAVTAB */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/90 transition hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA & MOBILE MENU */}
            <div className="flex items-center gap-3">
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>{copy.headerCta}</span>
              </a>

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-lg border border-white/20 p-2 text-white md:hidden hover:bg-white/10"
                aria-label="Abrir menú de navegación"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current stroke-2 fill-none">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* MOBILE NAV DROPDOWN */}
          {isMenuOpen && (
            <div className="border-t border-white/10 bg-slate-950/95 px-4 py-3 md:hidden">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="mt-2 border-t border-white/10 pt-2">
                  <a
                    href={defaultWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 py-2.5 text-sm font-semibold text-white"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {copy.heroCta}
                  </a>
                </div>
              </nav>
            </div>
          )}
        </header>

        <div className="relative z-10 mx-auto flex flex-1 max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
          <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl leading-none">
            Quirosan
          </h1>

          <p className="mt-4 text-xl font-medium text-teal-200 sm:text-2xl">
            {copy.headlineTagline}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
            {copy.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:flex-col">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 active:scale-95 sm:px-7 sm:py-3.5 sm:text-base"
            >
              <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>{copy.heroCta}</span>
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xs transition hover:bg-white/20 sm:px-6 sm:py-3.5 sm:text-base"
            >
              <span>{copy.servicesCta}</span>
            </a>
          </div>
        </div>

        {/* WAVE TRANSITION (OLA DE COLOR ENTRE HERO Y SERVICIOS) */}
        <div className="relative w-full overflow-hidden leading-none z-10 -mb-[1px]">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="block w-full h-12 sm:h-16 lg:h-24 text-slate-50"
          >
            <path
              d="M0,32 C240,85 480,10 720,55 C960,100 1200,20 1440,45 L1440,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* 2. SERVICIOS */}
      <section id="servicios" className="bg-slate-50 pb-0 pt-4 sm:pt-8">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {copy.servicesTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              {copy.servicesIntro}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const isLastOdd = services.length % 2 !== 0 && index === services.length - 1;
              return (
                <a
                  key={service.id}
                  href={getWhatsAppUrl(`Hola, me gustaría pedir cita o consultar sobre ${service.title} en Quirosan.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-200 hover:border-teal-400 hover:shadow-lg hover:-translate-y-1.5${isLastOdd ? " col-span-2 lg:col-span-1 lg:col-start-2" : ""
                    }`}
                >
                  {/* Icon bubble */}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 ring-1 ring-teal-100 transition-all group-hover:bg-teal-100 group-hover:ring-teal-200">
                    <ServiceIcon type={service.icon} />
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-sm font-bold leading-snug text-teal-700 transition group-hover:text-teal-800 sm:text-base">
                    {service.title}
                  </h3>

                  {/* Desc */}
                  <p className="mt-2 text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {service.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-teal-600 transition group-hover:text-teal-800">
                    <span>Pedir cita</span>
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current transition-transform group-hover:translate-x-0.5">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        {/* WAVE: servicios → nosotros */}
        <div className="relative w-full overflow-hidden leading-none -mb-[1px]">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-10 sm:h-14 lg:h-20 text-teal-700">
            <path d="M0,40 C360,90 1080,0 1440,50 L1440,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* 3. ¿POR QUÉ QUIROSAN? */}
      <section id="nosotros" className="bg-teal-700 pb-0 pt-4 sm:pt-8">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {copy.aboutTitle}
            </h2>
            <p className="mt-3 text-base text-teal-100">
              {copy.aboutIntro}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="rounded-xl border border-teal-600/40 bg-white/10 backdrop-blur-sm p-6"
              >
                <span className="inline-block text-xl font-bold text-teal-300">
                  {r.num}
                </span>
                <h3 className="mt-2 text-base font-bold text-white">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-teal-100/80 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* WAVE: nosotros → opiniones */}
        <div className="relative w-full overflow-hidden leading-none -mb-[1px]">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-10 sm:h-14 lg:h-20 text-slate-50">
            <path d="M0,60 C480,0 960,100 1440,30 L1440,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* 4. GOOGLE REVIEWS CAROUSEL */}
      <section id="opiniones" className="bg-slate-50 pb-0 pt-4 sm:pt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <GoogleIcon className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Google Reviews
                </span>
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {copy.reviewsTitle}
              </h2>
              <p className="mt-1 text-sm text-slate-600">{copy.reviewsIntro}</p>
            </div>

            {/* CONTROLS & RATING */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <span className="text-sm font-bold text-slate-900">{rating}</span>
                <StarRow />
                <span className="text-xs text-slate-500">({reviewsCount})</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevReview}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:border-teal-600 hover:text-teal-700 transition"
                  aria-label="Reseña anterior"
                >
                  <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextReview}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:border-teal-600 hover:text-teal-700 transition"
                  aria-label="Siguiente reseña"
                >
                  <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* REVIEWS GRID */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {visibleReviewCards.map((review, i) => (
              <article
                key={`${review.name}-${i}`}
                className={`flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition ${i === 0 ? "block" : i === 1 ? "hidden md:flex" : "hidden lg:flex"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <StarRow />
                    <span className="text-xs text-slate-500 font-medium">
                      Google Maps
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-teal-800 font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{review.name}</h3>
                    <p className="text-xs text-slate-500">
                      {review.treatment} · {review.date}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* DOTS */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setReviewIndex(index)}
                className={`h-2.5 rounded-full transition-all ${reviewIndex === index ? "w-6 bg-teal-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                aria-label={`Ir a reseña ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* WAVE: opiniones → contacto */}
        <div className="relative w-full overflow-hidden leading-none -mb-[1px] mt-10 sm:mt-16">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-10 sm:h-14 lg:h-20 text-teal-700">
            <path d="M0,20 C300,80 700,0 1000,55 C1200,90 1350,30 1440,60 L1440,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* 5. UBICACIÓN Y HORARIOS */}
      <section id="contacto" className="bg-teal-700 pb-0 pt-4 sm:pt-8">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {copy.contactTitle}
            </h2>
            <p className="mt-3 text-base text-teal-100">{copy.contactIntro}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
            {/* CONTACT CARD */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-teal-600/40 bg-white/10 backdrop-blur-sm p-6 sm:p-8">
              <div>
                <h3 className="text-lg font-bold text-white">Información de la clínica</h3>
                <dl className="mt-5 space-y-5">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-teal-200">
                      Dirección
                    </dt>
                    <dd className="mt-1 flex items-start gap-2 text-white/90 text-sm font-medium">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal-300 shrink-0 mt-0.5 fill-none stroke-current stroke-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z" />
                        <circle cx="12" cy="9" r="3" />
                      </svg>
                      <span>{clinicData.address}</span>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-teal-200">
                      Teléfono
                    </dt>
                    <dd className="mt-1 flex items-center gap-2 text-sm font-medium">
                      <PhoneIcon className="h-5 w-5 text-teal-300 shrink-0" />
                      <a
                        href={getTelHref()}
                        className="text-white/90 hover:text-white underline-offset-4 hover:underline"
                      >
                        {clinicData.phone}
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-teal-200">
                      Horarios de atención
                    </dt>
                    <dd className="mt-2 space-y-1.5 text-xs text-white/80">
                      {clinicData.hours.map((slot) => (
                        <div key={slot.days} className="flex justify-between border-b border-teal-600/40 pb-1">
                          <span className="font-medium text-teal-100">{slot.days}</span>
                          <span className="font-semibold text-white">{slot.time}</span>
                        </div>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 pt-5 border-t border-teal-600/40 flex flex-col gap-2.5">
                <a
                  href={defaultWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>{copy.contactCta}</span>
                </a>
                <a
                  href={getTelHref()}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-teal-500/60 bg-teal-800/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-600"
                >
                  <PhoneIcon className="h-4 w-4 text-teal-200" />
                  <span>Llamar a la clínica</span>
                </a>
              </div>
            </div>

            {/* MAP CARD */}
            <div className="lg:col-span-7 flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <iframe
                title={`Mapa de Quirosan en ${clinicData.address}`}
                src={getMapEmbedUrl()}
                className="h-80 w-full flex-1 border-0 min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between border-t border-slate-200 bg-white px-5 py-3">
                <span className="text-xs text-slate-600">
                  Quirosan · {clinicData.address}
                </span>
                <a
                  href={getMapLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-teal-700 hover:underline"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* WAVE: contacto → footer */}
        <div className="relative w-full overflow-hidden leading-none -mb-[1px] mt-10 sm:mt-16">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-10 sm:h-14 lg:h-20 text-white">
            <path d="M0,50 C200,10 400,80 720,40 C1040,0 1300,70 1440,45 L1440,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-white py-10 text-slate-600 text-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-lg leading-tight">Quirosan</span>
              <span className="text-xs text-slate-500">Quiromasaje y masaje deportivo en {clinicData.city}</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium" aria-label="Enlaces pie de página">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-teal-700">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Quirosan. Todos los derechos reservados.</p>
            <p>Quiromasaje y terapias manuales con cita previa.</p>
          </div>
        </div>
      </footer>

      {/* 7. FLOATING WHATSAPP CTA */}
      <a
        href={defaultWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-700 active:scale-95"
        aria-label="Pedir cita por WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span>{copy.floatingCta}</span>
      </a>
    </div>
  );
}
