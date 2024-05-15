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
var livro = {
    titulo: "O Visconde que me Amava",
    autor: "Julia Quinn",
    ano: 2000,
    resumo: "O Visconde que me Amava é o segundo livro da série Os Bridgertons, onde Anthony Bridgerton, o irmão mais velho da família, busca uma esposa para garantir a continuidade da linhagem Bridgerton. Ele acaba se apaixonando por Kate Sheffield, uma jovem determinada que está decidida a proteger sua meia-irmã mais nova de homens como Anthony. Entre desentendimentos e mal-entendidos, eles acabam se aproximando, mas o passado de Anthony e os receios de Kate podem ameaçar o amor que estão desenvolvendo."
};
console.log("Título: " , livro.titulo);
console.log("Autor: " , livro.autor);
console.log("Ano: " , livro.ano);
console.log("Resumo: " , livro.resumo);

/* 

    Exercício 2: Adição de Método
    Adicione um método informacoes() ao objeto 
    livro que imprima todas as informações do livro, 
    incluindo título, autor e ano.
*/
var livro = {
    titulo: "O Visconde que me Amava",
    autor: "Julia Quinn",
    ano: 2000,
    resumo: "O Visconde que me Amava é o segundo livro da série Os Bridgertons, onde Anthony Bridgerton, o irmão mais velho da família, busca uma esposa para garantir a continuidade da linhagem Bridgerton. Ele acaba se apaixonando por Kate Sheffield, uma jovem determinada que está decidida a proteger sua meia-irmã mais nova de homens como Anthony. Entre desentendimentos e mal-entendidos, eles acabam se aproximando, mas o passado de Anthony e os receios de Kate podem ameaçar o amor que estão desenvolvendo.",
    informacoes: function() {
        console.log("Título: " , this.titulo);
        console.log("Autor: " , this.autor);
        console.log("Ano: " , this.ano);
        console.log("Resumo: " , this.resumo);
    }
};
livro.informacoes();
/*
    exercício 3: Lista de Compras
    Crie um objeto literal que represente uma 
    lista de compras, onde cada item da lista é uma 
    propriedade com o nome do item e a quantidade desejada.
*/
/*
var ListaDeCompras1 = {
    "bolo": 1,
    "arroz": 2,
    "detergente": 2,
    "pão": 2,
    "zovo": 12
};

log(ListaDeCompras1);
for (var item in ListaDeCompras) {
    console.log("- " , item , ": " + ListaDeCompras[item]);
}*/
/*
    Exercício 4: Adição e Remoção de Itens
    Adicione métodos ao objeto lista de compras para
    adicionar um novo item à lista e remover um item existente.
*/
var listaDeCompras = {
    "arroz": 1,
    "feijão": 2,
    "leite": 3,
    "pão": 2,
    "ovos": 12,
    adicionarItem: function(item, quantidade) {
        if (this[item]) {
            this[item] += quantidade;
        } else {
            this[item] = quantidade;
        }
    },
    removerItem: function(item) {
        if (this[item]) {
            delete this[item];
        } else {
            console.log("O item '" , item , "' não está na lista de compras.");
        }
    }
};

// Testando os métodos adicionarItem() e removerItem()
console.log("Lista de Compras antes da adição e remoção de itens:");
console.log(listaDeCompras);

listaDeCompras.adicionarItem("café", 1);
console.log("\nLista de Compras após adicionar café:");
console.log(listaDeCompras);

listaDeCompras.removerItem("feijão");
console.log("\nLista de Compras após remover feijão:");
console.log(listaDeCompras);
/*
    Exercício 5: Total da Compra
    Adicione um método ao objeto lista de compras para 
    calcular o valor total da compra, com base na quantidade
    desejada de cada item e seus preços individuais.
*/
var listaDeCompras2 = {
    "arroz": { quantidade: 1, precoUnitario: 2.5 },
    "feijão": { quantidade: 2, precoUnitario: 3 },
    "leite": { quantidade: 3, precoUnitario: 1.5 },
    "pão": { quantidade: 2, precoUnitario: 1 },
    "ovos": { quantidade: 12, precoUnitario: 0.3 },
    adicionarItem: function(item, quantidade, precoUnitario) {
        this[item] = { quantidade: quantidade, precoUnitario: precoUnitario };
    },
    removerItem: function(item) {
        if (this[item]) {
            delete this[item];
        } else {
            console.log("O item '" , item , "' não está na lista de compras.");
        }
    },
    calcularTotal: function() {
        var total = 0;
        for (var item in this) {
            if (typeof this[item] === 'object' && this[item].hasOwnProperty('quantidade') && this[item].hasOwnProperty('precoUnitario')) {
                total += this[item].quantidade * this[item].precoUnitario;
            }
        }
        return total;
    }
};
console.log("Valor total da compra: R$" + listaDeCompras2.calcularTotal().toFixed(2));
/*
    Exercício 6: Registro de Funcionários
    Crie um objeto literal que represente um registro de 
    funcionários, onde cada funcionário é representado por um 
    objeto com propriedades como nome, cargo e salário.
*/
var registroDeFuncionarios = {
    funcionarios: [
        {
            nome: "João",
            cargo: "Desenvolvedor",
            salario: 5000
        },
        {
            nome: "Maria",
            cargo: "Gerente de Vendas",
            salario: 7000
        },
        {
            nome: "Pedro",
            cargo: "Analista de Marketing",
            salario: 4500
        }
    ]
};
console.log("Registro de Funcionários:");
registroDeFuncionarios.funcionarios.forEach(function(funcionario) {
    console.log("Nome: " + funcionario.nome);
    console.log("Cargo: " + funcionario.cargo);
    console.log("Salário: R$" + funcionario.salario.toFixed(2));
    console.log("------------------------------------");
});
/*
    Exercício 7: Adição de Funcionários
    Adicione métodos ao objeto registro de funcionários 
    para adicionar um novo funcionário ao registro e remover um funcionário existente.
*/
var registroDeFuncionarios = {
    funcionarios: [
        {
            nome: "João",
            cargo: "Desenvolvedor",
            salario: 5000
        },
        {
            nome: "Maria",
            cargo: "Gerente de Vendas",
            salario: 7000
        },
        {
            nome: "Pedro",
            cargo: "Analista de Marketing",
            salario: 4500
        }
    ],
    adicionarFuncionario: function(nome, cargo, salario) {
        this.funcionarios.push({ nome: nome, cargo: cargo, salario: salario });
    },
    removerFuncionario: function(nome) {
        var indice = this.funcionarios.findIndex(function(funcionario) {
            return funcionario.nome === nome;
        });
        if (indice !== -1) {
            this.funcionarios.splice(indice, 1);
            console.log("Funcionário '" + nome + "' removido do registro.");
        } else {
            console.log("Funcionário '" + nome + "' não encontrado no registro.");
        }
    }
};

// Testando os métodos adicionarFuncionario() e removerFuncionario()
console.log("Registro de Funcionários antes de adicionar e remover funcionários:");
console.log(registroDeFuncionarios.funcionarios);

registroDeFuncionarios.adicionarFuncionario("Ana", "Analista de Sistemas", 6000);
console.log("\nRegistro de Funcionários após adicionar Ana:");
console.log(registroDeFuncionarios.funcionarios);

registroDeFuncionarios.removerFuncionario("Maria");
console.log("\nRegistro de Funcionários após remover Maria:");
console.log(registroDeFuncionarios.funcionarios);
/*
    Exercício 8: Aumento de Salário
    Adicione um método ao objeto registro de funcionários 
    para aumentar o salário de todos os funcionários em uma certa porcentagem.
*/
var registroDeFuncionarios = {
    funcionarios: [
        {
            nome: "João",
            cargo: "Desenvolvedor",
            salario: 5000
        },
        {
            nome: "Maria",
            cargo: "Gerente de Vendas",
            salario: 7000
        },
        {
            nome: "Pedro",
            cargo: "Analista de Marketing",
            salario: 4500
        }
    ],
    adicionarFuncionario: function(nome, cargo, salario) {
        this.funcionarios.push({ nome: nome, cargo: cargo, salario: salario });
    },
    removerFuncionario: function(nome) {
        var indice = this.funcionarios.findIndex(function(funcionario) {
            return funcionario.nome === nome;
        });
        if (indice !== -1) {
            this.funcionarios.splice(indice, 1);
            console.log("Funcionário '" + nome + "' removido do registro.");
        } else {
            console.log("Funcionário '" + nome + "' não encontrado no registro.");
        }
    },
    aumentarSalario: function(percentual) {
        this.funcionarios.forEach(function(funcionario) {
            funcionario.salario *= (1 + percentual / 100);
        });
    }
};
console.log("Registro de Funcionários antes do aumento de salário:");
console.log(registroDeFuncionarios.funcionarios);

registroDeFuncionarios.aumentarSalario(10);
console.log("\nRegistro de Funcionários após o aumento de salário:");
console.log(registroDeFuncionarios.funcionarios);
/*
    Exercício 9: Contato
    Crie um objeto literal que represente um contato, 
    com propriedades como nome, email e telefone.
*/
var contato = {
    nome: "João Silva",
    email: "joao@example.com",
    telefone: "(00) 1234-5678"
};
console.log("Informações do Contato:");
console.log("Nome: " + contato.nome);
console.log("Email: " + contato.email);
console.log("Telefone: " + contato.telefone);
/*
    exercício 10: Lista de Contatos
    Crie um array de objetos literais que representem uma lista 
    de contatos. Cada objeto deve ter as mesmas propriedades 
    definidas no exercício anterior. Adicione métodos para 
    adicionar um novo contato à lista, remover um contato
    existente e buscar um contato pelo nome.
*/
var listaDeContatos = {
    contatos: [],
    adicionarContato: function(nome, email, telefone) {
        this.contatos.push({ nome: nome, email: email, telefone: telefone });
    },
    removerContato: function(nome) {
        var indice = this.contatos.findIndex(function(contato) {
            return contato.nome === nome;
        });
        if (indice !== -1) {
            this.contatos.splice(indice, 1);
            console.log("Contato '" + nome + "' removido da lista.");
        } else {
            console.log("Contato '" + nome + "' não encontrado na lista.");
        }
    },
    buscarContato: function(nome) {
        var contatoEncontrado = this.contatos.find(function(contato) {
            return contato.nome === nome;
        });
        if (contatoEncontrado) {
            console.log("Contato encontrado:");
            console.log("Nome: " + contatoEncontrado.nome);
            console.log("Email: " + contatoEncontrado.email);
            console.log("Telefone: " + contatoEncontrado.telefone);
        } else {
            console.log("Contato '" + nome + "' não encontrado na lista.");
        }
    }
};
listaDeContatos.adicionarContato("João Silva", "joao@example.com", "(00) 1234-5678");
listaDeContatos.adicionarContato("Maria Souza", "maria@example.com", "(00) 9876-5432");

console.log("Lista de Contatos antes de remover e buscar contatos:");
console.log(listaDeContatos.contatos);

listaDeContatos.removerContato("João Silva");
console.log("\nLista de Contatos após remover João Silva:");
console.log(listaDeContatos.contatos);

listaDeContatos.buscarContato("Maria Souza");
listaDeContatos.buscarContato("João Silva");
