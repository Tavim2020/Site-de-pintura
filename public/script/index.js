const menu = document.querySelector(".menu-img");
const menuEscopo = document.querySelector(".hidden");

function activeMenu(){
    menu.style.transition= '0.05s';
    menu.style.transform= 'rotateZ(90deg)';
    menu.style.borderBottomLeftRadius= '0.8051529790660226vw';
    menu.style.borderTopLeftRadius= '0.8051529790660226vw';
    menu.style.background = "#fff";
    menu.classList.add("back-hidden");
function show(){
    AnimationTimeline
    menuEscopo.classList.remove("hidden");
}

requestAnimationFrame(show);

}

function removeMenu(){
    menu.style.transition= '0.5s';
    menu.style.transform= 'rotateZ(0)';
    menu.style.borderBottomLeftRadius= '0px';
    menu.style.background= "#2BD9FE";
    menu.style.borderTopLeftRadius= '0px';
    menu.classList.remove("back-hidden");


    menuEscopo.classList.add("hidden");
}

menu.addEventListener('mousemove', activeMenu);
menu.addEventListener('mouseleave', removeMenu);

menuEscopo.addEventListener('mousemove', activeMenu);
menuEscopo.addEventListener('mouseleave', removeMenu);


// Slide de imagens

var slide = document.querySelector("#slide");
var imgSlide = document.querySelector("#img-slide-one");
var imgSlideTwo = document.querySelector("#img-slide-two");
var contagem = 0;


function Slide(){
   contagem ++;
   if(contagem === 1){
       imgSlide.classList.add('hidden');
       imgSlideTwo.classList.remove('hidden');
   }
   else if(contagem === 2){
    imgSlideTwo.classList.add('hidden');
    imgSlide.classList.remove('hidden');
    contagem = 0;
   } 
}


setInterval(Slide, 4000);


// resposividade

var screenWidth = screen.width;
var screendHeigth = screen.height

function response(){
    if(screendHeigth >= screenWidth){
        var classMenu = document.querySelector(".menu-img");
        var imgWhats = document.querySelector('.whats-top');
        var menuDiv = document.querySelector(".hidden");


        var elementsWriteP = document.getElementsByTagName("p");


        var elementsWriteHTwo = document.getElementsByTagName("h2");

        var elementsWriteHTree = document.getElementsByTagName("h3");
   
        var elementsWriteHFour = document.getElementsByTagName("h4");

        
        var elementsWriteAButton = document.querySelector("#button-a");
        

        var imgsAll = document.querySelectorAll('img');


        var elementsWriteLi = document.getElementsByTagName("li");
        
        classMenu.style.width = '11vh';
        imgWhats.style.width = '7vh';
        menuDiv.style.width = '20vh';


        elementsWriteP[0].style.fontSize = '5vw';
        elementsWriteP[0].style.marginRight = '13vw';


        elementsWriteP[1].style.fontSize = '3.5vw';
        elementsWriteP[1].style.marginLeft = '4.5vw';

        elementsWriteP[2].style.fontSize = '3.5vw';
        elementsWriteP[2].style.marginLeft = '4.5vw';

        elementsWriteP[3].style.fontSize = '3.5vw';
        elementsWriteP[3].style.marginLeft = '4.5vw';

        elementsWriteP[4].style.fontSize = '4.5vw';

        elementsWriteP[5].style.fontSize = '4.5vw';

        elementsWriteP[6].style.fontSize = '4.5vw';

        elementsWriteP[7].style.fontSize = '4.5vw';


        elementsWriteHTwo[0].style.fontSize = '6.7vw';

        elementsWriteHTwo[1].style.fontSize = '6.7vw';


       elementsWriteHTree[0].style.fontSize = '6.3vw';  

       elementsWriteHTree[1].style.fontSize = '6.3vw';  
       
       elementsWriteHTree[2].style.fontSize = '6.3vw'; 


       elementsWriteHFour[0].style.fontSize = '4.6vw';

       elementsWriteHFour[1].style.fontSize = '4.6vw';

       elementsWriteHFour[2].style.fontSize = '4.6vw';


       elementsWriteAButton.style.width = '30vw';
       elementsWriteAButton.style.height = '8vh';
       elementsWriteAButton.style.fontSize = '5vw';

       imgsAll[2].style.width = '100vw';
       imgsAll[3].style.width = '100vw';
       imgsAll[4].style.width = '40vw';
       imgsAll[5].style.width = '25vw';


       elementsWriteLi[0].style.fontSize = '4.3vw';
       elementsWriteLi[1].style.fontSize = '4.3vw';
       elementsWriteLi[2].style.fontSize = '4.3vw';
       
    }
    
}


window.addEventListener('resize', response);
window.addEventListener('load', response);