import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, insuranceType } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Email to Mrod
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'michaelr@sebandainsurance.com', // MC Global email
      subject: `New Lead: ${name}`,
      html: `
        <h2>New Insurance Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Insurance Type:</strong> ${insuranceType}</p>
        <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
        <p>Reply to this lead as soon as possible!</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Lead submitted' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to submit lead' });
  }
}
