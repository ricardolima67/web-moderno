//28/04/2021: 45.Operadores: Destructuring #03

//Um outro contexto bastante interessante p/usarmos Destructuring é utilizando-o no âmbito de função, não só diretamente na atribuição, mas com parâmetro de uma função podemos
//usar esse operador.
//Vamos criar uma função para fazer dois exemplos que vão usar a mesma estrutura, sendo que em um usaremos a técnica do destructuring usando objeto, e outra usando array.
//Vamos criar uma função chamada RAND que vai retornar um número aleatório e vamos passar para essa função dois atributos só que dentro de um operador destructuring: min recebe
//Zero(0)vírgula: max recebe 1000 e isso tudo está envolvido dentro de chaves, significa que dentro dessas tem um objeto?R.:Não!; significa na verdade que vamos passar um objeto
//para essa função e dentro da função randômica em vez de acessar o objeto.min, objeto.max, nós queremos que ele já tire de dentro do objeto o atributo min e o atributo max entre-
//gando esses dois atributos prontos, sem precisarmos usar a notação ponto para acessar de dentro do objeto. Na mesma linha 15: abrir uma nova chave e na linha 16 criar uma cons-
//tante chamada valor recebe o objeto Math ponto Random(de Randômico: o mesmo que aleatório, contigente, fortuíto)com parêntesis vazio()vezes parêntesis e dentro desse parêntesis 
//vamos colocar máximo menos o mínimo e em seguida somando o mínimo para ele dar um intervalo(um range)entre o máximo e o mínimo; em seguida executando para ele retornar conf.linha
//17 usando o objeto Math.floor(floor é o valor mais baixo)que vai retornar o valor e para testarmos essa função vamos colocar conf.linha 19:console.log chamando a função rand dentro
//de parêntesis()e em seguida abrir parêntesis novamente e dentro desse parêntesis colocar chaves{ }passando um objeto max com valor 50 e min com valor 40. Vale notar que estamos 
//usando o operador destructuring na linha 15({ min = 0, max = 1000})e na linha 20 estamos usando um objeto(rand({ max: 50, min: 40}))
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40}))   //Ao rodar a sintaxe de código linhas 15 a 20, temos a impressão conf.linhas 21 a 24, onde na linha 22 indica resultado 49 desse range.
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//49
//
//[Done] exited with code=0 in 5.427 seconds

function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40 }
console.log(rand(obj))
//Dando sequência, poderíamos criar na mesma sintaxe linha 26 a 31 uma constante com nome objeto recebendo máximo e mínimo conf.linha 30 e na linha 31 colocamos objeto como parâ-
//metro para a função, cujo retorno do range é 46 conf.linha 46: dando um valor entre 50 e 40:
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//46
//
//E se rodarmos a sintaxe várias vezes, vai retornar outros valores entre esse range, pois trata-se de uma função randômica, por isso que a linha 39 retornou: 42.
//[Done] exited with code=0 in 0.441 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//42
//
//[Done] exited with code=0 in 0.569 seconds

function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 995 }))

//Outra possibilidade é passarmos apenas o valor de mínimo e de máximo conf.linha 50, usando a mesma sintaxe de comando(código) anterior conf.linhas 26 a 31(acrescentando a linha 50)
//Colocando o valor de mínimo 955 e o valor máximo por padrão é 1000, então qdo.executarmos a sintaxe várias vezes, teremos conf. linhas abaixo:
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//43
//999
//
//[Done] exited with code=0 in 0.585 seconds
//
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//48
//998
//
//[Done] exited with code=0 in 0.513 seconds
//
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//40
//997
//
//[Done] exited with code=0 in 0.481 seconds

//Junto do operador destructuring podemos usar outro recurso que é Parâmetro Padrão ({ min = 0, max = 1000}) que foi introduzido na versão 2015 do JavaScript.

function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 995 }))
console.log(rand({}))

//Continuando: nesse caso podemos passar um objeto vaio{}, onde vai ficar navendo entre 0(zero) e 1000 conf.linha 81, retornando conf.abaixo:
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//41
//996
//186
//
//[Done] exited with code=0 in 0.614 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//45
//996
//633
//
//[Done] exited with code=0 in 0.539 seconds
//Acima representa a resposta de rodar a sintaxe duas vezes, qtas.vezes rodar, qtos.resultados aleatórios vai retornar, devido a variável rand(de randômico).

function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 995 }))
console.log(rand({}))
console.log(rand())

//E finalmente podemos fazer um teste para passar números randômicos sem passar objeto nenhum conf.linha 106, usando a mesma sintaxe anterior, o retorno vai ser conf.linhas 110
//a 131 onde vamos ter problemas, pois ele vai tentar desestruturar algo que está undefined ou nulo:
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//48
//997
//159
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:1
//(function (exports, require, module, __filename, __dirname) { function rand({ min = 0, max = 1000}) {
//                                                                              ^
//
//TypeError: Cannot destructure property `min` of 'undefined' or 'null'.
//    at rand (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:1:76)
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:9:13)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.591 seconds.