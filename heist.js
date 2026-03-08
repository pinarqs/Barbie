let score=0

function startGame(){

let area=document.getElementById("gameArea")

area.innerHTML=""

/* ELMASLAR */

for(let i=0;i<5;i++){

let diamond=document.createElement("div")

diamond.innerText="💎"

diamond.style.position="absolute"
diamond.style.left=Math.random()*550+"px"
diamond.style.top=Math.random()*300+"px"

diamond.style.fontSize="30px"
diamond.style.cursor="pointer"

diamond.onclick=function(){

score++

document.getElementById("score").innerText="Puan: "+score

diamond.remove()

}

area.appendChild(diamond)

}

/* LAZER */

let laser=document.createElement("div")

laser.className="laser"

area.appendChild(laser)

}

function secondCode(){

alert("🔐 Gizli kasa henüz aktif değil!")

}

function safeGame(){

let guess=prompt("1-5 arası sayı tahmin et")

let num=Math.floor(Math.random()*5)+1

if(guess==num){

alert("🎉 Kazandın!")

}

else{

alert("❌ Kaybettin")

}

}

function finishHeist(){

alert("🏆 Heist tamamlandı! Toplam puan: "+score)

}
