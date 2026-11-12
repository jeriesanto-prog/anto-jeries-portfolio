import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Please submit a valid form." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Please submit a valid form." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.trim().length < 2 ||
    name.length > 100 ||
    !isEmail(email) ||
    email.length > 254 ||
    message.trim().length < 10 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { message: "Please check your name, email, and message, then try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "jeriesanto@gmail.com";
  if (!apiKey || !from) {
    console.error("Contact form is missing RESEND_API_KEY or CONTACT_FROM_EMAIL.");
    return NextResponse.json(
      { message: "The contact form is not configured yet. Please email me directly." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Portfolio message from ${name.trim()}`,
    text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
  });

  if (error) {
    console.error("Resend failed to send a portfolio contact message.", error);
    return NextResponse.json(
      { message: "I couldn’t send your message right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Message sent successfully." });
}
