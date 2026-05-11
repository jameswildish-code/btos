export const revalidate = 60;
import Link from "next/link";
import { getOpenRoles } from "@/lib/sanity";

const STATIC_ROLES = [
  { _id: "1", title: "Staff Engineer — Data Platform", department: "Engineering", location: "London / Remote", type: "Full-time", level: "Senior" },
  { _id: "2", title: "Senior Product Designer", department: "Design", location: "Copenhagen / Remote", type: "Full-time", level: "Senior" },
  { _id: "3", title: "Clinical Informatics Lead", department: "Clinical", location: "London", type: "Full-time", level: "Lead" },
  { _id: "4", title: "Enterprise Account Executive", department: "Sales", location: "London / Dublin", type: "Full-time", level: "Senior" },
  { _id: "5", title: "Backend Engineer — FHIR APIs", department: "Engineering", location: "Remote (Europe)", type: "Full-time", level: "Mid" },
  { _id: "6", title: "Head of Clinical Partnerships", department: "Clinical", location: "London", type: "Full-time", level: "Head" },
  { _id: "7", title: "Data Scientist — Biomarker Models", department: "Engineering", location: "Remote (Europe)", type: "Full-time", level: "Senior" },
  { _id: "8", title: "Marketing Lead — B2B", department: "Marketing", location: "London / Copenhagen", type: "Full-time", level: "Lead" },
  { _id: "9", title: "People & Talent Partner", department: "People", location: "London", type: "Full-time", level: "Mid" },
  { _id: "10", title: "Product Manager — Consumer App", department: "Product", location: "Copenhagen / Remote", type: "Full-time", level: "Senior" },
  { _id: "11", title: "Operations Analyst", department: "Operations", location: "London", type: "Full-time", level: "Mid" },
];

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

export default async function CareersPage() {
  let roles: typeof STATIC_ROLES = [];
  try {
    const data = await getOpenRoles();
    if (data?.length) roles = data;
  } catch { /* use static */ }
  if (!roles.length) roles = STATIC_ROLES;

  const byDept = roles.reduce<Record<string, typeof STATIC_ROLES>>((acc, r) => {
    const d = r.department ?? "Other";
    if (!acc[d]) acc[d] = [];
    acc[d].push(r);
    return acc;
  }, {});

  return (
    <>
      <style>{`
        .car-hero { padding:72px 0 80px; border-bottom:1px solid var(--line); }
        .car-hero .g { display:grid; grid-template-columns:1.3fr 1fr; gap:64px; align-items:end; }
        .principles { padding:80px 0; border-bottom:1px solid var(--line); }
        .p-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:48px; }
        .p-card { background:var(--surface); border:1px solid var(--line); border-radius:20px; padding:28px; }
        .p-card .num { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-bottom:16px; }
        .p-card h3 { font-family:var(--font-display); font-weight:400; font-size:28px; line-height:1.1; letter-spacing:-.01em; margin:0 0 12px; }
        .roles { padding:80px 0; }
        .dept-section { margin-bottom:56px; }
        .dept-head { font-family:var(--font-mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); padding-bottom:14px; border-bottom:1px solid var(--line); margin-bottom:12px; }
        .role-row { display:grid; grid-template-columns:1fr auto auto; gap:24px; padding:20px 0; border-bottom:1px dashed var(--line); align-items:center; }
        .role-row h4 { font-size:16px; font-weight:500; margin:0 0 4px; }
        .role-tags { display:flex; gap:8px; flex-wrap:wrap; }
        .role-tag { font-family:var(--font-mono); font-size:10px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); padding:3px 8px; border-radius:999px; background:var(--bg-2); border:1px solid var(--line); }
        @media (max-width:900px) { .car-hero .g,.p-grid { grid-template-columns:1fr; } .role-row { grid-template-columns:1fr; gap:12px; } }
      `}</style>

      <section className="car-hero">
        <div className="wrap-w">
          <div className="g">
            <div>
              <span className="eyebrow"><span className="dot"></span> Careers</span>
              <h1 className="h1" style={{ marginTop: 16 }}>{roles.length} roles open.<br/><em>We&apos;re building in the open.</em></h1>
              <p className="lede" style={{ marginTop: 24 }}>We&apos;re a small, focused team building clinical-grade infrastructure for health data. Based in London and Copenhagen, with engineers and clinicians working remotely across Europe.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "London, UK", count: roles.filter(r => r.location?.includes("London")).length },
                { label: "Copenhagen", count: roles.filter(r => r.location?.includes("Copenhagen")).length },
                { label: "Remote (Europe)", count: roles.filter(r => r.location?.includes("Remote")).length },
              ].map((l) => (
                <div key={l.label} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{l.label}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1 }}>{l.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="principles">
        <div className="wrap-w">
          <span className="eyebrow"><span className="dot"></span> How we work</span>
          <div className="p-grid">
            {[
              { n: "01", h: "Small team, real scope.", p: "We have eleven open roles because we don't over-hire. Each person ships things that matter to clinicians and patients, not features for a roadmap slide." },
              { n: "02", h: "Clinical rigour, startup pace.", p: "We're building health infrastructure — it has to be right. But we also ship, iterate, and change our minds when the data says to. Both things are true." },
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

          {Object.entries(byDept).map(([dept, deptRoles]) => (
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
                      <span className="role-tag">{role.level}</span>
                      <span className="role-tag">{role.location}</span>
                      <span className="role-tag">{role.type}</span>
                    </div>
                  </div>
                  <Link className="btn btn-ghost btn-sm" href="mailto:careers@biotrackos.com">Apply →</Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
