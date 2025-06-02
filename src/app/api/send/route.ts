import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

// Validate that API key exists
if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  number: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, number, subject, message } = formSchema.parse(body);

    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev', // Use this for testing
        // from: 'Butlr Contact Form <contact@yourdomain.com>', // Use this after domain verification
        to: ['s1ddh9rth@gmail.com'],
        subject: `New Contact Form Submission: ${subject}`,
        replyTo: email,
        text: `
Name: ${name}
Email: ${email}
${number ? `Phone: ${number}\n` : ''}
Subject: ${subject}

Message:
${message}
        `,
      });

      if (error) {
        console.error('Resend API error:', error);
        return NextResponse.json(
          { error: 'Failed to send email: ' + error.message },
          { status: 400 }
        );
      }

      return NextResponse.json({ data });
    } catch (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Form validation error:', error);
    return NextResponse.json(
      { error: 'Invalid form data' },
      { status: 400 }
    );
  }
} 