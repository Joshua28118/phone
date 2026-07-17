import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SubmitRequest, SubmitResponse } from "@/types";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/\s+/g, "");
  return /^[0-9+\-()]{7,15}$/.test(cleaned);
}

export async function POST(req: NextRequest): Promise<NextResponse<SubmitResponse>> {
  let body: Partial<SubmitRequest>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const phone = (body.phone ?? "").trim();
  const contactName = (body.contactName ?? "").trim();

  if (!phone) {
    return NextResponse.json(
      { success: false, message: "Phone number is required." },
      { status: 400 }
    );
  }

  if (!validatePhone(phone)) {
    return NextResponse.json(
      { success: false, message: "Invalid phone number format." },
      { status: 422 }
    );
  }

  const toEmail = process.env.DESTINATION_EMAIL;

  if (!toEmail || !process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Missing email environment variables.");
    return NextResponse.json(
      { success: false, message: "Server configuration error." },
      { status: 500 }
    );
  }

  try {
    await transporter.sendMail({
      from: `"Phone Ask" <${process.env.GMAIL_USER}>`,
      to: toEmail,
      subject: "Someone shared their phone number with you",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
          <h2 style="margin: 0 0 8px; font-size: 20px; color: #111;">New phone number received</h2>
          <p style="margin: 0 0 24px; color: #555;">Someone filled out the form on your website.</p>
          <div style="background: #f5f5f5; border-radius: 10px; padding: 20px;">
            ${contactName ? `
            <p style="margin: 0 0 4px; font-size: 13px; color: #888;">Save as</p>
            <p style="margin: 0 0 20px; font-size: 18px; font-weight: 600; color: #111;">${contactName}</p>
            ` : ""}
            <p style="margin: 0 0 4px; font-size: 13px; color: #888;">WhatsApp</p>
            <p style="margin: 0; font-size: 22px; font-weight: 600; color: #111; letter-spacing: 0.02em;">${phone}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Submitted successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Nodemailer error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}
