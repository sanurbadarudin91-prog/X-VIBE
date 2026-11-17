import Link from "next/link";
import { WifiOff } from "lucide-react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Offline" };

export default function OfflinePage() {
  return (
    <main className="grid min-h-dvh place-items-center px-6 text-center">
      <div className="flex flex-col items-center gap-5">
        <BrandLogo />
        <span className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-card text-primary">
          <WifiOff className="h-7 w-7" />
        </span>
        <h1 className="text-2xl font-bold tracking-tight">
          Anda sedang offline
        </h1>
        <p className="max-w-sm text-sm text-muted-foreground">
          Koneksi internet terputus. Periksa jaringan Anda, lalu coba muat ulang
          halaman ini.
        </p>
        <Button asChild>
          <Link href="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    </main>
  );
}
