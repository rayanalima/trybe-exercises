// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let factorial = 1;

for(let i = 10; i > 0; i -= 1) {
    factorial *= i
};

console.log(factorial);

// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. 

let word = 'casa'

console.log(word.split('').reverse('').join(''))

//Considere o array de strings abaixo: 
let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. 

let menorPalavra = '';

for(let i = 0; i < array.length; i += 1) {
    if(array[i].length < menorPalavra.length) {
        menorPalavra = array[i]
    }
}
console.log(menorPalavra)

//Maior Palavra

let maiorPalavra = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

for(let i = 0; i < array.length; i += 1) {
    if(array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i]
    }
}
console.log(maiorPalavra)

// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. 

numPrimo = 5;

if(numPrimo / numPrimo === 1 && numPrimo / 1 === numPrimo) {
    console.log(numPrimo + ' é primo')
} else {
    console.log('Não é primo')
}

