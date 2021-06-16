//30/04/2021: 52.Contexto de Execução: Browser vs Node
//
//É muito importante termos consciência de quando estivérmos programando em JavaScript sobre o RunTime que estamos executando; se estivérmos executando JavaScript no frontend
//estaremos executando dentro do browser, se estivérmos executando JavaScript no backend estaremos executando no node.
//Se tivérmos consciência dessas questões envolvidas em cada runtime, teremos mais consciência de como programar JavaScript.
//Linguagem C-Like: é uma linguagem que tem semelhança com a linguagem C, que é uma linguagem muito mais antiga que JavaScript, CSharp, Java e todas essas linguagens beberam 
//dessa fonte, onde pegaram os mesmos tokens, p/ex.: se pegarmos PHP definimos o bloco com chaves{} e do mesmo modo p/o JavaScript, tbm.p/o Java, tbm.p/o CSharp, portanto, todas
//essas linguagens usam chaves e por sua vez tendo muito essa influência do C que é pegar os tokens, ou seja, os símbolos da linguagem para rodar suas linguagens nos seus pro-
//gramas, então o problema de JavaScript não é esse, o problema de JavaScript é porque além de ter algumas coisas que outras linguagens não tem, algumas flexibilizações tornam
//algumas coisas estranhas, as pessoas tem que conhecer essas estranhezas(diferenças na linguagem)p/poder lhe dar e saber como explorar a linguagem, entender os efeitos colaterais
//de algumas decisões podem ocorrer, procurando saber como lidar com eles e tbm.tem a questão do runtime, cuja pergunta é: onde estamos executando o código?R.:Temos que ter consciência
//de qdo.estamos usando o browser estaremos trabalhando muito com operações assíncronas p/poder chamar alguma coisa no backend e saber que tem um callback, conhecer padrões de projeto
//que o JavaScript implementa. 
//Entrando no browser vamos abrir o console teclando c/ botão direito - inspecionar no navegador ou teclando F12.
//Acessar o browser, abrir o console: Aqui dentro temos o objeto global que representa o escopo global dentro de uma aplicação JavaScript rodando no browser que chama-se Window
//trata-se de um objeto com muitas dentro dele tendo uma quantidade gigantesca de propriedades e funções. 
//Uma forma de acessar no contexto global o objeto window é usando o "THIS"(que mostra o objeto window), se perguntarmos se This é estritamente igual a window(this === window)-enter
//o browser retorna true(verdadeiro) porque no contexto global qdo.estamos fora de funções ou dependendo da forma que se está escrevendo(segundo o prof.o this é uma das estranhezas
//do JavaScript pois ele pode variar dependendo de quem chamou a uma determinada função).  
//Colocando um exemplo variável chamada "a" recebe texto:
//> ar a = "Texto"
//< undefined
//Criada a variável "a" com a palavra reservada var vai bater diretamente no contexto global, isso é ruim porque pode gerar uma quantidade de conflitos, uma variável pode sobres-
//crever a outra e podemos ter bugs sérissimos na aplicação por conta disso, então se colocarmos window.a vamos ter acesso à variável "Texto", se colocarmos:
//> var a = 123
//< undefined
//Acabamos de sobrescrever o contéudo da variável "a" que estava no objeto global window p/123 e não gerou nenhum erro, então se fizérmos: 
//> window.a
//< 123, ele vai mostar agora 123 e podemos chamar tbm. this.a que vai retornar 123 da mesma forma:
//> this.a
//< 123
//Se criármos uma variável usando let, se tentarmos acessar window.b, essa variável não está no contexto global, embora ela seja uma variável global. A variável declarada no 
//escopo global ainda será global, mas não irá p/o objeto window.b, se declararmos novamente let b = 123 vai retornar um erro: Uncaught SyntaxError: Identifier 'b' has already
//VM435:1 been declared at <anonymous>1:1 => indicando que já está declarado, retornando um problema diferente do comportamento de var, porque simplesmente o var vai declarar 
//de novo e substiui no escopo global pelo menos se tentarmos declarar duas variáveis do escopo global com let vai gerar um problema.
//> let b = 123
//< undefined
//> window.b
//< undefined
//> let b = 123
//<xUncaught SyntaxError: Identifier 'b' has already VM435:1 been declared at <anonymous>1:1
//Continuando da linha 34, se continuarmos acessando this.b o sistema tbm. não vai achar, retornando undefined, entretanto se chamarmos "b" a variável vai estar no sistema, 
//retornando 123:
//> b
//< 123 
//Então existe uma diferença, o var vai diretamente p/o window e qdo.declaramos com o let ou com o const não vai p/o window; p/ex.: se fizérmos conf.abaixo:
//> const c = 456
//< undefined
//> window.c
//< undefined
//Ao fazer o window.c p/trazer o resultado da linha 46, faz igual ao let, embora ainda seja de acesso global, todo mundo vai ter acesso a uma variável, isso é muito ruim, se 
//fosse uma constante global tudo bem, pois não vai mudar nunca uma vez que não tem como ninguém alterar, agora se tivérmos uma variável compartilhado com todo o sistema, isso
//significa que qualquer pessoa, que qualquer código no nosso sistema pode mexer naquela variável, tornando-se algo altamente perigoso, evitar portanto de tocar no escopo global,
//a não ser que sejam constantes, pois não tem como variar e ter risco de variar no programa e tbm. de alguém de mexer no programa causando bugs.
//Seguindo a linha racicíonio se criarmos uma função conf.linha58 p/ex.: 
//Se compararmos essa função tbm. estará disponível de forma global, pois se chamarmos ela vai retornar true(verdadeiro) neste contexto, se fizérmos conf.linha 61 e se fizérmos
//como linha 63: todas vão executar normalmente, retornando true, porque qdo.criamos uma função nomeada(f1()), a mesma será anexada, colocada dentro do window.
//>function f1() { return this === window }
//< undefined                   
//> f1()
//< true
//> window.f1()
//< true
//< this.f1()
//> true
//Agora se criarmos uma função constante chamada de f2 recebe um arrow function(this === window)que vai mostar no console window, vai retornar verdadeiro
//> const f2 = () => console.log(this === window)
//< undefined
//> f2()
//< true
//Mas se fizérmos this.f2 e tentar executar, o mesmo rertornará com erro, dizendo que f2 não é uma função:
//> this.f2()
// <xUncaught SyntaxError: this.f2 is not a function at <anonymous>1:6 
//Se fizérmos window.f2() vai dizer tbm.qur não é uma função, retornando o mesmo erro da linha 71.
//>window.f2()
//<xUncaught SyntaxError: this.f2 is not a function at <anonymous>1:8 
//Se chamarmos apenas f2(): aí retorna como função(verdadeiro)
//> f2()
//< true
//Continuando da linha 76: constantes e variávies declaradas com let não irão diretamente p/o objeto global window, eles ficam em memória dentro do browser e a gente não consegue 
//acessar o objeto que tem todas as constantes e variávies declaradas e elas são globais, isso significa que se tentarmos criar p/ex. uma constante conf.abaixo, o sistema vai re-
//tornar dizendo que não pode declarar, porque esse identificador f2()já foi declarado anteriormente; e mesmo se trocar o valor tbm.vai retornar o mesmo erro conf.linha 84:
//> f2 = 123 
//<xUncaught SyntaxError: Assignment to constant variable at <anonymous>1:4
//Uma das formas que temos como fugir do escopo global é criarmos objetos conf.segue:
//> let pessoa = { nome: 'Tina' , falar: function() { return 'Eu sou ${this.nome}"" }}  esse nome não está no escopo global(tina)e sim no escopo do objeto pessoa, conntinuando a 
//sintaxe: falar recebe uma função que retorna eu sou this.nome, então neste caso estamos criando atributo chamado: falar, que recebe uma função anônima que retorna eu sou e 
//dentro do template string delimitado por crase e dentro de uma expressão dólar entre chaves this.nome; quem é o this aqui?, será que o this é window?R.:Não, nesse o this é a 
//própria pessoa, então ao executar a sintaxe, temos:
//< undefined     se colocarmos a sintaxe abaixo, vamos ter:
//> pessoa.falar()
//< "Eu sou Tina"  esse retorno this.nome refere-se ao acesso ao nome de Tina, então por fora se fizérmos conf.linha 92, vai retornar que não tem nome conf.linha 93
//> this.nome
//< undefined
//Então neste caso o this é exatamente o window:
//> this === window
//< true
//Então qdo.estivérmos dentro de um contexto de objeto this, ele vai apontar p/o próprio objeto, ou seja, ao invés de poluir o escopo global a gente está poluindo um objeto nosso,
//de controle nosso, a única coisa que tocamos no escopo global é o nome pessoa(linha85), então pessoa está de forma global, mas em vez de ter 10 ou 20 funções no global, nós temos
//apenas um único objeto que agrupa todas essas funções.
//Podemos adicionar p/ex. pessoa recebe verificar escopo que recebe tbm.uma função anônima para retornar this estritamente igual a window, p/comparar se realmente nesse caso qdo.
//a gente chamar uma função a partir de pessoa se esse this é estritamente igual ao window, então executando conf.linha 105, temos: resposta False como retorno, porque o this não 
//é igual ao window e sim o this é igual a pessoa.
//> pessoa.verificarEscopo = function() { return this === window } 
//< f () { return this === window }
//> pessoa.verificarEscopo()
//< false
//Agora entrando no ambiente VScode onde vamos criar um novo arquivo - command N: selecionando a linguagem JavaScript p/ fazer uns testes, então se colocármos conf.abaixo:
let a = 3

console.log(this.a)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//undefined
//
//[Done] exited with code=0 in 10.698 seconds
let a = 3

console.log(this.a)
console.log(global.a)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//undefined
//undefined
//
//[Done] exited with code=0 in 0.593 seconds
//A impressão do valor da linha109 e 118, ambos serão undefined, onde não vai encontrar em this.a e tbm. em global.a, o global dentro do node equivale ao objeto window.
//Continuando o raciocínio da linha 127, se colocarmos global.b = 123 conf.linha129, a linha 131 retorna 123 conf.linha135:
let a = 3

global.b = 123

console.log(this.a)
console.log(global.b)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//undefined
//123
//
//[Done] exited with code=0 in 0.669 seconds
let a = 3

global.b = 123
this.c = 456

console.log(a)
console.log(global.b)
console.log(this.c)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//undefined
//123
//456
//
//[Done] exited with code=0 in 0.686 seconds
//A resposta acima refere-se ao retorno das linhas 140 e 144 imprimindo 456.
//E se agora fizérmos conf.linha162, temos: linha 164 retornando 3 e a linha 167 repetiu as linhas141 e 144, onde o this é igual a module.exports.
let a = 3

global.b = 123
this.c = 456

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//3
//123
//456
//456
//
//[Done] exited with code=0 in 3.084 seconds
//
//Agora se fizérmos conf. linha 181(estritamente igual a this), ele vai retornar true conf.linha 187.
let a = 3

global.b = 123
this.c = 456

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//3
//123
//456
//456
//true
//
//[Done] exited with code=0 in 2.809 seconds
//Então se fizérmos this.c conf.linha 175  e colocar algum valor(trocar 456 por outro), isso significa que ele vai exportar esse valor para fora desse arquivo por meio do comando
//module.exports. Dentro de Node cada arquivo é um módulo, muito diferente de programar na web e no qual todos os arquivos é minificado gerando um arquivo só em que os dados estão 
//disputando dentro desse arquivo no escopo global. Então se fizérmos conf.linhas 198, 199 e 206 que seria o module exports, vamos ter o retorno conf.linha 212: ref.a um objeto
//pra fora com todos os seus respectivos valores, isso seria equivalente o que mais se faz em node conf.linha 230, cujo retorno está na linha 237.
let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//3
//123
//456
//456
//true
//{ c: 456, d: false, e: 'teste' }
//
//[Done] exited with code=0 in 0.68 seconds
let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

module.exports = { e: 456, f: false, g: 'teste' }
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//3
//123
//456
//456
//true
//{ c: 456, d: false, e: 'teste' }
//
//[Done] exited with code=0 in 0.712 seconds
//module.exports = { e: 456, f: false, g: 'teste' } = as pessoas estão mais acostumadas a ver esse tipo de expressão do que usar o this(linhas219 e 220)e quem é o this dentro
//de um arquivo?R.:É o module.exports. Quando criamos uma variável usando o let recebe 3 (conf.linha 216)fica local dentro desse arquivo, não é exportada, não fica no global, e
//é local.
//Agora vamos fazer mais um teste colocando uma variável abc(linha258), retorna o resultado 3 conf.linha267.
let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

abc = 3
console.log(global.abc)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//3
//123
//456
//456
//true
//{ c: 456, d: false, e: 'teste' }
//3
//
//[Done] exited with code=0 in 1.801 seconds
//Então nesse caso da linha 258 foi criada uma variável "maluca", ou seja, sem var e sem let, portanto, isso significa que qdo.criamos uma variável dessa forma pensando que se 
//se está criando uma variável inofensiva, estamos colocando uma variável diretamente no objeto global(linha258 global.abc)do node, então não fazer esse procedimento da linha 258.
//Essa aula foi mais para sabermos o Runtime, ou seja, em qual local estamos trabalhando, executando o JavaScript e conhecer as especificidades de cada um dos ambientes.
//Entender melhor os RunTimes para que possamos programar melhor em JavaScript e sempre que possível fugir do escopo global(não colocar variávies dentro do escopo global), sempre
//trabalhar com constantes e se precisarmos tocar o escopo global, sempre tocar a partir de um objeto dentro de objeto. 