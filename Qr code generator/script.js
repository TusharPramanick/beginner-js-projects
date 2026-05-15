const qrBox = document.getElementById("qrBox")
const qrImg = document.getElementById("qrImg")
const qrText = document.getElementById("qrText")
const btn = document.querySelector(".btn")

btn.addEventListener("click", function(){
    if(qrText.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrBox.classList.add("show")
    }else{
        qrText.classList.add("error")
        setTimeout(()=>{
            qrText.classList.remove("error")
        }, 1000)
    }
})