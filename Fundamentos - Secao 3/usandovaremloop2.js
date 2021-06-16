//23/04/2021: 36.Usando Var em Loop #02.

//Nesta aula vamos abordar o assunto de var dentro de um contexto em looping onde vamos criar um Array vazio [], que no caso seria funcs recebe um array vazio[], declarando essa 
//array com var, mas tbm.pode ser declarado com const(que vai ser usado no exemplo), em seguida vamos colocar for (var i = 0)=>aqui neste contexto o var vai fazer diferença, depois
//ponto e vírgula: vamos colocar a condição que "i" tem que ser menor ou igual a 10 (i<10), em seguida ponto e vírgula com i mais mais(i++), ou seja, incrementando de 0 até 9 de 
//um em um(0,1,2,3,4,5,6,7,8,9)cada repetição ele vai incrementando o "i" até que o "i" fique igual a 10 e saia do laço. Dentro do laço(que é parte de dentro do bloco {})nós vamos
//preencher o array e dentro dele vamos colocar funções(usando o método push)colocando funcs.push(function()) {} onde vamos adicionar um novo elemento numa array e vamos adicionar
//uma função anônima e em seguida vamos referenciar essa função a partir do array confome demonstrado abaixo:
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//Na linha 12 mostra pelo parêntesis abertura da função(function) e na linha 14 mostra o fechamento desse parêntesis indicando o fechamento da função push e em seguida dentro de outro
//parêntesis foi colocado outra função function sem parâmetro()parêntesis em branco e em seguida colocamos o corpo da função {} abrindo e fechamento e aí dentro vamos definir a função
//onde simplesmente vai retornar console.log(i) pegando a variável "i", ou seja, para cada interação(var i = 0)vai adcionar uma nova função linha 12 no array(linha 9 que é o funcs) e 
//vai imprimir a variável "i"(var i = o)conf.linha13 que nesse contexto a variável é "i", e ele vai fazendo isso para cada uma das funções; qdo.terminar o laço: vamos chamar funcs[2]
//que significa índice 2 que é a terceira função ou o índice da sequência(0,1,2,3,4,5,6,7,8,9), então o 0 é o índice 1, o 1 é o índice 2, 0 2 é o índice 3, e assim sucessivamente,
//então vamos chamar a função de índice 2 e depois vamos invocá-la; pergunta: Qual será o valor de "i" linha 13 que vai ser impresso qdo. a gente chamar a função de índice 2 conf.
//linha 17 que é a terceira função adicionada numa array e em seguida qdo.chamarmos funcs índice 8 conf.linha 18 - qual será o valor de "i" que vai ser impresso no console conf.linha
//13, será que vai ser o mesmo valor ou valores diferentes, porque no momento que a função linhas 12 a 15 foi adicionada - o vr. de "i" era um vr. diferente, onde 1º começou o 0, o 1,
//o 2, e assim por diante; a função de índice 2 conf.linha17 o "i" vale 2 e a linha 18 o mesmo vale 8, só que pelo fato que a variável não tem escopo de bloco quando executarmos 
//esse código o resultado vai ser 10 para qualquer chamada que se fizer, isso é um problema histórico do JavaScript, onde nesse contexto seria respeitado o "i" que naquele momento que
//foi passado p/o console.log linha 13 e que pelo fato de var (var i = 0) não ter escopo de função acabou gerando esse efeito acabando por imprimir para todas as situações o valor de
//10, conf.demonstrado abaixo:

//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//10
//10
//
//[Done] exited with code=0 in 0.862 seconds.