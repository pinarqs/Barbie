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

/* 📱 TELEFON İÇİN */

document.addEventListener("touchmove",(e)=>{

const touch=e.touches[0]

const rainbow=document.createElement("div")

rainbow.style.position="fixed"
rainbow.style.left=touch.clientX+"px"
rainbow.style.top=touch.clientY+"px"

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
