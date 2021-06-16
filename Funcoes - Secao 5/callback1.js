//18/05/2021: 77. Funções Callback #01.
//
//Nesta aula vamos falar de um conceito muito importante da linguagem que tem tudo a ver com função; que é o conceito de callback(chamar de volta); o professor
//comenta que o 1ºvídeo gravado no canal(Padrões de Projeto - Ep01: O padrão mais utilizado da Web)cujo assunto abordado é o Observer, porque JavaScript domina
//a Web e tbm.o padrão Observer é muito usado no JS, embora as pessoas não chamem de observer, o princípio é extamente o mesmo e o termo callback é muito usado
//nesse padrão observer. (Obs.:Esse 1ºvídeo está no YouTube.)  
//Vamos começar criando uma Array chamada de fabricantes e vai receber nome de empresas e vamos fazer o seguinte: colocar uma função chamada imprimir nome e va-
//lor do índice e dentro do objeto vou colocar console.log()abrindo um template string '${indice + 1}ponto e vai imprimir o nome;
//Então vamos pegar tanto o nome(18)qu eu recebi como parâmetro e tbm.como índice recebido como parâmetro e em seguida(19)vou imprimir o índice mais 1 já que o 
//índice de uma Array começa do 0(Zero), então eu quero imprimir a partir do índice 1 e do lado ele tbm.vai imprimir o nome que ele recebeu como parâmetro, essa
//assinatura(linhas 18 e 19)de uma função que pode ser passada p/uma função FOR EACH;a idéia do Callback é da gente passar uma função p/outra função e qdo.deter-
//minado evento acontecer, essa função que a gente passou vai ser disparada(chamada de volta), essa função Callback pode ser chamada várias vezes ou apenas uma
//única vez, dependendo do contexto que se está passando a função/ões. Então vou chamar p/ver o comportamento colocando fabricantes.forEach(imprimir), onde o 
//ForEach é uma função de fabricantes(16)e fabricantes é uma Array e dentro do Array eu tenho essa função ForEach, da qual p/cada elemento do Array ele chame a 
//função imprimir e o ForEach vai passar como parâmetro p/essa função o nome do elemento que ele tá percorrendo e tbm.como segundo parâmetro vai passar o índice.        
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//1. Mercedes
//2. Audi
//3. BMW
//         
//[Done] exited with code=0 in 0.712 seconds
//Continuando da linha 15: p/cada elemento que ele encontrar dentro do Array, ele vai chamar de volta(callback)a função da linha22 p/cada elemento encontrado, 
//onde ele vai passar os parâmentros corretos(18) e vai imprimir no console(19)o valor de índice e nome, uma vez executado a sintaxe de código, temos o retor-
//no conf.linhas 24 a 26.
//Poderíamos fazer p/ex.:fabricantes.forEach()onde vou criar uma função que recebe valor "a" como corpo da função e em seguida vou colocar console.log(a), ou
//seja, o valor de "a". Quem é o valor de "a"?Nota-se que a função function imprimir(nome, indice)têm dois parâmetros(nome e índice)e agora nesse caso temos a
//somente o valor "a" como único parâmetro e esse parâmetro será exatamente cada um dos elementos desse Array["Mercedes","Audi","BMW"]; então ao executar:
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a) {
    console.log(a)
})
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//1. Mercedes
//2. Audi
//3. BMW
//Mercedes
//Audi
//BMW
//
//[Done] exited with code=0 in 0.442 seconds
//Conf.retorno linhas 49 a 51, percebe-se que o callback nada mais é do que a gente passar uma função e que essa função será chamada qdo.um evento acontecer, ou
//seja, o evento é um loop, pois qdo.ele encontra um novo elemento, ele dispara um evento relativo à função chamada, onde no nosso caso é cada um dos elementos
//percorridos no Array["Mercedes","Audi","BMW"], então p/cada elemento ele chama o callback passando o próprio elemento e o índice, encontrou outro elemento, ele 
//chama de novo a função callback chamando o nome do elemento e o índice e assim sucessivamente.(Elemento=Nome, e 1.,2.,3.são os Índices).