// 14/04/2021: 23.Tipos em JavaScript: Boolean
// let isAtivo = false         ou seja: variável let é ativo e recebe o literal: falso.(linha 14), linha 15 imprime false.
// Temos tbm o literal true(verdadeiro) - linha 18 imprime: true.
// Obs.: o LET sempre é usado para alterar variável, isso é um padrão no código, sempre priorizar constantes ao invés de variáveis.

// Linha18 e linha 19: O JS aceita true e false como valores booleanos, mas o JS tbm aceita nºs conf.linha21, p/ex: 1 como vr booleano, então p/imprimir no console esse valor 1, se
// colocarmos isAtivo = 1 ele vai imprimir o valor do console ref.a variável da linha 21, onde o resultado é 1 e não é um valor booleano, na verdade é um vr.numérico (Number), para 
// resolver isso: podemos usar a NEGAÇÃO(que seria a exclamação !, ou seja, siginifica o NOT=negação lógica, p/ex.: se temos um vr.verdadeiro e colocamos uma negação na frente,
// ou seja, uma exclamação ! isso vira um não verdadeiro, ou seja: FALSO; e se colocamos DUAS NEGAÇÔES !! siginifica que volta p/o vr.original anterior, ou seja, se colocamos NÃO NÃO 
// alguma coisa do ponto de vista da lógica: ele volta a ser a coisa original, portanto uma negação duas vezes acaba gerando a anulação da 1ª negação tornando  então verdadeiro );
// então: vamos colocar console.log(!!isAtivo) para que a impressão da linha22 retorne true(verdadeiro), portanto o 1 representa um resultado verdadeiro; e se caso colocássemos só
// uma negação ele inverteria a lógica: imprimindo resultado false(falso). Se colocássemos o literal true na linha 28: o não true retorna: false; e na linha 31 que é o não falso 
// retorna: true(verdadeiro); na linha 34 colocando duas vezes a negação: o não não é true e na linha 37: o não não é falso.

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

isAtivo = 1
console.log(!isAtivo)

isAtivo = 1
console.log(!true)

isAtivo = 1
console.log(!ifalse)

isAtivo = 1
console.log(!!true)

isAtivo = 1
console.log(!!false)

// Linha 43: Agora vamos ver o tipos que são verdadeiros, situações no qual que estamos trabalhando com um tipo que não é verdadeiro ou falso, mas no contexto que é requerido um 
// verdadeiro ou falso ele vai se comportar como verdadeiro, onde na linha 44 imprime verdadeiro, na linha 45 tbm imprime verdadeiro; portanto todos os nºs inteiros são verdadeiros,
// com exceção do ZERO(0).

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)

// Linha 50: NOT NOT !! com espaço vazio ou com algum texto trata-se de verdadeiro; ao rodar a sintaxe: retorna true; na linha 51 c/ ARRAY tbm retorna true; na linha 52 ref.a um objeto
// literal tbm retorna true, linha53 idem true e qdo.estamos numa situação de atribuição linha 54 onde temos isAtivo = (que recebe o vr.true): o resultado dessa atribuição ref. ao vr.
// true escrito após o igual atribuído à variável e se ele for um vr resolvido p/verdadeiro: o resultado vai dar verdadeiro, se colocarmos Infinity, 33 retorna true, se for 0 é false.
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Linha 61: Agora vamos ver o tipos que são falsos, na linha 62 retorna uma afirmação !! onde o ZERO é falso, linha 63: String Vazia tbm retorna falso, p/ex: se estamos numa situação
// em que queremos testar se o nome está preeenchido ou não, podemos simplesmente passar a string se caso estiver vazia é falso ou se estiver com alguma coisa preenchida: é verdadeiro
// mesmo que seja só um espaço em branco: vai ser verdadeiro. Linha 64: Existe em JS o conceito de null que tbm resolve p/ false, linha 65: Existe tbm o conceito de NOT A NUMBER (NaN)
// que tbm retorna false, na linha 66: conceito de undefined que tbm retorna false. Na linha 67 vai usar o mesmo conceito das linhas 48 e 49, porém aqui retorna: false.

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!underfined)
console.log(!!(isAtivo = false))

// Linha 78: Conceito de uma expressão lógica com relação ao OU (||), onde podemos usar uma string vazia ou ||, um null (nulo) ou ||, Zero(0) ou ||, ou uma string com 1 caractere: o 
// resultado dessa operação é verdadeiro(true), porque um dos conceitos tem que ser verdadeiro, então: '' é falso, null é falso, o ZERO(0) é falso e a ' ' string c/1 caracter é true.
// o OU(||)serve muito p/dar um vr.padrão p/1 determinada variável; p/ex.: linha 80 temos uma variável nome que recebe uma string vazia e queremos que retorne o nome ou caso o nome 
// não esteja preenchido: queremos que retorne 'Desconhecido', qdo.rodamos a sintaxe linha 81: retorna Desconhecido, porque o nome deu falso na 1ª expressão e no OU da 2ª expressão 
// retornou verdadeiro, na linha 83 se colocarmos Lucas: ele retorna Lucas. Essa é uma forma caraterística do JS de termos um vr.padrão de uma determinada variável com operação lógica 
// em cima de uma string com resolução em true e false, abrindo margem p/fazer estruturas mostradas nessa aula, por ex.: caso uma informação não esteja válida, use a outra informação
// como um valor padrão: nome || 'Desconhecido', se não retornar um(nome), retorna o outro('Desconhecido').

console.log('pra finalizar...')
console.log(!!(' '|| null || 0 || ''))

let nome = ''
console.log(nome || 'Desconhecido')

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
