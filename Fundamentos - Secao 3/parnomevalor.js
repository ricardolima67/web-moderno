//26/04/2021: 40.Par Nome/Valor

//Essa aula é bem básica e trata-se de um conceito muito importante não só em JavaScript, mas tbm.p/qualquer linguagem de programção. Um Objeto é uma coleção de Chave e Valor, é um
//conceito que permeia a linguagem não só no Objeto, mas em qualquer lugar.
//A idéia do Par/Nome/Valor/Chave/Chave-Valor/Identificador e o seu valor está presente tbm. qdo.declaramos uma constante ou uma variável, de acordo com a linha 9, nós colocamos 
//constante com seu identificador(que pode ser o nome da variável ou da constante, ou a chave única dentro de um determinado contexto) e em seguida (=)recebe o valor dessa variável
//ou constante.      
//par nome/valor
const saudacao = 'Opa'  

//Essa linha 9 define uma variável ou uma constante pelo seu Contexto LÉXICO confome aula: 22/04/2021: 37.Usando Let em Loop #02: linhas 24 à 32; o Contexto
//Léxico é o local no qual a variável/constante foi definida fisicamente em código (Léxico tem a ver com palavra), p/ex.: na linha 9 foi definido no nível do arquivo que estamos 
//trabalhando(par/nome e valor) ou tbm. no browser em contexto global(window).
//Dentro de um programa existem vários contextos sendo executados, p/ex.: uma função define um contexto(um contexto local dessa função), isso não quer dizer que dentro da função se 
//tentarmos acessar uma variável/constante que não está definida na função, o sistema vai procurando nos contextos mais abrangentes; o fato de termos uma função trata-se de um con-
//ceito mais restrito, sendo um outro contexto léxico a ser considerado.
//Então na linha 23 vamos definir uma função chamada exec e dentro da função vamos definir uma outra estrutura par/chave/valor, cujo nome é saudação e o valor é uma string 'Falaaa'
//conf.linha 24 que do contexto da palavra, do local que ela foi definida, define o contexto dessa função.
//Então aqui, portanto, temos um outro contexto léxico, porque olhando p/a escrita do código: definimos essa constante dentro dessa função, isso significa que do contexto da palavra,
//do local que ela foi definida, define o contexto dessa função. Podemos tbm. retornar o valor dessa saudação da linha 22, conforme descrito na linha 24:

function exec() {
    const saudacao = 'Falaaa'      
    return saudacao                 
} 

//Nota: O nome saudação é o mesmo nome da constante definida nas linhas 8 e 23, estão em contextos diferentes e portanto não geram conflitos, temos
//na linha 23 um contexto a parte que vai procurar num contexto mais restrito da função, então se ele achar - ele retorna o valor, se ele não achar
//aqui, ele vai do contexto maior(linha 8), caso ele não achar nenhum dos contextos, ele vai dizer que a variável ou a constante não foi definida.
//Objetos são grupos aninhados de chave e valor(pares nome/valor ou identificador/valor, tanto faz). A seguir vamos criar um objeto usando a notação literal de objeto conf.abaixo:
//Aqui na linha 36 dentro do contexto de objeto temos o conceito de par chave/valor, na linha 41 vamos ter um outro objeto tendo uma coleção de par chaves/
//valor que neste caso é o endereço; poderíamos ter p/ex.os mesmos nomes dentro do endereço(41)conflitando com os nomes que estão fora, porque são contextos 
//diferentes, um é o contexto do objeto endereço(41) e o outro é o contexto do objeto cliente(36) tendo como diferenciar, portanto neste caso, poderámos ter 
//chaves com o mesmo nome. Na linha 36 vamos 1º executar a palavra saudação, vai retornar impressão conf.linha 48 a 50:

const cliente = {        
    nome: 'Pedro',       
    idade: 32,         
    peso: 90,         
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
} 

console.log(saudacao)

//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Opa
//[Done] exited with code=0 in 0.44 seconds

console.log(exec())   
//Aqui vamos chamar a impressão da função exec cujo resultado dessa função vai retornar uma variável/constante com o mesmo identificador da de fora, mas como
//são contextos léxicos diferentes vai retornar 'Falaaa' da linha 23.

//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//Falaaa
//[Done] exited with code=0 in 0.73 seconds

//Em seguida imprimir o valor de cliente conf.linha 51, retornando impressão nas linhas: 53 a 59 mostrando uma coleção de chaves e valores alinhados.

console.log(cliente)

//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//{ nome: 'Pedro',
//  idade: 32,
//  peso: 90,
//  endereco: { logradouro: 'Rua Muito Legal', numero: 123 } }
//
//[Done] exited with code=0 in 0.558 seconds