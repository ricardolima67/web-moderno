//15/04/2021: 27.Entendendo o Null&Undefined

//Nesta aula vamos falar sobre o conceito de Null e Undefined dentro de JavaScript chamado de Atribuição por Valor e Atribuição por Referência. O professor abriu o browser p/fazer
//alguns experimentos: no console do Chrome vamos criar um objeto: const a = {name: 'Teste"} ->colocando a sintaxe p/rodar retorna undefined, então se colocarmos a letra: "a"
//apertar enter:ele vai trazer:"a"como objeto junto c/o seu atributo name e o seu valor:"Teste"; agora o prof.vai criar outra constante chamada b -> const b = a onde recebe o vr.da 
//constante "a", ou seja, ele tá pegando o vr.do objeto "a" e atruibuindo p/"b"; então o que acontece p/baixo dos panos qdo.fazemos essa atribuição?; ou melhor: O que de fato a
//constante "a" e "b" armazena?R.:A constante "a" não tem o contéudo do objeto {name: 'Teste"}, o que na verdade ela tem é o endereço no qual esse objeto está localizado, ou seja,
//ele tem um endereço apontando p/um objeto, então qdo.fazemos essa atribuição "b" recebe vr.de "a" (const b = a) o que "b" tá recebendo é o mesmo endereço no qual o "a" aponta, então
//a constante "b" e a constante "a" apontam p/o mesmo lugar na memória de tal forma que se fizérmos b.name = 'Opa'(b.name recebe Opa) e dermos enter->vai retornar: "Opa" porque 
//mudamos o nome "Teste" p/"Opa"; e se fizérmos o mesmo c/a constante "a"?R.:Ao digitarmos "a"->enter: retorna {name: "Opa"}, ou seja: Tanto a constante "a" como a constante "b":
//ambas estão apontando p/um mesmo local de memória; isto é, as duas constantes percebem a mudança dos conteúdos que recebem, portanto trata-se de uma atribuição p/referência: onde
//passasse o endereço de memória onde aquele objeto está armazenado e a partir das duas referências=constantes a gente consegue acessar o objeto.
//Exite outra alternativa p/essa atribuição p/referência que é qdo.fazemos usamos a variável let, então: let c = 3(variável let c recebe 3) em seguida vamos fazer let d = c(variável
//let d receba o vr.da variável c) onde 0 3 é um tipo básico da linguagem, um tipo primitivo mudando um pouco a lógica; então vamos incrementar o valor de "d" usando d++(d++ vai 
//incrementar uma unidade ao vr.da variável "d"): a variável "d" recebeu o vr.da variável "c" que era 3 agora vamos incrementar, então qdo.pedirmos p/imprimir o vr.de "d" ele vai 
//retornar:4 =>igual ao esse formato(um embaixo do outro) >d++ <.3 .d <. 4 e se colocarmos "c" o vr.é 3, então portanto o vr.de "d" é diferente do vr.de "c" mostrando aqui que foi
//feita uma cópia p/vr.devido ao tipo primitivo/básico da linguagem "c"; a diferença é: qdo.estamos trabalhando c/tipos primitivos fazemos cópia p/vr. onde "b" tem o seu vr. e "c"
//tem o seu vr. sendo independentes e são diferentes qdo.estamos trabalhando c/objetos em JavaScript que a atribuição é feita p/referência, ou seja a constante "a" e "b" apontam 
//p/o mesmo objeto em memória e faz com que se mudarmos a parte de "a" o "b" vai perceber e vice-versa.
//Vamos começar a trabalhar c/conceito de NULL como referência que aponta para um espaço de memória; então na linha22 vamos criar uma variável let chamada de valor e não vamos 
//atribuir nada(não inicializada), ou seja, não vamos nem inicializar essa variável e qdo.tentamos imprimir a mesma, vamos ter o conceito de UNDEFINED(INDEFINIDO)conf.linha23:
let valor // não inicializada      //porque nessa variável não foi atribuído nada, ou seja, ela nunca foi inicializada, então o vr.dela p/padrão é UNDEFINED.
console.log(valor)         //Na linha24 se dissérmos valor2 vai imprimir is not defined sen do diferente de undefined, mostrando que o vr.2 nem foi declarado dentro do programa;
console.log(valor2)        //gerando um erro:ReferenceError: valor2 is not defined->dizendo que esse vr.que não está definido.
valor = null     //valor recebe null: NULL significa que se temos uma variável que não está apontando p/nenhum endereço de memória, não contendo vr.dentro dela:vr.primitivo 3 p/ex.
//NULL quer dizer ausência de valor, existe uma diferença:na linha25 estamos definindo que a variável valor nesse ponto foi definida como NULL(NULO) dizendo que ela não aponta p/
//nenhum local de memória, ou seja, ela está vazia, então se pegarmos a linha25 e solicitar a impressão, temos conf.linha28 e 29: a resposta => null.
valor = null   //Então qdo.trabalhamos c/tipos que são referência, que tem dentro dele um endereço de memória, o NULL faz sentido, pois podemos colocar em sintaxe p/apontar p/uma
console.log(valor)  //memória vazia, ou seja, uma variável vazia. O NULL serve p/não apontar p/mais ninguém.
console.log(valor.toString())  //Nessa linha30: O que vai acontencer se tentarmos acessar alguma coisa de uma variável que não aponta p/absolutamente nada?R.:Se executarmos esse 
//código veremos TypeError: Cannot read property 'toString' of null(Não pode ler a propriedade de 'toString' de nulo); o mais indicado seria sempre termos um vr.padrão associado a 
//determinada variável, evitando esse tipo de problema.
const produto = {}   //temos na linha33: constante produto recebe um objeto vazio e em seguida na linha 34:p/tentar acessar o preço do produto; o produto não é nulo, ele está setado,
console.log(produto.preco)   //e o preço não exite dentro do produto, mas isso não gera erro, sendo diferente acessar o toString(linha30), então qdo.executamos p/imprimir: ele
//retorna como UNDEFINED(INDEFINIDO), ou seja, que não está definido o preço dentro do produto. Se tentarmos colocar alguma coisa depois de preço p/ex.conf.linha36 e 37:
const produto = {}  //onde vamos ter um problema:TypeError: Cannot read property 'a' of undefined(Não pode ler a propriedade a de INDEFINIDO) que no caso é o preço.
console.log(produto.preco.a)  //Podemos até acessar o preço que está indefinido, desde que o que venha antes do ponto(linha37) esteja definido de acordo c/o objeto vazio linha36{}.
console.log(produto)  //Linha38: retorna {}=>objeto vazio; na linha39 vamos definir o preço(R$3,50):
produto.preco = 3.50  //Linha39:vamos definir o preço:3.50;vimos que o objeto é um conjunto de pares chave e valor e que podemos dinamicamente adicionar novas chaves e valores sem 
console.log(produto)   //precisar ter definido ele na estrutura inicial, executando a linha40: retorna { preco: 3.50 } mostrando que o objeto de fato tem um atributo.
//Então vamos fazer um teste que é atribuir a essa variável preço um vr.UNDEFINED conf.linha43: Evitar de USAR UNDEFINED DE FORMA EXPLÍCITA, ou seja, deixar que a linguagem a 
//defina por si só e qdo.quisérmos limpar o vr.de uma variável numérico p/ex., o ideal seria colocar ZERO(0) ao invés de colocar NULO 
produto.preco = undefined  //Linha44 p/imprimir esse preco convertendo o vr.p/boolean e como o vr.é UNDEFINED vai retornar como FALSO, como se não existisse esse vr., vr.inválido.
console.log(!!produto.preco)
console.log(produto)  //Linha45 imprimindo no console o próprio vr. do produto de fato, onde retorna: { preco: undefined }, mostrando que ele tem um objeto que tem um atributo (preço)
//porém o mesmo está UNDEFINED(INDEFINIDO), fazendo com que o objeto não deixe ter o atributo, portanto a forma correta de tirar o atributo de um objeto seria usando conf.linha47:
delete produto.preco  //onde retornaria {} objeto vazio.
produto.preco = null  //produto.preco recebe nulo; seria dizer de forma explicita que esse produto está sem preço, p/ex.:podemos ter um produto que o preço é 0(ZERO) porque está de 
//graça, e dentro do sistema queremos colocar o proço 0 como um preço válido e queremos diferenciar entre um preço 0 que é válido e um preço que não está definido dentro do produto,
//então poderíamos colocar NULL e não o UNDEFINED. Se fizérmos novamente a mesma lógica da linha44(ref.ao vr.boolean: teremos um vr.FALSO)conf.linha51:
console.log(!!produto.preco)
console.log(produto)   //E executando a linha52 retorna como { preco: null } mostrando que o vr. está nulo.
