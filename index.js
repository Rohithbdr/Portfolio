let ham = document.querySelector('.ham');
let menu = document.querySelector('.nav-2');

ham.onclick = function() {
    menu.classList.toggle("active");
    ham.classList.toggle("cross");
};