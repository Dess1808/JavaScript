   /**
    * 
    *  [x] - gerar um valor random entre 1 a 100
    [x] chear numero inserido para verificação
    [x] - informar se o valor inserido e mais baixo ou mais alto do que o numero random 
    [x] - informar se o numero inserido e igual, finalizando.
    [] - mostrar na tela o valor inserido em fila


//random
let NumberRandom = Math.floor(Math.random() * 100) + 1
console.log('random: ' + NumberRandom)

let shoot = Math.floor(Math.random() * 100) + 1
console.log('chute: ' + shoot)

//isso e um numero? !isNaN
//isso nao e um numero? isNaN

//teste isNaN
if(!isNaN(shoot)){
    console.log('sim, isso e um numero')
}
else{
    console.log('nao, isso nao e um numero')
}

//teste de igual, maior e menor.
if(shoot === NumberRandom){
    console.log('acertou mizeravi')
}else if(shoot > NumberRandom){
    console.log('chute e maior')
}else{
    console.log('chute e menor')
}
*/

