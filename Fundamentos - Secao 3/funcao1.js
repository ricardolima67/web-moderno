//19/04/2021 = 29.Exemplos Básicos de Funções #01.

//Nesta aula vamos estudar função e na linha14 e 15 vamos criar uma função sem retorno em JavaScript, em nenhum momento deixamos explícito que uma função retorna alguma coisa, pois 
//podemos p/ex.:chamar uma função e em um determinado momento ela pode ou não retornar alguma coisa. Em uma analogia: vamos imaginar a função como sendo uma receita de bolo, uns
//dos exemplos mais usados p/falar sobre algoritmo(tendo tudo a ver c/algoritmnos e os dados). Uma função é um verbo(representa uma ação, executa um processo) baseados na setença 
//de códigos. A função define um bloco associado, bloco em JavaScript é delimitado por chaves {}, onde temos a função e em seguida temos o corpo da função que é o bloco do qual tem
//todas as sentenças de código que serão executadas qdo.invocarmos a função. Função nada mais é que um trecho de código que nomeamos e podemos reusar esse trecho onde quisérmos
//chamar dentro do programa. A Função como receita de bolo: recebe alguns ingredientes de entrada que são os dados recebidos e dentro dessa função vamos fazer todo o passo a passo
//da receita p/no final retornar um resultado: que seria o bolo feito.
//Então a função é um bloco de código, onde agrupa várias sentenças de códigos, ou uma, ou tbm.nenhuma, pois pode-se criar uma função vazia, onde daremos um nome p/esse bloco e assim
//especificar a função; p/ex.:temos funções nomeadas e anônimas(funções sem nome). As funções recebem seus parâmetros de entrada que são os seus ingredientes e executamos o algoritmo,
//ou seja, o passo a passo de todas as sentenças de código onde no final retorna um valor. Uma função pode não receber nenhum parâmetro(ou seja, nenhum ingrediente), uma função pode
//não retornar dado, uma função pode receber dados de entrada, bem como pode receber ou retornar, etc...etc...DEFINIR AS FUNÇÕES COM BONS NOMES, pois função é muito importante.
// funcao sem retorno    =>onde vamos colocar o nome da função(L20)informando as variáveis, ou seja, os parâmetros de entrada da função: então vai receber um parâmetro "a"(vírgula),
//um parâmetro "b"; OBS.:NÃO FOI USADO A PALAVRA RESERVADA "VAR", "LET" e "CONST"; simplesmente colocamos os nomes das variávies/parâmetros que queremos receber da função que são 
//2(dois): o "a" e o "b"(Essas variávies são nºs inteiros?R.:Não sabemos, pode ser qualquer coisa, porque JavaScript é uma linguagem fracamente tipada, onde podemos informar o que 
//desejarmos), então vamo abrir um bloco abrindo e fechando chaves{} conf.linha20 à linha 22 e dentro das chaves vamos colocar console.log(a + b), se for um String ele vai concatenar
//e se for qualquer outro objeto pode ser que gere algum problema por estarmos somando e se for valores inteiros vai executar a soma, então agora vamos chamar essa função colocando
//Imprime Soma 2 e 3, passando 2 e 3(parâmetros dentro da função conf.linha23), onde retorna conf.exibido na L23: imprime a soma = 5.
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)  //[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"5
//Uma das coisas estranhas de JavaScript é: conf.linha 25 simplesmente passar apenas 1 valor dentro da função, o que pode acontecer é que o 2ºvr.vai ser UNDEFINED.
imprimirSoma(2)  //Então ao somar um vr.inteiro c/o vr.UNDEFINED, o resultado vai dar um NOT A NUMBER (NaN).
//Pode-se tbm.fazer conf.linha27, onde ele vai retornar 5, os dados do parâmetro ele vai ignorar; linha28=>retorna 12.
imprimirSoma(2, 3, 4, 5, 6, 7, 8)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()  //Linha29 retorna NaN, porque os parâmetros "a" e "b" não estão definidos.
//Agora vamos criar outra função, porém ela vai retornar um valor, ou seja: FUNÇÃO COM RETORNO, conf.linha31:
// Funcao com retorno
//L37:Function é a palavra reservada p/definir FUNÇÃO, o nome da FUNÇÂO será SOMA onde vamos colocar uma variável "a" e uma variável "b",e vamos dizer que p/padrão a variável b é 
//ZERO(0), onde ela retorna "a"+"b", então chamando essa função soma de console.log(), vale notar que não estamos imprimindo no console(return a + b)conf.linha38 como estávamos 
//fazendo na 1ª, estamos retornando o valor em resposta da chamada dessa função, então por isso que estamos chamando dentro de um console ponto log a função soma conf.linha40, 
//retornando 5: [Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"5 [Done] exited with code=0 in 0.643 seconds.

function soma(a, b = 0) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2)) //Vai retornar 2 porque a variável "b" é igual a ZERO(0): [Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos
//\tempCodeRunnerFile.js"2; se colocarmos o nº1 na variável "b", ele vai retornar 3, pois 2+1=3.[Done] exited with code=0 in 0.643 seconds

console.log(soma())  //L44: se chamarmos a função soma sem passar nada(vazio), ele vai retornar um NOT A NUMBER(NaN), ou seja, ele vai tentar somar UNDEFINED que é a variável
//"a" com o 1 que é a variável "b", onde o resultado vai ser um not a number.