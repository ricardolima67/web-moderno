//21/04/2021: 30: Exemplos Básicos de Funções #02.

//Nesta aula vamos aprender algo que acontece muito na linguagem, que é pegar uma função e atribuir isso em uma variável=>Isso traz um poder muito grande p/a linguagem JavaScript, 
//nem toda a linguagem consegue fazer isso. Nosso objetivo é armazenar uma função em uma variável ou uma constante, sendo muito importante p/a linguagem, conf.linha5:
// Armazenando uma função em uma variável
//Na linha11: vamos criar uma constante ImprimirSoma recebe function e nesse caso vamos criar uma função anônima(função sem nome: onde pegamos exatamente a mesma sintaxe, a mesma 
//forma de construir uma função e tira-se o nome), abre-se os parêntesis() que serão os parâmetros de entrada, onde teremos os parâmetros "a" e "b", em seguida vamos abrir o corpo
//da função usando chaves{} conf.linhas11 à 13 e dentro dos colchetes linha12 vamos colocar console.log com o valor de "a" + "b", e para testar essa função vamos colocar na linha
//14 digitar imprimirSoma(2, 3), onde vai retornar 5, ou seja, o resultado da linha12; [Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\
//fundamentos\tempCodeRunnerFile.js"5 [Done] exited with code=0 in 0.933 seconds, referindo-se ao retorno da linha14.
const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazendo uma função arrow em uma variável
//Trata-se de um conceito novo divulgado no JavaScript versão 2015 existindo alguns detalhes com a função ARROW, tendo uma forma reduzida de se construir uma função.
//Como transformar linhas 11 à 14 em uma função ARROW?R.: Linha23:Constante soma recebe parâmetros "a" e "b" sem colocar a palavra function e em seguida colocar a SETA (=>) Arrow
//Function significando (MAIOR OU IGUAL A QUE) substituindo o nome FUNCTION, e em seguida abrindo chaves{}, ou seja, o corpo da função e na linha23 à linha 25, onde dentro da 
//linha24 chamar return a+b; então o que compõe as linhas23 à 25 é uma FUNÇÃO ARROW, onde estamos armazenando uma função arrow dento da variável soma; na linha26 digitar
//console.log p/retornar/imprimir passando os valores(2, 3):ao executar: retorna 5: [Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos
//\tempCodeRunnerFile.js"5 [Done] exited with code=0 in 0.5 seconds.
const soma = (a, b) => {
    return a+ b
}
console.log(soma(2, 3))

//Retorno Implícito
//Em seguida vamos diminuir ainda mais essa sintaxe usando um recurso chamado ARROW FUNCTION(RETORNO IMPLÍCITO(=>)),conf.linha35; então como é que fazemos p/retornar um valor usando 
//o parâmetro return de forma implícita sem precisar colocar essa palavra(return); então vamos colocar const subtração que é o nome da função que vamos criar colocando os parâmetros
//entre parêntesis(a, b), em seguida a setinha =>(chamada de ARROW FUNCTION) usando a expressão a - b. Automaticamente qdo.não temos as chaves{}, ou seja, o corpo da função, significa
//que vamos ter uma função com apenas uma única linha para executar apenas uma única sentença de código, portanto o resultado dessa sentença será retornado, caso não retornar nada,
//será UNDEFINED e se retornar alguma coisa como a - b implicitamente vai retornar o resultado da operação a - b. Então fazer linha36 p/finalizar, onde o resultado vai ser -1.
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js" -1:[Done] exited with code=0 in 1.024 seconds.
const subtracao = (a, b ) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js" Legal!!!
//[Done] exited with code=0 in 0.439 seconds
//Linha38:Constante imprimir dois recebe a em seguida (=> Arrow Function) igual a console.log(a): onde nem o "a" precisa ser envolvido com os parêntesis, por causa dos parâmetros,
//pois nesse caso só temos um, então podemos fazer a descrição na linha39 e ao executar: retorna: 'Legal!!!' igual está na linha40, demonstrando .que temos a possibilidade de 
//dimuir ainda mais a sintaxe de uma ARROW FUNCTION(=>).
