import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "default" | "success" | "warning" | "info" | "muted";

const tones: Record<Tone, string> = {
  default: "bg-primary/10 text-primary border-primary/25",
  success: "bg-emerald-500/10 text-emerald-700 border-emerald-600/25",
  warning: "bg-amber-500/10 text-amber-700 border-amber-600/25",
  info: "bg-sky-500/10 text-sky-700 border-sky-600/25",
  muted: "bg-muted text-muted-foreground border-border",
};

export function Badge({
  className,
  tone = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
