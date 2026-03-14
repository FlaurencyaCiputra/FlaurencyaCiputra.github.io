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
    <div className="min-h-screen bg-background selection:bg-primary/15 relative overflow-hidden">
      {/* Background blobs */}
      <div className="iridescent-blob w-[500px] h-[500px] top-[-100px] left-[-100px] bg-[hsl(260,70%,60%)]" />
      <div className="iridescent-blob w-[400px] h-[400px] top-[200px] right-[-150px] bg-[hsl(190,70%,50%)]" />
      <div className="iridescent-blob w-[350px] h-[350px] bottom-[400px] left-[10%] bg-[hsl(320,60%,55%)]" />

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 glass"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            <span className="gradient-text">flaurencya</span>
          </span>
          <div className="flex gap-6 text-sm text-muted-foreground font-medium">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 relative">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-sm font-semibold mb-3 tracking-wide gradient-text">
              Systems Engineer at Meta
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-5">
              Hi, I'm{" "}
              <span className="gradient-text">Flaurencya</span>
            </h1>
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              I build systems that scale to millions — from LLM inference infrastructure 
              to creator analytics tools. Yale CS '23. Currently making AI inference 
              faster at Meta.
            </p>
            <div className="flex gap-3 mt-7">
              <a
                href="mailto:flaurencya.ciputra@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 gradient-bg text-primary-foreground text-sm font-semibold rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              >
                <Mail className="w-4 h-4" /> Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/flaurencya-ciputra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 glass text-foreground text-sm font-semibold rounded-2xl hover:bg-card/80 transition-colors gradient-border"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="w-56 h-72 overflow-hidden rounded-3xl shadow-xl shadow-primary/15 gradient-border">
              <img src={pfp} alt="Flaurencya Ciputra" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Mobile photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="md:hidden mt-8 flex justify-center"
        >
          <div className="w-44 h-56 overflow-hidden rounded-3xl shadow-xl shadow-primary/15 gradient-border">
            <img src={pfp} alt="Flaurencya Ciputra" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </section>

      {/* Education strip */}
      <div className="glass border-y border-border/30">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap items-center gap-2.5 text-sm text-muted-foreground">
          {["Yale University", "B.S. Computer Science", "Class of 2023", "Distributed Systems", "Algorithms", "Robotics"].map((item, i) => (
            <span key={i} className={`glass px-3 py-1 rounded-xl text-xs ${i === 0 ? "font-semibold text-foreground" : ""}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <section id="work" className="max-w-4xl mx-auto px-6 py-20 relative">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Where I've <span className="gradient-text">worked</span>
          </h2>
          <p className="text-muted-foreground mt-2">A few places I've called home.</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, ei) => (
            <motion.div
              key={exp.company}
              custom={ei + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-3">
                {exp.company}
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              </h3>

              <div className="space-y-4">
                {exp.roles.map((role, ri) => (
                  <div key={ri} className="glass rounded-2xl p-5 hover:shadow-lg hover:shadow-primary/5 transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{role.title}</h4>
                      <span className="text-xs text-muted-foreground mt-1 sm:mt-0">{role.period}</span>
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
                      <MapPin className="w-3 h-3" /> {role.location}
                    </p>
                    <ul className="space-y-1.5">
                      {role.bullets.map((b, bi) => (
                        <li key={bi} className="text-sm text-muted-foreground leading-relaxed flex gap-2.5">
                          <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full gradient-bg" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative">
        <div className="glass border-y border-border/30">
          <div className="max-w-4xl mx-auto px-6 py-20">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Tools & <span className="gradient-text">languages</span>
              </h2>
              <p className="text-muted-foreground mt-2">Technologies I work with daily.</p>
            </motion.div>

            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="px-4 py-2 glass text-foreground text-sm font-medium rounded-2xl cursor-default hover:shadow-md hover:shadow-primary/10 transition-shadow gradient-border"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Domains: ML Systems · Infra & Backend · Full-stack · iOS · Android · Web
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 relative">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Let's <span className="gradient-text">connect</span>
            </h2>
            <p className="text-muted-foreground">
              Whether it's distributed systems, LLM infrastructure, or something 
              completely different — I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:flaurencya.ciputra@gmail.com"
              className="group flex items-center justify-between p-4 glass rounded-2xl hover:shadow-lg hover:shadow-primary/10 transition-all gradient-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md shadow-primary/20">
                  <Mail className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-sm text-foreground">flaurencya.ciputra@gmail.com</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/flaurencya-ciputra"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 glass rounded-2xl hover:shadow-lg hover:shadow-primary/10 transition-all gradient-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-md shadow-primary/20">
                  <Linkedin className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-sm text-foreground">linkedin.com/in/flaurencya-ciputra</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="glass border-t border-border/30">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-muted-foreground">
          <span>© 2026 Flaurencya Ciputra</span>
          <span className="gradient-text font-medium">Built with ♡</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
