export const revalidate = 0;
import Link from "next/link";
import { getOpenRoles } from "@/lib/sanity";

const deptColors: Record<string, string> = {
  Engineering: "var(--mint-soft)",
  Design: "var(--sky)",
  Clinical: "var(--rose)",
  Sales: "var(--amber)",
  Marketing: "var(--lime)",
  Product: "var(--mint)",
  People: "var(--mint-soft)",
  Operations: "var(--bg-2)",
};

type Role = {
  _id: string;
  title: string;
  department?: { _id: string; title: string };
  location?: string;
  type?: string;
  externalUrl?: string;
};

export default async function CareersPage() {
  const data = await getOpenRoles();
  const roles: Role[] = data ?? [];

  const byDept = roles.reduce<Record<string, Role[]>>((acc, r) => {
    const d = r.department?.title ?? "Other";
    if (!acc[d]) acc[d] = [];
    acc[d].push(r);
    return acc;
  }, {});
  const sortedDepts = Object.entries(byDept).sort(([a], [b]) => a.localeCompare(b));

  return (
    <>
      <style>{`
        .car-hero { padding:72px 0 80px; border-bottom:1px solid var(--line); }
        .principles { padding:80px 0; border-bottom:1px solid var(--line); }
        .p-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:48px; }
        .p-card { background:var(--surface); border:1px solid var(--line); border-radius:20px; padding:28px; }
        .p-card .num { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-bottom:16px; }
        .p-card h3 { font-family:var(--font-display); font-weight:400; font-size:28px; line-height:1.1; letter-spacing:-.01em; margin:0 0 12px; }
        .roles { padding:80px 0; }
        .dept-section { margin-bottom:56px; }
        .dept-head { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); padding-bottom:14px; border-bottom:1px solid var(--line); margin-bottom:12px; }
        .role-row { display:grid; grid-template-columns:1fr auto; gap:24px; padding:20px 0; border-bottom:1px dashed var(--line); align-items:center; }
        .role-row h4 { font-size:16px; font-weight:500; margin:0 0 6px; }
        .role-tags { display:flex; gap:8px; flex-wrap:wrap; }
        .role-tag { font-family:var(--font-mono); font-size:10px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); padding:3px 8px; border-radius:999px; background:var(--bg-2); border:1px solid var(--line); }
        @media (max-width:900px) { .p-grid { grid-template-columns:1fr; } .role-row { grid-template-columns:1fr; gap:12px; } }
      `}</style>

      <section className="car-hero">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> Careers</span>
          <h1 className="h1" style={{ marginTop: 16 }}>
            {roles.length > 0 ? <>{roles.length} roles open.</> : <>We&apos;re hiring.</>}
            <br/><em>Join us. Build what&apos;s next.</em>
          </h1>
          <p className="lede" style={{ marginTop: 24, maxWidth: "52ch" }}>We&apos;re a global team of engineers, product thinkers, and clinical advisors building the platform modern health runs on.</p>
        </div>
      </section>

      <section className="principles">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> How we work</span>
          <div className="p-grid">
            {[
              { n: "01", h: "Real scope, real stakes.", p: "We hire for ownership, not headcount. Ship work that reaches people, not features for a roadmap slide." },
              { n: "02", h: "Thoughtful velocity.", p: "We build with care and ship with conviction. That's the standard." },
              { n: "03", h: "Ownership, not tickets.", p: "You'll own the outcome of your work, not a list of tasks. That means more context, more responsibility, and more interesting problems." },
            ].map((p) => (
              <div key={p.n} className="p-card">
                <div className="num">{p.n}</div>
                <h3>{p.h}</h3>
                <p style={{ color: "var(--muted)", margin: 0, fontSize: 14 }}>{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="roles">
        <div className="wrap-w">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48 }}>
            <div>
              <span className="eyebrow"><span className="dot"></span> Open roles</span>
              <h2 className="h2" style={{ marginTop: 12 }}>Join the team.</h2>
            </div>
            <Link className="btn btn-ghost" href="mailto:careers@biotrackos.com">Not seeing your role? Get in touch</Link>
          </div>

          {roles.length === 0 ? (
            <p style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 13 }}>No open roles at the moment — check back soon or <a href="mailto:careers@biotrackos.com" style={{ color: "var(--teal)" }}>reach out speculatively</a>.</p>
          ) : (
            sortedDepts.map(([dept, deptRoles]) => (
              <div key={dept} className="dept-section">
                <div className="dept-head" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: deptColors[dept] ?? "var(--line)", display: "inline-block" }}></span>
                  {dept} — {deptRoles.length} open
                </div>
                {deptRoles.map((role) => (
                  <div key={role._id} className="role-row">
                    <div>
                      <h4>{role.title}</h4>
                      <div className="role-tags">
                        {role.location && <span className="role-tag">{role.location}</span>}
                        {role.type && <span className="role-tag">{role.type}</span>}
                      </div>
                    </div>
                    {role.externalUrl && <a className="btn btn-ghost btn-sm" href={role.externalUrl} target="_blank" rel="noopener noreferrer">Apply →</a>}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
