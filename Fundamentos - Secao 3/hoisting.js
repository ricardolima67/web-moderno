//22/04/2021: 38.Entendendo o Hoisting

//Nesta aula será abordado mais um assunto que tem a ver com var e let, que é o conceito chamado Hoisting(Içamento/Erguer/Levantar/Elevação), onde será mostrado o efeito que acontece
//dentro de JavaScript(onde será feito um procedimento de sintaxe de código que seria um absurdo fazer em outras linguagens)porque a sentença de código dentro de um programa é lida de
//cima para baixo de forma sequencial, de tal forma que se usarmos uma variável primeiro temos que declará-la, entretanto, isso em JavaScript não acontece 100% porque no caso do VAR,
//quando declaramos uma variável usando o VAR, a mesma sofre um HOISTING(ELEVAÇÃO), ou seja, um içamento cujo o próprio interpretador da linguagem pega a variável e joga pra cima.
//Então abaixo vamos fazer uma sintaxe de código para exemplificar; colocando console.log(onde vamos imprimir o valor de "a"(obs.: não foi declarado o valor de "a")) e em seguida: na 
//linha debaixo(12)vamos declarar o valor de "a" recebe 2 e em seguida vamos ler o valor de "a" depois de declarado a linha(13), então ao executar esse código(em muitas linguagens 
//iria dar um problema dizendo: a variável "a" não existe pois não foi declarada no seu programa porque ele começa a ler da 1ªlinha, depois a 2ª, a 3ª e assim por diante), só que em 
//JavaScript a variável "a" vai ser içada(elevação p/cima) e a atribuição vai ser apenas na linha13, mas antes na linha12 vai haver a declaração da variável "a" onde não vai gerar 
//nenhum problema, então quando rodarmos a sintaxe, vai retornar conforme linhas 15 a 19.
console.log('a =', a)
var a = 2
console.log('a =', a)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//a = undefined
//a = 2
//
//[Done] exited with code=0 in 0.874 seconds
//Então ele vai dizer 1º que a variável "a" está undefined(indefinida), a variável "a" existe, e depois ele colocou o valor de 2 na linha 14, provando o que aconteceu foi o içamento,
//ou seja, a linha 14 imprimiu a sua busca na linha 13 onde a variável "a" recebe 2; então por tanto, a linha 12 retorna indefinida pelo motivo de haver elevação para um NADA, pois 
//só existe a sintaxe de código da própria linha 12, p/ex.: se fizérmos conf.abaixo, vai retornar conf.linhas 25 a 42:
console.log('a =', a)
// var a = 2
console.log('a =', a)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:1
//(function (exports, require, module, __filename, __dirname) { console.log('a =', a)
//                                                                                 ^
//
//ReferenceError: a is not defined
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:1:82)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.72 seconds
//Mencionado conf.linha31: Referência de Erro que a variável "a" não está definida batendo com a explicação nas linhas 20 a 22; em outras palavras o que o sistema fez foi isso:
var a
console.log('a =', a)
a = 2
console.log('a =', a)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//a = undefined
//a = 2
//
//[Done] exited with code=0 in 0.532 seconds      //Retornando do mesmo resultados das linhas 15 a 17 porque aconteceu o hoisting.

//Se for uma variável declarada dentro de uma função e fizéssemos conf.abaixo, declarando dentro de uma function teste e usámos a mesma sintaxe das linhas 12 a 14, e em seguida
//chamássemos a função teste(), teríamos, conf.linhas 62 a 66, o mesmo resultado das linhas 15 a 17 e 48 a 50, indicando que ela sofre o içamento:
function teste() {
    console.log('a=', a)
    var a = 2
    console.log('a=', a)
}
teste()
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//a= undefined
//a= 2
//
//[Done] exited with code=0 in 0.503 seconds

//Obs.: Existe algum motivo para fazermos esse procedimento de hoisting?R.:NÃO, não tem motivo, então, portanto, devemos começar a declarar nossas variáveis antes de usar, ou 
//seja, não há motivo para usar esse tipo de estratégia pois só faz confundir não trazendo benefício algum, é importante conhecer essa curiosidade da linguagem e dos seus efeitos
//porque dependendo da situação o resultado pode ser algo que não esperamos, porque entre o código que colocamos e aquele código que vai ser interpretado - o interpretador do JS
//vai fazer algumas manipulações podendo fgerar alguns efeitos estranhos, por isso que o professor sempre bate nessa tecla dizendo que JS é uma linguagem que pode ser estranha em
//alguns momentos comparado a outras linguagens de programção. 
//Quando trabahamos com o LET b recebe 2 conf.abaixo vai gerar um erro; conf.linhas 78 a 94.
//console.log('b =', b)
//let b = 2
//console.log('b =', b)

//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:1
//(function (exports, require, module, __filename, __dirname) { console.log('b =', b)
//                                                                                 ^
//
//ReferenceError: b is not defined
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:1:82)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.781 seconds
//Onde na linha 83 está dizendo que "b" não está definido, ou seja, o efeito de içamento(hoisting) qdo.definimos uma variável com Let não ocorre, portanto, ficar esperto nisso.
//JavaScript Hoisting
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//Hoisting é o comportamento padrão do JavaScript de mover as declarações para o topo. (Seja o topo do contexto do código ou do topo da função que se está trabalhando.)
//O professor menciona sobre um vídeo em seu canal no YouTube sobre esse tema(Hoisting)entitulado Aulas de Programação((28)Dicas JavaScript)falando sobre coisas mais avaçandas e mais
//cotidianas dessa ferramenta na linguagem JS, acessando: youtube.com/aulasdeprogramacao, inclusive falando sobre outros assuntos referente linguagem de programação.



