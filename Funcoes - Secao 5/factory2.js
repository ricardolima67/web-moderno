//20/05/2021: 85. Função Factory #02.
//
//Em continuação da aula passada(84)ref.ao desafio/exercício(Criar uma função factory chamada criar produto, onde será passado o nome do produto, o preço e tbm.criar um novo
//objeto usando os parâmentros p/a função factory e tbm.será colocado o desconto como valor fixo), que vai receber como parâmetro o nome e o preço do produto(8), e essa função 
//factory retorna um objeto(9)onde vou colocar o nome(não preciso colocar nome dois pontos nome porque já coloquei o nome no parâmetro(8),ou seja, o mesmo nome do atributo que 
//eu quero expor no meu objeto), o mesmo ocorrendo com preço(poderia colocar com : conf.aula passada, sem problemas); o desconto poderia tbm.entrar como parâmetro(junto com no-
//me e preço), mas optou-se em deixar a sintaxe conf.abaixo e p/criar os objetos fazer conf.linhas 16 e 17, podendo criar qtos.objetos desejar: 
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//{ nome: 'Notebook', preco: 2199.49, desconto: 0.1 }
//
//[Done] exited with code=0 in 0.528 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//{ nome: 'Notebook', preco: 2199.49, desconto: 0.1 }
//{ nome: 'iPad', preco: 1199.49, desconto: 0.1 }
//
//[Done] exited with code=0 in 0.46 seconds