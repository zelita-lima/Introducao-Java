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
class Produto
{
    constructor(Nome,preco,quantidade){
        this.Nome = Nome;
        this.preco = preco
        this.quantidade = quantidade
        this,total = preco * quantidade
    Apresentar()
    {
        console.log("O seu nome e:",this.Nome,"A quantidade e :",this.quantidade,"O preço e :",this.preco)
    }

}
/*const p = new Produto("zelita" , 3 , 2 )
const t = new total(this.total)
Pt.Apresentar();*/
//5-Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as informações do carro.//
class Carro
{
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Apresentar()
    {
        console.log("O seu carro e :",this.modelo,"A marca e:",this.marca,"O ano do seu carro e :",this.ano)
    }

}
const C2 = new Carro("civic" , "honda" , 2005)
C2.Apresentar();
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