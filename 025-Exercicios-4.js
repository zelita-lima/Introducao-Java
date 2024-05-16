/*
1-Crie uma função construtora chamada Animal que define propriedades para nome 
e especie. Crie um objeto animal1 com nome "Leão" e espécie "Felino".

2-Defina uma função construtora Produto que tem propriedades nome, preco, 
e quantidade. Crie um objeto produto1 com nome "Notebook", preço "2500" e 
quantidade "5".

3-Crie uma função construtora Carro com propriedades marca, modelo, e ano.
 Crie um objeto carro1 com marca "Toyota", modelo "Corolla" e ano "2022".

4-Defina uma função construtora Livro que tenha propriedades titulo, autor e 
anoPublicacao. Crie um objeto livro1 com título "Dom Casmurro", autor "Machado 
de Assis" e ano de publicação "1899".

5Crie uma função construtora ContaBancaria com propriedades titular, saldo e tipo. 
Crie um objeto conta1 com titular "João", saldo "5000" e tipo "Corrente".

6-Defina uma função construtora Cachorro com propriedades raca, cor e idade. 
Crie um objeto cachorro1 com raça "Labrador", cor "Marrom" e idade "5".

7-Crie uma função construtora Aluno com propriedades nome, matricula e curso.
 Crie um objeto aluno1 com nome "Maria", matrícula "2021001" e curso "Engenharia Civil".

8-Defina uma função construtora Restaurante com propriedades nome, endereco e 
tipoCozinha. Crie um objeto restaurante1 com nome "La Pizzeria", endereço "Rua das Pizzas, 123" e tipo de cozinha "Italiana".

9-Crie uma função construtora Filme com propriedades titulo, diretor e 
anoLancamento. Crie um objeto filme1 com título "O Poderoso Chefão", 
diretor "Francis Ford Coppola" e ano de lançamento "1972".

10-Defina uma função construtora Funcionario com propriedades nome, cargo e 
salario. Crie um objeto funcionario1 com nome "Carlos", cargo "Gerente" e 
salário "7000".
*/


//1-Crie uma função construtora chamada Animal que define propriedades para nome 
//e especie. Crie um objeto animal1 com nome "Leão" e espécie "Felino".

function Animal() {
    this.nome2;
    this.especie;
}
let animal1 = new Animal();

animal1.nome2 = "leão"
animal1.especie = "felino"

console.log("nome2:", animal1.Nome2);
console.log("especie:", animal1.especie);

//2-Defina uma função construtora Produto que tem propriedades nome, preco, 
//e quantidade. Crie um objeto produto1 com nome "Notebook", preço "2500" e 
//quantidade "5".

function Produto() {
    this.Nome;
    this.Preço;
    this.Quantidade
}
let Produto1 = new Produto();

Produto1.Nome = "Notebook"
Produto1.Preço = "2500"
Produto1.Quantidade = "5"

console.log("Nome:", Funcionario1.Nome);
console.log("Cargo:", Funcionario1.Cargo);
console.log("Salário:", Funcionario1.Salario);

//3-Crie uma função construtora Carro com propriedades marca, modelo, e ano.
//Crie um objeto carro1 com marca "Volvo", modelo "Xc60" e ano "2024".

function Carro() {
    this.Marca;
    this.Modelo;
    this.Ano;
}
let Carro1 = new Carro();

Carro1.Marca = "Volvo"
Carro1.Modelo = "xc60"
Carro1.Ano = "2024"

console.log("Nome:", Funcionario1.Nome);
console.log("Cargo:", Funcionario1.Cargo);
console.log("Salário:", Funcionario1.Salario);

//4-Defina uma função construtora Livro que tenha propriedades titulo, autor e 
//anoPublicacao. Crie um objeto livro1 com título "Dom Casmurro", autor "Machado 
//de Assis" e ano de publicação "1899".

function Livro() {
    this.Titulo;
    this.Autor;
    this.anoPB;
}
let Livro1 = new Livro();

Livro1.Titulo = "Dom Casmurro"
Livro1.Autor = "Machado de Assis"
Livro1.anoPB = "1899"

console.log("Nome:", Funcionario1.Nome);
console.log("Cargo:", Funcionario1.Cargo);
console.log("Salário:", Funcionario1.Salario);

//5-Crie uma função construtora ContaBancaria com propriedades titular, saldo e tipo. 
//Crie um objeto conta1 com titular "João", saldo "5000" e tipo "Corrente".

function ContaBancaria() {
    this.Titular;
    this.Saldo;
    this.Tipo;
}
let ContaBancaria1 = new ContaBancaria();

ContaBancaria1.Titular = "João"
ContaBancaria1.Saldo = "5000"
ContaBancaria1.Tipo = "Corrente"

console.log("Nome:", Funcionario1.Nome);
console.log("Cargo:", Funcionario1.Cargo);
console.log("Salário:", Funcionario1.Salario);

//6-Defina uma função construtora Cachorro com propriedades raca, cor e idade. 
//Crie um objeto cachorro1 com raça "Labrador", cor "Preto" e idade "1".

function Cachorro() {
    this.Raca;
    this.Cor;
    this.Idade;
    this.Nome3;
}
let Cachorro1 = new Cachorro();

Cachorro1.Raca = "Labrador"
Cachorro1.Cor = "Preto"
Cachorro1.Idade = "1"
Cachorro1.Nome3 = "Billy"

console.log("Nome:", Funcionario1.Nome);
console.log("Cargo:", Funcionario1.Cargo);
console.log("Salário:", Funcionario1.Salario);

//7-Crie uma função construtora Aluno com propriedades nome, matricula e curso.
//Crie um objeto aluno1 com nome "Maria", matrícula "2021001" e curso "Engenharia Civil".

function Aluno() {
    this.Nome4;
    this.Matricula;
    this.Curso;
}
let Aluno1 = new Aluno();

Aluno1.Nome4 = "maria"
Aluno1.Matricula = "2021001"
Cachorro1.Curso = "Engenharia Civil"

console.log("Nome:", Funcionario1.Nome);
console.log("Cargo:", Funcionario1.Cargo);
console.log("Salário:", Funcionario1.Salario);

//8-Defina uma função construtora Restaurante com propriedades nome, endereco e 
//tipoCozinha. Crie um objeto restaurante1 com nome "La Pizzeria", endereço "Rua das Pizzas, 123" e tipo de cozinha "Italiana".

function Restaurante() {
    this.Nome5;
    this.Endereço;
    this.Tipocozinha;
}
let Restaurante1 = new Restaurante();

Restaurante1.Nome5 = "La Pizzeriaa"
Restaurante1.Endereço = "vRua das Pizzas, 123"
Restaurante1.Tipocozinha = "Italiana"

console.log("Nome:", Funcionario1.Nome);
console.log("Cargo:", Funcionario1.Cargo);
console.log("Salário:", Funcionario1.Salario);

//9-Crie uma função construtora Filme com propriedades titulo, diretor e 
//anoLancamento. Crie um objeto filme1 com título "O Poderoso Chefão", 
//diretor "Francis Ford Coppola" e ano de lançamento "1972".

function Filme() {
    this.Titulo;
    this.Diretor;
    this.Anolancamento;
}
let Filme1 = new Filme();

Filme1.Titulo = "O Poderoso Chefão"
Filme1.Diretor = "Francis Ford Coppola"
Filme1.Anolancamento = "1972"

console.log("Nome:", Funcionario1.Nome);
console.log("Cargo:", Funcionario1.Cargo);
console.log("Salário:", Funcionario1.Salario);

//10-Defina uma função construtora Funcionario com propriedades nome, cargo e 
//salario. Crie um objeto funcionario1 com nome "Carlos", cargo "Gerente" e 
//salário "7000".

function Funcionario() {
    this.Nome;
    this.Cargo;
    this.Salario;
}
let Funcionario1 = new Funcionario();

Funcionario1.Nome = "Carlos"
Funcionario1.Cargo = "Gerente"
Funcionario1.Salario = "7000"

console.log("Nome:", Funcionario1.Nome);
console.log("Cargo:", Funcionario1.Cargo);
console.log("Salário:", Funcionario1.Salario);

/////tenho qu earrumar o codigo ainda