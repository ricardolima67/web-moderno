//14/06/2021: 116. Foreach #}02.
//
//Vamos pegar uma parte da sintaxe da aula passada e anexar a seguir; em seguida vamos renomear p/for each2:
//P/funcionar temos que criar dentro de Prototype de uma Array essa função for each2, pois ela não existe, então vamos fazer assim:
//Criar Array.prototype.forEach2 e vamos associar a for each2 à função que a gente quer de fato seja a função que vai perocorrer o array, ou seja,
//essa função recebe como parâmetro uma função callback; e dentro dessa função for each2 vamos precisar percorrer o array usando um laço for(let),
//(que trata-se de um laço normal que já vimos na aula Estruturas de Controle(for1.js, e for2.js))conf.segue na sintaxe de comando/código, onde o
//"i" recebe zero; o "i"tem que ser menor do que o tamanho do array e a gente acessa o Array dentro de uma função que pertence ao prototype,ou se-
//ja, a gente acessa uma instância de uma array a partir da variável this.length que representa o tamanho da array; e "i++", ou seja, esse laço vai
//percorrer do 1º elemento(que refere-se aos índices)até o último e depois vamos acessar os elementos do array, então dentro do for vamos chamar a 
//função callback passando três parâmetros, sendo o primeiro parâmentro o próprio valor, o segundo é o índice e o terceiro é o array completo; por-
//tanto então: callback c/primeiro elemento que vai ser o this acessando o índice(no caso o índice "i" que vai começar de zero(0)e vai até o tama-
//nho do array menos 1[i < this.length], o segundo elemento é o próprio "i"que seria o índice e o terceiro elemento é o array completo(this)),exe-
//cutando, retorna impressão no console conf.linhas(25 a 28).   
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}) 
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//1) Agatha
//2) Aldo
//3) Daniel
//4) Raquel
//
//[Done] exited with code=0 in 0.512 seconds