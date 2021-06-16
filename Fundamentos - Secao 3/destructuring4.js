//28/04/2021: 46.Operadores: Destruturing #04

//Em continuação da aula passada(destructuring3)vamos usar o array dentro dos parâmetros de uma função.
//Vamos criar uma função chamada rand abrindo parêntesis e dentro desses parêntesis() vamos abrir colchetes[]que é uma array,e dentro desses colcochetes vamos colocar min recebe 0
//(zero)vírgula máximo recebe 1000, em seguida abrir chaves e dentro das chaves colocar um objeto condicional(if)=>(se)abrindo parêntesis()e dentro desse parêntesis vamos colocar 
//min maior que max(se o mínimo for maior do que o máximo) e depois dentro de colchetes colocar min vírgula max recebe outro colchete onde colocamos max e min: inverta as duas 
//variávies, demonstrando que podemos inverter as duas variáveis é usando o operador destructuring, ou seja, o que é mínimo passa a ser máximo e o que é máximo passa a ser mínimo, 
//onde estamos acessando o array linha14[max, min]e na mesma linha 14 estamos usando o operador destructuring[min, max], ou seja, estamos criando uma array[max, min] com os dois 
//atributos da linha 13[min = 0, max = 1000])que foram desestruturados de uma array; uma vez desestruturado o que vamos receber não é uma array, e sim 2 atributos: mínimo e máximo
//Se o mínimo for maior do que o máximo, teríamos que inverter esses atributos.
//Continuando na linha 15, vamos criar uma constante chamada de valor recebe o objeto math.random com parêntesis vazio() multiplicado por (max - min) mais min para ele poder deslo-
//car o intervalo e dar sempre entre o valor mínimo e o valor máximo; depois vamos retornar o valor conf.linha 16 e em seguida vamos fazer os testes conf.linha 19:
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //Como estamos chamando a partir de uma array não estamos usando o nome do atributo do objeto igual na aula passada(máx e min),aqui estamos usando 50 e 40
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//46
//
//[Done] exited with code=0 in 0.573 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//47
//
//[Done] exited with code=0 in 0.471 seconds

//Poderíamos passar apenas um dos dois conf.linha 38, onde 992 seria o mínimo que é o primeiro de depois o máximo 1000 que seria o segundo:

function rand([min = 0, max = 1000]) {

    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))   
console.log(rand([992]))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//44
//994
//
//[Done] exited with code=0 in 0.574 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//47
//998
//
//[Done] exited with code=0 in 0.483 seconds

//Podemos passar apenas o segundo conf.descrição na linha 29; requisitando a impressão conf.linha 61 colocando um rand vírgula 10, onde estamos passando apenas o máximo e vai assumir
function rand([min = 0, max = 1000]) {                              //o mínimo como 0(zero):

    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))   
console.log(rand([992]))
console.log(rand([, 10]))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//46
//994
//7
//
//[Done] exited with code=0 in 0.656 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//48
//996
//3
//
//[Done] exited with code=0 in 0.542 seconds

//Podemos tbm.passar um array vazio conf.linha 86, significa que ele vai assumir os valores padrões(o 0(zero)e o 1000), onde vai ficar navegando entre 0 e 1000:
function rand([min = 0, max = 1000]) {                              

    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))   
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//45
//992
//9
//69
//
//[Done] exited with code=0 in 0.553 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//47
//995
//5
//64
//
//[Done] exited with code=0 in 0.518 seconds

//E por último podemos passar nada(só o vazio)conf.linha 114, onde vai gerar um problema porque ele vai tentar desestruturar elementos de algo que é nulo ou undefined
//conf.linhas 121 a 135, ocorrendo o mesmo qdo.rodamos a query novamente, dizendo que não conseguimos ler propriedades de undefined conf.linha 125:
function rand([min = 0, max = 1000]) {                              

    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))   
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//43
//996
//8
//549
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:1
//(function (exports, require, module, __filename, __dirname) { function rand([min = 0, max = 1000]) {                              
//                                                                           ^
//
//TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined
//    at rand (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:1:76)
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:12:13)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.576 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//43
//997
//4
//982
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:1
//(function (exports, require, module, __filename, __dirname) { function rand([min = 0, max = 1000]) {                              
//                                                                           ^
//
//TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined
//    at rand (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:1:76)
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:12:13)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.522 seconds