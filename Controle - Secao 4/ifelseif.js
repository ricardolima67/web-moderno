//05/05/2021: 59. Usando a Estrutura IF/ELSE/ IF...
//
//Nesta aula vamos criar uma função associada ao número, p/ex.: temos o number dentro do JavaScritpt com funções associadas aos números, se podemos testar se o nº é inteiro p/ex.,
//então vamos criar uma função chamada ENTRE(BETWEEN)p/ele retornar verdadeiro se um nº estiver entre dois nºs; temos o IF apenas qdo.queremos fazer algo qdo.for verdadeiro e não 
//fazer absolutamente nada qdo.der falso, temos o IF com o ELSE qdo.queremos fazer uma coisa qdo.for verdadeiro querendo fazer uma outra coisa qdo.for falso a expressão e temos 
//tbm.como encadear vários IFs um atrás do outro qdo.temos múltiplas seleções p/ex.: se a nota for maior do que 9 e menor do que 10 coloque quadro de honra, se a nota for enre 8 e 
//6 coloque tal coisa, entre 6 e 4 faça aquilo, enfim..., temos várias opções diferentes onde podemos recorrer tbm.p/o IF, podemos tbm.usar o SWITCH, mas temos uma estrutura de IF
//encadeada. Como vamos estar comparando as notas entre nota 1 e X e nota Y, vamos criar uma função associada ao number.
//Vamos crirar um Number.prototype.entre = function (inicio, fim)=>aqui seria uma nota de início e uma nota de fim, em seguida vamos comparar se a nota atual ou se podemos acessar
//essa nota atual a partir da palavra reservada THIS(Eu sou um number, então se eu sou um number, eu vou acessar o meu valor atual a partir da variável THIS), então eu quero compa-
//rar se o THIS está entre o valor de início e o valor de fim e retornar um valor booleano; então vamos colocar return this >= inicio && this <= fim, então se o this estiver entre
//o início e o fim incluindo ambos vai retornar verdadeiro, se ele não estiver entre esses dois valores irá retornar falso. Em seguida vamos criar a função const imprimirResultado
//e atribuir a essa constante uma function que vai receber uma determinada nota fazendo o primeiro teste if (nota.entre(9, 10))se a nota ponto entre(é por isso que foi criada essa
//função "entre" onde agora podemos a partir do próprio valor da nota chamar a função(9, 10))que vai imprimir no console=>console.log('Quadro de Honra'); e agora vamos fazer um
//ELSE(caso contrário), só que junto do ELSE vamos colocar uma outra condição IF fazendo dessa forma else if(nota.entre(7, 8.99)) {abrindo um bloco e dentro deste colocar console.
//log('Aprovado'), nesse formato está demonstrado o encadeamento das estruturas.
//Se essa expressão if (nota.entre(9, 10))for falsa, o sistema não vai entrar automaticamente nesse bloco else if(nota.entre(7, 8.99)), pois p/ entrar nesse bloco existe um IF 
//associado, então dessa forma podemos encadear várias condições uma atrás da outra entrando apenas em uma delas, ou seja, ele não pode entrar em mais de uma condição do encadea-
//mento; se testa a 1ªexpressão, se ele entrar o sistema não vai p/a 2ªexpressão porque isso só ocorrerá se a 1ªexpressão for falsa e assim sucessivamente.   

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim

}

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
    
    console.log('fim')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Quadro de Honra   linha 42
//fim               linha 39
//Aprovado          linha 43
//fim
//Recuperação       linha 44
//fim
//Reprovado         linha 45
//fim
//Nota inválida     linha 46
//fim
//Nota inválida     linha 47
//fim
//
//[Done] exited with code=0 in 0.273 seconds