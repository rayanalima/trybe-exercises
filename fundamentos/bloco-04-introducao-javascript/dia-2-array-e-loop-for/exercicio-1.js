// Iremos utilizar esse array para realizar os exercícios do 1 ao 7: 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for(let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i])
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
 let resultado = 0;

for(let i = 0; i < numbers.length; i++) {
    resultado += numbers[i];
}
console.log(resultado);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;      

for(let i = 0; i < numbers.length; i++) {
    resultado += numbers[i] / (numbers.length);
}
console.log(resultado);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

for(let i = 0; i < numbers.length; i++) {
    resultado += numbers[i] / (numbers.length);
}
    if(resultado > 20) {
    console.log('Valor maior que 20')
}
    else {
    console.log('Valor menor ou igual a 20')
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorNumero = 0;

for(let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] > maiorNumero) {
        maiorNumero = numbers[i];
    }
}
console.log(maiorNumero)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numerosImpares= 0;

for(let i = 0; i <numbers.length; i += 1) {
    if(numbers[i] % 2 == 1) {
        numerosImpares+=1;
    }
}
 console.log(numerosImpares)

 //Utilizando for , descubra qual o menor valor contido no array e imprima-o;

 let menorNum = Infinity;

 for(let i = 0; i < numbers.length; i += 1) {
     if(numbers[i] < menorNum) {
         menorNum = numbers[i]
     }
 }

 console.log(menorNum)

 // Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; 

 for(let i = 1; i < 26; i += 1) {
     console.log(i)
 }

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .


