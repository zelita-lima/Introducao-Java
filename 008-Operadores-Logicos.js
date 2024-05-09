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
} else {
    console.log("a não é maior e igual a b");
}

let c = 8;
let d = 7;
//OU(OR)
if (c >= d || c === d) {
    console.log("c é maior ou igual a d");
} else {
    console.log("c não é maior ou igual a d");
}

let e = 9;
let f = 7;
//Negação - !
if (!(e < f || e == f)) {
    console.log("e é maior ou igual a f");
} else {
    console.log("e não é maior ou igual a f");
}
