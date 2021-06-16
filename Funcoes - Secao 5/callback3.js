//18/05/2021: 79. Funções Callback #03.
//
//Nesta aula vamos ver um exemplo de Callback dentro do Browser.
//  Exemplo de Callback no Browser
//Então vamos acessar document que é referência dentro do browser que é disponível globalmente dentro do seu código que aponta p/sua página, p/o DOM(Document Objetct Model)
//Como funciona o DOM em JavaScript?
//O DOM (Document Object Model) representa o mesmo documento para que possa ser manipulado. O DOM é uma representação orientada a objetos da página da web, que pode ser 
//modificada com uma linguagem de script como JavaScript. Os padrões W3C DOM e WHATWG DOM são implementados na maioria dos navegadores modernos. 
//Agora vamos chamar uma função que acessa os elementos a partir de uma TAG(Tags são estruturas de linguagem de marcação contendo instruções, tendo uma marca de início e 
//outra de fim para que o navegador possa renderizar uma página. Há uma tendência nos dias atuais para se usar as tags apenas como delimitadores de estilo e/ou conteúdo, 
//tanto em HTML quanto em XML.)que é o método get elements by tag name, se a gente prestar atenção, até pelo nome da função a gente percebe que ele vai retornar vários 
//elementos, e vou passar como parâmetro p/a função a tag que eu quero(body/corpo)e a resposta dessa função é uma array e p/eu acessar um elemento especificamente eu tenho
//que acessar 1 índice do array, então como eu quero o primeiro body[0]zero e associado a esse elemento eu vou colocar o onclick e vou atribuir p/onclick uma callback que
//será chamada sempre que o usuário clicar no body e esse onclick vai receber uma função recebendo como parâmetro()um evento(e)[não somos obrigados a declarar o evento por-
//que se a gente usar o evento a gente declara, se não usar, a gente não precisa declarar], em seguida eu coloco console.log('O evento ocorreu!'). Colocando essa sintaxe
//no console do browser, ao teclar enter: exibe retorno conf.linhas25 a 27, em seguida vou limpar o console e com isso a callback foi registrada. Uma vez registrada a 
//callback, ela só vai ser disparada qdo.um evento acontecer, nesse caso vai ser o clique do mouse, então qdo.eu clicar o console vai imprimir conf.linha28, então se eu
//der um refresh no browser e limpar, eu vou perceber que seu clicar no body não vai acontecer nada, porque a função de callback não foi registrada, então qdo. eu regis-
//tro a função, a mesma retorna no console conf.linhas 25 a 27. Eu não chamei a função, o evento não ocorreu, a função está esperando p/ser chamada, então qdo.eu for lá
//no browser e clicar aí sim o evento vai acontecer e vai imprimir no console conf.linha28, onde a callback vai ser chamada e posso clicar qtas.vezes e ele vai p/cada 
//clique disparar/chamar a callback novamente(enumerando-as: 1 O evento ocorreu!, 2 O evento ocorreu!, 3,4,5,6,e assim sucessivamente).  
//document.getElementsByTagName('body')[0].onclick = function (e) {
//    console.log('O evento ocorreu!')
//}
//f (e) {
//    console.log('O evento ocorreu!')
//}
//O evento ocorreu!
//
//Em que momento está se registrando o evento?R.:Conf.aula77->linha 41:na função(imprimir)que é no momento que eu passo a função como parâmetro p/o forEach e na linha 42
//ocorre a mesma coisa, eu estou registrando a função arrow(fabricante => console.log(fabricante))e passando-a como parâmentro p/o forEach, então no momento que eu passo 
//a função, estou dizendo que qdo.acontecer o evento de percorrer os elementos, chame essa função, ou seja, estou registrando nesse momento.
//Da mesma forma na aula78, o memso procedimento foi feito em vários momentos qdo.foi passado p/a função filter conf.linha 104 p/ex.: notas.filter(nota => nota < 7), ou
//seja passando a função(nota => nota < 7)p/o filter; então estou dizendo p/chamar essa função e armazene a mesma p/qdo.acontecer o evento de percorrer os ítens chame 
//essa função, da mesma forma como visto nessa aula callback 03, onde eu passei a função = function (e) { console.log('O evento ocorreu!') }p/o onclick conf.narrado acima.