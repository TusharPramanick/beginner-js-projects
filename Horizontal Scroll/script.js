let scroll = document.querySelector('.container')
let leftBtn = document.querySelector('.left')
let rightBtn = document.querySelector('.right')

scroll.addEventListener("wheel", (event)=>{
    event.preventDefault()
    scroll.scrollLeft += event.deltaY
    scroll.style.scrollBehaviour = "auto"
})

rightBtn.addEventListener("click", function(){
    scroll.scrollLeft -= 600;
    scroll.style.scrollBehaviour = "smooth"
})


leftBtn.addEventListener("click", function(){
    scroll.scrollLeft += 600;
    scroll.style.scrollBehaviour = "smooth"
})