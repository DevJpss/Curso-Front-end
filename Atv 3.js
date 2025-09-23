
let idade;
let tabuada;
let numero;
let prosseguir;

//1.1
numero = prompt("Digite um numero");
if (numero < 0){
    console.log(numero,"é um numero negativo");

}
else if (numero > 0){
    console.log(numero,"é um numero positivo");

}
else
     console.log(numero,"é zero");

//1.2
     idade = prompt("Digite a idade");
     if (idade >=0 && idade <=12){
        console.log("É uma criança");
     }
     else if (idade >=13 && idade <=17){
        console.log("É adolescente");
     }
     else if (idade >17 && idade <=59){
        console.log ("é um adulto");
     }
     else 
        console.log("é um idoso");
//1.3
tabuada=prompt("Digite o primeiro numero da tabuada");

if (tabuada){
    for( let contador=1;contador<11;contador++){
        console.log(tabuada*contador);
        }
}
console.log(" ")
// 1.4
prosseguir=prompt("Deseja Prosseguir?");
if (prosseguir){
    for (let contador=0;contador<51;contador++){
        if(contador % 2 == 0){
            console.log(contador);
        }
    }
     
}
//1.5

let numeros = prompt("Digite um numero");
numeros = Number(numeros);
let numeros2=1;
let soma=0;
if (!isNaN(numeros)){
while ( numeros2 != numeros+1){
    soma=numeros2+numeros;
    console.log("A soma de",numeros2,"com",numeros,"é:",soma);
    numeros2++;
}
}

//switch case 2.1
let dia = prompt("Digite um numero de 1 a 7");
dia = Number(dia);
switch (dia){
    case 1: console.log("Domingo"); break;
    case 2: console.log("Segunda-feira"); break;
    case 3: console.log("Terça-feira"); break;
    case 4: console.log("Quarta-feira"); break;
    case 5: console.log("Quinta-feira"); break;
    case 6: console.log("Sexta-feira"); break;
    case 7: console.log("Sábado"); break;
    default: console.log("Número inválido, digite um numero de 1 a 7");
}     

//2.2
let nota = prompt("Digite uma nota de 0 a 10");
nota = Number(nota);
switch (true){
    case (nota >=9 && nota <=10): console.log("Ótimo"); break;
    case (nota >=7 && nota <9): console.log("Bom"); break;
    case (nota >=5 && nota <7): console.log("Regular"); break;
    case (nota >=0 && nota <5): console.log("Insuficente"); break;
    default: console.log("Número inválido, digite um numero de 0 a 10");
}
//2.3
let fruta = prompt("Digite o nome de umas dessas frutas: maçã, banana ou melancia");
fruta = fruta.toLowerCase();
switch (fruta){
    case "maçã": console.log("Não vendemos esta fruta aqui"); break;
    case "banana": console.log("Banana custa R$ 3,00 o quilo."); break;
    case "melancia": console.log("Aqui está, são R$ 4,00 o quilo"); break;
    default: console.log("Fruta inválida");

}
//2.4
let mes = prompt("Digite um numero de 1 a 12");
mes = Number(mes);
switch (mes){
    case 1: console.log("Janeiro"); break;
    case 2: console.log("Fevereiro"); break;
    case 3: console.log("Março"); break;
    case 4: console.log("Abril"); break;
    case 5: console.log("Maio"); break;
    case 6: console.log("Junho"); break;
    case 7: console.log("Julho"); break;
    case 8: console.log("Agosto"); break;
    case 9: console.log("Setembro"); break;
    case 10: console.log("Outubro"); break;
    case 11: console.log("Novembro"); break;
    case 12: console.log("Dezembro"); break;
    default: console.log("Número inválido, digite um numero de 1 a 12");
}     

//2.5
let menu = prompt("Digite a operação que deseja: 1-Hambúguer, 2-Pizza, 3-Refrigerante, 4-Sair");
menu = Number(menu);
switch (menu){
    case 1: console.log("Você escolheu Hambúguer, são R$ 15,00"); break;
    case 2: console.log("Você escolheu Pizza, são R$ 40,00"); break;
    case 3: console.log("Você escolheu Refrigerante, são R$ 5,00"); break;
    case 4: console.log("Você escolheu Sair, até mais!"); break;
    default: console.log("Número inválido, digite um numero de 1 a 4");
}



