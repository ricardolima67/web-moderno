//02/06/2021: 95. Objetos Constantes.
//
//O prof.explica uma dúvida do por quê foi criado um objeto e atribuído a uma constante e depois no código continuou alterando os atributos desse objeto,
//afinal não é uma constante?
//Essa aula é p/explicar essa ocorrência:
//Vamos criar um objeto a partir de uma constante chamada pessoa que recebe {nome: João}; o que acontece qdo.a gente faz isso?R.:O identificador chamado
//pessoa possui um endereço de memória; então, identificador pessoa => aponta p/um endereço de memória que será abstraído, p/ex.:a gente vai chamar de 
//123(neste endereço de memória) é que de fato a gente tem o objeto criado: // pessoa -> 123 -> {...}, mas o que a variável chamada de constante identi-
//ficada como pessoa aponta p/o endereço e por sua vez, o endereço aponta p/o objeto:conf.ex.:(pessoa -> 123 -> {...})que existe lá no endereço de memó-
//ria; então, qdo.a gente faz isso: pessoa.nome = 'Pedro', nós não mudamos a referência da constante(que não pode ser mudada, ou seja, o identificador=>
//pessoa)que continua apontando p/123, mas o objeto/dado{...}que está sendo apontado p/esse endereço 123 e que está neste endereço pode ser mexido, pode
//ser alterado, então, repetindo: o que não pode ser alterado é a constante pessoa, portanto se dermos um console.log(pessoa)e imprimir, vai retornar o 
//nome Pedro conf. linha19, onde nesse momento o nome da pessoa não é mais João conforme demonstrado inicialmente, onde na linha16 foi alterado p/Pedro: 
//  pessoa -> 123 -> {...}  
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ nome: 'Pedro' }
//
//[Done] exited with code=0 in 0.204 seconds

//O que acontece se pessoa recebe um objeto {'Tina'}?Estamos tentando atribuir pessoa vai receber (<-)um novo objeto(pessoa <- 456 {...} <-)aponta p/um
//novo objeto(pessoa -> 456 -> {...}), ou seja, estamos tentando fazdr com que a variável(identificador)pessoa aponte p/ um novo endereço(456)p/um novo
//objeto criado com um atributo nome,cujo valor denominado é 'Tina'. O Identificador pessoa por tratar-se de uma constante sempre apontará p/o endereço
//123 e não poderá apontar p/um objeto que está em outro endereço(456)que vai gerar um problema, ou seja, um erro, pois não podemos atribuir novamente
//p/constante pessoa um outro objeto que esteja em outro endereço, então qdo.rodar p/impressão, retorna c/erro(30 a 47):
// pessoa <- 456 -> {...} <- , passando p/ pessoa -> 456 -> {...}
pessoa = { nome: 'Tina' }
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ nome: 'Pedro' }
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js:14
//pessoa = { nome: 'Tina' }
//       ^
//
//TypeError: Assignment to constant variable.
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js:14:8)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.645 seconds

//Continunado vamos colocar objeto ponto freeze passando pessoa,trata-se de um método muito legal de Object em que a gente está congelando o objeto pessoa
//ou seja, uma vez que o objeto estiver congelado, a gente não consegue mais mexer no objeto, então se colocar pessoa.nome = 'Maria',pergunta: quem é o a-
//tributo atual?R.:É pessoa.nome = 'Pedro', só que depois da linha(56)o objeto foi congelado, então (59)vai retornar Pedro, não se trata de um erro, o sis-
//tema simplesmente vai ignorar essa tentativa da linha(58), ou seja, o objeto continua como era antes: pessoa.nome = 'Pedro'(54).
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ nome: 'Pedro' }
//Pedro
//
//[Done] exited with code=0 in 0.433 seconds
//
//Da linha 53 até a linha 56 a gente poderia mudar o objeto, depois da linha 56 que foi feito um freeze(que congelou o objeto)a gente não consegue mais me-
//xer nele; então eu vou tentar colocar p/ex.:um atributo endereço 'Rua ABC' - será que vai dar certo?R.:Não, ele não vai mostrar, ele vai retornar confor-
//me linhas (60 a 64), tentamos adicionar o endereço, mas não funcionou; e se tentarmos deletar o atributo nome?tipo: delete pessoa.nome-R.:Não vai permi-
//tir, ele não vai deixar que a gente mexa no objeto, portanto não podemos alterar um atributo que já existe, não podemos adicionar um atributo nesse obje-
//to, a gente não consegue excluir nada do objeto, uma vez que tornamos o objeto em si constante, não só a referência no qual a variável(identificador pes-
//soa aponta = 123).
//Se for feito conf.abaixo p/criar um objeto desde o começo com o freezeconst pessoaConstante = Object.freeze({ nome: 'Joao' }), onde já cria-se o objeto 
//no seu nascedouro, já se criou um objeto p/ser constante, p/nunca ser mudado(nem a referência da variável(pessoaConstante)pode ser mudada e nem o objeto
//({ nome: 'Joao' })que foi criado pode ser mudado).
const pessoaConstante = Object.freeze({ nome: 'Joao' })
console.log(pessoaConstante)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ nome: 'Joao' }
//
//[Done] exited with code=0 in 0.458 seconds