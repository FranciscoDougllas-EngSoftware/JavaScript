function imovel(metragem, quartos){
    let m2 = 3000;
    let preco = 0;

    switch(quartos){
        case 1:
            default:
                preco = m2 * metragem;
                break;
        case 2:
            preco = m2 * metragem + 500;
            break;
        case 3:
            preco = m2 * metragem + 1000;
            break;
        case 4:
            preco = m2 * metragem + 1500;
            break;
    }
}

let metragem = 100;
let quartos = 2;
console.log(imovel(metragem, quartos)); // 3500