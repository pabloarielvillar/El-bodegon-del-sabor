const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection [sliderSection.length-1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0,3s";
        setTimeout (function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionFirst);
            slider.style.marginleft = "-100%";
        },300); 
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = document.querySelectorAll(".slider__section")[-1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0,3s";
        setTimeout (function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin', sliderSectionLast);
            slider.style.marginleft = "-100%";
        },300); 
}

btnRight.addEventListener('click',function(){
    Next();
})

btnLeft.addEventListener('click',function(){
    Next();
})

setInterval(function(){
    Next();
},3000);
