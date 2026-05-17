"use client";
import Link from "next/link";
import { useState } from "react";

const Logo = () => (
  <svg viewBox="0 0 360 90" width="130" height="33" aria-label="BiotrackOS" role="img">
    <text x="8" y="64" fontSize={64} fontFamily="'Instrument Serif', serif" fill="var(--ink)">{"b"}<tspan fontStyle="italic" fill="#0FA697">{"i"}<animate attributeName="opacity" values="1;0.5;1" dur="2.4s" repeatCount="indefinite"/></tspan>{"otrack"}</text>
    <text x="262" y="24" fontFamily="'Geist Mono', monospace" fontSize={14} letterSpacing="2.5" fontWeight={500} fill="var(--ink-2)">{"OS"}</text>
  </svg>
);

export default function LoginPage() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.querySelector<HTMLInputElement>("#email")!;
    if (!email.value || !/.+@.+\..+/.test(email.value)) {
      email.focus();
      email.style.borderColor = "#B23A48";
      setTimeout(() => (email.style.borderColor = ""), 1400);
      return;
    }
    setError(null);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setError("These credentials aren't recognised. Please check your details and try again.");
    }, 1200);
  }

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .auth-page { min-height: 100vh; display: flex; flex-direction: column; }
        .auth-chrome {
          width: 100%; max-width: 1200px; margin: 0 auto;
          padding: 28px clamp(20px, 5vw, 48px);
          display: flex; justify-content: space-between; align-items: center;
        }
        .auth-brand { display: inline-flex; align-items: center; text-decoration: none; }
        .auth-back {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--ink-2); text-decoration: none;
        }
        .auth-back:hover { color: var(--ink); }
        .auth-shell { flex: 1; display: grid; place-items: center; padding: 32px clamp(20px, 5vw, 48px); }
        .auth-card { width: 100%; max-width: 440px; margin: 0 auto; }
        .auth-eyebrow {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--ink-2);
          display: inline-flex; align-items: center; gap: 12px;
        }
        .auth-eyebrow .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--teal-bright); }
        .auth-card h1 {
          font-family: var(--font-display); font-weight: 400;
          font-size: clamp(36px, 4.2vw, 52px); line-height: 1.02; letter-spacing: -0.018em;
          margin: 14px 0 0; max-width: 14ch;
        }
        .auth-card h1 em { font-style: italic; color: var(--ink-2); }
        .auth-card .sub { color: var(--ink-2); font-size: 15px; line-height: 1.55; margin: 16px 0 0; max-width: 44ch; }
        .auth-form { display: grid; gap: 18px; margin-top: 32px; }
        .field { display: grid; gap: 6px; }
        .field label { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }
        .field input {
          border: 0; border-bottom: 1.5px solid var(--ink);
          background: transparent; padding: 12px 0;
          font: inherit; font-size: 17px; color: var(--ink); outline: none;
          transition: border-color .15s ease;
        }
        .field input::placeholder { color: var(--muted-2); }
        .field input:focus { border-color: var(--teal-bright); }
        .field .between { display: flex; justify-content: space-between; align-items: center; }
        .field .between a {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--ink-2); text-decoration: underline; text-underline-offset: 3px;
        }
        .field .between a:hover { color: var(--ink); }
        .auth-submit {
          height: 52px; border: 0;
          background: var(--ink); color: var(--bg);
          font: inherit; font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.18em;
          text-transform: uppercase; cursor: pointer; border-radius: 999px; margin-top: 4px;
          transition: transform .12s ease; width: 100%;
        }
        .auth-submit:hover { transform: translateY(-1px); }
        .auth-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .auth-error {
          padding: 12px 16px; background: rgba(178,58,72,0.07);
          border: 1px solid rgba(178,58,72,0.25); border-radius: 10px;
          font-size: 13px; color: #B23A48; line-height: 1.5;
        }
        .auth-divider {
          display: flex; align-items: center; gap: 14px; margin: 4px 0;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--muted);
        }
        .auth-divider::before, .auth-divider::after { content: ""; flex: 1; height: 1px; background: var(--line); }
        .sso-btn {
          display: inline-flex; align-items: center; gap: 10px;
          height: 46px; padding: 0 16px;
          border: 1px solid var(--line); border-radius: 12px;
          background: var(--surface); color: var(--muted);
          text-decoration: none; font-size: 14px; width: 100%;
          opacity: 0.55; cursor: not-allowed; pointer-events: none;
        }
        .sso-soon {
          margin-left: auto; font-family: var(--font-mono); font-size: 9px;
          letter-spacing: .12em; text-transform: uppercase; color: var(--muted);
          background: var(--bg-2); padding: 2px 8px; border-radius: 999px;
          border: 1px solid var(--line);
        }
        .consumer-hint {
          margin-top: 32px; padding: 18px 20px;
          background: var(--mint-soft); border-radius: 14px;
          display: flex; align-items: center; gap: 14px;
          font-size: 13px; color: var(--ink); line-height: 1.5;
        }
        .consumer-hint .ic {
          flex-shrink: 0; width: 36px; height: 36px; border-radius: 10px;
          background: var(--surface); display: grid; place-items: center; color: var(--teal);
          font-family: var(--font-display); font-size: 18px;
        }
        .consumer-hint a {
          display: inline; font-family: var(--font-mono); font-size: 11px;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink);
          text-decoration: underline; text-underline-offset: 3px; margin-left: 2px;
        }
        .auth-foot {
          width: 100%; max-width: 1200px; margin: 0 auto;
          padding: 24px clamp(20px, 5vw, 48px) 32px;
          display: flex; justify-content: space-between; gap: 14px; flex-wrap: wrap;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--muted);
        }
        .auth-foot a { color: var(--muted); }
        .auth-foot a:hover { color: var(--ink); }
        .auth-foot-legal { display: flex; gap: 20px; }
        @media (max-width: 560px) { .auth-back { display: none; } }
      `}</style>

      <div className="auth-page">
        <header className="auth-chrome">
          <Link href="/" className="auth-brand"><Logo /></Link>
          <Link href="/" className="auth-back">← Back to site</Link>
        </header>

        <main className="auth-shell">
          <div className="auth-card">
            <div className="auth-eyebrow"><span className="dot"></span> Sign in</div>
            <h1>Welcome back<em>.</em></h1>
            <p className="sub">Sign in to your BiotrackOS workspace.</p>

            <form id="signin" className="auth-form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@yourdomain.com" autoComplete="email" required />
              </div>
              <div className="field">
                <div className="between">
                  <label htmlFor="pw">Password</label>
                  <Link href="/forgot-password">Forgot it?</Link>
                </div>
                <input type="password" id="pw" name="password" placeholder="••••••••••" autoComplete="current-password" required />
              </div>

              <button className="auth-submit" type="submit" disabled={submitting}>
                {submitting ? "Signing in…" : <>Sign in <span className="arrow">→</span></>}
              </button>

              {error && <div className="auth-error">{error}</div>}

              <div className="auth-divider">or</div>

              <div className="sso-btn" aria-disabled="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2.5" y="6" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M5 6V4a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
                Continue with SSO
                <span className="sso-soon">Coming soon</span>
              </div>
            </form>

            <div className="consumer-hint">
              <div className="ic">◍</div>
              <div>
                Looking for the personal app? Sign in happens inside iOS &amp; Android.{" "}
                <Link href="/app">Get the app →</Link>
              </div>
            </div>
          </div>
        </main>

        <footer className="auth-foot">
          <span>© 2026 BiotrackOS</span>
          <div className="auth-foot-legal">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/data-processing">Data processing</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
