//06/05/2021: 61. Usando a Estrutura While.
//
//Nesta aula vamos começar a ver estruturas e laços de repetição e a primeira estrutura que vamos ver é o WHILE, cuja estrutura é mais apropriada, desenhada p/qdo.temos uma qtde.indeterminada
//de repetições, p/ex: chegamos numa situação que a gente não sabe qtos.elementos precisamos interar; p/ex.> enquanto o usuário não digitar o -1 significa que ele vai continuar pegando e lendo
//as notas e calculando as médias, enquanto a flag da interface estiver falso fique verificando determinada informação, então p/simular isso e p/deixar claro que o WHILE é focado em repetições
//qdo.temos uma qtde.indeterminada de vezes ou qdo.temos tbm.uma qtde.determinada de vezes.
//Vamos criar uma função que vai nos retornar um inteiro aleatório colocando entre parêntesis(min, max),dentro das chaves{vamos criar uma constante chamada valor que recebe math.random() e vamos
//multiplicar p/(max, min)p/dar o intervalo que queremos dentro do random}, o random gera um valor entre 0 e 1, então multiplicando isso p/intervalo vai nos dar um range maior e finalmente 
//p/conseguirmos ficar num intervalo que queremos(max - min), precisamos deslocar o valor obtido p/o(+)min p/que ele possa chegar do mínimo até o máximo que queremos; então se o random gerar um
//valor 0, o math.random multiplicado p/intervalo(max - min) vai dar 0 + min(que vai dar exatamente o valor mínimo); se o math.random der 1, ele vai pegar/gerar o intervalo(max - min) que vai 
//multiplicar p/1(+min)que vai dar exatamente o intervalo, ou seja, é a mesma coisa que somar o intervalo mais o valor mínimo que aí no final ele vai dar o valor máximo. Então se for 0 dá o 
//mínimo e se for 1 vai dar o máximo e qualquer outro valor ele fica entre o mínimo e o máximo, que é exatamente o que estamos querendo. Vamos em seguida arredondar usando return math.floor
//(valor)passando o valor sendo esse o resultado da função get inteiro aleatório entre; agora vamos fazer um teste usando o let opção começando com 0 e criar um laço de repetição usando While
//(),aqui no while assim como é no IF: ele vai precisar uma expressão que retorna verdadeiro ou falso, onde vai dizer que enquanto a expressão for 
//verdadeira(por isso o nome WHILE)continue executando o laço até que a expressão fique falsa; e se a expressão nunca ficar falsa?R.:Vai ficar gerando um laço infinito dentro do programa, isso é
//útil em algumas situações, mas via de regra temos que ter cuidado com esse tipo de laço porque dentro do laço tem que acontecer alguma coisa que faça com que a expressão vire falsa e ele 
//consiga sair e continuar no programa. Continuando while (opção != -1)a expressão tem que ser diferente de menos um e aí vamos começar a alterar o valor de opção a partir da função 
//Math.random() * (max - min) + min pegando um valor aleatório recebendo a opçãp getInteiroAleatorioEntre menos um e dez; então se a opção for menos um ele sai do laço e se for qualquer outro
//valor ele continua no laço até que em algum momento essa expressão por meio da opção vire menos um; depois vamos colocar um console.log p/imprimir os valores que foram sorteados a partir dessa
//função getInteiroAleatorioEntre(-1, 10), e por fim colocar um console.log()p/dizer que o programa terminou; executando retorna conf.linhas abaixo. 
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log('Opção escolhida foi ${opcao}.')
}

console.log('Até a próxima!')
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Opção escolhida foi 4.
//Opção escolhida foi 4.
//Opção escolhida foi 9.
//Opção escolhida foi 9.
//Opção escolhida foi -1.
//Até a próxima!
//
//[Done] exited with code=0 in 0.365 seconds