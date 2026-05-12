"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [state, setState] = useState<"idle" | "ok" | "error">("idle");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      setState("error");
      setTimeout(() => setState("idle"), 1200);
      return;
    }
    await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setState("ok");
  };

  return (
    <div className={`waitlist${state === "ok" ? " ok" : ""}`} id="wl">
      <div className="lbl">Waitlist</div>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          name="email"
          required
          placeholder="you@yourdomain.com"
          autoComplete="email"
          value={state === "ok" ? "You're on the list — we'll be in touch." : email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={state === "ok"}
          style={state === "error" ? { color: "#B23A48" } : undefined}
        />
        <button type="submit">
          {state === "ok" ? "Joined ✓" : <>Join <span className="arrow">→</span></>}
        </button>
      </form>
      <div className="note">One email when we open. No spam.</div>
    </div>
  );
}
