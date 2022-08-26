//exemplo 1
console.log(x === undefined);
var x = 2;


//exemplo 2
var myvar = "my var global";

(function(){
    console.log(myvar);
    var myvar = "local";
})();


// não temos exceções mais temos undefineds nas variaveis criadas como "var"

