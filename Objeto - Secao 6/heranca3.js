//08/06/2021: 104. Herança #03.
//
//Nesta aula vamos falar sobre uma função chamada Object.create, bem como, será feito o For In p/gente percorrer atributos de um objeto, e tbm.vendo como Herança
//pode impactar no momento de percorrer os atributos de um objeto. 
//Vamos criar uma classe pai chamada de constante pai recebe nome, cor de cabelo; agora vamos criar um objeto filho a partir do Object.create no formato de cons-
//tante filha1 recebe object.create(),onde vamos passar o pai como primeiro parâmetro e aí veremos que a partir disso criou-se um objeto novo tendo como protóti-
//po o objeto pai passado/informado, ou seja, ao invés dele criar já apontando p/o object.prototype automaticamente ele já criou o objeto filha tendo o protótipo
//o objeto pai, então nesse caso a gente já pode alterar o nome da filha e podemos mostrar p/ex.:no console.log(filha1)o valor de cor do cabelo, resposta(15). 
const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Nathália'
console.log(filha1.corCabelo)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//preto
//
//[Done] exited with code=0 in 0.43 seconds
//
//Contiunando, agora vamos definir uma filha2 recebe object.create()pai e o segundo parâmetro desse método vai ser um objeto que será colocado todos os atributos
//que a gente quer adicionar no objeto filha2 a ser criado, então, vamos ter um objeto pai que por conta disso ele vai estabelecer uma relação de protótipo, onde
//filha vai ter como protótipo o pai e automaticamente ele já tem o acesso ao atributo nome e cor do cabelo, mas já podemos criar outros atributos, inclusive di-
//zer se o atributo vai ser enumerado, se vai aceitar ser escrito, se vai ser final, se vai ser congelado ou não, etc...,p/fazer isso, vamos criar no segundo pa-
//râmetro um objeto, onde vamos começar a definir os parâmetros colocando nome dois pontos e em seguida definir os atributos com valor que vai ser Letícia, vai
//ter um valor que não aceitará ser mudado(writable)false[vai ser um valor final, que vai estar congelado], e ele vai estar enumerado como true, permitindo ser 
//listado no momento que a gente for usar um object.keys(Retorna uma matriz contendo os nomes de todas as propriedades de string enumeráveis ​​do objeto fornecido)
//ou coisas do genêro, ou percorrer tbm.a partir do For In; então vamos imprimir no console.log(filha2.nome), onde de fato o valor foi setado(40).  
const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Nathália'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Letícia', writable: false, enumerable: true }
})

console.log(filha2.nome)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//preto
//Letícia
//
//[Done] exited with code=0 in 0.417 seconds
//
//Vamos tentar mudar o valor de filha Letícia p/ Tina e vamos mostrar no console um template string(58), onde já foi estabelecido uma relação de protótipo
//com o pai conf.resposta(62).
const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Nathália'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Letícia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Tina'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//preto
//Letícia
//Letícia tem cabelo preto
//
//[Done] exited with code=0 in 0.445 seconds
const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Nathália'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Letícia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Tina'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//preto
//Letícia
//Letícia tem cabelo preto
//[ 'nome' ]      //A reposta(79) refere-se a filha1 que tem nome(68), se o mesmo for feito p/filha2(105) a resposta vem do mesmo jeito, se por algum motivo a  
//gente não tivésse colocado a filha1(p/Nathália), ele não iria enumerar nenhum em object.keys(mesmo que tivésse recebido os atributos por herança),não listan-
//do por padrão.
//[Done] exited with code=0 in 0.558 seconds
//Mas com o object.keys é diferente usando for(let key in filha2){}onde vamos ter todos os atributos sendo impresso, então se a gente colocar console.log
//(key)e executar, ele vai mostrar como resposta: nome e corCabelo(116 e 117).
const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Nathália'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Letícia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Tina'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    console.log(key)
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//preto
//Letícia
//Letícia tem cabelo preto
//[ 'nome' ]
//[ 'nome' ]
//nome
//corCabelo
//
//[Done] exited with code=0 in 0.551 second
//
//Podemos fazer um teste usando Has Own Property(tem propriedade própria)onde vamos passar o nome da chave(key)?, e se pertencer a ela, vamos simplesmente co-
//locar console.log(key)que seria o nome da propriedade ou colocar um template string por herança dois pontos junto com o nome da propriedade(key), (154):
const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Nathália'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Letícia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Tina'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//preto
//Letícia
//Letícia tem cabelo preto
//[ 'nome' ]
//[ 'nome' ]
//nome
//Por herança: corCabelo
//
//[Done] exited with code=0 in 0.497 seconds
//A resposta(150)mostra que o nome pertence ao próprio objeto(141)que retorna true, ele retorna a chave nome por padrão(142)que pertence a objeto,  porém
//cor do cabelo veio por herança(142); então essa é a forma que a gente tem p/saber se um determinado produto que estamos navegando no for in pertence ao 
//próprio objeto ou se ele veio por herança. Se não quisérmos pegar p/ex.os atributos que vieram por herança a partir dos protótipos(da cadeia de protóti-
//pos), a gente simplesmente testa p/pegar apenas os atributos no qual o Has Own Property(141)retorna true e aí temos os atributos do próprio objeto.  