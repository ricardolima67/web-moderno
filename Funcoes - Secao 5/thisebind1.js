//13/05/2021: 71. "this" e a Função bind #01
//
//Continuando o assunto de "this", nessa aula vai ser comentado o assunto BIND conf.mencionado na aula passada(70)p/ver algumas situações que o "this" pode causar problemas 
//e mostrar o uso do BIND p/deixar o "this" mais determinante.
//Vamos criar uma constante chamada pessoa que recebe um objeto{} e dentro desse objeto vamos criar uma saudação 'Bom dia!' que vai ser um atributo dele, e em seguida vamos
//criar dentro desse objeto uma função()=>vazia onde vai receber novamente objeto{}(foi comentado que objeto é uma coleção de par chave/valor), então temos tbm.como recurso
//criar uma função nesse formato(vazio)sendo um recurso novo do ECMASCRIPT2015 e dentro desse novo objeto vamos colocar console.log()onde vamos chamar this.saudação), ou se-
//ja, estamos acessando saudação de quem?R.:Do objeto do qual é o dono dessa função(que no caso aqui é o objeto pessoa); aqui trata-se de um exemplo mais voltado p/ o mundo
//ÓÓ, onde estamos acessando um atributo de um objeto usando o "this", se a gente tentasse acessar sem o "this" não iria dar certo, mas usando o "this" ele vai acessar o 
//atributo saudação de pessoa que é o objeto, que é o dono da função falar; então, continuando vamos chamar pessoa.falar(), executando vamos ver a impressão conf.linha20:
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        consoloe.log(this.saudacao)
    }
} 

pessoa.falar()
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Bom dia!
//
//[Done] exited with code=1 in 0.441 seconds
//Se tirármos o "this" da linha14 e executar, vamos ter um erro no retorno dizendo que não sabe/não conhece essa variável saudação:
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        consoloe.log(saudacao)
    }
} 

pessoa.falar()
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js:4
//        consoloe.log(saudacao)
//        ^
//
//ReferenceError: consoloe is not defined
//    at Object.falar (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js:4:9)
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js:8:8)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.248 seconds
//
//Vamos agora armazenar essa função falar em uma variável(podemos fazer isso!)dentro da sintaxe de código feita anteriormente e se executarmos a função falar()conf.linha 63,
//vai gerar um problema e de cara fica muito fácil perceber que gerou um efeito colateral, pois saudação(linha57)está apontando p/um "this" diferente, que não é mais o objeto
//pessoa(54)e esse objeto que está sendo apontado(linha54)a partir da função linha 63 não possui saudação dentro dele e o resultado deu undefined(conf.linha65).  
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        consoloe.log(this.saudacao)
    }
} 

pessoa.falar()
const falar = pessoa.falar
falar()
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//undefined
//
//[Done] exited with code=1 in 0.061 seconds
//Continuando a explicação da linha 53, temos:
// Conflito entre Paradigmas: Funcional e ÓÓ
//Então temos um conflito entre o mundo da programação funcional e o mundo da programação orientada a objeto, porque o fato da gente armazenar uma função numa variável conf.
//linha62 em meio a este contexto(linha63)chamando direto, não estamos chamando a função falar(linha61) a partir do contexto pessoa, falar()diretamente dentro de uma função
//do Node, ele está em outro contexto e por isso foi gerado um problema no "this"(linha57).
//O que podemos fazer nesse caso é usar o BIND criando uma constante chamada falarDePessoa que recebe pessoa.falar e agora associada a essa função(pessoa.falar)existe uma 
//função chamada BIND, o bind é utilizado p/qdo.a gente passe um objeto que queremos que seja resolvido o "this", então quem é o "this" dentro da função falar?R.:O "this"
//será essa constante que foi definida na linha54, então passando (pessoa) como argumento p/a função bind, significa que sempre a partir da função pessoa.falar.bind(pessoa)
//o "this"(linha57)será resolvido p/a constante pessoa(linha54), então ao fazer o teste a gente pode falarDePessoa(), executando, retorna novamente apontando p/o objeto certo
//linha79, de acordo com a resposta na linha94. 
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        consoloe.log(this.saudacao)
    }
} 

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\Funções - Seção 5\tempCodeRunnerFile.js"
//Bom dia!
//undefined
//Bom dia!
//
//[Done] exited with code=1 in 0.575 seconds
//Continuando da linha 77: então nesse caso, o bind é o método responsável p/amarrar(pessoa)linha89 a um determinado objeto p/ele ser o dono da execução naquele método sempre
//que o mesmo for chamado, em outras palavras significa que qdo.a gente chamar essa função falarDePessoa(linha89)referenciando sempre o "this", o "this" será sempre o objeto
//(pessoa)linha89que passamos p/a função bind.
//Note que o método falar(pessoa.falar)linh89 e linha86 não foi alterado com a função bind; a função bind retorna outra função e aí sim nessa função está amarrada para pessoa 
//linha89 independente da forma como ela for chamada, pode-se chamá-la de todas as formas possíveis, essa instância(falarDePessoa)de função que é o resultado dessa função  
//pessoa.falar.bind(pessoa)com o bind.