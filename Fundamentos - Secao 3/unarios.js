//30/04/2021: 50.Operadores: Unários
//
//Já foi falado anteriormente sobre os operadores binários e tbm.sobre os unários: que é a negação lógica(!) e o outo que é o menos(-) que aplicado a um número inverte o seu sinal
//de negativo p/positivo ou vice-versa e nesta aula vamos ver outros operadores unários, praticamente vendo o incremento e o decremento.
//Vamos criar duas variáveis let chamada número 1 recebe 1, e outra variável let chamada número 2 recebe 2; existem duas formas: a pré-fixada e a pós-fixada onde colocamos o nome 
//da variável que nesse caso é número 1(num 1)ficando no formato: num1++(sendo essa a forma pós-fixada), os outros operadores possuem uma forma chamada infix(que o sinal fica entre
//os operandos), então portanto, nesse caso o num1++ não pode ficar entre por tratar-se de operador unário(aqui ficando depois e ao contrário pré-fixado vai ficar antes do operando)
//o que esse operador faz é acrescentar uma unidade ao valor da variável, p/ex.: na variável num1++ vale 1 onde colocando 1++ ele acrescenta pra 2, quando mostramos no console.log
//fica conf.a seguir vamos fazer com a forma pós-fixada:
let num1 = 1
let num2 = 2

num1++
console.log(num1)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//2
//
//[Done] exited with code=0 in 0.64 seconds
//
//O operador com a forma préfixada (--num1), ou seja, menos menos número 1, podendo ser tbm.o mais mais, o sistema suporta. Ao mostrar no console linha28 o resultado vai ser exata-
//mente o esperado que é subtrair o 1 na variável num1, onde valia 1 passou a valer 2 e subtraindo volta a valer 1 conf.linha31:
let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//2
//1
//
//[Done] exited with code=0 in 1.273 seconds
//
//Ao analisarmos essas duas formas, qual forma a gente entende ser mais agoniada, mais apressada?R.:É a forma pré-fixada porque possui uma precedência maior do que a forma pós-
//fixada, quando temos uma expressão dentro de um código(em qualquer linguagem de programção isso acontece), nós temos uma expressão e ela tem uma ordem de precedência simples-
//mente sai executando da esquerda para a direita onde ele executa uma operação antes de outra, p/ex.: uma multiplicação tem precedência(tem prioridade)sobre uma soma, uma divisão
//tem precedência(prioridade) sobre uma subtração, uma operação dentro de parêntesis tem prioridades sobre a multiplicação e assim por diante de acordo com a Tabela de Precedência.
//Essa forma de escrever(--num1)menos menos tem uma prioridade maior do que a outra forma de escrever(++num1)mais mais, ou seja, o (--num1)é mais apressado.
//A seguir vamos fazer um console.log(++num1 === num2--)usando a forma pré-fixada juntamente com a igualdade estrita(===), ou seja, estritamente igual, com num2--(nº2 menos menos),
//Esse console retorna Verdadeiro ou Falso?R.:True, verdadeiro, conf.abaixo:
let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)
console.log(++num1 === num2--)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//2
//1
//true
//
//[Done] exited with code=0 in 0.535 seconds
//Por quê retornou Verdadeiro?R.:Porque o mais mais foi executado antes da comparação(===) e menos menos que é uma forma uma forma pós-fixada só foi executado depois da comparação,
//então quanto valia o ++num1?R.:valia 1, e passou a valer 2 por conta do incremento(pois o operador faz é acrescentar uma unidade ao valor da variável); o num2-- vale 2 e só vai
//ser decrementado após a comparação, então no momento da comparação o ++num1 vale 2 e o num2-- vale 2 e somente depois da comparação que é decrementado o valor de número 2(num2--)
//de tal forma que se executarmos novamente o console.log(num1 === num2) comparando-os, vamos perceber que depois da linha 67 eles possuem valores diferentes, não sendo mais iguais.
let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)
console.log(++num1 === num2--)
console.log(num1 === num2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//2
//1
//true
//false
//
//[Done] exited with code=0 in 0.942 seconds
//
//A observação fica é a seguinte: "DEIXE O SEU CÓDIGO O MAIS SIMPLES POSSÍVEL", porque escrever código simples é algo muito complexo, pois escrever código fácil de ser lido não é
//algo fácil de ser atingido; ter um código claro, transparente, com bons nomes priorizando sentenças de código evitando causar confusões, isso aqui console.log(++num1 === num2--)
//é um exemplo muito claro de uma setença de código que vamos precisar olhar bem, se concentrar e raciocinar pra saber se é verdadeiro ou falso.
//Tentar não misturar vários operadores em uma expressão(uma expressão matemática tudo bem, somar, subtrair, multiplicar, colocar os parêntesis: ok!), mas colocar um incremento 
//dentro de um comparação p/ex.:(===), o ideal é fugir desse tipo de padrão, porque vai trazer confusão para o código, tornando-o mais difícil de ser lido, pois o programador que 
//estiver lendo vai ter que parar, vai ter que fazer uma certa conta para inferir/verificar se é verdadeiro ou falso. 
//É um desafio gigantesco, dificilmente vamos conseguir ter um código simples de primeira(logo de cara)e por isso a gente usa muito de "REFATORAÇÃO", vamos pegando o código, anala-
//sando: não ficou tão claro!; não ficou tão fácil de ser lido como eu gostaria, então vou mudar o nome dessa variável, deixa eu quebrar esse método em dois métodos, usar nomes 
//mais adequados e assim vamos refatorando até obter um código desejado.
//Prezar pelo código limpo, sem fazer muitos cometários para justificar o que se está fazendo sobre o design do código, procurar fazer comentários relevantes/importantes. 