function UserException(mensagem){
    this.mensagem = mensagem;
    this.nome = "UserException";
}
//criamos nossa classe/ função

//prototipo para string??
UserException.prototype.toString = function(){
    return this.nome + ': "' + this.mensagem + '"';
}

//porque crio uma nova instancia de UserException se ele e um função e não um classe
//sabemos que o js e estranho, tem um motivo
//lança um execessão, o que e lançar uma execessão??
throw new UserException("valor muito alto");