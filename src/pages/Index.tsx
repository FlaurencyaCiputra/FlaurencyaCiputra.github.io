import { motion } from "framer-motion";
import pfp from "@/assets/pfp.png";
import { Mail, Linkedin, MapPin, ExternalLink, Sparkles, Code2, Briefcase, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const skills = [
  { label: "Python", color: "bg-peach" },
  { label: "Rust", color: "bg-lavender" },
  { label: "C++", color: "bg-mint" },
  { label: "Go", color: "bg-sky" },
  { label: "Java", color: "bg-lemon" },
  { label: "Kotlin", color: "bg-peach" },
  { label: "React", color: "bg-lavender" },
  { label: "TypeScript", color: "bg-mint" },
  { label: "SQL", color: "bg-sky" },
  { label: "Docker", color: "bg-lemon" },
  { label: "AWS", color: "bg-peach" },
  { label: "Kubernetes", color: "bg-lavender" },
  { label: "PostgreSQL", color: "bg-mint" },
  { label: "Node", color: "bg-sky" },
  { label: "Git", color: "bg-lemon" },
];

const experiences = [
  {
    company: "Meta Platforms",
    roles: [
      {
        title: "Systems Engineer — LLM Inference Infra",
        location: "Menlo Park, CA",
        period: "May 2025 – Present",
        bullets: [
          "Designed and built MSL's premier internal OSS model deployment service from scratch, enabling distributed inference, spec decode, and multi-modality.",
          "Developed features for distributed, disaggregated inference with spec decoding across Meta's inference platform.",
          "Became org-wide point person for OSS model deployments, supporting high-priority LLM workloads and RL.",
          "Led backend development of TPGS dashboard for MSL researchers and leadership.",
          "Created agent skills automating service management and troubleshooting, improving deployment success rate by 29%.",
        ],
      },
      {
        title: "Software Engineer — Creator Insights",
        location: "Menlo Park, CA",
        period: "Mar 2024 – Apr 2025",
        bullets: [
          "Led design and rollout of content-level follows/unfollows metric, unlocking insights for ~200M creators.",
          "Designed ratio metrics (likes, comments, shares per view) reaching parity with Instagram and YouTube Studio.",
          "Led Advanced Protection (2FA) enrollment, reaching 21% of all large creators.",
        ],
      },
      {
        title: "Software Engineer Intern — Network Infra",
        location: "Menlo Park, CA",
        period: "May – Aug 2022",
        bullets: [
          "Created internal service visualizing engineers' on-call performance and product quality.",
          "Refactored integration tests for network config generation across 800K+ objects globally.",
        ],
      },
      {
        title: "Facebook University Intern",
        location: "New York, NY",
        period: "Jun – Aug 2021",
        bullets: [
          "Built an Instagram-like social travel planner app with Java, Android Studio, and Google APIs.",
        ],
      },
    ],
  },
  {
    company: "Atlassian",
    roles: [
      {
        title: "Software Engineer — Cloud Enterprise",
        location: "New York, NY",
        period: "Jul 2023 – Mar 2024",
        bullets: [
          "Automated FedRAMP compliance detection, replacing 80% of manual processes.",
          "Implemented end-to-end features across SQL, Kotlin/Java, and TypeScript/React layers.",
          "Delivered custom search API with compliance metrics for managers.",
        ],
      },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-handwriting text-2xl text-primary font-bold">FC ✿</span>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">about</a>
            <a href="#experience" className="hover:text-primary transition-colors">work</a>
            <a href="#skills" className="hover:text-primary transition-colors">skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">say hi</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-52 h-52 rounded-[2rem] overflow-hidden border-4 border-primary/30 shadow-lg rotate-2 hover:rotate-0 transition-transform duration-300">
              <img src={pfp} alt="Flaurencya Ciputra" className="w-full h-full object-cover" />
            </div>
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-4 -right-4 text-3xl"
            >
              ✨
            </motion.span>
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.3 }}
              className="absolute -bottom-2 -left-3 text-2xl"
            >
              🌸
            </motion.span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            <p className="font-handwriting text-2xl text-primary mb-1">hey there, i'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3 tracking-tight">
              Flaurencya Ciputra
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Systems engineer who loves building things at scale — from LLM inference infra to creator tools — currently making AI go brrr at <span className="text-primary font-semibold">Meta</span> 🚀
            </p>
            <div className="flex gap-3 mt-6 justify-center md:justify-start">
              <a
                href="mailto:flaurencya.ciputra@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" /> say hello
              </a>
              <a
                href="https://www.linkedin.com/in/flaurencya-ciputra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-foreground text-sm font-medium hover:bg-muted transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="font-handwriting text-3xl text-primary">a little about me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <GraduationCap className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Yale University</h3>
              <p className="text-sm text-muted-foreground">B.S. Computer Science • Class of 2023</p>
              <p className="text-xs text-muted-foreground mt-2">
                Distributed Systems • Algorithms • Software Engineering • Intelligent Robotics
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <Code2 className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">What I do</h3>
              <p className="text-sm text-muted-foreground">
                ML Systems • Infra & Backend • Full-stack • iOS/Android/Web
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                I love building systems that scale to millions and making complex things feel simple ♡
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="font-handwriting text-3xl text-primary">where i've worked</h2>
          </div>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp, ei) => (
            <motion.div
              key={exp.company}
              custom={ei + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                {exp.company === "Meta Platforms" ? "🔵" : "🔷"} {exp.company}
              </h3>
              <div className="space-y-6 ml-4 border-l-2 border-primary/20 pl-6">
                {exp.roles.map((role, ri) => (
                  <div key={ri}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h4 className="font-semibold text-foreground text-sm">{role.title}</h4>
                      <span className="text-xs text-muted-foreground">{role.period}</span>
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3" /> {role.location}
                    </p>
                    <ul className="space-y-1.5">
                      {role.bullets.map((b, bi) => (
                        <li key={bi} className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-['✦'] before:absolute before:left-0 before:text-primary before:text-xs">
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
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-5 h-5 text-primary" />
            <h2 className="font-handwriting text-3xl text-primary">things i speak fluently</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 3 : -3 }}
                className={`${skill.color} px-4 py-2 rounded-full text-sm font-medium text-foreground cursor-default shadow-sm`}
              >
                {skill.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-10 border border-border shadow-sm text-center"
        >
          <span className="text-4xl mb-4 block">💌</span>
          <h2 className="font-handwriting text-3xl text-primary mb-2">let's connect!</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Whether you want to chat about distributed systems, LLMs, or just say hi — my inbox is always open.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:flaurencya.ciputra@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" /> flaurencya.ciputra@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/flaurencya-ciputra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-muted transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          made with ♡ and a little bit of ✨ • flaurencya ciputra © 2026
        </p>
      </footer>
    </div>
  );
};

export default Index;
