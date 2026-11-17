import { Github, MessageCircle, Mail } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { contactEmail, navLinks, site, whatsappLink } from "@/lib/site";

const socials = [
  { label: "GitHub", href: site.github, icon: Github },
  { label: "WhatsApp", href: whatsappLink("Hai X-VIBE!"), icon: MessageCircle },
  { label: "Email", href: `mailto:${contactEmail}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/40">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <BrandLogo showTagline />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {site.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Navigasi</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Kontak</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={whatsappLink("Hai X-VIBE!")}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactEmail}`}
                className="transition-colors hover:text-foreground"
              >
                {contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © 2026 {site.owner}. All rights reserved.
          </p>
          <p>
            Dibangun dengan Next.js &amp; PWA — <span className="text-foreground">X-VIBE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
