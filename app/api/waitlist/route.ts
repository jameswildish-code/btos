import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email } = await req.json();

  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "james@theoriginalfitfactory.com",
    subject: "New waitlist signup — BiotrackOS",
    text: `${email} just joined the BiotrackOS waitlist.`,
  });

  return NextResponse.json({ ok: true });
}
