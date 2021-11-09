//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.

const a = 100;
const b = 50;

//Faça programas para:  Adição (a + b) 

console.log('Adição = ' + (a+b))

// Adição (a + b) 

console.log('Subtração = ' + (a-b))

// Multiplicação (a * b) 

console.log('Multiplicação = ' + (a*b))

// Divisão (a / b) 

console.log('Divisão = ' + (a/b))

// Módulo (a % b)

console.log('Módulo  = ' + (a%b))

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const numero1 = 64;
const numero2 = 15;

if(numero1 > numero2) {
    console.log('O número 1 é maior')
}
else {
    console.log('O numero 2 é maior')
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const numero1 = 64;
const numero2 = 15;
const numero3 = 70;

if(numero1 > numero2 && numero1 > numero3) {
    console.log('O número 1 é maior')
}
else if(numero2 > numero1 && numero2 > numero3) {
    console.log('O número 2 é maior')
}
else if(numero3 > numero1 && numero3 > numero2) {
    console.log('O número 3 é maior')
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valor = -30;

if(valor > 0) {
    console.log('positive')
}
else if(valor < 0) {
    console.log('negative')
}
else {
    console.log('zero')
}

//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const lado1 = 40;
const lado2 = 40;
const lado3 = 100;

if(lado1+lado2+lado3 == 180) {
    console.log('true')
}
else if(lado1+lado2+lado3 != 180) {
    console.log('false')
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = "tower"

if(peca.toLowerCase() === "tower") {
    console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.")
}
else{
    console.log("Desculpe, peça não encontrada :(")
}

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = 75;

if(nota >= 90) {
    console.log('Nota A')
}
else if(nota >= 80) {
    console.log('Nota B')
}
else if(nota >= 70) {
    console.log('Nota C')
}
else if(nota >= 60) {
    console.log('Nota D')
}
else if(nota >= 50) {
    console.log('Nota E')
}

else if(nota < 50) {
    console.log('Nota F')
}
else {
    console.log('Nota não reconhecida')
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

const numero1 = 2;
const numero2 = 507;
const numero3 = 51;

if(numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0) {
    console.log(true)
}
else {
    console.log(false)
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const numero1 = 85;
const numero2 = 45;
const numero3 = 22;

if(numero1 % 2 == 1 || numero2 % 2 == 1 || numero3 % 2 == 1) {
    console.log(true)
}
else {
    console.log(false)
}

//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
 const custoProduto = 400;
 const valorDeVenda = 700;
 let lucro = valorDeVenda - (custoProduto + (custoProduto * 20 / 100))

 console.log(lucro)

 //Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

 let salario = 3000.00;

 if(salario <= 1556.94) {
     salario = salario - (salario * 8 / 100)
 }
 else if(salario => 1556.95) {
     salario = salario - (salario *9 / 100)
 }
 else if(salario => 2594.93) {
    salario = salario - (salario *11 / 100)
}
 else if(salario >  5189.82) {
    salario = salario - 570.88
}

if(salario == 1903.98) {
    salario = salario
}
else if(salario => 1903.99) {
    salario = salario - (salario *7,5 / 100 - 142,80) 
}
else if(salario => 2826.66) {
    salario = salario - (salario *15 / 100 - 354,80) 
}
else if(salario => 3751.06) {
    salario = salario - (salario *22,5 / 100 - 636,13) 
}
else if(salario => 4664.68) {
    salario = salario - (salario *27,5 / 100 - 869,36) 
}

console.log(salario)
