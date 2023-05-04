let ham = document.querySelector('.ham');
let menu = document.querySelector('.nav-2');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const projects = document.querySelector('.projects-container')

ham.onclick = function() {
    menu.classList.toggle("active");
    ham.classList.toggle("cross");
};


let  h = 0;


next.addEventListener('click' , () => {
    if((h <= 0) && (h >= -1400)){
        h = h - 200;
        projects.style.transform =  `translateX(${h}px)`
    }
    console.log(h)
    if(h < -400) {
        prev.style.opacity = '1'
    } else {
        prev.style.opacity = '0';
    }
    
});

prev.addEventListener('click' , () => {
    if((h <= 0) && (h <= 1400)){
        h = h + 200;
        projects.style.transform =  `translateX(${h}px)`
    }
    if(h == 200) {
        h = 0;
    }
    console.log(h)
})


