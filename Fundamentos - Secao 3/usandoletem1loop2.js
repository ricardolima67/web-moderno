//23/04/2021: 35.Usando Let em Loop #01.

//Em continuação ao assunto da aula passada ao invés de usar var, vamos usar o let: for (var i = 0; i < 10; i++) {console.log(i)}, ficando assim conf.abaixo:
for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i=', i)

//Essa sintaxe de comando com o let faz uma diferença absurda porque a variável "i"(let i = 0) só  estará visível dentro desse bloco for{console.log(i)}, então do lado de fora ref.
//a linha 8 o "i" não estará mais disponível, portando qdo.executarmos essa sintaxe/código, teremos o retorno conf.abaixo:
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//0
//1
//2
//3
//4
//5
//6
//7
//8
//9
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:5
//console.log('i=', i)
//                  ^
//
//ReferenceError: i is not defined
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:5:19)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.957 seconds
//Explicando o resultado de retorno acima, ele imprimiu de 0 até 9 e qdo.ele tentou imprimir o console.log('i=', i) ref.a linha 8, veio como resposta qu o "i" não está definido conf.
//linha 27; o fato da variável "i" ter escopo de bloco gera algumas outras implicações(não só pelo fato de que a variável não estará visível fora do bloco, que é o caso aqui que gerou 
//um erro).