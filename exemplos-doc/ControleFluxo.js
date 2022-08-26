//exemplo1
var nome = "abcd";

if(nome.length === 3){
    console.log("quantidade de caractes validos");
}else{
    console.log("menos ou 3 caracteres");
}

//exemplo 2 = Switch

var fruta = "Laranja";

switch(fruta){
    case "Maçã":
        console.log("O quilo da Maçã está R$10,00 ");
        break;

    case "laranja":
        console.log("O quilo da laranja está R$10,00 ");
        break;

    case "pessego":
        console.log("O quilo da pessego está R$10,00 ");
        break;

    case "pera":
        console.log("O quilo da pera está R$10,00 ");
        break;
    default:
        console.log(fruta + " não encontrada");   
}