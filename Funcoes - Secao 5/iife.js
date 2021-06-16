//24/05/2021: 88. IIFE

//Nessa aula terá uma abordagem sobre função auto invocada, uma função declarada mesmo sem nome, função anônima, e que no momento da declaração, eu chamo/invoco
//a execução desta função.  
//Uma das vantagens em estar se usando uma função invocada é qdo.estamos principalmente usando o browser e a gente quer fugir do escopo global(evitar de manipular
//dados no WINDOW do browser).Quando a gente cria uma função auto invocada e no momento que o script é lido, aquele trecho de código que está dentro da função vai
//ser chamado, vai ser executado, porém tudo o que for criado dentro da função vai ser escopo local daquela função e não escopo global.
//Isso é muito importante, pois se algo for compartilhado com toda a nossa aplicação, principalmente algo que é variável, muitas pessoas, muitos códigos podem ma-
//nipular aquele valor variável e gerar bugs inesperados em nossa aplicação.
//Como o escopo global que é o window dentro do browser é compartilhado por todos os seus scripts que rodam no browser, temos que ter um cuidado muito grande em 
//manipular coisas diretamente dentro do window, portanto se a gente puder fugir do escopo global com certeza isso será muito melhor e mais seguro p/ os nossos 
//scripts, e uma das formas de driblar essa situção, é criar uma função auto invocada.
//  IIFE -> Immediately Invoked Function Expression: essa sigla quer dizer que é uma expressão de função(function expression), ou seja, Expressão de Função Ime-
//diamente Invocada,então,vou colocar entre parêntesis definindo uma função anônima dentro do parêntesis(19)colocando function(),e em seguida preencher o corpo da
//função{}colocando objeto dentro das chaves a sintaxe console.log('Será executado na hora!')que essa função for declarada, essa função ainda não foi terminada em
//sua definição: (function() {    console.log('Será executado na hora!')}) pois da maneira que está escrita ela não será invocada ainda, então continuando, signi-    
//fica tbm.que eu estou fugindo neste contexto do escopo mais abrangente, pois tudo o que for definido dentro desta sintaxe(19 a 22)qualquer constante, qualquer 
//variável, qualquer objeto estará dentro do contexto dessa função(sintaxe) e p/finalizar faz-se necessário chamar com parêntesis()linha 22, esse é o padrão IIFE:
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()   
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Será executado na hora!
//Foge do escopo mais abrangente!
//
//[Done] exited with code=0 in 0.958 seconds