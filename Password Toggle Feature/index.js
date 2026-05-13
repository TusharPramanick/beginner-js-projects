let img = document.querySelector("img");
let inputType = document.querySelector("input");
let passwordVisible = false;
img.addEventListener("click", function () {
    // Fade out
    this.style.opacity = '0';
    
    setTimeout(() => {
        if (passwordVisible) {
            this.setAttribute('src', './eye-icons/eye-close.png');
            inputType.setAttribute('type', 'password');
            passwordVisible = false;
        } else {
            this.setAttribute('src', './eye-icons/eye-open.png');
            inputType.setAttribute('type', 'text');
            passwordVisible = true;
        }
        
        // Fade back in
        this.style.opacity = '1';

    }, 150);  // Delay matches half the transition time for smooth effect
});
