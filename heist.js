/* ELMASTA PARILTILI PATLAMA */

function sparkleExplosion(x,y){

for(let i=0;i<6;i++){

let s=document.createElement("div")

s.className="magicSparkle"

s.innerText="✨"

s.style.left=x+"px"
s.style.top=y+"px"

document.getElementById("gameArea").appendChild(s)

setTimeout(()=>{

s.remove()

},1000)

}

}


/* MEVCUT ELMASTA EKLE */

document.addEventListener("click",(e)=>{

sparkleExplosion(e.clientX,e.clientY)

})


/* BÜYÜLÜ GÖKKUŞAĞI PARILTISI */

function rainbowGlow(){

document.body.style.boxShadow="0 0 60px pink"

setTimeout(()=>{

document.body.style.boxShadow="none"

},1000)

}

setInterval(rainbowGlow,5000)
/* GÖKKUŞAĞI EFEKTİ */

function rainbowEffect(){

let rainbow=document.createElement("div")

rainbow.className="rainbowMagic"

document.body.appendChild(rainbow)

setTimeout(()=>{

rainbow.remove()

},4000)

}

/* 10 saniyede bir gökkuşağı */

setInterval(rainbowEffect,10000)
