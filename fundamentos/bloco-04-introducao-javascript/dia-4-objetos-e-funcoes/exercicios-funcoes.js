// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verifica(palavra){
    if(palavra == palavra.split('').reverse().join('')){
        return true;
    }
    else {
        return false
    }
}

console.log(verifica('desenvolvimento'))

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 

let maiorElemento = 0;

function verificaMaior(array) {
    for(let i =0; i < array.length; i += 1) {
        if(array[i] > maiorElemento){
           maiorElemento = array[i]
        }
    }
    return maiorElemento;
}

console.log(verificaMaior([1, 2, 5, 0]))

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor. 

let menorElemento = 0;

function verificaMenor(array) {
    for(let i =0; i < array.length; i += 1) {
        if(array[i] < menorElemento){
           menorElemento = array[i]
        }
    }
    return menorElemento;
}

console.log(verificaMenor([1, 2, 5, 0, -1]))


// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. 

let nomes = '';

function maiorNome(nome) {
    for(let i = 0; i < nome.length; i += 1) {
        if(nome[i].length > nomes.length){
            nomes = nome[i]
        }
    } 
    return nomes
}

console.log(maiorNome(['Julia', 'Maria', 'Carmen', 'Camilla']))

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. 

let repete = 0;
let countNum = 0;
let indexNum = 0;

function numeroQueRepete(numeros) {
    for (let i in numeros) {
        let verificaNum = numeros[i];
        for (let i2 in numeros) {
            if(verificaNum === numeros[i2]) {
                countNum += 1;
            }
        }
        if(countNum > repete){
            repete = countNum;
            indexNum = i;
        }
        countNum = 0;
    }
    return numeros[indexNum]
};

console.log(numeroQueRepete([1, 2, 2]));

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N. 

let contaNum = 0;
let somaNum = 0;
let resultado = 0;

function contaNumeros(n) {
    for(let i in n){
        let count = n[i]
        for(let i2 in n) {
            if(n[i2 > 0]) {
            somaNum += n
            }
        }
    }
    return somaNum
}

console.log(contaNumeros([1 , 2]))

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

verificaQualSeRepete = '';

function verifica(word , ending) {
    for(let index in word){
        let seRepetem = word[index]
    for(let index2 in ending){
        let seRepetem2 = ending[index2]
        if(word.slice(-(seRepetem)) == ending ){
            verificaQualSeRepete = true;
        } 
        else {
            verificaQualSeRepete = false;
        }
    }               
 } return verificaQualSeRepete;
;}

console.log(verifica('fernando', 'ndo'));
