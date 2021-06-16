//10/06/2021: Herança #05.
//
//Nesta aula vamos começar mosrtando três coisas importantes:
console.log(typeof String)
//console.log(typeof String)O que é String dentro de JavaScript?R.:É uma função.
console.log(typeof Array)
//console.log(typeof Array)O que é Array dentro de JavaScript?R.:É uma função.
console.log(typeof Object)
//console.log(typeof Object)O que é Object dentro de JavaScript?R.:É uma função.
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//function
//function
//function
//
//[Done] exited with code=0 in 1.225 seconds
//String, Array, e Object tem um atributo chamado .prototype, toda função tem um atributo ponto prototype.
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
} 

console.log('Escola Cod3'.reverse())
//Reverter uma String = Trata-se de uma função que não tem por padrão na API seguida de uma implementação(function(){}(que é algo menos importante), 
//o importante é ter o conceito de conseguir adicionar novas funções ou atributos dentro de um determinado protótipo, p/ex.: String. 
//Em seguida vamos colocar return this.split(split é p/quebrar a string em cada uma das letras gerando um array que vai ter todas as letras da string
//incluisive espaços em branco tbm.serão elementos do array), o array tem a função Reverse(p/reversão do mesmo, cujos elementos serão invertidos)e em 
//seguida a gente faz um join p/juntar todos os elementos na string; p/testar essa sintaxe, vamos colocar console.log('Escola Cod3'.reverse())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//3doC alocsE     //Ele reverteu todo o texto inserido na 21.
//
//[Done] exited with code=0 in 0.704 seconds
//
Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) 
console.log(['a', 'b', 'c'].first())
//Continuando, a gente pode fazer Array.prototype.first(Não tem esse método de pegar o primeiro elemento de uma array), pois é muito simples, a gente 
//coloca colchete zero, mas tem esse método, a gente pode adicionar(return this[0]);OBS.:IMPORTANTE: A GENTE ACESSA O ARRAY OU A STRING DENTRO DE UM
//MÉTODO PROTÓTIPO A PARTIR DO "THIS"; continuando a sintaxe: podemos criar uma array literal colocando console.log([1, 2, 3, 4, 5].first()), ele vai
//retornar o primeiro elemento do array que é o 1(43), fazendo um outro exemplo com strings(37)['a', 'b'.....]retorna conf.linha(48). 
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//1
//
//[Done] exited with code=0 in 0.538 seconds
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//1
//a
//
//[Done] exited with code=0 in 1.01 seconds
//
//Algo que temos que ter muito cuidado, é não mexer em funções que já estão presentes em protótipos existentes, recomenda-se não fazer isso, p/evitar 
//efeitos colaterais que não podemos mensurar, mas podemos substituir uma função que já existe no protótipo p/ex. da String, e dentro da string proto-
//type já tem uma função chamada toString e estamos sobrescrevendo o comportamento de toString, causando efeitos inimaginávies e vamos fazer um teste
//p/ver: console.log('Escola Cod3r').reverse()), gerando resposta conf.linha(62).
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//odut uocsaL
//
//[Done] exited with code=0 in 0.611 seconds
//Continunado da linha 55, temos que ter cuidado em adicionar novos comportamentos, que dirá substituir comportamentos que já existem nessa forma 
//global gerando um efeito catastrófico, porque outras APIs, outras funções esperam receber a função toString padrão do API do JavaScript. 