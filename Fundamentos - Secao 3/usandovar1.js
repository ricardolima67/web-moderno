//21/04/2021: 31.Declaração de Variáveis com Var #01.

//Nesta aula vamos começar a fazer uma série de exercícios trabalhando c/o VAR e tbm.c/o LET, os princípios principais do LET é aplicado tbm.à constante CONST, a diferença básica é
//que o LET poderemos mudar o vr. por tratar-se de uma variável e o CONST por ser constante não poderemos mudar o valor; então portanto o que for falado p/let tbm.se aplica no const.
//Vamos então criar vários blocos de códigos(usando chaves{})conf.linha5, onde VAR será recebe 'Será???' dentro de 04 chaves{}, ou seja, dentro de 04 blocos de código:
{
    {
        {
            {
                 var sera = 'Será???'
                }
            }
        }
    }
console.log(sera)  //Linha15: imprimir/tentar pegar o valor de VAR, retornando: [Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos
//\tempCodeRunnerFile.js"   Será???  [Done] exited with code=0 in 1.024 seconds.
//Outras linguagens de programação tem um conceito chamado "ESCOPO"; e o que seria o escopo?R.:Escopo é o local onde aquela variável é visível, onde declaramos uma variável dentro do 
//programa deixando-a o mais visível possível e até onde ela é acessível. Em outras linguagens qdo.temos bloco que definem uma varável dentro de um bloco, a mesma ficaria visível
//apenas dentro do bloco e não fora dele, então se fizéssemos da forma abaixo:
{
    {
        {
            {
                 var sera = 'Será???'
                 console.log(sera) 
                }
            }
        }
    }
//    [Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//    Será???
    
//   [Done] exited with code=0 in 1.076 seconds.
//Continuando a linha19: Então em qualquer linguagem de programação fazendo esse tipo de código conf.linhas20 à 29, a variável "SERÁ" estaria visível, portanto ao executar as linhas
//20 à 29 temos o retorno/a impressão da palavra 'Será???' conf.linhas30 à 33 porque estamos dentro de um bloco onde a variável linha24 foi declarada dentro desse bloco tornando-a
//visível apenas dentro desse bloco. Mas no caso da variável VAR isso não acontece, pois se colocarmos a linha25 fora do bloco conf.ex.abaixo na linha49 e execurtamos as linhas38 à
//49, a linha49 vai imprimir tbm. 'Será???' conf.linhas 51 à 55, ou seja, vamos enxergar a variável VAR.
{
    {
        {
            {
                 var sera = 'Será???'
                 console.log(sera) 
                }                     
            }
        }
    }

console.log(sera) 

 //   [Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
 //   Será???
 //   Será???
    
 //  [Done] exited with code=0 in 1.259 seconds.

//A variável VAR dentro de um bloco de código que não seja uma função ficará visível p/todo mundo, mesmo p/aqueles que estiverem fora daquele bloco. Exite um conceito chamado
//Hoisting(Elevação): é um mecanismo JavaScript onde as variáveis ​​e declarações de função são movidas para o topo de seu escopo antes da execução do código. Inevitavelmente, 
//isso significa que não importa onde as funções e variáveis ​​são declaradas, elas são movidas para o topo de seu escopo, independentemente de seu escopo ser global ou local.
//Então a variável 'Será???' na linha42 embora pareça que esteja dentro do bloco composto pelas linhas38 à 49, ela não estará e será visível fora do bloco mesmo que colocada 
//dentro dessas linhas38 à 49, em outras linguagens(podendo ser até o background da máquina) a linha42 estaria visível apenas dentro desse bloco linhas38 à 49, o que chamamos
//de ESCOPO. Mas no caso do JavaScript é o contrário, uma variável definida com o VAR só tem dois escopos possíveis.
//Continuando, vamos p/outro exemplo p/continuar explicando sobre o VAR, onde será criada uma função, dentro da função que tbm.é um bloco(entre chaves{}) que vamos definir
//uma variável VAR chamada LOCAL onde recebe 123, sendo um bloco que está associado a uma função e vamos chamar essa função de teste p/executar esse código e em seguida vamos 
//tentar acessar essa variável chamada de LOCAL conf.linhas91 à 96, será que conseguiremos acessar essa variável LOCAL fora do escopo da função?R.:Não, conf.linhas68 à 84 e se
//fizérmos conf.linhas95 à 103 colocando o console.log dentro do bloco, o mesmo vai retornar 123 porque vai estar dentro do escopo conf.linhas86 à 89.

//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:6
console.log(local)
            ^
//A linha74:Local não está definida porque qdo.definimos uma variável dentro de uma função, o escopo dessa variável está dentro da função apenas e não estará visível fora da função.
//at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:6:13)
//ReferenceError: local is not defined  
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js:6:13)
//    at Module._compile (module.js:635:30)
//   at Object.Module._extensions..js (module.js:646:10)
//   at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//   at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3

//[Done] exited with code=1 in 0.555 seconds

//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//123

//[Done] exited with code=0 in 0.512 seconds

function teste() {
    var local = 123
}

teste()
console.log(local)

function teste() {
    var local = 123
    console.log(local)
}

teste()

//Então vamos abrir o Browser p/continuar falando sobre VAR: abrir o console vamos criar: var a recebe 123(var a = 123); existe um objeto dentro do browser chamado Window(Janela):
//É um ojeto global que tem tudo dentro dessa janela/aba que for declarado fora de função e estará visível globalmente na nossa aplicação, então em qualquer lugar de nossa aplicação
//desenvolvida dentro de uma página rodando tudo estará dentro de Window. 
//No momento que foi criado essa variável "a" que armazena 123 e foi colocada fora de uma função automaticamente essa variável está dentro de window.a que vale 123, ou seja, quando
//criamos uma variável fora de uma função, essa variável é Global, ela estará disponível dentro do objeto window. Então vamos supor que em um outro momento do nosso programa nós 
//criamos uma variável a e a chamamos de 'teste'(var a = 'teste'): ao dar enter retorna UNDEFINED, demostrando que acabamos de sobrescrever dentro do objeto global a variável "a",
//portanto se fizérmos window.a - enter: vai aparecer "teste", sendo esse o grande problema em criar variáveis globais em um programa JavaScript, porque como todas as variáveis vão
//parar no mesmo lugar dentro de window(dentro do NODE não vai p/window, o objeto global do NODE é chamado de Global).
//Por quê é importante fugir do escopo global?; por quê devemos evitar criar variáveis que vão p/o escopo global?R.: Porque qdo.criamos uma variável e ela vai p/o escopo global, 
//existe a vantagem entre aspas de poder acessar essa variável de qualquer lugar do nosso sistema, mas por outro lado qualquer sobrescrita dessa variável pode gerar um problema 
//muito sério, então criamos uma variável que a gente espera receber um objeto e por algum motivo outra pessoa usou a mesma variável e colocou uma String gerando um problema no 
//nosso programa e não saberemos por quê, pois todo mundo está acessando o escopo global com um par de chave/valor sobrescrevendo o que havia sido definido anteriormente.
//Em se tratando de VAR(variável) só se tem dois escopos possíveis, ou ele é nível global(visível na nossa aplicação inteira falando mais do ponto de vista do Browser do que 
//propriamente do NODE), pois o Node tem um sistema de módulos(cada arquivo é um módulo) ou cria-se uma variável VAR no escopo de FUNÇÃO como foi apresentado acima nessa aula.