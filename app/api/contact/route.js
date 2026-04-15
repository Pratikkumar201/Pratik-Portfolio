import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();

//     // Basic Validation
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: 'All fields are required' },
//         { status: 400 }
//       );
//     }

//     // Email format validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: 'Invalid email address' },
//         { status: 400 }
//       );
//     }

//     if (!process.env.RESEND_API_KEY) {
//       console.error('RESEND_API_KEY is missing in environment variables');
//       return NextResponse.json(
//         { error: 'Email service not configured. Please check .env file.' },
//         { status: 500 }
//       );
//     }

//     const { data, error } = await resend.emails.send({
//       from: 'Portfolio Contact <onboarding@resend.dev>',
//       to: 'pratikkumar.bhumca22@gmail.com',
//       replyTo: email,
//       subject: `Portfolio: Message from ${name}`,
//       html: `
//         <div style="font-family: sans-serif; padding: 20px; color: #333;">
//           <h2 style="color: #00E5FF;">New Portfolio Message</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
//           <p><strong>Message:</strong></p>
//           <p style="white-space: pre-wrap;">${message}</p>
//         </div>
//       `,
//     });

//     if (error) {
//       console.error('Resend Error:', error);
//       return NextResponse.json({ error: error.message }, { status: 400 });
//     }

//     return NextResponse.json(
//       { message: 'Message sent successfully!', id: data.id },
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error('Contact API Error:', error);
//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }



export async function POST(req) {
  return Response.json({ success: true });
}