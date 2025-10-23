import { Fingerprint, Zap, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Biometric by default",
    desc: "Face ID, Touch ID, Windows Hello — first‑class on every modern device.",
  },
  {
    icon: Zap,
    title: "One‑line integration",
    desc: "Drop in and ship. We handle keys, attestation, and device binding.",
  },
  {
    icon: Shield,
    title: "Phishing‑proof",
    desc: "Public‑key crypto with origin binding makes credential theft pointless.",
  },
  {
    icon: Globe,
    title: "Cross‑platform",
    desc: "Works on web, iOS, Android, and desktop with the same API.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Build trust without friction
          </h2>
          <p className="mt-3 text-zinc-400">
            Replace passwords with biometrics using a secure, standards‑based flow.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-700"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/10">
                <Icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-emerald-900 bg-gradient-to-br from-emerald-600/10 to-emerald-400/5 p-6 text-center">
          <p className="text-sm text-emerald-300">
            Privacy first: we never see or store biometric data — only public keys.
          </p>
        </div>
      </div>
    </section>
  );
}
