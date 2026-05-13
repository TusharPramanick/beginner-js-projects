const inputBox = document.getElementById("password")
const generatebtn = document.querySelector(".btn")
const passwordCopy = document.querySelector("img")

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

function passwordGenerator(length = 12){
    let password = ""
    for(let i = 0; i< length; i++){
        const randIndex = Math.floor(Math.random() * characters.length);
        password += characters[randIndex]
    }
    return password
}

generatebtn.addEventListener("click", function(){
    inputBox.value = passwordGenerator()
})

passwordCopy.addEventListener("click", function(){
    navigator.clipboard.writeText(inputBox.value)
})
