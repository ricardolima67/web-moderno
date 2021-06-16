//16/06/2021: 120. Filter #01.
//
//Outra forma de se percorrer um array com mais propósito, além do MAP(que é ter-se um array e transformar em outro), é o FILTER que serve p/filtrar uma array,
//muitas vezes a gente quer filtrar um array p/se ter um sub-array(uma qtde.de elementos menores baseados em algum critério de filtro; p/ex.:a gente quer todos
//os alunos que tenham nota maior do que sete;quero todos os produtos que estão marcados com frágil,eu quero ter os clientes que estão em débito com a empresa)
//então são formas de filtrar uma estrutura, formas de filtrar um array e é uma das formas com bastante propósito que a gente faz p/percorrer um array; percor-
//rer um array só com FOR IT, a gente simplesmente vai receber os elementos, mas usando o MAP a gente está transformando, evitando de ter que fazer um  FOR IT,
//depois fazer um teste entre várias outras coisas,onde podemos com o MAP transformar uma array de forma muito simples;então sempre que a gente precisar trans-  
//formar uma array em outra recomenda-se usar o MAP e sempre que a gente precisar filtrar uma array a gente usa o FILTER,  a gente não precisa fazer um FOR IT, 
//fazer um teste condicional, criar um novo array e se bater o teste adiciona-se um novo array, enfim, esse tipo de procedimento não faz muito sentido, então a 
//gente pode usar o FILTER que vai simplificar muitos passos e deixar o código muito mais legível.    
//Vamos criar uma lista de porodutos por meio de uma constante chamada de produtos que recebe um array com objeto{}recebendo nome, preço e frágil, continuando
//a colocar mais atributos(elementos); o primeiro teste que vamos fazer, vamos usar a função FILTER usando o console.log conf.segue passando a função callback
//que vai receber um parâmentro "p" representando cada um dos elementos do array(dos produtos dessa função filter);  
//Uma forma legal tbm. de aprendermos um pouco mais sobre essas funções é entrarmos nas documentações através do site MDN web docs da MOZILA (Array.prototype.
//filter()https://developer.mozila.org)ref.a JavaScript; então nesse site vai mostrar exatamente o que essa função recebe => em sua sintaxe: parâmentros call-
//back(Função é um predicado, para testar cada elemento do array. Retorna true para manter o elemento, false caso contrário, recebendo três argumentos:
//Element/Elemento: O elemento que está sendo processado no array; Index?Índice: O índice do elemento atual que está sendo processado no array;  Array: O fil-
//ter/filtro do array foi chamado.)"thisArg"=>Opcional:Valor a ser usado como uma this durante a execução do callback.  
//O parâmetro CALLBACK é obrigatório e o parâmetro final(thisArg)é opcional.
//Continuando da linha(14)a callback function(p)foi passada apenas interessando receber o produto(p),em seguida vamos aplicar algum tipo de lógica que vai re-
//tornar verdadeiro ou falso, retornando verdadeiro significa que os elementos estarão presentes no array final, ou seja diferente do MAP que tínhamos uma ar-
//ray original de cinco elementos e obrigatoriamente o array final era de cinco elementos, no FILTER normalmente o array final é menor do que o array original;  
//então vamos colocar return false,significa que p/cada elemento chamado de "p" ele não vai estar presente no array final que vai ser retornado p/método FILTER
//que no final vamos ter um array vazio conf.linha(37); se retornar true(48), retorna todos os elementos do array conf.linhas(51 a 54).  
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[]
//
//[Done] exited with code=0 in 0.529 seconds
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return true
}))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ { nome: 'Notebook', preco: 2499, fragil: true },
//  { nome: 'iPad Pro', preco: 4199, fragil: true },
//  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
//  { nome: 'Copo de Plástico', preco: 18.99, fragil: false } ]
//
//[Done] exited with code=0 in 0.491 seconds
//
//Podemos aplicar algum tipo de critério conf.linh(67), retorna conf.linha(70); se colocarmos 2400, vai retornar dois prods.(linhas(60 e 61)).
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return p.preco > 2500
}))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ { nome: 'iPad Pro', preco: 4199, fragil: true } ]
//
//[Done] exited with code=0 in 0.457 seconds
//
//Em seguida vamos criar duas funções p/retornar apenas os produtos que são frágeis e produtos que tem preços maior do que R$ 500,00:
//Produtos com preços maior do que R$ 500,00//Feito p/aluno, retornou conf.linhas(87 e 88).
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return p.preco > 500
}))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[ { nome: 'Notebook', preco: 2499, fragil: true },
//  { nome: 'iPad Pro', preco: 4199, fragil: true } ]
//
//[Done] exited with code=0 in 0.758 seconds
//
//Produtos Frágeis e Caros, com preço superior a R$ 500,00//Corrigido p/professor, onde criou-se duas constantes(104 e 105), juntamente c/(107):
const produtos = [                                                                 //retorna conf.linhas(110 e 111).
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false } 
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))   //Filters encadeados, como no caso do Map.
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//[]
//[ { nome: 'Notebook', preco: 2499, fragil: true },
//  { nome: 'iPad Pro', preco: 4199, fragil: true } ]
//
//[Done] exited with code=0 in 0.614 seconds