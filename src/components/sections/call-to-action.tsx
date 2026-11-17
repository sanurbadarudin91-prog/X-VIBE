import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cta, waCta } from "@/lib/site";

export function CallToAction() {
  return (
    <section id="contact" className="section">
      <div className="container-x">
        <Reveal>
          <div className="glow relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-accent/15 p-8 text-center sm:p-14">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {cta.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {cta.subheading}
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <a href={waCta} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Kirim Pesan WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
