//02/06/2021: 93. Revisão sobre Objeto
//
//Objeto é uma coleção dinâmica de pares chave/valor(onde pode-se adicionar e remover).
const produto = new Object      //O Operador "NEW" é uma forma de criar Objeto(Object), onde Object trata-se de uma função e qdo.usada c/o New: temos uma
produto.nome = 'Cadeira'       // função construtora e a partir disso instância-se um objeto("instância" pode ser usada informalmente para significar um 
produto['marca do produto'] = 'Genérica' //objeto criado usando uma função construtora particular.)Por ser dinâmico podemos colocar conf.linha5, onde po-
produto.preco = 220           //demos usar essa notação ponto(produto ponto nome)ou podemos usar uma notação parecida c/o acesso de Array(que é o colchete) 
                              //conf.linha6 podendo fugir do padrão identificador do JavaScript([marca do produto])podendo colocar identificadores começan-
console.log(produto)          //c/número, colocar espaços em branco, o ideal é acessar a partir de colchetes adicionando novos elementos p/o objeto recém-
                              //criado fazendo uma coleção dinâmica de chave/valor. 
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ nome: 'Cadeira', 'marca do produto': 'Genérica', preco: 220 }
//
//[Done] exited with code=0 in 0.435 seconds     
//Por tratar-se de uma coleção dinâmica,tanto posso adicionar dinamicamente como posso tbm.excluir(24)os atributos de um objeto a partir do comando "DELETE" 
//Linha25(dentro dos colchetes)não se tem como acessar a conotação ponto porque foge dos padrões de identificação do JavaScript,então o acesso é via String:
//Então ao imprimir no console o valor do produto, este terá um único atributo(29).                     
const produto = new Object      
produto.nome = 'Cadeira'        
produto['marca do produto'] = 'Genérica' 
produto.preco = 220           
                              
console.log(produto)  
delete produto.preco
delete produto['marca do produto']
console.log(produto)
//Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ nome: 'Cadeira', 'marca do produto': 'Genérica', preco: 220 }
//{ nome: 'Cadeira' }
//
//[Done] exited with code=0 in 0.428 seconds
//Agora vamos criar um objeto um pouco mais complexo(criação literal de objetos):
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    }, 
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Tina',
        idade: 42
    }],
    calcularValorSeguro: function() {

    }

 }

carro.proprietario.endereco.numero = 1000
carro['proprietario'] ['endereco'] ['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)

//Chamado carro(33)que recebe um objeto não só como uma coleção de chaves/valores, esses valores podem ser outros objetos, podem ser uma array, etc...
//(34)recebe modelo A4, valor 89000(35), proprietário(36)que vai receber outro objeto e dentro dele terá outros atributos: nome(37), idade 56 e endereço(39)
//abrindo outro objeto(40 a 42), ou seja,tem-se o objeto carro, que tem o objeto proprietário e que tem objeto endereço com seus próprios atributos(40 a 42)
//em seguida(43)colocar um vírgula p/continuar a colocar mais objetos com uma Array(44)abrindo c/colchetes e dentro das chaves criando o primeiro objeto que
//vai ser os condutores(44 a 46)seguindo com a vírgula no final da chave(47)p/inclusão de mais um condutor, ou seja, de mais um objeto(47 a 50),então temos:
//O carro que é um conjunto de pares chave/valor (33), temos atributos com tipos mais básicos da linguagem (34 a 36)contendo Number, String(podendo tbm. ter 
//Boolean)e outros tipos básicos da linguagem, tem-se par chave/valor cujo valor é um objeto que têm outros atributos e outros objetos(37 a 39)e(40 a 42), e
//tendo níveis bem maiores com atributos que são Arrays (44 a 50)que trata-se de um conjunto de objetos ou mesmo de dados básicos e tbm. podemos ter funções  
//dentro do objeto carro(33)conf.demonstrado na linha51 após a vírgula da linha 50 e poderia se colocar p/analisar qual a idade dos condutores e quem os são 
//se bônus da seguradora conf.suas regras, etc...., sendo nesse caso, como uma abstração sendo usada na corretora de seguros(51), e como já falado anterior-
//mente:  podemos acessar os atributos a partir da notação ponto conf.linha(57:carro.proprietario.endereco.numero = 1000); tbm. podemos acessar a partir da 
//notação colchete, mesmo que não se tenha definido a mesma pela parte dos colchetes, então pode ser feito conf. linha(58)que recebe avenida Gigante, p/ex.:
//essa forma é legal qdo.se quer fazer uma introspecção no objeto, onde temos p/ex.um nome do atributo que a gente quer acessar['proprietário'] cujo nome é
//uma string, a gente pode acessar simplesmente dessa notação(carro.proprietario)=>porque neste formato a gente já sabe realmente o nome do atributo, colo-
//cando diretamente como identificador da linguagem, sendo a linha (58) é muito mais trabalhosa de se fazer; em seguida vamos imprimir o valor do carro(59):
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ modelo: 'A4',
//  valor: 89000,
//  proprietario: 
//   { nome: 'Raul',
//     idade: 56,
//     endereco: { logradouro: 'Av Gigante', numero: 1000 } },
//  condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Tina', idade: 42 } ],
//  calcularValorSeguro: [Function: calcularValorSeguro] }
//
//[Done] exited with code=0 in 0.679 seconds
// Podemos tbm.Deletar objetos juntamente com seus atributos, p/ex.:"delete carro.condutores"(61)serão deletados as linhas(44 a 50), "delete carro.proprie-
//tário.endereço"(62)serão deletados as linhas(36 a 43), podemos deletar tbm.funções conf.linha(51 a 53)e qdo.a gente mandar imprimir o valor de carro, va-
//mos perceber que o objeto carro possue bem menos atributos:
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//{ modelo: 'A4',
//  valor: 89000,
//
//[Done] exited with code=0 in 0.679 seconds
//OBS.: CUIDADO qdo.a gente for acessar os elementos de um objeto encadeado(console.log(carro.condutores))porque pode gerar problema, no caso os condutores
//foram excluídos a partir da linha(44 a 50), será que essa sentença(console.log(carro.condutores))vai gerar algum problema?R.:Não vai, porque o objeto car-
//ro simplemente existe podendo acessar qualquer coisa que esteja dentro de carro, inclusive coisas que não existe e qdo.não existir ele vai retornar a im-
//pressão no console como UNDEFINED, ou seja, condutores não está definido dentro do objeto carro; o problema é se a gente tentar acessar alguma coisa de 
//algo que está indefinido como p/ex.:(console.log(carro.condutores.length)) onde eu gostaria de saber o tamanho desse array, ao executar, ele retorna com
//erro e se pegarmos a linha 61 e comentar(//), ele vai retornar que existem dois condutores dentro de carro conforme abaixo demonstrado:
//condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Tina', idade: 42 } ],.