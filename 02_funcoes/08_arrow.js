//Arrow function



const dividir = (x, y) => {
    if (y === 0) {
        return "Não é possível dividir por 0";
    }
    return x / y;
}

console.log(dividir(10, 2));

//Mais resumido
const somar = (x, y) => x + y;
console.log(somar(10, 5));