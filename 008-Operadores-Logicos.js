/*
Operadores logicos
e(and) - &&(Java)   x<10 e(and) x>0
ou(or) - ||(java)   x||10 ou(or) x||0
não(!) - !(java)    x!10 não(!)  x!0
*/
let a = 5;
let b = 7;
//E(AND)
if (a >= b && a === b) {
    console.log("a é maior e igual a b");
} else {                                    //nenhuma da senteça foi preenchida//
    console.log("a não é maior e igual a b");
}

let c = 8;
let d = 7;
//OU(OR)
if (c >= d || c === d) {
    console.log("c é maior ou igual a d");
} else {                                    //ou memso do portugol uma da centeça tem que ser verdaeira 
    console.log("c não é maior ou igual a d");
}

let e = 9;
let f = 7;
//Negação - !
if (!(e < f || e == f)) {
    console.log("e é maior ou igual a f");
} else {                                   //são duas consições e necessario preencher as duas consições ou ele pula de uma pra outra (as duas precisa ser verdadeira pra cair no if)
    console.log("e não é maior ou igual a f");
}

//___________________________________________________________________________________________________________//
/*
// Operador E lógico (&&)
// Retorna verdadeiro se ambos os operandos forem verdadeiros.
// Exemplo: (a && b) é verdadeiro somente se tanto 'a' quanto 'b' forem verdadeiros.
console.log(true && true);   // Saída: true
console.log(true && false);  // Saída: false
console.log(false && true);  // Saída: false
console.log(false && false); // Saída: false

// Operador OU lógico (||)
// Retorna verdadeiro se pelo menos um dos operandos for verdadeiro.
// Exemplo: (a || b) é verdadeiro se pelo menos um dos valores 'a' ou 'b' for verdadeiro.
console.log(true || true);   // Saída: true
console.log(true || false);  // Saída: true
console.log(false || true);  // Saída: true
console.log(false || false); // Saída: false

// Operador NÃO lógico (!)
// Inverte o valor do operando booleano.
// Exemplo: !a é verdadeiro se 'a' for falso, e falso se 'a' for verdadeiro.
console.log(!true);  // Saíd,0,a: false
console.log(!false); // Saída: true
*/
//___________________________________________________________________________________________________________//