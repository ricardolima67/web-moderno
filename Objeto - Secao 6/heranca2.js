//07/06/2021: Herança #02.
//
//Nesta aula vamos criar uma cadeia de protótipos, pois trata-se de um conceito muito importante, que é o Prototype Chain:
//   Cadeia de Protótipos (Prototype Chain)   //
//Vamos criar uma constante chamada avô que recebe um objeto que vai ter o atributo 1 e vai ter o valor A, então a idéia é criar 03 objetos: o avô, depois 
//vamos criar o pai que tem o protótipo o avô, e depois o filho que tem o protótipo o pai, então vamos criar uma segunda constante chamada pai e p/ser re-
//renciada que o pai tem como protótipo o avô e o avô tem como prototype o Object.prototype; temos que atribuir __proto__: avô e depois colocar os  outros
//atributos relacionados ao objeto pai e depois a constante filho com o mesmo procedimento:    
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = {__proto__: pai, attr3: 'C' }
console.log(filho.attr1)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//A    //Resposta: A porque ele procurou no pai e no filho e não encontrou o atributo A, mas achou no avô.
//
//[Done] exited with code=0 in 0.879 seconds
console.log(filho.attr0)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//A
//undefined  //Resposta p/o atributo 0 (17).
//
//[Done] exited with code=0 in 0.442 seconds
Object.prototype.attr0 = 'Z'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = {__proto__: pai, attr3: 'C' }
console.log(filho.attr1)
console.log(filho.attr0)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//A
//Z
//
//[Done] exited with code=0 in 0.451 seconds
//A resposta de linha 31 refere-se à sintaxe de comando(23 a 28), o Z foi encontrado porque ele procurou no filho, não achou, no pai não tem e no avô tbm.
//não tem(Z), porém o avô aponta p/Object.prototype onde ele achou o atributo zero(0) trazendo o "Z" na resposta.
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = {__proto__: pai, attr3: 'C' }
console.log(filho.attr1)
console.log(filho.attrA)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//undefined             //Atributo A(41) não vai encontrar, porque não tem no filho, no pai, no avô e no Object.prototype. 
//
//[Done] exited with code=0 in 0.614 seconds
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = {__proto__: pai, attr3: 'C' }
console.log(filho.attr1)
console.log(filho.attr0, filho.attr1)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//A
//0 A       //Encontrou o zero e o A
//
//[Done] exited with code=0 in 0.482 seconds
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = {__proto__: pai, attr3: 'C' }
console.log(filho.attr1)
console.log(filho.attr0, filho.attr1, filho.attr2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//A
//0 A B
//
//[Done] exited with code=0 in 0.463 seconds
//
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = {__proto__: pai, attr3: 'C' }
console.log(filho.attr1)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//A
//0 A B C
//
//[Done] exited with code=0 in 0.442 seconds
//
//Vamos criar uma constante mais complexa chamada carro, onde vamos definir velocidade atual zero(0), velocidade máxima por padrão: 200km/h,  em seguida vamos
//criar uma função chamada acelerar mais que vai receber um delta que seria a diferença que a gente quer acelerar e ele vai fazer um teste:se a velocidade atu-
//al(this.velAtual)mais o delta é menor ou igual a valocidade máxima(this.velMax),pode acelerar, pois ele não vai ultrapassar (this.velAtual)a velocidade máxi-
//ma, caso o delta(+=)mais a velocidade atual ultrapasse a velocidade máxima aí vamos forçar(else)a velocidade atual ser exatamente igual a velocidade máxima
//.(this.velAtual = this.velMax). 
//Em continuação a esta sintaxe(função),
//vamos criar outra função chamada Status()só p/gente mostrar no console o valor(return)`${this.velAtual}Km/h de ${this.velMax}Km/h` p/gente ver exatamente em
//que velocidade o carro está; 
//Agora vamos criar outros objetos, com constante ferrari colocando modelo f40, velocidade máxima 324,no momento que a gente define a ferrari como tendo protó-
//tipo o carro, o atributo velMax: 324 vai sombrear(SHADOWING = SOMBREAMENTO)o atributo original do objeto carro, ou seja, é o mesmo que acontece qdo. a gente
//tem uma variável local dentro de uma função e essa variável pode sombrear variáveis de escopos mais abrangentes, sendo isso muito comum não só em JavaScript,
//mas em várias linguagens de programação.    
//Continuando, vamos criar agora outro objeto constante volvo colocando tbm.modelo v40, e vamos sombrear a função status, ao invés de usá-la normal, vamos usá-
//la com um adicional a mais usando uma palavra reservada chamada SUPER, da mesma forma que usamos o this p/referenciar objeto atual, vamos usar o SUPER p/refe-
//renciar o nosso protótipo fazendo (return)`${this.modelo}: ${super.status()}`, ou seja, estamos sombreando(shadowing)a função status a partir do objeto volvo,
//por enquanto ela é uma função independente(status())porque ainda não foi estabelecida ainda a relação de protótipo, onde o fato é que ele vai usar o this.mo-
//delo(que é o modelo do objeto atual[volvo]), se ele não encontrar o modelo, ele vai procurando nos objetos acima e o super qdo.a gente está trabalhando com o
//mesmo nome de método, qdo.for chamado o this, ele vai ficar invocando de forma recursiva o mesmo método, a gente quer que ele chame o método do nosso protóti-
//po, por isso o uso do SUPER, continuando, vamos estabelcer a relação de protótipo usando uma função chamada Object.Set Prototype Of()onde dentro dos parênte-
//sis vamos colocar o nome do objeto ferrari e depois o segundo parâmetro que é o nosso protótipo que seria carro, nesse momento, a gente estabeleceu uma rela-
//ção entre ferrari e carro, ou seja, ferrari tem carro como seu protótipo e esse método tbm.é um método especificado p/linguagem, a gente pode usar ele onde 
//suporta JavaScript, função que estabelece uma relação de protótipo entre dois objetos, que seria o equivalente a colocarmos um(__proto__)e apontar p/carro, 
//depois vamos colocar novamente Object.Set Prototype Of(volvo, carro)e a partir disso a gente consegue acessar os atributos de ferrari e volvo qto.os seus a-
//ributos recebidos do protótipo; chamar funções como p/ex.: acelerar.
//Cabe uma observação muito importante: ferrari têm dois atributos e dentro de ferrari não tem nenhuma função(do tipo status())declarada a não ser as funções 
//recebidas a partir do protótipo, qdo. executa-se esse código(139), a gente vê que na hora de imprimir o objeto, ele simplesmente pegou os atributos que per-
//tencem de fato ao objeto ferrari que foi definido dentro da sintaxe(127 a 130)conf.resposta(151), se imprimir volvo vai ser diferente, volvo vai mostrar o 
//modelo e a função status()(156), mas não tem velocidade máxima, embora o volvo consiga referenciar a velocidade máxima a partir da procura nos protótipos, 
//então por padrão qdo. a gente chama um objeto e um To String(função de conversão de objeto p/string)é chamada, ele vai ler os atributos e as funções que per-
//tencem ao objeto, mas isso não quer dizer que a gente não consiga chamar os métodos que estão no protótipo, então, se colocar volvo.acelarMais(100)que vai a-
//celerar de 0 a 100 km/h e colocar console.log(volvo.status())que ele tanto vai mostrar o modelo como vai chamar o super do status()(162).             
const carro = {
    velAtual: 0, 
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta 
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` 
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ modelo: 'F40', velMax: 324 }
//
//[Done] exited with code=0 in 0.410 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ modelo: 'F40', velMax: 324 }
//{ modelo: 'V40', status: [Function: status] }
//
//[Done] exited with code=0 in 0.442 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ modelo: 'F40', velMax: 324 }
//{ modelo: 'V40', status: [Function: status] }
//V40: 100Km/h de 200Km/h
//
//[Done] exited with code=0 in 0.509 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ modelo: 'F40', velMax: 324 }
//{ modelo: 'V40', status: [Function: status] }
//V40: 100Km/h de 200Km/h
//300Km/h de 324Km/h
//
//[Done] exited with code=0 in 0.516 seconds
//Continuando da linha 111, retornou o modelo V40 que está a 100km/h de uma velocidade máxima de 200km/h, ou seja, ele chamou não só a função status() do pai,
//bem como, ele leu a velocidade máxima(return `${this.velAtual}Km/h de ${this.velMax}Km/h`)que está presente a partir de herança dentro do objeto volvo, pode
//-se fazer o mesmo com a ferrari, retorna conf.(169). 