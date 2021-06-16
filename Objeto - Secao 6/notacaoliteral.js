//03/06/2021: 96. Notação Literal.
//
//Na versão do ECMASCRIPT 2015 ocorreu muitas mudanças em todas as áreas da linguagem e algumas delas sofreram melhorias sobre a notação literal de objeto.
//Vamos criar três constantes, consta a recebe 1, const b recebe 2, e const c que recebe 3:
const a = 1
const b = 2
const c = 3
//Atingamente, antes da versão ES6, a gente tinha que criar objeto usando a seguinte duplicidade: a dois pontos a, vamos supor que a gente quer criar uma
//variável a que é o valor da const a(5), então a gente tinha que colocar a : a, b : b, c: c, só que esse tipo de duplicidade não é mais necessário, on-
//a gente pode simplesmente fazer const obj2 = { a, b, c} que automaticamente ele vai assumir o nome da constante que vai ser o nome do atributo criado 
//dentro desse objeto, obviamente se a gente quiser mudar o nome do atributo, temos que colocar a notação { a: a, b: b, c: c} que permite que a gente mu-
//de o nome do atributo e não seja exatamente o nome da constante, mas qdo.temos esse caso que são exatamente iguais, podemos nos beneficiar dessa nova
//sintaxe mais reduzida, console.log(obj1 e obj2)
const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj1, obj2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }
//
//[Done] exited with code=0 in 0.535 seconds
//
//Uma outra melhoria vem qdo.a gente quer criar dinamicamente um atributo em um objeto usando p/ex.: uma string, onde temos um nome de um atributo e te-
//mos valores neste atributo, é muito fácil em JavaScript da gente criar um atributo a partir do nome ou valor de uma variável, onde a gente pode p/ex.:
//usar aquela notação de chaves(const obj3 = {})p/criação de um objeto literal colocando objeto 3 colchetes com o nome do atributo recebe o valor do a-
//tributo, então se imprimir no console o valor desse objeto 3 e vai ter um atributo nota, conf.linha33:  
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ nota: 7.87 }
//
//[Done] exited with code=0 in 0.532 seconds
//
//Da mesma forma que foi feito(26 a 31)na notação literal de objeto, na versão nova tbm.suporta este tipo de nomenclatura, onde a gente coloca entre col-
//chetes no caso a constante ou variável que a gente quer usar p/criar o atributo do objeto e ele vai pegar o valor da constante ou variável e criar um
//atributo com esse valor e em seguida console.log(obj4), executando é exatamente igual a linha 33(44).
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ nota: 7.87 }
//{ nota: 7.87 }
//
//[Done] exited with code=0 in 0.471 seconds
//
//Criando um outro objeto: constante obj5, uma das mudanças em relação a notação literal de objeto que foi simplificada p/como definir funções dentro de
//um objeto literal, a forma antiga é a forma padrão chave/valor, onde a gente coloca p/ex.:função1 dois pontos recebe uma function, ou seja,a gente co-
//loca uma function expression(recebe uma função anônima(function()e dentro da função a gente faz o que desejar(53)).
//Na forma nova da versão ECMASCRIPT 2015 ou o ES6 que foi acrescido na nova notação literal de objeto(que houve melhorias), podemos fazer simplesmente
//da seguinte forma: colocamos função2()abrindo chaves e dentro delas criando a função desejada, ou seja, nessa nova modalidade de sintaxe, tiramos os
//dois pontos juntamente com a palavra function() tendo uma forma reduzida, mais curta de definir uma função dentro de um objeto a partir da versão mais 
//nova do JavaScript, p/ finalizar: colocar console.log(ob5)p/imprimir o objeto 5, executando: o objeto 5 têm duas funções; função 1 e função 2, onde as
//duas formas funcionam tranquilamente, sendo das linhas(56 a 59)a forma tradicional(usando a linha 65 p/impressão no console)e das linhas (60 a 64) é a 
//forma reduzida que foi adicionada no ECMASDRIPT 2015.
const obj5 = {
    funcao1: function() {

    },
    funcao2() {

    }
}
console.log(obj5)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
//
//[Done] exited with code=0 in 0.474 seconds