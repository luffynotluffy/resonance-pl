import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoAsset from "../assets/resonance-logo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RESONANCE | Youth-Led Organisation | Kraków, Poland" },
      { name: "description", content: "RESONANCE is a youth-led organisation based in Kraków, Poland. We work with young people through Erasmus+ mobility, non-formal education, international cooperation, and youth-focused initiatives." },
      { property: "og:title", content: "RESONANCE | Youth-Led Organisation | Kraków, Poland" },
      { property: "og:description", content: "RESONANCE is a youth-led organisation based in Kraków, Poland. We work with young people through Erasmus+ mobility, non-formal education, international cooperation, and youth-focused initiatives." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RESONANCE | Youth-Led Organisation | Kraków, Poland" },
      { name: "twitter:description", content: "RESONANCE is a youth-led organisation based in Kraków, Poland. We work with young people through Erasmus+ mobility, non-formal education, international cooperation, and youth-focused initiatives." },
    ],
  }),
});

const projectCategories = [
  {
    action: "KA152-YOU",
    name: "Youth Exchanges",
    description: "Short-term mobilities where young people come together to learn, exchange ideas, and grow.",
  },
  {
    action: "KA153-YOU",
    name: "Training Courses",
    description: "Professional development opportunities for youth workers and leaders.",
  },
];

const focusAreas = [
  {
    emoji: "🧠",
    title: "Mind",
    description: "Mental wellbeing, emotional resilience, and meaningful youth participation.",
  },
  {
    emoji: "🤖",
    title: "Tech",
    description: "Digital wellbeing, technology literacy, and mindful online spaces.",
  },
  {
    emoji: "🌱",
    title: "Planet",
    description: "Sustainability, environmental awareness, and green youth initiatives.",
  },
  {
    emoji: "🌍",
    title: "Society",
    description: "Inclusion, diversity, international cooperation, and active citizenship.",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Focus", href: "#focus" },
  { label: "Join", href: "#join" },
  { label: "Contact", href: "#contact" },
];

const contactEmail = "info.resonance.pl@gmail.com";

function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function Reveal({
  children,
  className = "",
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="RESONANCE logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-heading text-lg font-semibold tracking-tight text-deep-teal">
            RESONANCE
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-deep-teal/80 transition-colors hover:text-deep-teal"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HeroWave() {
  return (
    <svg
      className="absolute bottom-0 left-0 right-0 w-full text-cream/5"
      viewBox="0 0 1440 120"
      fill="currentColor"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0,64 C480,128 960,0 1440,64 L1440,120 L0,120 Z" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-deep-teal px-6 py-24 md:py-32">
      <HeroWave />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="animate-fade-in mx-auto mb-8 flex justify-center">
          <div className="rounded-3xl bg-cream p-3 shadow-xl shadow-black/10">
            <img
              src={logoAsset.url}
              alt="RESONANCE logo"
              className="h-24 w-24 rounded-2xl object-cover md:h-32 md:w-32"
            />
          </div>
        </div>
        <h1 className="animate-fade-in-delay font-heading text-5xl font-extrabold tracking-tight text-gold md:text-7xl">
          RESONANCE
        </h1>
        <p className="animate-fade-in-delay mt-4 font-heading text-xl font-medium tracking-wide text-cream/90 md:text-2xl">
          Mind · Tech · Planet · Society
        </p>
        <p className="animate-fade-in-delay-2 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
          RESONANCE is a youth-led organisation working with young people through Erasmus+
          mobility, non-formal education, international cooperation, and youth-focused
          initiatives.
        </p>
        <div className="animate-fade-in-delay-2 mt-10">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 font-heading font-semibold text-deep-teal transition-all duration-300 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20"
          >
            Explore Our Projects
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-center font-heading text-sm font-semibold uppercase tracking-widest text-bright-teal">
            About RESONANCE
          </p>
          <h2 className="mt-3 text-center font-heading text-3xl font-bold text-deep-teal md:text-4xl">
            Youth-led. International. Impact-driven.
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              RESONANCE is a youth-led organisation based in{" "}
              <span className="font-semibold text-deep-teal">Kraków, Poland</span>. We
              believe in youth empowerment through international cooperation, non-formal
              learning, and Erasmus+ opportunities.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-cream/70 p-5">
                <h3 className="font-heading font-semibold text-deep-teal">Our Focus</h3>
                <p className="mt-2 text-muted-foreground">
                  Digital wellbeing & technology, mental wellbeing, sustainability,
                  inclusion, diversity, and youth participation.
                </p>
              </div>
              <div className="rounded-xl bg-cream/70 p-5">
                <h3 className="font-heading font-semibold text-deep-teal">Our Approach</h3>
                <p className="mt-2 text-muted-foreground">
                  We create safe spaces for learning, exchange, and action — connecting
                  young people across Europe and beyond.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center font-heading text-sm font-semibold uppercase tracking-widest text-bright-teal">
            Our Erasmus+ Projects
          </p>
          <h2 className="mt-3 text-center font-heading text-3xl font-bold text-deep-teal md:text-4xl">
            Mobility. Learning. Cooperation.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projectCategories.map((category, index) => (
            <Reveal key={category.action} className="h-full" delay={`${index * 100}ms`}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-deep-teal/10 px-3 py-1 font-mono text-xs font-semibold text-deep-teal">
                    {category.action}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold text-deep-teal">
                  {category.name}
                </h3>
                <p className="mt-2 text-muted-foreground">{category.description}</p>
                <div className="mt-auto pt-8">
                  <div className="rounded-xl border border-dashed border-border bg-cream/50 p-6 text-center">
                    <p className="font-heading text-sm font-semibold text-deep-teal">
                      No open calls right now
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Check back soon — new opportunities will appear here.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Focus() {
  return (
    <section id="focus" className="bg-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center font-heading text-sm font-semibold uppercase tracking-widest text-bright-teal">
            Our Focus
          </p>
          <h2 className="mt-3 text-center font-heading text-3xl font-bold text-deep-teal md:text-4xl">
            Mind · Tech · Planet · Society
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => (
            <Reveal key={area.title} delay={`${index * 100}ms`}>
              <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:border-bright-teal/30 hover:shadow-md">
                <span className="text-4xl" role="img" aria-label={area.title}>
                  {area.emoji}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-deep-teal">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="join" className="bg-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-center font-heading text-sm font-semibold uppercase tracking-widest text-bright-teal">
            Join Us
          </p>
          <h2 className="mt-3 text-center font-heading text-3xl font-bold text-deep-teal md:text-4xl">
            Join the RESONANCE Team
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm md:p-10">
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground md:text-xl">
              Want to co-create Erasmus+ projects and youth initiatives with us? We&apos;re
              always happy to meet motivated young people ready to get involved.
            </p>
            <div className="mt-8 space-y-4 rounded-xl bg-cream/70 p-6 text-left md:p-8">
              <p className="font-heading font-semibold text-deep-teal">
                How to apply:
              </p>
              <ol className="list-decimal space-y-2 pl-5 text-foreground">
                <li>Send your CV and motivation letter to us.</li>
                <li>Our team will review your application and get back to you.</li>
                <li>If there&apos;s a match, you&apos;ll join our team and upcoming activities.</li>
              </ol>
            </div>
            <div className="mt-8">
              <a
                href={`mailto:${contactEmail}?subject=Volunteer Application - RESONANCE`}
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 font-heading font-semibold text-deep-teal transition-all duration-300 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20"
              >
                Send CV & Motivation Letter
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Write to{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-deep-teal underline-offset-4 hover:underline"
              >
                {contactEmail}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-deep-teal px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            Get in Touch
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-cream md:text-4xl">
            Let&apos;s build something meaningful together.
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
            <div className="space-y-4 text-cream/90">
              <p className="font-heading text-2xl font-bold text-gold">RESONANCE</p>
              <p>Kraków, Poland</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-gold underline-offset-4 transition-colors hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-cream/20 bg-cream/10 px-5 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:bg-cream/20"
              >
                Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-cream/20 bg-cream/10 px-5 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:bg-cream/20"
              >
                Facebook
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-cream/20 bg-cream/10 px-5 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:bg-cream/20"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-cream px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RESONANCE. Youth-led organisation based in Kraków,
          Poland.
        </p>
        <p className="text-sm text-muted-foreground">
          Co-funded by the Erasmus+ Programme of the European Union.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Focus />
        <Join />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
