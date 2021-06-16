//07/05/2021: 62. Usando a Estrutura DO/WHILE.
//
//Nessa aula vamos estudar uma variante da estrutura de controle While chamada de Do While, tbm.é uma estrutura de controle de repetição, só que ela inverte um pouco a lógica do While garantindo
//que pelo uma vez haja repetição no laço; trata-se de uma estrutura muito pouco usado pelos programadores.
//Vamos criar basicamente o mesmo exemplo da aula passada(61)conf.abaixo:
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')
//Se transformarmnos a linha 11 em -1 sabemos que ele não vai entrar no bloco, porque ele já iniciou com a expressão falsa(linha13); no caso do Do While acontece que a gente pega a expressão
//da linha 13 while (opcao != -1) que tem apenas o while, tira ele desta linha 13 e o coloca depois do bloco(na linha 16); essa é a única estrutura de controle no qual a expressão está depois
//do bloco, ou seja, o bloco está na linha 22 e a expressão de continuidade do bloco está depois conf.linha 25 e no início da linha 22 colocamos a palavra DO, conf.linha 29:
{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}while (opcao != -1)

console.log('Até a próxima!')
//
 do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}while (opcao != -1)

console.log('Até a próxima!')
//Continuando da linha 21: acabamos de transformar um While em uma estrutura Do While, neste caso, mesmo que a opção seja -1(conf.linha11=>let opcao = -1)obrigatoriamente ele vai executar
//a primeira repetição e qdo.ele executar a primeira repetição o valor de opção linha 14 será alterado pela função, então pode colocar -1 na linha 11 sem problema?R.:Sim, porque ele só
//vai fazer este teste depois de executar a primeira repetição conf.linhas 30 a 32, então qdo.executamos o código, temos conf. linhas 53 a 67: 
//O que acontece qdo.a gente transforma um while em um do while?R.:Ele vai executar qtas.vezes forem necessárias até achar o resultado da linha 44 e assim ele sair da estrutura do While.
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Opção escolhida foi 8.
//Opção escolhida foi 4.
//Opção escolhida foi 9.
//Opção escolhida foi 9.
//Opção escolhida foi -1.
//Opção escolhida foi 4.
//Opção escolhida foi 1.
//Opção escolhida foi 3.
//Opção escolhida foi 4.
//Opção escolhida foi 9.
//Opção escolhida foi 1.
//Opção escolhida foi 9.
//Opção escolhida foi 4.
//Opção escolhida foi -1.
//Até a próxima!
//
//[Done] exited with code=0 in 0.485 seconds