//24/05/2021: 87. Desafio Função Construtora
//
//Continuando da aula passada(86)que é transformar essa classe pessoa em uma função construtura, fazendo da seguinte forma:
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
//(3)vou colocar function em substituição ao class(4), os parâmetros do construtor(5)vai passar a ser o parâmetro da função que está sendo criada(6)tirando as chaves 
//de fechamento, ficando algo mais direto dentro da função construtora e p/transformar essa função(9)p/ficar diretamente no objeto, na instância criada, eu vou colocar
//this.falar recebe uma função anônima(function()) e o restante fica exatamente o mesmo(linhas 14 e 15), a forma de instânciar fica exatamente a mesma de uma classe, a
//forma de chamar um objeto a partir de uma classe(15)é da mesma forma de se chamar a partir de um objeto criado a partir de uma função, executando, retorna = linha 31.
function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this,nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Meu nome é João
//
//[Done] exited with code=0 in 0.349 seconds
//
//Abaixo a sintaxe de código/comando da aula passada(86),onde mostra a forma de comparar com a função factory, vai ser semelhante ao que foi feito com a classe(4 a 15)
//que vira uma função construtora, na verdade, temos duas abordagens diferentes p/se criar novos objetos, onde podemos criar a partir de uma factory(39 a 46), ou seja, 
//uma função que retorna como resposta um objeto, ou podemos criar novos objetos a partir de uma classe(4 a 15)usando o operador NEW instânciando a partir de uma classe
//como tbm.podemos usar o NEW em cima de uma função construtora(5 a 7). 
//const criarPessoa = nome => {
//    return {
//        falar: () => console.log(`Meu nome é ${nome}`)
//    }
//}
//
//const p2 = criarPessoa('João')
//p2.falar()                 