const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendNotificationEmail({ subject, html }) {
  try {
    const { data, error } = await resend.emails.send({
      from: `Melville Paralegal Website <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.ADMIN_NOTIFICATION_EMAIL,
      subject,
      html,
    });

    if (error) {
      console.error(`[mailer] Resend API error ("${subject}"):`, error);
      return;
    }

    console.log(`[mailer] Notification email sent: ${subject} (id: ${data?.id})`);
  } catch (err) {
    console.error(`[mailer] Failed to send notification email ("${subject}"):`, err.message);
  }
}

module.exports = { sendNotificationEmail };
