//03/05/2021: 53.Tratamento de Erro (Try/Catch/Throw)
//
//Nesta aula vamos falar sobre tratamento de erros em JavaScript usando três palavras reservadas da linguagem que é o Try, o Catch e o Throw.
//A seguir vamos criar uma situação de erro que pode acontecer no nosso programa, como tratar, mostransdo o mecanismo de tratamento de erro e como se pode tratar uma exceção.
//Criar uma função chamada imprimir nome gritado colocando um parâmentro que vai receber um objeto e em cima desse objeto vamos chamar console.log(obj.name com to upper case ())
//e no final vamos concatenar com algumas exclamações, então vamos converter todas as letras p/maiúsculas, ou seja mensagem gritante por estar tudo em maiúsculo e continuando
//vamos chamar essa função criando um objeto o atributo nome(const obj = { nome: 'Roberto' })em português(ele naõ vai achar porque estamos tentando acessar usando o name) e no 
//vamos chamar a função imprimir nome gritado passando o objeto criado, conf.linhas 9 a 14:
function imprimirNomeGritado(obj) {
    console.log(obj.name.toUpperCase() + '!!!')
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:2
//    console.log(obj.name.toUpperCase() + '!!!')
//                         ^
//
//TypeError: Cannot read property 'toUpperCase' of undefined
//    at imprimirNomeGritado (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:2:26)
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:6:1)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 4.165 seconds
//Conf.linha 20 ele gerou uma exceção dizendo que a gente não consegue chamar o toUpperCase de algo que está indefinido.
//Então nesse caso o que se poderia fazer em um código que potencialmente pode gerar algum tipo de erro?R.:Vamos usar um comamando chamado Try. Try é um bloco de código da mesma 
//forma que uma função tbm.é um bloco de código que dentro dele tem um código que se julga pode gerar algum tipo de erro, gerando um erro e se quisérmos tratar esse erro, coloca-
//mos um bloco Try e associado a este bloco de tentar(try) vamos colocar um bloco do tipo Catch(Prender), ou seja, uma vez que gerou alguma exceção dentro de qualquer sentença de
//código dentro do bloco(console.log(obj.name.toUpperCase() + '!!!'))automaticamente no erro ele cai dentro do Catch e dentro do Catch nós podemos querer tratar o erro, p/ex.:querer 
//mostrar uma mensagem p/o usuário, pegar o erro que foi gerado e tentar fazer algum tipo de tratamento no mesmo; então vamos criar uma função chamada tratarErroELançar onde vai 
//ser mostrado a palavra reservada chamada Throw que é pra relançar um erro que foi gerado no bloco(console.log(obj.name.toUpperCase() + '!!!'))passando esse erro como parâmetro
//e na parte de cima vamos criar uma função(function tratarErroELançar(erro))onde dentro do parêntesis essa função recebe um erro que a gente espera que seja exatamente o erro 
//que aconteceu na linha 20 que foi capturado pelo Catch e dentro da função(function tratarErroELançar(erro))vamos colocar Throw new Error('...')passando p/ex. uma mensagem, no
//caso aqui ficou três pontinhos conforme a sintaxe de comando/código abaixo:
function tratarErroELancar(erro) {
    throw new Error('...')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } 
 }

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:2
//    throw new Error('...')
//    ^
//
//Error: ...
//    at tratarErroELancar (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:2:11)
//    at imprimirNomeGritado (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:9:9)
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:14:1)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//
//[Done] exited with code=1 in 0.645 seconds
//Conf.linha62: ele retorna o erro de acordo com o solicitado na linha 44 ('...') onde caiu no catch(linha50)onde foi chamada a função passando erro(tratarErroELancar(e))
//e em seguida ele executou a linha de código throw new Error('...') e passando essa mensagem('...').
//Pode-se tbm.colocar(linha80) podendo simplesmente lançar um nº ou qualquer coisa sem problema nenhum; retornando conf.linha98 e 104:dando um erro e lançando o nº10 e true:
function tratarErroELancar(erro) {
    // throw new Error('...')
    throw 10
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } 
 }

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:3
//    throw 10
//    ^
//10
//
//[Done] exited with code=1 in 0.619 seconds
function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    throw true
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } 
 }

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:4
//    throw true
//    ^
//true
//
//[Done] exited with code=1 in 0.602 seconds
//De acordo com as linhas 80 e 104 o JavaScript permite este tipo de construção, p/ex.: podemos colocar throw 'mensagem'(jogando só uma string, é permitido), sem problema
//nenhum, retornando conf.linha 149.
function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    throw 'mensagem'
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } 
 }

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:5
//    throw 'mensagem'
//    ^
//mensagem
//
//[Done] exited with code=1 in 0.659 seconds
//Pode-se tbm.lançar um objeto p/ex.: que tenha um atributo nome: erro.name conf.linha 159, onde ele retorna um object conf.linha178.
function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } 
 }

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:6
//    throw {
//    ^
//[object Object]
//
//[Done] exited with code=1 in 0.721 seconds
function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } 
 }

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:6
//    throw {
//    ^
//[object Object]
//
//[Done] exited with code=1 in 0.586 seconds
//Pode-se tbm.lançar vários objetos p/ex.: que tenham atributos conf.linha 187,188, e 189, onde ele retorna um object tbm.conf.linha 208.
//Então no caso anterior(linhas 187,188 e 189)teríamos que capturar essa chamada de acordo c/a linha 202(imprimirNomeGritado(obj))p/poder pegar esse erro e imprimi-lo.
//Uma outra palavra reservada tbm. associada p/essa questão de erro é conhecida por Finally, trata-se de um bloco que será executado sempre, mesmo que ocorra erro ou não,
//esse comando vai chamar esse bloco, então se terminou tudo bem o Try em seguida o mesmo(try)chama o Finally, p/ex.:ocorreu um erro no Try(try{console.log(obj.name.toUpperCase()
// + '!!!')), o sistema vai direcionar p/o Catch e vai executar essa função(catch (e) {tratarErroELancar(e)), e mesmo que dê problema, o sistema vai chamar o Finally conf.linhas
//234 e 235(finally {console.log('final'))de qualquer forma, então executando as linhas 217 a 240, temos na linha 242 o sistema retornando o 'final'.
function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
 }

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//final
//
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:6
//    throw {
//    ^
//[object Object]
//
//[Done] exited with code=1 in 2.021 seconds
//Na linha 239 ao invés de nome passar corretamente p/name conf.apontado na linha 274, retorna conf.linha 277 com letras gritantes(maiúsculas), chamando o 'final', independente 
//de ter erro ou não..
function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
 }

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//ROBERTO!!!
//final
//
//[Done] exited with code=0 in 0.807 seconds
//
//Então nessa aula foi visto que o comando Try é um bloco que potencialmente perigosos que pode gerar algum tipo de erro, a gente fez uma chamada Ajax e o serviço tá fora, 
//deu um erro 500, enfim, isso pode ser colocado dentro de um Try p/tratar isso a partir de um Catch e ter o fluxo da nossa aplicação p/qdo.der um problema sendo direcionado p/o
//Catch, e no Catch a gente pode tratar, relançar o erro, criar um ojeto, lançar um tipo, um próprio erro com número, string ou boolean, ou mesmo um objeto com mais detalhes 
//com a hora do erro, tipo de erro, com mensagem tratada usando o comando Throw(que significa: lançar); o Finally sempre será executado mesmo com o Try dando tudo certo ou mesmo
//que venha a cair no Catch, o Finally vai ser chamado de qualquer forma. Sendo isso uma visão geral de como fazemos tratamento no JavaScript, com uma ressalva importante, isso 
//serve p/qualquer linguagem: TENTAR EVITAR DE MOSTRAR P/O USUÁRIO DO SEU SISTEMA DETALHES DE INFRAESTRUTURA, MENSAGENS DE STACK TRACE(UM TECHO DE STACK TRACE GRANDÃO, O USUÁRIO
//VAI FICAR ASSUTADO), MENSAGENS QUE NÃO ESTÃO NA LÍNGUA, INGLÊS P/EX. QUE NÃO FAÇA SENTIDO P/O USUÁRIO, O IDEAL É QUE A GENTE JOGUE UMA MENSAGEM GENÉRICA EM ÚLTIMO CASO, P/QUE O
//USUÁRIO LEIA A MENSAGEM PELA GERAÇÃO DE UM CÓDIGO OU UM RASH que é gerado no log do sistema, o usuário manda aquele rash e a gente consegue localizá-lo e identificar qual foi 
//exatamente o erro ocorrido no log que causou uma falha geral, aquele erro genérico em nosso sistema.