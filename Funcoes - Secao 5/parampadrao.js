//11/05/2021: 69. Parâmetro Padrão
//
//Outro recurso que foi adcionado na versão ECMASCRIPT 2015 é o Parâmetro Padrão, mas não significa que antes da versão ES2015 não tinha formas de termos parâmetro padrão, nessa aula
//será mostrado como se fazia antes do ES2015 e depois 2015, ou seja, hoje em dia com uma versão mais fácil e elegante.
// Estratégia 1 para gerar Valor Padrão
//Vamos demonstrar algumas possibilidades de usar estratégias de gerar valor padrão: a 1ª estratégia é: Usar o Operador "OU" p/termos o efeito de um valor padrão de uma variável que 
//não está setada, qdo.o vr.da variável está nulo, undefined, ele vai p/o segundo operando de uma operação "OU" e retorna esse operando caso essa primeira parte da expressão seja falsa.
//Criando uma função chamada de soma1 com parâmetros a, b, e c, onde "a" recebe "a"ou o vr.1, depois "b" recebe "b";ou vr1, se "b"for um valor que retorne falso, ele vai retornar por padrão
//o segundo operando(o 1 da linha 14 dessa operação "OU")e depois "c" recebe "c" ou vr1; usando o operador "OU" a gente consegue ter essa estratégia de trazer um valor padrão p/uma variável
//que resolveu p/um vr.falso. Isso irá gerar alguns efeitos colaterais; continuando na linha16 c/certeza o vr.vai estar setado ou p/o vr.que foi passado ou o vr.1,sem ter perigo de ser nulo
//ou undefined, ou qualquer outra coisa, pode até ser um vr.diferente de um vr.inteiro, ou seja, diferente de um vr.numérico, então vamos testar a função conf.linha 19:
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3    De acordo c/a linha 16 o resultado é 3.
//
//[Done] exited with code=0 in 0.482 seconds

//Fazendo um teste continuando a usar o console.log(soma1(), soma1(3))passando soma1 passando o valor 3, então o 1º vai receber o vr.3(a), b e c como não foi passado nenhum valor
//continuarão como 1 respectivamente, portanto a conta de resultado seria: 3+1+1=5 conf.linha36.
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3 5
//
//[Done] exited with code=0 in 0.442 seconds

//Fazendo o mesmo procedimento das linhas 25 e 26 fazendo um teste continuando a usar o console.log(soma1(), soma1(3), soma1(1, 2, 3)), temos como resultado 6, conf.linha 50:
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3 5 6
//
//[Done] exited with code=0 in 0.473 seconds

//O que vai acontecer de termos problemas é qdo.passarmos valores zeros(0), porque zero(0) infelizmente nesta estratégia ele vai retornar como sendo Falso. e por ser falso ele vai 
//assumir o valor padrão conf.linha 65 que retorna o resultado 3, pois se quisérmos somar 0+0+0 ele vai retornar o vr.3, então essa estratégia não vai servir porque o zero(0)retorna
//falso e como esse valor 1(linhas 58,59,60)se for falso, ele vai pegar o próximo:que é 1 e assim sucessivamente, então portanto 1+1+1=3, porque ele sempre vai assumir o 1, gerando
//um bug na funcionalidade.
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3 5 6 3
//
//[Done] exited with code=0 in 0.487 seconds

// Estratégia 2, 3 e 4 para gerar Valor Padrão
//Nesse segundo método será mostrado as três estratégias(2, 3, e 4)chamados nos exemplos anteriores:
//Vamos criar uma função chamada soma2 recebendo os mesmo três valores a, b, e c, p/gerar o valor padrão caso "a" não seja informado: se "a" for estritamente diferente de undefined,
//vamos usar um operador ternário(?)a = a !== undefined ? a : 1, pois caso seja diferente ele vai pegar o próprio valor de "a" e se o "a" for igual a undefined, ou seja, não foi passado
//o valor de "a" ele vai assumir o valor 1.
//A segunda estratégia p/colocar um vr.em "b" é a seguinte: b = 1 in arguments, ou seja, existe o segundo argumento que foi passado p/a função soma2?; já que o primeiro argumento é de 
//índice 0(zero), então o "b" que estamos fazendo aqui e estamos perguntando dentro de argumets se existe o índice 1?; se existir pegue o valor de "b", se não, pegue o valor padrão que
//é o valor 1 de acordo com a sintaxe: b = 1 in arguments ? b : 1.
//A terceira estratégia p/colocar um vr.em "c" é testando uma variável que foi passada p/"c"(isNaN)é igual a not a number retorne o valor padrão, e caso ela seja um número, que retorne
//o valor de "c" de acordo com a sintaxe c = isNaN(c) ? 1 : c.
//Segundo o professor, de toas as estratégias,a mais segura seria c = isNaN(c) ? 1 : c porque se estamos querendo somar valores, então a gente espera que venha um valor numérico de fato,
//e não uma string ou qualquer outra coisa.  
//Então nesse caso: c = isNaN(c) ? 1 : c  =>se não for um número, ele pega um valor padrão e se for um número ele pega o valor que foi passado como parâmetro, que neste caso é o "c". 
//Em seguida vamos colocar: return a + b + c e depois vamps fazer alguns testes com console.log(soma2())sem passar nada, onde vai assumir o valor 1 como padrão, então o resultado vai ser
//3, conf.linha 94, ou seja seja, retorna de acordo c/a linha 90: 1+1+1=3.
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c 
}

console.log(soma2())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3
//
//[Done] exited with code=0 in 0.506 seconds

//Fazendo um teste continuando a usar o console.log(soma1(), soma1(3))passando soma1 passando o valor 3, então o 1º vai receber o vr.3(a), b e c como não foi passado nenhum valor
//continuarão como 1 respectivamente, portanto a conta de resultado seria: 3+1+1=5 conf.linha110.
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c 
}

console.log(soma2(), soma2(3))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3 5  
//
//[Done] exited with code=0 in 0.434 seconds

//Fazendo o mesmo procedimento das linhas 99 e 100 fazendo um teste continuando a usar o console.log(soma1(), soma1(3), soma1(1, 2, 3)), temos como resultado 6, conf.linha 124:
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c 
}

console.log(soma2(), soma2(3), soma2(1, 2, 3))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3 5 6
//
//[Done] exited with code=0 in 0.51 seconds 

//E o próximo teste é colocando 0, 0 , 0 no console, temos o resultado como 0(zero)conf.linha 138, que era o que esperávamos:
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c 
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3 5 6 0
//
//[Done] exited with code=0 in 0.462 seconds

//Essas estratégias são um pouco trabalhosas e pode causar algum tipo de confusão ou mesmo bug como vimos nas linhas 54 a 57; então nesse caso o ECMASCRIPT 2015 trouxe 
//essa possibilidade de termos o parâmetro padrão, conforme será demonstrado a seguir:

// Valor Padrão do ES2015
//Usando agora o valor padrão do próprio ecmascript 2015, vamos criar uma função chamada soma3 onde o "a" vai receber como valor padrão 1, o "b" tbm.var receber como valor
//padrão 1, e o "c" tbm.como padrão vai receber o valor 1, neste caso, ão precisamos testar nada, simplesmente a gente coloca return a + b + c e em seguida podemos fazer os
//testes feitos anteriormente
function soma3(a= 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3
//
//[Done] exited with code=0 in 0.475 seconds
function soma3(a= 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3 5
//
//[Done] exited with code=0 in 0.494 seconds
function soma3(a= 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3 5 6
//
//[Done] exited with code=0 in 0.527 seconds
function soma3(a= 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0 , 0))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3 5 6 0
//
//[Done] exited with code=0 in 0.424 seconds

//Então nos casos acima, vimos uam redução significativa na forma de escrever, inclusive trazendo maior organização, portanto sem dúvida essa é forma preferida
//de uso e se tiver que escolher, escolher essa forma de sintaxe(linhas 176 a 180).