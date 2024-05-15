/*
    Exercício 1: Criação de Objeto Literal
    Crie um objeto literal que represente um livro, com 
    as propriedades titulo, autor e ano. Em seguida, 
    imprima as informações do livro no console.

    Exercício 2: Adição de Método
    Adicione um método informacoes() ao objeto 
    livro que imprima todas as informações do livro, 
    incluindo título, autor e ano.

    Exercício 3: Lista de Compras
    Crie um objeto literal que represente uma 
    lista de compras, onde cada item da lista é uma 
    propriedade com o nome do item e a quantidade desejada.

    Exercício 4: Adição e Remoção de Itens
    Adicione métodos ao objeto lista de compras para
    adicionar um novo item à lista e remover um item existente.

    Exercício 5: Total da Compra
    Adicione um método ao objeto lista de compras para 
    calcular o valor total da compra, com base na quantidade
    desejada de cada item e seus preços individuais.

    Exercício 6: Registro de Funcionários
    Crie um objeto literal que represente um registro de 
    funcionários, onde cada funcionário é representado por um 
    objeto com propriedades como nome, cargo e salário.

    Exercício 7: Adição de Funcionários
    Adicione métodos ao objeto registro de funcionários 
    para adicionar um novo funcionário ao registro e remover um funcionário existente.

    Exercício 8: Aumento de Salário
    Adicione um método ao objeto registro de funcionários 
    para aumentar o salário de todos os funcionários em uma certa porcentagem.

    Exercício 9: Contato
    Crie um objeto literal que represente um contato, 
    com propriedades como nome, email e telefone.

    Exercício 10: Lista de Contatos
    Crie um array de objetos literais que representem uma lista 
    de contatos. Cada objeto deve ter as mesmas propriedades 
    definidas no exercício anterior. Adicione métodos para 
    adicionar um novo contato à lista, remover um contato
    existente e buscar um contato pelo nome.
*/

/*
    Exercício 1: Criação de Objeto Literal
    Crie um objeto literal que represente um livro, com 
    as propriedades titulo, autor e ano. Em seguida, 
    imprima as informações do livro no console.
*/
// Criando o objeto literal do livro
var livro = {
    titulo: "O Visconde que me Amava",
    autor: "Julia Quinn",
    ano: 2000,
    resumo: "O Visconde que me Amava é o segundo livro da série Os Bridgertons, onde Anthony Bridgerton, o irmão mais velho da família, busca uma esposa para garantir a continuidade da linhagem Bridgerton. Ele acaba se apaixonando por Kate Sheffield, uma jovem determinada que está decidida a proteger sua meia-irmã mais nova de homens como Anthony. Entre desentendimentos e mal-entendidos, eles acabam se aproximando, mas o passado de Anthony e os receios de Kate podem ameaçar o amor que estão desenvolvendo."
};

// Imprimindo as informações do livro no console
console.log("Título: " + livro.titulo);
console.log("Autor: " + livro.autor);
console.log("Ano: " + livro.ano);
console.log("Resumo: " + livro.resumo);
