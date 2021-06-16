//15/06/2021: 118. Map#02.
//
//Nesta aula será criado um arquivo para fazermos um desafio com definição inicial do código:
//Constante carrinho recebe um array cujo objeto{} vai ter uma série de strings em formato json, colocando aspas simples nas chaves delimitando a string
//como um todo(json) e cada atributo dentro das chaves é delimitado por aspas duplas(sempre que for string é delimitado por aspas duplas):
//O desafio é retornar um array usando os métodos map apenas com os preços. 
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

let resultado = carrinho.map[3.45, 13.90, 41.22, 7.50] 
const preco = preco => `R$ ${toFixed(2).replace('.', ',')}`
console.log(carrinho)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ '{ "nome": "Borracha", "preco": 3.45 }',
//  '{ "nome": "Caderno", "preco": 13.90 }',
//  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
//  '{ "nome": "Caneta", "preco": 7.50 }' ]
//
//[Done] exited with code=0 in 0.592 seconds
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

let resultado = carrinho.map[3.45, 13.90, 41.22, 7.50] 
const preco = preco => `R$ ${parseFloat(preco).toFixed(2).replace('.', ',')}`
console.log(carrinho)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ '{ "nome": "Borracha", "preco": 3.45 }',
//  '{ "nome": "Caderno", "preco": 13.90 }',
//  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
//  '{ "nome": "Caneta", "preco": 7.50 }' ]
//
//[Done] exited with code=0 in 0.48 seconds
//
//Correção:
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]
//Para resolver esse problema temos que usar dois maps, primeiro é chamar o json.parse p/transformar as strings em objeto e o segundo map vai simplesmen-
//te receber um objeto como elemento de entrada e vai retornar apenas o preço, tendo assim um array com os preços no final. 
//Primeiro método: constante chamada para objeto vai receber um json e retorna(=>) json.parse(json), ou seja, converte um texto p/objeto;
///Segundo método: constante chamada apenas preço recebe como parâmetro produto e final ele retorna(=>)apenas produto.preço;
//Portanto com esses dois métodos a gente pode chamar duas vezes o map que irermos ter no final um array convertido; então, executando, a gente vai ter 
//constante resultado recebe carrinho.map passando p/objeto, ou seja, no final desse método vamos ter uma array de quatro elementos com quatro objetos 
//que representam cada um dos elementos do json das linhas (8 a 11)sendo feito o parse p/objeto e depois a gente pode chamar o map p/extrair apenas o 
//preço e o resultado vamos imprimir no console(61), retorna conf.linha(63).  
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 3.45, 13.9, 41.22, 7.5 ]
//
//[Done] exited with code=0 in 0.064 seconds