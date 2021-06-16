//23/04/2021: 34.Usando Var em Loop #01.

//Continuando a comparação entre Var e Let, nesta aula vamos aprender a usar o Var dentro de 1 conceito/contexto de Looping(Repetição), onde vamos usar um laço FOR(laço de repetição).
//Quando temos um algoritmo temos uma sequência de 10 passos(não obrigatoriamente esses 10 passos executam de cima p/baixo, p/ex.: 1ªsentença de código=executa,termina; 2ª sentença de
//código=executa,termina e assim por diante de forma sequencial; uma terminando depois da outra p/execução do algoritmo). Existem formas de termos controle, que são as estruturas de 
//controle em cima desses códigos para que possamos tomar decisões p/ex.: tal código só será executado se determinada variável for maior do que um valor X(A nota do aluno for maior ou
//igual a 7, então pré-matricula esse aluno p/o próximo ano disparando um email p/os pais dizendo que ele foi aprovado), então exite o bloco de condição que é IF e o ELSE; existem
//alguns blocos de repetição que é o FOR, WHILE, etc...(for_statement, do...while_statement, while_statement, label_statement, break_statement, continue_statement, for...in_statement,
//for...of_statement) que são códigos que queremos repetir várias vezes.                                             
//Então vamos criar um FOR que tem três partes, sendo a 1ªparte: uma declaração de uma variável(onde vamos usar a palavra reservada VAR), em seguida colocamos ponto e vírgula para
//informar a condição que vai ser usado para ficar repetindo esse bloco e por último o incremento em um bloco {console.log(i)}cujo valor da variável "i"vai ser impressa:
for (var i = 0; i < 10; i++) {
    console.log(i)
}
//retornando a sintaxe de comando acima, retorna conforme abaixo:
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

//[Done] exited with code=0 in 1.96 seconds.
 //(var i = 0; i < 10; i++)=>então ele está simplesmente repetindo o valor de "i"(var i = 0), p/cada nova repetição o "i" vai ser incrementado
//i++(0,1,2,3,4,5,6,7,8,9,), qdo.o "i" tiver valor igual a 10 e 10 for menor do que 10 que vai ser uma expressão falsa(sempre que fazemos uma comparação, o resultado é verdadeiro ou
//falso), então o resultado qdo. der falso(i < 10), sai do laço e continua executando o programa depois do código. Em seguida vamos colocar um console.log('i =', i) p/imprimir o vr.
//da variável "i", sendo que esta impressão será feita depois que o laço terminou:

for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i=', i)
//Então teremos como resposta o seguinte resultado:

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
//i= 10

//[Done] exited with code=0 in 0.693 seconds
//O "i"está disponível porque foi definido c/ a palavra reservada var e o var não tem escopo de bloco e por este fato, o "i" não está visível apenas dentro do bloco{}{console.log(i)},
//mas estará visível tbm.fora do bloco conf.linha 38, por isso o valor de "i" neste contexto é 10, pois é o valor que fez com que ele saísse do laço, p/ex.: o "i" igual a 9 faz com
//que continue no laço?R.: Sim, porque 9 é menor do que 10, portanto isso continua verdadeiro, então o "i" só sai do laço qdo.passa a ser 10, pois essa expressão (i<10) passa a ser
//um valor falso, por isso que a impressão do console linha 38 retornou i = 10.
