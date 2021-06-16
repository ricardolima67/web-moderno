//31/05/2021: 92. Introdução à OO.
//
//CÓDIGO NÃO EXECUTÁVEL//=> Nesta aula será mostrado códigos não executáveis, p/mostrar algumas idéias sobre o paradigma de orientação a objeto focando mais nos
//conceitos de OO(Orientação a Objeto).

// Procedural => O paradigma procedural é baseado no procedimento, na Procedure, na Função, onde temos um trecho de código que damos um nome pra ele e reutiliza
//ele em vários lugares,gerando um foco muito forte na função/procedimento; p/ex.:temos um código conf.abaixo chamado processamento que é uma função e recebe um
//conjunto de dados => valor1, valor2, valor3 e esses valores são processados por essas funções, normalmente temos valores globais compartilhados em nossa apli-
//cação, normalmente variáveis a partir de ponteiros, o risco de bugs é muito grande devido ao compartilhamento de dados, como mencionado em aulas anteriores.
//Trata-se de uma linguagem estruturada, diferente da linguagem não estruturada GO TO(que se parava o tratamento dessa linguagem e ia p/outra e assim sucessiva-
//mente p/fazer o tratamento das mesmas), essa mudança ocorreu com um artigo do Daistra criticando esse modelo, pois era nocivo p/a qualidade do software fazendo
//com que o conceito do GO TO de ficar desviando fluxo o tempo todo fosse sendo substituido p/linguagens estruturadas, inclusive o paradigma de orientação a objeto
//tbm.está dentro de conceito estruturado.
processamento(valor1, valor2, valor3) 
// OO - o conceito OO mudou completamente o foco dentro de orietação a objeto, pois antes tinha-se um foco em funções que manipulavam dados, atualmente temos na 
//OO dados e dentro desses dados temos funções, p/ex.: se pegarmos o mesmo exemplo anterior(processamento(valor1, valor2, valor3)), seria assim:
//O objeto passando a ser uma figura muito importante dentro da OO, ou seja, a figura central de uma estrutura que gera objetos e objetos propriamente ditos, as 
//estruturas que geram objetos podem ser classes, funções, entre outras, dependendo de qual linguagem que se esteja trabalhando ela vai garar de uma forma dife-
//rente, mas o fato é que os objetos são gerados e têm valores(25 a 27), atributos internos do objeto(25 a 27), e temos dentro do objeto: os comportamentos(28),
//ou seja, a diferença que temos é uma linguagem procedural(13)manipulando dados internos ou globais de uma função que retornam um valor e qdo.a gente passa p/
//OO, temos um objeto que têm valores, ou seja, que têm atributos(25 a 27)e têm tbm.funções(28), comportamento dentro desse objeto e a gente passa a invovar 
//esses processamentos(33)a partir do dado, então quem tem a função(neste caso: processamento)ela pertence ao objeto(33)e dentro do objeto temos os valores(25 a
//27)que são usados dentro do processamento(33).     
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // ... 
    }
}

objeto.processamento()
//Continuando da linha(23): o objeto funciona como uma cápsula que agrupa comportamentos e atributos. A idéia de ter paradigmas de orientação a objeto é p/que 
//se possa estar mais próximo do mundo real, ou seja, a interpretação do mundo orientado a objeto, diferente da palestra do Rob Pike que diz que o mundo não é
//tão OO e sim é mais concorrente afim de defender a sua tese.
//A Orientação a Objeto entende que o mundo é formado p/objetos que possuem atributos e comportamentos, do qual estes se relacionam uns com os outros e objetos
//pode conter outros objetos, podendo ter uma relação de parentesco(conhecido com herança), p/ex.: tendo um objeto pai, um objeto filho que herda característi-
//cas do objeto pai, que são príncipios a serem enxergados e trazidos do mundo real p/tentar abstrair por meio de uma simplificação p/dentro do nosso sistema.

//Javascript – Programação orientada a objetos  // Pesquisa//

//Vamos dar uma visão geral, simplista e de alto nível do que é programação orientada a objetos.
//A ideia básica de OO é que usamos objetos para modelar coisas do mundo real que queremos representar dentro de nossos programas e conseguir de maneira simples
//acessar as propriedades e funcionalidades desses objetos modelados.
//Os objetos podem conter dados e códigos relacionados, que representam informações sobre o que você está modelando e a funcionalidade ou comportamento que você
//deseja que ele tenha.
//Há muitas maneiras pelas quais os objetos em JavaScript diferem dos objetos em outras linguagens de programação convencionais, como Java por exemplo.
//Vamos ver cinco maneiras de criar objetos em JavaScript.

//Usando Object literal
//Usando ‘new’
//Usando Object.create()
//Usando Object.assign()
//Usando class ES6

//Em JavaScript especificamente, podemos pensar em objetos como uma coleção de pares “chave: valor“.
//Isso nos traz a primeira e mais popular maneira de criar objetos em JavaScript.
//Quase tudo no Javascript é objeto, seja uma matriz ou uma função.
//Definindo um modelo de objeto carro:
//Um carro pode ter propriedades como peso e cor, e métodos como ligar e desligar:
//               Objeto carro:
// Propriedades//            //Métodos//
// car.name = Beatle         car.start()
// car.type = Sedan          car.drive()
// car.weight = 840kg        car.breake()
// car.color = Pink          car.stop()

// Objeto carro:
//Todos os objetos carros dessa forma (classe) têm as mesmas propriedades, mas os valores das propriedades diferem de carro para carro.
//Todos os carros têm os mesmos métodos, mas os métodos são realizados de forma diferente entre eles.
//Objetos também são variáveis.
//Mas, objetos podem conter muitos valores.
//Um objeto é uma estrutura de dados que combina várias variáveis, que nesse caso são chamadas de propriedades, e métodos, que são as ações, os comportamentos do
//objeto, tudo que o objeto sabe fazer.
//Essa combinação de propriedades e métodos fazem sentido para o objeto modelado.
//Então vamos lá!
//Essas são as cinco formas diferentes que eu conheço, para criar objetos em JavaScript:
//Primeira forma – Object Literal
//Definir um Object Literal é a maneira mais simples de criar um objeto JavaScript.
//Como os objetos são variáveis, você pode instanciá-los da mesma maneira que uma variável.
//Um objeto literal JavaScript, é uma lista separada por vírgulas de pares nome-valor agrupados em chaves, um dicionário mesmo.
//Objeto literal encapsula dados, colocando-os em um pacote organizado.
//Propriedades
//Você define e cria um objeto JavaScript com um objeto literal da seguinte forma.
//
//const car = {name:"Beetle", type:"Sedan", weight: 840, color:"Pink"};
//Você pode identar assim também se preferir:
//
//
//const car = {
//    name:"Beetle", 
//    type:"Sedan", 
//    weight: 840, 
//    color:"Pink"
//};

//Acessando propriedades do objeto
//
//car.name;
//Ou assim, já que nosso objeto carro tá estruturado na forma de um dicionário (object literal):
//
//car["name"];
//Métodos
//Um método é uma função armazenada como uma propriedade.
//
//Onix
//
//
//const car_02 = {
//    name:"Onix", 
//    type:"Sedan", 
//    weight: 850, 
//    color:"Green",
//    start: function() {
//        return "Engine started";
//    },
//    drive: function() {
//        return "Car being driven now";
//    },
//    brake: function() {
//        return "Brake actioned";
//    },
//    stop: function() {
//        return "Engine switched off";
//    },
//    toString: function(){
//        return "Nome: " + this.name + ", " + "Modelo: " + this.type + ", " + "Cor: " + this.color;
//    }
//};
//
//Fusca
//
//
//const car_01 = {
//    name:"Beetle", 
//    type:"Sedan", 
//    weight: 840, 
//    color:"Pink",
//    start: function() {
//        return "Engine started";
//    },
//    drive: function() {
//        return "Car being driven now";
//    },
//    brake: function() {
//        return "Brake actioned";
//    },
//    stop: function() {
//        return "Engine switched off";
//    },
//    toString: function(){
//        return "Nome: " + this.name + ", " + "Modelo: " + this.type + ", " + "Cor: " + this.color;
//    }
//};
//
//Palavra-chave this
//Em uma definição de função, isso se refere ao “proprietário” da função.
//
//No exemplo acima, o primeiro this é a propriedade name do Fusca, o segundo o tipo e o terceiro a cor, desse carro em específico.
//
//Acessando métodos de objeto
//
//name = car.name();
//weight =  car.weight: 840; 
//Não declare Strings, Numbers, e Booleans como Objects!
//Quando uma variável JavaScript é declarada com a palavra-chave “new“, a variável é criada como um objeto:
//
//
//let x = new String();        // Declara x como um objeto String
//let y = new Number();        // Declara y como um objeto Number
//let z = new Boolean();       // Declara z como um objeto Boolean
//Evite declarar String, Number e Boolean como objetos.
//Eles complicam seu código e diminuem a velocidade de execução.
//
//Segunda forma – Criando objetos usando a palavra-chave “new“
//Esse método de criação de objetos se assemelha à maneira como os objetos são criados em linguagens baseadas em classes, como Java.
// 
//A partir do ES6, as classes são builtin no JavaScript.
//
//Aqui estão duas maneiras de usar o “new“.
//a) Usando a palavra-chave ‘new‘ com a função construtora de Objetos built-in.
//Para criar um objeto, use a palavra-chave new com o construtor Object (), assim:
//
//const car = new Object();
//Agora, para adicionar propriedades a esse objeto, precisamos fazer algo assim.
//
//
//car.name = 'Fusca';
//car.weight = 840;
//Você pode ter imaginado que esse método é um pouco mais longo para digitar.
//
//Além disso, essa prática não é recomendada, pois existe uma resolução de escopo que ocorre nos bastidores para descobrir se a função do construtor é built-in ou 
//foi definida pelo usuário.
//
//b) Usando ‘new‘ com a função construtora definida pelo usuário
//O outro problema com a abordagem do uso da função construtora “Object” resulta do fato de que toda vez que criamos um objeto, precisamos adicionar manualmente as
//propriedades ao objeto criado.
//
//E se tivéssemos que criar centenas de objetos na mão?
//
//Pode imaginar o perrengue?
//
//Portanto, para se livrar da adição manual de propriedades aos objetos, criamos funções personalizadas, ou definidas pelo usuário.
//
//Primeiro, criamos uma função construtora e, em seguida, usamos a palavra-chave ‘new‘ para obter objetos.
//
//Vamos criar um outro objeto agora, o objeto pessoa.
//
//
//function Person(fname, lname) {
//    this.firstName = fname;
//    this.lastName = lname;
//} 
//
//Agora, sempre que quiser um objeto “Person“, é só fazer o seguinte:
//
//const person01 = new Person('Fulano', ' de Tal');
//const person02 = new Person('Sicrano', ' da Silva');
//
//Terceira forma – Usando Object.create()
//Esse padrão é muito útil quando precisamos criar objetos a partir de outros objetos existentes e não diretamente usando o “new“.
//
//Segundo o MDN, o método Object.create() cria um novo objeto, usando um objeto existente como o protótipo para o objeto a ser criado.
//
//Object.create
//Para entender o método Object.create, lembre-se de que são necessários dois parâmetros.
//
//O primeiro parâmetro é um objeto obrigatório que serve como protótipo para o novo objeto a ser criado.
//
//O segundo parâmetro é um objeto opcional que contém as propriedades a serem adicionadas ao novo objeto.
//
//Digamos que tenha uma empresa representada pelo companyObject.
//
//
//let companyObject = { company: 'Empresa XYZ' }
//Agora precisamos criar funcionários para esta organização.
//
//
//let employee = Object.create(companyObject ,  {    name:{      value: 'Funcionario_01'    }  });
//console.log(employee.name);    //Output: Funcionario_01
//console.log(employee.company); //Output: Empresa XYZ
//
//Quarta forma – Usando Object.assign()
//E se quisermos criar um objeto que precise ter propriedades de mais de um objeto?
//
//Object.assign() vai ajudar.
//
//Segundo o MDN, o método Object.assign() é usado para copiar os valores de todas as propriedades enumeráveis de um ou mais objetos de origem para um objeto de destino.
//
//Ele retornará o objeto de destino.
//
//O método Object.assign() pode usar qualquer número de objetos como parâmetros.
//
//O primeiro parâmetro é o objeto que ele criará e retornará.
//O restante dos objetos passados para ele será usado para copiar as propriedades para o novo objeto.
//
//Vamos entender, estendendo o exemplo anterior que vimos.
//
//Suponha que você tenha dois objetos, como abaixo:
//
//
//let companyObject = {company: 'ABC CORP'} 
//let carObject = {carName: 'Ford'}
//Agora, você quer um objeto funcionário da ‘ABC CORP‘ que tenha um carro da ‘Ford‘.
//
//Você pode fazer isso com a ajuda de Object.assign():
//
//
//let employee = Object.assign( {}, companyObject, carObject );
//Agora, você tem um objeto de funcionário que tá em uma empresa e tem carName como propriedade.
//
//Podemos acessar esses dados, através dele, do employee.
//
//console.log(employee.company) //Output: ABC CORP 
//console.log(employee.carName) //Output: Ford
//
//Quinta forma – Usando class ES6
//Esse método é semelhante ao uso do ‘new‘ com a função construtora definida pelo usuário.
//
//As funções do construtor agora são colocadas dentro da declaração das classes, pois são suportadas pelas especificações do ES6.
//
//Vamos ver o código agora.
//
//
//class Person {
//    constructor(fname, lname)
//    {
//        this.firstName = fname;
//        this.lastName = lname;
//    }
//}
//
//let person = new Person('testFirstName', 'testLastName');
//console.log(person.firstName);    //Output: testFirstName
//console.log(person.lastName);    //Output: testLastName
//
//Continuando da página 39: Vamos falar de alguns: // Princípios Importantes //com relação a orientação a objeto: 
// 1º) Príncipio Importante: ABSTRAÇÃO: é pegarmos um objeto do mundo real e traduzi-lo p/dentro do nosso sistema, p/ex.: vamos imaginar um objeto 
//simples => CARRO (60 a 67); será que faz sentido a gente criar uma função dentro do objeto carro: acelerar p/ex.p/um sistema do detran?R.:Não faz
//sentido, porque temos que abstrair esse objeto(carro), simplificar o objeto no mundo real e trazer essa simplicação p/dentro do nosso sistema: abstração
//significa ter o mesmo objeto abstraído/simplificado de formas diferentes p/necessidades diferentes.
// 2º) Princípio Importante: ENCAPSULAMENTO: é termos os detalhes de implementação escondidos e os mesmos serem mostrados p/quem precisa usar aquele sistema
//ou uma interface simples p/que a gente possa interagir c/determinado objeto(80 a 96), seguindo o racicínio: o que é necessário conhecer p/se usar um carro?
//R.:Precisamos aprender a trabalhar c/direção, marcha, ligar o carro, colocar combustível no carro p/continuar funcionando, mas, p/ex.: como o combustível
//queima dentro do motor, como funciona as válvulas, por que um têm mais cavalos, outros têm menos cavalos, enfim; esse tipo de informação fica escondido, ou
//seja, fica ENCAPSULADA dentro do objeto carro e a gente lida apenas c/a interface de comunicação entre a gente e o carro(que é usar a marcha, a ignição, di-
//reção)dependendo do carro pode-se ter uma abstração maior, podendo variar.
// 3º) Princípio Importante: HERANÇA (PROTOTYPE): é um princípio baseado numa relação E1, existe algumas formas dentro do mundo do software p/se reusar código,
//tem-se reuso a partir de composição, p/ex.: um carro é composto p/um motor(carro é um objeto, e motor é outro), então não é preciso colocar complexidade de 
//motor dentro do objeto carro, pois posso simplesmente dizer que carro tem um motor(junto com a sua complexidade); então o motor somado com outros objetos p/
//ex.: portas, capôs, vidros, etc...geram um carro e assim a gente vai gerando objetos mais complexos a partir da composição de objetos mais simples, essa é 
//uma forma de termos reuso de código, ou seja, a gente não ter que escrever aquilo que é do motor(descrição em peças)dentro do carro, a gente reusa a partir 
//da composição. Outra forma de reusar código é termos a HERANÇA, significa que a gente recebe atributos e comportamentos de um objeto pai que passa caracte-
//rísticas p/um objeto filho(herança), algumas linguagens permite o que a gente chama de herança múltipla, ou seja, múltiplos pais, porém em JavaScript só é
//permitido que se tenha um único pai, um avó, etc...vamos criando conforme a necessidade, ou seja, uma cadeia de protótipos que em JavaScript é uma lingua-
//gem que a herança é implementada em cima desse conceito de prototype(protótipo).
//No mundo real nós temos relações do tipo E1, p/ex.: temos composição como Tem 1, ou seja, o carro TEM UM motor, o carro TEM portas, a porta TÊM parafusos
//onde vamos compondo os objetos mais complexos a partir de objetos mais simples, continuando o exemplo: o ser humano é um animal, o ser humamo é um mamífe-
//ro e mamífero é um animal, etc....  
//EXISTE UM TENDÊNCIA MUITO FORTE DE QDO.ESTIVÉRMOS DESENVOLVENDO QUE É PRIORIZAR A COMPOSIÇÃO AO INVÉS DE HERANÇA, pois a herança pode muitas vezes trazer
//confusões dentro do código, se pudérmos priorizar a composição(a relação DO TEM 1)no lugar da herança. Existem formas que nem tudo que é E1 a gente preci-
//se mapear como herança, a gente pode mapear como uma composição por meio de técnicas e padrões de projetos p/fazer isso.  
// 4º) Princípio Importante: POLIMORFISMO: que significa múltiplas formas, é o fato de que p/ex.: a gente tenha um celular, celular é um conceito genérico,
//um conceito abstrato, pois pode ser um Iphone, um galaxy, um motor z, enfim...a partir do conceito genérico a gente consegue substituir p/objetos concre-
//tos, tendo mais a ver com linguagens tipadas.   
//O fato é a gente conseguir usar um carro(em seu conceito genérico)onde ele em algum momento aponta p/uma Ferrari, onde a gente pode acelerar, frear, ligar,
//desligar; ou pode-se substituir p/um Uno(Fiat), ou seja, podemos substituir diferentes conceitos concretos a partir de se trabalhar em um nível mais abs-
//trato, portanto, polimorfismo quer dizer múltiplas formas, ou seja, a partir de uma variável tipo mais genérico linkado c/o princípio de orientação a ob-
//jeto c/uma classe do tipo carro p/atribuir a uma Ferrari, um Uno, um Civic, etc... pois existe uma relação de herança entre carro e esses tipos(marcas)con-
//cretos, uma classe filha pode ser referenciada numa variável do tipo pai, sendo essa a idéia do polimorfismo.   