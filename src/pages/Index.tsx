import { motion } from "framer-motion";
import pfp from "@/assets/pfp.png";
import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const experiences = [
  {
    company: "Meta Platforms",
    roles: [
      {
        title: "Systems Engineer, LLM Inference Infra",
        location: "Menlo Park, CA",
        period: "May 2025 – Present",
        bullets: [
          "Designed and built MSL's premier internal OSS model deployment service from scratch — distributed inference, spec decode, multi-modality.",
          "Developed distributed, disaggregated inference features with spec decoding across Meta's inference platform.",
          "Org-wide point person for OSS model deployments; supported high-priority LLM workloads and RL.",
          "Led backend development of TPGS dashboard for MSL researchers and leadership.",
          "Created agent skills automating service management, improving deployment success rate by 29%.",
        ],
      },
      {
        title: "Software Engineer, Creator Insights",
        location: "Menlo Park, CA",
        period: "Mar 2024 – Apr 2025",
        bullets: [
          "Led content-level follows/unfollows metric — unlocking insights for ~200M creators, reaching parity with Instagram & YouTube.",
          "Designed ratio metrics (likes, comments, shares per view) for ~200M creators.",
          "Led Advanced Protection (2FA) enrollment, reaching 21% of all large creators.",
        ],
      },
      {
        title: "SWE Intern, Network Infra",
        location: "Menlo Park, CA",
        period: "May – Aug 2022",
        bullets: [
          "Built internal on-call performance visualization service.",
          "Refactored integration tests for network config generation across 800K+ objects globally.",
        ],
      },
      {
        title: "Facebook University Intern",
        location: "New York, NY",
        period: "Jun – Aug 2021",
        bullets: [
          "Built social travel planner app with Java, Android Studio, and Google APIs.",
        ],
      },
    ],
  },
  {
    company: "Atlassian",
    roles: [
      {
        title: "Software Engineer, Cloud Enterprise",
        location: "New York, NY",
        period: "Jul 2023 – Mar 2024",
        bullets: [
          "Automated FedRAMP compliance detection — replaced 80% of manual processes.",
          "End-to-end features across SQL, Kotlin/Java backend, and TypeScript/React frontend.",
          "Built custom search API with compliance metrics for managers.",
        ],
      },
    ],
  },
];

const skills = [
  "Python", "Rust", "C++", "Go", "Java", "Kotlin", "TypeScript", "React",
  "SQL", "Docker", "AWS", "Kubernetes", "PostgreSQL", "Node.js", "Git",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            FC<span className="text-primary">.</span>
          </span>
          <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-end">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Systems Engineer · Meta
            </p>
            <h1 className="font-display text-6xl md:text-8xl font-extrabold text-foreground leading-[0.9] tracking-tight mb-6">
              Flaurencya
              <br />
              <span className="text-primary">Ciputra</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I build systems that scale to millions — from LLM inference infrastructure 
              to creator analytics tools. Yale CS '23. Currently making AI inference 
              faster at Meta.
            </p>
            <div className="flex gap-3 mt-8">
              <a
                href="mailto:flaurencya.ciputra@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-foreground/90 transition-colors"
              >
                <Mail className="w-4 h-4" /> Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/flaurencya-ciputra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-foreground text-foreground text-sm font-medium rounded-sm hover:bg-foreground hover:text-background transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="w-64 h-80 overflow-hidden rounded-sm border-2 border-foreground/10 grayscale hover:grayscale-0 transition-all duration-500">
              <img src={pfp} alt="Flaurencya Ciputra" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Mobile photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="md:hidden mt-10 flex justify-center"
        >
          <div className="w-48 h-60 overflow-hidden rounded-sm border-2 border-foreground/10 grayscale hover:grayscale-0 transition-all duration-500">
            <img src={pfp} alt="Flaurencya Ciputra" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </section>

      {/* Marquee-like education strip */}
      <div className="border-y border-border bg-card">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <span className="text-foreground font-semibold">Yale University</span>
          <span>B.S. Computer Science</span>
          <span>Class of 2023</span>
          <span>Distributed Systems</span>
          <span>Algorithms</span>
          <span>Robotics</span>
        </div>
      </div>

      {/* Experience */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Where I've
            <br />
            <span className="text-primary">worked</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, ei) => (
            <motion.div
              key={exp.company}
              custom={ei + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                {exp.company}
                <div className="h-px flex-1 bg-border" />
              </h3>

              <div className="space-y-8">
                {exp.roles.map((role, ri) => (
                  <div key={ri} className="grid md:grid-cols-[200px_1fr] gap-4">
                    <div className="font-mono text-xs text-muted-foreground pt-1">
                      <p>{role.period}</p>
                      <p className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {role.location}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{role.title}</h4>
                      <ul className="space-y-1.5">
                        {role.bullets.map((b, bi) => (
                          <li key={bi} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/30">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-y border-border bg-card">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Tools &<br />
              <span className="text-primary">languages</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="px-4 py-2 border border-border bg-background text-foreground font-mono text-sm rounded-sm cursor-default hover:border-primary hover:text-primary transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="mt-10 font-mono text-xs text-muted-foreground uppercase tracking-wider">
            <p>Domains: ML Systems · Infra & Backend · Full-stack · iOS · Android · Web</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Let's<br />
              <span className="text-primary">talk</span>
            </h2>
            <p className="text-muted-foreground max-w-sm">
              Whether it's distributed systems, LLM infrastructure, or something 
              completely unexpected — I'm always down for a good conversation.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:flaurencya.ciputra@gmail.com"
              className="group flex items-center justify-between p-5 border border-border rounded-sm hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">flaurencya.ciputra@gmail.com</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/flaurencya-ciputra"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 border border-border rounded-sm hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">linkedin.com/in/flaurencya-ciputra</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">© 2026 Flaurencya Ciputra</span>
          <span className="font-mono text-xs text-muted-foreground">Built with care ◆</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
