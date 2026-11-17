import {
  Code2,
  Smartphone,
  Zap,
  Search,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { advantages, type Advantage } from "@/lib/site";

const icons: Record<Advantage["icon"], LucideIcon> = {
  code: Code2,
  smartphone: Smartphone,
  zap: Zap,
  search: Search,
  shield: ShieldCheck,
  rocket: Rocket,
};

export function WhyChooseMe() {
  return (
    <section id="why" className="section relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Me?"
          title="Alasan Memilih X-VIBE"
          description="Bukan sekadar bikin website jadi — tapi memastikan hasilnya cepat, rapi, dan siap berkembang."
        />

        <div className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 70}>
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
