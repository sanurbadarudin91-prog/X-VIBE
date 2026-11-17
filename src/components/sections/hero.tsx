import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { hero, waHero } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Latar grid futuristik + sorot neon */}
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        {/* Kolom teks */}
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {hero.badge}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Membangun <span className="text-gradient">Solusi Digital</span> &
              Web Modern untuk Bisnis Anda.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.subheading}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#portfolio">
                  Lihat Portofolio
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={waHero} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Hubungi via WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border/70 pt-6">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                  <dd className="text-lg font-semibold text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Kolom mockup browser */}
        <Reveal delay={200} className="relative">
          <BrowserMockup />
        </Reveal>
      </div>
    </section>
  );
}

/** Mockup jendela browser ringan (CSS murni) sebagai ilustrasi hero. */
function BrowserMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="glow-soft glass animate-float rounded-xl p-2">
        <div className="rounded-lg border border-border/70 bg-background/80">
          {/* Bar jendela */}
          <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 flex-1 truncate rounded-md bg-secondary/60 px-3 py-1 text-[11px] text-muted-foreground">
              https://x-vibe.dev
            </span>
          </div>

          {/* Isi mockup */}
          <div className="space-y-3 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-accent" />
                <span className="h-3 w-24 rounded bg-secondary" />
              </div>
              <span className="h-6 w-16 rounded-md bg-primary/70" />
            </div>

            <div className="h-3 w-3/4 rounded bg-secondary" />
            <div className="h-3 w-1/2 rounded bg-secondary/70" />

            <div className="grid grid-cols-3 gap-2 pt-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex h-20 flex-col justify-end gap-2 rounded-lg border border-border/70 bg-card/60 p-3"
                >
                  <span className="h-6 w-6 rounded bg-primary/25" />
                  <span className="h-2 w-full rounded bg-secondary" />
                  <span className="h-2 w-2/3 rounded bg-secondary/70" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-1 text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="h-2 w-28 rounded bg-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
