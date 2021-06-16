//27/04/2021: 44.Operadores: Destructuring #02

//Nessa aula vai ser mostrado o processo de desestruturação usando a estrutura do Array[], onde foi mostrado na aula passada(pasta destructuring1.js)como fazer isso a partir de um
//objeto(literal), bem como alguns cuidados na hora de desestruturar um dado aninhado, ou seja, temos que garantir que o dado esteja setado até pegarmos o último dado p/extração.
//Vamos criar uma constante array[a]-entre colchetes, percebemos que estamos numa posição que não faz sentido definir uma array literal, então estamos numa posição que estamos dentro
//depois uma palavra reservada que define uma constante, então estamos usando um Operador Destructuring; temos que ter esse cuidado porque como a sintaxe usa o mesmo token, que no 
//caso do objeto é a chave e no caso do array é o colchete temos que analisar em local o colchete foi usado para saber se de fato estamos definindo uma array ou se estamos usando o
//operador Destructuring. 
//linha 11: vamos criar uma constante com destructuring[a] recebe array[10] que significa nesse caso iremos atribuir/criar uma variável "a" que recebeu o valor do primeiro elemento 
//dentro do array que é 10, então executando conforme linha 12:
const [a] = [10]
console.log(a)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//10
//
//[Done] exited with code=0 in 0.756 seconds

//Normalmente podemos usar isso com vários elementos, p/ex.: conf.linha 20; inclusive podemos até pular elementos que queremos ignorar e dar um valor padrão(recebendo e criando várias
//variáveis a partir de uma única chamada), onde: n1 seria o 10(1º elemento), 2º elemento nós ignoramos que seria o 7, n3 seria o 9(3º elemento), 4º elemento nós ignoramos tbm.(que 
//seria o 8), o n5 não existe(não possui elemento, ou seja é undefined), e o n6 vai ter valor zero(0); imprimindo no console conf.linha 22, temos:
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//10 9 undefined 0
//
//[Done] exited with code=0 in 0.766 seconds
//De acordo com a linha 24 temos o 10(1º elemento que é o n1), o 2º elemento(7)retornou vazio porque foi ignorado pelo campo estar vazio conf.linha 21, o n3 é o 3º elemento de índice
//2(índice 2 por ser continuação do n1, depois n3(o n3 é o índice 2)que é o 9), o índice 4 foi ignorado por estar vazio(que seria o nº 8)retornando como undefined, o índice 5 está 
//fora do array, e o n6 retornou zero(0) devido estar na expressão n6 = 0(n6 igual a zero).
//Então é uma forma de pegarmos múltiplos elementos a partir de uma parte de array e extrair de dentro da estrutura ou desestruturar atribuindo a várias variáveis usando apenas uma
//única atribuição.

//Agora vamos fazer uma desestruturação aninhada dentro de array criando uma constante com uma array [ e dentro dessa array-criar outra array[, nota]], onde o 1º elemento foi ignora-
//do, o 2º elemento é uma array(e dentro dessa array)estamos ignorando o 1º elemento e pegando o 2º elemento desse array que está dentro de uma array, em seguida vamos atribuir (=)
//[[, 8, 8], [9, 6, 8]], ou seja, temos um array de fora que é composto por dois arrays que estão dentro do array de fora, então o que se está dizendo é para ignorar o 1º elemento
//que é o array[, 8, 8] vá p/o 2º elemento(array[9, 6, 8])onde ele vai pagar o 2º elemento do array, o 1º elemento não nos interessa e queremos pegar o 2º elemento(do 2º array), 
//nesse caso: o 1º elemento é o 9, e o valor que ele vai pegar é o 6 conf.linha 41
const [, [, nota]]  = [[, 8, 8], [9, 6, 8]]
console.log(nota)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//6
//
//[Done] exited with code=0 in 0.808 seconds
//Comentário do prof.: Não usaria este tipo de código por tratar-se de difícl leitura, sendo mais fácil acessar o código pelo índice.