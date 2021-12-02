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