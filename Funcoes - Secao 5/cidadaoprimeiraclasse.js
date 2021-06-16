//10/05/2021: 66. Cidadão de Primeira Linha
//
//Existe um conceito que Função em JavaScript é First Class Object ou First Class Citizens, e outra forma de ser chamada principalmente no mundo funcional(mercado de trabalho)
//é o Higher-Order Function(Função de Alta Ordem); isso significa que função pode ser tratado como sendo um dado, como sendo um dado podemos passar essa função como parâmetro, 
//consegue-se retornar uma função como resposta de uma função; portanto, qdo.se trabalha função como dados, pode-se então, passar uma função como parâmetro, pode-se criar uma
//função e armazenar numa variável, uma função pode ter uma outra função dentro dela, abrindo-se um leque de possibilidades muito grande, então qdo.a gente ouvir esses nomes,
//cidadão em primeira linha é qdo.a linguagem trata a função como um dado criando muitas possibilidades.
//Qdo.vamos trabalhar p/ex., no paradigma funcional, ter esse higher order function(função de alta ordem)é extremamente importante, é um dos pilares, é o que nos habilita a ter
//programção funcional dentro de uma linguagem de programação, a gente consegue sim aplicar princípios de programação funcional dentro de JavaScript(que possui uma linguagem multi
//paradigma), onde consegue-se implementar desde procedural, óóó, e funcional dentro do JS.
// CRIAR DE FORMA LITERAL //     
// Vamos declarar uma função de forma literal, usando a palavra function chamada de fun1()onde essa função pode receber parâmetros{}e pode retornar um valor,
//o retorno de um valor de uma função JavaScript é opcional, podendo ou não retornar um valor, caso não retorne nada, a função retorna undefined.
//Então se fosse de uma forma mais precisa, toda a função em JavaScript retorna pelo menos o valor undefined, caso a gente não chame explicitamente o return, caso chamar explicita-
//mente o return vai retornar aquilo que passamos junto do return, mas se a gente não retornar nada(uma função sempre retorna undefined), então portanto, de qualquer forma, a gente
//pode passar dentro dos parêntesis()uma lista de parâmetros e dentro do corpo da função(chaves{})cuja associação é um bloco referente a setença de código agrupadas nessa função p/
//a gente possa ter reuso e é muito importante entendermos que mesmo qdo.temos uma função de uma única sentença nós não podemos omitir o bloco, o bloco no caso da função é obriga-
//tório, diferente do que vimos em algumas estruturas de controle em que a gente opcionalmente pode ou não tirar o bloco, na função não temos essa possibilidade, desde que a gente 
//esteja trabalhando com uma função mais tradicional(function fun1()), com o Arrow Function vamos perceber que inclusive as chaves são opcionais. 
// ARMAZENAR EM UMA VARIÁVEL
//Além de podermos criar uma função de forma literal, a gente consegue armazenar uma função numa variável, p/Ex.: podemos criar uma constante chamada de 
//fun2 recebe uma function passando os parêntesis() e abrindo o corpo da função{ }c/as chaves=>(const fun2 = function () { }), note-se que essa é uma função anônima e nós pegamos 
//uma função anônima e a atribuimos p/uma constante, e a partir disso a gente consegue referenciar essa função a partir da constante, isto é, se chamarmos o nome da constante passando
//os parêntesis ele vai invocar a função, e se simplemeste chamarmos o nome da constante e passar isso como parâmetro p/uma função ou fazer qualquer tipo de operação estamos invocando
//diretamente a função em si, mas p/invocar tem que chamar com os parêntesis, conf.linhas 31 e 32.
// ARMAZENAR EM UMA ARRAY
//Além de podermos criar uma função de forma literal, além de armazenar numa variável, podemos tbm.armazenar uma função dentro de uma array, onde constante array recebe [function ()]
//const array = [function ()] e colocando os parâmetros dentro dela[function (a, b) { return a +b }], ou podemos se quiser pegar p/ex.:[function (a, b) { return a +b }, fun1, fun2]=>
//fun1 que é a função literal e fun2 podemos tbm.armazenar tanto a parte de uma função literal acessando o nome dela, como podemos tbm.a partir de uma constante que recebeu uma função
//anônima e armazená-la dentro de uma array; e além disso podemos tbm.declarar a função[function (a, b) { return a +b }na construção do array.
function fun1() { }
const fun2 = function  () { }
const array = [function (a, b) { return a +b }, fun1, fun2]
console.log(array[0](2, 3))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//5              Refere-se a soma de 2 e 3 = 5.
//
//[Done] exited with code=0 in 0.56 seconds
//
// ARMAZENAR EM UM ATRIBUTO DE OBJETO
//Tbm.podemos armazenar função dentro de atributos de objetos, então podemos criar objetos e pegar um atributo desse objeto mesmo que esse atributo não existe dinamicamente pode-se 
//associar/atribuir uma função p/esse atributo, então conf.abaixo: criar constante objeto vazio, colocamos obj.falar recebe function, e na função {vamos retornar 'Opa'} e p/chamar 
//essa função é super simples:console.log(obj.falar())obj.falar passando os parêntesis p/ele de fato invocar a função, executando temos conf.linha 48.   
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Opa
//
//[Done] exited with code=0 in 0.51 seconds
//
// PASSAR FUNÇÃO COMO PARÂMETRO 
//Como passar uma função como parâmetro p/uma outra função podendo criar alguns tipos de situações que nós fiquemos um pouco desconfortáveis, porque não estamos acostumados, mas  
//essa é uma possibilidade que abre um leque de opções muito grandes, enriquecendo muito a linguagem.
//Criada uma função chamada run(executar)dentro dos parênteses recebe como parâmetro(fun){func()}=>dentro das chaves recebe-se a função como parâmetro recebida, executando esse método
//run()e dentro desse parênteses vamos passar uma função que já existe ou mesmo criar diretamente na chamada da função e em seguida colocar { console.log('Executando...') })
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Executando...
//
//[Done] exited with code=0 in 0.787 seconds
//Foi passado como parâmetro uma função(function () { console.log('Executando...') }) onde nesse momento não estamos executando essa função e na linha 58 é que realmente está se exe-
//cutando ela dentro da função run(linha 57).
//
// UMA FUNÇÃO PODE RETORNAR/CONTER UMA FUNÇÃO
//Uma função pode retornar e uma vez que estamos retornando uma função que foi criada dentro de uma função, significa tbm.que uma função pode conter uma outra função.
//Então vamos criar uma função chamada soma que recebe dois valores e essa função soma vai retornar uma outra função que recebe um terceiro parâmetro e aí sim ela vai mostrar a soma de
//"a"+"b"+"c"; explicando melhor: temos uma função chamada soma que recebe dois parâmetros(a, b), só que invés de retornar o resultado, nós retornamos uma terceira função que recebe um
//outro parâmetro(c)e só aí qdo.tivérmos os três parâmetros é que vamos invocar console.log(a + b + c)p/somar os três valores, tanto valores de "a" mais "b"que recebemos na chamada de 
//soma como o valor de (c) que foi passado na chamada da função que foi retornada, e p/somar os valores fazer assim: vamos chamar soma passando dois e três(soma(2, 3))=>o resultado disso  
//não é uma função?R.:Se o resultado disso é uma função, então vamos colocar depois dessa função soma(2, 3)=>vamos passar os parêntesis(),já que o resultado disso soma(2, 3)é uma função,
//pois a função function(c) retornada do resultado de soma(2, 3)recebe apenas um único parâmetro(c), onde pode passar-se p/ex.: 4, ao executar a soma dos três o resultado vai dar 9:   
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//9
//
//[Done] exited with code=0 in 1.146 seconds
//Pode-se fazer esse procedimento incluindo/armazenando tbm.numa constante conf.segue, tbm.retorna 9 conf.linha 100:
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4) 
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//9
//9
//
//[Done] exited with code=0 in 0.719 seconds.