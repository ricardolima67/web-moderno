//22/04/2021: 33.Declaração de Variávies com Let 

//Nesta aula vamos fazer um paralelo entre o var e o let para ficar mais claro sobre suas diferenças básicas.
//Vamos definir primeiro uma var chamada número que recebe um e vamos colocar dentro do bloco{} uma variável com let ao invés de var, colocando let chamada número que recebe 2,
//em seguida vamos imprimir usando a sintaxe console.log('dentro=', numero(valor de número)) e por fora: vamos colocar console.log('fora=', numero); portanto aqui vamos fazer 
//um teste p/ver o que acontece, pois o let possui escopo de bloco, mesmo não sendo uma função, qualquer bloco o let vai ter escopo apenas dentro do bloco específico, ou seja, 
//ele estará visível apenas dentro do bloco, isso significa que no console.log('dentro=', numero) vai imprimir a função com nº2 e o console.log('fora=', numero) vai imprimir a 
//função com o nº1, embora tenham o mesmo nome, eles estão em escopos diferentes, portanto ao executar retorna:
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//dentro= 2
//fora= 1

//[Done] exited with code=0 in 0.636 seconds

var numero = 1
{
    let numero = 2
    console.log('dentro=', numero)
}
console.log('fora=', numero)

//E se caso substituirmos a linha15:o var pelo let, o resultado será o mesmo das linhas10 e 11, não havendo conflito, porque a linha 15 tem um escopo mais abragente e na linha17
//temos uma variável de escopo número que é mais restrito(num escopo menor)=>o escopo menor tem preferência; então como existe uma variável número no escopo menor(que é o escopo 
//de bloco): o sistema dá preferência em usá-la, caso não existir, o sistema vai usar a mais externa(linha15), então se colocarmos p/ex.:2 na frente de número:linha 27, temos:
var numero = 1
{
    let numero2 = 2
    console.log('dentro=', numero)
}
console.log('fora=', numero)

//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//dentro= 1
//fora= 1

//[Done] exited with code=0 in 0.477 seconds

//Ele imprimi tanto dentro quanto fora o número 1(linhas 3e 34), ou seja, o sistema procurou no escopo interno(linha27)p/verificar se tem o número(nesse caso não tem), então ele
//procurou no escopo mais abrangente(linha25) que tem o número 1, então sistema usa ele(o número 1). Quando temos uma variável no escopo menor, o sistema vai dar preferência em
//pegar o valor do escopo menor, caso contrário ele vai procurar no escopo mais abrangente.
//Então trata-se de uma diferença bastante importante e temos que ter isso decorado, variávies definidas com a palavra reservada VAR tem ESCOPO GLOBAL E TEM ESCOPO DE FUNÇÃO, e
//variáveis definidas com a palavra reservada LET tem ESCOPO GLOBAL, ESCOPO DE FUNÇÃO E ESCOPO DE BLOCO, cuja diferença está em um escopo a mais, fazendo toda a diferença em várias
//questões problemáticas que tinha-se com a definição de variáveis do tipo VAR.