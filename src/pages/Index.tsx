import { motion } from "framer-motion";
import pfp from "@/assets/pfp.png";
import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const }
  })
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
    "Designed and built MSL's premier internal OSS model production deployment service supporting distributed inference, spec decode, multi-modality.",
    "Became org-wide point person for OSS model deployments, supporting customers and onboarding model configs and customizations for high-priority LLM deployments, latency/throughput sensitive workloads, and Reinforcement Learning",
    "Org-wide point person for OSS model deployments; supported high-priority LLM workloads and RL.",
    "Led backend development of Tokens Per GPU Second (TPGS) dashboard for MSL researchers and leadership."]
  },
  {
    title: "Software Engineer, Creator Insights",
    location: "Menlo Park, CA",
    period: "Mar 2024 – Apr 2025",
    bullets: [
    "Led the design, implementation, rollout, and QA of a new metric to track follows/unfollows at the content level, unlocking insights for approximately 200 creators and reaching parity with Instagram and YouTube. Managed cross platform and media technical challenges and client/server logging and storage costs.",
    "Designed and implemented new ratio metrics (e.g., likes, comments, shares per view) helping approximately 200 million creators gauge content effectiveness and reaching parity with Instagram and YouTube Studio.",
    "Led Advanced Protection (2FA) enrollment amongst creators via experimental design, technical implementation of onboardingflows, and collaboration with cross functional teams, data science, and user researchers. Enrolled 21% of all large creators."]
  },
  {
    title: "SWE Intern, Network Infra",
    location: "Menlo Park, CA",
    period: "May – Aug 2022",
    bullets: [
    "Built internal on-call performance visualization service.",
    "Refactored integration tests for network config generation across 800K+ objects globally."]

  },
  {
    title: "Facebook University Intern",
    location: "New York, NY",
    period: "Jun – Aug 2021",
    bullets: [
    "Built social travel planner app with Java, Android Studio, and Google APIs."]

  }]

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
    "Built custom search API with compliance metrics for managers."]

  }]

}];


const skills = [
"Python", "Rust", "C++", "Go", "Java", "Kotlin", "TypeScript", "React",
"SQL", "Docker", "AWS", "Kubernetes", "PostgreSQL", "Node.js", "Git"];


const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/15">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">

        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-foreground tracking-tight">
            flaurencya<span className="text-primary">.</span>
          </span>
          <div className="flex gap-6 text-sm text-muted-foreground font-medium">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#contact" className="hover:text-foreground transition-colors bg-primary">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-sm text-primary font-medium mb-3 tracking-wide">
              Systems Engineer at Meta
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-5">
              Hi, I'm Flaurencya Ciputra
            </h1>
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              I build systems that scale to millions — from LLM inference infrastructure
              to creator analytics tools. Yale CS '23. Currently making AI inference
              faster at Meta.
            </p>
            <div className="flex gap-3 mt-7">
              <a
                href="mailto:flaurencya.ciputra@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:opacity-90 transition-opacity shadow-sm shadow-primary/20">

                <Mail className="w-4 h-4" /> Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/flaurencya-ciputra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-card text-foreground text-sm font-medium rounded-xl hover:bg-secondary transition-colors">

                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block">

            <div className="w-56 h-68 overflow-hidden rounded-3xl shadow-lg shadow-primary/10 ring-1 ring-border">
              <img src={pfp} alt="Flaurencya Ciputra" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Mobile photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="md:hidden mt-8 flex justify-center">

          <div className="w-44 h-56 overflow-hidden rounded-3xl shadow-lg shadow-primary/10 ring-1 ring-border">
            <img src={pfp} alt="Flaurencya Ciputra" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </section>

      {/* Education strip */}
      <div className="bg-secondary/50 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <span className="bg-card px-3 py-1 rounded-lg shadow-sm">Distributed Systems</span>
          <span className="bg-card px-3 py-1 rounded-lg shadow-sm">LLM Inference Infra</span>
          <span className="bg-card px-3 py-1 rounded-lg shadow-sm">Backend and Fullstack</span>
          <span className="bg-card px-3 py-1 rounded-lg shadow-sm">Constant Learning</span>
        </div>
      </div>

      {/* Experience */}
      <section id="work" className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10">

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Where I've worked
          </h2>
          <p className="text-muted-foreground mt-2">A few places I've called home.</p>
        </motion.div>








































      </section>

      {/* Skills */}
      <section id="skills" className="bg-secondary/30 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8">

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Tools & languages
            </h2>
            <p className="text-muted-foreground mt-2">Technologies I work with daily.</p>
          </motion.div>

          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, i) =>
            <motion.span
              key={skill}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="px-4 py-2 bg-card border border-border/60 text-foreground text-sm font-medium rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-default">

                {skill}
              </motion.span>
            )}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Domains: ML Systems · Infra & Backend · Full-stack · iOS · Android · Web
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
              Let's connect
            </h2>
            <p className="text-muted-foreground">
              Whether it's distributed systems, LLM infrastructure, or something
              completely different — I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:flaurencya.ciputra@gmail.com"
              className="group flex items-center justify-between p-4 bg-card border border-border/60 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all">

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">flaurencya.ciputra@gmail.com</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/flaurencya-ciputra"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-card border border-border/60 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all">

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">linkedin.com/in/flaurencya-ciputra</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-muted-foreground">
          <span>© 2026 Flaurencya Ciputra</span>
        </div>
      </footer>
    </div>);

};

export default Index;
