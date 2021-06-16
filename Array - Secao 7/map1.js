//15/06/2021: 117. Map #01.
//
//Nesta aula vamos estudar uma função do array chamada MAP; associado ao MAP, existe dentro dele um laço que será executado para fazer uma transformação
//no array, então a idéia é mapear um array p/um outro array do mesmo tamanho só que com os dados transformados; p/ex.: podemos ter um array com três e-
//lementos como o número 1, 2 e 3, e queremos transformar esse array de três elementos em um outro array de três elementos no qual cada um dos elementos
//seja o dobro dos númereos 1, 2, e 3(passando a ser 2, 4, e 6), portanto ele vai percorrer cada um dos elementos e o resultado final dessa transforma-
//ção usando o MAP é um outro array do mesmo tamanho com os dados transformados, podendo ter um MAP que pega um objeto e transforma em um número, pega-
//se um objeto e transforma em uma string, pegar um array com vários jsons e transformar em um array de objeto, ou seja, o MAP serve p/transformar um 
//array em outro.
//Qual é a regra? R.: Se o Array original têm seis elementos, o resultado do MAP vai gerar uma array de seis elementos com os dados transformados; o 
//MAP serve p/mapear os elementos de array p/outro baseados em uma regra, um array original tem um tamanho X e o array final terá exatamente o mesmo
//tamanho X.    
//Vamos começar a definir um array de números por meio da criação de uma constante chamada nums que recebe um array [1, 2, 3, 4, 5], conforme explica-
//ção inicial da aula, vamos gerar um array com o dobro dos elementos original[1, 2, 3, 4, 5], então vamos usar o MAP, o MAP é um FOR com propósito
//(se a gente usar o FOR IT ele vai nos dar os elementos do jeito que é, na sua essência[1,2,3,4,5]); no caso do MAP internamente ele tem um for, só
//que além dele ter o FOR, ele vai fazer a transformação de cada um dos elementos de uma array p/outro array de mesmo tamanho; então nesse exemplo va-
//mos fazer da seguinte forma: a gente vai armazenar o array resultante em uma variável que vamos chamar de let resultado que recebe nums.map() e va-
//mos passar uma função callback(que já sabemos pode receber três parâmetros: que é o próprio valor atual, o índice, e o array completo), por enquan-
//to só vai nos interessar passar uma função que recebe o elemento atual, então no nums.map(function recebe o (e)elemento){}e dentro dessa função map
//o nosso papel é transformar, ou seja, mapear(por isso o nome MAP)o elemento function(e)é o que queremos p/ser gerado no final, qual o elemento que a
//gente quer que seja gerado ni final? R.: É o dobro do elemento que recebemos[2, 4, 6, 8, 10], então colocar a função (return)p/retornar o "e" multi-
//plicado por 2(e*2), em seguida: console.log(resultado)       
const nums = [1, 2, 3, 4, 5] 
let resultado = nums.map(function(e) {
    return e*2
}) 

console.log(resultado)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 2, 4, 6, 8, 10 ]
//
//[Done] exited with code=0 in 0.477 seconds
//
//Continuando, vamos criar três funções e vamos usá-las dentro de maps sucessivos, ou seja, temo um array => chama o map, o que o final do map vai ge-
//rar p/gente, um novo array, esse novo array podemos chamar o map novamente que vai gerar um outro array transformado e assim sucessivamente; cabe uma
//Observação importante: É QUE O MAP NÃO TRANSFORMA O ARRAY ATUAL, ELE GERA UM NOVO ARRAY.(conf.demonstrado na linha 44[1,2,3,4,5]em resposta(42)). 
const nums = [1, 2, 3, 4, 5] 
let resultado = nums.map(function(e) {
    return e*2
}) 

console.log(resultado, nums)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 2, 4, 6, 8, 10 ] [ 1, 2, 3, 4, 5 ]
//
//[Done] exited with code=0 in 0.572 seconds
//
//Da criação das três funções, a primeira função vai somar 10 ao elemento atual que vai receber o elemento e ele vai retornar "e" mais 10(nesse caso
//a gente lembra que uma função arrow(=>)tem o returning implícito), ou seja, dentro de uma função que vamos passar p/um map, essa função obrigatoria-
//mente tem que retornar alguma coisa, se ela não retornar nada o resultado vai ser undefined, p/ex.: na linha(39)transformá-la em comentário //return
//e*2 e executar, o retorno da impressão no console será um array ainda sim com cinco posições(mostrando undefined), próxima função se chamará triplo
//vai receber o elemento e vai miultiplicar por 3 e a última função vai ser paraDinheiro que vamos transformar esse number em um valor em Reais forma-
//tado pegando o "e"(elemento) e vamos retornar uma template string que vai ter o cifrão(R$) usando o dólar chave ${} p/ poder interpolar uma variável 
//chamando a função parse double e usando a variável "e" que foi recebido como parâmetro(que seria o elemento) e usar .toFixed(2)p/ter duas casas deci-
//mais e finalmente vamos substituir o ponto por vírgula(p/sair do formato americano p/o brasileiro), portanto aqui temos três funções que vamos pas-
//sar como callback p/funções map, então como é que gente pode transformar o map original usando essas três funções(61 a 63) chamando o map de forma
//encadeada? R.:resultado recebe nums.map onde vamos passar soma10, depois vamos chamar outro map porque o resultado do primeiro map é uma array, en-
//tão podemos chamar o map novamente passando a função triplo e vamos chamar o map novamente passsando a função p/dinheiro; então o array original 
//era [1, 2, 3, 4, 5]; então pegando o caso do 1(índice zero(0))pegou 10 e somou-se a 1 passou a ser 11 que multiplicado p/3 passou p/ a ser 33 e no 
//final foi convertido p/dinheiro e ficou R$ 33,00, o mesmo ocorrendo com 2+10=12*3=36 =>R$ 36,00 e assim sucessivamente, conf.retorno(69).
const soma10 = e => e + 10 
const triplo = e => e * 3 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ 2, 4, 6, 8, 10 ] [ 1, 2, 3, 4, 5 ]
//[ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
//
//[Done] exited with code=0 in 0.444 seconds