import { cn } from "@/lib/utils";

/** Monogram "XV" bergradien — dipakai di header, footer, splash, dan ikon PWA. */
export function BrandMark({
  className,
  size = 34,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      role="img"
      aria-label="Logo X-VIBE"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id="xv-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="13" fill="url(#xv-grad)" />
      {/* Ikon kode </> di kiri + huruf V di kanan. */}
      <path
        d="M13 18 L9.5 24 L13 30"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 18 L19.5 24 L16 30"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 17 L33 31 M40 17 L33 31"
        fill="none"
        stroke="white"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Logo lengkap: monogram + wordmark "X-VIBE" (opsional tagline). */
export function BrandLogo({
  className,
  size = 34,
  showTagline = false,
}: {
  className?: string;
  size?: number;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <BrandMark size={size} />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight">
          X<span className="text-primary">-</span>VIBE
        </span>
        {showTagline && (
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Web Development Studio
          </span>
        )}
      </span>
    </span>
  );
}
