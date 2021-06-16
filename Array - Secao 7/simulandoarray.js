//14/06/2021: 114. Simulando Array com Objeto
//
//Nessa aula vamos tentar a partir de um objeto simular um array:
//Vamos criar uma constante chamada quase array recebe objeto{}colocando o atributo 0 dois pontos Ricardo, o atributo 1 dois pontos Tina,
//o atributo 2 dois pontos Nathália, e atributo 3 dois pontos Letícia; portanto conf.linha(9)mostra de fato um objeto e não um array.
const quaseArray = { 0: 'Ricardo', 1: 'Tina', 2: 'Nathália', 3: 'Letícia' }
console.log(quaseArray)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//{ '0': 'Ricardo', '1': 'Tina', '2': 'Nathália', '3': 'Letícia' }
//
//[Done] exited with code=0 in 0.602 seconds
//
//Agora vamos fazer o seguinte: 
//Vamos criar o método ToString dentro desse objeto quaseArray p/não ser listado, onde vamos usar o ToString p/simular a impressão no con-
//sole como se fosse de fato uma array, então vamos digitar Object.defineProperty(quaseArray craindo um atributo chamado toString e vamos 
//criar um objeto que vai representar todos os atributos do atributo toString que está sendo criado, onde o toString vai ser uma função,
//da qual valor(value)recebe uma função que vai retornar Object.values(this)referenciando o objeto atual que é o this e a gente quer que 
//essa função não seja enumerada, então p/imprimir no console acessando a partir do índice 0, muito parecido como se acessa com array  e
//sabe-se que em objeto tbm.temos essa forma de acessar os atributos a partir do colchete, portanto se foi colocado atributos a partir de
//valores numéricos, então pode-se acessar de valores numéricos.
//Em seguida vamos um Array(de verdade)chamado meu Array que recebe Ricardo, Tina, Nathália e Letícia, e vamos imprimir no console o se-
//guinte: quaseArray.toString e tbm imprimir meuArray, cuja a resposta de impressão é exatamente a mesma conf.linha(37)   
const quaseArray = { 0: 'Ricardo', 1: 'Tina', 2: 'Nathália', 3: 'Letícia' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Ricardo', 'Tina', 'Nathália', 'Letícia']
console.log(quaseArray.toString(), meuArray)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//{ '0': 'Ricardo', '1': 'Tina', '2': 'Nathália', '3': 'Letícia' }
//Ricardo
//[ 'Ricardo', 'Tina', 'Nathália', 'Letícia' ] [ 'Ricardo', 'Tina', 'Nathália', 'Letícia' ]
//
//[Done] exited with code=0 in 0.478 seconds