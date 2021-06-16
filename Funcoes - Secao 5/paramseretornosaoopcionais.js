//10/05/2021: 67. Parâmetros e Retorno São Opcionais
//
//Parâmetros e retorno dentro de uma função JavaScript são opcionais, é um pouco estranho mesmo que se defina que uma função tenha três parâmetros, temos a possibilidade de passar 
//só um, ou de passar quatro, podemos sim, passar vários parâmetros mesmo que só tenham poucos ou passar mais ou menos, ou retornar de forma opcional, pricipalmente se o profissional
//vem de um mundo de linguagens fortemente tipadas ou mais rígidas.  
//O exemplo a seguir em um determinado momento a função retorna um valor e em outro momento ela simplesmente não retorna, trata-se de uma possibilidade real em JavaScript:
//Vamos passar dois parâmetros p/uma função chamada área, onde vamos fazer um teste e em um determinado momento ela retorna um valor e em outro não, então a primeira coisa que vamos 
//fazer é calcular a área criando uma constante chamda área recebe largura vezes altura e em seguida vamos fazer um teste se(if)a área for maior do que 20, em vez de retornar um valor
//vamos colocar um console.log conf.linha 14, continuando vamos colocar um ELSE e somente no else vamos chamar o retorno passando o resultado de retorno dessa função conf.linhas15 e 16
//e p/imprimir no console seguir conf.linha 20, temos como resposta 4 conf.função linha 11:
function area(largura, altura) {
    const area = largura * altura 
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//4
//
//[Done] exited with code=0 in 2.856 seconds

//Podemos chamar área 2, o 2ºvalor será undefined porque não definimos nada, ou seja undefined vezes um valor vai dar Not a Number(NaN), porque NaN não é maior do que 20if(area > 20),
//onde essa expressão retorna Falsa.  
function area(largura, altura) {
    const area = largura * altura 
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//NaN
//
//[Done] exited with code=0 in 1.045 seconds

//Vamos agora passar a área sem nenhum parâmetro conf.linha 53, tbm.vai dar um NaN conf.linha 55:
function area(largura, altura) {
    const area = largura * altura 
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area())
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//NaN
//
//[Done] exited with code=0 in 0.553 seconds

//Continuando, podemos passar a função área passando mais parâmetros do que ela suporta conf.linha 70, onde retorna 6 como resposta(linha72), porque ele tá calculando largura vezes
//altura, onde os outros parâmetros são ignorados(17,22e44).
function area(largura, altura) {
    const area = largura * altura 
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 3, 17, 22, 44))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//6
//
//[Done] exited with code=0 in 0.569 seconds 

//Agora vamos passar um par de valores que um resultado maior do que 20, conf.linha 86(5x5=25) ele imprimiu no console valor acima do permitido conf.linha88 onde ele entrou
//no teste linha81 e o resultado impresso nesse console ref.ao retorno da função linha87 foi undefined por ser um valor acima da função linha80.
function area(largura, altura) {
    const area = largura * altura 
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(5, 5))
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Valor acima do permitido: 25m2.
//undefined
//
//[Done] exited with code=0 in 0.839 seconds