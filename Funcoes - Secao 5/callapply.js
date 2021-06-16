//24/05/2021: 89. Call & Aplly

//Existem muitas formas de se chamar uma função, pode-se chamar diretamente no escopo global ou a partir de um objeto.
//Existem duas formas de chamar função que é o Call e o Aplly.
//Uma função dentro de JavaScript é um tipo e como um tipo existem outras funções dentro dele(tipo), p/ex.: como a função BIND.
//Criar uma função chamada get preço que receberá dois parâmetros, sendo imposto recebe 0(zero) e moeda recebe o símbolo do real R$.
//O professor fez questão de passar parâmetros para essa função porque a diferença entre o Call e o Apply é exatamente a forma como a gente passa os parâmetros
//na hora de invocar a função a partir desses dois métodos.
//Continuando, dentro da função get preço eu vou usar o this, tanto p/pegar o preço ou o desconto, o imposto e a moeda eu vou pegar p/ parâmetro. Esse método 
//vai retornar uma template string(crase)`${moeda}que vai começar pelo símbolo da moeda colocando espaço e em seguida eu vou fazer uma expressão conf.segue:
//{this.preco * (1 - this.desc) * (1 + imposto)}; vou criar um objeto chamado constante produto recebe nome notebook, preço R$ 4.589,00, vou passar o desconto
//0.15(percentual), e vou adicionar dentro do produto o método get preço, em seguida eu posso chamar o get preço direto(25), cujo retorno no console é um Not a
//Number - NaN conf.linha 27, porque neste contexto o preço no global(25)não está definido, assim como p/desconto tbm.
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//R$ NaN
//
//[Done] exited with code=0 in 0.995 seconds
//Continuando da linha 13: o this nesse caso que acessa p/uma função normal(que na verdade está acessando o global), então se na sintaxe tivésse feito global.
//preço recebe 20 e global.desc recebe 0.1 e executasse, teríamos conf.linha 47, onde nesse contexto(45) ele tá acessando o this do global:
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//R$ 18
//
//[Done] exited with code=0 in 0.442 seconds
//
//Continuando, eu posso chamar o get preço a partir de um objeto(66), retornando o valor R$ 4.589,00 c/desc.de 0.15%(linha 69)
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//R$ 18
//R$ 3900.65
//
//[Done] exited with code=0 in 0.473 seconds
//
//Continuando, outras duas formas que tem p/se executar essa mesma função get preço é a partir do Call e do Apply, então eu poderia fazer o seguinte, vou criar const 
//carro que vai ser outro objeto(93)c/preço R$ 49.990,00, que vai ter um desconto de 0.20%(89)e a partir desse objeto eu posso chamar a função get preço passando esse 
//produto(carro)como o contexto do qual ele vai ser executado essas duas funções, fazendo assim:> get preço ponto Call(95)(que é p/chamar a função), vou passar como con-
//texto de execução p/essa função o objeto chamado carro e em seguida executar, retornando conf.linha 99(49.990, *0.20% = 9.998 - 49.990 = 39.992).
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//R$ 18
//R$ 3900.65
//R$ 39992
//
//[Done] exited with code=0 in 0.6 seconds
//
//Exatamente a mesma coisa serve p/o Apply, o apply tbm.vai executar a função e eu posso passar o objeto que será usado como contexto(que será usado como contexto, que
//será usado como this dentro da execução da função(77 a 79)), executando, vai reornar o mesmo valor da linha 99:
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//R$ 18
//R$ 3900.65
//R$ 39992
//R$ 39992
//
//[Done] exited with code=0 in 0.679 seconds
//
//Qual a diferença de chamar uma função com Call ou com Apply?
//R.: A diferença é só a passagem dos parâmetros, foi por isso que o prof.quis colocar dois parâmetros(105)(imposto = 0, moeda = 'R$')p/que a gente possa preceber que a
//forma de passar parâmetros nessas duas funções é diferente, então no caso, seria assim: qdo.eu chamo uma função do tipo Call, eu passo diretamente nos parâmetros do 
//call cada dado que será passado p/ a função, então o primeiro parâmetro será o contexto que pode estar nulo, ou pode ser p/ex.: o carro, pode ser o global, pode ser o 
//próprio objeto produto(144), no caso aqui, vou passar: carro, passando 0.17% e vou passar o símbolo de dólar ou invés de ser o símbolo de real, então diretamente nos 
//parâmetros(161)do Call eu tbm.passei os parâmetros que serão informados p/a função get preço, onde o primeiro parâmetro(carro)trata-se do contexto e depois os parâme-
//tros que segue(0.17% e '$)irão passar p/ a função get preço(161), executando, retorna conf.linha 167.
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//R$ 18
//R$ 3900.65
//R$ 39992
//R$ 39992
//$ 46790.64
//
//[Done] exited with code=0 in 1.125 seconds
//
//Continuando, eu vou chamar a função Apply e vamos preceber que no lugar de colocar todos os parâmetros diretamente no Apply, eu vou passar os parâmetros dentro de 
//uma Array, onde o 1ºparâmetro será usado como contexto de execução na função e depois eu vou ter todos os parâmetros dentro dessa Array(194), executando, retorna 
//o mesmo resultado de Call conf.linha 203(em conformidade com a linha 167).
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//R$ 18
//R$ 3900.65
//R$ 39992
//R$ 39992
//$ 46790.64
//$ 46790.64
//
//[Done] exited with code=0 in 0.52 seconds
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//R$ 18
//R$ 3900.65
//R$ 39992
//R$ 39992
//$ 46790.64
//$ 21.06     Retorno da linha 228, pois o sistema possui o valor do global arquivado em sua memória.
//
//[Done] exited with code=0 in 4.556 seconds