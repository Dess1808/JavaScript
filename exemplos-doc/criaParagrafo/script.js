//criar um elemento
function criarParagrafo(){
        let para = document.createElement('p')
        para.textContent = 'click'
        document.body.appendChild(para)
}
        
//vamos selecionar todos os botoes possiveis
//utilizando o "all" capturamos todos as tags button que existirem, armazenando seu tamanho na constante "botoes"
const botoes = document.querySelectorAll('button')

    //adicionando o evento ouvidor em todas as tags "button"
for(let i = 0; i < botoes.length; i++){
        botoes[i].addEventListener('click', criarParagrafo)
}
