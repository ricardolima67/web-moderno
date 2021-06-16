//19/05/2021: 81. Tipos de Declaração
//
//Nessa aula vamos ver formas diferentes de declarar funções, onde será mostrado uma terceira forma de declarar função.
//A forma tradicional que chamamos de Function Declaration(Declaração de Função)e a forma que a gente usa a palavra reservada function seguido do nome da função,
//function soma()contendo os parâmentros da função(x,y){}e as chaves que refere-se ao corpo da função(que recebe os objetos)que no caso aqui é return x + y, re-
//tornando a soma dos parâmetros. 
//  Function Declaration 
function soma(x, y) {
    return x + y
}
//Uma outra forma que temos p/declarar, que é a gente declarar uma função, declarando uma função anônima e atribuindo-a a uma variável ou constante, é o que 
//chama-se de Function Expression(Expressão da Função) e a forma de faze-la é colocar o nome da constante ou variável que a gente queira armazenar essa função
//anônima juntamente com os parâmetros e o corpo da função, conf.abaixo:
//  Function Expression
const sub = function (x, y) {
    return x - y
} 
//A outra forma(a terceira forma) é misturar essas duas idéias(function declaration+function expression), onde vamos ter a Named Function Expression, pois 
//além de ter uma constante que vai armazenar essa função, em vez de ser uma função anônima, podemos ter uma função nomeada; então eu coloco constante cha-
//mada mult recebe função com o nome tbm.de mult()que recebe os parâmetros juntamente com o corpo da função{}; tem alguma vantagem em usar essa terceira for-
//ma?R.:A única vantagem que se pode ter nessa construção que é muito pouco usada é o fato de que a gente em algum momento que estiver DEBUGANDO O CÓDIGO, ou
//o STACK 3 aparecendo p/ex.da execução dessa função, o nome dela vai aparecer no stack(no caso é o mult após function)e não como uma função anônima, então 
//isso seria uma das vantagens, mas via de regra essa é uma forma pouco usada, conf.abaixo:
//  Named Function Expression
const mult = function mult(x, y) {
    return x * y
}  
//Existe algumas diferenças entre as declarações function declaration e function expression?R.:Sim, existe uma que é a seguinte: no momento que eu declaro a 
//função como function declaration eu posso antes mesmo de declarar a função, chamar o console.log()p/impressão na tela, ou seja, mesmo antes de ter a função
//declarada, eu posso chamar a função(33)que correr tudo bem, porque ado.a gente define uma função(34 a 36), o interpretador do JavaScript primeiro carrega as
//funções, lê todas as funções do arquivo, carrega essas funções e deixe-as preparadas e em seguida começa a executar o seu código, então isso significa que 
//na linha 33 o interpretador já tem carregado todas as funções previamente declaradas dessa forma(34 a 36), conf.retorno linha38.
console.log(soma(3, 4)) 
function soma(x, y) {
    return x + y
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//7
//
//[Done] exited with code=0 in 0.507 seconds
//Se eu fizer o mesmo procedimento da function declaration na function expression colocando antes a função console.log(sub(3, 4))de acordo com as linhas 15
//a 17 ele vai gerar um erro mencionando que o sub is not defined, ou seja, ela só permite chamar essa função console.log(sub(3, 4)) depois da sintaxe de 
//código das linhas 15 a 17, ou seja, somente depois que ela foi declarada; o mesmo ocorrendo com a Named Fuction Expression(console.log(mult(3, 4)). 