//06/05/2021: 60. Usando a Estrutura Switch.
//
const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log("Reprovado")
    } else {
        console.log('Nota inválida')
    }
}
//Continunado no capítulo de estruturas de controle, nesta aula vamos falar sobre a estrutura de controle SWITCH, na aula passada(aula 59(pasta ifelseif.js))nós vimos que o IF pode 
//ser usando p/uma seleção múltipla da qual foi mostrado vários intervalos a partir do IF, do ELSE IF e vamos encadeando quantos ELSE IF a gente quer, lembrando que o na linha 4 se-
//rá um IF e lembrando tbm.que o último ELSE é opcional linha 12 e 13 e podemos ter quantos ELSE e IF nós quisérmos, ou seja temos um caso contrário(else)associado com uma condição
//p/entrar no bloco exemplo acima da aula passada(59).
//Essa não é a estrutura oficial p/termos múltiplas seleções, o Switch é exatamente essa estrutura que temos múltiplas seleções, existem certas restrições em JavaScript p/o Switch,
//outras linguagens possuem switchs mais poderosos, p/ex.: o Switch da Apple que é bem mais incorpado. Essa aula é p/entendermos as seleções múltiplas, ou seja, a gente selecionar 
//uma determinda sentença de código em detrimento de outra, o que foi feito até agora, onde fizémos o IF p/selecionar uma senteça de código, outros exemplos de IF colocando alguns
//cuidados, else e if(conf.linhas 6 e 7)que agente seleciona uma sentença de código se for verdadeiro, outra sentença(conf.linha 8 e 9), ou um grupo de sentenças, o bloco, se for 
//falso a expressão existindo a capacidade de encadear várias chamadas de else associado com ifs perfazendo blocos de códigos.
//Constante imprimir resultado recebe uma função chamada "nota", então criando a estrutura switch que vai receber um math.floor(o valor será arredondado p/baixo(chão))nota, e em cima
//da nota vamos colocar case:10, case:9 e em seguida vamos colocar um console.log('Quadro de Honra'); 
//Obs.: O fato é que podemos ter dois cases dessa forma(case:10 e case:9), p/ex.: case10, eu não quero fazer nada no case 10, então automaticamente se nota for 10, ele já vai olhar 
//no debaixo, então ele vai p/case 9 e executa essa sentença de código(console.log('Quadro de Honra')), em outras palavras, o que estamos dizendo neste código é se for 10 ou 9 ele
//executa essa linha de código(console.log('Quadro de Honra')).
//Existe um efeito no switch que não deveria ocorrer por padrão, tanto é que se estudarmos a linguagem GO que é uma linguagem do Google(linguagem relativamente recente: criada mais 
//ou menos no ano de 2009)então, o GO mudou o compartamento padrão do switch. O que acontece com o switch padrão: o comportamemto padrão de um switch onde passamos p/ex.: um valor 
//10, onde temos case 10, case 9, case 8, e assim por diante com cada um tendo o seu próprio código, uma vez que, ele entrou no case 10, o sistema executa o case 10, e sai execu-
//tando todos os outros cases abaixo, esse é um comportamento chamado de Fall Through(cair em), onde ele vai entrando na parte do primeiro e sai executando todos os que estão abai-
//xo(se pararmos p/pensar, esse não parece ser o comportamento mais adequado), qual comportamento entendemos ser mais adequado?R.:É a gente passar um valor e ele executa apenas 
//aquele case e depois sai, esse é o comportamento padrão, mas em JavaScript isso não acontece por padrão, p/que tenhamos esse comportamento e ele executar apenas um único case e 
//sair do case qdo.ele terminar de executar, nós vamos precisar colocar uma palavra reservada chamada BREAK, ou seja, ele só irá sair do Switch sem executar os debaixo se colocar-
//mos um Break, esse é o padrão da escrita do Switch, ou seja, temos que colocar o break em cada um dos cases, se não colocarmos o break devemos saber que terá o efeito de qdo.
//entrar no primeiro e todos os que estão abaixo serão executados. Já em GO essa lógica foi invertida, se quisérmos que ele entre um case e saia executando os debaixo, nós precisa-
//mos colocar uma palavrinha Fall Through(cair em)p/ele executar e se não colocarmos nada, por padrão ele entra naquele case e executa e já sai do switch. 
//
//Primeira coisa que vamos notar e que é muito importante no Switch, é que ele é feito p/múltiplas seleções, que é fazer mais ou menos o que foi feito no exemplo passado(aula59), só
//que em vez de usar o IF e Else, nós vamos usar o Switch, note que na expressão do switch diferentemente do que já vimos até então em todos os IFs feitos até agora, a expressão não
//retorna verdadeiro ou falso, a expressão é um valor e esse valor pode ser alguns tipos, o fato é que uma vez que colocamos nessa expressão switch (Math.floor(nota)) um valor inteiro 
//p/ex.:a gente recebe um valor inteiro e em seguida a gente coloca Case(caso o valor inteiro que eu recebei que p/parâmetro seja o valor 10, esse 10 vai entrar nesse case), o mesmo
//ocorrendo com o valor 9, e p/cada case podemos ter um conjunto de sentenças de código p/ser executada; p/ex.: poderíamos colocar case 10: console.log('Quadro de Honra'), case 9:
//console.log('Quadro de Honra')e assim sucessivamente, só que nesse caso a sintaxe ficaria com muitos cases repetidos; porém podemos ter múltiplas sentenças case 10: console.log
//('Quadro de Honra') no mesmo case 10: console.log('Quadro de Honra'), console.log('Quadro de Honra'), console.log('Quadro de Honra'), e assim por diante, entre um case e outro o 
//JavaScript vai saber se estamos dentro de um único case, podemos colocar várias sentenças sem que precisemos colocar chaves{}. Mas o fato é que se fizérmos dois cases que tem exata-
//mente a mesma sentença de código, nós não precisamos repetir a setença de código, podendo simplesmente fazer case 10:, case 9: console.log('Quadro de Honra')que significa em 
//outras palavras que ele vai entrar nessa linha de código console.log('Quadro de Honra'), tanto se o valor passado para switch (Math.floor(nota))for 10 ou for 9, lembrando que o 
//valor passado como entrada para um switch (Math.floor(nota))não é uma expressaõ que retorna verdadeiro ou falso.
///Constante imprimir resultado recebe uma função chamada "nota", então criando a estrutura switch que vai receber um math.floor(o valor será arredondado p/baixo(chão))nota, e em cima
//da nota vamos colocar case:10, case:9 e em seguida vamos colocar um console.log('Quadro de Honra'); conf.mencionado anteriormente vamos usar a palavra reservada Break p/interromper
//a sequência de case do switch e por fim colocar o case "default"(que seria o ELSE da aula 59)acrescido de console.log('Nota inválida'), e para testarmos esse código vamos colocar
//imprimirResultado(10), 8.9, e assim sucessivamente:  

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: 
        case 9:
            console.log('Quadro de Honra')
            break
            case 8: case 7: 
            console.log('Aprovado')
            break
            case 6: case 5: case 4:
                console.log('Recuperação')
                break
            case 3: case 2: case 1: case 0:
                console.log('Reprovado')  
                break
                default:
                    console.log('Nota inválida')        
    }            
}

imprimirResultado(10)
imprimirResultado(8.9)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Quadro de Honra
//
//[Done] exited with code=0 in 3.796 seconds
//
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Aprovado
//
//[Done] exited with code=0 in 0.51 seconds
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: 
        case 9:
            console.log('Quadro de Honra')
            break
            case 8: case 7: 
            console.log('Aprovado')
            break
            case 6: case 5: case 4:
                console.log('Recuperação')
                break
            case 3: case 2: case 1: case 0:
                console.log('Reprovado')  
                break
                default:
                    console.log('Nota inválida')        
    }            
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Quadro de Honra
//Aprovado
//Recuperação
//Reprovado
//Nota inválida
//Nota inválida
//
//[Done] exited with code=0 in 0.758 seconds
//
//Na linha 100 se colocármos case 3, 2, 1, 0: ele vai retornar como nota inválida, porque é uma sintaxe que o js não suporta, o mesmo ocorre com o uso de intervalos
//case 3-0: => incorre no mesmo retorno, a sintaxe não suporta.
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: 
        case 9:
            console.log('Quadro de Honra')
            break
            case 8: case 7: 
            console.log('Aprovado')
            break
            case 6: case 5: case 4:
                console.log('Recuperação')
                break
            case 3: case 2: case 1: case 0:
                console.log('Reprovado')  
                break
                default:
                    console.log('Nota inválida')        
    }
    console.log('Fim!')            
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
//Se colocármos console.log('Fim!')conf.linha 144 ele vai retornar com a utlização do break causando o efeito de pegar o primeiro e em seguida sair executando todos os outros
//switchs abaixo, onde o break faz aquele comportamento que julgamos ser o padrão que entra no case(linhas 128 e 129)executa o caso conf.linha 130 e sai, e assim sucessivamente,
//então qdo.executar a sintaxe de código vai retornar conf.abaixo, ou seja, ele traz Quadro de Honra, pula p/fora do Switch e executa Fim!, Aprovado: pula p/fora  do Switch e exe-
//cuta Fim!, então p/cada um dos casos ele vai p/a sentença de código logo após do Switch, não sai do método obviamente, esse break causa uma saída do bloco associado ao Switch. 
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Quadro de Honra
//Fim!
//Aprovado
//Fim!
//Recuperação
//Fim!
//Reprovado
//Fim!
//Nota inválida
//Fim!
//Nota inválida
//Fim!
//
//[Done] exited with code=0 in 0.534 seconds