async function sendNotificationEmail({ subject, html }) {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Melville Paralegal Website <${process.env.RESEND_FROM_EMAIL}>`,
        to: process.env.ADMIN_NOTIFICATION_EMAIL,
        subject,
        html,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error(`[mailer] Resend API error ("${subject}"):`, response.status, data);
      return;
    }

    console.log(`[mailer] Notification email sent: ${subject} (id: ${data?.id})`);
  } catch (err) {
    console.error(`[mailer] Failed to send notification email ("${subject}"):`, err.message);
  }
}

module.exports = { sendNotificationEmail };
