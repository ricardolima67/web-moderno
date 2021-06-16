// 14/04/2021: 23.Usando Template Strings
// O Template String é uma ferramenta para deixar o código mais elegante e organizado,
// além de considerar algumas coisas que a string não pode fazer que é: não podemos quebrar a linha contendo olá separando o a da palavra olá para a linha de baixo; ou seja,
// no meio de uma string quebrar a linha, isso vai gerar um erro no código, no Template String podemos quebar uma linha no meio, e ele vai considerar todas as quebras de linhas,
// espaços em branco e tabs dentro da string; porque além de interpretar/interpolar, ou seja, converter a variável dentro do próprio texto, ele tbm considera as quebras de linhas.
// Ao criar o Template usar o símbolo da CRASE; em seguida vamos colocar Olá e na linha seguinte vamos resolver o nome colocando dólar entre chaves informando o nome da variável colo-
// cando a exclamação no final; mostrando o resultado no console entre parêntesis concatenação vírgula template: ctrl+alt+n = vai imprimir Olá Rebeca e depois Olá em um linha e Rebe-
// na linha de baixo, considerando a quebra de linha conf.digitado nas linhas 21 ed 22.

// Dentro do Template String conseguimos colocar Expressões Matemáticas, p/ex.: soma de dois nºs. Para o Template funcionar temos que colocar ${a descrição da variável}e colocar o
// backchick(CRASE `), pois o que está dentro da expressão {} é o que será executado/interpretado/interpolado para impressão/retorno/resultado = 1+1=2.

// Dentro de uma expressão podemos chamar uma função p/fazer algum trabalho e dentro do contexto de um Template String: isso é possível; então vamos criar uma função chamada UP p/ele
// pegar as letras e converter para maiúsculo: const up(função chamada de Arrow onde foi atribuída a variável UP) = (recebe) o parâmetro s (de string, mas pode-se usar qualquer nome),
// vamos colocar texto ao invés de s na função, em seguida => texto.toUpperCase() p/transformar essa palavra texto em maiúscula, onde após a sintaxe de comando
// console.log(`Ei... ${up('cuidado')}!`) = imprime: Ei... CUIDADO!

// Obs.: Uma Expressão dentro de uma Template String começa com o DÓLAR($) abrindo e fechando CHAVES {} e dentro das chaves colocar a expressão p/posterior impressão.

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome +'!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
