//22/04/2021: 37.Usando Let em Loop #02

//Em continuação a aula passada, vamos usar o mesma sintaxe de código substituindo var pelo let:
const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//2
//8
//
//[Done] exited with code=0 in 0.834 seconds

//Incrementando de 0 até 9 de um em um(0,1,2,3,4,5,6,7,8,9)cada repetição ele vai incrementando o "i" até que o "i" fique igual a 10 e saia do laço, conf.aula passada.
//Nas linhas 16 e 17 retornaram 2 3 8 de fato, e não 10 como na aula passada qdo.estava-se usando o var, o motivo dessa impressão se dá pelo fato pelo CONCEITO DE CLOSURES.
//Closure é quando uma função é capaz de "lembrar" e acessar seu escopo léxico mesmo quando ela está sendo executada fora de seu escopo léxico. O que é Léxico:
//Léxico significa dicionário, é o conjunto dos vocábulos de uma língua, dispostos em ordem alfabética e com as respectivas significações.
//Léxico é a reunião dos termos próprios de uma arte, de uma ciência, de expressões regionais, de línguas clássicas antigas etc.
//Léxico é um dicionário que pode também reunir termos de um idioma, com suas respectivas versões em outra língua.
//Na palavra (léxico) a letra (x) é pronunciada com o som de (cs). Léxico é um substantivo masculino, de origem do grego (lexikon).
//As palavras que fazem parte do léxico estão sujeitas a constantes alterações, em função do desenvolvimento da língua falada e escrita. Um neologismo, ou seja, a criação de palavras
//novas, ou de palavras antigas com acepções novas, são com frequência, acrescidas ao seu conteúdo.
//Faz parte da língua viva a criação de novas palavras, sejam elas criadas por neologismo popular,estrangeirismos,termos que surgem nas comunicações eletrônicas,novos termos técnicos
//ou neologismos científicos.
//Léxico é o conjunto de palavras existente em um determinado idioma (língua), que as pessoas têm à disposição para expressar-se, oralmente ou por escrito em seu contexto.

//Closure ("clausura" em português, mas esse termo é raramente utilizado), se refere à forma como funções definidas dentro de um "contexto léxico" (i.e. o corpo de uma função, 
//um bloco, um arquivo fonte) acessam variáveis definidas nesse contexto.
//Em JavaScript, apenas funções definem um novo contexto léxico (outras linguagens têm regras diferentes - algumas sequer suportam o conceito de closure):
//
//var a = 10; // Mesmo "a" para script1.js, script2.js, etc (efetivamente, uma global)
//function f() {
//    var b = 20; // Um "b" diferente para cada invocação de f
//    if ( x ) {
//        var c = 30; // Mesmo "c" dentro e fora do if (i.e. o contexto é "f", não o bloco if)
//E cada novo contexto criado dentro (inner) de um contexto já existente tem acesso a todas as variáveis definidas no "de fora" (outer):
//
//function x(a1) {          // "x" tem acesso a "a"
//    var a2;
//    function y(b1) {      // "y" tem acesso a "a" e "b"
//        var b2;
//        function z(c1) {  // "z" tem acesso a "a", "b", e "c"
//            var c2;
//É importante observar que não importa quando a função interna irá executar, nem qual o valor as variáveis externas tinham no momento em que o objeto função foi criado (em contraste 
//com a definição da função, que é em tempo de compilação/interpretação). O que importa é que ambas compartilham a mesma variável, e escritas de um lado refletirão nas leituras do 
//outro e vice-versa.
//
//Pitfalls(Armadilhas)
//Um exemplo de erro comum envolvendo closures é a criação de uma função dentro de um bloco for:
//
//for ( var i = 0 ; i < elementos.length ; i++ ) {
//    elementos[i].onclick = function() {
//        alert("Esse é o elemento " + i);
//    }
//}
//Esse código não funciona como esperado, uma vez que a variável i utilizada pela função anônima é o mesmo i do contexto externo - o que significa que quando o i externo muda, o valor
//que a função interna vai acessar é diferente. No final, i será igual a elementos.length (ex.: 10), de modo que clicar em qualquer elemento sempre imprimirá "Esse é o elemento 10".
//
//Uma possível solução para esse problema é a criação de um novo contexto léxico que "capture" o valor daquela variável no momento desejado:
//
//for ( var i = 0 ; i < elementos.length ; i++ )
//    (function(i) {
//        elementos[i].onclick = function() {
//            alert("Esse é o elemento " + i);
//        }
//    })(i);
//Dessa forma, o i parâmetro da função não é o mesmo i usado pelo laço for - e ele possui o valor que a variável tinha no momento da execução.

//Conforme pesquisa acima esse código não funciona como esperado, uma vez que a variável i utilizada pela função anônima(devido a mesma estar vazia) é o mesmo i do contexto externo -
//o que significa que quando o i externo muda, o valor que a função interna vai acessar é diferente. No final, i será igual a elementos da sequência de índices(ex.: 10), de modo que
//qdo.chamarmos por funcs2, funcs8, funcs6, etc...em qualquer elemento sempre imprimirá "Esse elemento 10" porque ele busca o valor externo que é 10 voltando para dentro do loop vazio
//por isso que ele volta sempre 1 índice, qdo. chama-se a funcs2 vai voltar 2 e não 1: sequência(0,1,2,3,4,5,6,7,8,9)onde dentro desse parêntesis temos 10 índices, batendo e voltando
//para o mesmo ponto, ou seja, para o mesmo índice.

//Então pelo fato de ter let a variável i = 0 tendo o escopo de bloco e no momento que a função(funcs.push(function())foi definida, o sistema vai ter essa memória de qual era o valor
//de "i" naquele momento, então, portanto, para cada repetição o "i" tem escopo de bloco tendo o seu espaço, por isso a funcão 2(funcs2) aponta para o "i" igual a 2 e a função 8 
//(funcs8) aponta para o "i" igual a 8, o mesmo pondendo ocorrer se usarmos 6, 5, 4, 3, etc...dentro do loop(sequencial), sendo diferente da aula passada qdo.estávamos usando o var
//que o resultado imprimia 10 em todos os retornos das funções(funcs); uma função de JavaScript é um CLOSURE, que uma função tem consciência do local em que ela foi definida.