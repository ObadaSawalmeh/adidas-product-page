const blue=document.querySelector(".blue")
const black=document.querySelector(".black")
const beige=document.querySelector(".beige")
const bluebtn=document.querySelector(".bluebtn")
const blackbtn=document.querySelector(".blackbtn")
const beigebtn=document.querySelector(".beigebtn")
blackbtn.onclick=()=>{
    black.style.opacity="1"
    if(black.classList.contains("active")===false){
        black.classList.add("active")
    }
    else {
        black.classList.remove("active")
    }
    blue.style.opacity="0"
    beige.style.opacity="0"
}
bluebtn.onclick=()=>{
    blue.style.opacity="1"
    if(blue.classList.contains("active")===false){
        blue.classList.add("active")
    }
    else {
        blue.classList.remove("active")
    }
    black.style.opacity="0"
    beige.style.opacity="0"
}
beigebtn.onclick=()=>{
    beige.style.opacity="1"
    if(beige.classList.contains("active")===true){
        beige.classList.remove("active")
    }
    else {
        beige.classList.add("active")
    }
    black.style.opacity="0"
    blue.style.opacity="0"
}
