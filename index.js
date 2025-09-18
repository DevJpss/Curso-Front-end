
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

