const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

transporter.verify((err) => {
  if (err) {
    console.error('[mailer] SMTP connection failed:', err.message);
  } else {
    console.log('[mailer] SMTP connection ready');
  }
});

async function sendNotificationEmail({ subject, html }) {
  try {
    await transporter.sendMail({
      from: `"Melville Paralegal Website" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_NOTIFICATION_EMAIL || process.env.GMAIL_USER,
      subject,
      html,
    });
    console.log(`[mailer] Notification email sent: ${subject}`);
  } catch (err) {
    console.error(`[mailer] Failed to send notification email ("${subject}"):`, err.message);
  }
}

module.exports = { sendNotificationEmail };
