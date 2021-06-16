//19/05/2021: 80. Funções Construtoras
//
//Outro conceito muito importante de JavaScript é a função construtora. O que é uma função construtora JavaScript?
//As funções construtoras em JavaScript são como as classes do Java, diferenciando apenas pela sintaxe. Em questão de funcionamento, tanto funções contrutoras no
//JavaScript quanto Classes no Java têm a mesma utilidade: servir de molde para a criação de objetos.
//A partir de uma classe eu crio instâncias para os objetos a partir de um molde usando uma função, onde classe é uma forma diferente de se escrever uma função em
//JavaScript orientadas a objeto.
//Criando uma função chamada Carro()que recebe dois parâmetros como se eu estivesse criando o construtor de um objeto e eu quero passar dados p/esse construtor e 
//tbm.vou usar um recurso de colocar uma valor padrão p/o parâmetro que seria o parâmetro padrão; então vou colocar velocidade máxima recebe 200km/h por padrão e 
//o delta p/qdo.for acelerar o carro, ele vai acelerar de 5 em 5. Eu vou ter um Atributo Privado, ou seja, um atributo que pertença apenas ao escopo dessa função
//Carro, então eu vou colocar let velocidade atual recebe zero, sendo esse um atributo que pertence apenas à função carro e qdo.eu instanciar um objeto a partir
//dessa função eu não tenho como acessar diretamente objeto.velocidade atual porque esse é um atributo interno da função. Então eu vou criar um método público a
//partir da palavra reservada "this"= ficando this.acelerar recebe uma função(){} e essa função vai ser responsável por acrescentar a velocidade atual que é uma 
//velocidade que está visível apenas dentro da função, então primeiro eu vou fazer um teste p/ver se a velocidade atual mais o delta não ultrapasse a velocidade
//máxima p/só daí eu fazer de fato a soma; p/isso vou usar o if()se p/a velocidade atual mais o delta ele for menor ou igual a velocidade máxima, eu posso acres-
//centar(+=)tranquilamente a velocidade atual ao valor de delta, caso contrário, caso seja maior, eu posso colocar um Else mencionando que a velocidade atual vai 
//receber o valor da velocidade máxima; em seguida vou criar outro método público dentro dessa função construtora chamada Carro que será responsável por pegar a 
//velocidade atual; eu poderia deixar a velocidade atual aberta?R.:Sim, eu poderia, mas o usuário poderia ir lá e setar um valor maior que a velocidade máxima,
//e eu não teria controle sobre a variável (velocidadeMaxima = 200, delta = 5) ficando exposta e vulnerável; então eu posso permitir o acesso a essa variável co-
//locando que o this.getVelocidadeAtual receba uma função permitindo o acesso a essa variável e posso retornar o valor da velocidade atual que é um atributo pri-
//vado(let velocidade atual recebe zero); então seu quero criar um atributo privado, eu crio uma função ou com let, ou com o var, ou com o const(se for variável
//dar preferência ao uso do let)e se eu quero transformar algo p/ser público, p/ser visível fora desta função construtora, eu uso o this. Continuando, agora eu 
//vou instanciar criando uma constante chamada uno recebe new carro e em seguida eu posso chamar uno ponto acelerar(); p/imprimir colocar console.log(44), conti-
//nuando, eu posso instanciar a partir da mesma função, um outro objeto(46), cuja velocidade máxima vai ser de 350, e o delta vai ser 4 vezes maior ao 5: 
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0                                          //Linhas 25 a 40 trata-se da função construtora, as linhas 42 e 43 é p/instanciar(25 a 40).
    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
} 

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//5    Velocidade Atual do Uno.
//
//[Done] exited with code=0 in 0.622 seconds

//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//5
//20   Velocidade Atual da Ferrari.
//
//[Done] exited with code=0 in 0.409 seconds

//Então se eu chamar três vezes a função acelerar, vou ter a velocidade atual da Ferrari(de acodo com as linhas 85 e 86) = 60(linha90):
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0 
    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
} 

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//5
//60
//
//[Done] exited with code=0 in 0.51 seconds
//Então eu tenho duas instâncias diferentes a partir da mesma função construtora, portanto o que estamos falando tem a ver com paradigma OO, embora não pareça tão   
//natural o OO que a gente vê em outras linguagens dentro do JavaScript, onde nesta aula estamos tendo uma visão mais direcionada/orientada a objeto, onde a gente 
//cria uma função construtora que é um MOLDE dos objetos que podemos criar a partir dessa função, criando com atributos privados e métodos com atributos públicos,
//se quisérmos criar a partir do this ponto nome do atributo, podemos criar quantas funções a gente quiser dentro de uma outra função(tendo uma função maior e dentro
//dela eu tenho outras funções que podem ser públicas a partir do this)e podemos instanciar função a partir do operador NEW passando o nome da função(new Carro), a
//gente pode ou não passar os parêntesis(conf.linha 79=>podendo ou não colocar parêntesis()) usando simplesmente os parâmetros já definidos na função(linhas 62 a 87).  
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0 
    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
} 

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//5
//60
//function   Refere-se à linha 126, onde o tipo do parâmetro Carro trata-se da função.
//object     Refere-se à linha 127, onde o tipo do parâmetro Ferrari trata-se de objeto.
//           Onde linhas 131 e 132 foram instanciados a partir da função construtura new Carro(350, 20).   
//[Done] exited with code=0 in 0.514 seconds
