//Condicionais em JavaScript

const idade = Math.floor(Math.random() * 100);

if(idade >= 18){
    if(idade >= 65){
        console.log("Idoso");
    }else{
        console.log("Adulto");
    }
}else{
    console.log("Menor de idade");
}