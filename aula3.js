// Arrays

var nomes = ['Ana', 'Carlos', 'Maria'];
nomes.push('João');
console.log(nomes);
nomes.pop(1);
console.log(nomes);
console.log(nomes.length);

// Objetos

var objetoProfessor =  
{ nome: 'Talles', matricula: '123' };

var objetoAluno = 
{ nomeCompleto: 'Janio Torres', age: 30, sexo: 'M'}



// Objetos e Array

const arrayObjects = 
[   
  /*Posicao 0*/{ nome: 'Lucas', matricula: '12345' },
  /*Posicao1*/{ nome: 'Rafael', matricula: '777', sexo: 'M' },
  /*Posicao2*/{ nome: 'Talles'}
]
;
console.log(arrayObjects);
console.log(arrayObjects[1]);
console.log(arrayObjects[1].nome);


// Null vs Undefined

var nomeSemDeclaracao;
console.log(nomeSemDeclaracao);

var nomeValorNull = null;
console.log(nomeValorNull); 


function somar(){
    console.log('Soma');
    console.log(1 + 2);
}

somar();

// https://playcode.io/javascript/