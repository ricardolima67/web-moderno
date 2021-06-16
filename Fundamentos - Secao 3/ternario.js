//30/04/2021: 51.Operadores: Ternário
//
//Vimos operadores binários e unários, nessa aula vamos ver os operadores ternários(que são três operandos) em JavaScript.
//Vamos criar uma função arrow para chamar o operador ternário duas vezes e não repetir código para ficar bem claro a diferença de função e o que é operador ternário.
//Criando uma constante chamada de resultado, que vai ser uma função, que vai receber uma função arrow(1º o nome do parâmetro chamado nota, observar que só temos um único parâmetro:
//nota, por isso podemos tirar os parêntesis que envolve todos os parâmentros de uma função), em seguida vamos colocar a setinha da função(=>) e o que vier agora mesmo que não cha-
//me returning(nem pode chamar o returning dessa forma)o retorno é implícito, e o operador ternário fará esse papel, então vamos colocar uma expresão relacional(a 1ª parte do operador
//ternário é colocar uma expressão que vai retornar verdadeiro ou falso).Então nota maior ou igual a 7, depois vamos colocar o operador ternário(representado p/ponto de interrogação?)
//Então o 1º operando é essa expressão relacional(nota >= 7)que vai dar verdadeiro ou falso, se der verdadeiro - a 1ªparte será retornada(Aprovado) e 2ªparte será retornada depois 
//dos dois pontos(Reprovado)cujos conteúdos então em strings, então essa expressão(nota >= 7 ? 'Aprovado' : 'Reprovado')é o operador ternário, onde a 1ªparte do operador ternário é
//uma expressão relacional(nota >= 7)no caso maior ou igual, se for verdadeiro essa expressão ele vai retornar "aprovado" e se essa expressão for falso vai retornar "reprovado"; 
//com essa função terminada, vamos testar na linha 15 a impressão/retorno passando resultado como 7.1, onde retorna como aprovado conf.linha17:
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Aprovado
//
//[Done] exited with code=0 in 0.965 seconds
//Porque 7.1 é maior do 7, por isso retorna aprovado.
//Se no segundo cenário passarmos uma nota menor que 7, teremos conf.linha28 - reprovado.
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Aprovado
//Reprovado
//
//[Done] exited with code=0 in 0.573 seconds
//
//Se quiséssemos separar essa expressão(nota >= 7 ? 'Aprovado' : 'Reprovado'), podemos criar uma constante chamada status recebe nota >= 7 ? 'Aprovado' : 'Reprovado' conf.linha38,
//então: a resposta de 1 operador ternário é retornar um dos dois valores podendo armazernar em uma constante ou como pode tbm.neste caso retornar como resultado dessa função(linha13).
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))
//console status = nota >= nota >= 7 ? 'Aprovado' : 'Reprovado'
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:5
//console status = nota >= nota >= 7 ? 'Aprovado' : 'Reprovado'
//        ^^^^^^
//
//SyntaxError: Unexpected identifier
//    at createScript (vm.js:80:10)
//    at Object.runInThisContext (vm.js:139:10)
//    at Module._compile (module.js:599:28)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.525 seconds
//Então o Operador Ternário é composto por 3 partes, onde a 1ªparte(nota >= 7) é uma expressão relacional que vai retornar sempre verdadeiro ou falso colocando em seguida a 
//?(interrogação),em seguida vai mostrar a 1ªparte que vai ser o resultado da expressão como verdadeira e em seguida dois pontos para mostrar a 2ªparte que vai ser o resultado
//da expressão como falso.
//Se olharmos uma função arrow junto com um operador ternário pode ficar tão curto que pode gerar estranheza, mas com o tempo vamos nos acostumando tanto com ternário e com 
//funções arrow ficando muito evidente com a prática; poderíamos fazer p/ex.: converter (nota >= 7 ? 'Aprovado' : 'Reprovado')essa expressão para uma função arrow mas com corpo,
//nós poderíamos abrir chaves{}depois da setinha(=>)e dentro das chaves colocar return com a expressão relacional(nota >= 7 ? 'Aprovado' : 'Reprovado'), que funcionaria da 
//mesma forma, conf.abaixo:
const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado(7.1))
console.log(resultado(6.7))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Aprovado
//Reprovado
//
//[Done] exited with code=0 in 0.487 seconds