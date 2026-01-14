export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  console.log('🔥 غنيمة:', JSON.stringify(req.body, null, 2));
  res.status(204).end();
}
