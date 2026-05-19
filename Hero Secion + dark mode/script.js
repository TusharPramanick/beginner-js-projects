const darkModeIcon = document.getElementById("dark-mode-icon")
darkModeIcon.addEventListener("click", function(){
    isDark = document.body.classList.toggle("dark-theme")
    if(isDark){
        darkModeIcon.setAttribute("src", "./portfolio_site_img/sun.png")
    }else{
        darkModeIcon.setAttribute("src", "./portfolio_site_img/moon.png")
    }
})