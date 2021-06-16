//28/04/2021: 47. Operadores: Aritméticos 

//Nesta aula vamos falar sobre os operadores aritméticos, assunto abordado na aula 42.Operadores: Atribuição(Aditiva, Subtrativa, Multiplicativa, Divisiva e Modular(%)).
//É muito comum trabalharmos com operações aritméticas dentro dos sistemas e é de fundamental importância o conhecimento sobre o assunto.
//Os operadores são classificados em aritméticos, de atribuição, relacionais, lógicos e tbm.pode ser classificado a partir da quantidade de operandos. Os operadores aritméticos 
//são operadores binários, ou seja, operam em cima de dois operandos.   
//Vamos criar uma constante usando um operador destructuring[a, b, c, d]onde recebe a atribuição em array[3, 5 , 1, 15]sendo respectivamente 3 p/"a", 5 p/"b", 1 p/"c", e 15 p/"d"
//sendo uma forma reduzida de se criar 4 variáveis conf.linha 18 e vamos fazer algumas operações conf.linha 20(sempre operações binárias, ou seja, uma soma); é uma operação que é 
//feita no modos operandi de a+b, depois o resultado de a+b soma-se ao "c" e esse resultado soma-se ao "d" sempre tendo dois operandos em cada um desses operadores(a+b+c+d) sendo
//uma sintaxe conhecida como INFIX(qdo.temos p/ex.: um operando e um operador do tipo d++ é conhecido como POSTFIX, que fica depois do operando, temos o PRÉFIXADO que é ++d que vem
//antes do operando e temos INFIX qdo.temos operando 1 mais operando2(op1 + op2), ou seja, ficando entre os dois(+)onde temos o operador op1 e op2 com uma sintaxe em FIX(+)entre 
//eles, por isso que é um operador binário); se tivérmos uma variável "a" p/ex. e queremos torná-la negativa "-a " isso é um operador UNÁRIO, ou seja, é um operador que opera em 
//cima de um único operando; qdo.temos as operações padrões aritméticas que conhecemos, são as operações que envolvem dois operadores, ou seja, operações binárias.
//Por mais que tenhamos várias operações numa mesma expressão, ele vai operando e seguindo uma ordem de precedência igual na matemática, inclusive se colocarmos parêntesis, os mesmos
//tem preferência; resolve-se primeiro o que está dentro do parêntesis e depois vai resolvendo o que está fora.
//Continuando a sintaxe: a próxima operação é criar uma constante chamada subtração que recebe d menos b, em seguida uma multiplicação que recebe a vezes b, depois uma divisão que
//recebe d dividido por a e finalmente temos a operação de módulo que é o resto da divisão que recebe a % 2; imprimindo no console, temos:
const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d /a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//24 10 15 5 1
//
//[Done] exited with code=0 in 0.799 seconds

//Podemos aplicar tbm. o conceito de valor unário colocando um sinal de menos em frente da palavra divisão conf.linha 41, onde vai retornar o valor da divisão como -5(linha 43):
const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d /a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, -divisao, modulo)
//[Running] node "c:\Users\Ricardo Lima\Desktop\Documentos Pessoais\exercicios-js\fundamentos\tempCodeRunnerFile.js"
//24 10 15 -5 1
//
//[Done] exited with code=0 in 0.539 seconds