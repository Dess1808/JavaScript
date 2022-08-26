//exemplo 1
var vendas = "Toyta"

function tipoCarro(nome){
    if(nome == "Fiat"){
        return nome;
    }else{
        return "não vendemos " + nome;
    }
}

var carro = {
    meuCarro: "Punto",
    getCarro: tipoCarro("Ford"),
    especial: vendas
}

console.log("exemplo 1");
console.log(carro.meuCarro);
console.log(carro.getCarro);
console.log(carro.especial + "\n");

//exemplo 2
var carro = { carros: {a: "Saab", "b": "Jeep"}, 7: "Mazda" };
console.log("exemplo 2");
console.log(carro.carros.b); // Jeep
console.log(carro[7] + "\n"); // Mazda

//exemplo 3
/**
 * tipos de identificadores de chaves
 */

var unusualPropertyNames  = {
    gabriel: "Aposentado",
    "": "Uma string!",
    "!": "Bang!"
}

console.log("exemolo 3");
console.log(unusualPropertyNames[""]);
console.log(unusualPropertyNames["!"]);
console.log(unusualPropertyNames["gabriel"]);

/**
 * E possivel chamar os objetos literais atraves de cochetes! informados igual uma string no array
 */


//Exemplo 4
/**
 * Expressão Regex literal
 */

var regex = /ab+c, gabriel/;
console.log(regex);


