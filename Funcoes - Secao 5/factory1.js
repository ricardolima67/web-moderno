//20/05/2021: 84. Função Factory #01.
//
//20/05/2021 = 84. Função Factory #01.
//
//Um outro padrão muito comum dentro de JavaScript, que é um padrão de projeto na verdade(não sendo algo exclusivo de JavaScript)mas muito usado em JS,
//é a gente ter Funções Fábrica(Funções Factory).
//Uma Função Factory é a que retorna um objeto; p/ex.: imagine uma situação em que temos uma constante chamada produto(prod1) que recebe objeto{}e ao 
//abrir esse objeto(vou colocar dentro dele uma instância de objeto), ou seja, nome do produto, preço, etc..., e eu vou definindo o objeto da maneira 
//que eu quero; eu quero criar outro produto p/ex.:então copio a função e crio outro objeto(prod2); então nós vamos gerando os dados mais de uma vez,
//portanto se a gente continuar repetindo esse processo muitas vezes vai acabar repetindo demais o conteúdo de um determinado objeto dentro do progra-
//ma, então p/resolver isso, eu posso criar uma função factory.  
const prod1 = {
    nome: '...',
    preco: 45
}  

const prod2 = {
    nome: '...',
    preco: 1234
}  
//Continuando da linha 11: //  Factory Simples:
//Vou criar uma função chamada criar pessoa(23) e dentro dessa função(23) eu retorno um objeto(24)onde ele pode ter alguns valores fixos ou parâmetros  
function criarPessoa() {
    return {
        nome: 'Tina',
        sobrenome: 'Nascimento'
    }
}

console.log(criarPessoa())
//O que é uma Factory? R.: É uma função que no final retorna sempre um novo objeto; embora eu não estar usando um operador NEW(24 a 27), o fato de eu 
//estar criando um objeto a partir da notação literal de objeto, então nesse caso, eu sempre criando uma nova instância de pessoa(23), então eu posso
//simplesmente criar um objeto a partir da chamada da função criar pessoa conf.linha 30, então sempre que eu executar essa função, ele vai criar uma
//nova instância de pessoa(23)que pode ser trabalhada de forma independente, então executando, retorna conf.linha 36.  
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//{ nome: 'Tina', sobrenome: 'Nascimento' }
//
//[Done] exited with code=0 in 0.429 seconds
// Exercício de Fixação
//Criar uma função factory chamada criar produto, onde será passado o nome do produto, o preço e tbm.criar um novo objeto usando os parâmentros p/a 
//função factory e tbm.será colocado o desconto como valor fixo, cuja correção será na aula 85.
function criarProduto() {
    return {
        nome: 'LapTop',
        preco: 2000,
        desconto: 200
    } 
}

console.log(criarProduto())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//{ nome: 'LapTop', preco: 2000, desconto: 200 }
//
//[Done] exited with code=0 in 0.537 seconds