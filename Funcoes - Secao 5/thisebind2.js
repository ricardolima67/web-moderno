//13/05/2021: 72. "this" e a Função bind #02.
//
//Nesta aula será mostrado mais um exemplo relativo ao fato de que o this pode variar de acordo com o que está chamando a função, dessa vez usaremos a função chamada
//set interval que vai gerar problema não encontrando o this da maneira que a gente achava que ia encontrar e em seguida será exibido duas soluções, sendo uma usando
//o bind e a outra muita encontrada em código JavaScript da qual armazena o this em uma constante no momento que o mesmo aponta para um objeto que de fato a gente 
//quer referenciar e depois a gente usa essa constante p/poder acessar o this em determinado momento.
//Vamos criar uma função chamada pessoa() e dentro dessa função(objeto{})vamos criar um atributo chamado idade a partir do this, colocando this.idade recebe zero(0),
//então no momento que a gente instanciar essa função, criar um objeto a partir dessa função vamos ter o atributo idade a disposição p/que a gente possa manipulá-lo,
//e ainda dentro da função pessoa vamos criar uma chamada da função set interval(), o que essa função faz?R.:Ela dispara uma outra função a partir de um determinado
//intervalo que a gente passou, então a gente pode passar uma função como parâmetro para outra função e inclusive a gente pode dentro dos parêntesis(dos parâmetros)
//dessa função passar uma função anônima, função literal diretamente em set interval()dentro dos parêntesis, então portanto, dentro dos parêntesis, vamos colocar 
//function()uma função que não vai receber nenhum parâmetro e vai ter o corpo da função diretamente dentro dos parêntesis dessa função set interval e dentro dela 
//vamos chamar de this.idade mais mais(onde vamos incrementar o valor da idade)e vamos imprimir no console p/que a gente possa de fato ter visibilidade dos valores
//sendo alterados a partir da chamada de set interval(function); o set interval além de receber a função, ele recebe o intervalo com o valor 1000 e esse intervalo
//que é passado em milisegundos representa que a cada Xmilisegundos(ou seja, 1 segundo)essa função set interval vai ser disparada novamente em looping a partir do 
//valor passado/informado; para isso tudo funcionar, vamos instanciar colocando new pessoa(a partir da função pessoa p/criar um objeto)não vamos armazenar em ne-
//nhuma variável, vamos simplesmente chamar p/que ele possa instanciar a função new pessoa e disparar o set interval para ver se de fato o this aponta para esse 
//objeto new pessoa que foi criado, em outra linguagem provavelmente apontaria, mas em JavaScript a gente sabe que o this pode variar qdo.se está trabalhando com 
//uma função tradicional, o this pode variar e vai variar de acordo com o que está invocando essa função; quem está invocando essa função não somos nós, porque em 
//nenhum momento passamos parâmetros para invocar essa função, ou seja, nós passamos essa função p/o set interval, então lá dentro do set interval tem um tempori-
//zador que vai ficar disparando essa função, então quem está disparando na verdade é um temporizador e não dentro do código pessoa, então nesse caso, a gente já
//imagina que o this vai apontar p/uma coisa diferente que não o objeto pessoa, então executando com ctrl + alt + n vai ficar disparando eternamente Not a Numeber
go//NaN, p/parar, clicar ctrl + alt + m. e ctrl + alt + n ele dispara o código novamente.
function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000)
} 

new Pessoa
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//NaN
//NaN
//NaN
//NaN
//NaN
//NaN
//NaN
//NaN
//NaN
//NaN
//NaN
//
//[Done] exited with code=1 in 5.019 seconds
//Neste caso o this.idade(linha28)não aponta p/o objeto pessoa(linha33)porque quem está disparando a chamada dessa função(this.idade++)é um temporizador e não o 
//próprio objeto pessoa e como a gente resolveria esse problema?R.:Poderíamos colocar no final dessa função (function()) { this.idade++ console.log(this.idade)}
//colocar um notação ponto depois da chave antes da vírgula e do 1000(segundos)pois a gente sabe que dentro de uma função(function)em JavaScript tem outras funções
//que podemos chamar e uma dessas funções é a bind p/ele amarrar o this do objeto a chamada dessa função (function()) { this.idade++ console.log(this.idade)}, note 
//que como estamos executando esse código .bind(this)dentro da função pessoa em que essas funções já estão amarradas com o this, então nesse caso o this aponta p/
//pessoa, então ao executar, retorna como esparado de acordo com as linha 65 a 72, onde a cada segundo a idade da pessoa vai sendo acrecentada. 
function Pessoa() {                                 //Podemos colocar comentário de múltiplas linhas em um determinado local usando /*.bind(this)*/
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
} 

new Pessoa
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//1
//2
//3
//4
//5
//6
//7
//8
//
//[Done] exited with code=1 in 9.648 seconds
//
//Podemos tbm.antes da função set interval, definir uma constante chamada de SELF conf.linha85, porém podemos chamar o nome que quisérmos, recebe a referência de this
//lembrando que na linha85 está sendo executado diretamente dentro da função pessoa(82 a 90)significa que na linha85 obrigatoriamente o this é o objeto que queremos de
//fato apontar que é a instância que foi criada(linha92), ou seja, a instância atual que está executando esse código, então armazenamos o this numa constante self
//que não vai mudar nunca, não importa quem chame essa função self, ela sempre será a mesma e a gente pode substituir o this pelo self, não deixando de ser um artifício
//tecnológico a um comportamento da linguagem que nesse momento é inadequado, essa é uma técnica que pode ser encontrada em JavaScript com muita frequência, executando,
//vai retornar conf.o código anterior.
function Pessoa() {                                 
    this.idade = 0
    
    const self = this 
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
} 

new Pessoa
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//1
//2
//3
//4
//5
//6
//7
//8
//
//[Done] exited with code=1 in 0.338 seconds