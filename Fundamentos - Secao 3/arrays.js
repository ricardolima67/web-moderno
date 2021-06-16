// 15/04/2021: 25.Tipos em JavaScript: Array

// Array é como um vetor, uma estrutura unidirecional onde consegue-se agrupar várias variáveis e múltiplos valores, p/ex.: VarA, VarB, VarC(cada variável c/seu identificador:A,B,C)
//de uma forma linear não tendo muitas dimensões p/padrão, como se fosse um elemento atrás do outro(sequência), sendo um estrutura indexida, onde acessamos os elementos de uma Array
//a partir de um nº, sendo o 1º elemento a partir do índice ZERO(0), o 2º elemento acessa-se a partir do índice 1, o 3º elemento acessa-se a partir do índice 2 e assim sucessivamente;
//o Array é fixo, p/ex.:uma Array é definida a partir de 5 posições:sempre terá 5 posições, sendo heterogênio pois a linguagem é fracamente tipada dentro das variáveis podendo colocar
//qualquer coisa dentro dessas variávies(nºs, palavras, letras e um string, nº e string, etc...), crescendo e diminuindo de forma bem flexível.
//Na linha10 podemos criar arrays de forma literal(uso dos colchetes) e coloca os elementos separados por vírgula, então: temos uma array c/ 4 posições, em seguida colocamos console.
//log valores de índice ZERO(0) e valores de índice 3 p/imprimir/executar: ele vai trazer 7.7 e 9.2., conf. linha 11; a linha12 retorna UNDERFINED(INDEFINIDA).
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
valores [4] = 10
console.log(valores)
valores [10] = 10
console.log(valores)
console.log(valores.length)
valores.push({id:3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores)
//Continuando na linha13: valores c/índice 4 recebe 10: executando a sintaxe não dá problema nenhum; executando a linha14 ele retorna o índice 4, ou seja:[7.7, 8.9, 9.2, 10]; e se 
//colocássemos índice 10 na linha15: retornaria [7.7, 8.9, 6.3, 9.2, <6 empty items>, 10] dizendo que tem 6 itens vazios no meio da array(sequência)
//Podemos acessar a qtde.de arrays a partir da variável LENGTH conf.linha17 executando das linhas10 à 14=trazendo 5 elementos.
//Existe tbm.uma função chamada PUSH p/adicionar novos elementos numa array conf.linha18 e dentro do parêntesis(parâmetros vamos colocar um objeto{}, um boolean, um null(nulo), e 
//um texto chamado de 'teste'), em seguida imprimir no console conf.linha19 onde retorna:[7.7, 8.9, 6.3, 9.2, 10, { id:3 }, false, null, 'teste'], podendo misturar coisas dentro de 
//array, o ideal não é misturar coisas, o padrão é uma array p/cada tipo de coisa, ou seja, dados homogênios, pois o código fica muito mais organizado.
//Temos tbm.uma função chamada POP, ele retira o último vr.do elemento de uma array, p/ex.:linha18->ele vai retirar o 'teste'; de acordo c/a linha20: retornando apenas a palavra teste.
//Além do POP, outra forma de excluir um elemento de uma array é usando a função DELETE conf.linha21, onde retorna sem o elemento 7.7 e o último: teste.
//Tem tbm. o TypeOf(TipoDe)conf.linha23 onde em JS uma array é do tipo OBJECT(OBJETO), então qdo.se executa; retorna=OBJECT.