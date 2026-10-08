import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import portrait from "@/assets/mbali-mazibuko-profile-cropped.jpg";

interface PortfolioPageProps {
  activeSection?: string;
}

const technicalSkills = [
  "Java",
  "Spring Boot",
  "Python",
  "REST APIs",
  "SQL",
  "Relational database design",
  "ORM",
  "Apache Kafka",
  "Apache ActiveMQ",
  "Docker",
  "Git & GitLab CI",
  "Build automation",
  "Linux fundamentals",
  "HTML",
  "CSS",
  "JavaScript",
  "API testing with Postman",
];

const softSkills = [
  "Attention to detail & accuracy",
  "Analytical research",
  "Problem solving",
  "Data organisation & compliance",
  "Collaborative teamwork",
  "Effective communication",
  "Microsoft Office proficiency",
  "Fast learner of new tools",
];

const projects = [

   {
    title: "Sentiment Analysis Tool",
    description:
      "A branch of natural language processing that identifies the emotional polarity expressed in text. Organisations use it to measure how customers, users or the public feel about products, services and events.",
    tech: ["React","JavaScript", "HTML & CSS", "SQL", "TypeScript"],
    variant: "brand" as const,
  },
  {
    title: "ForgeAI",
    description:
      "CodeForge AI is a coding content generator. You type a topic, pick what kind of content you want, working code, a step-by-step tutorial, or a blog article and it uses Google's Gemini AI to generate it for you.",
    tech: ["bolt.ai"],
    variant: "accent" as const,
  },
  {
    title: "CareerMate AI",
    description:
      "This is an AI chatbot that assists the user with CV creation, Job application and interview preparation. The application provides tailored CV guidance, generates interview questions based on targeted roles.",
    tech: ["React","JavaScript", "HTML & CSS", "SQL", "TypeScript"],
    variant: "mint" as const,
  },
];

const experiences = [
  {
    period: "Mar 2025 — May 2025",
    type: "Volunteering",
    title: "Peer Mentor · WeThinkCode_",
    detail:
      "Supported peers in problem-solving and knowledge sharing, contributed to collaborative learning and meeting project deadlines, and developed adaptability with technical tools and structured workflows.",
    dot: "brand" as const,
  },
  {
    period: "Jul 2020 — Nov 2020",
    type: "Volunteering",
    title: "Legal Trainee · Law Clinic, University of Johannesburg",
    detail:
      "Conducted detailed research and drafting requiring precision and compliance with standards, managed case documentation and filing, and engaged in client consultations and problem analysis.",
    dot: "accent" as const,
  },
];

const credentials = [
  {
    period: "2025",
    type: "Certification",
    title: "AWS Cloud Practitioner Essentials · AWS Training and Certification",
    detail: "Foundational cloud knowledge covering AWS core services, security, architecture and pricing.",
    dot: "mint" as const,
  },
  {
    period: "2025",
    type: "Certification",
    title: "Full Stack Development · FNB App Academy",
    detail: "Intensive programme covering front-end and back-end development and API integration.",
    dot: "brand" as const,
  },
  {
    period: "2025",
    type: "Certification",
    title: "GenAI Course for Software Engineers · WeThinkCode_",
    detail: "Applying generative AI tooling and techniques within software engineering workflows.",
    dot: "accent" as const,
  },
  {
    period: "2024",
    type: "Education",
    title: "Occupational Certificate: Software Engineer (NQF 6) · WeThinkCode_",
    detail: "Johannesburg Campus, Cohort 2024. Systems analysis, software design, coding, testing and integration.",
    dot: "brand" as const,
  },
  {
    period: "2021",
    type: "Education",
    title: "LLB (Law) · University of Johannesburg",
    detail: "Legal training that built rigorous research, drafting and analytical reasoning skills.",
    dot: "accent" as const,
  },
  {
    period: "2015",
    type: "Education",
    title: "Matric (Grade 12) · Tiisetsang High School, Bethlehem",
    detail: "National Senior Certificate.",
    dot: "mint" as const,
  },
];

const dotClass = {
  brand: "bg-brand ring-brand/15",
  accent: "bg-accent ring-accent/15",
  mint: "bg-mint ring-mint/20",
};

const tagClass = {
  brand: "bg-brand/10 text-brand",
  accent: "bg-accent/15 text-accent-text",
  mint: "bg-mint/20 text-mint-text",
};

export function PortfolioPage({ activeSection }: PortfolioPageProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!activeSection || activeSection === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(activeSection);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5">
        {/* HERO / ABOUT */}
        <section
          id="home"
          className="grid items-center gap-8 scroll-mt-24 pt-16 pb-10 md:grid-cols-[1fr_auto] md:pt-24 md:pb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-mint/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-mint-text">
              <span className="size-2 rounded-full bg-mint" />
              Open to opportunities
            </span>
            <h1 className="mt-5 max-w-[20ch] font-display text-5xl font-bold leading-[1.05] text-ink md:text-6xl">
              Goodness Mbali Mazibuko
            </h1>
            <p className="mt-2 font-display text-2xl font-semibold text-brand">
              Software Engineer
            </p>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-ink/70">
              Software Engineering graduate based in Johannesburg with hands-on experience in systems
              analysis, software design, coding, testing and integration. I work mainly in Java,
              Spring Boot and Python, building REST APIs and reliable database-backed services.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white ring-2 ring-brand/30 transition hover:bg-brand/90"
              >
                View my work
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink ring-1 ring-ink/15 transition hover:bg-white/80"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div className="w-40 md:w-56">
            <div className="overflow-hidden rounded-full bg-accent/15 ring-1 ring-ink/5">
              <img
                src={portrait}
                alt="Goodness Mbali Mazibuko portrait"
                width={512}
                height={512}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 border-t-2 border-dashed border-ink/10 py-14 md:py-20">
          <h2 className="max-w-[40ch] font-display text-3xl font-semibold text-ink">
            Skills that shape my work
          </h2>
          <p className="mt-2 max-w-[48ch] text-ink/60">
Java, Python and the analytical habits carried over from a legal background.
          </p>
          <div className="mt-8 space-y-6">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/10">
              <h3 className="font-display font-semibold text-ink">Technical</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-brand/10 px-3.5 py-1.5 text-sm font-semibold text-brand"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/10">
              <h3 className="font-display font-semibold text-ink">Soft skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent/15 px-3.5 py-1.5 text-sm font-semibold text-accent-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 border-t-2 border-dashed border-ink/10 py-14 md:py-20">
          <h2 className="max-w-[40ch] font-display text-3xl font-semibold text-ink">
            Selected projects
          </h2>
          <p className="mt-2 max-w-[48ch] text-ink/60">
Backend and full-stack work built during my software engineering training.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl bg-white p-6 ring-1 ring-ink/10 transition hover:-translate-y-1 hover:ring-brand/40"
              >
                <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tagClass[project.variant]}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="scroll-mt-24 border-t-2 border-dashed border-ink/10 py-14 md:py-20">
          <h2 className="max-w-[40ch] font-display text-3xl font-semibold text-ink">Education</h2>
          <div className="mt-8 space-y-4">
            {credentials
              .filter((c) => c.type === "Education")
              .map((item) => (
                <TimelineItem key={item.title} item={item} />
              ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="scroll-mt-24 border-t-2 border-dashed border-ink/10 py-14 md:py-20">
          <h2 className="max-w-[40ch] font-display text-3xl font-semibold text-ink">
            Certifications
          </h2>
          <div className="mt-8 space-y-4">
            {credentials
              .filter((c) => c.type === "Certification")
              .map((item) => (
                <TimelineItem key={item.title} item={item} />
              ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24 border-t-2 border-dashed border-ink/10 py-14 md:py-20">
          <h2 className="max-w-[40ch] font-display text-3xl font-semibold text-ink">
            Work experience
          </h2>
          <div className="mt-8 space-y-4">
            {experiences.map((item) => (
              <TimelineItem key={item.title} item={item} />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 py-14 md:py-20">
          <div className="rounded-[2.5rem] bg-brand p-8 text-white md:p-12">
            <h2 className="max-w-[30ch] font-display text-3xl font-semibold">
              Let's build something together
            </h2>
            <p className="mt-3 max-w-[48ch] text-white/80">
              I'm open to software engineering roles and graduate opportunities in Johannesburg and remotely.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                id="cv"
                href="/goodness-mbali-mazibuko-cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand transition hover:bg-white/90"
              >
                Download CV
              </a>
              <a
                href="mailto:gomazibjhb024@student.wethinkcode.co.za"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/25"
              >
                mbalimazibuko476@gmail.com
              </a>
              <a
                href="https://github.com/GoodnessSheCodes"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/25"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/goodness-mbali-mazibuko"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/25"
              >
                LinkedIn
              </a>
               <a
                href="https://prompt-case-studies.lovable.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/25"
              >
                The Art Of Prompt Engineering - Case Study
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer /> 
    </div>
  );
}

function TimelineItem({
  item,
}: {
  item: {
    period: string;
    type: string;
    title: string;
    detail: string;
    dot: keyof typeof dotClass;
  };
}) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <span className={`size-3 shrink-0 rounded-full ring-4 ${dotClass[item.dot]}`} />
        <span className="w-[2px] flex-1 bg-ink/10" />
      </div>
      <div className="pb-8">
        <div className="text-xs font-bold uppercase tracking-wider text-ink/50">
          {item.type} · {item.period}
        </div>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink">{item.title}</h3>
        <p className="mt-1 max-w-[52ch] text-sm text-ink/70">{item.detail}</p>
      </div>
    </div>
  );
}
