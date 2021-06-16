//22/04/2021: 32.Declaração de Variáveis com Var #02.

//Continuando o assunto da aula passada(pasta:usandovar1.js); vamos criar uma variável var número recebe um(var numero = 1), vamos definir um bloco de código vazio{} e dentro
//vamos declarar uma variável var recebendo dois (var número = 2), ou seja, com um var fora linha21 e com um var dentro linha23, e na linha24 vamos colocar uma console.log('dentro =',
//numero) só p/ dizer o que está dentro e o que está fora, pode-se passar um console.log com vários parâmetros onde vai imprimir tudo no console e vamos colocar um console
//fora tbm.conf.linha26 descrevendo fora igual a número.
//Com o que já vimos na aula anterior, o que vai acontecer qdo.executarmos?. A variável var tem dois escopos, ou seja, até onde a variável é visível. Podemos ter duas variáveis iguais
//dentro do programa?R.:Sim, pode, desde que seja escopos diferentes, p/ex.: criamos uma variável local no método 1 e outra no método 2 demonstrando ter escopos diferentes, uma não 
//interfere na outra, mas mesmo dentro do mesmo escopo nós temos variáveis de nomes diferentes p/não conflitar, por isso que o global é ruim, porque como é o mesmo escopo, uma sobre-
//escreve a outra podendo gerar muitos bugs, portanto em JavaScript fugir do escopo global principalmente qdo.estamos trabalhando no browser(talvez 80% hoje ainda trabalha c/browser);
//muita gente trabalha no backend; e esse mantra de fugir do escopo global é muito mais crítico qdo.estamos trabalhando c/JavaScript no frontend do lado do browser.
//Então voltando p/o nosso exemplo, o que vai acontecer é o que o var pode ser declarado duas vezes que não vai gerar nenhum problema, onde foi declarado na linha21 e na linha23 
//estando no mesmo escopo, pois não existe escopo de bloco p/uma variável do tipo var, só existe escopo de var dentro de função; função é um bloco, mas fora função, qualquer outro
//tipo de bloco é ignorado, acabando sendo do escopo maior, não ficando restrito a esse bloco-linhas22 a 25; então executando, temos: o número 2 sendo impresso duas vezes conf.abaixo:
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//dentro = 2
//fora= 2

//[Done] exited with code=0 in 2.159 seconds

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora=', numero)
//Então conf.a resposta acima do sistema(retorno/impressão): demonstra que tanto dentro vale 2(linha23) porque ele acabou de sobrescrever o valor de 1 da linha21 e como fora ele
//vale 2 ref.a linha26. Esse comportamento não vai ocorrer com a variável LET.