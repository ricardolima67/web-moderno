//11/06/2021: 109. JSON vs Objeto.
//
//JavaScript Object Notation(Notação de Objeto em JavaScript)=>JASON: é um formato textual que é diferente da notação literal de objetos, esses
//nomes são um pouco confusos, pois json(javascript object notation)era p/ser objeto, mas na verdade é um formato textual.
//Primeiro vamos criar um objeto simples, em seguida vamos transformá-lo em JSON, cujo processo é mais fácil, mais direto, e vamos perceber que
//um dos elementos do objeto não vai estar presente no JSON que é a função;o JSON é um formato de dados, talvez o mais usado hoje no mercado p/
//interoperabilidade entre sistemas,onde tem-se um formato textual/genérico que não correga consigo nada específico de um sistema ou tecnologia
//significa que se a gente tiver um formato binário específico p/ex.de como uma aplicação em CORBA funciona e se comunica, onde esse formato só
//se dá por meio de comunicação binária específico de uma determinada tecnologia; porém o JASON serve para comunicar sistemas que são feitos em
//tecnologias completamente diferentes, pois trata-se de um formato textual super simples de ser lido, super simples de ser interpretado p/com-
//putador, portanto a consegue-se ler JSON em Java,em CSharp, em Ruby, em Python, JavaScript e em qualquer linguagem(incluindo as mais antigas)
//é um formato que todas as linguagens conseguem e conseguem gerar de uma forma muito simples, por isso ele é muito usado entre comunicação de 
//sistemas, mesmo sistemas que são feitos com a mesma linguagem, qdo. trabalhamos com web service o formato JSON está muito presente, porque é   
//um formato super simples de ser gerado.
//Primeiro passo é criar um objeto com um atributo "a" inteiro, "b" inteiro, "c" inteiro e no final vamos criar uma função chamada  soma() que 
//retorna o valor "a", + "b", + "c" e vamos converter esse objeto p/um formato JSON(formato textual de uma string) respeitando o formato JSON,
//em seguida p/imprimir no console usando a sintaxe console.log(JSON.stringify(obj))usando stringify e o objeto que a gente quer converter,e-
//xecutando vai gerar um texto conf.linha(25); a gente nota que a função foi excluída no JSON, porque o JSON é um formato de dados, não é algo
//que é executado, são dados que estão trafegando de uma aplicação p/outra, dados armazenados em arquivo p/configuração e coisas do tipo. En-
//tão é um formato textual diferente do objeto em si JavaScript, a gente consegue usar notação ponto, consegue-se executar uma função, manipu-
//lar os dados.  
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{"a":1,"b":2,"c":3}
//
//[Done] exited with code=0 in 0.756 seconds
//
//Agora vamos fazer o contrário, vamos pegar um JSON e transformar em um objeto e aí a gente vai transformar diretamente mostrando nom console
//o resultado gerado a partir de uma string que foi passada,então vamos passar um string entre aspas duplas e vamos abrir chaves{}que é uma no-
//tação JSON(que é muito parecido com a notação de objeto), será que este formato(35)é um formato JSON válido?R.:Não!,conf.linhas(37 a 39). 
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{"a":1,"b":2,"c":3}
//undefined:1
//{ a: 1, b: 2, c: 3 }
//  ^
//
//SyntaxError: Unexpected token a in JSON at position 2
//    at JSON.parse (<anonymous>)
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js:4:18)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.653 seconds
//Linha(42)diz que ele não espera esse token dando um problema na posição dois da string, logo qdo.ele começou a interpretar o primeiro atributo(a), 
//a abertura do objeto está ok, mas o atributo "a" não ficou legal, então vamos evoluir esse mesmo objeto p/ver se a gente consegue fazer um parse,
//e p/isso vamos colocar conf.linha(61)abriindo aspas novamente colocando o 1ºatributo p/aspas simples e assim por diante, vamos executar esse códi-
//p/ver se esse é um formato válido; então conf.linhas(64 a 66)não é um formato válido, com a mesma resposta anterior, só que agora na posição 2:
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{"a":1,"b":2,"c":3}
//undefined:1
//{ 'a': 1, 'b': 2, 'c':3 }
//  ^
//
//SyntaxError: Unexpected token ' in JSON at position 2
//    at JSON.parse (<anonymous>)
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js:4:18)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.545 seconds
//CONTINUANDO DA LINHA(58): "O MOTIVO DA GERAÇÃO DO ERRO É PORQUE TODOS OS ATRIBUTOS NO FORMATO JSON DEVEM SER DELIMITADOS P/ASPAS DUPLAS"(""),
//trata-se de uma regra que deve ser respeitada, porque senão temos um formato inválido. 
//Portanto vamos delimitar os atributos com aspas duplas que retorna conf.linha(91), ou seja, um objeto gerado a partir de um texto.
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{"a":1,"b":2,"c":3}
//{ a: 1, b: 2, c: 3 }
//
//[Done] exited with code=0 in 0.587 seconds
//
//Vamos fazer mais um exemplo p/ver as possibilidades que o JSON suporta, no console o primeiro atributo que já vimos vamos manter "a": 1, com 
//aspas duplas porque todo nome em JSON tem que ter aspas duplas, o valor numérico não precisa de aspas, se quisérmos colocar uma "string" tbm.
//tem que ser com aspas duplas, podemos tbm.colocar valores booleanos com aspas duplas("true")que tbm.é suportado, podemos colocar objeto{}en-
//tre chaves e podemos colocar arrays dentro do formato JSON que tbm.é um formato válido, onde a gente pode ter um objeto dentro do outro, com
//que os atributos sejam delimitados por aspas duplas, bem como as strings tbm., portanto executando retorna conf.linha(106)     
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a": 1, "b": "string", "c":  true, "d": {}, "e": [] }'))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{"a":1,"b":2,"c":3}
//{ a: 1, b: 'string', c: true, d: {}, e: [] }
//
//[Done] exited with code=0 in 0.538 seconds
//
//Outra maneira de fazer testes com JSON é usar a ferramenta de busca no Google chamada JSON Validator acessando p/endereço https://jsonlint.com/
//onde podemos criar exemplos de json p/testar aquilo que queremos se o json é verdadeiro ou falso; p/ex.: podemos abrir um objeto conf.abaixo:
//{                             se dermos{}p/criar 1 obj(112 a 114=>fechamento das chaves})clicar Validate JSON p/validar,ele formata;continunado:
//     "nome": "Teste",         trocando "Teste"p/nome:"Ricardo", clicar Validate JSON vai mostrar na linha de Resultados(Results)=> Valid JSON;
//      "idade": 54,            depois vamos colocar filhos criando uma array, se formatar, retorna como JSON válido(Valid JSON), dentro do array 
//        "legal": true         vamos colocar um objeto{}com atributo nome:, idade:, ao teclar Validate JSON, retorna Valid JSON; pode-se colocar
//          "filhos": [{        um segundo elemento(119)usando uma vírgula após o fechamento da chave(})e abrindo outra chave novamente({})e colo-
//              "nome": "Nathália",        cando dentro do objeto conf.linha(120)ao clicar Validate JSON retorna Valid Json; se caso a gente colo-
//              "idade": 28                car aspas simples na palavra false Linha(120)e teclar Validate JSON, o mesmo retorna um erro: Error:   
//}, {                                     Parse error on line 9:...18     ). dizendo qual é o problema detectado e dando dicas de como resolver. 
//    "legal": false
//}]
//}    