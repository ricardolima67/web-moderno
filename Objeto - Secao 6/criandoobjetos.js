//02/06/2021: 94. Estratégias de Criação de Objetos.
//
//Formas diferentes de se criar objetos dentro de JavaScript(função construtora, função factory)sendo temas relacionados entre si(funções e objetos), onde
//a partir de uma função podemos instânciar objetos. Abaixo temos algumas formas de se criar objetos:
//
// 1ª) Forma: Notação Literal
//Usando a notação literal:(NÃO CONFUNDIR NOTAÇÃO LITERAL COM JSON-JAVASCRIPT OBJECT NOTATION), podemos criar objetos a partir da criação literal que é c/
//chaves{} conf.abaixo:
const obj1 = {}
console.log(obj1)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{}   => objeto 1.
//
//[Done] exited with code=0 in 0.824 seconds
//
// 2ª) Forma: Object
//Usando a notação object em JS conf.abaixo, onde já vimos que trata-se de uma function:
console.log(typeof Object)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//function
//
//[Done] exited with code=0 in 0.572 seconds
// E se chamamos de typeof new Object conf.abaixo, temos um Objeto criado a partir de uma função construtora(New)e temos tbm.conf.linha 23 e 24:
console.log(typeof new Object)
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//object
//function object
//{}   => objeto 2.
//
//[Done] exited with code=0 in 0.499 seconds
//Continuando da linha 21: obj1 e obj2 criados de duas formas diferentes, sendo um a partir de uma função construtora(NEW)(22)e outra a partir da notação 
//literal de objetos(8).
//
// 3ª) Forma: Funções Construtoras
//A terceira forma seria a gente criar as nossas próprias funções construtoras, conf.feito anteriormente com as próprias funções do JavaScript(24 a 27),
//criando a função de nome produto que recebe nome(dentro dos parêntesis)., preço, desconto e em seguida abrimos as chaves{}p/colocar os objetos dentro
//delas com this.nome recebe nome(onde a gente quis tornar essa variável pública), ou seja, essa variável não está encapsulada dentro do objeto, ou seja,
//não está escondida, ela está visível p/fora do objeto. Então qdo.a gente trabalha c/esse conceito de encapsulamento dentro do JavaScript temos que en-
//tender os níveis de visibilidade das coisas, só temos em JavaScript o nível global(qdo.trabalhamos no nível do browser, qdo.trabalhamos no node temos 
//outros níveis, como o global, o do próprio módulo que representa o arquivo e tem o nível da função);qdo.trabalhamos no browser e tbm.no node, temos a 
//partir das palavras let e const, temos o nível de visibilidade apenas no bloco, antigamente no browser tinha-se apenas o escopo global(window)e tinha-
//se o escopo da função, agora no browser temos o escopo global(window), temos o escopo da função e temos o escopo de bloco a partir de variávies defi-
//nidas com let e com const. Qdo.pensamos em encapsulamento tentamos diminuir o máximo possível o nível de visibilidade de uma determinada variável, en-
//tão nesse caso, preço e desconto vão ficar encapsulados(não será exibido p/fora)e no caso do this.nome vai ficar visível p/fora do objeto, de tal for-
//ma que quem quiser alterar o valor do nome pode alterar externo a função produto, pois a mesma estará visível devido ao this.nome virando um atributo
//público, e qdo.criamos um atributo interno dentro da função significa que ele vai ser privado, ou seja, só temos dois níveis de visibilidade; a coisa
//é pública ou ela é privada dentro de uma função, ou mesmo dentro um bloco(let e const).  
//Continuando a criar a própria função construtora que vai ter um método que vai ser público(vai ficar visível fora dessa função)e qdo.a gente instân-
//ciar objeto(essa sintaxe: this.nome = nome)significa que ele pertence a instância porque estamos acessando o this e qdo.for criada uma nova instância
//de produto, o nome que foi passado(function produto nome)estará visível nesta instância(this.nome = nome)que foi criada e esse método(getPreçoComDes-
//conto)pertence à instância(this.nome = nome)tbm.que ficará visível qdo.a gente acessar a partir da instância(this.nome = nome) e dentro desse método
//getPreçoComDesconto vamos pegar o preço usando a função(return preço e vamos multiplicar por um menos desconto)p/obter o valor com desconto, portanto
//nesse caso a gente não tem mais como alterar o valor do preço e do desconto a partir do momento da criação do produto porque esses dois valores estão
//escondidos, ou seja, tem o escopo apenas dentro da função, o objeto interno tem acesso a esses valores, mas eles não estão disponíveis p/fora do obje-
//to, estão encapsulados; então executando, vamos criar o primeiro produto passando caneta, o valor de R$ 7,99 e o desconto de 15%, em seguida a gente  
//vai criar uma nova instância de produto a partir da função construtora(new)colocando notebook com preço de R$ 2.998,99 e com 25% de desconto; agora se
//a gente quiser acessar p1 ponto nome ou p2 ponto nome e alterar diretamente o valor do nome do produto, a gente pode porque o this.nome = nome está 
//visível, mas se a gente quiser acessar p1 ponto preço não estará disponível porque os dois valores(preço e desconto)estarão disponíveis apenas dentro
//da função(não estão visíveis p/fora)e p/imprimir(70 e 71)digitar conf.linha72, que retorna conf.linha(74):
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//6.7915 2249.2425
//
//[Done] exited with code=0 in 0.571 seconds

// 4ª) Forma: Função Factory
//A quarta fora seria a partir de uma função factory, onde podemos usar tanto uma função construtora interna, como podemos usar uma notação literal, aqui
//no exemplo a gente vai usar uma notação literal de objetos p/criar um objeto dentro de uma função factory(factory é um padrão de projeto, é simplesmen-
//te uma função que cria, que fabrica alguma coisa)onde neste caso ele fabrica um objeto; então vamos ter uma função criar funcionário que vai ter um no-
//me, salário base,e uma qtde.de faltas; vamos retornar dentro dessa função o objeto que a gente quer fabricar a partir dessa função usando return abrin-
//do as chaves(ou seja, a gente está abrindo um objeto literal=>que é a 1ªforma mostrada nessa aula)colocando nome, salário base, faltas e vamos colocar
//mais uma função chamada de get salário p/calcular o salário baseado nas faltas que o funcionário tiver e em seguida ele vai retornar(return)calculando
//o salário base por um dia(dividindo o salário base por 30) e vamos multiplicar 30 menos o número de faltas que o funcionário teve dentro do período p/
//calcular qto.o mesmo ganhou; então criando os objetos a partir dessa função: f1 recebe criar funcionário e entre parentêsis vamos passar o parâmetro  
//com o nome João recebe um salário de R$ 7.980,00 e ele teve 4 faltas no período, depois vamos criar o funcionário 2 e vamos imprimir no console o va-
//lor calculado de get salário, executando retorna conf.linha 105:
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }

    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//6916 11020
//
//[Done] exited with code=0 in 0.495 seconds

// 5ª) Forma: Object.create
//Uma outra forma de função que pertence a Object chama-se "CREATE" que pode ser criada da seguinte forma:
const filha = Object.create(null)
filha.nome = 'Tina' 
console.log(filha)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ nome: 'Tina' }
//
//[Done] exited with code=0 in 0.603 seconds

//Tem tbm.uma função famosa que retorna Objeto...
// 6ª) Forma: JSON.parse
//Que é a gente transformar um JSON em um objeto, conf.segue: 
//Criar uma variável(constante)chamada de fromJSON(que vai ser um objeto)que vai receber o valor de JSON ponto parse e dentro dos parêntesis vamos passar
//um objeto JSON que é uma string('{"info": "Sou um JSON"}'), pois um JSON é um formato textual abrindo e fechando chaves{} e dentro das chaves temos um
//JSON escrito sempre com as aspas duplas e no final a gente pode acessar como objeto(fromJSON.info),porque ele vai converter o texto('{"info": "Sou um JSON"}')
//em um objeto e colocou na variável(fromJSON), e depois que ele virou objeto, a gente pode acessar como objeto dentro do código(info)normalmente, executando,
//retorna conf.linha 130.
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//Sou um JSON
//
//[Done] exited with code=0 in 0.586 seconds