//14/05/2021: 75. Funções Arrow #03.

//Com base nas aulas anteriores vimos a sintaxe reduzida comparando com funções e em seguida pegamos o exemplo do set interval onde o this ficou fixo e não foi preciso
//armazenar o this em uma constante, tbm.não precisou chamar o bind, pois estava funcionando normal do jeito que a gente queria e nessa aula vamos fazer mais alguns
//experimentos p/ver o comportamento do this dentro de uma arrow function e vamos comparar com o comportamento de uma função normal p/revisar o conceito.
//Vamos criar uma função chamada compara com this recebe função com um parâmetro e vamos imprimir no console comparando parâmetro se ele é estritamente igual a this, se
//vai retornar true ou false e linha 13 comparar com objeto global nesse caso, será que o objeto global é estritamente igual ao this neste contexto, conf.linha 15: ele
//é igual(verdadeiro)true dentro do Node; se executarmos essa mesma função no browser(console) conf.linha18 a 24(temos a reposta conf.linha22).
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//true
//
//[Done] exited with code=0 in 0.624 seconds
//let comparaComThis = function (param) {
//    console.log(this === param)
//}
//undefined
//comparaComThis(window)  Então nesse cenário o objeto window é true e se colocarmos global nesse ambiente, ele retorna dizendo que global não é definido(msg de erro).
//true          //Temos que ter muito cuidado na hora de chamar o this e atribuir algo ao mesmo dentro de um escopo de uma função, porque vamos mexer no escopo global.
//undefined
//
//Criando uma constante chamada objeto recebe objeto vazio{} e vou associar o compara com this com esse objeto a partir da função bind, então, a partir de agora sempre 
//que eu chamar a linha 34 ele vai apontar p/obj e não mais p/o escopo global conf.retorno linha 40 e se colocar obj(linha37)ele retorna true conf.linha 46.
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//true
//false
//
//[Done] exited with code=0 in 0.437 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//true
//false
//true      Aponta p/o objeto por conta do bind.
//
//[Done] exited with code=0 in 0.459 seconds
//
//Será que esse comportamento vai acontecer no Arrow Function?Vou criar conf.linha 65, será que o this vai continuar apontando p/o global como uma função normal
//apontaria?R.:Não!,porque essa função(linha63)foi definida dentro de um módulo do Node, cada arquivo do Node representa um módulo, então se cada arquivo do Node
//representa um módulo e escrevemos a função diretamente dentro de um arquivo, então ele foi escrito no contexto léxico(da palavra)dentro do módulo, então quem seria
//o dono dessa função?,quem seria o this dessa função?R.:Seria o próprio módulo.
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//true
//false
//true
//
//[Done] exited with code=0 in 0.425 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//true
//false
//true
//false    // Conf.linha 66: passando essa função p/o global, ela vai retornar falso, porque o this não aponta p/o global.
//
//[Done] exited with code=0 in 0.44 seconds
//
//O "this" dentro de uma função tradicional em JavaScript varia conf.a chamada, o this aponta p/o objeto global, tanto no browser como no Node, então temos que ter esse
//cuidado; já o Arrow é bem mais previsível e parece ser bem mais lógico nesse sentido, o this aponta p/o objeto corrente/módulo corrente p/o arquivo no qual e função
//linha 65/66 foi definida, então fazendo o teste conf.linha 97 ele retorna true(linha103).
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//true
//false
//true
//false
//true
//
//[Done] exited with code=0 in 0.469 seconds
//
//Agora vamos usar o bind dentro de uma função Arrow p/ver se de fato eu consigo mudar a referência do "this" conf.linhas 124/125, onde na linha 132 retorna false, 
//mostrando que o this aponta p/o objeto no qual a função escrita, não permitindo modificação.
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//true
//false
//true
//false
//true
//false
//
//[Done] exited with code=0 in 0.436 seconds
//  E apontando novamente p/o module.exports(154),a função das linhas 125/126, ele retorna como true conf.linha162 apontando p/o objeto que originalmente foi escrito, 
// que foi atribuído pro this e esse this não vai variar de forma alguma, então o this de uma função Arrow, é o this associado ao contexto no qual a função foi escrita.
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//true
//false
//true
//false
//true
//false
//true
//
//[Done] exited with code=0 in 0.456 seconds