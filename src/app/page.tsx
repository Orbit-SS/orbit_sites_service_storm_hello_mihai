import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Users,
  Bell,
  Layers,
  RefreshCw,
  Lock,
  ChevronRight,
  LayoutDashboard,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-[#1a1a2e] overflow-x-hidden font-sans">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#f8f7f4]/90 backdrop-blur-md border-b border-[#1a1a2e]/8">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#1a1a2e] flex items-center justify-center">
            <LayoutDashboard className="w-4 h-4 text-[#e8c547]" />
          </div>
          <span className="font-bold text-lg tracking-tight text-[#1a1a2e]">Arhitech</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#1a1a2e]/50">
          <a href="#features" className="hover:text-[#1a1a2e] transition-colors">Features</a>
          <a href="#how" className="hover:text-[#1a1a2e] transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-[#1a1a2e] transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-[#1a1a2e]/60 hover:text-[#1a1a2e] transition-colors font-medium">
            Sign in
          </a>
          <a
            href="#cta"
            className="text-sm px-4 py-2 rounded-lg bg-[#1a1a2e] text-white font-medium hover:bg-[#1a1a2e]/85 transition-colors"
          >
            Get started free
          </a>
        </div>
      </nav>

      {/* Hello */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-36 pb-24 overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#1a1a2e 1px, transparent 1px), linear-gradient(90deg, #1a1a2e 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Accent blob */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e8c547]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a1a2e]/12 bg-white text-[#1a1a2e]/60 text-xs font-medium mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e8c547]" />
            Trusted by 1,200+ teams worldwide
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-[#1a1a2e]">
            Hello Octa
          </h1>

          <p className="text-lg md:text-xl text-[#1a1a2e]/55 max-w-2xl mx-auto mb-10 leading-relaxed">
            Arhitech is the workflow manager built for modern teams — design, automate, and monitor
            every process across your organization from a single canvas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1a1a2e] text-white font-semibold hover:bg-[#1a1a2e]/85 transition-all shadow-md"
            >
              Start building free <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1a1a2e]/12 text-[#1a1a2e]/70 font-medium hover:bg-white hover:text-[#1a1a2e] transition-all"
            >
              Watch a demo <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mock UI preview */}
          <div className="mt-16 rounded-2xl border border-[#1a1a2e]/8 bg-white shadow-xl shadow-[#1a1a2e]/6 overflow-hidden text-left">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a2e]/6 bg-[#f8f7f4]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28ca41]" />
              <span className="ml-4 text-xs text-[#1a1a2e]/30 font-mono">arhitech.app / workflows</span>
            </div>
            {/* Kanban-style columns */}
            <div className="flex gap-4 p-5 overflow-x-auto">
              {[
                {
                  label: "Backlog",
                  color: "bg-[#1a1a2e]/5",
                  dot: "bg-[#1a1a2e]/25",
                  tasks: ["Design system audit", "Onboard new vendor"],
                },
                {
                  label: "In Progress",
                  color: "bg-[#e8c547]/10",
                  dot: "bg-[#e8c547]",
                  tasks: ["Q3 budget review", "API integration spec"],
                },
                {
                  label: "Review",
                  color: "bg-blue-50",
                  dot: "bg-blue-400",
                  tasks: ["Security policy draft"],
                },
                {
                  label: "Done",
                  color: "bg-emerald-50",
                  dot: "bg-emerald-400",
                  tasks: ["Hire approval flow", "SLA documentation"],
                },
              ].map((col) => (
                <div key={col.label} className="flex-shrink-0 w-44">
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className={`w-2 h-2 rounded-full ${col.dot}`} />
                    <span className="text-xs font-semibold text-[#1a1a2e]/50 uppercase tracking-wide">
                      {col.label}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {col.tasks.map((t) => (
                      <div
                        key={t}
                        className={`px-3 py-2.5 rounded-lg ${col.color} text-xs text-[#1a1a2e]/70 font-medium`}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-4">
            {[
              { value: "3×", label: "faster process delivery" },
              { value: "85%", label: "fewer status meetings" },
              { value: "12k+", label: "workflows automated" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-[#1a1a2e]">{stat.value}</span>
                <span className="text-sm text-[#1a1a2e]/45">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a2e]">
            Built for every layer of your organization
          </h2>
          <p className="text-[#1a1a2e]/50 max-w-xl mx-auto">
            From ad-hoc task management to complex multi-team pipelines — Arhitech adapts to how
            your team actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: <GitBranch className="w-5 h-5 text-[#1a1a2e]" />,
              title: "Visual workflow builder",
              desc: "Drag-and-drop pipeline designer with conditional branching, parallel steps, and approval gates.",
              accent: "bg-[#e8c547]/15",
            },
            {
              icon: <Users className="w-5 h-5 text-[#1a1a2e]" />,
              title: "Team collaboration",
              desc: "Assign owners, leave threaded comments, and @-mention teammates directly inside any workflow step.",
              accent: "bg-blue-50",
            },
            {
              icon: <RefreshCw className="w-5 h-5 text-[#1a1a2e]" />,
              title: "Automation engine",
              desc: "Trigger workflows from webhooks, schedules, form submissions, or any third-party event.",
              accent: "bg-emerald-50",
            },
            {
              icon: <Bell className="w-5 h-5 text-[#1a1a2e]" />,
              title: "Smart notifications",
              desc: "Context-aware alerts via Slack, email, or in-app — no more notification fatigue.",
              accent: "bg-orange-50",
            },
            {
              icon: <Layers className="w-5 h-5 text-[#1a1a2e]" />,
              title: "Template library",
              desc: "Start fast with 100+ pre-built templates for HR, finance, engineering, and operations.",
              accent: "bg-purple-50",
            },
            {
              icon: <Lock className="w-5 h-5 text-[#1a1a2e]" />,
              title: "Enterprise-grade security",
              desc: "Role-based access control, SSO, full audit trails, and SOC 2 Type II compliance.",
              accent: "bg-rose-50",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-[#1a1a2e]/6 bg-white hover:shadow-md hover:shadow-[#1a1a2e]/6 transition-all group"
            >
              <div
                className={`w-10 h-10 rounded-xl ${f.accent} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
              >
                {f.icon}
              </div>
              <h3 className="font-semibold text-[#1a1a2e] mb-2">{f.title}</h3>
              <p className="text-sm text-[#1a1a2e]/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-6 py-24 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              From idea to automated in minutes
            </h2>
            <p className="text-white/45 max-w-xl mx-auto">
              No engineers required. Anyone on your team can build and deploy a workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Map your process",
                desc: "Use the visual builder to sketch out your process — steps, decisions, owners, and deadlines. Start from a template or from scratch.",
              },
              {
                step: "02",
                title: "Connect your tools",
                desc: "Link Slack, Jira, Salesforce, Google Workspace, and 200+ other apps. Set triggers and actions in a few clicks.",
              },
              {
                step: "03",
                title: "Launch & iterate",
                desc: "Go live instantly. Track every run in real time, spot bottlenecks, and refine with built-in analytics.",
              },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-6 left-[calc(100%+1rem)] w-8 border-t border-dashed border-white/10" />
                )}
                <div className="text-5xl font-black text-white/5 mb-3 leading-none">{item.step}</div>
                <div className="w-8 h-0.5 bg-[#e8c547] mb-4" />
                <h3 className="font-semibold text-white mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Integrations strip */}
          <div className="mt-20 border-t border-white/5 pt-14 text-center">
            <p className="text-xs text-white/25 uppercase tracking-widest mb-6">
              Connects with the tools you already use
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Slack", "Jira", "GitHub", "Notion", "Salesforce", "HubSpot", "Google Workspace", "Zapier"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-4 py-1.5 rounded-full border border-white/8 text-xs text-white/35 font-medium"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a2e]">
            Pricing that scales with your team
          </h2>
          <p className="text-[#1a1a2e]/50">Start free. Upgrade when you need more.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Free",
              price: "$0",
              sub: "forever",
              desc: "Perfect for small teams getting started.",
              features: [
                "Up to 5 users",
                "10 active workflows",
                "Basic integrations",
                "7-day run history",
              ],
              highlight: false,
              cta: "Start for free",
            },
            {
              name: "Growth",
              price: "$29",
              sub: "per seat / mo",
              desc: "For growing teams with complex processes.",
              features: [
                "Unlimited users",
                "Unlimited workflows",
                "200+ integrations",
                "Full run history",
                "Advanced analytics",
                "Priority support",
              ],
              highlight: true,
              cta: "Start 14-day trial",
            },
            {
              name: "Enterprise",
              price: "Custom",
              sub: "contact us",
              desc: "For large organizations that need control.",
              features: [
                "Everything in Growth",
                "SSO & SCIM",
                "Dedicated CSM",
                "SLA guarantees",
                "On-prem option",
                "Audit logs",
              ],
              highlight: false,
              cta: "Talk to sales",
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border ${
                plan.highlight
                  ? "border-[#1a1a2e] bg-[#1a1a2e] text-white shadow-2xl shadow-[#1a1a2e]/20"
                  : "border-[#1a1a2e]/8 bg-white"
              }`}
            >
              {plan.highlight && (
                <div className="text-xs font-semibold text-[#e8c547] mb-4 uppercase tracking-wider">
                  Most popular
                </div>
              )}
              <div className="mb-2">
                <div className={`text-lg font-semibold ${plan.highlight ? "text-white" : "text-[#1a1a2e]"}`}>
                  {plan.name}
                </div>
              </div>
              <div className="mb-2">
                <span className={`text-3xl font-bold ${plan.highlight ? "text-white" : "text-[#1a1a2e]"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-2 ${plan.highlight ? "text-white/40" : "text-[#1a1a2e]/35"}`}>
                  {plan.sub}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-white/45" : "text-[#1a1a2e]/45"}`}>
                {plan.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.highlight ? "text-white/70" : "text-[#1a1a2e]/60"}`}>
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-[#e8c547]" : "text-emerald-500"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`block text-center py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "bg-[#e8c547] text-[#1a1a2e] hover:bg-[#d4b03a]"
                    : "border border-[#1a1a2e]/10 text-[#1a1a2e]/70 hover:bg-[#f8f7f4] hover:text-[#1a1a2e]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-16 bg-[#f0ede6]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-medium text-[#1a1a2e] leading-relaxed mb-6">
            "Arhitech replaced four separate tools and cut our approval cycle time from two weeks
            down to three days. It's the operational backbone of our entire company now."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1a1a2e] flex items-center justify-center text-white text-sm font-bold">
              MK
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-[#1a1a2e]">Maya Kowalski</div>
              <div className="text-xs text-[#1a1a2e]/45">VP of Operations, Nexbridge</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="px-6 py-24 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to architect better workflows?
          </h2>
          <p className="text-white/45 mb-10 max-w-xl mx-auto">
            Join over 1,200 teams using Arhitech to eliminate process chaos. No credit card, no
            setup fees — just better work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full sm:w-72 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus:outline-none focus:border-[#e8c547]/50 text-sm"
            />
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#e8c547] text-[#1a1a2e] font-bold hover:bg-[#d4b03a] transition-all">
              Get started free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-white/20 mt-4">Free plan available. No credit card required.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 bg-[#13131f] border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/25">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
            <LayoutDashboard className="w-3.5 h-3.5 text-[#e8c547]" />
          </div>
          <span className="font-semibold text-white/50">Arhitech</span>
        </div>
        <div>© {new Date().getFullYear()} Arhitech. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          <a href="#" className="hover:text-white/60 transition-colors">Contact</a>
        </div>
      </footer>
    </main>
  );
}
