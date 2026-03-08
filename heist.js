function startGame(){

let area=document.getElementById("gameArea")

area.innerHTML=""

/* ELMASTAR */

for(let i=0;i<5;i++){

let diamond=document.createElement("div")

diamond.innerText="💎"

diamond.style.position="absolute"
diamond.style.left=Math.random()*300+"px"
diamond.style.top=Math.random()*200+"px"

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
