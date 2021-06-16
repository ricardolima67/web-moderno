//20/05/2021: 83. Closures
//
//Nesta aula vamos falar sobre Closure que é um conceito muito importante dentro da linguagem JavaScript.
//Conceito de Closure: é o escopo criado quando a função é definida/declarada(de acordo com o contexto léxico), o escopo vai permitir que a gente acesse
//as variávies que foram declaradas externas à função, ou seja, uma cláusura, algo que envolve a função(o que está em volta dela); essas variávies exter-  
//nas que foram declaradas à função tem tudo a ver com contexto léxico e com o contexto no qual a função foi declarada dentro da parte física do código.
// Contexto Léxico em Ação!
//Criar uma constante X chamada global, vou criar uma função chamada fora(13){}e dentro das chaves(objeto)vou declarar dentro dessa função um X local(14)  
//e vou criar uma função dentro(15) p/conectar com a função que está fora(13), ou seja, o contexto do qual essa função foi declarada(15) foi dentro dessa
//função fora(13), em seguida vou tentar acessar o valor de X colocando return x(16),
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x 
    }
    return dentro
}

const minhaFuncao = fora() 
console.log(minhaFuncao())
//Continuando da linha(10)temos dois X, um da constante(ref.a definição da função fora(14)) e outro do global(11)(ref.a definição de dentro do arquivo),
//em seguida vou colocar um return dentro(18), e dentro do arquivo(13 a 19) eu criar um constante(21)onde vou chamar a função fora(13) e agora vou chamar 
//a função minha função(22)p/ver exatamente o que ela retorna, isto é, qual o valor de X ela retorna; imprime conf.linha 27:
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Local
//
//[Done] exited with code=0 in 2.879 seconds    
//Continuando da linha 25: O local físico no qual uma função foi declarada é muito importante, nesse caso o local físico que a função dentro(15 e 16) 
//que foi retornada a partir da função fora(13)que foi declarada dentro da função(15 e 17)e aí dentro(linhas13 a 17)tinha uma variável(denominada cons-
//tante(14))com o valor 'Local', então o Closure que é uma função do JavaScript possui a memória do local que foi definido e esse escopo que está ex-
//terno a função tbm.vai junto qdo.a gente acessa uma função, ou seja, a função lembra as suas origens, pois tem essa memória local de onde ela veio.