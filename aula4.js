// Laço for

for(var x = 10; x < 20; x++){
    console.log(x);
}

let produtos = ["Arroz", "Feijão", "Sal",
                "Óleo", "Macarrão", "Açúcar", "Cucui"];

console.log("Tamanho do array é -> " + produtos.length)

for(let i = 0; i <= produtos.length; i++){
    console.log("Posicao: " + i + ". Valor -> " + produtos[i]);
}

// Laço while

let clientes = 3;
while (clientes > 0) {
  console.log("Atendendo cliente...");
  clientes--;
}

// Comparativos

// quando tenho 1 = é atribuição
// quando tenho 2 == é comparacao
// Ex 40 == 40;
// Tenho comparativo é != diferente
// Ex: Talles != Pacheco
// ! =

var v1 = "40";
var v2 = 40;
console.log(v1 == v2)


var alunos = 40;
var professor = "Talles";
var professor2 = "Dennys"; 

if(alunos > 40 && professor == "Talles"){
    console.log("Primeiro IF");
}
if(alunos > 40 || professor == "Talles"){
    console.log("Segundo IF ");
}
if(professor == "Talles"){
    console.log("Terceiro IF ");
}
if(professor != professor2){
    console.log("Quarto IF ");
}