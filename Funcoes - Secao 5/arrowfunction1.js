//13/05/2021: 73. Funções Arrow #01.
//
//Na versão do ECMASCRIPT2015(o AS6)foi introduzido uma função Arrow que têm dois objetivos, ser mais curta, mais
//enxuta e tbm.ter o "this" associado ao contexto do qual a função foi escrita.
let dobro = function (a) {
    return 2 * a
}
//Agora reescrevendo essa função p/uma função arrow(por isso que foi colocada a variável let p/fato de ficar sobre-
//escrevendo a mesma variável), então tiramos o let e function substituindo por uma seta(=>)e colocando o return no
//mesmo formato anterior, a função arrow é sempre uma função anônima, portanto se eu quiser chamá-la depois, eu te-
//nho que armazená-la em alguma variável ou constatnte.

dobro = (a) => {
    return 2 * a
}

//Posso escrever essa função de uma forma ainda mais reduzida, que é tirando os parêntesis se tiver um único parâ-
//metro e posso usar o fato de qdo.tirar as chaves, ou seja, tirar o corpo da função, eu tenho um retorno implícito:
//ou seja, esse tipo de escrita: dobro = (a) => 2* a => é muito usado qdo.tem funções de uma única linha, uma função
//que faz um único trabalho, então implicítamente o return é chamado.
//P/executar essa função dobro, colocar console.log()conf.linha23, retorna o dobro do pi(linha25)
dobro = (a) => 2* a
console.log(dobro(Math.PI))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//6.283185307179586
//
//[Done] exited with code=0 in 0.196 seconds

//Criando outro exemplo; colocar conf.linha30 a 32:
let ola = function() {
    return 'Ola'
}
//Então refatorando essa função acima p/uma função arrow(=>):
ola = () => 'Ola'       //tbm.pode ser colocado essa função c/underline: ola = _ => 'Ola', o mais usado é c/parêntesis.
console.log(ola())      //Assim como o parêntesis, o underline tbm.é um parâmetro, e sem parâmetro a sintaxe não executa.    
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Ola
//
//[Done] exited with code=0 in 0.61 seconds