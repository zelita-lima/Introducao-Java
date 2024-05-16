/*
    1-Crie uma função chamada soma que aceita dois parâmetros e retorna a 
    soma deles.

    2-Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e 
    não tem nenhum parâmetro nem retorno.

    3-Escreva uma função chamada verificarPar que recebe um número como parâmetro 
    e retorna verdadeiro se o número for par e falso caso contrário.

    4-Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculo
     como parâmetro e retorna a área do círculo.

    5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro 
    e retorna a data atual.

    6-Escreva uma função chamada calcularMedia que recebe um array de números 
    como parâmetro e retorna a média desses números.

    7-Crie uma função chamada adicionarDois que aceita um número como parâmetro
     e retorna esse número adicionado a 2.

    8-Defina uma função chamada concatenarStrings que recebe duas strings como
     parâmetros e retorna uma nova string que é a concatenação das duas strings 
     fornecidas.

    9-Escreva uma função chamada verificarNegativo que recebe um número como
     parâmetro e retorna verdadeiro se o número for negativo e falso caso
     contrário.

    10-Crie uma função chamada removerEspacos que recebe uma string como 
    parâmetro e retorna a mesma string sem espaços em branco.

*/
//1-Crie uma função chamada soma que aceita dois parâmetros e retorna a soma deles.//
function somar(a, b) {
    return a + b
} 
var resultado = somar(3, 5);
console.log("A soma de a mais b é:", resultado);
//2-Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e não tem nenhum parâmetro nem retorno.//
function saudacao() {
    return "Ola MUndo!"
}
var mensagem = saudacao();
console.log(mensagem)
//3-Escreva uma função chamada verificar Par que recebe um número como parâmetro e retorna verdadeiro se o número for par e falso caso contrário.//
function verificarpar (numero)
{
if (numero % 2 == 0 ) 
{
    console.log("o numero e par ");
} 
else 
{
    console.log("o numero e impar ");
}
}
verificarpar(20)
// 4-Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculocomo parâmetro e retorna a área do círculo.//
function CalcularAreaCirculo (Raio)
{
    return Math.PI * Raio ** 2
}// nao tem filhos não construtor  não tem metodos 
CalcularAreaCirculo(180)
//5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro e retorna a data atual.//
function  retornarDataAtual ()
{
    return new Date ();
}
console.log(retornarDataAtual())

//6-Escreva uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a média desses números.//
function calcularMedia (Nota1,Nota2,Nota3)
{
   Array
   {
       Nota1 = 9.5 
       Nota2 = 7.0
       Nota3 = 6.8
   }
    calcularNotas() 
    {
        Nota1 + Nota2 + Nota3 / 3
    }
}
//7-Crie uma função chamada adicionarDois que aceita um número como parâmetroe retorna esse número adicionado a 2.//
function adicionarDois(numero) 
{
    return numero + 2;
}
var resultado = adicionarDois(5);
console.log(resultado); 
//8-Defina uma função chamada concatenarStrings que recebe duas strings comoparâmetros e retorna uma nova string que é a concatenação das duas strings fornecidas.//
function concatenarStrings(string1, string2) {
    return string1 + string2;
}
var resultado = concatenarStrings("Olá, ", "mundo!");
console.log(resultado); 
//9-Escreva uma função chamada verificarNegativo que recebe um número comoparâmetro e retorna verdadeiro se o número for negativo e falso casocontrário.//
function verificarNegativo (Numero2)
{
if (Numero2 < 0 ) 
{
    console.log("O número é negativo.");
} else {
    console.log("O número é positivo ou zero.");
}
}

verificarNegativo(-20);
//10-Crie uma função chamada removerEspacos que recebe uma string como parâmetro e retorna a mesma string sem espaços em branco.//
function removerEspacos(string4) 
{
    return string4.replace(/\s/g, "");
}
var texto = "texto com espaços.";
var resultado = removerEspacos(texto);
console.log(resultado);