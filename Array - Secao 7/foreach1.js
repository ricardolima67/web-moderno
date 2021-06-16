//14/06/2021: 115. Foreach #01.
//
//Nessa aula vamos começar a ver formas diferentes de percorrer uma array, ou seja, passar pelo elementos do array p/fazer algum tipo de operação,
//seja uma operação matemática, seja extrair alguns atributos de um determinado objeto p/se fazer uma lógica, etc... 
//Criar uma constante de aprovados com seus elementos e vamos percorrer a lista dos aprovados, nesse momento vamos passar por meio for each uma   
//CallBack e a mesma será chamada p/cada interação que for feita no array, ou seja, p/cada novo elemento percorrido no array, ele vai chamar a 
//callback passando o próprio elemento e o índice correspondido daquele elemento passando uma função recebendo dois parâmentros, onde o primeiro
//parâmetro é o próprio elemento que a gente está percorrendo e o segundo parâmetro vai ser o índice do elemento que está sendo executado naque-
//le momento; nome(do aprovado)e o índice associado na interação do laço for e em seguida imprimir no console usando um template string de índi-
//ce mais um(p/pegar o primeiro índice que é zero na array e somar mais um(então 0+1=1) e vamos colocar o nome do aprovado que está no array, o
//retorno da impressão fica conf.linhas(18 a 21).
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
//Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//1) Agatha
//2) Aldo
//3) Daniel
//4) Raquel
//
//Done] exited with code=0 in 1.081 seconds
//
//Pergunta?Somos obrigados a passar o índice e o nome?R.:Não!, não somos obrigados passar nenhum parâmetro numa função JavaScript, cujo assunto já
//foi abordado anteriormente, e essa regra se aplica nesse cenário, então vamos ver outro exemplo, onde nesse caso vamos passar uma arrow function
//apenas com um único parâmetro com console.log p/imprimir o nome, cujo retorno é a impressão de cada um dos nomes conf.linhas(34 a 37).
aprovados.forEach(nome => console.log(nome)) 
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//1) Agatha
//2) Aldo
//3) Daniel
//4) Raquel
//Agatha                //Continunando da linha 27, esse método ignora o índice(1,2,3,4)(34 a 37)em comparação às linhas(30 a 33).
//Aldo
//Daniel
//Raquel
//
//[Done] exited with code=0 in 0.414 seconds
//
//Outra alternativa é a gente armazenar uma função numa variável e passar essa função p/parâmetro p/o for each, então podemnos criar uma constante:
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//
//Agatha
//Aldo
//Daniel
//Raquel
//
//[Done] exited with code=0 in 0.425 seconds
//
//Obs.: Existe um terceiro parâmetro passado no for each que é o próprio array na função callback onde retorna na impressão do console conf.linhas
//(62 a 69), imprimindo o índice, o nome e o próprio array. 
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Array - Seção 7\tempCodeRunnerFile.js"
//1) Agatha
//[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
//2) Aldo
//[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
//3) Daniel
//[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
//4) Raquel
//[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
//
//[Done] exited with code=0 in 0.434 seconds