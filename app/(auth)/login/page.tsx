"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [submitting, setSubmitting] = useState(false);

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
    setSubmitting(true);
  }

  return (
    <>
      <style>{`
        .auth-shell { flex: 1; display: grid; place-items: center; padding: 32px clamp(20px, 5vw, 48px); min-height: calc(100vh - 96px - 72px); }
        .auth-chrome {
          width: 100%; max-width: 1200px; margin: 0 auto;
          padding: 28px clamp(20px, 5vw, 48px);
          display: flex; justify-content: space-between; align-items: center;
        }
        .auth-brand {
          display: inline-flex; align-items: center; gap: 10px;
          text-decoration: none; color: var(--ink);
          font-family: var(--font-mono); font-weight: 500; letter-spacing: 0.04em;
          font-size: 13px; text-transform: uppercase;
        }
        .brand-mark { width: 28px; height: 28px; flex-shrink: 0; display: inline-flex; }
        .brand-mark svg { width: 100%; height: 100%; display: block; }
        .shield { fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linejoin: round; }
        .pulse-line { fill: none; stroke: var(--teal-bright); stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }
        .auth-chrome .help { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        .auth-chrome .help a { color: var(--ink); margin-left: 12px; text-decoration: underline; text-underline-offset: 4px; }
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
        .auth-divider {
          display: flex; align-items: center; gap: 14px; margin: 8px 0;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--muted);
        }
        .auth-divider::before, .auth-divider::after { content: ""; flex: 1; height: 1px; background: var(--line); }
        .sso-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          height: 46px; padding: 0 16px;
          border: 1px solid var(--line); border-radius: 12px;
          background: var(--surface); color: var(--ink);
          text-decoration: none; font-size: 14px;
          transition: border-color .15s ease, transform .12s ease; width: 100%;
        }
        .sso-btn:hover { border-color: var(--ink); transform: translateY(-1px); }
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
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--muted);
        }
        @media (max-width: 560px) {
          .auth-chrome .help { display: none; }
        }
      `}</style>

      <header className="auth-chrome">
        <Link href="/" className="auth-brand">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28">
              <path className="shield" d="M16 3 L27 6.4 L27 16 C27 22 22.5 26.4 16 29 C9.5 26.4 5 22 5 16 L5 6.4 Z"/>
              <path className="pulse-line" d="M8.5 17 L12 17 L13.5 13 L15.5 21.5 L17.5 10.5 L19.5 17 L23.5 17"/>
            </svg>
          </span>
          <span>Biotrack<span style={{ opacity: 0.45 }}>OS</span></span>
        </Link>
        <div className="help">Need an account? <Link href="/contact">Talk to us</Link></div>
      </header>

      <main className="auth-shell">
        <div className="auth-card">
          <div className="auth-eyebrow"><span className="dot"></span> Sign in</div>
          <h1>Welcome back<em>.</em></h1>
          <p className="sub">Sign in to your BiotrackOS team workspace.</p>

          <form id="signin" className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="email">Work email</label>
              <input type="email" id="email" name="email" placeholder="you@yourdomain.com" autoComplete="email" required />
            </div>
            <div className="field">
              <div className="between">
                <label htmlFor="pw">Password</label>
                <Link href="/forgot-password">Forgot it?</Link>
              </div>
              <input type="password" id="pw" name="password" placeholder="••••••••••" autoComplete="current-password" required />
            </div>

            <button className="auth-submit" type="submit">
              {submitting ? "Signing in …" : <>Sign in <span className="arrow">→</span></>}
            </button>

            <div className="auth-divider">or</div>

            <a className="sso-btn" href="#" aria-label="SSO for teams">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2.5" y="6" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M5 6V4a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
              Continue with SSO (SAML · Okta · Azure AD)
            </a>
          </form>

          <div className="consumer-hint">
            <div className="ic">◍</div>
            <div>
              Looking for the consumer app? Sign in happens inside iOS &amp; Android.{" "}
              <Link href="/app">Get the app →</Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="auth-foot">
        <span>© 2026 BiotrackOS</span>
        <div>
          <span>HIPAA · SOC 2 · ISO 27001</span>
        </div>
      </footer>
    </>
  );
}
