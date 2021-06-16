//27/04/2021: 42.Operadores: Atribuição

//Nesta aula vamos abordar o assunto sobre operadores, começando por um operador super simples e muito usado que é o operador de atribuição.
//Só tem um operador?R.:Existe o operador de atribuição e algumas variações do mesmo usando algumas operações aritméticas.
//Pra começar, vamos criar uma constante com o nome "a" recebe sete e de cara já começamos com uma atribuição, o símbolo de igual(=)na linha 11 não está no contexto de comparar
//p/saber se "a"é igual a 7, na verdade, este símbolo está fazendo uma atribuição, colocando o valor 7 dentro desta constante chamada "a". Em seguida vamos criar uma variável
//let com o nome de "b" que recebe 3, ou seja, recebe uma atribuição com um valor inicial de "b" recebendo o valor 3 conf.linha 12; e apartir de agora vamos fazer algumas atribuições
//usando uns atalhos que junto da atribuição é feito uma operação aritmética conf.linha 14, ou seja, estamos fazendo uma distribuição aditiva(junto c/a distribuição estamos fazendo 
//uma adição), isso não está substituindo o valor de "b" pelo valor de "a"(que seria uma atribuição normal), na verdade estamos acrescentando o valor de "a" à variável "b", ou seja,
//"b"tem 3 acrecentando 7 o valor vai dar 10, isso seria equivalente a ter "b" recebe o próprio valor de "b" mais o valor de "a"conf.linha 14, mostrando no console(linha 15)=linha17.
const a = 7
let b = 3

b += a // b = b + a
console.log(b)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//10
//
//[Done] exited with code=0 in 3.757 seconds

//Próximo passo vamos fazer uma atribuição subtrativa(estaremos subtraindo 4 do valor de "b"), que seria o equivalente a "b" receber "b" menos 4 conf. linha 23, o resultado do conso-
//le.log conf.linha 24 vai ser 6 conf.linha 26.
b -= 4 // b = b - 4                          
console.log(b)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//6
//
//[Done] exited with code=0 in 0.532 seconds

//Próximo passo vamos fazer uma atribuição multiplicativa(estaremos multiplicando 2 do valor de "b"), que seria o equivalente a "b" receber "b" multiplicando por 2 conf. linha 32,
//o resultado do console.log conf.linha 33 vai ser 12 conf.linha 35, pois de acordo c/a linha 26 o valor 6 do resultado multiplicado p/2 vai ser igual a 12.
b *=2 // b = b * 2
console.log(b)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//12
//
//[Done] exited with code=0 in 0.543 seconds

//Próximo passo vamos fazer uma atribuição divisiva(estaremos dividindo 2 do valor de "b"), que seria o equivalente a "b" receber "b" dividindo por 2 conf. linha 41,
//o resultado do console.log conf.linha 42 vai ser 6 conf.linha 44, pois de acordo c/a linha 35 o valor 12 do resultado dividido p/2 vai ser igual a 6.
b /= 2 // b = b / 2
console.log(b)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//6
//
//[Done] exited with code=0 in 0.553 seconds

//Próximo passo vamos fazer uma atribuição modular(que seria atribuir a variável "b" o módulo(%)2), então seria o equivalente a fazer "b" recebe "b" módulo(%)2, que é o resto da 
//divisão da operação do valor de "b" com módulo(%)2 c/base na descrição da linha 51(SE FOR UM VALOR PAR O RESULTADO VAI SER ZERO(0)E SE FOR UM VALOR ÍMPAR O RESULTADO VAI SER UM(1));
//como o resultado da linha 44 é 6(nº par), o valor de "b" vai ser Zero(0) conf.descrito na linha 54.
b %=2 // b = b % 2
console.log(b)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//0
//
//[Done] exited with code=0 in 0.555 seconds

//Então temos, portanto, algumas atribuições misturadas com operações aritméticas que dá esse atalho, sempre o símbolo da operação aritmética vem antes e a atribuição vem depois, ou
//seja, mais igual, menos igual, vezes igual, divisão igual e módulo(%) igual (b %=2).