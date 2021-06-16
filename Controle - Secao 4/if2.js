//05/05/2021: 57. Usando a Estrutura IF # 02.
//
//Continuando falando alguns detalhes do IF, suas características e alguns cuidados que devemos ter na hora de escrever o código, então vamos criar uma função chamada teste1(num)que
//vai receber um número {} e dentro das chaves(função)colocando IF(num > 7) e na linha debaixo digitar console.log(num)onde nesse caso vamos escolher não colocar o bloco associado a 
//esse IF, depois vamos colocar outro console.log colocando final e vamos fazer um teste para essa função(teste1=6 e teste1=8):
function teste1(num) {
    if(num > 7)
       console.log(num)
       console.log('Final')
}

teste1(6)
teste1(8)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Final
//8
//Final
//
//[Done] exited with code=0 in 0.995 seconds
//Nesse caso o uso do bloco, que é a definição do bloco em JavaScript são as chaves{} é opcional por dentro de uma estrutura IF, só que ele fica apenas com uma única setença de código
//associada àquele bloco IF, então nesse caso, por mais que tenhamos identado nas linhas 7 e 8(quem é baseado em identação é o Phyton), o JavaScript desconsidera totalmente a identa-
//ção, pode-se colocar o código bagunçado do jeito que for, pode-se colocar até duas sentenças de código na mesma linha desde que se coloque ponto e vírgula, mas o fato é que apenas
//a sentença de código da linha 8 está associada com o bloco IF ref.a linha 7, se queremos colocar várias sentenças associadas a um bloco, nós temos que colocar chaves, se queremos
//uma única sentença podemos usar chaves ou não, temos essa opção, o professor prefere sempre usar chaves(mesmo que seja uma única sentença de código),convencionar sempre usar chaves.
//Nesse caso(linha 9)essa sentença de código está sempre fora do IF, então ela sempre será executada independente se o número na linha 7 é maior ou menor do que sete; então qdo.exe-
//tuamos retorna que a linha 12(o 1ºcaso)não retornando o número 6 mostrando final(linha15) e no 2º caso(linha 13): retornou o nº 8 mostrando final, conf.linha 16 e 17.  
//Então se pudéssemos identar de forma correta: a linha 31 ref.a esta sentença que está associada ao bloco IF linha 30 e a outra sentença console.log('Final')não tem nenhuma relação 
//com o IF,então vamos quebrar a linha p/ficarem separados e perceberemos que sempre será executada mesmo se if(num > 7)for verdadeiro ou falso,a prova disto é o retorno da mesma forma
function teste1(num) {                                                                                                  //conf.linhas 39 a 41.
    if(num > 7)
       console.log(num)

       console.log('Final')
}

teste1(6)
teste1(8)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//Final
//8
//Final
//
//[Done] exited with code=0 in 4.619 seconds
//
//A outra coisa a ser abordada é mais uma advertência para termos cuidado, vamos criar uma função chamada function teste2(num)recebendo na função{if(num > 7)}, abrindo função
//novamente {console.log(num)}e vamos testar 6 e 8(linhas 53 e 54), onde será impresso no console conf.linhas 56 e 57.
function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//6
//8
//
//[Done] exited with code=0 in 0.351 seconds
//Continuando da linha 46, temos que neste caso ele imprime tanto o 6 como tbm. o 8, por quê ele imprimiu o 6 se o 6 não é maior do que 7?R.:P/explicar melhor o que está 
//acontecendo com esta impressão é que o bloco de código{linha 48 a 50}não está associado ao IF, onde na linha 48 a 50 temos uma sentença de código vazia terminada c/ponto e vírgula 
//conf.linha 66 sendo essa sentença de código vazia que não faz absolutamente nada que está associada ao IF linha 65, então ;ponto e vírgula é um código válido e qdo. executado ele
//vai deixar ou não de executar o ponto e vírgula que não está fazendo nada e o bloco(linha 69 a 71)como não tem nemhum tipo de filtro vai sempre entrar no bloco e vai executar a 
//sentença de código da linha 70; então, qual é a moral da história?R.:NÃO USE PONTO E VÍRGULA NA DEFINIÇÃO DE ESTRUTURAS DE CONTROLE DO TIPO IF.
function teste2(num) {
    if(num > 7)
    ; 
    
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)
//Então a sintaxe de código da linha 48 com o (;)ponto e vírgula não é um código certo na estrutura de controle do tipo IF, o ideal é criar os blocos/estruturas usando chaves{}.