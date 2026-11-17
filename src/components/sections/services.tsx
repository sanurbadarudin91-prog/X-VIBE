import { LayoutTemplate, ShoppingBag, Smartphone, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { services, type Service } from "@/lib/site";

const icons: Record<Service["icon"], LucideIcon> = {
  layout: LayoutTemplate,
  shopping: ShoppingBag,
  smartphone: Smartphone,
};

export function Services() {
  return (
    <section id="services" className="section relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services"
          title="Layanan yang Ditawarkan"
          description="Dari landing page simpel sampai aplikasi web yang bisa di-install — pilih sesuai kebutuhan bisnis Anda."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 90} className="h-full">
                <article className="glass group flex h-full flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-auto space-y-2 pt-2 text-sm text-muted-foreground">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
