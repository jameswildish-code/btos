"use client";
import Link from "next/link";
import { useState } from "react";

const Logo = () => (
  <svg viewBox="0 0 360 90" width="130" height="33" aria-label="BiotrackOS" role="img">
    <text x="8" y="64" fontSize={64} fontFamily="'Instrument Serif', serif" fill="var(--ink)">{"b"}<tspan fontStyle="italic" fill="#0FA697">{"i"}<animate attributeName="opacity" values="1;0.5;1" dur="2.4s" repeatCount="indefinite"/></tspan>{"otrack"}</text>
    <text x="262" y="24" fontFamily="'Geist Mono', monospace" fontSize={14} letterSpacing="2.5" fontWeight={500} fill="var(--ink-2)">{"OS"}</text>
  </svg>
);

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [sentEmail, setSentEmail] = useState("");
  const [resent, setResent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = e.currentTarget.querySelector<HTMLInputElement>("#email")!;
    if (!email.value || !/.+@.+\..+/.test(email.value)) {
      email.focus();
      email.style.borderColor = "#B23A48";
      setTimeout(() => (email.style.borderColor = ""), 1400);
      return;
    }
    setSentEmail(email.value);
    setSent(true);
  }

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .auth-page { min-height: 100vh; display: flex; flex-direction: column; }
        .auth-shell { flex: 1; display: grid; place-items: center; padding: 32px clamp(20px, 5vw, 48px); }
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
        .auth-submit {
          height: 52px; border: 0;
          background: var(--ink); color: var(--bg);
          font: inherit; font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.18em;
          text-transform: uppercase; cursor: pointer; border-radius: 999px; margin-top: 4px;
          transition: transform .12s ease; width: 100%;
        }
        .auth-submit:hover { transform: translateY(-1px); }
        .back-link {
          margin-top: 28px; padding-top: 18px; border-top: 1px solid var(--line);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--muted);
        }
        .back-link a { color: var(--ink); text-decoration: underline; text-underline-offset: 3px; }
        .sent-state { padding: 24px; background: var(--mint-soft); border-radius: 16px; margin-top: 32px; }
        .sent-ic {
          width: 44px; height: 44px; border-radius: 12px; background: var(--surface);
          display: grid; place-items: center; color: var(--teal);
          font-family: var(--font-display); font-size: 22px; margin-bottom: 14px;
        }
        .sent-state h3 { font-family: var(--font-display); font-weight: 400; font-size: 26px; line-height: 1.1; margin: 0 0 8px; }
        .sent-state p { font-size: 14px; line-height: 1.55; color: var(--ink-2); margin: 0; max-width: 38ch; }
        .sent-resend {
          margin-top: 18px; font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted);
          display: flex; align-items: center; gap: 8px;
        }
        .sent-resend button { background: none; border: none; color: var(--ink); text-decoration: underline; text-underline-offset: 3px; cursor: pointer; font: inherit; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; padding: 0; }
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
        </header>

        <main className="auth-shell">
          <div className="auth-card">
            <div className="auth-eyebrow"><span className="dot"></span> Password reset</div>
            <h1>Forgot your <em>password?</em></h1>

            {!sent ? (
              <form id="forgot" className="auth-form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@yourdomain.com" autoComplete="email" required />
                </div>
                <button className="auth-submit" type="submit">Send reset link <span className="arrow">→</span></button>
              </form>
            ) : (
              <div className="sent-state">
                <div className="sent-ic">✓</div>
                <h3>Check your inbox.</h3>
                <p>If an account exists for <strong>{sentEmail}</strong>, we&apos;ve sent a reset link. It should arrive within a minute.</p>
                <div className="sent-resend">
                  Not arrived?
                  <button onClick={() => setResent(true)} disabled={resent}>
                    {resent ? "Sent ✓" : "Resend"}
                  </button>
                </div>
              </div>
            )}

            <div className="back-link">
              <Link href="/login">Return to sign in →</Link>
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
