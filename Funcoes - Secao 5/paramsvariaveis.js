//10/05/2021: 68. Parâmetros Variávies 
//
//De acordo com a aula passada, foi mostrado que parâmetros podem ser passados quantos nós quisérmos, embora a função possa limitar parâmentros que não foram declarados, 
//ignorando-os, mas temos uma forma antes mesmo da versão do ECMASCRIPT 2015 com o operador Spread éramos capazes de ter parâmetros variávies em uma função e nesta aula
//será mostrado como utilizar esse recurso dentro de funções em JavaScript.
//Vamos criar uma função chamada soma que não vai receber nenhum parâmetro, só que o fato de não receber nehnum parâmetro não significa que não podemos passar nenhum 
//parâmetro(é uma das estranhezas de JavaScript), mas podemos passar parâmetros sim e dentro da função tem como a gente recuperar esses parâmetros a partir de uma 
//propriedade chamada "ARGUMENT", então vamos fazer assim: let soma recebe zero, vamos fazer um for em cima de arguments, ou seja, vamos pegar o índice "i"(arguments é
//uma array)e esse array vamos pegar o índice de cada elemento do array, fazendo um for in no mesmo e a partir desse índice a gente consegue fazer arguments, colchetes 
//acessando o índice de cada um dos elementos que foram passados como argumento p/essa função, então podemos pegar cada um dos elementos e somando a esta variável criada
//chamada let soma = 0, então soma recebe uma atribuição aditiva(+=)colocando arguments passando o índice 1(arguments é uma array interna de uma função que têm todos os
//argumentos que foram passados)e aí pegamos cada um dos argumentos, soma-se e no final retorna o valor de soma que é o resultado de todos os parâmetros passados e a forma
//de chamar a função é super simples colocando console sem passar nenhum parâmetro onde o valor rertornará 0(zero)porque ele não vai ter nenhum argumento p/entrar no for;
function soma () {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//0
//
//[Done] exited with code=0 in 0.721 seconds

//Continuando da linha 13, outro teste que podemos fazer é soma passando o valor 1, o sistema imprimi o valor 1:
function soma () {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//1
//
//[Done] exited with code=0 in 0.556 seconds
function soma () {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1.1, 2.2, 3.3))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//6.6         Porque somou todos os elementos do console ref.a linha50.
//
//[Done] exited with code=0 in 0.517 seconds
function soma () {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//6.6
//3.3000000000000003Teste
//
//[Done] exited with code=0 in 0.499 seconds
//Ao colocar "Teste"na linha 64, ele vai somar 1.1+2.2 e depois ele vai concatenar com a string Teste retornando conf.linha 67; então se passassemos só strings ele iria
//concatenar, porque a lógica que está sendo feita é essa, então de acordo c/a linha 82 ele tem que retornar 0abc conf.linha86, porque o 0(zero)está presente na linha 73.
function soma () {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//6.6
//3.3000000000000003Teste
//0abc
//
//[Done] exited with code=0 in 0.946 seconds

//Temos a possibilidade do uso do arguments do array interno ref.as linhas 74 e 75, toda a função tem esse array disponível, qdo.nenhum parâmetro é passado esse array está
//vazio e temos a possibilidade de pegar todos os parâmetros que foram passados a partir de uma chamada de uma função e fazer qualquer tipo de operação nele, inclusive o que 
//foi feito mas linhas 74 e 75 que foi pegar cada um dos parâmetros e somar, então a gente consegue passar parâmetros variávies, quantos a gente quisér p/que tenhamos o resultado
//de todos os parâmetros somados.