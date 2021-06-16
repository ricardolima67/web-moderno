//12/06/2021: 112. Array: Visão Geral.
//
//Um Array em JavaScript é um objeto especial com caracteríscas próprias, mas não existe Array nativo em JavaScript, um tipo de dados Array;
//na verdade um array é um objeto, só que em vez dele organizar os seus atributos a partir de chaves, de identificadores, ele organiza os seus
//dados a partir de um índice(de uma estrutura indexida)começando do zero, então o primeiro elemento, o primeiro valor que se coloca no array 
//é de índice zero(0), depois índice 1, índice 2 e assim por diante.
console.log(typeof Array)   
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//function
//
//[Done] exited with code=0 in 0.747 seconds
//
//E se a gente der um type of new Array, sabemos que se usar o operador New junto de uma função o resultado é um objeto, ou seja, temos um ob-
//jeto a partir da instanciação de uma Array:
console.log(typeof Array, typeof new Array)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//function object
//
//[Done] exited with code=0 in 0.441 seconds
//
//Tbm.se fizérmos um type of de uma Array Literal [](uma Array Literal é usado com colchetes, assim como, um Objeto Literal é usado com cha-
//ves), então, da mesma forma que a gente instanciou um New Array gerou um objeto, um Array Literal tbm.é um objeto.
console.log(typeof Array, typeof new Array, typeof [])
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//function object object
//
//[Done] exited with code=0 in 0.531 seconds
//
//Apesar de ser uma linguagem heterogênea e fracamente tipada, os tipos de dados que podem ser colocados numa Array podem ser os mais variados 
//possíveis, podendo colocar um inteiro, um objeto, um number, um outro array, ou seja, não há uma restrição que outras linguagens tem de em 
//possuir uma estrutura homogênea, baseado nesse conceito, a Boa Prática diz que a gente deve trabalhar com dados homogêneos dentro de uma 
//Array, ou seja, todos do mesmo tipo, não é interessante a gente ter um Array com todos os elementos misturados(boolean, array, number,etc...)
//tornando muito difícil se trabalhar com uma coleção de dados misturados, o correto é trabalhar de forma organizada, um array só com produtos,
//um array só com clientes, etc....       
//Então vamos criar uma array conforme segue:
let aprovados = new Array('Tina', 'Ricardo', 'Nathália', 'Letícia')  //Essa não é uma forma não tão recomendada de criar Array, sendo o ideal a 
console.log(aprovados)                                              //forma literal.
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Tina', 'Ricardo', 'Nathália', 'Letícia' ]
//
//[Done] exited with code=0 in 0.459 seconds         
//
//Continuando vamos reatribuir(por isso o uso do let e não const)agora usando a notação literal[]       
aprovados = ['Tina', 'Ricardo', 'Nathália', 'Letícia']   //Essa é notação recomendada p/se usar no dia a dia.
console.log(aprovados[0])
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//Tina
//
//[Done] exited with code=0 in 0.487 seconds
aprovados = ['Tina', 'Ricardo', 'Nathália', 'Letícia']   
console.log(aprovados[1])
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//Ricardo
//
//[Done] exited with code=0 in 0.42 seconds
aprovados = ['Tina', 'Ricardo', 'Nathália', 'Letícia']   
console.log(aprovados[2])
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//Nathália
//
//[Done] exited with code=0 in 0.587 seconds
aprovados = ['Tina', 'Ricardo', 'Nathália', 'Letícia']   
console.log(aprovados[3])
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//Letícia
//
//[Done] exited with code=0 in 0.796 seconds
aprovados = ['Tina', 'Ricardo', 'Nathália', 'Letícia']   
console.log(aprovados[4])
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//undefined
//
//[Done] exited with code=0 in 0.473 seconds
//
//Continuando, vamos colocar aprovados[3] = 'Paulo', sendo essa uma forma que temos válida de adicionar um novo elemento dentro de uma array, se 
//acessarmos esse elemento 3 dentro do array, ele vai existir; uma outra forma que temos p/adicionar um novo elemento na última posição do Array
//que é a forma mais usual, mais do que adicionar um elemento assim(aprovados[3] = 'Paulo'), pois dessa forma é mais comum p/se substituir um e-
//mento que já existe a partir do índice, o método do Push é mais apropriado p/se adicionar um novo elemento dentro do array; em seguida se exe-
//cutar console.log(aprovados.length)onde aqui vamos ter o tamanho do array conf.retorno na linha(90)      
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Tina', 'Ricardo', 'Nathália', 'Letícia' ]
//Tina
//Ricardo
//Nathália
//Letícia
//undefined
//5
//
//[Done] exited with code=0 in 0.487 seconds
//
//E se a gente adicionar p/ex.:um elemento na posição de índice 9, será que vai dar certo?R.:Sim!, vai; o que vai acontecer é que todos os ele-
//mentos entre os que foram colocados dentro do array, os elementos de 5 a 8 serão undefined e o 9 = Eduardo, portanto a linha 106 determina a 
//quantidade de elementos dentro do array.
aprovados[9] = 'Eduardo'
console.log(aprovados.length)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Tina', 'Ricardo', 'Nathália', 'Letícia' ]
//Tina
//Ricardo
//Nathália
//Letícia
//undefined
//5
//10
//
//[Done] exited with code=0 in 0.459 seconds
//
console.log(aprovados)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Tina',
//  'Ricardo',
//  'Nathália',
//  'Paulo',
//  'Abia',
//  <4 empty items>,   //Confirma a qtde.de undefineds da linha 95.
//  'Eduardo' ]
//
//[Done] exited with code=0 in 0.527 seconds
//
aprovados.sort()      //Essa função vai causar uma alteração dentro do array, onde vai ordenar os elementos dentro dele, conf.linhas(126 a 132).
console.log(aprovados)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Abia',
//  'Eduardo',
//  'Nathália',
//  'Paulo',
//  'Ricardo',
//  'Tina',
//  <4 empty items> ]
//
//[Done] exited with code=0 in 0.479 seconds
//
delete aprovados[1]      //Conf.linha(147)Eduardo que refere-se ao elemento 1 foi deletado(137), linha(148)Nathália refere-se ao elemento 2(138), por isso retorna no console.
console.log(aprovados[1])
console.log(aprovados[2])
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Abia',
//  'Eduardo',
//  'Nathália',
//  'Paulo',
//  'Ricardo',
//  'Tina',
//  <4 empty items> ]
//undefined
//Nathália
//
//[Done] exited with code=0 in 0.508 seconds
//
aprovados = ['Tina', 'Ricardo', 'Nathália', 'Letícia']   
aprovados.splice(1, 1)     //A função splice serve p/adicionar elementos a um determinado índice, como ela tbm.serve p/remover elementos da array, e tbm.pode adicionar 
console.log(aprovados)    //e remover ao mesmo tempo, fazendo conf.linha 153, onde o 1(1ºelemento vai dizer o índice que a gente quer trabalhar e na altura desse 1ºelemento  
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"  //queremos excluir um elemento apenas.
//[ 'Tina', 'Nathália', 'Letícia' ]
//
//[Done] exited with code=0 in 0.452 seconds
//
//Continuando das linhas(153 a 155): se a gente quisésse excluir dois elementos, iria começar a partir do elemento "Ricardo", depois "Nathália" ficando apenas os elementos
//[Tina e Letícia]conf.linha(163)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Tina', 'Letícia' ]
//
//[Done] exited with code=0 in 0.627 seconds
//
//E como é que faz p/adicionar elementos?R.:Basta, a gente colocar conf.linha(169), retornando conf.linha(171), e se quiser colocar os elementos anteriores(176),retorna(179).
aprovados = ['Tina', 'Ricardo', 'Nathália', 'Letícia']   
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Tina', 'Elemento1', 'Elemento2', 'Letícia' ]
//
//[Done] exited with code=0 in 0.536 seconds
aprovados = ['Tina', 'Ricardo', 'Nathália', 'Letícia']   
aprovados.splice(1, 2, 'Ricardo', 'Nathália')
console.log(aprovados)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Tina', 'Ricardo', 'Nathália', 'Letícia' ]
//
//[Done] exited with code=0 in 0.461 seconds