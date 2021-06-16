//10/05/2021: Usando Break Continue
//
//Vimos na aula de Switch uma palavra reservada chamada Break, o break causava no switch um desvio de fluxo, ou seja, é sair de algum ponto e pular algumas linhas e ir p/outro ponto,
//p/ex.: dentro de um switch qdo.ele entrava de um case, executava uma sentença de código e encontrava o break, automaticamente ele desvia o fluxo p/logo depois do switch, além do 
//break que causa desvio de fluxo, temos o Continue. O Break não influencia em um bloco do tipo IF, ele influencia no Switch causando a saída, onde uma vez que é encontrado o break  
//a busca sai p/fora do switch, ele tbm.influencia dentro de um laço For, e dentro de um laço While, assim como o Continue tbm.influencia no laço For e While.
//O uso dessas duas palavras reservadas(break e continue)são desencorajados de certa forma, apesar de serem utilizadas em algumas situações, as mesmas devem ser evitadas os seus 
//usos, porque estar desviando fluxo às vezes pode trazer mais confusão do que clareza.
//Criar uma constante chamada de nums recebe uma array de 0 a 10 e vamos percorrer este array a partir de um for in, onde já vimos que esse X é o índice do array, em seguida vamos 
//{}abrir o bloco p/fazer um teste; se o x for igual a 5, ou seja, se índice for igual a 5, qdo.ele chegar no 6º elemento(ele vai dentro do if encontrar um break), depois conf.linha 
//15, vamos executar esse código:
//Ao executar esse código nós vamos perceber o seguinte: enquanto x for diferente de 5, o sistema vai executando e no momento que ele encontar o x imediatamente ele tbm.vai encontar 
//o break e o break vai fazer com ele saia do for; portanto O BREAK NÃO AGE EM CIMA DE UM BLOCO IF, o break vai agir em cima do bloco mais próximo dele do tipo for, while e switch, 
//então qual é o bloco mais próximo desse break(linha20)p/ele influênciar/desviar o fluxo desse bloco?R.:Nesse caso é bloco associado ao for(linha18), então o break vai fazer com que
//saia/desvie o fluxo da aplicação p/fora do bloco mais próximo dele, neste caso é o bloco for que começa na linha 18 e termina na linha 23.  
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`x = ${nums[x]}`)
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js:5
//    console.log(`x = ${num[x]}`)
//                       ^
//
//ReferenceError: num is not defined
//    at Object.<anonymous> (c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js:5:24)
//    at Module._compile (module.js:635:30)
//    at Object.Module._extensions..js (module.js:646:10)
//    at Module.load (module.js:554:32)
//    at tryModuleLoad (module.js:497:12)
//    at Function.Module._load (module.js:489:3)
//    at Function.Module.runMain (module.js:676:10)
//    at startup (bootstrap_node.js:187:16)
//    at bootstrap_node.js:608:3
//
//[Done] exited with code=1 in 2.363 seconds
//Retornou um erro devido a variável x não estar definida(console.log(`x = ${num[x]}`)), onde estava faltando um "s" em nums; executando novamente, temos:
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//x = 1
//x = 2
//x = 3
//x = 4
//x = 5
//
//[Done] exited with code=0 in 0.829 seconds
//Retornado conf.descrito na linha 09 à linha 11; na verdade queremos ver o índice, então vamos colocar no console o ${x}dessa forma, conf.abaixo:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//0 = 1
//1 = 2
//2 = 3
//3 = 4
//4 = 5
//
//[Done] exited with code=0 in 0.94 seconds
//Retornando índice 0 apontou p/o elemento 1, índice 1 apontou p/o elemento 2..., portanto qdo. o índice passou a ser 5=> if (x == 5), ele encontra o break e vai sair do laço.

//Agora vamos usar o continue no lugar do break, o continue vai interromper a repetição atual e vai p/ a próxima repetição, no caso do break, ele vai interromper o laço e sair
//p/a próxima setença de código fora do laço corrente, fora do laço que ele está relacionado. O continue não age em cima do laço IF, ele vai agir no laço mais próximo, do tipo 
//for, ou do tipo while interrompendo a execução atual e pulando p/a próxima, ele não sai do laço, simplesmente interrompe aquela repetição no qual o continue foi disparado, então 
//ele só vai interromper a repetição cujo valor "y" seja igual a 5, ou seja, qdo.chegar no índice 5 do array ele vai interromper e irá p/a próxima repetição; então ao executar 
//esse código nós vamos perceber o seguinte: no caso do break, ele foi até o índice 4(linha 91 a linha 95)qdo.ele encontrou o índice 5 ele simplesmente interrompeu e saiu do laço
//no caso do continue(linha96 a 104)ele fez o procedimento anterior e qdo.chegou na linha 100: interrompeu, saiu do laço e começou na linha 101 do índice 6 em diante.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue 
    }
    console.log(`${y} = ${nums[y]}`)
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//0 = 1
//1 = 2
//2 = 3
//3 = 4
//4 = 5
//0 = 1
//1 = 2
//2 = 3
//3 = 4
//4 = 5
//6 = 7
//7 = 8
//8 = 9
//9 = 10
//
//[Done] exited with code=0 in 0.76 seconds

//Podemos tbm.criar um rótulo chamado "externo" e esse rótulo ficar associado a um laço for(conf.linha129), ou seja, acabamos de atribuir um nome p/esse rótulo(129), dentro do
//bloco{}vamos ter um outro for(linha130)(entre aspas=seria um FOR interno)que percorre tbm.o mesmo array de números, onde temos o "a" sendo sendo um índice de nums e o "b" da 
//mesma forma, na linha130 vamos colocar um bloco associado ao laço mais interno e aqui dentro vamos fazer um teste: se "a" igual a dois e "b" igual a 3 p/chamar o break; só que
//nesse caso(linha131)o break a ser chamado é o do for mais interno(linha130)porque ele está associado ao laço mais próximo dele e se quiser um externo, aí tem que rotular conf.
//linha131, escrevendo externo depois de break na linha 129, então executando, retorna conf.linhas 150 a 172.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue 
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\controle - seção 4\tempCodeRunnerFile.js"
//0 = 1
//1 = 2
//2 = 3
//3 = 4
//4 = 5
//0 = 1
//1 = 2
//2 = 3
//3 = 4
//4 = 5
//6 = 7
//7 = 8
//8 = 9
//9 = 10
//Par = 0,0
//Par = 0,1
//Par = 0,2
//Par = 0,3
//Par = 0,4
//Par = 0,5
//Par = 0,6
//Par = 0,7
//Par = 0,8
//Par = 0,9
//Par = 1,0
//Par = 1,1
//Par = 1,2
//Par = 1,3
//Par = 1,4
//Par = 1,5
//Par = 1,6
//Par = 1,7
//Par = 1,8
//Par = 1,9
//Par = 2,0
//Par = 2,1
//Par = 2,2
//
//[Done] exited with code=0 in 0.533 seconds
//Então qdo.ele encontrou o par 2,3 if(a == 2 && b == 3)ele achou o break e saiu p/ depois do laço.