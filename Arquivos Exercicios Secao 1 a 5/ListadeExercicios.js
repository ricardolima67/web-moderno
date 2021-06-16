//25/05/2021: 91. Lista de Exercícios: Fundamentos, Estruturas de Controle e Funções.

//                Lista de exercícios: Fundamentos, Estruturas de controle e Funções.
//Lista de exercícios no anexo
//
//Recursos para esta aula
//lista_exercicios_resposta_2.zip
//Exercicios__Javascript.pdf
//Curso Web Moderno - Exercícios Javascript
//______________________________________________________________________________________________________________________________________________________
//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.
//                    Respostas:
//Exercício 1:
//
const [a, b] = [10, 6]
const soma = (a, b) => a + b
const subtracao = (a, b ) => a - b
const multiplicacao = (a, b) => a * b
const divisao = ( a, b) => a / b

console.log(soma(a, b), subtracao(a, b), multiplicacao(a, b), divisao(a, b))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//16 4 60 1.6666666666666667
//
//[Done] exited with code=0 in 0.407 seconds
//  Correção do Professor Exercício 1:
function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3 -1 2 0.5
//
//[Done] exited with code=0 in 0.427 seconds
//___________________________________________________________________________________________________________________________________________________________

//02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
//triângulo).
function classificarTriangulo (Lado1, Lado2, Lado3) {
    if(Lado1 == Lado2 && Lado2 == Lado3 ) {
        return 'Equilátero' 
    }else if(Lado1 == Lado2 || Lado2 == Lado3 || Lado3 == Lado1 ) {
        return 'Isósceles'
    }else {
        return 'Escaleno'
    }
}

console.log(classificarTriangulo(2, 2, 2))
console.log(classificarTriangulo(2, 3, 4))
console.log(classificarTriangulo(2, 2, 3))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Equilátero
//Escaleno
//Isósceles
//
//[Done] exited with code=0 in 0.489 seconds
//______________________________________________________________________________________________________________________________________________________________

//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
function potenciacao (base, expoente) {
    let resultado = base ** expoente
    return resultado
}

console.log(potenciacao( 5, 3))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//125
//
//[Done] exited with code=0 in 0.406 seconds
//______________________________________________________________________________________________________________________________________________________________

//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.
function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(10, 2)
divisao(10, 3)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Resultado: 5
//Resto: 0
//
//[Done] exited with code=0 in 0.441 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Resultado: 5
//Resto: 0
//Resultado: 3
//Resto: 1
//
//[Done] exited with code=0 in 0.416 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
//seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
//importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
//um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
//que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
function formatarValorDecimal(valorDecimal) {
    valorDuasCasasDec = valorDecimal.toFixed(2) //number com duas casas (0.30000000000000004 para 0.30)

    valorNumberParaString = valorDuasCasasDec.toString() //transformando number em string (texto) (0.30 para "0.30")

    valorStringEmMoedaReal = valorNumberParaString.replace(".", ",") //substitui "0.30" para "0,30"

    valorNovo = `R$ ${valorStringEmMoedaReal}` //template string
    console.log(valorNovo)
}
formatarValorDecimal(0.1 + 0.2)
//------------------------------------------------------------------------------------------------------------------------
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//R$ 0,30
//
//[Done] exited with code=0 in 0.456 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
//primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
//retornará o valor da aplicação sob o regime de juros compostos.
function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

console.log(jurosSimples(100, 10/100, 2));
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//120
//
//[Done] exited with code=0 in 0.398 seconds
//========================================================================================================================
function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosCompostos(100, 10/100, 2));
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//121.00000000000001
//
//[Done] exited with code=0 in 0.438 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
//elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
//parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
//-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
//que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
//“Delta é negativo”.
function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é Negativo"
    }
    let x1 = (-bx + Math.sqrt(delta))/2*ax2
    let x2 = (-bx - Math.sqrt(delta))/2*ax2
    resultados.push(x1)
    resultados.push(x2)
    return resultados
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//[ -1, -2 ]
//Delta é Negativo
//
//[Done] exited with code=0 in 0.651 seconds
//========================================================================================================================
//                              Math.sqrt()
//Resumo
//A função Math.sqrt() retorna a raiz quadrada de um número (\sqrt{x}) .
//
//Sintaxe
//Math.sqrt(x) 
//Parâmetros
//x
//Um número.
//Valor retornado
//A raiz quadrada do número recebido. Se o número for negativo, a função retornará NaN.
//
//Descrição
//Se o valor de x for negativo, Math.sqrt() retorna NaN.
//
//Por sqrt ser um método estático de Math, deve-se sempre usá-lo como Math.sqrt(), e não como um método de um objeto Math que você criou.
//
//Exemplos
//Exemplo: Usando Math.sqrt
//Math.sqrt(9); // 3
//Math.sqrt(2); // 1.414213562373095
//
//Math.sqrt(1);  // 1
//Math.sqrt(0);  // 0
//Math.sqrt(-1); // NaN
//___________________________________________________________________________________________________________________________________________________________________________

//08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
//registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
//mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
//pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
//vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
//jogo. (Número do pior jogo).
//Obs.: O primeiro jogo não conta como novo recorde do melhor.
//Exemplo:
//String: “10 20 20 8 25 3 0 30 1”
//Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
//aconteceu no sétimo jogo.)
let stringPontuacoes = "10,20,20,8,25,3,0,30,1"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(",")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//[ 2, 7 ]
//
//[Done] exited with code=0 in 0.446 seconds
//========================================================================================================================
//                                      String.prototype.split()
//O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão,
//onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
//
//Sintaxe
//str.split([separator[, limit]])
//Parâmetros
//O caso mais simples é quando o separador é apenas um único caractere que será usado para dividir a string. Por exemplo, uma string contendo valores separados por tabulação
//(TSV) poderia ser analisada passando um caractere de tabulação como separador, como este: myString.split ("\ t").
//Se o separator contiver vários caracteres, toda a sequência de caracteres deve ser encontrada para ser dividida.
//Se o separator for omitido ou não aparecer dentro da str, o array retornará um elemento consistindo em toda a string.
//Se o separator aparecer no início (ou no final) da string, ele ainda terá o efeito de divisão. O resultado é uma string vazia (ou seja, str.length == 0), que aparece na 
//primeira (ou última) posição do array retornado.
//Se o separator for uma string vazia (""), str será convertido em um array contendo cada um de seus caracteres em UTF-16.
//separator
//Opcional. Especifica o caractere, ou conjunto de caracteres, a ser usado para separar a string. O separador pode ser uma string ou uma expressão regular.
//Aviso: Quando uma string vazia ("") é usada como separador, a string não é dividida por caracteres percebidos pelo usuário (grapheme clusters) ou caracteres Unicode
//(pontos de código), mas por unidades de código UTF-16. Isso destrói pares substitutos. Consulte “Como você transforma uma string em um array de caracteres em JavaScript?”
//no StackOverflow.
//
//limite
//Opcional. Um número inteiro não negativo especificando um limite no número de divisões a serem encontradas. O método split() ainda dividirá em cada ocorrência do separador,
//até que o número de itens divididos corresponda ao limite ou que a string fique aquém do separador.
//
//O array pode conter menos entradas do que o limit se o final da string for alcançado antes que o limite seja atingido.
//Se o limit for 0, [] será retornado.
//Valor retornado
//Um array de strings divididos em cada ponto onde o separador ocorre na string informada.
//
//Descrição
//Quando encontrado, o caractere designado como o separator é removido da string e as substrings são retornadas em um array. Se o separator não for encontrado ou for omitido,
//o array irá conter um elemento consistindo da string inteira. Se o separator for uma string vazia, str será convertida em um array de caracteres.
//
//Se o separador for uma expressão regular que contenha parênteses de captura, cada vez que o separator for encontrado, os resultados (incluindo qualquer resultado undefined)
//dos parênteses de captura serão emendados ao array de saída. Entretanto, nem todos os navegadores possuem suporte a isso.
//
//Exemplos
//Usando split()
//Quando a string está vazia, o split() irá retornar um array contendo uma string vazia ao invés de um array vazio. Se a string e o separador forem ambos strings vazias, um array
//vazio será retornado.
//
//const myString = ''
//const splits = myString.split()
//
//console.log(splits);
//
//// retorna [""]
//O exemplo a seguir define uma função que divide uma string em um array de strings usando o separador especificado. Depois de dividir a string, a função exibe mensagens indicando
//a string original (antes da divisão), o separador usado, o número de elementos no array e os elementos individuais do array.
//
//function splitString(stringToSplit, separator) {
//  var arrayOfStrings = stringToSplit.split(separator);
//
//  console.log('A string original é: "' + stringToSplit + '"');
//  console.log('O separador é: "' + separator + '"');
//  console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
//}
//
//var tempestString = 'Oh brave new world that has such people in it.';
//var monthString = 'Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez';
//
//var space = ' ';
//var comma = ',';
//
//splitString(tempestString, space);
//splitString(tempestString);
//splitString(monthString, comma);
//Esse exemplo produz a saída a seguir:
//
//A string original é: "Oh brave new world that has such people in it."
//O separador é: " "
//O array possui 10 elementos: Oh / brave / new / world / that / has / such / people / in / it.
//
//A string original é: "Oh brave new world that has such people in it."
//O separador é: "undefined"
//O array possui 1 elementos: Oh brave new world that has such people in it.
//
//A string original é: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
//O separador é: ","
//O array possui 12 elementos: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec
//Removendo espaços de uma string
//No exemplo a seguir, split() procura por 0 ou mais espaços seguidos por um ponto e vírgula seguido por 0 ou mais espaços e, quando encontrar, remove os espaços e os pontos
//e vírgulas da string.  nameList é o array retornado como resultado do split().
//
//var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';
//
//console.log(names);
//
//var re = /\s*;\s*/;
//var nameList = names.split(re);
//
//console.log(nameList);
//O retorno do código acima são duas linhas. A primeira linha registra a string original e a segunda linha registra o array resultante.
//
//Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
//[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand " ]
//Retornando um número limitado de divisões
//No exemplo a seguir, o split() procura por 0 ou mais espaços em uma string e retorna as 3 primeiras divisões que encontrar.
//
//var myString = 'Hello World. How are you doing?';
//var splits = myString.split(' ', 3);
//
//console.log(splits);
//O script exibirá o texto a seguir:
//
//["Hello", "World.", "How"]
//Parênteses de Captura
//Se o separator contém parênteses de captura, os resultados correspondentes são retornados no array.
//
//var myString = 'Hello 1 word. Sentence number 2.';
//var splits = myString.split(/(\d)/);
//
//console.log(splits);
//O script exibirá o texto a seguir:
//
//[ "Hello ", "1", " word. Sentence number ", "2", "." ]
//Nota: \d corresponde à classe de caracteres para dígitos entre 0 e 9.
//
//Revertendo uma String usando split()
//Esta não é a mlehor maneira de reverter uma string:
//
//const str = 'asdfghjkl'
//const strReverse = str.split('').reverse().join('')
//// 'lkjhgfdsa'
//
//// split() retorna um array onde os métodos
//// reverse() e join() podem ser aplicados
//Não funciona se a string contém grapheme clusters, mesmo ao usar uma divisão compatível com Unicode. (Use, por exemplo, esrever no lugar.)
//
//const str = 'résumé'
//const strReverse = str.split(/(?:)/u).reverse().join('')
//// retorna "́emuśer"
//Bonus: use o operador === (en-US) para testar se a string original era um palíndromo.

//___________________________________________________________________________________________________________________________________________________________________________

//09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
//classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
//possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
//que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
//arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
//85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
//seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
//e o aluno será aprovado.
function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    }else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    }else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Aprovado com nota 100
//Reprovado com nota 30
//Aprovado com nota 40
//Aprovado com nota 90
//Aprovado com nota 61
//
//[Done] exited with code=0 in 1.861 seconds   
//___________________________________________________________________________________________________________________________________________________________________________

//10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
//ou false.
function numeroInteiro (x, y) {
    return (x / y)
}

console.log(numeroInteiro( 15, 3))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//5    Resolução p/aluno.
//
//[Done] exited with code=0 in 0.414 seconds
function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//true
//false
//true
//
//[Done] exited with code=0 in 0.447 seconds
//
//Operadores aritméticos
//São os operadores que utilizamos para fazer as operações aritiméticas básicas:
// % =>Trata-se de Operação Modular
//%	Restante (Remainder - as vezes chamado de Módulo)	
//Retorna o resto da divisão em números inteiros do número da esquerda pelo número da direita, p/ex.:
//8 % 3 (retorna 2; como três cabe duas vezes em 8, deixando 2 como resto.)
//60 % 3(retorna 20; pois o 3 cabe vinte vezes em 60, sem resto.)
//___________________________________________________________________________________________________________________________________________________________________________

//11) As regras para o cálculo dos anos bissextos são as seguintes:
//De 4 em 4 anos é ano bissexto;
//De 100 em 100 anos não é ano bissexto;
//De 400 em 400 anos é ano bissexto;
//Prevalecem as últimas regras sobre as primeiras.
//Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
//mensagem e retornando true ou false.
function calcularAnoBissexto (ano) {
    if (ano <= 0){
        return false
    }else if ( ano % 400 == 0) {
        return true
    }else if ( ano % 100 == 0) {
        return false
    }else if ( ano % 4 == 0) {
        return true
    }else {
        return false
    }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(800))
console.log(calcularAnoBissexto(2020))
console.log(calcularAnoBissexto(2021))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//false
//true
//false
//true
//true
//true
//false
//
//[Done] exited with code=0 in 1.281 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//12) Faça um algoritmo que calcule o fatorial de um número.
function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//3628800
//
//[Done] exited with code=0 in 0.48 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
//dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Fim de semana
//Dia útil
//Dia útil
//Dia útil
//Dia útil
//Dia útil
//Fim de semana
//Dia inválido
//
//[Done] exited with code=0 in 0.526 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
//casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
//escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
//também um default, que retornará uma mensagem de erro no console.
function classificaFruta (fruta) {
    switch (fruta) {
        case 1: 'Maçã' 
           return "Não vendemos esta fruta aqui"
        case 2: 'Kiwi'
            return "Estamos com escassez de kiwis"
        case 3: 'Melancia'
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Somente os 3 Produtos"
        }
}

console.log(classificaFruta(1));
console.log(classificaFruta(2));
console.log(classificaFruta(3));
console.log(classificaFruta('a'));
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Não vendemos esta fruta aqui    //Solucionado p/aluno.
//Estamos com escassez de kiwis
//Aqui está, são 3 reais o quilo
//Somente os 3 Produtos
//
//[Done] exited with code=0 in 0.692 seconds
function venderFruta (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Não vendemos esta fruta aqui.
//Estamos com escassez de kiwi.
//Aqui está, custa R$ 3,00 o quilo.
//Erro, fruta inválida.
//
//[Done] exited with code=0 in 0.477 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
//possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
//comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
//que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
//“Não trabalhamos com este tipo de automóvel aqui”.
function comprarCarro (carro) {
    switch (carro) {
        case 'hatch':
            console.log("Compra efetuada com sucesso.")
            break
        case 'outras opções':
            console.log("Tem certeza que não prefere este modelo?")
            break
        case 'modelo não disponível':
            console.log("Não trabalhamos com este tipo de automóvel aqui.")
            break
        default:
            console.log("agradeçemos a preferência.")
    }
}

comprarCarro('hatch')
comprarCarro('outras opções')
comprarCarro('modelo não disponível')
comprarCarro('agradeçemos a preferência')
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Compra efetuada com sucesso.                          solucionado p/aluno.
//Tem certeza que não prefere este modelo?
//Não trabalhamos com este tipo de automóvel aqui.
//agradeçemos a preferência.
//
//[Done] exited with code=0 in 0.442 seconds
function escolherCarro (modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

console.log(escolherCarro('hatch'));
console.log(escolherCarro('motocicleta'));
console.log(escolherCarro('sedan'));
console.log(escolherCarro('caminhonete'));
console.log(escolherCarro('jetski'));
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Compra efetuada com sucesso.
//Tem certeza que não prefere este modelo?
//Tem certeza que não prefere este modelo?
//Tem certeza que não prefere este modelo?
//Não trabalhamos com este tipo de automóvel aqui.
//
//[Done] exited with code=0 in 0.456 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
//como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
//numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
//3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//5
//-1
//6
//0.6666666666666666
//Operação inválida
//
//[Done] exited with code=0 in 0.453 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//17) Um funcionário irá receber um aumento de acordo com o seu plano de
//trabalho, de acordo com a tabela abaixo:
//Plano Aumento
//A 10%
//B 15%
//C 20%
//Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
//novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
function planoAumento (salario) {
    switch (salario) {
        case A:
            return salario * 0.10
        case B:
            return salario * 0.15
        case C: 
            return salario * 0.20
        default:
            return 'Plano Inválido'
    }
}

console.log(salario(6000.00 * 0.10));
console.log(salario(6000.00 * 0.15));
console.log(salario(6000.00 * 0.20));
console.log(salario('Plano Inválido'));
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js:3
//        case A:                                       Solucionado p/Aluno, retornou erro nos dois casos: console.log(planoAumento)
//             ^                                        ou console.log(salario).
//
//ReferenceError: A is not defined
//    at planoAumento (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js:3:14)
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js:14:13)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.529 seconds
//
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js:14
//console.log(salario(6000.00 * 0.10));
//        ^
//
//ReferenceError: salario is not defined
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js:14:9)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.486 seconds
function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//1100
//1150
//1200
//Plano inválido.
//
//[Done] exited with code=0 in 0.416 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
//switch. Crie um case default que escreva ‘Número fora do intervalo.’
function calcularNumero (numero) {
    switch (numero) {
        case 0:
            return 'Zero'
            break
        case 1:
            return 'Um'
            break
        case 2:
            return 'Dois'
            break
        case 3:
            return 'Três'
            break
        case 4:
            return 'Quatro'
            break
        case 5:
            return 'Cinco'
            break
        case 6:
            return 'Seis'
            break
        case 7:
            return 'Sete'
            break
        case 8:
            return 'Oito'
            break
        case 9:
            return "Nove"
            break
        case 10:
            return 'Dez'
            break
        default:
            return 'Fora do Intervalo'
    }
}

console.log(calcularNumero(0));
console.log(calcularNumero(1));
console.log(calcularNumero(2));
console.log(calcularNumero(3));
console.log(calcularNumero(4));
console.log(calcularNumero(5));
console.log(calcularNumero(6));
console.log(calcularNumero(7));
console.log(calcularNumero(8));
console.log(calcularNumero(9));
console.log(calcularNumero(10));
console.log(calcularNumero(11));
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Zero                                                  Solucionado p/aluno.
//Um
//Dois
//Três
//Quatro
//Cinco
//Seis
//Sete
//Oito
//Nove
//Dez
//Fora do Intervalo
//
//[Done] exited with code=0 in 0.463 seconds
function numeroPorExtenso(numero) {
    switch (numero) {
        case 0:
            console.log('Zero')
            break
        case 1:
            console.log('Um')
            break
        case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Três')
            break
        case 4:
            console.log('Quatro')
            break
        case 5:
            console.log('Cinco')
            break
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9:
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default:
            console.log('Numero fora do intervalo.')
    }
}

numeroPorExtenso(0)
numeroPorExtenso(1)
numeroPorExtenso(2)
numeroPorExtenso(3)
numeroPorExtenso(4)
numeroPorExtenso(5)
numeroPorExtenso(6)
numeroPorExtenso(7)
numeroPorExtenso(8)
numeroPorExtenso(9)
numeroPorExtenso(10)
numeroPorExtenso(11)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Zero
//Um
//Dois
//Três
//Quatro
//Cinco
//Seis
//Sete
//Oito
//Nove
//Dez
//Numero fora do intervalo.
//
//[Done] exited with code=0 in 0.456 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//19) O cardápio de uma lanchonete é o seguinte:
//Código Descrição do Produto Preço
//100 Cachorro Quente R$ 3,00
//200 Hambúrguer Simples R$ 4,00
//300 Cheeseburguer R$ 5,50
//400 Bauru R$ 7,50
//500 Refrigerante R$ 3,50
//600 Suco R$ 2,80
//Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
//a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
//comando switch. Crie um caso default para produto não existente.
function produtoPreco (codigo, quantidade, valor) {
    switch (codigo, quantidade, valor) {
        case 100: 
            return 'Cachorro Quente R$ 3,00'
        case 200:
            return 'Hambúrguer Simples R$ 4,00'
        case 300:
            return 'Cheeseburguer R$ 5,50'
        case 400:
            return 'Bauru R$ 7,50'
        case 500:
            return 'Refrigerante R$ 3,50'
        case 600:
            return 'Suco R$ 2,80'
        default:
            return 'Produto Não Existente'
    }
}

console.log(produtoPreco(100));
console.log(produtoPreco(200));
console.log(produtoPreco(300));
console.log(produtoPreco(400));
console.log(produtoPreco(500));
console.log(produtoPreco(600));
console.log(produtoPreco('marmita'));
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Produto Não Existente                            Solucionado p/aluno, acho que tinha que colocar ${}expressão nos cases.
//Produto Não Existente                            Na verdade, fazer os cases com organização: return qtd * preço. 
//Produto Não Existente
//Produto Não Existente
//Produto Não Existente
//Produto Não Existente
//Produto Não Existente
//
//[Done] exited with code=0 in 0.449 seconds
function calcularVenda(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8
        default:
            return 'Produto não existente.'
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//6
//8
//11
//15
//7
//5.6
//Produto não existente.
//
//[Done] exited with code=0 in 0.557 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
//para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
//Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
//informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
//nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100      // -= siginifica operador de atribuição por subtração.(1115)
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153));
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//1 nota(s) de R$ 100. 1 nota(s) de R$ 50. 3 nota(s) de R$ 1. 
//
//[Done] exited with code=0 in 0.433 seconds
//========================================================================================================================
//                                                  Operadores de atribuição
//Um operador de atribuição atribui um valor ao operando à sua esquerda baseado no valor do operando à direita. O operador de atribuição básico é o igual (=),
//que atribui o valor do operando à direita ao operando à esquerda. Isto é, x = y atribui o valor de y a x.
//
//Os outros operadores de atribuição são encurtamentos de operadores padrão, como mostrado na tabela a seguir.
//
//Operadores de atribuição composto
//Nome	Operador encurtado	Significado
//Atribuição	x = y	x = y
//Atribuição de adição	x += y	x = x + y
//Atribuição de subtração	x -= y	x = x - y
//Atribuição de multiplicação	x *= y	x = x * y
//Atribuição de divisão	x /= y	x = x / y
//Atribuição de resto	x %= y	x = x % y
//Atribuição exponencial	x **= y	x = x ** y
//Atribuição bit-a-bit por deslocamento á esquerda	x <<= y	x = x << y
//Atribuição bit-a-bit por deslocamento á direita	x >>= y	x = x >> y
//Atribuiçãode bit-a-bit deslocamento á direita não assinado	x >>>= y	x = x >>> y
//Atribuição AND bit-a-bit	x &= y	x = x & y
//Atribuição XOR bit-a-bit	x ^= y	x = x ^ y
//Atribuição OR bit-a-bit	x |= y	x = x | y
//___________________________________________________________________________________________________________________________________________________________________________

//21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
//considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
//de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
//idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//180
//150
//195
//195
//230
//
//[Done] exited with code=0 in 0.516 seconds
//___________________________________________________________________________________________________________________________________________________________________________

//22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
//parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
//anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
//compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.


//23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
//aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
//aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
//"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.


//24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

//25) Escrever um programa para exibir os números de 1 até 50 na tela.

//26) Fazer um programa para encontrar todos os pares entre 1 e 100.
//27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
//crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
//quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
//28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
//29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
//deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
//deles estão fora do intervalo, escrevendo estas informações.
//30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
//31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
//e imprime a quantidade no console.
//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
//33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
//quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
//Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
//mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
//34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
//todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
//35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
//inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
//e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
//final das operações imprima os vetores no console.
//36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
//inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
//elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
//o valor do elemento for maior que 5.
//37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
//como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
//bem como a soma dos elementos.
//38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
//ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
//para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
//39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
//primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
//Faça a troca sem utilizar uma variável auxiliar.
//40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
//modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
//conceito B e de 9,0 a 10,0 o conceito A.