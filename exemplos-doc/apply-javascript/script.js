//adicionar o evento ouvidor, tecnica para carregar o js mais rapido
document.addEventListener('DOMContentLoaded', () => {
    //criando a função principal, criação de uma paragrafo
    function createParagraph(){
        //capturando a tag que sera utilizada
        const para = document.createElement('p');
        //adicionado texto pelo js no html com "TextContent"
        para.textContent = 'You clicked the button!';
        //adicionado a tag p com filha de alguem?
        document.body.appendChild(para);
    }

    //capturando todas as tag "button", se tiver mais de uma 
    const buttons = document.querySelectorAll('button');

    //utilizar repetição para atribuir o "addEventListener" em cada button que for encontrado, atribuindo tambem o evento de "click"
    for(const button of buttons){ //for resumido, significa: "repita tal linha em todos os chidren encontrados" certo?
        button.addEventListener('click', createParagraph);
    }
})