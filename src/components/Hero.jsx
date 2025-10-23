import { Rocket, Fingerprint } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1f2937_0,transparent_40%),radial-gradient(circle_at_80%_0%,#111827_0,transparent_35%),radial-gradient(circle_at_50%_100%,#0b1220_0,transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
          <Fingerprint className="h-3.5 w-3.5 text-emerald-400" />
          Passwordless by default
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Auth that disappears.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-zinc-300">
          Ship biometric logins for your app with a single line. No passwords, no
          friction — just fast, secure sign‑ins powered by WebAuthn and device biometrics.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#code"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
          >
            <Rocket className="h-4 w-4" />
            Add auth in one line
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-5 py-3 text-sm font-medium text-zinc-200 hover:bg-zinc-800/50"
          >
            Learn more
          </a>
        </div>

        <div className="pointer-events-none relative mx-auto mt-14 h-40 w-full max-w-3xl rounded-xl border border-zinc-800/80 bg-gradient-to-b from-emerald-500/10 to-transparent" />
      </div>
    </section>
  );
}
