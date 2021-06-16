//12/05/2021: 70. "this" pode Variar
//
//Por meio de background de orientação a objeto, existe uma palavra reservada chamada em muitas liguagens, que é muito conhecida por "this" ou a palavra "self", onde algumas
//linguagens chamam de self ou de this.
//"THIS" seria uma forma de referenciar o objeto atual daquela execução; vamos pegar um exemplo clássico do Java: Java temos uma classe que é uma estrutura, todo código do
//Java acontece dentro de uma classe e dentro de uma classe podemos criar objetos a partir de uma classe; a classe é como se fosse um molde, uma planta baixa de uma casa,
//e o objeto criado a partir daquela classe a gente pode criar objetos a partir de uma mesma classe, p/ex.: Temos uma classe chamada Aluno(Aluno tem um nome e tem uma nota),
//ou seja, qdo.gente define uma classe de um aluno que tem um nome e tem uma nota, isso significa que todo aluno dentro daquele sistema vai ter nome e nota, ou seja, vai ter
//dois atributos, então a classe definiu quais as características de um aluno e a partir dessa classe a gente consegue criar objetos, então cada objeto criado vai ter os dois
//atributos(nome e nota)e p/cada objeto, ele vai ter um valor independente um dos outros, portanto, um aluno chamado João com nota 8.3, a Tina com nota 9.4, outro aluno vai
//ser o Ricardo com uma nota 9.3, então, temos todos os alunos, todos os objetos, respeitando aquela estrutura definida na classe, só que os dados pertencem a cada um dos 
//objetos. O fato é que qdo.estamos dentro de um determinado código que pertencem a um objeto, uma forma que temos de acessar alguma coisa que pertencem ao dono daquele  
//contexto de execução é usando a palavra "this"; o "this" acessa quem ali naquele momento é o dono daquele código que está sendo executado naquele momento, em Java ele vai
//ser o objeto e em JavaScript esse é um conceito bem mais confuso, uma das estranhezas de JS é o fato que o "this" pode variar dependendo de como a função é chamada. 
//Abrindo o browser, na ferramenta de console, vamos fazer alguns testes:
//Vamos criar uma função chamada f1() que vai retornar {console.log(this é estritamente igual(===)ao objeto window) }, então executando/chamando f1()que é a função conf.linha
//22 retorna: true(verdadeiro)na linha22.
//(Obs.:Toda vez que o console do browser no Google Chrome termina sua tarefa, ele retorna mensagem undefined, significa que ele terminou a sintaxe de comando/código, de acordo
//com as linhas 20 e 21, ou seja, terminoua linha20 imediatamente a linha 21 aparece=>undefined).
//function f1() { console.log(this === window) }
//undefined
//f1()
//true
//undefined 
//Então qdo.usamos a palavra"this"(linha20)neste contexto, de fato o "this"aponta p/o objeto global do browser, do qual está sendo executado dentro de um contexto global.
//"This"é sempre o objeto que está sendo referenciado naquele contexto de execução, que é o dono daquela função que está sendo executada naquele contexto. Então no caso de Java
//Script, a confusão é porque esse "this" pode variar, dependendo da forma que a gente chamar a função, esse "this" pode não mais apontar p/window(conf.linha20)e apontar p/outra
//coisa totalmente diferente. 
//Conf.dito no parágrafo anterior, o "this" pode variar: criada a função(linha20)onde a mesma foi chamada no escopo global do browser(linha22),que de fato o "this"aponta p/o objeto
//global que é o window, mas se ela for chamada a partir de um clique na própria página vazia do browser, ele vai disparar a chamada dessa função f1()[linha22]e vamos perceber que
//qdo.a função for disparada a partir do clique do mouse, o "this" neste contexto já não será o objeto global(window), então p/fazer este teste, vamos fazer o seguinte: vamos 
//digitar document(que refere-se ao documento da página, que representa a página)ponto get element by tag name(cujo parâmetro será o body(corpo)dessa página)chamando o primeiro
//elemento[0](zero)ponto on click vai receber a função f1()(lina22), então qdo.a gente associa a onclick à função f1 sem parêntesis dando enter ele vai preencher automaticamente 
//a linha37 e qdo.clicarmos na área de cima da página do console do browser vamos perceber que estamos chamando essa função e a mesma vai imprimir o resultado false(falso)conf.
//sintaxe de código abaixo(linha36):
//document.getElementsByTagName('body') [0] .onclick = f1
//f  f1() { console.log(this === window) }
//false
//A função da linha20 era verdadeiro, agora por esse outro método: é falso, isso ocorre porque o "this" varia de acordo com a forma como a gente chama a função, e esse sem dúvida
//é um dos motivos de confusão no JavaScript.
//Agora vamos fazer um outro exemplo criando uma função(function)chamada f2() recebe{}console.log(this é estritamente igual(===)a document)
//function f2() { console.log(this === document) }
//undefined
//f2()
//false
//Conf.linha43 fazendo o teste p/chamar o console: ele retorna Falso conf.linha44, então a gente sabe que no contexto global o "this" não aponta p/document, será que qdo.a gente 
//clicar c/o mouse de fato o "this" vai apontar p/document?; então vamos colocar document ponto get elements by tag name colocando o parâmetro body(corpo) pegando o primeiro ele-
//mento(conf.feito nas págs.32 e 33)ponto onclick passando a função f2 conf.sintaxe de código linha49 e qdo.clicarmos na parte de cima do console da página vamos ter o resultado
//da impressão do console como Falso(false).
//document.getElementsByTagName('body') [0] .onclick = f2
//f  f2() { console.log(this === document) }
//false
//Então vamos criar uma constante chamada body e vamos atribuir o body p/essa função: document.getElementsByTagName('body') [0] conf.linha54 e vamos colocar a função 2 conf.linha56
// const body = document.getElementsByTagName('body') [0] 
//undefined
//function f2() { console.log(this === body) }
//undefined
//document.getElementsByTagName('body') [0] .onclick = f2
// f  f2() { console.log(this === body) }
//true               ou seja, continuando da linha51: retorna como true(verdadeiro); então nesse caso quem é que de fato representa o "this" qdo.a gente chamar a função f2(linha56)
//a partir do clique?R.:É o próprio elemento que estamos clicando(linhas 56 e 57, por causa do body), se a gente chamar apenas f2() p/meio do clique diretamente no console(parte de
//cima da página), vamos ver que não é o body que está apontando p/o "this", e sim o objeto window já havia sido mostrado anteriormente, portanto o mesmo vai retornar Falso(false).
//Agora vamos abordar Arrow Function; existiram dois grandes motivos p/se criar Arrow Function: 
//1º) É o motivo de diminuir a sintaxe, escrevendo-se um arrow function de forma reduzizada, podendo criar uma função arrow reduzida, criando uma constante chamada f3 recebe nenhum
//parâmetro()=>vazio, e em seguida a gente quer jogar => no console.log se this é estritamente igual a window;
//const f3 = () => console.log(this === window)    ao clicar -> vai aparecer undefined conf.abaixo:
//undefined                                        executando a função f3 da linha 64, temos conf.abaixo, onde retorna verdadeiro(true linha67): 
//f3()
//true
//undefined
//Então a gente percebe que a sintaxe de se escrever é mais reduzida, mais enxuta gerando mais ganhos(tempo, organização, etc...); mas existe ainda um outro grande motivo(2ºmotivo)
//p/termos uma função arrow que é o fato de termos um "this" que não varia, agora vamos pegar um exemplo associado usando a função f3 apontando no onclick f3, onde f3 está testando
//se o "this " é igual a window conf.sintaxe abaixo; então qdo.clicarmos no body, vamos ver que continua verdadeiro, conf.linha74 e se digitarmos apenas f3()sem a sintaxe abaixo, 
//tbm.vai retornar como true(verdadeiro)conf.linhas75 e 76, ou seja, chamamos a função a partir do clique no mouse na tela de cima do console google chrome:
//document.getElements ByTagName('body') [0] .onclick = f3 () => console.log(this === window)
//true
//f3()
//true
//undefined
//Isso demonstra que qdo.foi uma função normal deu falso; qdo.temos uma função tradicional em JavaScript usando a palavra Function e passando parâmentros, o "this" pode variar de
//acordo com quem chamou a função, então temos que entender um pouco da linguagem p/entendermos em que contexto o "this" representa o window(dependendo de como a função foi chamada),
//se representa o objeto ou o elemento clicado indicando como vai se acessar a função. Mas se estivérmos usando uma função com Arrow Function, o "this" não varia nunca.
//Então o "this" vai ser definido quando?R.:O "this" será definido no momento que a função for definida dentro do contexto apresentado, chamado de "this léxico", ou seja,o "this"foi
//definido no contexto que a função foi escrita p/ex:conf.acima(linha66)dentro do escopo global(const f3 = () => console.log(this === window)), então no momento que ela foi definida
//o "this" representa no escopo global o window, tanto é que se for feito diretamente no browser conf.linha90 a sintaxe ref.a linha66 vai retornar true conf.linha91; então no contexto
//que foi definida a função, ou seja, modo que a função foi escrita, o "this" é igual a window; então não importa se a gente chamar a partir do clique do body, pois por tratar-se de 
//uma função arrow e o "this" foi amarrado no momento que a função foi escrita, não importa por onde a gente chamou a função arrow porque o "this" nunca irá variar se a função for do
//tipo Arrow; então as grandes motivações p/criar uma função nova na versão do ECMASCRIPT2015 foi que a função arrow é mais enxuta no que diz respeito à sintaxe e outro grande motiva-
//dor da função arrow é o fato de que o "this" passou a ser associado ao local na qual a função foi escrita, ou seja, um "this" associado ao contexto da palavra(contexto léxico).
//this === window
//true