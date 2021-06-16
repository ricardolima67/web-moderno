//07/05/2021: 63. Usando a Estrutura FOR.
//
//Por mais que o While sirva por design p/qtdes.indeterminada de repetições, podemos tbm.usá-lo p/qtdes.determinadas.
//Nessa aula vamos começar o exemplo mostrando um while que tem um qtde.determinada de repetições e depois vamos pegar esse while e vamos transformar num For, onde vamos perceber que os
//mesmos elementos que vamos ter no while de forma mais espalhada, o For na sua estrutura vai colocar isso de uma forma mais oficial.
//Vamos criar um contador(c/a variável let)que recebe o valor um, vamos criar um while baseado neste contador(<= 10)menor ou igual a 10 e vamos executar, abrir {}e dentro das chaves/função,
//ou seja, dentro do while nós vamos ter que fazer alguma coisa p/que esse contador possa ser modificado p/que em um determinado momento ele passe a ser maior do que 10 e p/ que assim essa
//expressão passe a ser falsa e ele saia do laço; então vamos colocar console.log()p/imprimir o valor do contador no console e vamos fazer contador++, ou seja, vamos usar um operador unário
//onde estamos acrescentando uma unidade a contador, então cada vez que ele fizer uma repetição em(contador++)acrecenta-se uma unidade ao contador até que um determinado momento o contador 
//passe a valer mais do que 10 e assim essa expressão(contado <= 10)passe a ser falso.
let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//contador = 1
//contador = 2
//contador = 3
//contador = 4
//contador = 5
//contador = 6
//contador = 7
//contador = 8
//contador = 9
//contador = 10

//[Done] exited with code=0 in 0.253 seconds
//Conf.impressão do console, ele retornou o contador de 1 a 10, qdo.ele foi p/10, ele acrescentou de acordo c/a linha 14 mais 1 ficando 11 e 11 não é menor ou igual a 10, portanto isso
//virou falso e ele saiu do laço.
//Então pegando a mesma estrutura onde temos uma declaração let contador = 1 que refere-se a uma variável, temos uma expressão p/dizer se continua ou não no laço(while(contador <= 10)), e 
//finalmente temos o incremento(contador++), então esses três elementos: a declaração, a expressão e o incremento estão presentes num laço FOR, então continuando a sintaxe, dentro do pa-
//rêntesis do for vamos colocar a declaração da variável que pode ser "i" recebe o valor 1, podendo ser tbm.var ou let, nesse caso o prof.optou p/usar a variável let p/ser a forma padrão
//na linguagem das sintaxes(let i = 1; usando ponto e vírgula que é o sepador da primeira parte e em seguida a segunda parte é a expressão (contador <= 10)que vai dizer se ele vai continuar
//ou não dentro do laço colocando i <= 10; i++), os mesmos três elementos (let i = 1; i <= 10; i++)aqui descritos tbm.estão presentes se quisérmos fazer um while(contador <= 10)que seja 
//c/qtde.determinada de vezes, ou seja, esse vai repetir 10 vezes da mesma forma que o For vai repetir 10 vezes, em seguida vamos imprimir o valor de "i" no console, executando:
let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//contador = 1
//contador = 2
//contador = 3
//contador = 4
//contador = 5
//contador = 6
//contador = 7
//contador = 8
//contador = 9
//contador = 10
//i = 1
//i = 2
//i = 3
//i = 4
//i = 5
//i = 6
//i = 7
//i = 8
//i = 9
//i = 10
//
//[Done] exited with code=0 in 0.459 seconds

//Da mesma forma que ele imprimiu o contador de 1 até 10, ele fez o mesmo com a variável "i" de 1 até 10.
//
//Vamos fazer mais um exemplo colocando um array, podemos tbm.percorrer o array seguindo o mesmo jeito do que está nas linhas 43 a 45, em seguida vamos colocar For novamente 
//for(i = 0; i < notas.length)onde o length é o comprimento do array(a forma que temos de verificar qual o tamanho de um array é a partir dessa propriedade chamada length), então
//aqui estamos dizendo: comece a partir do 0(já que uma array começa a partir do índice 0)vá até o "i" menor que o tamanho do array e acrescente uma unidade(i++) ao valor de "i"
//p/cada interação, ou seja "i"mais mais, dessa forma a gente consegue pegar todos os elementos do array colocando console.log('nota = ${notas[i]}')que seria nota recebe notas 
//índice "i"colocando os colchetes acessando o índice "i"(i = 0;)e dessa forma vamos acessar cada um dos elementos ao array:
let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6,7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//nota = 6
//nota = 7
//nota = 7.4
//nota = 9.8
//nota = 8.1
//nota = 7.7
//
//[Done] exited with code=0 in 0.616 seconds
//É uma forma de navegar em cima do array usando notas.length, ou seja, usando a propriedade do array p/que ele possa ir navegando o array até chegar no tamanho do array, depois
//que completou o seu tamanho ele sai do laço.