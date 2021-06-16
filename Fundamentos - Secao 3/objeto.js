//15/04/2021: 26.Tipos em JavaScript: Object

//JavaScript é uma linguagem multi paradigma, onde podemos programá-la por procedural, uol, funcional, etc. Nesta aula vamos falar s/Objeto criando de uma forma literal. Existe um 
//termo chamado JSON-JavaScript Object Notation, um objeto em JS não é a mesma coisa que JSON=é um formato textual lembrando muito um objeto em JS na sua criação.
const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
console.log(prod1)
prod1['Desconto Legal'] = 0.40
//Com um objeto vazio podemos:
//Linha5: constante prod1 recebe um par de chaves, ou seja, um par de chaves representa uma forma literal de Objeto(Vazio), da mesma forma se fosse colchetes: seria um Array, em JS
//podemos criar objeto e definir como ele é, quais são os atributos, comportamento, e suas funções dinamicamente, então: podemos colocar prod1.nome = "Celular Ultra Mega" conf.linha6,
//então podemos pensar: Foi criado um objeto, não foi dito que o mesmo tem nome, e simplesmente foi batizado de prod1.nome = "Celular Ultra Mega", esse nome veio de onde?R.: Esse nome
//foi criado dinamicamente dentro de objeto;e o que é um objeto?R.:Objeto em JavaScript é uma coleção de pares de Chave e Valor, onde temos o nome do atributo(ou seja: o nome do 
//identificador e em seguida passamos um valor p/ele:que pode ser um texto, um nº, um boolean, podendo ser inclusive uma função; mas sempre um objeto é uma coleção de chaves e valores.
//Um objeto pode ter 1 outro objeto dentro dele?R.:Sim,pode, p/ex: 1produto e dentro do produto pode-se ter um objeto chamado categorias e lá dentro ter o nome, id da categoria, 
//se vende muito ou não; portanto na linha5 estamos dizendo que criamos um objeto vazio e na linha6 estamos dizendo que dentro desse objeto vai uma chave com identenficador chamado
//nome e o valor vai ser "Celular Ultra Mega"; na linha7: tbm.dinamicamente criando preço c/vr.de R$ 4.998,90, onde podemos imprimir no console conf.linha8 = ctrl+alt+n, onde retorna:
//Podemos usar nomes de identificadores c/espaço conf.linha9 e c/vr.de 40%de desconto: onde imprime:'Desconto Legal': 0.4; Obs:NÃO É ACONSELHÁVEL USAR ATRIBUTOS C/ESPAÇO.
//O profissional possui uma flexibilidade incrível de criar objetos, sem burocracia, usando a CRIATIVIDADE.
//Continuando:Existe uma outra forma de criar produto2 usando a notação literal criando chave e valor dentro da própria declaração do objeto conf.linha23 e linha27=imprime resultado:
//{ nome: 'Camisa Polo', preco: 79.9 }; nas linhas32 à 38: temos obj.c/1 vr.e dentro de obj.temos outro c/ outro vr. caracterizando ser um identificador único.
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
console.log(prod2)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(prod2)

//Um JSON seria conf.linha 43, onde tem um string antes da chave, os identificadores com aspas duplas-exceto o valor, conf.browser: http://jsonlint.com = no ítem json validator
//onde digitamos a linha43 no painel e mandar Validate JSON = Results: Valid JSON; então JSON não é a mesma coisa que OBJETO, JSON é um formato TEXTUAL.
'{"nome": "Camisa Polo", "preco": 79.90}'