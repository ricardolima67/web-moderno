//18/05/2021: 76. Funções Anônimas
//
//Quando trabalhamos com funções normais podemos nomeá-las e tbm.podemos criar funções anônimas passando-as p/executar outra função e pode-se armazenar uma função
//anônima dentro de uma variável.
//Criar uma constante chamada soma que recebe função anônima(função anônima é uma função sem nome)que recebe dois parâmetros x e y e retorna x+y que é a função soma
//e em seguida vou criar uma função chamada imprimir resultado que vai receber uma outra função anônima que vou armazenar essa constante(imprimir resultado)que vai
//receber três parâmetros: a, b, operação = soma, sendo o parâmetro operação = soma vai receber os parâmetros a e b, que se tbm.não for informado desse jeito, por 
//padrão ele vai pegar a função criada return x + y p/imprimir o resultado no console.log()p/chamar a operação que eu passei como parâmetro e vou passar os dois pa-
//râmetros recebidos a e b p/chamar essa função; então testando esse resultado, vou colocar imprimir resultado passando valor 3 e 4; retorna conf.linha20:
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//7
//
//[Done] exited with code=0 in 0.873 seconds
//
//Posso tbm.explicitamente passar a função soma conf.linha35(onde tenho a referência da função soma a partir da variável soma linha 27) que não vai fazer nenhuma
//diferença nesse caso, retornando conf.linha 38:
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//7
//7
//
//[Done] exited with code=0 in 0.425 seconds
//
//Eu posso tbm.passar uma outra função diretamente dentro da chamada função imprimir resultado usando return x - y onde eu tô passando uma função anônima (x, y) 
//diretamente na chamada dessa função imprimir resultado(reparar que: a abertura dos parêntesis da linha 56 e o fechamento deles tá na linha 58), então: eu tenho
//um primeiro parâmetro que é o 3, outro segundo parâmetro que é o 4 e o terceiro parâmetro que é o function (x, y)que ocupa múltiplas linhas, ou seja, acabei de 
//passar uma função anônima diretamente p/uma outra função e esse tipo de recurso é muito mais comum do que a gente imagina em JavaScript. 
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//7
//7
//-1      //Resultado de 3-4= -1 conf.linh56 e 57.
//
//[Done] exited with code=0 in 0.45 seconds
//
//Outro exemplo é: imprimir resultado passando valor 3 e 4 onde eu posso passar uma Arrow Function(=>)(como ele têm dois parâmetros eu não posso tirar os parêntesis)
//conf.linha 81 passando agora p/uma operação de multiplicação, retornando conf.linha 86(3x4=12).
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//7
//7
//-1
//12     //Qdo.tenho um Arrow Function(=>)tenho de fato uma função anônima, pois não tenho como dar nome p/uma função Arrow, mas uma função tradicional pode ser nomeada 
//       //ou uma função anõnima como já vimos.
//[Done] exited with code=0 in 0.448 seconds
//
//Outro exemplo de função anônima é qdo.eu crio uma função dentro de um objeto(93 a 97), colocando p/ex.atributo falar recebe uma função anônima e dentro do objeto eu vou 
//colocar aquilo que eu quero que a função exerça(93a96) e depois eu chamo pessoa ponto falar(99),onde eu acesso essa função anônima a partir do atributo de um objeto que a  
//gente definiu entre chave e valor(94 a 96), cuja impressão do console retorna conf.linha 101.   
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Opa
//
//[Done] exited with code=0 in 0.447 seconds