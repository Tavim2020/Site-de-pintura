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

// formulário

function validate(){
    var name = document.querySelector("#name");
    if(form.name.value === ""){
        var namePrompt = prompt("Digite seu nome. Ele não pode ser vazio!");
        name.focus();
        name.value = namePrompt;
        return false
    }

    if(form.name.value.length < 3){
        var namePrompt = prompt("Digite seu nome. Ele não pode conter menos que 3 caracteres!");
        name.focus();
        name.value = namePrompt;
        return false
    }

    var email = document.querySelector("#email");
    if(form.email.value === ""){
        var emailPrompt = prompt("Digite seu email, ele não pode ser vazio.");
        email.focus();
        email.value = emailPrompt;
        return false
    }

    var telefone = document.querySelector("#telefone");
    if(form.telefone.value === ""){
        var telPrompt = prompt("Digite o número de seu telefone para que possamos entra em contato com você.");
        telefone.focus();
        telefone.value = telPrompt;
        return false
    }

    else if(form.telefone.value.length < 9){
        var telPrompt = prompt("Digite o número de seu telefone para que possamos entra em contato com você. Ele deve conter no mínimo 9 caracteres.");
        telefone.focus();
        telefone.value = telPrompt;
        return false
    }

    var cidade = document.querySelector("#cidade");
    if(form.cidade.value === ""){
        var cityPrompt = prompt("Digite o nome da sua cidade para que possamos chegar até você.");
        cidade.focus();
        cidade.value = cityPrompt;
        return false
    }

    var endereco = document.querySelector("#endereco");
    if(form.endereco.value === ""){
        var enderecoPrompt = prompt("Digite aqui seu endereço.");
        endereco.focus();
        endereco.value = enderecoPrompt;
        return false
    }

    var numero = document.querySelector("#numero");
    if(form.numero.value === ""){
        var numeroPrompt = prompt("Digite aqui seu número residencial.");
        numero.focus();
        numero.value = numeroPrompt;
        return false
    }
    
    var bairro = document.querySelector("#bairro");
    if(form.bairro.value === ""){
        var bairroPrompt = prompt("Digite o bairro aonde você mora.");
        bairro.focus();
        bairro.value = bairroPrompt;
        return false
    }

    var complemento = document.querySelector("#complemento");
    if(form.complemento.value === ""){
        var complementoPrompt = prompt("Digite o complemento de sua residencia.");
        complemento.focus();
        complemento.value = complementoPrompt;
        return false
    }

    var descricao = document.querySelector("#descricao");
    if(form.descricao.value === ""){
        var descriptionPrompt = prompt("Digite o que deseja saber para que possamos saber o que realmente você necessita.");
        descricao.focus();
        descricao.value = descriptionPrompt;
        return false
    }

    if(form.descricao.value > 200){
        var descriptionPrompt = prompt("Número máximo de caracteres permitidos é 300.");
        descricao.focus();
        descricao.value = descriptionPrompt;
        return false
    }

    var modal = document.querySelector("#modal");
    modal.classList.remove('hidden');
    return true
    
    
}





var cidade = document.querySelector("#cidade");

function regiao(){
    alert('Por enquanto estamos atendendo somente entre as cidades de Ribeirão Preto e Região. Estamos batalhando para aprimorar novas áreas de prestação de serviço.')
}

cidade.addEventListener('focus', regiao)


var contadorDeCaracteres = document.querySelector("#contador");
var descricao = document.querySelector("#descricao");


function contagem(){
    var total = 300;
    var caracteresDigitados = descricao.value.length;
    contadorDeCaracteres.innerHTML = total - caracteresDigitados;

}

descricao.addEventListener('keyup', contagem)


// resposividade

var screenWidth = screen.width;
var screendHeigth = screen.height

function response(){
    if(screendHeigth > screenWidth){
        var classMenu = document.querySelector(".menu-img");
        var imgWhats = document.querySelector('.whats-top');
        var menuDiv = document.querySelector(".hidden");

        var elementsWriteP = document.getElementsByTagName("p");
        
        
        var elementsWriteHTwo = document.getElementsByTagName("h2");
        
        var elementsWriteHTree = document.getElementsByTagName("h3");
        
        var elementsWriteHFour = document.getElementsByTagName("h4");
        
        
        var elementsWriteButton = document.querySelector("#button");
        
        
        var imgsAll = document.querySelectorAll('img');
        
        
        var elementsWriteLi = document.getElementsByTagName("li");

        var form = document.querySelector("form");

        var label = document.getElementsByTagName('label');

        var input =  document.getElementsByTagName('input');

        
        classMenu.style.width = '11vh';
        imgWhats.style.width = '7vh';
        menuDiv.style.width = '20vh';
        
        
        elementsWriteP[0].style.fontSize = '5vw';


        elementsWriteP[1].style.fontSize = '3.5vw';
        

        elementsWriteP[2].style.fontSize = '3.5vw';
     

        elementsWriteP[3].style.fontSize = '3.5vw';

        elementsWriteP[4].style.fontSize = '3.5vw';


        elementsWriteHTwo[0].style.fontSize = '6.7vw';

        elementsWriteHTwo[1].style.fontSize = '6.7vw';

        elementsWriteHTwo[2].style.fontSize = '6.7vw';


       elementsWriteHTree[0].style.fontSize = '6.3vw';  


       elementsWriteHFour[0].style.fontSize = '4.6vw';

       elementsWriteHFour[1].style.fontSize = '4.6vw';

       elementsWriteHFour[2].style.fontSize = '4.6vw';


       elementsWriteButton.style.width = '30vw';
       elementsWriteButton.style.height = '15vh';
       elementsWriteButton.style.fontSize = '5vw';


       imgsAll[2].style.width = '40vw';


       elementsWriteLi[0].style.fontSize = '4.3vw';
       elementsWriteLi[1].style.fontSize = '4.3vw';

       form.style.width = '75vw';

       label[0].style.fontSize = '3vh';
       label[1].style.fontSize = '3vh';
       label[2].style.fontSize = '3vh';
       label[3].style.fontSize = '3vh';
       label[4].style.fontSize = '3vh';
       label[5].style.fontSize = '3vh';
       label[6].style.fontSize = '3vh';
       label[7].style.fontSize = '3vh';

       input[0].style.height = '8vh';
       input[1].style.height = '8vh';
       input[2].style.height = '8vh';
       input[3].style.height = '8vh';
       input[4].style.height = '8vh';
       input[5].style.height = '8vh';
       input[6].style.height = '8vh';
       input[7].style.height = '8vh';


    }
    
}

window.addEventListener('resize', response);
window.addEventListener('load', response);