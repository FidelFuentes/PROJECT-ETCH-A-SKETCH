const conteiner=document.querySelector("#conteiner");

document.getElementById("button").onclick= function(){myfuction()}
document.getElementById('button2').onclick=function(){clear()}
function myfuction(){
    
var opcion = prompt('how many squares:', 16)
var dobleopcion= opcion*opcion;
function newdivs(){
    for(let i=1; i<=dobleopcion ; i++){
   const content= document.createElement("div");
   content.classList.add('content');
   content.textContent= 'np';
   conteiner.appendChild(content);

    }
}
newdivs();
}
function clear(){
    const gridarray= Array.from(conteiner.childNodes);
    gridarray.forEach((Element) => {
        conteiner.removeChild(Element);
    })
}


function divs(){
    for(let i=1; i<=256 ; i++){
   const content= document.createElement("div");
   content.classList.add('content');
   content.textContent= 'prueba';
   conteiner.appendChild(content);

    }
}
divs();

const listdiv=document.querySelectorAll('div');
listdiv.forEach((div) => {
//div.addEventListener('onmouseenter',() => {
 //   div.bgColor='blue';
//})
div.addEventListener('mousemove', function(e){ e.target.style.background='blue'})
conteiner.appendChild(listdiv);

})

// funcion que le pase cuantos div sea mi cuadrado por lugar
//funcion que multiplique el lado por el lado de nuevo y luego ejecute ese parametro en divs

