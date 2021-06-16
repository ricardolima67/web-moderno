//03/06/2021: 98. Funções Importantes de Objeto.
//
//Nessa aula será abordado algumas funções importantes dentro de Object(Objeto).
//Vamos cria um objeto usando a notação literal conf. abaixo:
const pessoa = { 
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))  //Aqui ele vai pegar todas as chaves(da coleção chave/valor), ao executar, retorna conf.linha(1)3, ou seja, somente as chaves.
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//[ 'nome', 'idade', 'peso' ]
//
//[Done] exited with code=0 in 0.623 seconds
//Também temos a opção de pegar os valores de um determinado objeto usando Object.Values, retorna conf.linha27:
const pessoa = { 
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) 
console.log(Object.values(pessoa))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//[ 'nome', 'idade', 'peso' ]
//[ 'Rebeca', 2, 13 ]
//
//[Done] exited with code=0 in 0.598 seconds
//Podemos tbm.pegar uma lista, tanto das chaves como tbm.dos valores que são os registros, ou seja, que são os enters, conf.linha 44, onde ele 
//vai retornar com um Array com todos os sub-arrays que compõe chave/valor:
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) 
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//[ 'nome', 'idade', 'peso' ]
//[ 'Rebeca', 2, 13 ]
//[ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]
//
//[Done] exited with code=0 in 0.492 seconds
//Se a gente quiser, podemos percorrer esse Array usando um FOR EACH ou qualquer outra função p/ percorrer um array(p/ex.:map), então a partir do For Each vamos 
//percorrer os elementos do array que foi gerado a partir de Object.entries(pessoa)(62)que no nosso caso é uma array que têm duas posições(o 1º seria a chave e 
//o 2º o valor); existem muitas formas de se percorrer o array, pode-se percorrer o array direto(for each(e =>{})) ou se quisérmos usar um operador Destructuring(poden-
//do tirar esses dois elementos(e =>)de dentro do array); p/continuar, a gente coloca console.log()usando um template string(crase)c/1ºelemento de índice Zero(0), dois
//pontos e o 2º elemento de índice 1 c/chave e valor(63), executando, retorna conf.linhas(69 a 71):
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) 
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//[ 'nome', 'idade', 'peso' ]
//[ 'Rebeca', 2, 13 ]
//[ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]
//nome: Rebeca
//idade: 2
//peso: 13
//
//[Done] exited with code=0 in 0.980 seconds
//E se a gente quisér tirar chave e valor, pode?R.:Sim, pode. Pode-se tirar o "e"(de elemento(e=>))colocando um operador destructurig[]colocando dentro do colchete:
//chave e valor entre parêntesis, ou seja, assim a gente tem o elemento chave e valor de cada um desses arrays(68)substituindo a linha(63)por (`${chave}: ${valor}`)
//e substituindo tbm.a sintaxe da linha(62)p/(87), executando: temos o mesmo resultado das linhas(69 a 71)conf.mostrado nas linhas(94 a 96).
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) 
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//[ 'nome', 'idade', 'peso' ]
//[ 'Rebeca', 2, 13 ]
//[ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]
//nome: Rebeca
//idade: 2
//peso: 13
//
//[Done] exited with code=0 in 0.604 seconds
//
//Continuando p/vermos mais métodos do Object, existe um método chamado de Object Define Property(Definir Propriedade de Objeto), podendo ser definido dinamicamente 
//conf.linhas(78 a 80)=>"notação literal", mas depois de criado o objeto, podemos colocar pessoa ponto juntamente com o nome da propriedade e em seguida atribuir; 
//então, podemos definir algumas características de uma propriedade, p/ex.:determinada propriedade pode ou não pode ser alterada; determinada propriedade ficará ou
//não visível qdo.fizérmos object.keys p/ex.; então este tipo de atributo a gente pode colocar numa propriedade.
//Para definir a propriedade, primeiro vamos definir o target(pessoa,)(qual objeto que quero incluir na propriedade), em seguida, vou definir o nome da propriedade
//'dataNascimento'(entre aspas)(eu não posso colocar 'dataNascimento' fora das aspas porque senão o JavaScript vai tentar interpretar ele como um identificador, pois
//identificador é algo que já existe na linguagem(const pessoa(pessoa é o identificador), depois eu vou passar um objeto que vai ter todas as características dessa 
//(enumerable: true,)propriedade p/ex.:se é uma propriedade que está passiva ser listada na lista de qdo.for feito um object.keys, ou values, ou entries, etc...; 
//ele vai ser listado?R.:Sim, vai; continuando: essa é uma propriedade que vai aceitar ser modificada?(writable: false,)R.:Não, não é uma propriedade que permite ser
//alterada e nesse momento eu já posso atribuir o valor(value'04/06/2021')que a gente quer dar/informar p/essa variável, então, executando(117 c/uma data diferente),
//porque foi mencionado que trata-se de uma propriedade que não aceita ser escrita(writable)ele vai assumir o valor inicial(value: '04/06/2021')que foi atribuído no
//defineProperty(112)e depois disso, ele vai funcionar mais ou menos como um freeze(tipo congelou especificamente essa variável(115))e não o objeto inteiro, ficando
Object.defineProperty(pessoa, 'dataNascimento', {           //nesse caso a data original(127)                           
    enumerable: true,
    writable: false,
    value: '04/06/2021'
}) 
    
pessoa.dataNascimento = '05/05/2019'
console.log(pessoa.dataNascimento)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//[ 'nome', 'idade', 'peso' ]
//[ 'Rebeca', 2, 13 ]
//[ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]
//nome: Rebeca
//idade: 2
//peso: 13
//04/06/2021
//
//[Done] exited with code=0 in 0.473 seconds
//Continunado, se a gente fizer um Object.keys, ele vai listar('dataNascimento')porque foi dito que é numerável(137)e se colocarmos false na(137),não vai imprimir
const pessoa = {                                                            //'dataNascimento'(147), porém a linha(146)continua aparecendo por causa do enumerable.
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
Object.defineProperty(pessoa, 'dataNascimento', {                          
    enumerable: true,
    writable: false,
    value: '04/06/2021'
}) 
    
pessoa.dataNascimento = '05/05/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//04/06/2021
//[ 'nome', 'idade', 'peso', 'dataNascimento' ]
//
//[Done] exited with code=0 in 0.503 seconds
//
//Outra função que foi adicionada na versão do ECMAScript2015(ES6), é a Object.assign (ECMAScript2015)
//Temos um objeto chamado "dest", onde tem-se um objeto um com outro atributo, tem-se um objeto dois com outro atributo diferente adicionado do mesmo atributo do 
//"dest"(a:4)ou invés de (a:1)e pode-se criar um objeto resultante que recebe Object.assign tendo o objeto de destino, bem como, outros objetos que vão receber 
//dados; então ele pega o objeto de destino(dest)que vai receber os atributos, todos os objetos que a gente passar como parâmetro depois do primeiro, vai pegar 
//esses atributos(o1, o2)e vai concatenar no objeto que foi passado no primeiro parâmetro(dest), portanto, no primeiro caso temos o atributo({a: 1})que tem o va-
//lor 1, o objeto o1 tem o ({b: 2})que tem o valor 2, então, ele vai colocar dentro do object destino o atributo "b" com o valor 2 e o objeto o2 vai colocar dentro
//do objeto de destino o atributo "c" e depois o atributo "a", só que o "a" já exitia, então, esse valor será sobrescrito({a: 1}p/{a: 4}); em outras palavras, ele 
//pega todos os atributos dos objetos informados(pode-se passar qtos.objetos quiser nesse método((dest, o1, o2, ...))), ele vai jogando de um em um no objeto de
//destino("dest"). Usando o object.freeze, posso fazer obj.c recebe 1234(que não vai alterar esse valor), então imprimindo o valor de objeto, retorna conf.linha
//(170), o console é soma por concatenção de todos esses atributos e qdo.tentou mudar(167)não deu certo porque foi feito o freeze. 
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ a: 4, b: 2, c: 3 }
//
//[Done] exited with code=0 in 0.51 seconds