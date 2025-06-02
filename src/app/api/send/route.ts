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
      // Always send to the Resend account owner's email for testing
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['siddharth19n@gmail.com'], // This should be the email you used to sign up for Resend
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${number ? `<p><strong>Phone:</strong> ${number}</p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
        reply_to: email,
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