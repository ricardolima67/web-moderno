//08/06/2021: 105. Herança #04.
//
//Nesta aula vamos entender um pouco mais sobre a função e sobre o atributo prototype da função.
function MeuObjeto() {}
console.log(MeuObjeto.prototype)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//MeuObjeto {}   //Indicando que esse atributo existe(Meu Objeto) e que esse atributo é um objeto{}.
//
//[Done] exited with code=0 in 0.578 seconds
//
//Vamos criar duas instâncias dessa função(criar dois objetos)então, criando o objeto 1(const obj1) a partir do operador new com o nome da função,
//o mesmo com o obj2, aí surgem algumas perguntas a partir do momento que a gente instancia objetos a partir de uma função, será que o prototype(
//o conceito de protótipo que seria o [__proto__])dele vai apontar p/Object.prototype ou p/meuObjeto.prototype?P/verificar isso, colocar console.
//log(obj1.__proto__ === obj2.__proto__)se obj1 é estritamente igual a obj2; ou seja, uma vez que cria-se dois objetos diferentes a partir de uma
//mesma função construtora(instanciamento=>new), os protótipos desses objetos apontam p/um mesmo objeto po padrão?R.:Executando, a resposta é SIM,
//conforme linha(21).
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
//Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//MeuObjeto {}
//true                 //Resposta da linha 19.
//
//[Done] exited with code=0 in 0.428 seconds
//
//Continuando vamos colocar console.log(MeuObjeto.prototype === obj1.__proto__)retorna como verdadeiro(34).
function MeuObjeto() {}
console.log(MeuObjeto.prototype)
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//MeuObjeto {}
//true              //Resposta ref.a linha 31
//true              //Resposta ref.a linha 32
//
//[Done] exited with code=0 in 0.486 seconds
function MeuObjeto() {}
console.log(MeuObjeto.prototype)
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//MeuObjeto {}
//true
//true
//Bom dia! Meu nome é Anônimo       //Resposta ref.a linha 51.
//
//[Done] exited with code=0 in 0.488 seconds
function MeuObjeto() {}
console.log(MeuObjeto.prototype)
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Ricardo'
obj2.falar()
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//MeuObjeto {}
//true
//true
//Bom dia! Meu nome é Anônimo
//Bom dia! Meu nome é Ricardo    //Resposta do nome que acabou de sobrescrever da linha 73.
//
//[Done] exited with code=0 in 0.458 seconds
function MeuObjeto() {}
console.log(MeuObjeto.prototype)
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Ricardo'
obj2.falar()

const obj3 = {} 
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//MeuObjeto {}
//true
//true
//Bom dia! Meu nome é Anônimo       //Resposta da linha 95
//Bom dia! Meu nome é Ricardo       //Resposta da linha(97 e 98) 
//Bom dia! Meu nome é Obj3   //Resposta da criação do obj3 por meio de uma notação literal de objeto, onde pode-se manualmente atribuir conf.linha(99), ou seja, 
//houve uma mudança de referência p/sair de Object.prototype p/MeuObjeto.prototype, onde da mesma forma tem-se acesso ao nome e a função falar.
//[Done] exited with code=0 in 0.448 seconds
//
//Resumo de tudo que já visto até agora, de acodo com algumas assertivas verdadeiras:
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)        //new MeuObjeto é a criação de uma instância a partir da função ele tem um __proto__ que é
//exatamente igual a MeuObjeto.prototype, ou seja, qdo.um objeto é instanciado a partir da função, eles são iguais.
console.log(MeuObjeto.__proto__ === Function.prototype)              //A função tbm.tem atributo __proto__, além de a função ter um protótipo, a função dentro
//dela tem uma referência p/__proto__ que vai apontar p/padrão p/function prototype.
console.log(Function.prototype.__proto__ === Object.prototype)      //Função ponto protótipo ponto __proto__, ou seja, o protótipo do protótipo de uma function
//aponta p/Object.prototype.
console.log(Object.prototype.__proto__ === null)                   //Object.prototype.é nulo porque chegou no object.protoype e depois dele não há nada na cadeia
//de protótipos, que é estritamente igual a nulo.
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//true
//true
//true
//true
////OBS..: O ATRIBUTO UNDEFINED EXISTE.
//[Done] exited with code=1 in 0.465 seconds