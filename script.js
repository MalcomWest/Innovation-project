const ham = document.getElementById("show")
const hider = document.getElementById("hider")

ham.addEventListener('mouseup', ()=>{
    if (hider.classList.contains("zero")) {
        hider.classList.remove("zero")
    }else{
        hider.classList.add("zero")
    }
})