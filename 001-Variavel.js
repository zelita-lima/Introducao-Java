const n3 = 'constante'
var nome = "rodrigo";/*variavel global*/
let n2;/*variavel de escopo*/
/*são as variaveis possiveis do java*/

/*
VAR

var nome = "rodigo";
if(true)
{
    var nome = "jesus"//aceita redeclaração//
}
var nome = "silva";
console.log(nome)
*/
//------------------------------------------------------//
/*
//LET  variavel de escopo


if(true)
{
    let nome = "Jesus"//não aceita redeclaração//
    console.log(nome)
}
*/
//------------------------------------------------------//
/*
//const  variavel de escopo

cont nome = "constante";
if(true)
{
    cont nome = "jesus"// não aceita redeclaração.não aceita sobreescrita//
}
nome = "silva";
console.log(nome)
*/
//-----------------------------------------------------//

// Exemplo de erro com var
var nome = "João";
console.log(nome); // Saída: "João"
{
    var nome = "Maria"; // Reatribui o valor da variável global
    console.log(nome); // Saída: "Maria"
}
console.log(nome); // Saída: "Maria" (o valor foi alterado fora do bloco)

// Exemplo de erro com let
let animal = "gato";
console.log(animal); // Saída: "gato"
{
    let animal = "cachorro"; // Declara uma nova variável de bloco com o mesmo nome
    console.log(animal); // Saída: "cachorro"
}
console.log(animal); // Saída: "gato" (o valor não foi alterado fora do bloco)

// Exemplo de erro com const
const COR = "azul";
console.log(COR); // Saída: "azul"
{
    const COR = "vermelho"; // Declara uma nova constante de bloco com o mesmo nome
    console.log(COR); // Saída: "vermelho"
}
console.log(COR); // Saída: "azul" (o valor não foi alterado fora do bloco)

// Erro ao tentar reatribuir uma constante (irá gerar erro)
const IDADE = 30;
IDADE = 40; // Isso irá gerar um erro
