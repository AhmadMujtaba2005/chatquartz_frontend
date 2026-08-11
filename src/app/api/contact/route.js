import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Hardcoded recipient email for all contact form submissions
const SALES_EMAIL = 'sales@dataquartz.com';

// Fallback sender email (must be verified in Resend, or use onboarding@resend.dev for testing)
const SENDER_EMAIL = 'onboarding@resend.dev';

let resend;
if (process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request) {
    try {
        if (!resend) {
            console.error('RESEND_API_KEY is not configured.');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const body = await request.json();
        const { name, company, title, email, phone, message, _honey } = body;

        // 1. Honeypot check (Spam Protection)
        // If the hidden honeypot field is filled out, silently reject it as spam
        if (_honey) {
            console.warn('Spam detected via honeypot field');
            // Return 200 so the bot thinks it succeeded, but we drop the email
            return NextResponse.json({ success: true }, { status: 200 });
        }

        // 2. Server-side validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: Full Name, Work Email, or Message' },
                { status: 400 }
            );
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // 3. Construct the dynamic subject
        const companyStr = company ? ` (${company})` : '';
        const subject = `New Contact Request from ${name}${companyStr}`;

        // 4. Construct the email body
        // We fall back to "—" if an optional field is missing.
        const htmlBody = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Work Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || '—'}</p>
            <p><strong>Title:</strong> ${title || '—'}</p>
            <p><strong>Phone Number:</strong> ${phone || '—'}</p>
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
        `;

        // 5. Send the email using Resend
        const { data, error } = await resend.emails.send({
            from: SENDER_EMAIL,
            to: SALES_EMAIL,
            replyTo: email,
            subject: subject,
            html: htmlBody,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
        }

        return NextResponse.json({ success: true, id: data?.id }, { status: 200 });

    } catch (err) {
        console.error('Contact API Route Error:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
