//28/04/2021: 48. Operadores: Relacionais

//Nesta aula vamos falar sobre os operadores relacionais que tbm.são binários, segundo o professor, esse procedimento possui uma pegadinha por conta que o JavaScript é uma lin-
//guagem fracamente tipada existindo uma forma diferente de fazermos uma comparação; qdo.fazemos uma comparação usando um operador relacional o resultado sempre será Verdadeiro
//ou Falso, p/ex.: 13 é maior do que 2?R.:Sim ou Não; existindo outro tipo de resposta que seja sim ou não. 
//É por isso que veremos muito frequentemente dentro de laços, ou testes condicionais os operadores relacionais sendo usados para saber se uma coisa é igual a outra ou se é di-
//rente, portanto as únicas respostas são verdadeiro ou falso(sim ou não).
//Por conta da linguagem ser fracamente tipada, no momento de comparar, temos que saber se queremos comparar os valores pra saber se são iguais mesmo qdo.são tipos diferentes ou
//se a gente quer comparar de uma forma mais precisa, com maior exatidão. 
//Vamos colocar console.log('01)'conf.linha14, pra fazer um primeiro teste vírgula com o um entre aspas(ou seja, é uma string)sendo igual igual a um (qdo.vimos apenas um sinal de
//igual(=)significa ser símbolo de atribuição(recebe) e dois símblos de iguais (==)é um símbolo de um operador relacional que compara igualdade entre duas coisas, sendo tbm.um 
//operador binário, onde temos '01' o 1ºoperador e '1' o 2ºoperador; pergunta: de acordo com a sintaxe linha 14 eles são iguais?R.:Segundo o JavaScript: Sim, porque neste caso está  
//se comparando valor e não estamos preocupados com o tipo; então qdo.rodamos a sintaxe, temos conf.linha 16 o resultado 01 como verdadeiro:  
console.log('01)', '1' == 1)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//01) true
//
//[Done] exited with code=0 in 0.5 seconds
//
//Se executarmos com três iguais os resultados serão diferentes, onde '1' é estritamente igual(===) a '1', no caso não, porque um é string e o outro é number, conf.linha25.
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)   
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//01) true
//02) false
//
//[Done] exited with code=0 in 0.837 seconds 

//O próximo é 3 é diferente de 3(o símbolo p/representar diferente é exclamação igual !=), conf.linha 36 retorna falso, porque na verdade eles são iguais.
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)  
console.log('03)', '3' != 3)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//01) true
//02) false
//03) false
//
//[Done] exited with code=0 in 0.673 seconds

//Agora vamos ver um exemplo com o Extritamente Diferente(o símblo p/representar esse termo é: exclamação igual igual(!==)), então nesse caso eles são diferentes?R.:Sim, conf.linha
//49 porque um é tipo string e o outro é tipo number.
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)  
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3) 
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//01) true
//02) false
//03) false
//04) true
//
//[Done] exited with code=0 in 0.678 seconds

//Agora vamos ver os clássicos, menor que, maior que, menor ou igual, maior ou igual: então o 5º teste vai ser 3 é menor do que 2, conf.linha 65:Não, é falso. 
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)  
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3) 
console.log('05)', 3 < 2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//01) true
//02) false
//03) false
//04) true
//05) false
//
//[Done] exited with code=0 in 0.609 seconds

//Agora o 6º teste, se 3 é maior do que 2, conf.linha 82 retorna verdadeiro.
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)  
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3) 
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//01) true
//02) false
//03) false
//04) true
//05) false
//06) true
//
//[Done] exited with code=0 in 0.556 seconds

//Agora o 7º teste, se o 3 é menor ou igual a 2, conf.linha 101 retorna falso.
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)  
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3) 
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//01) true
//02) false
//03) false
//04) true
//05) false
//06) true
//07) false
//
//[Done] exited with code=0 in 0.743 seconds

//Agora o 8º teste, se o 3 é maior ou igual a 2, conf.linha 122 retorna verdadeiro.
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)  
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3) 
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//01) true
//02) false
//03) false
//04) true
//05) false
//06) true
//07) false
//08) true
//
//[Done] exited with code=0 in 0.709 seconds

//Agora vamos criar duas datas em JavaScript: sendo uma constante chamada d1 recebe new date passando o valor 0(zero), o 0(zero)significa a data de referência no JavaScript
//que é 01/01/1970, dependendo do fuso horário pode dar um pouquinho antes, o 0(zero)é o marco de início da data, sendo que muitas linguagens tbm.acabam usando essa data.
//Vamos criar uma segunda constante chamada de d2 e para fazer a comparação entre as duas, vamos fazer o seguinte: console.log como 9º teste(caso 9) onde d1 é estritamente 
//igual a d2(===). Nesse caso que estamos trabalhando com uma variável de referência de memória não vai fazer muita diferença se usarmos o extritamente igual ou simplesmente
//o igual porque ele vai estar comparando nesse caso endereço de memória conf.linha 133, então na linha 134: 10ºteste(caso 10) temos:
const d1 = new Date(0) 
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//09) false
//10) false
//
//[Done] exited with code=0 in 0.521 seconds
//De acordo com as linhas 136 e 137 ambas retornaram falso, então extritamente igual ou simplesmente igual retornam a mesma resposta.

//Continuando colocando console.log como 11º teste(caso 11)vamos pegar d1 ponto getTime é estritamente igual(===)ao d2 getTime conf.linha 149?R.: Nesse caso vai retornar Verdadeiro
//conf.linha 153 porque ele está comparando um number e vai dar o valor em milisegundos(Gets the time value in milliseconds.)desde a data de referência até hoje(28/04/2021)e como 
//são numbers, eles são extritamente iguais(na linha 149 se colocássemos simplesmete iguais(==)voltaria o mesmo resultado.)porque eles têm o mesmo tipo e o mesmo valor.
const d1 = new Date(0) 
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//09) false
//10) false
//11) true
//
//[Done] exited with code=0 in 0.547 seconds

//Continuando colocando console.log como 12º teste(caso 12)queremos saber se undefined é igual(==) a nulo?R.:Sim, conf.linha 168 retornou Verdadeiro.
const d1 = new Date(0) 
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//09) false
//10) false
//11) true
//12) true
//
//[Done] exited with code=0 in 0.568 seconds

//Continuando colocando console.log como 13º teste(caso 13)queremos saber se undefined é estritamente igual(===) a nulo?R.:Sim, conf.linha 179 retornou Falso.
const d1 = new Date(0) 
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//09) false
//10) false
//11) true
//12) true
//13) false
//
//[Done] exited with code=0 in 0.578 seconds

//Obs.: Vias de regra é melhor usarmos o Estritamente Igual(===)p/não ficar confundindo tipos e tal, pois tipos diferentes podem ter o mesmo valor, temos que nos atentar quanto a 
//isso, para evitar de misturar tipos e estarmos trabalhando com uma coisa só porque pode gerar algum tipo de efeito colateral, portanto se formos usar a igualdade é mais
//adequado usarmos Estritamente Igual(===), pois o simplesmete igual(==igualdade)ignora a questão dos tipos.
//Os operadores relacionais têm uma única diferença essa questão do estritamente igual ou estritamente diferente porque ele leva em consideração não só o valor como tbm. o tipo das
//variáveis.