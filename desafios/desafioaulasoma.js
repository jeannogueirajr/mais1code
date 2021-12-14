const num1 = 6;

const num2 = 3;

    function executaOperacao(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
}
    function soma(numero1, numero2) {
    return (numero1) + (numero2);
}
    function multiplicacao(numero1, numero2) {
    return Number(numero1) * Number(numero2);
}
    function divisao(numero1, numero2) {
    return Number(numero1) / Number(numero2);
}
    function subtracao(numero1, numero2) {
    return Number(numero1) - Number(numero2);
}

console.log(executaOperacao(num1, num2, soma)); 
console.log(executaOperacao(num1, num2, multiplicacao)); 
console.log(executaOperacao(num1, num2, divisao));
console.log(executaOperacao(num1, num2, subtracao));

// Esse exercicio ficou 50% certo


// --------------- forma "correta"----------

//const numero1 = 9;
//const numero2 = 3;

//function soma(num1, num2){
//  return num1+num2;
//}

//function subtracao(num1, num2){
//  return num1-num2;
//}

//function multiplicacao(num1, num2){
//  return num1*num2;
//}

//function divisao(num1, num2){
//  return num1/num2;
//}

// pode ser feito o console log com várias strings e variáveis separando por virgula

//console.log( "soma: ", numero1, "+", numero2, "=", soma(numero1,numero2) )

// ou usando a crase como string pois ela permite passar variáveis dentro dela usando ${variável}
// o nome dessa crase usada como string/variável é template literal

//console.log( `soma: ${numero1} + ${numero2} = ${soma(numero1,numero2)}` )
//console.log( `subtracao: ${numero1} - ${numero2} = ${subtracao(numero1,numero2)}` )
//console.log( `multiplicacao: ${numero1} * ${numero2} = ${multiplicacao(numero1,numero2)}` )
//console.log( `divisao: ${numero1} / ${numero2} = ${divisao(numero1,numero2)}` )
