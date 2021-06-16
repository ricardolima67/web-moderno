//08/05/2021: 64. Usando a Estrutura FOR/IN.
//
//Continunado ainda o exemplo de FOR, onde nesta aula será abordado o assunto FOR/IN, é uma forma que não se precisa tanto controlar a variável "i" digamos assim qdo.estivérmos
//trabalhando com array, mas de qualquer forma vamos continuar recebendo essa variável "i" como parâmetro, o FOR/IN trabalha percorrendo os atributos de uma determinada estrutura
//onde pode-se fazer for/in em um objeto, ou em cima de uma array. O for/in e o for não seriam uma alternativa tão interessante comparada com outras formas de se percorrer uma array,
//como p/ex.: FOR/IT, MAP, REDUCE, FILTER que são ferramentas específicas do Array.Então vamos criar uma constante chamada notas recebendo um array[]c/as mesmas notas da aula passada(63)
//e vamos usar o For/In nesse Array, o For/In não vai nos dar as notas em si, ele vai dar o índice de cada um dos elementos, é com o se fosse usar os atributos de uma Array, como o Array
//é uma estruta indexida, então os atributos de uma Array seria como 1º elemento o 0(zero), depois o 2º elemento o 1(um), depois o 3º elemento o 2(dois),onde ele vai percorrer pelos 
//índices e não pelos valores; continuando vamo colocar for com o índice "i"(i in notas), ou seja, p/cada um dos elementos da nota ele vai nos devolver um índice "i", sendo uma forma mais
//interessante do o exemplo da aula passada(63)porque tínhamos que incrementar e aqui no for/in ele já vai nos dar os índices corretamente, só que não é uma forma muito interessante, não
//usado muito frequentemente, existindo alternativas mais interessantes; continuando vamos colocar console.log p/imprimir no console a nota colocando "i"vírgula e colocar notas em array
//índice "i", conf.retorna nas linhas 19 a 23.
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) {
    console.log(i, notas[i])
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//0 6.7
//1 7.4
//2 9.8
//3 8.1
//4 7.7
//
//[Done] exited with code=0 in 0.651 seconds
//
//Da memsa forma que a gente consegue pegar os atributos de uma array que são os seus índices, a gente consegue pegar os atributos de um objeto:
//vamos criar uma constante chamada pessoa recebe {}objeto=>que vai ter nome, sdobrenome, idade, peso, continunando vamos colocar um for(atributo in pessoa), ou seja, o atributo de um
//objeto e em seguida colocar console.log()pegando o atributo e pagando o atributo associado a pessoa(pessoa colchetes atributo)fechando o backchick(a crase)p/fechar o template string,
//executando, retorna conf. linhas 42 a 45:
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//nome = Ana
//sobrenome = Silva
//idade = 29
//peso = 64
//
//[Done] exited with code=0 in 0.498 seconds

//Só p/deixar registrado, se colocarmos console.log(aributo) depois do laço, nós vamos ter o atributo: peso conf.linha 67.
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//nome = Ana
//sobrenome = Silva
//idade = 29
//peso = 64
//peso
//
//[Done] exited with code=0 in 0.497 seconds
//continuando da linha 49: o idealé que se coloque um let dentro do atributo conf.linha 78 p/que não se tenha acesso ao atributo peso.(Esse recurso tbm.deve ser feito na linha 15).
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//nome = Ana
//sobrenome = Silva
//idade = 29
//peso = 64
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js:12
//console.log(atributo)
//            ^
//
//ReferenceError: atributo is not defined
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js:12:13)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 0.479 seconds
//Sempre que pudérmos usar os recursos da versão mais nova do JavaScript, use porque eles trazem algumas coisas interessantes, então a forma ideal seria usar o let
//p/garantir que índice"i"(linha 15)fique apenas dentro desse objeto e na linha 78 o atributo vai estar dentro do laço sendo uma variável local daquele laço, ou seja, pertencente
//ao escopo do laço FOR.