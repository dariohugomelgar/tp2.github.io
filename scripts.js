var desplegarMenu = document.getElementById("desplegar");
var contraerMenu = document.getElementById("contraer");
var mouseSobreplatos = document.getElementById("platos")
var mouseSobredesplegable1 = document.getElementById("desplegable1");
var btnabrir = document.getElementById("abrir");
var btncerrar = document.getElementById("cerrar");




mouseSobreplatos.addEventListener("mouseover",()=>{
document.getElementById("plato").style.left=("-38.4vh");
document.getElementById("postre").style.left=("3em");
document.getElementById("copa").style.left=("3em");

});

mouseSobreplatos.addEventListener("mouseout",()=>{
document.getElementById("plato").style.left=("0vh");
document.getElementById("postre").style.left=("0em");
document.getElementById("copa").style.left=("0em");
    
});



desplegarMenu.addEventListener("click",()=>{
document.getElementById("desplegable").style.top="-.5em";
document.getElementById("desplegable").style.opacity="1";
document.getElementById("desplegar").style.opacity="0";
document.getElementById("desplegar").style.display="none";
document.getElementById("contraer").style.opacity="1";
document.getElementById("contraer").style.display="block";



});

contraerMenu.addEventListener("click", () => {
document.getElementById("desplegable").style.top = "-8em";
document.getElementById("desplegable").style.opacity = "0";
document.getElementById("desplegar").style.opacity = "1";
document.getElementById("desplegar").style.display = "block";
document.getElementById("contraer").style.opacity = "0";
document.getElementById("contraer").style.display = "none";


});


mouseSobredesplegable1.addEventListener("mouseover",()=>{
document.getElementById("plato").style.left=("-38.4vh");
document.getElementById("postre").style.left=("3em");
document.getElementById("copa").style.left=("3em");
       
});

mouseSobredesplegable1.addEventListener("mouseout",()=>{
document.getElementById("plato").style.left=("0vh");
document.getElementById("postre").style.left=("0em");
document.getElementById("copa").style.left=("0em");
            
});
btnabrir.addEventListener("click",()=>{
document.getElementById("menuH").style.opacity="1";
document.getElementById("abrir").style.opacity="0";
document.getElementById("abrir").style.display="none";
document.getElementById("cerrar").style.opacity="1";
document.getElementById("cerrar").style.display="block";
document.getElementById("desplegar").style.opacity="0";
document.getElementById("desplegar").style.display="none";
document.getElementById("contraer").style.opacity="0";
document.getElementById("contraer").style.display="none";
    
    });
btncerrar.addEventListener("click",()=>{
document.getElementById("menuH").style.opacity="0";
document.getElementById("abrir").style.opacity="1";
document.getElementById("abrir").style.display="block";
document.getElementById("abrir").style.marginTop="-0.1em";
document.getElementById("cerrar").style.opacity="0";
document.getElementById("cerrar").style.display="none";
document.getElementById("desplegar").style.opacity="0";
document.getElementById("desplegar").style.display="none";
document.getElementById("contraer").style.opacity="0";
document.getElementById("contraer").style.display="none";
            
});   

