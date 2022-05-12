let input = document.getElementById('input');
let output = document.getElementById('output');
let limpaTela = document.querySelector("#copiar");

limpaTela.innerHTML = "";


function cod(){

    var entrada = input.value
        
    if(entrada != ""){
        var transforma = entrada.replace(/e/g,"enter");
        transforma =  transforma.replace(/i/g,"imes");
        transforma =  transforma.replace(/a/g,"ai");
        transforma =  transforma.replace(/o/g,"ober");
        transforma =  transforma.replace(/u/g,"ufat");
        copiar.innerHTML = "Copiar";
        return transforma;
           
    } else {
        return null
    }

        
}
        
      
function decod() {

    var entrada = input.value

    if(entrada != "") {
        var transforma =  entrada.replace(/enter/g,"e");
            transforma =  transforma.replace(/imes/g,"i");
            transforma =  transforma.replace(/ai/g,"a");
            transforma =  transforma.replace(/ober/g,"o");
            transforma =  transforma.replace(/ufat/g,"u");
            copiar.innerHTML = "Copiar";
            return transforma;
            
        } else {
           return null
        }
        
    
}

    
 function codifica(input) {

    input.preventDefault();
    let erro = document.getElementById("erro")
    let pegaInput = document.getElementById('input');
    let testaInput = pegaInput.value;
    let reg = /[à-û]/gi
    if(testaInput !== testaInput.toLowerCase())
        return erro.innerHTML = "&#9888; Letra maiscúla detectada!";

    if(testaInput.match(reg))
        return erro.innerHTML = "&#9888; Acento detectado!"

    if(cod() == null){
        return
    }

    erro.innerHTML = "Codificação feita com sucesso!";
    output.innerHTML = cod();
    output.style.background = "white";
    output.style.color = "black";
} 

function decodifica(input) {
    input.preventDefault();

    let erro = document.getElementById("erro")


    if(cod() == null){
        return
    }

    erro.innerHTML = "Decodificação feita com sucesso";
    output.innerHTML = decod();
    output.style.background="none";

}

function copia() {
    let output = document.getElementById("output");
    navigator.clipboard.writeText(output.textContent);
    document.execCommand("copy");
    output.blur();
    limpaTela.innerHTML = "Copiado";
       
}


let codificar = document.getElementById('codificar');
codificar.onclick = codifica; 

let decodificar = document.getElementById("decodificar");
decodificar.onclick = decodifica; 

let copiar = document.getElementById("copiar");
copiar.onclick = copia;





