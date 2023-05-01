/*let theEnd = 0,
    navbar = document.getElementById('navbar');

window.addEventListener('scroll',function(){
    var scrollTop = window.pageXOffset || document.
    documentElement.scrollTop;
    if(scrollTop > theEnd){
        navbar.style.top = '-80px';

    }
    else{
        navbar.style.top = '0';
    }
    theEnd = scrollTop;
})
*/

const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
}))


