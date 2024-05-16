	/*
    1Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma mensagem com o nome e a idade da pessoa?

    2Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o perímetro do retângulo.

    3Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e verificar o saldo.

    4Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular o valor total do produto (preço * quantidade).

    5Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as informações do carro.

    6Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para calcular a média das notas.

    7Crie uma classe Animal com propriedades nome e tipo e um método para exibir uma mensagem com o nome e o tipo do animal.

    8Crie uma classe Triangulo com propriedades lado1, lado2 e lado3 e métodos para calcular a área e o perímetro do triângulo.

    9Crie uma classe Livro com propriedades titulo, autor e ano e um método para exibir todas as informações do livro.

    10Crie uma classe Circulo com propriedade raio e métodos para calcular a área e o perímetro do círculo.
*/

//1-Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma mensagem com o nome e a idade da pessoa.//
class Pessoa
{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    Apresentar()
    {
        console.log("Meu nome e :",this.nome,"Minha idade e:",this.idade)
    }

}
const P1 = new Pessoa("Zelita",18)
P1.Apresentar();
//2-Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o perímetro do retângulo.//
class Retangulo
{
    constructor(Largura,Altura){
        this.Largura = Largura;
        this.Altura = Altura;
    }
    Apresentar()
    {
        console.log("A Largura e :",this.Largura,"A Altura e:",this.Altura)
    }

}
const R = new Retangulo(36 , 18)
R.Apresentar();
//3-Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e verificar o saldo.//
class ContaBancaria
{
    constructor(Saldo,Titular){
        this.Saldo = Saldo;
        this.Titular = Titular;
    }
    Apresentar()
    {
        console.log("O seu saldo e :",this.Saldo,"O titular e:",this.Titular)
    }

}
const C = new ContaBancaria(2 , "Zelita")
C.Apresentar();
//4-Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular o valor total do produto (preço * quantidade).//
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularTotal() {
        return this.preco * this.quantidade;
    }
}
//5-Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as informações do carro.//
class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
    
    Apresentar() {
      console.log("O carro é:", this.modelo, "A marca é:", this.marca, "O ano do carro é:", this.ano);
    }
  }
//6-Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para calcular a média das notas.
class Aluno
{
    constructor(nome,matricula,notas){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }
    Apresentar()
    {
        console.log("O seu carro e :",this.modelo,"A marca e:",this.marca,"O ano do seu carro e :",this.ano)
    }

}
const C2 = new Carro("civic" , "honda" , 2005)
C2.Apresentar();
//7-Crie uma classe Animal com propriedades nome e tipo e um método para exibir uma mensagem com o nome e o tipo do animal.//
class Animal
{
    constructor(nome,tipo,notas){
        this.nome = nome;
        this.tipo = tipo;
        this.notas = notas;
    }
    Apresentar()
    {
        console.log("O seu animal e :",this.nome,"O tipo e:",this.tipo)
    }

}
const A = new Animal("onça" , "pintada")
A.Apresentar();
//8-Crie uma classe Triangulo com propriedades lado1, lado2 e lado3 e métodos para calcular a área e o perímetro do triângulo.//
class Triangulo
{
    constructor(Lado1,Lado2,Lado3){
        this.Lado1= Lado1;
        this.Lado2 = Lado2;
        this.Lado3 = Lado3;
        this.Perimetro = Lado1 + Lado2 + Lado3 
        this.Area = Lado1 * Lado2 * Lado3
    }
    Apresentar()
    {
        console.log("O primeiro lado e :",this.Lado1,"O segundo lado e:",this.Lado2,"O terceiro lado e:",this.Lado3)
        console.log("O Perimetro e :",this.Perimetro)
        console.log("O Area e :",this.Area)
    }

}
const T = new Triangulo(2 , 3 , 2)
T.Apresentar();
//9-Crie uma classe Livro com propriedades titulo, autor e ano e um método para exibir todas as informações do livro.//
class Livro
{
    constructor(titulo,autor,ano1){
        this.titulo = titulo;
        this.autor = autor;
        this.ano1 = ano1;
    }
    Apresentar()
    {
        console.log("O seu livro e :",this.titulo,"O autor e :",this.autor,"O ano do livro e :",this.ano1)
    }

}
const L = new Livro("O visconde que me amava" , "Julia quinn" , 2000)
L.Apresentar()
//10Crie uma classe Circulo com propriedade raio e métodos para calcular a área e o perímetro do círculo.//
class Circulo
{
    constructor(Raio,pi){
        this.Raio= Raio;
        this.pi = 3,14;
        this.Area2 = Raio * Raio * pi
        this.Perimetro2 = 2 * Raio * pi
    }
    Apresentar()
    {
        console.log("O raio e :",this.Raio,)
    }
    Apresentar()
    {
        console.log("O Perimetro e :",this.Perimetro2)
    }
    Apresentar()
    {
        console.log("O Area e :",this.Area2)
    }

}
const C4 = new Circulo(180)
C4.Apresentar();