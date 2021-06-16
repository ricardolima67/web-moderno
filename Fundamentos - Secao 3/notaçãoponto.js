//26/04/2021: 41.Notação Ponto

//Nessa aula vamos abordar sobre o asssunto: Notação Ponto. É algo extremante básico da linguagem JavaScript que é acessar membros de uma função ou um objeto.
//A seguir vamos criar uma função e definir um atributo interno dessa função e vamos acessá-la usando a notação ponto.
//Na linha 6 percebemos de cara a notação ponto para acessar a função log() de console e poderámos descobrir o que é esse console p/seu tipo conf.linha 7:
console.log()
console.log(typeof console)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//   E qdo.executado retorna como OBJETO.(linha 10)em JavaScript.
//object
//
//[Done] exited with code=0 in 0.686 seconds
//Em seguida vamos operar um arredondamento linha 14: (Ceil é teto, leva o arredondamento p/cima e Floor é p/baixo), o Math é um Object dento do JavaScript.
console.log(Math.ceil(6.1))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//
//7
//
//[Done] exited with code=0 in 0.645 seconds
//Continuando da linha 13, nós acessamos o Math usando um ponto para acessar uma função definida dentro desse objeto.
//Em seguida vamos criar uma constante com nome objeto um recebe um bloco vazio e em cima do objeto p/criar dinamicamente um atributo dentro de um objeto podemos usar a notação ponto
//mesmo que o atributo não estaja no objeto( agente coloca objeto ponto o nome do atributo recebe alguma coisa, ele cria dinamicamente um atributo ), podemos usar tbm.aquela notação
//de colchetes[]parecendo como elemento de uma sessão de uma array conf. linha 25e26, onde as duas linhas são equivalentes, pois a linha26 vai sobrescrever um atributo que já tinha(25)
const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'Bola2'     
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//
//[Done] exited with code=0 in 0.664 seconds

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'     
console.log(obj1.nome)

//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Bola
//
//[Done] exited with code=0 in 0.545 seconds

const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'Bola2'     
console.log(obj1.nome)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Bola2
//
//[Done] exited with code=0 in 0.507 seconds

//Conf.resposta de impressão das linhas 36 a 39 e 45 a 48 mostram que o sistema sobrescreve a anotação da linha 32 conf.executado p/linha 43, demonstrando que as duas anotações
//são válidas(só que a linha 43 dá um pouco mais de flexibilidade, porque a partir de um texto, de uma string, podemos acessar o atributo de um objeto, podendo tbm.colocar atributos
//com espaço, porém não é recomendado), ou seja, não é interessante usarmos este tipo de artifício/flexibilidade que a linguagem nos dá, porque na hora de acessar vamos sempre ter 
//acessar conf.linha 43 e não poderemos usar a notação ponto conf.linha 32(que é o correto p/ser usado, por ser mais conveniente e mais enxuta).

//Agora vamos criar uma função chamada Obj(c/Ó maiúsculo)conf.linha 64 recebendo como parâmetro dessa função o nome e dentro da função vamos colocar a palavra reservada a linguagem 
//chamada THIS.NOME que significa o nome associado ao objeto que for criado a partir dessa função, onde função funciona como um pouco como uma classe em linguagens ÓÓ, como linguagens
//Java p/ex.;então aqui estamos trabalhando com função e podemos sim instanciá-la, ou seja, o que estamos dizendo usando THIS.NOME recebe nome conf.linha 65 é que vamos receber o 
//atributo nome(nome)da linha 64 por parâmetro e vamos atribuir a this.nome e esse nome ficará visível para quem criar ou instanciar um objeto do tipo Obj(que é a função da linha 64),
//em outras palavras, vai ficar público; em seguida vamos criar uma constante obj2 recebe new Obj(que é a função da linha 67) e em seguida vamos passar um parâmetro() para evitar 
//ficar undefined passando o nome Cadeira(string) que vai ser atribuída p/o this.nome linha 65, ou seja, vai ter o obj2 conf.linha 64 um atributo nome que ficou visível(público) por-
//que associamos o nome ao this(linha 65); se tivéssemos criado simplesmente uma variável(uma var), ela ficaria dentro do escopo da função(linha64) e não ficaria visível fora, portanto 
//no nosso exemplo linha 64 usando a palavra THIS juntamente com a notação ponto(this.nome)65 vai ficar visível p/fora. Vamos colocar tbm.linha68 uma constante chamada obj3 recebe new
//Obj('Mesa') criando outro objeto para vermos que são duas instâncias separadas e em seguida vamos imprimir no console conf.linha 69, ao executar - retorna conf.linhas 70 a 73   
function Obj(nome) {
    this.nome = nome 
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)

//Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Cadeira
//
//Done] exited with code=0 in 0.506 seconds
//Em seguida vamos colocar console.log(obj3.nome):

function Obj(nome) {
    this.nome = nome 
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Cadeira
//Mesa
//
//[Done] exited with code=0 in 0.587 seconds
//Então fica fácil perceber como a notação ponto é presente dentro da linguagem JavaScript, é forma que temos de acessar os membros, atributos, pode-se acessar eventualmente algum
//tipo de função que poderíamos colocar, p/ex.usando/associando a função exec()linha91,92 e 93(partindo das linhas 89 a 99), retornando conf.linhas 100 a 105:
function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    } 
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)  
obj3.exec()
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Cadeira
//Mesa
//Exec...
//
//[Done] exited with code=0 in 0.572 seconds
//Então conseguimos a partir do THIS usando a notação ponto(this.nome) criar tanto atributos como tbm.funções que serão expostas pra fora da função qdo.for instanciada, podemos 
//usar a notação ponto pra acessar os atibutos(nome linhas97 e 98)que estão visíveis dentro de um determinado objeto, seja usando a partir da notação literal{}linha 24, seja 
//usando a partir de uma função(linha 89 a 94), ou usando um objeto da própria API(MATH) do JavaScript, ou a própria função console que usamos o tempo todo.
//A Notação Ponto está presente em toda linguagem e é extremamente importante sabermos dominar esse assunto e ver como ela é importante tbm.na forma de organização do JavaScript,
//onde a gente acessa os membros de um objeto, os membros de uma função sempre a partir da notação ponto. 