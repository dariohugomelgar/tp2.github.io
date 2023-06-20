


const slider = document.querySelector("#slider");
var sliderSection = document.querySelectorAll(".slider__section");
const btnizquierda = document.querySelector(".slider__btn-left");
const btnderecha = document.querySelector(".slider__btn-right");
slider.insertAdjacentElement("afterbegin",sliderSectionLast);
var sliderSectionLast = sliderSection[sliderSection.length -1];

function proximaimg () {
    var sliderSectionFirst = querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "0%";
    slider.style.transition ="all 05s";

setTimeout(()=>{
    slider.style.transition ="none";
    slider.insertAdjacentElement("beforeend",sliderSectionFirst);
    slider.style.marginLeft= "20%"

},500);

}
function imganterior () {
    slider.insertAdjacentElement("afterbegin",sliderSectionLast);
    var sliderSectionLast = sliderSection[sliderSection.length -1];

   
    slider.style.marginLeft = "0%";
    slider.style.transition ="all 05s";

setTimeout(()=>{
    slider.style.transition ="none";
    slider.insertAdjacentElement("beforeend",sliderSectionFirst);
    slider.style.marginLeft= "20%"

},500);

};

    


btnderecha.addEventListener("click",()=>{
    proximaimagen();
});

btnderecha.addEventListener("click",()=>{
    imganterior();
});