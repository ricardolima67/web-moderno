//12/06/2021: 111. Classe #02.
//
//Nesta aula vamos ver como funciona a Herança em Classe, cujo mecanismo é sempre em cima de função e a herança funciona em cima de prototype, então tudo 
//o que já foi visto em vários exemplos de herança tbm.vai acontecer qdo.estivérmos trabalhando c/classe porque na verdade classe só é uma forma diferente
//de escrever uma função em JavaScript, pois no final das contas o código vai ser convertido p/função e a herança continua sendo via prototype; só que qdo.
//a gente escreve uma classe obviamente é com uma sintaxe diferente e a forma que a gente diz que uma determinada classe estende outra, ou seja, que uma 
//determinada classe ou uma função gerada a partir dessa classe tem como protótipo uma outra função, no âmbito da sintaxe de classe é diferente.
//Vamos criar três classes e mostrar como vai ser a relação de herança entre as mesmas:
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }    
}   

class Pai extends Avo {      //Extends é a forma que temos no âmbito de sintaxe de classes de definir que uma determinada classe tem outra classe como pro-
    constructor(sobrenome, profissao = 'Professor') {   //tótipo ou que uma determinada função gerada a partir daquela classe terá como protótipo uma outra 
        super(sobrenome)                               //função que será gerada a partir da classe avô. Colocar o SUPER p/instanciar a função construtora 
        this.profissao = profissao                    //da super classe(de pai p/ex.:seria avô); o super está chamando o construtor das linhas(10 a 12).    
    }                                                   
}  

class Filho extends Pai {
    constructor() {
        super('Silva')
    }    
}

const filho = new Filho                            //Essa linha significa instanciar.
console.log(filho)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Objeto - Seção 6\tempCodeRunnerFile.js"
//Filho { sobrenome: 'Silva', profissao: 'Professor' }
//
//[Done] exited with code=0 in 0.542 seconds