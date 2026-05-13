const pass = document.getElementById('password')
const stren = document.getElementById('strength')
const mssg = document.getElementById('message')

// checking whether the password is strong or not

pass.addEventListener('input', ()=>{

    //checking the length of the password to display the message.
        if(pass.value.length === 0){
            mssg.style.display = "none";
        }else{
            mssg.style.display = "block";
        }

    /*Using regex to check the input.
        passs.value - give the string itself */

    const hasSpecial = /[!@#$%^&*()_+{}|:"<>?~^]/.test(pass.value)
    const hasNum = /\d/.test(pass.value)
    const hasAlpha = /[a-zA-Z]/.test(pass.value)

    if(hasSpecial && hasAlpha && hasNum){
        stren.textContent = "strong!"
        mssg.style.color = "#00a947"
        document.querySelector('.main-box').style.borderColor = "#00a947"
    }
    else if((hasAlpha && hasNum) || (hasAlpha && hasSpecial) || (hasNum && hasSpecial)){
        stren.textContent = "decent!"
        mssg.style.color = "#d9e92d"
        document.querySelector('.main-box').style.borderColor = "#d9e92d"
    }
    else{        
        stren.textContent = "weak!"
        mssg.style.color = "#ff6924"
        document.querySelector('.main-box').style.borderColor = "#ff7a3c"
    }
})