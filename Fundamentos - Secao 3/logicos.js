//28/04/2021: 49.Operadores: Lógicos

//Nesta aula vamos falar sobre os operadores lógicos, abordando um conceito muito conhecido na área da computação que é a Tabela Verdade; quando temos os operadores lógicos
//com uma condição do tipo "i" p/ex.: uma coisa tem que acontecer e outra deve acontecer pra que uma determinada circunstância possa ser viável, p/ex.:só vou sair de casa se 
//eu tiver dinheiro na conta corrente e o tempo estiver favorável(não está chovendo). Então quando temos uma operação do tipo "i" p/ex.: existe uma tabela verdade com o tipo de 
//condição "OU": Vou sair se tiver dinheiro OU se o cartão estiver liberado e tbm.p/ a condição "ou exclusivo".
//Quando temos uma condição do tipo "i": uma coisa é verdadeira e a outra coisa é verdadeira pra que o resultado seja verdadeiro; caso contrário: se uma coisa for verdadeira
//e a outra for falsa, o resultado vai ser falso; se uma coisa for falsa(não precisamos estar analisando o segundo operando)obrigatoriamente será falso o resultado e falso e 
//falso, o resultado será falso.
//Então conforme abaixo se tamos as condições:
//Condição   Condição   Resultado
//   V     e    V     ->    V    
//   V     e    F     ->    F
//   V     e    ?     ->    F          se tivérmos verdadeiro e qualquer coisa vai dar falso.
//A condição "i" obrigatoriamente em todos os seus operandos tem que ser Verdadeiro para que uma expressão usando o operador "i" seja Verdadeiro.
//Conforme abaixo temos as expresões operando 1, operando 2, 3 e 4: o resultado só será verdadeiro(true), se todos os operandos forem verdadeiros, basta um operando ser falso
//que o resultado será falso(false):
//op1 e op2 e op3 e op4 -> V 
//Condição   Condição   Resultado
//   V    ou    ?     ->    V   //Verdadeiro ou qualquer coisa, o resultado dá Verdadeiro, então não presisa analisar o segundo operando porque a partir do primeiro consegue-
                               //se inferir a resposta sem precisar olhar o segundo operando.
//   F    ou    ?     ->    ?  //Se tivérmos Falso ou qualquer coisa, dá pra se dizer qual é o resultado nesse cenário?R.:Não!, porque se for F ou V -> V: o resultado dá verdadeiro.
//   F    ou    F     ->    F  //Falso ou Falso, o resultado dá Falso.       
//Se tivérmos uma expressão c/vários OU's, onde temos op1 ou op2 ou op3...basta um deles ser verdadeiro p/que todos os outros operandos sejam verdadeiros tbm.usando a condição "OU". 
//                    
//E o "OU" EXCLUSIVO tem que ser sempre diferente, temos que ter Verdadeiro e Falso ou Falso e Verdadeiro, se os for dois Verdadeiros dá o resultado Falso, ou os dois Falsos, o 
//resultado dá Falso, a condição é conhecida por (chór)XOR=exclusivo em inglês, conforme abaixo:
//Condição   Condição   Resultado
//   V    xor   V     ->    F  //Verdadeiro ou(XOR)exclusivo Verdadeiro, o resultado dá Falso.
//   V    xor   F     ->    V  //Verdadeiro ou(XOR)exclusivo Falso, o resultado dá Verdadeiro.
//   F    xor   V     ->    V  //Falso ou(XOR)exclusivo Verdadeiro, o resultado dá Verdadeiro.
//   F    xor   F     ->    F  //Falso ou(XOR)exclusivo Falso, o resultado dá Falso.
//O "OU"Exclusivo obrigatóriamente os dois operandos tem que ser diferentes(V ou F)p/dar o resultado Verdadeiro, se os operando forem iguais(V ou V e F ou F)o resultado é Falso.
//
//A Negação Lógica em JavaScript é uma EXCLAMAÇÃO(!)
//Condição   Condição   Resultado
//  !V                ->    F  //A Negação Lógica de Verdadeiro, o resultado é Falso.
//  !F                ->    V  //A Negação Lógica de Falso, o resultado é Verdadeiro.
//
//Note que na linha 12(V e V) a linha 14: é um operador binário, por ter dois operandos; na linha 20(V ou ?)a 23 tbm. é um operador binário; o "OU" Exclusivo linha 29(VxorV)a 32 tbm.
//é um operador binário; e a Negação Lógica é um operador unário(opera sobre um operando apenas).
//
//Dado a explicação acima para termos uma base das tabelas verdades do "i", do "ou", do "ou exclusivo" e da negação lógica, vamos fazer um exemplo p/testar tudo isso:
//O exemplo será misturar todos esses operadores, a idéia é a seguinte: Temos dois trabalhos esporádicos, fazendo um free lance aqui, e outro ali, então: vamos supor que nessa semana
//vai entrar dois trabalhos para serem realizados, um pra ser executado na terça-feira e outro na quinta-feira, sendo portanto, dois trabalhos: trabalho 1(T1) e Trabalho 2(T2),
//se o trabalho 1 der certo e o trabalho 2 der certo: no fim de semana eu vou comprar uma tv de 50 polegadas e tomar umas brejas; esse cenário trata-se do Operador "i"; precisam dos
//dois trabalhos darem certo p/se conseguir comprar a tv de 50 polegadas e tomar umas brejas no final de semana;
//Se apenas um dos dois trabalhos der certo, ou na terça ou na quinta, significa que no fim de semana eu vou comprar uma tv de 32 polegadas porque só um dos trabalhos deu certo, 
//então comprar a tv de 32 polegadas trata-se de um "OU EXCLUSIVO", porque se der certo os dois, não vou comprar a tv de 32 polegadas porque vou comprar a tv de 50 polegadas, se 
//der certo um dos dois compra-se a tv de 32 polegadas.
//E se não der certo nenhum dos dois, não vai comprar nenhuma tv; o "ou" vai ser tomar as brejas: porque se der certo os dois trabalhos: vamos comprar a tv de 50 polegadas e tomar
//as brejas, então se der certo um dos dois trabalhos, vamos comprar a tv de 32 polegadas e tomar as brejas tbm.; só não vou tomar brejas se não der certo nenhum dos dois trabalhos,
//porque aí, eu não compro nem tv e nem tomo as brejas.
//Então o "i"é a tv de 50 polegadas, o "ou exclusivo"é tv de 32 polegadas e as brejas será o "ou"; basta um dos trabalhos dar certo ou os dois darem certo pra se tomar as brejas no
//final de semana; se nenhum dos trabalhos derem certo, a negação de tomar as brejas vai ser saudável, então portanto, será usada a negação de tomar brejas pra ser o resultado de 
//saudável, ou seja, para nesse caso usarmos a negação lógica.
//Vamos criar uma função chamada function compras recebendo dois parâmetros para essa função (t1 e t2)e esses dois valores são boleanos(Verdadeiro ou Falso), em seguida vamos 
//abrir chaves{}p/receber os objetos onde aí dentro vai entrar a primeira variável que vai ser o fruto de uma operação lógica; chamada de constante comprarBrejas que vai receber 
//trabalho 1(t1) ou trabalho 2 (t2), o "ou é representado pela sigla pipe:(||)é o símbolo do pipe duas vezes, então sempre que a gente trabalhar com operações lógicas usamos o pipe
//duas vezes ||, se usarmos o pipe apenas uma vez é chamado de operação bitwise, ou seja, operação bit a bit onde temos números inteiros p/ex. da qual converte-se esses números em
//valores binários e compara bit a bit usando "ou", compare usando bit a bit usando "i", ou usando o "ou exclusivo"); se o operando trabalho 1(t1) for verdadeiro, nesse caso não há
//necessidade de olhar para o segundo operando que é o trabalho 2(t2) porque obrigatóriamente se um dos trabalhos derem certo, vai tomar brejas no fim de semana, ou seja, se um 
//operando for True, o outro tbm. será True. 
//A próxima constante dentro das chaves vai ser chamada de const comprarTv50 que será fruto de operação lógica, é comprar a tv de 50 polegadas(operação do tipo "i", eu só vou comprar
//a tv de 50 polegadas se os dois trabalhos derem certo)que vai receber trabalho 1(t1) usando o "i"comercial duas vezes(&&) com trabalho 2(t2); o && representa o operador lógico para
//dizer que é uma operação do tipo "i"; se o primeiro for verdadeiro(trabalho 1(t1))precisa analisar o trabalho 2(t2)?R.:Sim, precisa; porque a partir do primeiro trabalho(t1)sendo
//verdadeiro eu não consigo inserir se os resultados será verdadeiro ou falso, eu vou ter que analisar o segundo trabalho(t2), se o primeiro trabalho(t1)for falso eu já consigo 
//inferir o resultado?R.:Sim, consigo, porque se o primeiro trabalho for falso eu não vou conseguir comprar a tv de 50 polegadas dispensando a análise no trabalho s(t2) para inferir
//o resultado dessa opearação.
//(||) e (&&)são chamados de operados curto-circuito, significa que a partir do primeiro operando - ele descobre o resultado da expressão, pois ele não olha, não analisa o segundo 
//operando; isso de fato acontece, se o primeiro for falso no "i"(&&) ele nem olha para o segundo, se o primeiro trabalho(1)for verdadeiro numa expressão do tipo "ou", ele nem olha
//o resto da operação porque sabe o resultado. 
//A próxima constante dentro das chaves vai ser chamada de const comprarTv32 que tbm.será fruto de operação lógica, onde aqui vamos trabalhar com o operador "ou exclusivo"(Não exixte 
//um operador "ou exclusivo" em JavaScript para trabalhar com tipos boleanos, existe um operador bit a bit ou exclusivo, tendo como fazer um certo artifício tecnológico) que é fazen-
//do assim: colocando as duas negações lógicas(que seriam duas exclamações(!!) seguido de parêntesis()para receber os parâmetros)para converter algo para boolean e no final a gente
//coloca dentro do parêntesis trabalho 1(t1) ou exclusivo bit a bit(representado por um acento circunflexo ^)trabalho 2(t2), representado pelo operador bitwise(xor).
//O "OU EXCLUSIVO"tbm.pode ser simulado pelo sinal(!=)que é o sinal de DIFERENTE(o prof.prefere usar esse sinal ao invés do circunflexo^), ou seja, o "OU EXCLUSIVO"pode ser simulado
//com a diferença porque Verdadeiro é diferente de Falso então é um "ou exclusivo", o Falso ser diferente de Verdadeiro é tbm.um "ou exclusivo", se for Falso - Falso vai ser igual 
//Falso(o seu resultado)e se for Verdadeiro - Verdadeiro vai ser igual a Falso, então a diferença(!=)tbm.simula um "ou exclusivo".
//A próxima constante dentro das chaves vai ser chamada de const chamada manter saudável vai ser a negação lógica de tomar brejas, cujo sinal é a exclamação(!)adicionada a condição
//comprar brejas; então estamos usando o operador (||) ou, o operador i representado por (&&), o ou exclusivo representado por (!=), que todos são operadores binários e a negação 
//lógica representada pelo sinal de exclamção(!)que trata-se de um operador unário.
//Para finalizar vamos retornar as quatro constantes criadas na sintaxe de comando/código; aí vamos nos perguntar: como vamos retornar quatro constantes se o JavaScript só suporta
//apenas um único retorno?R.:Simples, a gente pode jogar tudo isso dentro de um único objeto, então na linha 99 vamos colocar return {}onde vamos criar um objeto e dentro das chaves
//vamos colocar os nomes das constantes; um objeto é uma coleção de chaves e valor, é um par formado por um identificador que é o nome daquele atributo e o valor que queremos 
//atribuir, o assunto objeto foi mencionado porque o prof.está dizendo que a linha 99 não parece ser uma coleção chave/valor, porque parece que foi colocado um único valor, o correto
//então seria colocar comprarBrejas: comprarBrejas, comprarTv50: comprarTv50 e assim sucessivamente, ou seja, isso causa uma redundância; então qdo.omitimos a chave, simplesmente
//passa uma constante ou uma variável para a criação de um objeto trata-se de um recurso novo do ES(ECMASCRIPT)2015 que é uma criação mais inteligente de objeto, portanto colocando
//diretamente o valor, automaticamente o JavaScript vai criar um objeto que tem o nome da constante que vai ser a chave daquele objeto e o valor vai ser o próprio valor que é o 
//resultado das operações, ou seja, o valor da constante, fazendo esse procedimento de uma forma mais reduzida, mais simplificada; o conceito de objeto permanece o mesmo.
//Na linha 102 o que vai acontecer?R.:Comprar brejas?R.:Vai, vai comprar a TV de 50?R.:Vai, vai comprar a TV de 32?R.:Não, vai ser Saudável?R.:Não.
function compras(trabalho1, trabalho2) {
    const comprarBrejas = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2)  // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarBrejas 
    
    return { comprarBrejas, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\logicos.js"
//{ comprarBrejas: true,
//  comprarTv50: true,
//  comprarTv32: false,
//  manterSaudavel: false }
//
//[Done] exited with code=0 in 0.488 seconds
//
function compras(trabalho1, trabalho2) {
    const comprarBrejas = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2)  // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarBrejas 
    
    return { comprarBrejas, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//{ comprarBrejas: true,
//  comprarTv50: true,
//  comprarTv32: false,
//  manterSaudavel: false }
//{ comprarBrejas: true,
//  comprarTv50: false,
//  comprarTv32: true,
//  manterSaudavel: false }
//{ comprarBrejas: true,
//  comprarTv50: false,
//  comprarTv32: true,
//  manterSaudavel: false }
//{ comprarBrejas: false,
//  comprarTv50: false,
//  comprarTv32: false,
//  manterSaudavel: true }
//
//[Done] exited with code=0 in 0.52 seconds