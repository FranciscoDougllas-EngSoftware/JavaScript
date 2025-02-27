//Definindo parametros em funcoes
function calcular(operacao, n1, n2){
    function somar(n1, n2){
        return n1 + n2;
    }
    function subtrair(n1, n2){
        return n1 - n2;
    }
    function multiplicar(n1, n2){
        return n1 * n2;
    }
    function dividir(n1, n2){
        return n1 / n2;
    }

    switch(operacao) {
        case 'somar':
            return somar(n1, n2);
        case 'subtrair':
            return subtrair(n1, n2);
        case 'multiplicar':
            return multiplicar(n1, n2);
        case 'dividir':
            return dividir(n1, n2);
        default:
            return 'Operação inválida';
    }
}

// Exemplos de uso:
console.log(calcular('somar', 10, 5));      // 15
console.log(calcular('subtrair', 10, 5));   // 5
console.log(calcular('multiplicar', 10, 5)); // 50
console.log(calcular('dividir', 10, 5));     // 2
