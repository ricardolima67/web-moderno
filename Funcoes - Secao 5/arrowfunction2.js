//14/05/2021: 74. Funçções Arrow #02.

//Nesta aula vamos trabalhar o conceito que o "this" dentro de uma função arrow(=>)é fixo, baseado no contexto do qual a função foi escrita.
function Pessoa() {
    this.idade = 0

    setInterval(() => {    //Aqui foi criada uma arrow function(=>)
        this.idade++ 
        console.log(this.idade)
    }, 1000)
}

new Pessoa     //Criação da instância p/linkar o this à linha4(função pessoa).
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//1
//2
//3
//4
//5
//6
//7
//8
//9
//10
//
//[Done] exited with code=1 in 11.904 seconds
//A função retorna conf.aula72(Conceito Léxico)
