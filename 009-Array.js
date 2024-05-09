/*
    O que é um Array em JavaScript?
    Um array em JavaScript é um tipo de estrutura 
    de dados que permite armazenar múltiplos valores 
    em uma única variável. Os elementos de um array 
    são indexados numericamente, começando do índice 0,
    o que significa que cada elemento tem uma posição 
    específica no array.
*/

//array e uma lista/lista flexivel

//Usandos colchetes[]
let array1 = [1,2,3,4,5];

//___________________________________________________________________________________________________________//

//Usandos o consutor Array()
let array2 = new Array(1,2,3,4,5);

//___________________________________________________________________________________________________________//

//Criando um array vazio
let array3 = [];

//___________________________________________________________________________________________________________//

//array podem contar diferentes tipos de dados
let array4 = ["Hello",42,true];

//___________________________________________________________________________________________________________//

//Acessando indice do array
let array5 = [10,20,30,40,50];
console.log(array5[1]) //saida de 10 
console.log(array5[2]) //saida de 30 

//___________________________________________________________________________________________________________//

//verificando o tamanho do array
let arraylength = [1,2,3];
console.log(arraylength.length)   //tamanho do array (quantidade de itens que tem no array)

//___________________________________________________________________________________________________________//

//inserindo um item no array 
arraylength.push(4);
console.log(arraylength)   //saida [1,2,3]// insere item no final da lista

//___________________________________________________________________________________________________________//

//removendo um item do array 
let removeElement = arraylength.pop();
console.log(removeElement) //saida 4
console.log(arraylength)   //saida [1,2,3]  /// tira um item no final da lista 

//___________________________________________________________________________________________________________//

//remove o item na posição do indice
var array6 = [1,2,3,4,5]
var indece = 2;
var newValue = 3
array6.splice(indece,1,newValue);
console.log(array6)

//___________________________________________________________________________________________________________//

/*
//o do professor 
// Usando colchetes []
let array1 = [1, 2, 3, 4, 5];

// Usando o construtor Array()
let array2 = new Array(1, 2, 3, 4, 5);

// Criando um array vazio
let array3 = [];

// Arrays podem conter diferentes tipos de dados
let array4 = ["Hello", 42, true];

// Acessando indice do array
let array = [10, 20, 30, 40, 50];
console.log(array[0]); // Saída: 10
console.log(array[2]); // Saída: 30

// Verificando o tamanho do array
let arraylength = [1, 2, 3];
console.log(arraylength.length); // Saída: 3

// inserindo um item no array
arraylength.push(4);
console.log(arraylength); // Saída: [1, 2, 3, 4]

// removendo um item no array
let removedElement = arraylength.pop();
console.log(removedElement); // Saída: 4
console.log(arraylength); // Saída: [1, 2, 3]

var array5 = [1, 2, 3, 4, 5];

// Índice do item a ser removido
var index = 2;

// Remove o item na posição do índice
array5.splice(index, 3);

console.log(array5); // Saída: [1, 2, 4, 5]

var array6 = [1, 2, 4, 5];
var index = 2; // Índice onde você deseja inserir o valor
var newValue = 3; // Valor que você deseja inserir

// Insere o novo valor na posição do índice
array6.splice(index, 0, newValue);

console.log(array6); // Saída: [1, 2, 3, 4, 5]
*/