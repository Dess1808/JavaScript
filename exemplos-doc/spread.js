//exemplo 1
var array = [1, 2, 3];
console.log(...array);

//exemplo 2
//aloca da esquerda para a direta
var number = [2, 1];

function soma(x, y){
    return x + y;
}

subtration = (x, y) => {return x - y;}

//aloca dinamicamente os valores de array e objetos literais
console.log(soma(...number));

//desta forma não aloca dinamicamente
console.log(soma(number));

//aloca dinamicamente da esquerda para a direita, arrays e objetos literais
console.log(subtration(...number));