//14/06/2021: 113. Array: Métodos Importantes.
//
//Nesta aula será abordado sobre algumas funções interessantes do array, na aula//passada 112. Array: Visão Geral(12/06/2021)foi mais p/contextualizar
//sobre o array em si, falar um pouco da mecânica, onde foi mostrado alguns métodos, nesta aula portanto vamos ver alguns métodos.
//Criar uma constante chamada pilotos que recebe um array com índices de quatro elementos conf.indicado, onde //foi atribuído esse array a uma constante
//que significa que dentro desse exercício não se pode atribuir alguma outra coisa p/pilotos porque a constante pilotos sempre irá apontar p/esse array; 
//pode-se mexer nesse array?R.:Sim, pode, o que se pode é atribuir mais nada p/constante pilotos, pelo fato de tratar-se de uma constante. 
//Primeiro método que vamos fazer é o POP(significa ter que fazer a retirada de um índice(no caso o Massa)), ou seja, ele remove o último elemento do 
//array; então se a gente colocar console.log(pilotos), teremos(16):     
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] 
pilotos.pop()
console.log(pilotos) 
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Vettel', 'Alonso', 'Raikkonen' ]
//
//[Done] exited with code=0 in 0.456 seconds
//
pilotos.push('Verstappen')   //O PUSH adiciona um novo elemento.(22)
console.log(pilotos)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Vettel', 'Alonso', 'Raikkonen' ]
//[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]
//
//[Done] exited with code=0 in 0.552 seconds
//
pilotos.shift()             //O SHIFT remove elementos do array da primeira posição. (31)
console.log(pilotos)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Vettel', 'Alonso', 'Raikkonen' ]
//[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Alonso', 'Raikkonen', 'Verstappen' ]
//
//[Done] exited with code=0 in 0.552 seconds
//
pilotos.unshift('Hamilton') //O UNSHIFT adiciona um elemento na primeira posição de índice zero de uma array[0],conf.(41).  
console.log(pilotos)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Vettel', 'Alonso', 'Raikkonen' ]
//[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]
//
//[Done] exited with code=0 in 0.493 seconds
//
//O método SPLICE como comentado na aula passada, pode Adicionar e Remover elementos de uma Array, então primeiro p/adcionar elementos, onde vamos adicionar
//no índice 2(Raikkonen) sem remover ninguém(0)e vamos adicionar o Bottas e o Massa(47), passando o Raikkonen p/o índice 4, conf.linhas(54 a 59).
pilotos.splice(2, 0, 'Bottas', 'Massa') 
console.log(pilotos)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Vettel', 'Alonso', 'Raikkonen' ]
//[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Hamilton',
//  'Alonso',
//  'Bottas',
//  'Massa',
//  'Raikkonen',
//  'Verstappen' ]
//
//[Done] exited with code=0 in 0.812 seconds
//
//Podemos remover elementos a partir do método splice no índice e vamos remover um único elemento(64), retornando conf.linha(77)
pilotos.splice(3, 1)
console.log(pilotos)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Vettel', 'Alonso', 'Raikkonen' ]
//[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Hamilton',
//  'Alonso',
//  'Bottas',
//  'Massa',
//  'Raikkonen',
//  'Verstappen' ]
//[ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]
//
//[Done] exited with code=0 in 0.478 seconds
//
//O próximo método é o SLICE que retorna um Array; no caso a seguir, ele pega um novo Array a partir do índice 2 conf.linha(96).
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Vettel', 'Alonso', 'Raikkonen' ]
//[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Hamilton',
//  'Alonso',
//  'Bottas',
//  'Massa',
//  'Raikkonen',
//  'Verstappen' ]
//[ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]
//[ 'Bottas', 'Raikkonen', 'Verstappen' ]
//
//[Done] exited with code=0 in 0.574 seconds
//
//Outro exemplo do SLICE(PEDAÇO), que é pegar uma parte(um pedaço)do Array, conf.exemplo a seguir vamos pegar no array o índice 1 até o índice 4, 
//só que o índice 4 não vai entrar; pegando o array original de pilotos(95)o índice 1 é o Alonso e o índice 4 é o Verstappen, portanto na geração 
//do novo Array, o Hamilton e o Verstappen não vão entrar, conf.linha(117):
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 'Vettel', 'Alonso', 'Raikkonen' ]
//[ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]
//[ 'Hamilton',
//  'Alonso',
//  'Bottas',
//  'Massa',
//  'Raikkonen',
//  'Verstappen' ]
//[ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]
//[ 'Alonso', 'Bottas', 'Raikkonen' ]
//
//[Done] exited with code=0 in 0.439 seconds