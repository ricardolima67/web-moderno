//10/06/2021: 107. Herança #06.
//
//Nesta aula será mostrado um exemplo de uma simulação envolvendo o operador "NEW" no momento de instanciar uma função construtora. 
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}


const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }
//
//[Done] exited with code=0 in 0.855 seconds

//  Simulando o Operador New  //
//Função novo recebe uma função(30)(cuja base é a função Aula(4)onde será criado os objetos a partir da função) que vai receber a função construtora(f)
//e colocar o conjunto de parâmetros(...params)(30)que a gente quer passar p/a criação do objeto; o primeiro passo é criar um objeto vazio, onde p/isso
//já que estamos simulando new e não podemos usá-lo, vamos usar a notação literal de objetos(31); o segundo passo é fazer com que o protótipo desse ob-
//jeto que acabamos de criar aponte p/função ponto prototype(32), no caso, vamos passar a função Aula, então ele vai apontar p/Aula.prototype; o tercei-
//ro passo vai ser chamar a função que foi recebido como parâmentro o "f"(33) e vamos chamar a função apply dessa função parâmetro(f) p/o método novo e
//essa função vai receber o primeiro parâmetro que vai ser o objeto que será o this p/ execução dessa função(05)(quem será o this, quem será o contexto
//de execução da função "f"), então vamos passar o objeto que acabamos de criar(const obj = {})(31) que será o primeiro parâmetro e o segundo parâmetro 
//dessa função apply vai ser uma array(30) que representa a lista de parâmetros(...params)que a gente quer aplicar na função "f"(da qual está sendo usa-
//o operador SPREAD-REST(...)(30)que vamos receber um conjunto de parâmetros que vai ser tudo concatenado em uma array), então pode-se passar diretamen-
//te params(30),porque params vai ser internamente dentro dessa função(function novo(f, ...params))e finalmente vamos retornar como resultado dessa fun-
//ção o objeto criado(31), retornando(42)igual resultado da sintaxe(4 a 12)conf.resposta linha(14). 
function novo(f, ...params)  {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj    
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }
//Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }
//
//[Done] exited with code=0 in 0.484 seconds