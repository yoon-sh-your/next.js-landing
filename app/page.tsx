import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const navLinks = ["Product", "Solutions", "Pricing", "Resources", "Contact"]

const features = [
  {
    title: "Behavior Intelligence",
    description:
      "Track anonymous and known visitor behavior with intent signals that prioritize what matters most.",
  },
  {
    title: "Sales-Ready Signals",
    description:
      "Push high-confidence opportunities directly to your team with action-focused context.",
  },
  {
    title: "Predictive Revenue View",
    description:
      "Forecast outcomes with AI-powered trend modeling built for real SaaS go-to-market teams.",
  },
]

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative isolate flex min-h-screen flex-col overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(130,90,255,0.18),transparent_35%),linear-gradient(to_bottom,#080808,#0c0c0c)]"
        >
          {/* unicorn.studio interactive background mount point */}
        </div>

        <header className="w-full px-[clamp(1rem,4vw,4rem)] pt-6">
          <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 rounded-full border border-white/10 bg-black/30 px-5 py-3 backdrop-blur md:px-8">
            <div className="text-lg font-bold tracking-tight">StatsAI</div>

            <ul className="hidden items-center gap-[clamp(0.75rem,2vw,2rem)] md:flex">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Button className="rounded-full px-5">Join up</Button>
              <Button variant="secondary" className="rounded-full px-5">
                Login
              </Button>
            </div>
          </nav>
        </header>

        <div className="mt-auto w-full px-[clamp(1rem,4vw,4rem)] pb-[clamp(2rem,6vh,4rem)]">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-end gap-6">
            <h1 className="max-w-[20ch] text-balance text-[clamp(2.2rem,8vw,7rem)] font-black leading-[0.95] tracking-tight">
              INTELLIGENT ANALYTICS, FINALLY.
            </h1>
            <Button size="lg" className="rounded-full px-8 text-base">
              Try it out
            </Button>
          </div>
        </div>
      </section>

      <section className="px-[clamp(1rem,4vw,4rem)] py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-white/15 bg-black/30">
              <CardContent className="space-y-3 p-6">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
