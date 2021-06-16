//15/06/2021: 119. Map #03.
//
//Nesta aula vamos implementar o map baseado no exemplo da aula passada(118:map2.js-15/06/2021); vamos mudar const resultado = carrinho.map1(paraObjeto).map1
//(apenasPreco)(31)p/map2, com a sintaxe pronta,vamos ter que incluir na primeira linha a criação do map2 colocando dentro de Array.prototype.map2 onde vamos
//atribuir a map2 uma função que vai receber um callback.
//Uma coisa importante do map é que ele gera um novo array, não mexendo/modificando o array atual, então vamos criar uma constante new array[]vazio e em se-
//guida vamos percorrer o array original com for (let i = 0; i < this.length; i++), ou seja, passando do primeiro elemeto de índice zero até o tamanho do 
//array menos 1, o que vamos fazer dentro desse map? R.: Vamos adicionar dentro do novo array(new array)o elemento transformado a partir da chamada de uma 
//callback(=function(callback)13),portanto será passado o elemento, o índice, o array original e o resultado dessa callback vai ser adicionado dentro do new
//array; então vamos fazer new array ponto push chamando a callback passando o elemento atual(callback(this[i], i, this)) que é o primeiro, depois o próprio
//índice(que é o "i")e depois finalmente o this que é o array atual e em seguida precisamos retornar a new array ponto push como resultado dessa função map2
//então, executando, retorna conf.linha(34). 
Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    } 
    return newArray 
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 3.45, 13.9, 41.22, 7.5 ]
//
//[Done] exited with code=0 in 0.727 seconds