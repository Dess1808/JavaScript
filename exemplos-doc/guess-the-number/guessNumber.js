//criando o range de numeros entre 1 e 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

//capturando a classe "guesses" que esta na div "resultParas"
const guesses = document.querySelector('guesses');

//capturando a classe "lastResult" que esta na div "resultParas"
const lastResult = document.querySelector('lastResult');

//capturando a classe de input "guessesField" na div "form"
const guessField = document.querySelector('guessField');

//criando o contador
let guessCount = 1;

//criando o variavel que reseta?
let resetButton;


//logica ???