let str = '';

loop1:
for(let i = 0; i < 5; i++){
    if(i == 1){
        continue loop1; //apenas para deixar mais claro que o loop1 deve ser pulado um incremento
    }

    str += i;
}

console.log(str);