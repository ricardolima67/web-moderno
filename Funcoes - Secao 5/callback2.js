//18/05/2021: 78. Funções Callback #02.
//
//Nessa aula vamos ver a diferença de ter um código que a gente usou o callback em cima de uma função do JavaScript e a gente implentar sem o uso do callback,
//ou implementar tudo na mão p/vermos a diferença e o ganho que traz a gente usar esse conceito dentro da linguagem.
//Criar uma Array chamado notas que vai receber algumas notas []; o objetivo desse exemplo é que temos um Array de notas e eu quero pegar todas as notas para
//gerar um novo array com todas as notas menores do que 7, onde vamos fazer direto sem uso de callback e depois vamos fazer um exemplo usando uma função da API
//do JavaScript, mais especificamente do Array chamado de opção Filter.  
//  A primeira abordagem seria sem usar o Callback:
//  Sem Callback
//Eu vou criar um novo array chamado de notas baixas que recebe um array(vou colocar como let p/depois eu sobrescrever esse array no exemplo debaixo), o Array
//vai estar vazio, eu vou fazer um For(let "i" que é o índice)em cima das notas abrindo um objeto{}e dentro do objeto vou colocar if(se)a nota índice "i" for 
//menor do que 7 eu vou pegar o array notas baixas ponto PUSH p/adicionar um elemento no array, (p/adicionar um elemento no array a gente chama a função PUSH)
//coloca notas e índice "i" p/no final eu ter todas as notas menores do que 7 de dentro de array(notasBaixas.push(notas[i])), e posso imprimir o resultado do
//array c/console.log(notasBaixas), ele retorna conf.linha26.
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

let notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//[ 6.5, 5.2, 3.6 ]
//
//[Done] exited with code=0 in 0.129 seconds
//
//  A segunda abordagem seria usar o Callback(fazendo o mesmo procedimento), porém só usando as linhas 45, e 54 a 57:
//  Com Callback
//Vou colocar notasBaixas recebe notas ponto filter(), Filter é uma função que vai filtrar os elementos de uma array em cima de um determinado critério que vai
//ser uma função callback que vai retornar True ou False. Essa função qdo.for passada p/cada elemento, se a função retornar true siginifica que aquele elemento  
//deve ser adcionado no array que está sendo gerado, se a função retornar falso significa que aquele elemento não será adicionado no array que é a resposta dessa 
//função notas.filter(), então temos um array notas(notas.filter())e depois que eu chamar essa função filter, o resultado dela vai ser um outro array e o que vai 
//dizer se o elemento vai entrar ou não no array final é se o resultado dessa função callback(notas.filet())for verdadeiro ou falso; se for verdadeiro significa
//que o elemento irá entrar no array que vai ser resultado da função filter e se for falso aquele elemento será excluído do array e não irá estar presente no array
//final. Note que a Função Filter não altera a Array original, o Array original notas permanece exatamente do jeito que ele é, só que o array que é respondido, que
//é a resposta a partir da função filter()que se tornará um sub-array do array original. 
//Para isso eu vou passar uma função(uma callback)que o resultado vai ser verdadeiro ou falso recebendo como parâmentro uma nota(não é o índice e sim o próprio ele-
//mento)que vou retornar como nota menor ou igual a 7, então nota < 7 vai retornar verdadeiro ou falso, se a nota for menor do que 7 significa que vai dar verdadeiro
//e o elemento vai constar no array final, se a nota for maior do que 7 significa que foi falso e o elemento não irá estar presente no array que é o resultado dessa
//função filter, nota-se que tô chamando apenas um callback de uma função que será invocada p/cada um dos elementos, sem precisar fazer FOR, sem precisar ter uma va-
//riável de índice, não precisei acessar o array com índice, não precisei dar Push num array novo, simplesmente usei return nota < 7 conf.linhas45,54,55,56 e 57.    
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

let notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)
notasBaixas = notas.filter(function (nota) {
    return nota < 7
})
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//[ 6.5, 5.2, 3.6 ]
//
//[Done] exited with code=0 in 0.504 seconds
//
//Tbm.podemos incrementar a linha55 colocando uma constante notasBaixas2 e no console.log vou chamar de notasBaixas2 e na linha 67 vou criar uma constante ao invés
//de ter uma variável let(conf.linha47)e vamos mudar o nome de notasBaixas p/ notasBaixas1 p/ficar duas variáveis diferentes, ou seja, dois arrays diferentes:  
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//[ 6.5, 5.2, 3.6 ]
//[ 6.5, 5.2, 3.6 ]
//
//[Done] exited with code=0 in 0.487 seconds
//Após a impressão temos conf.linhas 81 e 82 onde notasBaixas2 é exatamente o mesmo array só que de uma forma muito mais esperta e ainda pode-se faze-la ficar mais
//esperta ainda, criando constante chamada notasBaixas3 recebe notas ponto filter()passando dentro parêntesis nota com arrow function(=>)tem que ser menor do que 7,
//conf.linha 104 e 105 retorna impressão conf.linha 109.
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
//  Com Callback(linhas 97 a 102) e com Callback(linhas 104 e 105), e linhas 88 a 95 é uma abordagem sem o Callback
console.log(notasBaixas1)
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)  

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)  
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//[ 6.5, 5.2, 3.6 ]
//[ 6.5, 5.2, 3.6 ]
//[ 6.5, 5.2, 3.6 ]
//
//[Done] exited with code=0 in 0.574 seconds