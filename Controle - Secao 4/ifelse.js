//05/05/2021: 58. Usando a Estrutura IF/ELSE.
//
//Nesta aula vamos ver o bloco IF associado com o ELSE fazendo o seguinte exemplo: criar uma constante chamada imprimir resultado que recebe uma função com um parâmentro que é uma
//nota, e dentro dessa função{}{vamos fazer um teste: se(if) a nota for maior ou igual a 7, abrir chaves novamente{}{ele vai imprimir no console a frase console.log('Aprovado!')}, caso
//contrário, ou seja, se a expressão if(nota >= 7)seja falso, eu quero mque faça uma outra coisa, e então  eu voi colocar um ELSE com um bloco associado(abrindo chaves novamente{})e
//dentro dessas chaves colocar console.log('Reprovado!'), lembrando: só tem uma sentença de código associado em cada um, tanto p/o IF, como p/o ELSE}, então recapitulando: nós temos 
//exatamente o mesmo bloco IF na linha10 da aula 57(de antes), só que agora caso essa expressão(linha10)seja falso, ele irá para o bloco associado ao ELSE:
//(TOMAR CUIDADO P/NÃO COLOCAR (;)PONTO E VÍRGULA)
const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Aprovado!
//
//[Done] exited with code=0 in 0.968 seconds
//Seguindo a advertência da linha 8, colocando (;)ponto e vírgula conf.linha 26, temos um retorno conf.linhas 33 e 34, o aluno tira 10 e está aprovado e reprovado, isso graças ao ;:
const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else; {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Aprovado!
//Reprovado!
//
//[Done] exited with code=0 in 0.72 seconds
//Fazendo um outro exemplo imprindo um resultado de valor 4, vai retornar reprovado cong.linha50.
const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Aprovado!
//Reprovado!
//
//[Done] exited with code=0 in 0.673 seconds
//
//Esse outro exemplo é p/termos cuidado com o fato de JavaScript possuir uma linguagem fracamente tipada, fazendo coisas conf.segue:
const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!')   //passando uma string chamada Epa!
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Reprovado!
//
//[Done] exited with code=0 in 0.769 seconds
//A execução funcionou conf.linhas 55a61 e depois linha 65 onde ele vai tentar comparar a string com a linha 56(nota >=7), ou se seja, a string é maior ou igual a 7?R.:Não é, 
//portanto ele vai imprimir no console como Reprovado conf.linha67 não conseguindo fazer essa comparação, onde o resultado vai ser falso de acordo com o ELSE linhas 58 a 60.
//EVITAR DE USAR STRING NA SINTAXE DE CÓDIGO P/NÃO OCORRER O QUE FOI EXPLICADO NAS LINHAS 70 A 71.