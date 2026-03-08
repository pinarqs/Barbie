function sparkleExplosion(x,y){ for(let i=0;i<6;i++){ let s=document.createElement("div") s.className="magicSparkle" s.innerText="✨" s.style.left=x+"px" s.style.top=y+"px" document.getElementById("gameArea").appendChild(s) setTimeout(()=>{ s.remove() },1000) } } /* MEVCUT ELMASTA EKLE */ document.addEventListener("click",(e)=>{ sparkleExplosion(e.clientX,e.clientY) }) /* BÜYÜLÜ GÖKKUŞAĞI PARILTISI */ function rainbowGlow(){ document.body.style.boxShadow="0 0 60px pink" setTimeout(()=>{ document.body.style.boxShadow="none" },1000) } setInterval(rainbowGlow,5000) /* GÖKKUŞAĞI EFEKTİ */ function rainbowEffect(){ let rainbow=document.createElement("div") rainbow.className="rainbowMagic" document.body.appendChild(rainbow) setTimeout(()=>{ rainbow.remove() },4000) } /* 10 saniyede bir gökkuşağı */ setInterval(rainbowEffect,10000) let score=0 function startGame(){ let area=document.getElementById("gameArea") area.innerHTML="" for(let i=0;i<5;i++){ let diamond=document.createElement("div") diamond.innerText="💎" diamond.style.position="absolute" diamond.style.left=Math.random()*300+"px" diamond.style.top=Math.random()*200+"px" diamond.style.fontSize="30px" diamond.style.cursor="pointer" diamond.onclick=function(){ score++ document.getElementById("score").innerText="Puan: "+score diamond.remove() } area.appendChild(diamond) } 

/* LAZER EKLENDİ */

let laser=document.createElement("div")
laser.className="laser"
area.appendChild(laser)

} function secondCode(){ alert("🔐 Gizli kasa henüz aktif değil!") } function safeGame(){ let guess=prompt("1-5 arası sayı tahmin et") let num=Math.floor(Math.random()*5)+1 if(guess==num){ alert("🎉 Kazandın!") } else{ alert("❌ Kaybettin") } } function finishHeist(){ alert("🏆 Heist tamamlandı! Toplam puan: "+score) }
