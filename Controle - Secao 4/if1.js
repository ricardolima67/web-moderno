//04/05/2021: 56. Usando a Estrutura IF # 01.
//
//A aula anterior(55-Visão Geral do Capítulo)refere-se a uma apresentação da Seção 4: JavaScript: Estruturas de Controle; dentro dessa seção 4 será abordado a estrutura de controle
//IF onde vamos começar a desenvolver o nosso primeiro exemplo:
//Vamos criar uma função chamada(soBoaNoticia)onde vamos passar uma nota e essa função{} só irá imprimir no console se a nota for maior ou igual a sete, então vamos começar a dar 
//uma olhada na autonomia de um bloco IF(SE), se a nota for maior ou igual a sete, o bloco {} associado ao if será executado, se essa expressão(nota >= 7)for falsa, significa que o 
//bloco associado ao IF não será chamado, simples assim, o bloco {linha 15 a linha 16} é uma condicional, qdo.temos um bloco de código como é a função boa notícia p/ex. e dentro a 
//gente coloca uma sentença de código, então normalmente o que acontece?;R.:Em dez sentenças, o sistema executa a primeira, depois executa a segunda, a terceira, a quarta, e assim
//sucessivamente, uma atrás da outra, qdo.começamos a trabalhar com estruturas de controle, a gente tem a capacidade de selecionar uma determinada setença de código p/ser executada
//se uma condição for satisfeita, se uma condição for verdadeira.
//Se a nota for maior ou igual a sete, então sempre dentro dos parêntesis(nota >= 7)tem uma expressão que retorna verdadeiro ou falso, lembrando que JavaScript muitas coisas podem 
//se tornar verdadeiro ou falso(temos que ter esse cuidado/essa ressalva), então o bloco na linha15/16=>console.log('Aprovado com '+ nota)e concatenamos com o vr.da nota; então se 
//tiver maior ou igual a sete o sistema executa ou se não tiver, ele simplesmente não fará nada, então passando conf.linhas 20 e 21, executando retorna conf.linha23: 
function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com '+ nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\if1.js"
//Aprovado com 8.1
//
//[Done] exited with code=0 in 0.814 second
//Ele mostrou o resultado com 8.1, mas não mostrou o resultado com 6.1, reforçando o que foi explicado nas linhas 11 a 13.
//
//Então vamos criar outra função chamada se for verdade eu falo e vamos passar um determinado valor genérico, se o valor for verdadeiro ele vai imprimir console.log('É verdade... ' 
//+ valor)concatenando com o valor que foi passado(prestar atenção que nesse caso temos uma única variável(valor) no teste do IF, não tem uma expressão relacional conf.visto no 1º
//caso, então vamos nos valer do fato que nesse contexto(valor)mesmo que a gente passe um valor inteiro, uma string, uma array, um objeto; o JavaScript entende que dentro do valor
//(que tá dentro do parêntesis(valor)tem que haver um valor verdadeiro ou falso; então automaticamente, o sistema vai pegar aquele objeto{}=>vai converter p/verdadeiro ou falso e
//aí ele só vai imprimir no console se de fato o valor(valor)for convertido p/true.).
//Em seguida vamos fazer vários testes conf.linhas 46 a 57, se for verdade, não vamos passar nada(parêntesis em branco()), vai retornar undefined, por isso ele não vai imprimir,
//deixando lacuna na resposta/retorno em branco(falso), a seguir vamos colocar null, tbm.vai retornar em branco(falso), depois vamos colocar undefined, tbm.vai retornar em branco
//(falso), depois vamos colocar o not a number, tbm.vai retornar em branco(falso), depois vamos colocar uma string vazia, tbm.vai retornar em branco(falso), depois vamos colocar um
//0(zero),tbm.vai retornar em branco(falso), o único número que vai ser falso, depois vamos colocar menos um, vai retornar como verdadeiro(É verdade... -1), depois vamos colocar uma
//string que está preenchida, ela não é vazia tendo um espaço em branco dentro dela, então ela é verdadeira(É verdade...), vamos passar outra string com interrogação, vai retornar
//como verdadeira(É verdade... ?), vamos passar um array vazio, tbm.é verdade(É verdade...), vamos passar uma array com elementos, retorna como verdadeira(É verdade... 1,2), e vamos 
//passar um objeto vazio, retorna como verdadeiro(É verdade... [object Object]).
function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//É verdade... -1
//É verdade...  
//É verdade... ?
//É verdade... 
//É verdade... 1,2
//É verdade... [object Object]
//
//[Done] exited with code=0 in 0.593 seconds
//Então nessa aula fizémos vários testes revisando o que foi visto na aula de boolean, onde percebemos que podemos passar algo que não é boolean num contexto de um bloco IF(valor)
//que ele vai resolver/converter isso para gente, se for verdadeiro(ele entra e quer saber se uma determinada string está vazia ou não, podemos colocar IF mais a string, se estiver
//vazia não vai entrar, se estiver preenchida ele entra e executa o bloco associado ao IF), então nessa aula vimos dois exemplos: um exemplo passando diretamente o valor(valor) e o
//outro exemplo usando uma expressão relacional(nota >= 7) comparando a nota com determinado número e sempre nesse exemplo que fizémos aqui, usamos apenas o IF.