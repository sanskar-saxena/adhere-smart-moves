import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ScanLine, Wrench, Compass, TrendingUp, Brain, Shield, Check, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdhereLogo from "@/components/adhere/AdhereLogo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const features = [
  { icon: ScanLine, title: "Menu Intelligence", desc: "Photograph any restaurant menu. Get every dish ranked, scored, and explained for your specific goal — in under 3 seconds." },
  { icon: Wrench, title: "Damage Control", desc: "Overate at lunch? Skipped the gym? Tell Adhere what happened. Get a recalibrated plan for the rest of the day, not a lecture." },
  { icon: Compass, title: "Nearby Fallbacks", desc: "Find the highest-protein meal within your budget and walking distance. Filtered by cuisine, diet, and delivery speed." },
  { icon: TrendingUp, title: "Adherence, Not Perfection", desc: "One number that captures how well you're executing in real life — eating out, traveling, recovering, and adapting." },
  { icon: Brain, title: "Pattern Recognition", desc: "\"You overeat by 400 cal every Thursday night.\" Adhere finds the patterns you can't see and tells you before they repeat." },
  { icon: Shield, title: "Intervention at the Moment of Failure", desc: "When you're staring at Swiggy at 11 PM, Adhere gives you a better option before you tap \"Order.\"" },
];

const socialProof = [
  { metric: "12k+", label: "Users on track" },
  { metric: "4.8★", label: "App Store" },
  { metric: "89%", label: "Avg. adherence" },
  { metric: "2.1M", label: "Decisions made" },
];

const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: ["3 menu scans / week", "Daily adherence score", "Basic recovery plans", "Weight & waist tracking"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹299",
    period: "/month",
    features: ["Unlimited menu scans", "AI pattern recognition", "Full recovery engine", "Nearby protein finder", "Eating-out impact analysis", "Priority support"],
    cta: "Try Pro Free for 7 Days",
    highlighted: true,
  },
  {
    name: "Coach",
    price: "₹999",
    period: "/month",
    features: ["Everything in Pro", "1:1 coach integration", "Client adherence dashboards", "Custom protocol support", "White-label reporting", "API access"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-gradient-glass">
        <div className="container flex items-center justify-between h-16">
          <AdhereLogo size="sm" />
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Features</a>
            <a href="#pricing" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Pricing</a>
            <a href="#how" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">How It Works</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/onboarding")}>Log In</Button>
            <Button variant="premium" size="sm" onClick={() => navigate("/onboarding")}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-36 pb-24 md:pt-48 md:pb-36 bg-gradient-hero relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />

        <div className="container relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-card/80 backdrop-blur-sm px-4 py-2 text-[13px] font-medium text-muted-foreground shadow-card mb-8">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Now in early access
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-display-sm md:text-display lg:text-display-lg font-extrabold text-foreground !leading-[1.08]"
            >
              Stay on track
              <br />
              <span className="text-gradient-primary">even when life gets messy.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-7 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
            >
              Scan menus, fix off-plan days, find high-protein options nearby — powered by AI that understands your real life.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="premium" size="xl" onClick={() => navigate("/onboarding")}>
                Start For Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="xl" variant="outline" onClick={() => document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })}>
                See How It Works
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="mt-16 flex items-center justify-center gap-10 md:gap-14">
              {socialProof.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-mono text-2xl md:text-3xl font-bold text-foreground tracking-tight">{s.metric}</div>
                  <div className="text-2xs text-muted-foreground mt-1 uppercase tracking-label font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 md:py-32">
        <div className="container">
          <motion.div className="text-center mb-18" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <span className="section-label text-primary mb-3 block">How It Works</span>
            <h2 className="text-foreground">Three steps to never fall off track</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Tell us your goal", desc: "Fat loss, muscle gain, recomp, or maintenance. Plus your lifestyle, diet, and budget." },
              { step: "02", title: "Live your life", desc: "Eat out, travel, get busy. When you're about to order, scan the menu or ask for help." },
              { step: "03", title: "Stay adherent", desc: "Get the best next move, recover from slip-ups, and watch your adherence score climb." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-primary/8 text-primary font-mono font-bold text-lg mb-5">
                  {item.step}
                </div>
                <h3 className="text-foreground">{item.title}</h3>
                <p className="mt-2.5 text-[14px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32 bg-muted/40">
        <div className="container">
          <motion.div className="text-center mb-18" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <span className="section-label text-primary mb-3 block">Features</span>
            <h2 className="text-foreground">Built for Real Life</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-[15px]">Not another calorie counter. Adhere helps at the exact moments you're about to fail.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="group rounded-2xl border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-primary/8 mb-5 transition-colors group-hover:bg-primary/14">
                  <f.icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-foreground text-[15px] tracking-tight">{f.title}</h3>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="container">
          <motion.div className="text-center mb-18" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <span className="section-label text-primary mb-3 block">Pricing</span>
            <h2 className="text-foreground">Simple, Transparent Pricing</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-[15px]">Start free. Upgrade when you're ready to unlock the full AI engine.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto items-start">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`rounded-3xl border p-7 flex flex-col ${
                  plan.highlighted
                    ? "border-primary/20 bg-gradient-card shadow-xl shadow-primary/5 relative ring-1 ring-primary/10"
                    : "bg-card shadow-card"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-1.5 text-[11px] font-bold text-primary-foreground tracking-wide shadow-md shadow-primary/15">
                      <Star className="h-3 w-3" /> Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-[15px] font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-mono text-[2.5rem] font-bold text-foreground tracking-tight leading-none">{plan.price}</span>
                  <span className="text-[13px] text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <ul className="mt-7 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px]">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-muted-foreground leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-7 w-full"
                  variant={plan.highlighted ? "premium" : "outline"}
                  size="lg"
                  onClick={() => navigate("/onboarding")}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/4 blur-3xl" />
        <div className="container relative">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-foreground">
              Your goal deserves better
              <br className="hidden md:block" />
              than willpower alone.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md mx-auto text-[15px] leading-relaxed">
              Join thousands who stay on track with AI-powered decisions at every meal, every moment of doubt.
            </p>
            <Button variant="premium" size="xl" onClick={() => navigate("/onboarding")} className="mt-10">
              Get Started — It's Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-14">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <AdhereLogo size="sm" />
          <div className="flex items-center gap-8 text-[13px] text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">Support</a>
          </div>
          <p className="text-[13px] text-muted-foreground">© 2026 Adhere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
