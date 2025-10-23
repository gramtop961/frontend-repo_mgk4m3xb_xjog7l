import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import FeatureGrid from "./components/FeatureGrid";
import CodeEmbed from "./components/CodeEmbed";

export default function App() {
  return (
    <div className="min-h-screen bg-[#06080f] text-white antialiased">
      <Hero />
      <TrustBar />
      <FeatureGrid />
      <CodeEmbed />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center">
            <h3 className="text-xl font-semibold">Ready when you are</h3>
            <p className="mt-2 text-zinc-400">
              Start free. No credit card. SOC 2 friendly.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#code"
                className="rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
              >
                Get started in minutes
              </a>
              <a
                href="#features"
                className="rounded-md border border-zinc-800 bg-zinc-900/50 px-5 py-3 text-sm font-medium text-zinc-200 hover:bg-zinc-800/50"
              >
                See how it works
              </a>
            </div>
          </div>

          <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-400 sm:flex-row">
            <p>© {new Date().getFullYear()} Vanish Auth</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-zinc-200">Docs</a>
              <a href="#" className="hover:text-zinc-200">Status</a>
              <a href="#" className="hover:text-zinc-200">Security</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
