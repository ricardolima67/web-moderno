//24/04/2021: 39.Função Vs Objeto

//Ainda no capítulo de fundamentos, o presidente da república em JavaScript é representado pela Função e o vice-presidente é representado pelo Objeto.
//Para explicar melhor vamos fazer console.log(typeof Object) conf.linha 6 trata-se de uma Function(Função) e se fizérmos uma pequena mudança conf.linha 7, ou seja, estamos instan-
//ciando uma função onde após a execução, retorna conf.linhas 8 a 12:então temos um Objeto criado a partir de uma Função, do tipo chamando CONSTRUTOR.  
console.log(typeof Object)
console.log(typeof new Object)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//function
//object
//
//[Done] exited with code=0 in 0.49 seconds
//Na linha 7 pode-se passar os parâmetros se quisérmos (console.log(typeof new Object()) passando os parêntesis que é exatamente a mesma coisa ou podemos omitir os parêntesis se qui-
//sérmos nesse caso que o resultado vai ser o mesmo, mas como estamos instanciando uma função, poderia ter colocado os parêntesis sem problemas.
//Então podemos fazer a mesma coisa com uma função que a gente definir, p/ex.: constante cliente recebe uma função vazia conf.linha 16 e linha 17 p/impressão, retorna conf.linhas18/21
const Cliente = function(){}
console.log(typeof Cliente)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//function
//
//[Done] exited with code=0 in 0.529 seconds
//Ou podemos fazer conforme abaixo, onde o efeito de retorno vai ser o mesmo, todavia com a palavra Objeto conf.linhas 26 a 30:
const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//function
//object
//
//[Done] exited with code=0 in 0.483 seconds
//E se quisérmos criar uma classe Produto com um bloco de programação vazio {} usando o padrão do ECMA Script 2015 que é a mesma coisa de (ES6) que é a versão nova do JavaScript e 
//em seguida colocando console.log(typeof Produto); uma Classe é só uma sintaxe SUGAR: um tipo de construção feita p/"adocicar" o código, ou seja, fazer algo de maneira mais simples.
//sendo mais um detalhe de sintaxe, mas na verdade por baixo dos panos trata-se de uma função, ou seja, é só um atalho de sintaxe, uma forma diferente de se construir uma função.
//Então qdo.executarmos essa sintaxe vai ser convertido p/ uma função conforme linhas 37 a 40.
class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//function
//
//[Done] exited with code=0 in 0.452 seconds
//E da mesma forma como podemos instanciar uma função, ele vai retornar um objeto a partir da instância dessa função(podemos chamar com os parêntesis), então executando: vai retor-
//nar conf.linha 47 e 48 se tirármos os parentesis da linha 45 new produto, vai dar o mesmo resultado.
class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//function
//object
//
//[Done] exited with code=0 in 0.659 seconds

//A forma de criar objetos em JavaScript é a partir de função, onde podemos ter objeto literal por exemplo, a partir de uma função: podemos instanciar uma função e ter as próprias 
//variávies que pertencem àquela instância que foi criada a partir do NEW e ele funciona como a idéia de Classe, tanto é que a classe que foi criada no JavaScript internamente ela
//é uma função, onde percebemos que a função exerce o papel de uma classe que é definir o molde da estrutura definindo as funções e as variávies, onde podemos ficar instanciando 
//quantas instâncias quisérmos a partir daquela função ou a partir da classe usando o detalhe de sintaxe que foi introduzido no ECMA SCRIPT 2015.
//Quando criamos um objeto de forma literal com parêntesis, na verdade já estamos instanciando um objeto com seus dados e atributos, ou seja, quando criamos um objeto de forma li-
//teral já temos uma instância, que é bem diferente da gente definir uma função, que é como se fosse a nossa classe, o nosso molde e a partir dessa função, dessa estrutura, a gente
//instancia quantos objetos a gente quiser( a partir da palavra reservada NEW, onde podemos criar múltiplas instâncias tanto a partir de uma função que pertence à própria PI padrão
//do JavaScript, podemos criar instâncias a partir do que definirmos, e tbm.podemos criar instâncias a partir de uma classe.)