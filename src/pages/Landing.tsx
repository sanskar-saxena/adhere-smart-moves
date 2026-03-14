import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ScanLine, Wrench, Compass, TrendingUp, Brain, Shield, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdhereLogo from "@/components/adhere/AdhereLogo";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const features = [
  { icon: ScanLine, title: "Scan Any Menu", desc: "Photo a restaurant menu. Get ranked options for your goal instantly." },
  { icon: Wrench, title: "Fix Off-Plan Days", desc: "Ate too much? Missed a workout? Get a calm recovery plan, not guilt." },
  { icon: Compass, title: "Find Protein Near You", desc: "High-protein meals nearby, filtered by budget, cuisine, and diet." },
  { icon: TrendingUp, title: "Real Adherence Score", desc: "Track consistency, not perfection. See what actually moves the needle." },
  { icon: Brain, title: "AI Coach Insights", desc: "Patterns like 'weekends break your cut' — explained and actionable." },
  { icon: Shield, title: "Moment-of-Failure Help", desc: "The exact moment you're about to order junk, Adhere steps in." },
];

const socialProof = [
  { metric: "12k+", label: "Active users" },
  { metric: "4.8★", label: "App rating" },
  { metric: "89%", label: "Weekly adherence" },
  { metric: "2.1M", label: "Meals scanned" },
];

const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: ["3 menu scans / week", "Daily adherence score", "Basic meal suggestions", "Progress tracking"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹299",
    period: "/month",
    features: ["Unlimited menu scans", "AI coach insights", "Fix My Day engine", "Nearby protein finder", "Advanced analytics", "Priority support"],
    cta: "Start 7-Day Trial",
    highlighted: true,
  },
  {
    name: "Coach",
    price: "₹999",
    period: "/month",
    features: ["Everything in Pro", "1:1 coaching integration", "Team & client management", "Custom meal plans", "White-label reports", "API access"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg">
        <div className="container flex items-center justify-between h-16">
          <AdhereLogo size="md" />
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#how" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/onboarding")}>Log In</Button>
            <Button size="sm" onClick={() => navigate("/onboarding")} className="bg-gradient-primary text-primary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-hero">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground card-shadow mb-6">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                Now in early access
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
            >
              Stay on track
              <br />
              <span className="text-gradient-primary">even when life gets messy.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Scan menus, fix off-plan days, find high-protein options nearby, and maintain your body-composition goals — powered by AI that understands your real life.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => navigate("/onboarding")} className="bg-gradient-primary text-primary-foreground px-8 h-12 text-base">
                Start For Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 text-base">
                See How It Works
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="mt-12 flex items-center justify-center gap-8 md:gap-12">
              {socialProof.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{s.metric}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 md:py-28">
        <div className="container">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How Adhere Works</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Three steps to never fall off track again.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Tell us your goal", desc: "Fat loss, muscle gain, recomp, or maintenance. Plus your lifestyle, diet, and budget." },
              { step: "02", title: "Live your life", desc: "Eat out, travel, get busy. When you're about to order, scan the menu or ask for help." },
              { step: "03", title: "Stay adherent", desc: "Get the best next move, recover from slip-ups, and watch your adherence score climb." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for Real Life</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Not another calorie counter. Adhere helps at the exact moments you're about to fail.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="rounded-2xl border bg-card p-6 card-shadow hover:card-shadow-hover transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="container">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Simple Pricing</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Start free. Upgrade when you're ready to unlock the full AI engine.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`rounded-2xl border p-6 flex flex-col ${
                  plan.highlighted
                    ? "border-primary/30 bg-gradient-card card-shadow-lg scale-[1.02] relative"
                    : "bg-card card-shadow"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      <Star className="h-3 w-3" /> Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`mt-6 w-full ${plan.highlighted ? "bg-gradient-primary text-primary-foreground" : ""}`}
                  variant={plan.highlighted ? "default" : "outline"}
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
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Your goal deserves better than willpower alone.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Join thousands who stay on track with AI-powered decisions at every meal, every workout, every moment of doubt.
            </p>
            <Button size="lg" onClick={() => navigate("/onboarding")} className="mt-8 bg-gradient-primary text-primary-foreground px-8 h-12 text-base">
              Get Started — It's Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <AdhereLogo size="sm" />
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Adhere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
