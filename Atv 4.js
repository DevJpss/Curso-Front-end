//1.1
let colegas = ["João", "Eduardo", "Daniel", "Rodrigo", "Thais"];
console.log(colegas);
//1.2
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let contador = 0;
while (contador < numeros.length) {
   if (numeros[contador] % 2 == 0) {
        console.log(numeros[contador]);
     }
    contador++;
}
//1.3
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma=0;
for (let contador2 = 0; contador2 < numeros2.length; contador2++) {
    soma = soma + numeros2[contador2];

    
}
console.log("A soma dos numeros é:",soma);
//1.4
let nomes = ["Ana", "Juliana", "Leonardo", "Carlos", "Paula"];
console.log("Lista de nomes:",nomes);
let nome = prompt("Digite um nome para saber se ele está na lista");
let encontrou = false;
for (let contador3 = 0; contador3 < nomes.length; contador3++) {
    if (nomes[contador3] == nome) {
        encontrou = true;
        break;
    }
}
if (encontrou) {
    console.log(nome, "está na lista");
} else {
    console.log(nome, "não está na lista");
}

//1.5
let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Números originais:", numeros3);
let numeros_invertidos = [];
for (let contador4 = numeros3.length - 1; contador4 >= 0; contador4--) {
    numeros_invertidos.push(numeros3[contador4]); 
}
console.log("Números invertidos:", numeros_invertidos);

//2.1 
let pessoa = {
    nome: "João",
    idade: 22,
    profissao: "Desenvolvedor"
};
console.log(pessoa);
//2.2
let carro = {
    cor: "Preto",
    modelo: "Corolla",
    ano: 2020
};
console.log("Salve, Comprei um carrão! Meu carro é um",carro.modelo,"cor",carro.cor,"do ano de",carro.ano);

//2.3 
let alunos = [ 
    { nome: "Ana", idade: 20, nota: "10" },
    { nome: "Bruno", idade: 22, nota: "8" },
    { nome: "Carla", idade: 19, nota: "5" }
];
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 7) {
        console.log(alunos[i].nome, "foi aprovado com nota", alunos[i].nota);
    }
}

//2.4 
let endereco = prompt("Digite o endereço do aluno");
let aluno_index = prompt("Digite o índice do aluno (0, 1 ou 2) para adicionar o endereço");
aluno_index = Number(aluno_index);
if (aluno_index >= 0 && aluno_index < alunos.length) {
    alunos[aluno_index].endereco = endereco;
    console.log("Endereço adicionado ao aluno", alunos[aluno_index].nome);
    console.log(alunos[aluno_index]);
} else {
    console.log("Índice inválido");
}

//2.5 
let produto = {
    nome: "Notebook",
    preco: 3000,
    quantidade: 5
};
function valorTotalEstoque(produto) {
    return produto.preco * produto.quantidade;
}
let totalEstoque = valorTotalEstoque(produto);
console.log("O valor total em estoque do produto", produto.nome, "é R$", totalEstoque);
//3.1 
function somase(a, b) {
    return a + b;
}
let resultadoSoma = somase(5, 10);
console.log("A soma de 5 e 10 é:", resultadoSoma);
//3.2 
function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return "par";
    } else {
        return "ímpar";
    }   
}
let resultadoParOuImpar = parOuImpar(7);
console.log("O número 7 é:", resultadoParOuImpar);
//3.3
function maiorNumero(numeros) {
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
}
let numerosArray = [3, 5, 7, 2, 8];
let resultadoMaiorNumero = maiorNumero(numerosArray);
console.log("O maior número do array é:", resultadoMaiorNumero);
//3.4
function cumprimentar(nome) {
    return "Olá, " + nome + "!";
}
let mensagemCumprimento = cumprimentar("Maria");
console.log(mensagemCumprimento);
//3.5 
function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}
let resultadoFatorial = calcularFatorial(5);
console.log("O fatorial de 5 é:", resultadoFatorial);




    