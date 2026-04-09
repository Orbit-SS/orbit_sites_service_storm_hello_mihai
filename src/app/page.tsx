import { Zap, Shield, BarChart3, ArrowRight, Cloud, Cpu, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080c14] text-white overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#080c14]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-[#3b82f6]" fill="#3b82f6" />
          <span className="font-bold text-lg tracking-tight">ServiceStorm</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <a
          href="#cta"
          className="text-sm px-4 py-2 rounded-lg bg-[#3b82f6] text-white font-medium hover:bg-[#2563eb] transition-colors"
        >
          Get started
        </a>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-32 overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#1d4ed8]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-[#7c3aed]/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-[#0ea5e9]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#60a5fa] text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            Now in public beta — join 2,000+ teams
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Services that move at{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#818cf8] to-[#0ea5e9] bg-clip-text text-transparent">
              storm speed
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            ServiceStorm gives your team a unified platform to deploy, monitor, and scale backend
            services — with the reliability of infrastructure you can trust.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3b82f6] text-white font-semibold hover:bg-[#2563eb] transition-all shadow-lg shadow-[#3b82f6]/25 hover:shadow-[#3b82f6]/40"
            >
              Start for free <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 font-medium hover:bg-white/5 hover:text-white transition-all"
            >
              See how it works
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-6 border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
            {[
              { value: "99.99%", label: "Uptime SLA" },
              { value: "<10ms", label: "Median latency" },
              { value: "50M+", label: "Requests / day" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-white/40 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need in one place</h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Stop juggling a dozen tools. ServiceStorm brings deployment, observability, and scaling
            under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Cloud className="w-5 h-5 text-[#3b82f6]" />,
              title: "One-click deploy",
              desc: "Push your code and we handle the rest — containers, routing, TLS, and global CDN distribution.",
            },
            {
              icon: <BarChart3 className="w-5 h-5 text-[#818cf8]" />,
              title: "Real-time observability",
              desc: "Live metrics, distributed traces, and log aggregation with zero configuration required.",
            },
            {
              icon: <Zap className="w-5 h-5 text-[#0ea5e9]" />,
              title: "Auto-scaling",
              desc: "Traffic spikes don't scare us. ServiceStorm scales your services in seconds, not minutes.",
            },
            {
              icon: <Shield className="w-5 h-5 text-[#34d399]" />,
              title: "Security built-in",
              desc: "SOC 2 Type II, end-to-end encryption, secret management, and WAF protection by default.",
            },
            {
              icon: <Cpu className="w-5 h-5 text-[#fb923c]" />,
              title: "Edge compute",
              desc: "Run logic at the edge in 50+ global regions for ultra-low latency on every continent.",
            },
            {
              icon: <Globe className="w-5 h-5 text-[#f472b6]" />,
              title: "Global network",
              desc: "Anycast routing and smart load balancing ensure your users always hit the fastest node.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-6 py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Up and running in minutes</h2>
          <p className="text-white/50">Three steps from zero to production.</p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {[
            {
              step: "01",
              title: "Connect your repo",
              desc: "Link GitHub, GitLab, or Bitbucket. We auto-detect your stack and suggest the optimal configuration.",
            },
            {
              step: "02",
              title: "Configure & deploy",
              desc: "Set environment variables, choose your region, and hit deploy. First deploy completes in under 60 seconds.",
            },
            {
              step: "03",
              title: "Monitor & scale",
              desc: "Your dashboard goes live immediately with real-time metrics, alerts, and one-click scaling controls.",
            },
          ].map((item, i) => (
            <div key={item.step} className="flex-1 relative">
              {i < 2 && (
                <div className="hidden md:block absolute top-7 left-[calc(100%+1rem)] w-8 border-t border-dashed border-white/10" />
              )}
              <div className="text-4xl font-black text-white/5 mb-3">{item.step}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-white/50">No surprises. Scale as you grow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Starter",
              price: "Free",
              sub: "forever",
              features: ["3 services", "1M requests/mo", "Community support", "1 region"],
              highlight: false,
            },
            {
              name: "Pro",
              price: "$49",
              sub: "per month",
              features: ["Unlimited services", "50M requests/mo", "Priority support", "5 regions", "Auto-scaling"],
              highlight: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              sub: "contact us",
              features: ["Everything in Pro", "SLA guarantees", "Dedicated support", "50+ regions", "SSO & audit logs"],
              highlight: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border ${
                plan.highlight
                  ? "border-[#3b82f6]/50 bg-[#3b82f6]/10 shadow-xl shadow-[#3b82f6]/10"
                  : "border-white/5 bg-white/[0.02]"
              }`}
            >
              {plan.highlight && (
                <div className="text-xs font-semibold text-[#60a5fa] mb-4 uppercase tracking-wider">Most popular</div>
              )}
              <div className="mb-6">
                <div className="text-lg font-semibold text-white">{plan.name}</div>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/40 text-sm ml-2">{plan.sub}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-all ${
                  plan.highlight
                    ? "bg-[#3b82f6] text-white hover:bg-[#2563eb]"
                    : "border border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact sales" : "Get started"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-[#1d4ed8]/15 rounded-3xl blur-[60px] pointer-events-none" />
          <div className="relative border border-white/5 rounded-3xl p-12 bg-white/[0.02]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to weather any load?
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">
              Join thousands of engineering teams who trust ServiceStorm to run their most critical
              workloads. Start free, scale when you're ready.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full sm:w-72 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#3b82f6]/50 text-sm"
              />
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#3b82f6] text-white font-semibold hover:bg-[#2563eb] transition-all shadow-lg shadow-[#3b82f6]/25">
                Join the beta <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-white/30 mt-4">No credit card required. Free tier available.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#3b82f6]" fill="#3b82f6" />
          <span className="font-semibold text-white/60">ServiceStorm</span>
        </div>
        <div>© {new Date().getFullYear()} ServiceStorm. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </main>
  );
}
