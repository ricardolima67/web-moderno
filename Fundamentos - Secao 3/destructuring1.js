//27/04/2021: 43.Operadores: Destructuring #01

//Abrindo um parêntesis sobre os operadores clássicos que encontramos nas linguagens, temos operadores de atribuição, operadores aritméticos, operadores relacionais, operadores 
//lógicos, etc. Nesta aula será abordado sobre um operador que foi introduzido na versão 2015 do JavaScript que é o Operador Destructuring, trata-se de um operador de Desestrutura-
//ção, ou seja, ele tira da estrutura alguma coisa, p/ex.: uma estrutura é um objeto; é uma forma de se extrair de dentro de um objeto os seus atributos, temos o Array tbm.como 
//sendo uma estrutura, seria uma forma de se tirar elementos de uma Array a partir dessa forma(Destructuring), o operador Destructuring tem duas formas de escrita, quando ele
//trabalha no âmbito de objeto usamos na sintaxe as chaves{} porque pra criar um objeto literal usamos as chaves{} e quando queremos usar o operador Destructuring no âmbito de Array
//usamos na nossa sintaxe os colchetes[], já que para definir uma Array usa-se os colchetes[].
//Este recurso Destructuring é um novo recurso introduzido no ECMASCRIPT 2015(ES2015).
//Vamos criar uma constante chamada pessoa recebe um objeto literal(chaves{})e dentro das chaves vamos colocar nome: 'Ana', idade 5, endereço(abri-se novamente chaves{}e dentro das
//chaves receber os dados do logradouro)conf.linhas abaixo; vamos supor que a gente queira a partir do objeto pessoa extrair a variável nome e idade, ou seja, queremos ter acesso a 
//essas duas variávies dentro do meu programa(segundo o prof. pode se dizer que é muito fácil: pode-se usar a notação ponto(tipo: pessoa.nome), (pessoa.idade)), queremos criar uma va-
//riável p/ex., então colocamos let nome, ou então const nome recebe pessoa.nome, const idade recebe pessoa.idade, esta seria a forma padrão que iríamos fazer, mas vamos fazer usando 
//operador Destructuring que é uma forma simplificada de tirármos de dentro de uma estrutura, no caso aqui do objeto, dois atributos, conf.abaixo:
//Na linha 20 vamos colocar const { }(abrindo as chaves)representando o operador de desestruturação(destructuring)onde vamos tirar o nome e a idade, então dentro dessas chaves vamos 
//colocar nome e idade, e esse(const)vai receber pessoa, então estamos atribuindo pessoa a alguma coisa(que no caso é o que está dentro das chaves, ou seja, o seu conteúdo), portanto
//tire de dentro do objeto pessoa o atributo nome e idade; a partir dessa linha 20 vamos ter duas variáveis nesse programa para trabalharmos que é o nome Ana e a idade 5 que estamos
//tirando da estrutura(objeto=pessoa)a partir desse operador{ nome, idade }destructuring, continuando portanto, vamos imprimir no console conf.linha 30 e essa é a forma de percebermos
//que em uma única linha tirármos vários atributos de dentro de um objeto(estrutura) e atribuir às suas respectivas variávies.
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
    numero: 1000
    }
}

const { nome, idade } = pessoa 
console.log(nome, idade)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Ana 5
//
//[Done] exited with code=0 in 0.788 seconds

//E se quisérmos mudar o nome da variável, porque do jeito que foi colocado conf.linha 29, vamos ter sempre que chamar de nome e idade; não obrigatoriamente, podemos fazer conf.
//linha 38 criando uma variável chamada n e i; então de acordo com a linha 39 vai dar o mesmo resultado anterior, conf.linhas 40 a 43.
const { nome: n, idade: i } = pessoa
console.log(n, i)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Ana 5
//
//[Done] exited with code=0 in 0.888 seconds

//E se tirármos um atributo que não existe de dentro do objeto, então vamos colocar conf.linha49; onde vai retornar como undefined, pois sobrenome e bemHumorada são atributos que não
//fazem parte do objeto, então, vamos supor que não queremos correr o risco de uma das variáveis voltar esse valor(undefined), podemos atribuir um valor padrão, p/ex.: sobrenome va-
//mos deixar do jeito que está e em bemHumorada vamos colocar o valor padrão como true, então de forma padrão se não vier nada de dentro do objeto pessoa, por padrão assuma o valor 
//verdadeiro conf.linha 50 onde vamos atribuir pessoa e em seguida na linha 51 imprimir no console o valor de sobrenome e o valor de bemHumorada:
const { sobrenome, bemHunmorada }
const { sobrenome, bemHumorada = true } = pessoa 
console.log(sobrenome, bemHumorada)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Ana 5
//undefined  true
//[Done] exited with code=0 in 0.608 seconds
//Então ele retornou sobrenome undefined e bemHumorada retornou true(verdadeiro)

//E se quisérmos acessar os atributos logradouro e número que estão dentro de endereço, podemos fazer const abrindo chaves p/endereço, em seguida abrindo chaves p/logradouro, número
//e além dos dois que já existem podemos tbm.colocar um que não existe: que no caso é o cep e depois atribuir pessoa conf.linha 62, então ele não vai criar a variável endereço(somente
//se fizéssemos o Destructuring nela(endereço)), neste caso ele vai criar apenas o logradouro, número e cep extraindo de pessoa(não extraindo esse três diretamente de pessoa, mas sim
//olhando tbm.p/dentro de endereço), então executando o console linha 63, temos:
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Ana 5
//undefined  true
//Rua ABC 1000 undefined
//[Done] exited with code=0 in 0.518 seconds