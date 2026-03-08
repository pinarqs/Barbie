
/* 💖 GLITTER YAĞMURU */

function createGlitter(){

const glitter=document.createElement("div")

glitter.innerText="💖"

glitter.style.position="fixed"
glitter.style.left=Math.random()*100+"vw"
glitter.style.top="-20px"

glitter.style.fontSize="14px"
glitter.style.pointerEvents="none"

glitter.style.animation="rainFall 4s linear"

document.body.appendChild(glitter)

setTimeout(()=>{
glitter.remove()
},4000)

}

setInterval(createGlitter,300)



/* 🌈 MOUSE GÖKKUŞAĞI İZİ */

document.addEventListener("mousemove",(e)=>{

const rainbow=document.createElement("div")

rainbow.style.position="fixed"
rainbow.style.left=e.clientX+"px"
rainbow.style.top=e.clientY+"px"

rainbow.style.width="8px"
rainbow.style.height="8px"

rainbow.style.borderRadius="50%"

rainbow.style.background="linear-gradient(red,orange,yellow,green,blue)"

rainbow.style.pointerEvents="none"

document.body.appendChild(rainbow)

setTimeout(()=>{
rainbow.remove()
},600)

})



/* 💖 TIKLAYINCA KALP PATLAMASI */

document.addEventListener("click",(e)=>{

for(let i=0;i<6;i++){

const heart=document.createElement("div")

heart.innerText="💖"

heart.style.position="fixed"
heart.style.left=e.clientX+"px"
heart.style.top=e.clientY+"px"

heart.style.fontSize="20px"

heart.style.animation="explode 1s forwards"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},1000)

}

})



/* 🦄 UNICORN YAĞMURU */

function unicornRain(){

for(let i=0;i<20;i++){

let u=document.createElement("div")

u.innerText="🦄"

u.style.position="fixed"
u.style.left=Math.random()*100+"vw"
u.style.top="-20px"

u.style.fontSize="30px"

u.style.animation="rainFall 4s linear"

document.body.appendChild(u)

setTimeout(()=>{
u.remove()
},4000)

}

}



/* ✨ GLITTER PATLAMASI */

function glitterExplosion(){

for(let i=0;i<30;i++){

let g=document.createElement("div")

g.innerText="✨"

g.style.position="fixed"
g.style.left=Math.random()*100+"vw"
g.style.top=Math.random()*100+"vh"

g.style.fontSize="20px"

document.body.appendChild(g)

setTimeout(()=>{
g.remove()
},1500)

}

}



/* 🎀 STICKER DRAG */

document.querySelectorAll(".sticker").forEach(sticker=>{

let isDragging=false

sticker.addEventListener("mousedown",()=>{
isDragging=true
})

document.addEventListener("mouseup",()=>{
isDragging=false
})

document.addEventListener("mousemove",(e)=>{
    document.addEventListener("touchmove", function(e) {
movePlayer(e.touches[0]);
});


if(isDragging){

sticker.style.left=e.clientX+"px"
sticker.style.top=e.clientY+"px"

}

})

})



/* 💎 SECRET BARBIE VAULT */

function openVault(){

let code=document.getElementById("vaultCode").value

if(code==="barbie"){

document.getElementById("vaultMessage").innerText="💖 Welcome to Barbie World 💖"

}

else if(code==="unicorn"){

document.getElementById("vaultMessage").innerText="🦄 Unicorn Magic Activated!"

unicornRain()

}

else if(code==="dreamhouse"){

document.getElementById("vaultMessage").innerText="🏡 Dreamhouse Unlocked!"

document.body.style.background="pink"

}

else if(code==="pinkmagic"){

document.getElementById("vaultMessage").innerText="✨ Pink Glitter Explosion!"

glitterExplosion()

}

else{

document.getElementById("vaultMessage").innerText="❌ Wrong Code"

}

}

document.addEventListener("DOMContentLoaded", function(){

const btn = document.getElementById("youtubeBtn");

if(btn){

btn.addEventListener("click", function(){

window.open("https://www.youtube.com/@pinarqs7", "_blank");

});

}

});
