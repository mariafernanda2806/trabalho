//5 escreva um algoritmo que calcule a média de uma lista de notas fornecidas pelo usuário usando um loop while.

let notas =[];
let soma =0;
let contador=0;

while(true){
let nota = prompt (" insira uma nota (ou digite qualquer coisa para parar);");

if (!isNaN(nota)){

    notas.push(parseFloat(nota));
    soma +=parseFloat(nota);
    contador++;
} else {

    break;
}

}


if (notas.lenght >0){

    let media = soma/ contador;
    alert("a media das notas é:" +media.toFixed(2));
} else {
    alert("nenhuma nota foi inserida.");
}


//6.Escreva um algoritmo que calcule a soma dos números de 1 a 100 usando um loop for.

let soma =0;

for (let i =1; i<=100; i ++) {
    soma+=i;
}
alert( "a soma dos numeros de 1 a 100 é:" + soma)

//7.Escreva um algoritmo que calcule a soma dos números de 1 a 100 usando um loop for.

var numero = parseInt(prompt("digite um numero para calcular o fatorial"));

var fatorial =1;

for(var i=1; i <= numero; i++) {
    fatorial*=i;
}

alert(" o fatorial de" + numero + "é:" + fatorial);

