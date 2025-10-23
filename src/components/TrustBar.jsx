import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <div>
              <p className="text-sm font-medium text-white">Built on open standards</p>
              <p className="text-xs text-zinc-400">WebAuthn + FIDO2 compliant</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
            <Lock className="h-5 w-5 text-emerald-400" />
            <div>
              <p className="text-sm font-medium text-white">End‑to‑end security</p>
              <p className="text-xs text-zinc-400">Public‑key cryptography, device biometrics</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <div>
              <p className="text-sm font-medium text-white">Enterprise ready</p>
              <p className="text-xs text-zinc-400">SOC 2 friendly, SSO compatible</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-80">
          {[
            "Acme Cloud",
            "PixelForge",
            "Northwind",
            "HelixAI",
            "OrbitDB",
          ].map((brand) => (
            <span
              key={brand}
              className="text-xs uppercase tracking-widest text-zinc-500"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
