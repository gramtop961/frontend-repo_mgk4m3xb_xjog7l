import { useState } from "react";
import { Copy } from "lucide-react";

const snippets = {
  JavaScript: `import { createClient } from '@vanish/auth'

const auth = createClient({ projectId: process.env.VANISH_PROJECT_ID })

await auth.signIn()
// that's it — Face/Touch ID prompts the user and returns a session
`,
  Python: `from vanish import Auth

auth = Auth(project_id=os.environ['VANISH_PROJECT_ID'])

auth.sign_in()  # opens platform prompt, returns JWT
`,
  cURL: `curl -X POST "$BACKEND/sessions/webauthn" \\
  -H "Content-Type: application/json" \\
  -d '{"userId":"123"}'
# client completes the WebAuthn ceremony then you're signed in
`,
};

export default function CodeEmbed() {
  const [tab, setTab] = useState("JavaScript");
  const code = snippets[tab];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="code" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Add passwordless in one line
          </h2>
          <p className="mt-3 text-zinc-400">
            Use our lightweight SDK or call the API directly. Your users see a biometric prompt — you get a signed session.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-[#0b0f17]">
          <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/40 px-3 py-2">
            <div className="flex gap-1">
              {Object.keys(snippets).map((name) => (
                <button
                  key={name}
                  onClick={() => setTab(name)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                    tab === name
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
            <button
              onClick={copy}
              className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-zinc-900/60 px-2 py-1 text-xs text-zinc-300 hover:bg-zinc-800"
            >
              <Copy className="h-3.5 w-3.5" /> Copy
            </button>
          </div>

          <pre className="max-h-[420px] overflow-auto p-4 text-sm leading-relaxed text-zinc-200">
            <code>
              {code}
            </code>
          </pre>
        </div>

        <div className="mt-6 text-center text-xs text-zinc-500">
          SDKs for JS, Python, Go, and Swift. Full REST and WebAuthn endpoints available.
        </div>
      </div>
    </section>
  );
}
