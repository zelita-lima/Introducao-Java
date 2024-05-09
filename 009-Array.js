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
let array = [10,20,30,40,50];
console.log(array[0]) //saida de 10 
console.log(array[2]) //saida de 30 

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
array.splice(index,1);
console.log(arrays)

//___________________________________________________________________________________________________________//

