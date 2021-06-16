//04/06/2021: Herança #01.
//
//Início da abordagem sobre Herança em JavaScript, sendo um princípio da OO que se receba do pai p/filho p/ex. atributos e comportamentos p/reuso de código,
//o objetivo da herança é a gente não precisar fazer control c e control v, ou seja, é criar mecanismos p/que esse reuso de código não precise fazer recorte
//cola em sintaxes de código.
//Conforme comentando anteriormente: SE TIVÉRMOS QUE ESCOLHER ENTRE HERANÇA E COMPOSIÇÃO, PRIORIZAR A COMPOSIÇÃO.
//A Herança só tem um ancestral em JavaScript, pois só tem um pessoa que possa servir de classe pai e composição é o contrário: um objeto pode ter múltiplos 
//objetos gerando uma flexibidade maior.
//Exite padrões de projetos que favorecem a composição em detrimento da herança, p/ex.:podendo usar um DECARATOR ajudando a tirar a necessidade de ter-se he-
//rança baseado em composição; a herança é muito útil em JavaScript estando presente dentro do paradigma de orientação a objeto usando metodologias um pouco
//diferentes de outras linguagens(Java, etc...)sendo um método baseado em protótipo(prototype), ou seja, qdo.defini-se uma variável dentro de uma função com
//uma variável chamada X e fora dessa função tbm.tenha uma função chamada X, qdo.se for tentar acessar essa variável X dentro da função, obviamente, ele vai
//tentar pegar o valor que está mais próximo na tentativa de captura dentro da função, então, ele vai enxergar qual variável?; O X que está dentro da função,
//ou o X que está fora da função?R.:Ele vai tentar pegar o X que está dentro da função, se porventura a variável X dentro da função não existir, ele vai pro-
//rurar dentro da função a variável X, não encontrando, ele vai procurar no escopo mais abrangente, ou seja, no lado de fora da função p/ achar a variável X.
//Conf.imagem printada(herança1-Diagrama Prototype Seção 6)=>Ref.Diagrama de Protótipo(Prototype)onde temos p/ex.: um objeto Ferrari, que por sua vez possui 
//um atributo: modelo: F40, velMax: 324, [[Prototype]] => prototype por padrão aponta p/Object.prototype, ou seja, a partir do momento que a gente instancia 
//a partir da função Object criando um objeto automaticamente o sistema tem uma referência para Object.prototype, essa referência pode ser mudada? R.: Sim,
//pode-se mudar o protótipo de uma objeto, p/ex.: pode-se criar um objeto chamado carro e fazer o objeto Ferrari apontar p/o objeto carro.  
//Prototype entre colchetes trata-se de um conceito de protótipo, prototype é um atributo de Object que não está disponível em Ferrari( que é um objeto), ou 
//Volvo (que é um objeto), mas está disponível em Object que é uma função.  
//Vamos definir uma constante chamada Ferrari recebe{}objeto:modelo F40, velocidade máxima 324, e vamos criar um outro objeto chamado Volvo, cujo modelo será
//o V40 e velocidade máxima 200, baseado nesses dados, vamos fazer alguns testes p/tirar conclusões:
const ferrari = { 
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{}
//
//[Done] exited with code=0 in 4.887 seconds
//Qdo.se usa o objeto ponto (2)underlines proto (2)underlines(__proto__)a partir disso que a gente consegue acessar o protótipo desse objeto, ou seja, o obje-
//to pai(significa que se a gente tentar acessar algum atributo de ferrari e não for encontrado dentro de ferrari, ele vai procurar esse mesmo atributo dentro
//do protótipo[que seria o objeto pai], se for achado no objeto pai ele retorna, caso contrário ele vai procurar no avô, e assim sucessivamente, se por acaso
//nada for encontrado, o sistema vai retornar undefined).
//Ao executar o código de comando, ele responde que o protótipo ferrari é um objeto vazio conf.linha 36, mas existe, está presente.
//Agora vamos fazer um segundo teste colocando console.log(ferrari.__proto__é estritamente igual a Object.prototype)conf.linha57, ao executar, temos a respos-
//ta true(59), de fato esse atributo que referencia o protótipo de ferrari que não era um atributo padronizado, especificado pela linguagem, era suportado por
//muitos browsers, mas não era documentado, não estava na especificação, mas agora ele está, e podemos usá-lo tranquilamente, tanto no Node, como no browser.       
const ferrari = { 
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__ === Object.prototype)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//true
//
//[Done] exited with code=0 in 0.475 seconds
//Agora fazendo outro teste, vamos colocar console.log(volvo__proto__ é estritamente igual a Object.prototype)(74), tbm retorna true(77)
const ferrari = { 
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//true
//true
//
//[Done] exited with code=0 in 0.476 seconds
//Outro teste: será que Object.prototype ponto (2)underlines proto (2)underlines(94)tem um protótipo depois dele?R.:Não tem(98),conf.diagrama, mostra[[prototype]]
//aponta p/nulo(null).
const ferrari = { 
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//true
//true
//null
//
//[Done] exited with code=0 in 0.477 seconds
console.log(Object.prototype.__proto__ === null)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//true
//true
//null
//true    (101)confirma que ele é nulo.
//
//[Done] exited with code=0 in 0.454 seconds
//
//Vamos criar uma função chamada meu objeto() {} e fazer alguns testes:
function MeuObjeto() {}
console.log(typeof Object)
console.log(typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//function                 //É do tipo function(112)
//
//[Done] exited with code=0 in 0.466 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//function
//function                 //Tbm.é do tipo function(113) 
//
//[Done] exited with code=0 in 0.488 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//function
//function
//{} MeuObjeto {}          //Mostrando tratar-se de objetos diferentes(114) 
//
//[Done] exited with code=0 in 0.545 seconds
console.log(ferrari.prototype)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//function
//function
//{} MeuObjeto {}          
//undefined                //O objeto ferrari ponto prototype retorna undefined(130), porque esse objeto não tem esse atributo prototype,
//                         //tendo apenas o __proto__.
//[Done] exited with code=0 in 0.045 seconds